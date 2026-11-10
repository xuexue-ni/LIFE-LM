// price.html 系列輪播：資料改這裡即可
(function () {
  const SERIES = [
    { name: '時光冊', key: 'p1', desc: '〈數位〉個人專屬故事網頁 ／〈實體〉精裝書' },
    { name: '光軌', key: 'p2', desc: '融入居家空間的質感陪伴：掛畫、擺件、常用周邊' },
    { name: '我在', key: 'p3', desc: '毛孩與摯愛的身影：公仔、擺件、影像／音頻典藏' },
    { name: '生命樹', key: 'p4', desc: '家族脈絡的視覺化：掛畫、塑像、各式材質擺件' }
  ];
  const root = document.getElementById('series');
  if (!root) return;
  const tabs = root.querySelector('.series-tabs');
  const track = root.querySelector('.series-track');
  const dots = root.querySelector('.series-dots');
  const desc = root.querySelector('.series-desc');
  let cur = 0, timer;

  const idx = () => Math.round(track.scrollLeft / track.clientWidth);
  const go = i => { const n = track.children.length; track.scrollTo({ left: ((i + n) % n) * track.clientWidth }); };
  const syncDots = () => [...dots.children].forEach((d, i) => d.classList.toggle('active', i === idx()));

  function load(s) {
    cur = s;
    const { name, key, desc: d } = SERIES[s];
    track.innerHTML = [1, 2, 3].map(n => `<img src="assets/images/${key}-${n}.jpg" alt="${name} ${n}" loading="lazy">`).join('');
    dots.innerHTML = '<span></span>'.repeat(3);
    desc.textContent = d;
    track.scrollLeft = 0;
    [...tabs.children].forEach((t, i) => t.classList.toggle('active', i === s));
    syncDots();
  }

  tabs.innerHTML = SERIES.map(s => `<button class="series-tab" type="button">${s.name}</button>`).join('');
  [...tabs.children].forEach((t, i) => t.onclick = () => load(i));
  root.querySelector('.prev').onclick = () => go(idx() - 1);
  root.querySelector('.next').onclick = () => go(idx() + 1);
  track.addEventListener('scroll', syncDots, { passive: true });

  // 自動輪播：滑到最後一張就換下一個系列；hover / 觸控時暫停
  const tick = () => idx() >= track.children.length - 1 ? load((cur + 1) % SERIES.length) : go(idx() + 1);
  const start = () => { stop(); timer = setInterval(tick, 4000); };
  const stop = () => clearInterval(timer);
  ['mouseenter', 'touchstart'].forEach(e => root.addEventListener(e, stop, { passive: true }));
  root.addEventListener('mouseleave', start);

  load(0);
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) start();
})();
