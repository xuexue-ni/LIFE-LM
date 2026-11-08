(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var COLORS = window.EMOTION_COLORS;
  var id = new URLSearchParams(location.search).get('id') || 'a';
  var story = window.MOCK_STORIES[id] || window.MOCK_STORIES.a;
  var STORE_KEY = 'lifeplus.storyColor.' + story.id;

  // ---------- 色彩 ----------
  function findColor(key) { return COLORS.find(function (c) { return c.key === key; }) || COLORS[0]; }

  function applyColor(key, animate) {
    var c = findColor(key), a = c.dim ? 0.22 : 0.55, s = document.documentElement.style;
    s.setProperty('--hi', c.hi);
    s.setProperty('--base', c.base);
    s.setProperty('--lo', c.lo);
    s.setProperty('--glow', 'rgba(' + c.rgb + ',' + a + ')');
    s.setProperty('--glow2', 'rgba(' + c.rgb + ',' + (a / 2.5) + ')');
    s.setProperty('--aura', 'rgba(' + c.rgb + ',' + (c.dim ? 0.08 : 0.2) + ')');
    s.setProperty('--rim', c.rim || 'transparent');
    $('orbWord').textContent = c.word;
    $('sheetNow').textContent = c.word;
    $('orb').setAttribute('aria-label', '記憶球：' + c.word);
    $('chips').querySelectorAll('.chip').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.key === key));
    });
    if (animate) {
      var orb = $('orb');
      orb.classList.remove('pulse'); void orb.offsetWidth; orb.classList.add('pulse');
    }
    story.color = key;
  }

  function setColor(key) {
    applyColor(key, true);
    try { localStorage.setItem(STORE_KEY, key); } catch (e) {}
    // TODO 接後台：PATCH /stories/:id { color }
  }

  function buildChips() {
    var box = $('chips');
    COLORS.forEach(function (c) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'chip'; b.dataset.key = c.key;
      b.setAttribute('aria-label', c.btn);
      b.innerHTML = '<span class="chip-ring"><span class="chip-ball"></span></span><span class="chip-label"></span>';
      var ball = b.querySelector('.chip-ball');
      ball.style.background = 'radial-gradient(circle at 34% 28%,' + c.hi + ' 0%,' + c.base + ' 50%,' + c.lo + ' 100%)';
      ball.style.border = '1px solid ' + (c.rim || 'transparent');
      b.querySelector('.chip-label').textContent = c.btn;
      b.addEventListener('click', function () { setColor(c.key); });
      box.appendChild(b);
    });
  }

  // ---------- 面板 ----------
  var lastFocus = null;
  function openSheet() {
    lastFocus = document.activeElement;
    $('sheet').hidden = false;
    var sel = $('chips').querySelector('[aria-pressed="true"]');
    (sel || $('closeSheet')).focus();
  }
  function closeSheet() {
    $('sheet').hidden = true;
    if (lastFocus) lastFocus.focus();
  }

  // ---------- 播放器 ----------
  var BARS = 40, bars = [], playing = false, cur = 0, dur = 0, timer = null, last = 0;
  var audio = $('audio');

  function fmt(t) {
    t = Math.max(0, Math.floor(t));
    return String(Math.floor(t / 60)).padStart(2, '0') + ':' + String(t % 60).padStart(2, '0');
  }

  function render() {
    var p = dur ? cur / dur : 0;
    bars.forEach(function (el, i) { el.classList.toggle('on', i / BARS < p); });
    $('tNow').textContent = fmt(cur);
    $('wave').setAttribute('aria-valuenow', Math.round(p * 100));
  }

  function setPlaying(v) {
    playing = v;
    $('player').classList.toggle('playing', v);
    $('playBtn').setAttribute('aria-label', v ? '暫停' : '播放原音');
  }

  function tick(now) {
    if (!playing) return;
    cur = Math.min(dur, cur + (now - last) / 1000);
    last = now;
    render();
    if (cur >= dur) { setPlaying(false); cur = 0; render(); return; }
    timer = requestAnimationFrame(tick);
  }

  function toggle() {
    if (audio.src) { audio.paused ? audio.play() : audio.pause(); return; }
    // 模擬播放
    if (playing) { setPlaying(false); cancelAnimationFrame(timer); return; }
    setPlaying(true); last = performance.now(); timer = requestAnimationFrame(tick);
  }

  function seek(p) {
    cur = Math.max(0, Math.min(1, p)) * dur;
    if (audio.src) audio.currentTime = cur;
    render();
  }

  function initPlayer() {
    if (!story.audio) return;
    $('player').hidden = false;
    dur = story.audio.duration || 0;
    var wave = $('wave');
    var peaks = story.audio.peaks;
    for (var i = 0; i < BARS; i++) {
      var h = peaks ? 6 + peaks[i] * 26 : 6 + Math.round(Math.abs(Math.sin(i * 0.9) * 14 + Math.sin(i * 0.37) * 10));
      var s = document.createElement('span');
      s.style.height = Math.min(h, 32) + 'px';
      wave.appendChild(s); bars.push(s);
    }
    $('tTotal').textContent = fmt(dur);

    if (story.audio.src) {
      audio.src = story.audio.src;
      audio.addEventListener('loadedmetadata', function () { dur = audio.duration; $('tTotal').textContent = fmt(dur); });
      audio.addEventListener('timeupdate', function () { cur = audio.currentTime; render(); });
      audio.addEventListener('play', function () { setPlaying(true); });
      audio.addEventListener('pause', function () { setPlaying(false); });
      audio.addEventListener('ended', function () { setPlaying(false); cur = 0; render(); });
    }

    $('playBtn').addEventListener('click', toggle);
    wave.addEventListener('pointerdown', function (e) {
      var r = wave.getBoundingClientRect();
      seek((e.clientX - r.left) / r.width);
    });
    wave.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') seek((cur + 5) / dur);
      if (e.key === 'ArrowLeft') seek((cur - 5) / dur);
    });
    render();
  }

  // ---------- 照片 ----------
  function initPhotos() {
    var list = story.photos || [];
    if (!list.length) return;
    $('photos').hidden = false;
    var track = $('track'), dots = $('dots');
    list.slice(0, 3).forEach(function (src, i) {
      var img = document.createElement('img');
      img.src = src; img.alt = story.title + '－照片 ' + (i + 1);
      img.loading = i ? 'lazy' : 'eager'; img.draggable = false;
      track.appendChild(img);
      dots.appendChild(document.createElement('span'));
    });
    var n = track.children.length;
    var single = n < 2;
    $('prev').hidden = single; $('next').hidden = single; dots.hidden = single;

    function idx() { return Math.round(track.scrollLeft / track.clientWidth); }
    function go(i) { track.scrollTo({ left: ((i + n) % n) * track.clientWidth }); }
    function sync() {
      var k = idx();
      Array.prototype.forEach.call(dots.children, function (d, i) { d.classList.toggle('on', i === k); });
    }
    track.addEventListener('scroll', function () { requestAnimationFrame(sync); }, { passive: true });
    $('prev').addEventListener('click', function () { go(idx() - 1); });
    $('next').addEventListener('click', function () { go(idx() + 1); });
    sync();
  }

  // ---------- 文字 ----------
  function initText() {
    var p = $('text'), btn = $('expand');
    p.textContent = story.text || '';
    p.classList.add('clamp');
    requestAnimationFrame(function () {
      if (p.scrollHeight <= p.clientHeight + 2) { p.classList.remove('clamp'); return; }
      btn.hidden = false;
      btn.addEventListener('click', function () {
        var open = p.classList.toggle('clamp') === false;
        btn.textContent = open ? '收合' : '… 展開全文';
        btn.setAttribute('aria-expanded', String(open));
      });
      btn.setAttribute('aria-expanded', 'false');
    });
  }

  // ---------- 初始化 ----------
  function init() {
    document.title = story.title + '｜LIFE+ 故事卡';
    $('title').textContent = story.title;
    $('orbDate').textContent = (story.date || '').replace(/-/g, '.');
    buildChips();
    var saved = null;
    try { saved = localStorage.getItem(STORE_KEY); } catch (e) {}
    applyColor(saved || story.color || 'yellow', false);
    initPlayer();
    initPhotos();
    initText();

    $('openSheet').addEventListener('click', openSheet);
    $('closeSheet').addEventListener('click', closeSheet);
    $('sheet').addEventListener('click', function (e) { if (e.target === this) closeSheet(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !$('sheet').hidden) closeSheet(); });
    $('close').addEventListener('click', function () {
      if (history.length > 1) history.back(); else location.href = '../';
    });
  }

  init();
})();
