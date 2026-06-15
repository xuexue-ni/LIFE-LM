/**玄學解碼演算**/
const TG=['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];
const DZ=['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
const TGE=['木','木','火','火','土','土','金','金','水','水'];
const DZE=['水','土','木','木','土','火','火','土','金','金','土','水'];
const EC={木:'#6DB85A',火:'#E05545',土:'#C49A6C',金:'#A8AEAA',水:'#5580CC'};
const EB={木:'#0E1A0A',火:'#1A0A08',土:'#1A1208',金:'#141414',水:'#080E1A'};
const ET={木:'#8DD870',火:'#F07060',土:'#D4A870',金:'#C8CECC',水:'#6898E0'};
const EP={木:'#4A7A38',火:'#C03828',土:'#8C6840',金:'#d2dba9',水:'#304E8A'};

const traitData={
  木:{title:'翠綠生命力',trait:'充滿生長能量，有規劃力與仁慈心，但有時難以放手過去',fate:'命運中常有新的萌芽與開始，適合創業與教癒領域深耕',color:'翠綠 · 橄欖 · 嫩芽'},
  火:{title:'朱紅熱情光',trait:'熱情外放，有表達欲與領導魅力，內心燃燒著一種使命感',fate:'命運中多貴人與舞台，需學會收斂與持續的耐心',color:'朱紅 · 暖橙 · 玫瑰金'},
  土:{title:'大地承載感',trait:'穩重包容，信義深厚，是身邊人無形中依靠的定海神針',fate:'命運中主穩定累積，晚運通常豐厚，重視根基與家族',color:'赭石 · 沙漠米 · 象牙'},
  金:{title:'銀白精準力',trait:'決斷力強，自律嚴謹，追求極致與完美，有時過於苛求自己',fate:'命運中有精英特質，適合專業領域深耕，需學習柔軟',color:'鉑金白 · 銀灰 · 香檳金'},
  水:{title:'深靛智慧流',trait:'直覺敏銳，內斂深沉，有洞察力，思維深邃但容易想太多',fate:'命運中多內在轉化，靈性覺知高，適合創作與研究',color:'深靛 · 墨藍 · 夜空'}
};

const ziweiMap=[
  {name:'紫微星',glyph:'紫',trait:'你的命盤帶有皇者氣場，天生具有精神領袖的磁場，身邊的人不自覺以你為中心。你對自己要求極高，常常是最後一個放棄的人。'},
  {name:'天機星',glyph:'機',trait:'你的思維轉速比多數人快一個節拍，靈動而細膩，善於發現他人看不見的連結與機緣。你的人生因思考而精彩，也因思考而複雜。'},
  {name:'太陽星',glyph:'陽',trait:'你天生是給予者，像太陽一樣溫暖周圍的人，但有時忘了照亮自己。你的存在對家人與伙伴是一種穩定的光源。'},
  {name:'武曲星',glyph:'武',trait:'你有一種靜水流深的剛毅，不需要大聲，但行動力驚人。對於自己認定的事，有一種不達目標不罷休的韌性。'},
  {name:'天同星',glyph:'同',trait:'你帶著一種圓融的快樂能量，是人群中的潤滑劑。你的人生課題是在給予他人歡樂的同時，也允許自己感受悲傷。'},
  {name:'廉貞星',glyph:'廉',trait:'你有極強的自我標準與美學品味，生活細節的要求超越常人。你的內心世界豐富而複雜，需要被真正理解的人才能靠近你。'},
  {name:'天府星',glyph:'府',trait:'你是承載者，有厚重的底蘊與包容力。人們在你身邊感到安全，因為你本能地知道如何守護與穩固一切。'},
  {name:'太陰星',glyph:'陰',trait:'你的感知比普通人細膩幾倍，月亮般的你能感受到他人感受不到的情緒層次。這是你的天賦，也是你的敏感之處。'},
  {name:'貪狼星',glyph:'狼',trait:'你有多元的面向與強烈的感官慾望，生命對你來說是一場豐盛的體驗。你的魅力在於永遠有一種讓人看不透的神秘感。'},
  {name:'巨門星',glyph:'門',trait:'語言是你的武器與橋樑，你能說到人心裡去，也能說到人心裡痛。你的人生在溝通中展開，需要找到表達的智慧。'},
  {name:'天相星',glyph:'相',trait:'你有天生的秩序感與禮儀美感，是典雅與平和的代名詞。你用溫和的方式維持著身邊一切的平衡與美好。'},
  {name:'天梁星',glyph:'梁',trait:'你是老靈魂，天生帶著一種慈悲的長者氣質。你常常是身邊人的精神支柱，守護著那些比你脆弱的人。'},
  {name:'七殺星',glyph:'殺',trait:'你有一種橫掃一切的執行力，目標一旦確定便無懼阻礙。你的人生充滿轉折與衝鋒，在挑戰中找到最真實的自己。'},
  {name:'破軍星',glyph:'破',trait:'你是打破者與重建者，舊的東西在你手裡必然走向革新。你的人生是一場場的蛻變，每次結束都是更深刻的開始。'}
];

const hexMap={水:'☵ 坎卦（險中守正）',金:'☱ 兌卦（悅澤溝通）',木:'☳ 震卦（雷動新生）',火:'☲ 離卦（光明附麗）',土:'☷ 坤卦（厚德載物）'};

let S={bazi:{},elems:{},dom:'',mis:'',mood:'',mem:'',vis:'',syms:[],textures:[]};

// ── 初始化選單 ──
(function init(){
  const y=document.getElementById('iY');
  for(let i=2026;i>=1910;i--)y.add(new Option(i+'年',i));
  const m=document.getElementById('iM');
  for(let i=1;i<=12;i++)m.add(new Option(i+'月',i));
  const d=document.getElementById('iD');
  for(let i=1;i<=31;i++)d.add(new Option(i+'日',i));
  const h=document.getElementById('iH');
  const hn=['子時 00:00–01:00','子時 01:00–01:59','丑時 02:00–02:59','丑時 03:00–03:59',
    '寅時 04:00–04:59','寅時 05:00–05:59','卯時 06:00–06:59','卯時 07:00–07:59',
    '辰時 08:00–08:59','辰時 09:00–09:59','巳時 10:00–10:59','巳時 11:00–11:59',
    '午時 12:00–12:59','午時 13:00–13:59','未時 14:00–14:59','未時 15:00–15:59',
    '申時 16:00–16:59','申時 17:00–17:59','酉時 18:00–18:59','酉時 19:00–19:59',
    '戌時 20:00–20:59','戌時 21:00–21:59','亥時 22:00–22:59','亥時 23:00–23:59'];
  hn.forEach((n,i)=>h.add(new Option(n,i)));
  // 無預設值，等待用戶輸入
})();

// ── 八字計算 ──
function yp(y){const b=1984,ti=((y-b)%10+10)%10,di=((y-b)%12+12)%12;return{tg:TG[ti],dz:DZ[di],tE:TGE[ti],dE:DZE[di]}}
function mp(y,m){const mB=(y-1900)*12+(m-1),ti=((mB%10)+10)%10,di=((m-1+2)%12);return{tg:TG[ti],dz:DZ[di],tE:TGE[ti],dE:DZE[di]}}
function dp(y,m,d){
  const a=Math.floor((14-m)/12),yy=y-a,mm=m+12*a-2;
  const jd=d+Math.floor((153*mm+2)/5)+365*yy+Math.floor(yy/4)-Math.floor(yy/100)+Math.floor(yy/400)+1721119;
  const ti=((jd-11)%10+10)%10,di=((jd-11)%12+12)%12;
  return{tg:TG[ti],dz:DZ[di],tE:TGE[ti],dE:DZE[di]};
}
function hp(dayTg,h){const s=Math.floor(h/2),dB=TG.indexOf(dayTg)%5,ti=(dB*2+s)%10,di=s;return{tg:TG[ti],dz:DZ[di],tE:TGE[ti],dE:DZE[di]}}

function compute(){
  const y=+document.getElementById('iY').value,m=+document.getElementById('iM').value,
        d=+document.getElementById('iD').value,h=+document.getElementById('iH').value;
  const Y=yp(y),M=mp(y,m),D=dp(y,m,d),H=hp(D.tg,h);
  S.bazi={year:Y,month:M,day:D,hour:H};
  const e={木:0,火:0,土:0,金:0,水:0};
  [[Y.tE,Y.dE],[M.tE,M.dE],[D.tE,D.dE],[H.tE,H.dE]].forEach(([t,d2])=>{e[t]++;e[d2]++});
  S.elems=e;
  const sorted=Object.entries(e).sort((a,b)=>b[1]-a[1]);
  S.dom=sorted[0][0];
  S.mis=sorted[sorted.length-1][0];
  renderS1();go(1);
}

function renderS1(){
  const {year:Y,month:M,day:D,hour:H}=S.bazi;
  const labels=['年柱','月柱','日柱（日主）','時柱'];
  document.getElementById('pillarD').innerHTML=[Y,M,D,H].map((p,i)=>`
    <div class="pillar-box" style="background:${EB[p.tE]}">
      <div class="p-label">${labels[i]}</div>
      <div class="p-gz" style="color:${ET[p.tE]}">${p.tg}${p.dz}</div>
      <div class="p-elem" style="color:${ET[p.dE]}">${p.tE}·${p.dE}</div>
    </div>`).join('');

  const sorted=Object.entries(S.elems).sort((a,b)=>b[1]-a[1]);
  const mx=sorted[0][1]||1;
  document.getElementById('elemBars').innerHTML=sorted.map(([e,v])=>`
    <div class="elem-row">
      <span style="width:16px;font-size:0.875rempx;font-weight:500;color:${ET[e]}">${e}</span>
      <div class="elem-bar-bg"><div class="elem-bar-fill" style="width:${Math.max(v/mx*100,4)}%;background:${EC[e]}"></div></div>
      <span style="font-size:0.875rempx;color:var(--text3);min-width:20px;text-align:right;font-family:'DM Mono',monospace">${v}</span>
      ${v===0?`<span style="font-size:0.875rem;padding:1px 7px;border-radius:6px;background:${EB[e]};color:${ET[e]}">缺失</span>`:''}
    </div>`).join('');

  document.getElementById('healAlert').innerHTML=`
    <div style="margin-top:0.875rem;padding:0.875rem;background:${EB[S.mis]};border-radius:8px;border-left:2px solid ${EC[S.mis]}">
      <div style="font-size:0.875rempx;font-weight:500;color:${ET[S.mis]};margin-bottom:3px">療癒核心：補${S.mis}能量</div>
      <div style="font-size:0.875rempx;color:${ET[S.mis]};line-height:1.6">${S.dom}為主色（強旺主結構），${S.mis}為療癒色（補充張力），這配色就是你的平衡處方</div>
    </div>`;

  const showElems=[...new Set([S.dom,S.mis,sorted[1][0]])].slice(0,3);
  document.getElementById('traitGrid').innerHTML=showElems.map(e=>{
    const t=traitData[e];
    const role=e===S.dom?'主色（強旺）':e===S.mis?'療癒色（缺失）':'輔色';
    return`<div class="trait-card" style="background:${EB[e]};border-color:${EC[e]}30">
      <div class="trait-role" style="color:${ET[e]}">${role} · ${t.color}</div>
      <div class="trait-head" style="color:${ET[e]}">${t.title}</div>
      <div class="trait-body">${t.trait}</div>
      <div class="trait-fate">${t.fate}</div>
    </div>`;
  }).join('');

  const segs=[[S.dom,'主色','50%'],[S.mis,'療癒','30%'],[sorted[1][0],'輔色','20%']];
  document.getElementById('palStrip').innerHTML=segs.map(([e,r,pct])=>`
    <div class="pal-seg" style="background:${EP[e]};flex:${parseInt(pct)};color:${e==='金'?'#5A5852':'rgba(255,255,255,.9)'}">
      <span>${e}</span><span style="font-size:12px;opacity:.75">${r} ${pct}</span>
    </div>`).join('');

  const compMap={木:'畫面向上生長，有機線條為主，空間有呼吸感',火:'中心放射聚焦，高對比光暈，熱烈而清晰',土:'重心居中偏下，均衡穩定，有包覆與歸屬感',金:'大面積精準留白，單一聚焦，收斂而純粹',水:'由下而上的沉澱層次，流動而深邃，像深海'};
  const geomMap={木:'垂直延伸·有機曲線',火:'放射三角·聚焦光暈',土:'水平網格·方形重心',金:'圓弧幾何·極簡留白',水:'波形層疊·不規則漫延'};
  document.getElementById('compDesc').innerHTML=`
    <strong style="color:var(--text)">主結構（${S.dom}）：</strong>${compMap[S.dom]}<br>
    <strong style="color:${ET[S.mis]}">療癒張力（${S.mis}）：</strong>${geomMap[S.mis]}衝破主結構，製造視覺與情感的對話張力`;
}

function sel(el,key,val){
  const grid=el.closest('.choice-grid');
  if(grid)grid.querySelectorAll('.choice-card').forEach(c=>c.classList.remove('selected'));
  el.classList.add('selected');
  S[key]=val;
  const ok=S.mood&&S.mem&&S.vis;
  const b=document.getElementById('s2btn');
  b.style.opacity=ok?'1':'.4';
  b.style.pointerEvents=ok?'auto':'none';
}

function togSym(el,label){
  if(el.classList.contains('selected')){
    el.classList.remove('selected');S.syms=S.syms.filter(s=>s!==label);
  }else{
    if(S.syms.length>=3)return;
    el.classList.add('selected');S.syms.push(label);
  }
}

function togTex(el,label){
  if(el.classList.contains('selected')){
    el.classList.remove('selected');S.textures=S.textures.filter(t=>t!==label);
  }else{
    if(S.textures.length>=2)return;
    el.classList.add('selected');S.textures.push(label);
  }
}

function go(n){
  document.querySelectorAll('.step').forEach((s,i)=>s.classList.toggle('active',i===n));
  for(let i=0;i<5;i++){
    const d=document.getElementById('d'+i);
    d.className='pdot';
    if(i<n)d.classList.add('done');
    else if(i===n)d.classList.add('active');
  }
  if(n===3)renderS3();
  if(n===4){renderS4();setTimeout(applyAuthState,50);}
  window.scrollTo({top:0,behavior:'smooth'});
}

function renderS3(){
  const total=Object.values(S.bazi).reduce((a,p)=>a+TG.indexOf(p.tg)+DZ.indexOf(p.dz),0);
  const zw=ziweiMap[total%14];
  S.zw=zw; // 存入 S 供分享 / 下載使用
  const hex=hexMap[S.dom]||'';
  const dayTgIdx=TG.indexOf(S.bazi.day.tg);
  document.getElementById('ziwei').innerHTML=`
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:0.875rem">
      <div style="width:38px;height:38px;border-radius:50%;background:${EB[S.dom]};border:1px solid ${EC[S.dom]}40;display:flex;align-items:center;justify-content:center;font-size:16px;color:${ET[S.dom]};font-weight:500;flex-shrink:0">${zw.glyph}</div>
      <div>
        <div style="font-size:0.875rempx;font-weight:500;color:var(--text)">${zw.name}</div>
        <div style="font-size:0.875rem;color:var(--text3);font-family:'DM Mono',monospace;margin-top:2px">${hex}</div>
      </div>
    </div>
    <div style="font-size:0.875rempx;color:var(--text2);line-height:1.85">${zw.trait}</div>`;
}

function renderS4(){
  const dom=S.dom,mis=S.mis;

  // 療癒主張（三層）
  const moodContent={
    healed:{
      main:'你現在需要的，不是更多努力，而是允許自己停下來。',
      sub:`命盤中${dom}的精準與自律，讓你為每一件事設下嚴格標準——但你忘了，
      有時候，讓心軟下來也是一種力量。這幅畫補入了${mis}的能量，不是要改變你，而是讓你找回被壓進去的那部分。`,
      affirmation:'今天，我允許自己只是存在，不需要成為任何人期待的樣子。'
    },
    ignite:{
      main:'你心裡有一把火，只是有時候你忘了它還在。',
      sub:`缺${mis}的命盤，不代表你沒有熱情——而是你的熱情被壓進了更深的地方，等待一個被點燃的時機。這幅畫就是那個時機，它要提醒你：你最熱烈的樣子，是你最真實的樣子。`,
      affirmation:'我允許自己發光，即使這讓某些人感到不舒服。'
    },
    connect:{
      main:'有些情感，不需要語言，只需要一個形狀來承載。',
      sub:'這幅畫是你們之間的第三種語言——不是你說的話，不是對方說的話，而是你們共同感受過的那個瞬間，被凝固成永遠不會消失的形狀。',
      affirmation:'被看見，是人最深的需求。我值得這份連結。'
    },
    mark:{
      main:'所有的轉折都有它的形狀，這個形狀，屬於你。',
      sub:'你選擇用一件藝術品來紀念它，因為你知道：有些事情，值得比記憶更長久的存在。每次看到它，你都會記得那個選擇了轉變的自己有多勇敢。',
      affirmation:'我的每一個結束，都是另一個自己的開始。'
    }
  };
  const mc=moodContent[S.mood]||moodContent['healed'];
  document.getElementById('healBox').innerHTML=`
    <div class="heal-main">${mc.main}</div>
    <div class="heal-sub">${mc.sub}</div>
    <div class="heal-affirmation">✦ 療愈語句：「${mc.affirmation}」</div>`;

  // 色板
  const sorted=Object.entries(S.elems).sort((a,b)=>b[1]-a[1]);
  document.getElementById('outPal').innerHTML=[
    [dom,'主色·50%','50'],[mis,'療愈·30%','30'],[sorted[1][0],'輔色·20%','20']
  ].map(([e,r,f])=>`
    <div class="pal-seg" style="background:${EP[e]};flex:${f};color:${e==='金'?'#5A5852':'rgba(255,255,255,.85)'}">
      <span>${e}</span><span style="font-size:12px;opacity:.8">${r}</span>
    </div>`).join('');
  document.getElementById('colorNote').textContent=`主色 ${traitData[dom].color} · 療癒色 ${traitData[mis].color}`;

  // Prompt 生成
  const elemEng={
    木:'emerald and sage green vertical growth lines, organic upward curves, breathing space',
    火:'vermillion red radiating triangles, warm orange light burst, radiant glow',
    土:'earth brown horizontal grids, sand-ivory warm tones, grounded stability',
    金:'platinum silver precise arcs, vast white negative space, refined silence',
    水:'deep indigo flowing waves, layered dark blue sedimentation, quiet depth'
  };
  const memEng={
    morning:'golden morning light rays entering at an angle, dust particles floating in light beams, soft glowing hazy edges',
    midnight:'deep dark background, single luminous point, sharp and silent atmosphere',
    rain:'flowing liquid textures, cool color bleeding, layered soft blur, translucent glass quality',
    crowd:'chaotic outer field with a crystalline still center, tension between noise and calm',
    vast:'expansive horizon line, large-scale negative space, elevated perspective, breathing room',
    gaze:'single convergent focal point, radiant gaze-lines, warmth and tension coexisting'
  };
  const visEng={
    'dark-depth':'deep dark tones with excavatable layers, rich depth, nocturnal richness',
    'light-breath':'white space dominant, single floating element, profound silence, air quality',
    'warm-rich':'warm saturated palette, vintage-film warmth, oil-painting richness',
    'cold-sharp':'cool silver-grey-indigo tones, precise mineral lines, glacial quality',
    'figurative-nature':'semi-figurative natural landscape elements, mountains or ocean, realistic depth, emotional natural forces, painterly atmosphere',
    'figurative-figure':'human silhouette or body contour, figure-ground composition, warmth and human presence, emotional narrative'
  };
  const texEng={
    '極簡留白 大量負空間 靜默力量':'vast negative space, single minimal element, profound silence',
    '水墨暈染 東方有機流動 呼吸感':'ink-wash organic flow, Eastern aesthetic, ink bleeding on rice paper texture',
    '幾何精準 數學秩序 理性線條':'precise geometric forms, mathematical proportion, clean rational beauty',
    '礦物結晶 石頭紋理 大地質感重量':'mineral crystal texture, stone and marble veining, geological weight',
    '舊紙張 時間感 復古油畫肌理溫度':'aged paper texture, vintage warmth, oil-paint impasto surface',
    '植物葉脈 有機生命線條 自然紋路系統':'delicate leaf vein systems, organic growth lines, natural pattern network',
    '金屬光澤 銀箔燙金 精緻工藝感':'metallic foil sheen, gold-silver luminous surface, refined craft quality',
    '夜空星塵 宇宙粒子 深邃光點擴散':'cosmic particle scatter, star-dust diffusion, deep luminous light points'
  };
  const symStr=S.syms.length?`Subtle ${S.syms.map(s=>s.split(' ')[0]).join(', ')} symbols etched as fine translucent lines beneath the surface. `:'';
  const texStr=S.textures.map(t=>texEng[t]||'').filter(Boolean).join(', ')||'mixed media, balanced composition';
  const intentMap={healed:'quiet restoration, permission to rest, stillness',ignite:'rekindling inner fire, being seen, reclaiming passion',connect:'emotional bond, shared memory, being understood',mark:'ritual marking of a life turning point, transformation'};
  const prompt=`Abstract fine art print. ${elemEng[dom]} as dominant visual structure (60% composition). ${elemEng[mis]} as healing tension element (30%), breaking through or weaving against the dominant. ${symStr}Texture: ${texStr}. Light quality: ${memEng[S.mem]||''}. Color mood: ${visEng[S.vis]||''}. Emotional intention: ${intentMap[S.mood]||'healing through beauty'}. Museum-quality art print, ultra high resolution --v 6 --ar 3:4 --style raw --q 2`;

  document.getElementById('promptText').textContent=prompt;
  document.getElementById('promptNote').textContent=`${dom}（主）× ${mis}（療癒
  ）· 記憶：${S.mem||'—'} · 質地：${S.textures.map(t=>t.split(' ')[0]).join('+')||'—'}`;

  // 中文說明
  const texCN=S.textures.length?S.textures.map(t=>t.split(' ')[0]).join('＋'):'混合媒材';
  const symCN=S.syms.length?`融入${S.syms.map(s=>s.split(' ')[0]).join('、')}等符號作為若隱若現的細節層。`:'';
  document.getElementById('finalCN').innerHTML=`
    畫面以「<strong>${dom}</strong>」的色彩與幾何為主結構（約60%），對應${traitData[dom].title}的性格底色。以「<strong>${mis}</strong>」的療愈色系作為張力補充（約30%），帶入${traitData[mis].title}能量，形成命盤最核心的療愈對話。${symCN}
    <br><br>
    光線質感錨定於「${S.mem||'—'}」的感官記憶，圖像質地方向：${texCN}。整體情感意圖：${S.mood==='healed'?'靜謐療癒與自我允許':S.mood==='ignite'?'喚醒熱情與被看見':S.mood==='connect'?'情感連結與共同記憶':'生命轉折的儀式紀念'}。`;

  // 商品建議
  const prodMap={
    healed:['A3 裱框藝術海報（臥室 / 書房療癒角）','芳療蠟燭禮盒配套圖像設計','靜心引導冥想卡組'],
    ignite:['光軌-藝術展品','我在-視覺主圖·自我宣言系列',' LIFE Cube '],
    connect:['家族生命樹設計','紀念日專屬訂製藝術品','情感連結工藝物件'],
    mark:['生命轉捩點紀念冊 · 特裝版','成年禮 / 里程碑訂製藝術品','護身符意象工藝小物']
  };
  document.getElementById('prodList').innerHTML=(prodMap[S.mood]||prodMap['healed']).map(p=>`
    <div class="prod-row"><div class="prod-dot"></div><div>${p}</div></div>`).join('');
}

function copyPrompt(){
  const text=document.getElementById('promptText').textContent;
  navigator.clipboard.writeText(text).then(()=>{
    const btn=document.querySelector('.copy-btn');
    btn.textContent='已複製';
    setTimeout(()=>btn.textContent='複製',2000);
  });
}

// ── 權限系統 ──
const MASTER_PW='LIFE+MASTER'; // 主用戶密碼，可自行修改
let isAdmin=false;

function openAuthModal(){
  document.getElementById('authModal').classList.add('open');
  document.getElementById('pwInput').value='';
  document.getElementById('pwError').textContent='';
  setTimeout(()=>document.getElementById('pwInput').focus(),100);
}

function closeAuthModal(){
  document.getElementById('authModal').classList.remove('open');
}

function checkAuth(){
  const val=document.getElementById('pwInput').value.trim();
  if(val===MASTER_PW){
    isAdmin=true;
    closeAuthModal();
    applyAuthState();
  }else{
    document.getElementById('pwError').textContent='密碼錯誤，請再試一次';
    document.getElementById('pwInput').select();
  }
}

function applyAuthState(){
  const cards=['lockCard1','lockCard2','lockCard3','lockCard4'];
  const overlays=['lockOverlay1','lockOverlay2','lockOverlay3','lockOverlay4'];
  if(isAdmin){
    cards.forEach(id=>document.getElementById(id)?.classList.add('unlocked'));
    // 更新 authBar
    document.getElementById('authDot').style.background='#6DB85A';
    document.getElementById('authDot').style.boxShadow='0 0 8px #6DB85A';
    document.getElementById('authLabel').textContent='主用戶模式 · 完整內容已解鎖';
    document.getElementById('authLabel').style.color='#8DD870';
    document.getElementById('authToggleBtn').textContent='已解鎖';
    document.getElementById('authToggleBtn').style.borderColor='#6DB85A';
    document.getElementById('authToggleBtn').style.color='#8DD870';
    document.getElementById('authToggleBtn').onclick=null;
  }else{
    cards.forEach(id=>document.getElementById(id)?.classList.remove('unlocked'));
    document.getElementById('authDot').style.background='var(--text3)';
    document.getElementById('authDot').style.boxShadow='0 0 6px var(--text3)';
    document.getElementById('authLabel').textContent='遊客模式 · 部分內容已鎖定';
    document.getElementById('authLabel').style.color='var(--text3)';
    document.getElementById('authToggleBtn').textContent='主用戶登入';
    document.getElementById('authToggleBtn').onclick=openAuthModal;
  }
}

// 點擊 Modal 背景關閉
document.getElementById('authModal').addEventListener('click',function(e){
  if(e.target===this)closeAuthModal();
});


// 控制演算法輸入區塊展開的函式
function toggleDecodeSystem() {
    const wrapper = document.getElementById('decode-wrapper');
    const triggerArea = document.getElementById('trigger-area');
    
    if (wrapper && triggerArea) {
        // 讓演算法區塊流暢展開
        wrapper.classList.add('expanded');
        // transition 結束後移除 max-height 限制，防止手機版內容被截斷
        setTimeout(() => { wrapper.style.maxHeight = 'none'; }, 850);
        // 讓原本的預期點擊按鈕優雅消失
        triggerArea.classList.add('fade-out');
        setTimeout(() => {
            wrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
    }
}
// ── 1. 立即分享 ──
function shareMatrix(){
  const starName = S.zw ? S.zw.name : '紫微星';
  const healText = document.querySelector('#healBox .heal-main')?.textContent || '';
  const siteUrl  = window.location.href.split('?')[0];
  const text =
    `我已在 LIFE Matrix 錨定我的三維生命視覺座標。\n我的靈魂頻率是【${starName}】，你呢？\n快來解碼你基因中流動的五行美學。\n\n${siteUrl}`;
  navigator.clipboard.writeText(text).then(()=>{
    const toast = document.getElementById('shareToast');
    toast.classList.add('show');
    setTimeout(()=>toast.classList.remove('show'), 3000);
  }).catch(()=>{
    prompt('請手動複製以下文案：', text);
  });
}

// ── 2. 下載生命矩陣 ──
function downloadMatrix(){
  const starName  = S.zw ? S.zw.name  : '—';
  const starTrait = S.zw ? S.zw.trait : '—';
  const hex       = hexMap[S.dom] || '—';
  const healMain  = document.querySelector('#healBox .heal-main')?.textContent || '';
  const healSub   = document.querySelector('#healBox .heal-sub')?.textContent  || '';
  const healAff   = document.querySelector('#healBox .heal-affirmation')?.textContent || '';
  const colorNote = document.getElementById('colorNote')?.textContent || '';

  // 色板色塊
  const EC_MAP={木:'#5A8C3E',火:'#C94030',土:'#A0845C',金:'#B8A040',水:'#2B4F8C'};
  const segs=[
    {e:S.dom,label:'主色 50%',w:'50%'},
    {e:S.mis,label:'療癒 30%',w:'30%'},
  ];
  const palHtml = segs.map(s=>
    `<div style="flex:0 0 ${s.w};background:${EC_MAP[s.e]||'#333'};height:100%;display:flex;align-items:flex-end;padding:4px 6px;box-sizing:border-box;">
       <span style="font-size:12px;color:rgba(255,255,255,0.7);font-family:monospace">${s.e} · ${s.label}</span>
     </div>`
  ).join('');

  const html = `<!DOCTYPE html><html lang="zh-Hant"><head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>LIFE Matrix — 我的生命座標報告</title>
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@300;500&family=DM+Mono&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box;}
body{background:#07090f;color:#e8eaf0;font-family:'Noto Serif TC',serif;padding:40px 24px;max-width:600px;margin:0 auto;}
.logo{font-family:'DM Mono',monospace;font-size:0.875rem;letter-spacing:5px;color:#444;text-transform:uppercase;margin-bottom:6px;}
.title{font-size:22px;font-weight:300;letter-spacing:6px;color:#e8eaf0;margin-bottom:2px;}
.subtitle{font-size:0.875rempx;font-family:'DM Mono',monospace;color:#444;letter-spacing:3px;margin-bottom:36px;}
.divider{height:0.5px;background:linear-gradient(90deg,transparent,#2b4f8c,#6c8eff,transparent);margin:24px 0;}
.section-title{font-family:'DM Mono',monospace;font-size:12px;letter-spacing:3px;color:#6c8eff;text-transform:uppercase;margin-bottom:12px;}
.tag-row{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:20px;}
.tag{padding:4px 12px;border-radius:20px;border:0.5px solid #2b4f8c;font-size:0.875rempx;color:#a0b4ff;font-family:'DM Mono',monospace;letter-spacing:1px;}
.pal{display:flex;border-radius:8px;overflow:hidden;height:36px;margin-bottom:6px;}
.color-note{font-size:0.875rem;color:#555;font-family:'DM Mono',monospace;margin-bottom:20px;}
.star-row{display:flex;align-items:center;gap:12px;margin-bottom:16px;}
.star-glyph{width:40px;height:40px;border-radius:50%;background:#1a2240;border:1px solid #2b4f8c40;display:flex;align-items:center;justify-content:center;font-size:17px;color:#6c8eff;flex-shrink:0;}
.star-name{font-size:14px;color:#e8eaf0;letter-spacing:2px;}
.star-trait{font-size:0.875rempx;color:#888;line-height:1.8;margin-bottom:20px;}
.heal-main{font-size:14px;color:#e8eaf0;letter-spacing:1px;line-height:1.8;margin-bottom:10px;}
.heal-sub{font-size:0.875rempx;color:#aaa;line-height:2;margin-bottom:14px;}
.heal-aff{font-size:0.875rempx;color:#33ffaa;letter-spacing:1px;line-height:1.8;padding:10px 14px;border-left:2px solid #33ffaa40;background:rgba(51,255,170,0.04);}
.booking-btn{margin:30px auto;display:block;text-align:center; }
.booking-btn a{padding:8px 40px; text-decoration:none;background:rgba(51, 116, 255, 0.26);border-radius:20px;border:0.5px solid #6c8eff;font-size:1rem;color:#6c8eff;font-family:'DM Mono',monospace;letter-spacing:4px;}
.booking-btn a:hover{border:0.5px solid #33ffaa;color:#3374ff;font-size:1.125rempx;color:#33ffaa;}
.footer{margin-top:40px;padding-top:16px;border-top:0.5px solid #111;text-align:center;font-family:'DM Mono',monospace;font-size:12px;color:#333;letter-spacing:3px;}
@media print{body{background:#fff;color:#111;}.title{color:#111;}.heal-aff{color:#0a7a50;border-color:#0a7a50;background:#f0fff8;}.tag{color:#3a5fbb;border-color:#3a5fbb;}.section-title{color:#3a5fbb;}.star-name{color:#111;}.heal-main,.heal-sub,.star-trait{color:#333;}.footer{color:#999;}}
</style></head><body>
<div class="logo">LIFE Matrix</div>
<div class="title">生命座標報告</div>
<div class="subtitle">Three-Dimensional Life Visual Coordinate</div>
<div class="divider"></div>
<div class="section-title">五行能量分佈</div>
<div class="tag-row">
  <div class="tag">主元素 ${S.dom}</div>
  <div class="tag">療癒元素 ${S.mis}</div>
  <div class="tag">${hex}</div>
</div>
<div class="section-title">專屬色彩座標</div>
<div class="pal">${palHtml}</div>
<div class="color-note">${colorNote}</div>
<div class="divider"></div>
<div class="section-title">命盤主星</div>
<div class="star-row">
  <div class="star-glyph">${S.zw?.glyph||'✦'}</div>
  <div><div class="star-name">${starName}</div></div>
</div>
<div class="star-trait">${starTrait}</div>
<div class="divider"></div>
<div class="section-title">情感療癒主張</div>
<div class="heal-main">${healMain}</div>
<div class="heal-sub">${healSub}</div>
<div class="heal-aff">${healAff}</div>
<div class="section-title">
<br>這只是您宇宙參數的10%顯影。完整的LIFE+Cube將結合您的生命座標與生命故事看板，生成專屬的加密數位方塊。想開啟您的生命方塊嗎？<br></div>
<div class="booking-btn"><a href="#booking" target="_self">預約訂製</a></div>
<div class="footer">LIFE Matrix · 生命視覺座標系統 · 雙擊開啟後，瀏覽器選單 → 列印 → 儲存為 PDF</div>
</body></html>`;

  const blob = new Blob([html], {type:'text/html;charset=utf-8'});
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `LIFE-Matrix-${S.dom}${S.mis}-${S.zw?.glyph||'X'}.html`;
  a.click();
  URL.revokeObjectURL(url);
}