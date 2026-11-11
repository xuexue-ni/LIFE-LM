/* engine.js — LIFE+ 生命圖紋共用演算（純函式，不碰 DOM）
 * 來源：assets/js/code-data.js 的干支演算；matrix.html 暫維持原檔。
 * 對外只露 window.LifeEngine，避免與 code-data.js 的全域常數衝突。
 */
(function (root) {
  'use strict';

  const TG = ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];
  const DZ = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
  const TGE = ['木','木','火','火','土','土','金','金','水','水'];
  const DZE = ['水','土','木','木','土','火','火','土','金','金','土','水'];
  const ELEMS = ['木','火','土','金','水'];

  // 色彩：主色 / 深底 / 亮字 / 粉調（同 code-data.js）
  const EC = {木:'#6DB85A',火:'#E05545',土:'#C49A6C',金:'#A8AEAA',水:'#5580CC'};
  const EB = {木:'#0E1A0A',火:'#1A0A08',土:'#1A1208',金:'#141414',水:'#080E1A'};
  const ET = {木:'#8DD870',火:'#F07060',土:'#D4A870',金:'#C8CECC',水:'#6898E0'};
  const EP = {木:'#4A7A38',火:'#C03828',土:'#8C6840',金:'#787E7A',水:'#304E8A'};

  // 對外文案（不談命理）
  const TONE = {
    木:{name:'翠綠生命力', colors:'翠綠 · 橄欖 · 嫩芽', line:'向上生長，有機線條，空間有呼吸感'},
    火:{name:'朱紅熱情光', colors:'朱紅 · 暖橙 · 玫瑰金', line:'中心放射，光暈聚焦，熱烈而清晰'},
    土:{name:'大地承載感', colors:'赭石 · 沙漠米 · 象牙', line:'重心沉穩，均衡包覆，有歸屬感'},
    金:{name:'銀白精準力', colors:'銀白 · 霧灰 · 珍珠', line:'圓弧幾何，大面積留白，收斂純粹'},
    水:{name:'深藍流動感', colors:'深藍 · 靛青 · 月光', line:'波形層疊，由下而上，流動而深邃'}
  };

  // ── 干支演算（自 code-data.js 抽出）──
  function julianDay(y, m, d) {
    if (m <= 2) { y -= 1; m += 12; }
    const A = Math.floor(y / 100), B = 2 - A + Math.floor(A / 4);
    return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + d + B - 1524.5;
  }
  function pillar(ti, di) {
    return { tg: TG[ti], dz: DZ[di], tE: TGE[ti], dE: DZE[di], ti, di };
  }
  function dayPillar(y, m, d, hIdx) {
    if (hIdx === 23) {
      const n = new Date(y, m - 1, d + 1);
      y = n.getFullYear(); m = n.getMonth() + 1; d = n.getDate();
    }
    const gz = Math.floor(julianDay(y, m, d) + 0.5 + 49) % 60;
    return pillar((gz % 10 + 10) % 10, (gz % 12 + 12) % 12);
  }
  function yearMonthPillar(y, m, d) {
    const term = [5, 4, 5, 4, 5, 5, 7, 7, 7, 8, 7, 7];
    const by = (m < 2 || (m === 2 && d < term[1])) ? y - 1 : y;
    const yg = (by - 4) % 60;
    const yTi = (yg % 10 + 10) % 10, yDi = (yg % 12 + 12) % 12;
    const sm = d < term[m - 1] ? (m - 2 + 12) % 12 : m - 1;
    const mDi = (sm + 1) % 12;
    const mTi = ((yTi % 5) * 2 + 2 + (mDi - 2 + 12) % 12) % 10;
    return { Y: pillar(yTi, yDi), M: pillar(mTi, mDi) };
  }
  function hourPillar(dayTi, hIdx) {
    const zi = Math.floor((hIdx + 1) / 2) % 12;
    return pillar(((dayTi % 5) * 2 + zi) % 10, zi);
  }

  /** 日期 → 四柱與五行分布。hIdx 可為 null（不知時辰則只算三柱） */
  function compute(y, m, d, hIdx) {
    const { Y, M } = yearMonthPillar(y, m, d);
    const D = dayPillar(y, m, d, hIdx == null ? 0 : hIdx);
    const pillars = [Y, M, D];
    if (hIdx != null) pillars.push(hourPillar(D.ti, hIdx));
    return fromPillars(pillars);
  }
  function fromPillars(pillars) {
    const e = {木:0,火:0,土:0,金:0,水:0};
    pillars.forEach(p => { e[p.tE]++; e[p.dE]++; });
    const sorted = Object.entries(e).sort((a, b) => b[1] - a[1]);
    return {
      pillars, elems: e,
      dom: sorted[0][0],                 // 主色
      sub: sorted[1][0],                 // 輔色
      mis: sorted[sorted.length - 1][0]  // 療癒色
    };
  }
  /** 無日期時：由種子產生（仍可重現） */
  function fromSeed(seed) {
    const r = rng(seed), ps = [];
    for (let i = 0; i < 4; i++) ps.push(pillar(Math.floor(r() * 10), Math.floor(r() * 12)));
    return fromPillars(ps);
  }

  // ── 種子／短碼 ──
  function hash(str) { // FNV-1a 32bit
    let h = 0x811c9dc5;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 0x01000193); }
    return h >>> 0;
  }
  function rng(seed) { // mulberry32
    let a = seed >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  const B32 = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ'; // 去除易混淆 0O1I
  const TARGET_CH = { elder: 'E', pet: 'P', self: 'S' };
  const CH_TARGET = { E: 'elder', P: 'pet', S: 'self' };

  /** 短碼：L + 對象字元 + 4 碼，例 LE8K2Q */
  function shortCode(input) {
    let h = hash(JSON.stringify(input)), s = '';
    for (let i = 0; i < 4; i++) { s += B32[h % 32]; h = Math.floor(h / 32); }
    return 'L' + (TARGET_CH[input.target] || 'S') + s;
  }
  function targetOf(code) { return CH_TARGET[(code || '')[1]] || 'self'; }

  /** 原型用 token（正式版改由後台簽發） */
  const SALT = 'lifeplus-proto';
  function token(code) { return hash(code + '|' + SALT).toString(36).padStart(7, '0').slice(0, 7); }
  function verify(code, tk) { return !!code && token(code) === tk; }

  // ── 圖紋繪製（MVP 程式繪製，之後換 AI）──
  function hexA(hex, a) {
    const n = parseInt(hex.slice(1), 16);
    return `rgba(${n >> 16},${(n >> 8) & 255},${n & 255},${a})`;
  }
  function motif(ctx, el, s) { // 以 (0,0) 為基點、向 -y 延伸的單元
    ctx.beginPath();
    switch (el) {
      case '木': ctx.moveTo(0, 0); ctx.quadraticCurveTo(s * .45, -s * .5, 0, -s); ctx.quadraticCurveTo(-s * .45, -s * .5, 0, 0); break;
      case '火': ctx.moveTo(-s * .28, 0); ctx.lineTo(0, -s); ctx.lineTo(s * .28, 0); ctx.closePath(); break;
      case '土': ctx.rect(-s * .22, -s * .7, s * .44, s * .44); break;
      case '金': ctx.arc(0, -s * .5, s * .26, 0, Math.PI * 2); break;
      case '水':
        ctx.moveTo(0, 0);
        for (let i = 1; i <= 8; i++) ctx.lineTo(Math.sin(i * .9) * s * .16, -s * i / 8);
        break;
    }
  }
  /** 在 ctx 上畫出完整圖紋（size×size） */
  function draw(ctx, size, res, seed) {
    const r = rng(seed), c = size / 2;
    const pal = [res.dom, res.sub, res.mis];
    ctx.save();
    // 底色
    const bg = ctx.createRadialGradient(c, c, 0, c, c, c * 1.1);
    bg.addColorStop(0, hexA(EP[res.dom], .55));
    bg.addColorStop(.55, EB[res.dom]);
    bg.addColorStop(1, '#050508');
    ctx.fillStyle = bg; ctx.fillRect(0, 0, size, size);
    // 光暈
    for (let i = 0; i < 3; i++) {
      const x = c + (r() - .5) * size * .5, y = c + (r() - .5) * size * .5, rad = size * (.25 + r() * .25);
      const g = ctx.createRadialGradient(x, y, 0, x, y, rad);
      g.addColorStop(0, hexA(EC[pal[i]], .22)); g.addColorStop(1, hexA(EC[pal[i]], 0));
      ctx.fillStyle = g; ctx.fillRect(0, 0, size, size);
    }
    ctx.translate(c, c);
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    // 每一柱一圈：瓣數、形狀、顏色由該柱決定
    const rings = res.pillars.length;
    res.pillars.forEach((p, k) => {
      const n = 6 + ((p.ti + p.di) % 4) * 2;
      const rad = size * (.1 + .095 * (rings - k));
      const len = size * (.07 + .025 * (k % 2) + r() * .03);
      const rot = r() * Math.PI;
      const col = EC[k % 2 ? p.dE : p.tE];
      ctx.strokeStyle = hexA(col, .85); ctx.fillStyle = hexA(col, .16);
      ctx.lineWidth = Math.max(1, size / 420);
      // 圈線
      ctx.beginPath(); ctx.arc(0, 0, rad, 0, Math.PI * 2); ctx.strokeStyle = hexA(col, .25); ctx.stroke();
      ctx.strokeStyle = hexA(col, .85);
      for (let i = 0; i < n; i++) {
        ctx.save();
        ctx.rotate(rot + i * Math.PI * 2 / n);
        ctx.translate(0, -rad + len * .5);
        motif(ctx, k % 2 ? p.dE : p.tE, len);
        ctx.fill(); ctx.stroke();
        ctx.restore();
      }
    });
    // 外圈細點（療癒色）
    const dots = 48 + Math.floor(r() * 24);
    ctx.fillStyle = hexA(ET[res.mis], .7);
    for (let i = 0; i < dots; i++) {
      const a = i * Math.PI * 2 / dots, rr = size * (.44 + Math.sin(i * 1.7) * .01);
      ctx.beginPath(); ctx.arc(Math.cos(a) * rr, Math.sin(a) * rr, size / 380, 0, Math.PI * 2); ctx.fill();
    }
    // 中心
    const cg = ctx.createRadialGradient(0, 0, 0, 0, 0, size * .07);
    cg.addColorStop(0, '#fff'); cg.addColorStop(.35, hexA(ET[res.dom], .9)); cg.addColorStop(1, hexA(ET[res.dom], 0));
    ctx.fillStyle = cg; ctx.beginPath(); ctx.arc(0, 0, size * .07, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }

  root.LifeEngine = {
    TG, DZ, ELEMS, EC, EB, ET, EP, TONE,
    compute, fromSeed, hash, rng, shortCode, targetOf, token, verify, draw
  };
})(window);
