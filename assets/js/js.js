
// 1. 宇宙背景動態 Canvas 引擎（重構版：幾何年輪與生命漣漪）
const canvas = document.getElementById('life-space-canvas');
const ctx = canvas.getContext('2d');
const NEON_COLORS = ['#00e5ff', '#00aaff', '#7000ff', '#33ffaa'];// 藍綠、青藍、幻彩紫、螢光綠
let rippleCircles = [], sparks = [], mouse = { x: null, y: null, targetX: null, targetY: null }, scrollY = 0, targetScrollY = 0;

function resizeCanvas() {
    const scale = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * scale; canvas.height = window.innerHeight * scale;
    ctx.scale(scale, scale); initSystem();
}

function initSystem() {
    rippleCircles = []; sparks = [];

    // ── 🎛️ 年輪/漣漪 參數設定區 ──
    const totalRipples = 48; // 畫面同時存在的年輪圈數
    for (let i = 0; i < totalRipples; i++) {
        rippleCircles.push({
            // 讓圓圈的初始半徑錯開，形成層層疊加的等高線感
            radius: (Math.max(window.innerWidth, window.innerHeight) / totalRipples) * i,
            speed: 0.2 + Math.random() * 0.5,          // 👈 擴散速度（數字越大向外衝越快）
            weight: Math.random() > 0.6 ? 0.6 : 0.1,    // 👈 線條粗細 (px)
            opacityFactor: 0.1 + Math.random() * 0.3, // 👈 基礎透明度上限
            seed: Math.random() * 150,                 // 隨機數學種子，用來製造波浪細節
            color: NEON_COLORS[Math.floor(Math.random() * NEON_COLORS.length)]
        });
    }

    // 背景微粒 (Sparks) 改為受到中心引力與滾動影響
    for (let i = 0; i < 40; i++) {
        sparks.push({
            x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight,
            radius: 0.4 + Math.random() * 1.0,
            opacity: 0.1 + Math.random() * 0.4, speedX: 0, speedY: 0,
            pulseSpeed: 0.02, pulseAngle: Math.random() * Math.PI,
            color: NEON_COLORS[Math.floor(Math.random() * NEON_COLORS.length)]
        });
    }
}

window.addEventListener('mousemove', (e) => { mouse.targetX = e.clientX; mouse.targetY = e.clientY; });
window.addEventListener('mouseleave', () => { mouse.targetX = null; mouse.targetY = null; });
window.addEventListener('scroll', () => {
    targetScrollY = window.scrollY;
    const toTopBtn = document.getElementById('back-to-top-btn');
    if (window.scrollY > 300) { toTopBtn.classList.add('show'); } else { toTopBtn.classList.remove('show'); }
});

function animate() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    // 取得畫面物理中心點（作為年輪與漣漪的發散源）
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    if (mouse.targetX !== null) {
        if (mouse.x === null) { mouse.x = mouse.targetX; mouse.y = mouse.targetY; }
        mouse.x += (mouse.targetX - mouse.x) * 0.05; mouse.y += (mouse.targetY - mouse.y) * 0.05;
    } else { mouse.x = null; mouse.y = null; }

    scrollY += (targetScrollY - scrollY) * 0.05;
    let scrollSpeed = (targetScrollY - scrollY);

    // ── 🔄 繪製幾何年輪/漣漪 ──
    rippleCircles.forEach((circle) => {
        // 1. 讓圓半徑持續擴散
        circle.radius += circle.speed;

        // 2. 當滾動網頁時，漣漪會因為「時空位移」短暫加速向外擴散
        circle.radius += Math.abs(scrollSpeed) * 0.15;

        // 3. 超出螢幕最大邊界後，重置回中心（變成一個生生不息的循環）
        const maxRadius = Math.max(window.innerWidth, window.innerHeight) * 0.8;
        if (circle.radius > maxRadius) {
            circle.radius = 0;
            circle.speed = 0.2 + Math.random() * 0.3;
        }

        // 4. 計算邊緣淡入淡出（圓心處與最外圍會靈魂般隱形，中間最清晰）
        let lifeRatio = circle.radius / maxRadius;
        let currentOpacity = Math.sin(lifeRatio * Math.PI) * circle.opacityFactor;

        // 5. 開始用高階數學畫出帶有東方玄學波紋的「不規則年輪圓」
        ctx.beginPath();
        ctx.lineWidth = circle.weight;
        ctx.strokeStyle = circle.color;
        ctx.shadowBlur = 5;
        ctx.shadowColor = circle.color;
        ctx.globalAlpha = currentOpacity < 0 ? 0 : currentOpacity;

        const totalPoints = 120; // 組成一個圓的線段數量
        for (let j = 0; j <= totalPoints; j++) {
            let angle = (j / totalPoints) * Math.PI * 2;

            // 使用正弦與餘弦公式，並注入時空參數，讓圓的邊緣產生像水波紋（漣漪）的細微起伏
            let timeParam = Date.now() * 0.0005;
            let noise = Math.sin(angle * 6 + circle.seed + timeParam) * 16; // 代表水波的起伏震盪程度.0，年輪成正圓；20，抖動和不規則感變強烈

            let r = circle.radius + noise;
            let x = centerX + Math.cos(angle) * r;
            let y = centerY + Math.sin(angle) * r;

            // 互動性：滑鼠靠近時，漣漪會產生磁場擠壓錯位
            if (mouse.x !== null) {
                let distX = mouse.x - x; let distY = mouse.y - y;
                let distance = Math.sqrt(distX * distX + distY * distY);
                if (distance < 180) {
                    let pushForce = (180 - distance) / 180;
                    x -= (distX / distance) * pushForce * 20;
                    y -= (distY / distance) * pushForce * 20;
                }
            }

            if (j === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
    });

    // ── ✨ 繪製微粒（微粒會依附年輪磁場做緩慢的呼吸與漂移） ──
    sparks.forEach((spark) => {
        spark.pulseAngle += spark.pulseSpeed;
        let currentOpacity = spark.opacity + Math.sin(spark.pulseAngle) * 0.15;

        // 網頁滾動時，微粒會有些許上升或下降的錯覺
        spark.y -= scrollSpeed * 0.02;
        if (spark.y < 0) spark.y = window.innerHeight;
        if (spark.y > window.innerHeight) spark.y = 0;

        ctx.beginPath();
        ctx.arc(spark.x, spark.y, spark.radius, 0, Math.PI * 2);
        ctx.fillStyle = spark.color;
        ctx.shadowBlur = 4;
        ctx.shadowColor = spark.color;
        ctx.globalAlpha = currentOpacity < 0 ? 0 : currentOpacity;
        ctx.fill();
    });

    ctx.globalAlpha = 1.0; ctx.shadowBlur = 0;
    requestAnimationFrame(animate);
}
window.addEventListener('resize', resizeCanvas); resizeCanvas(); animate();

// 2. 輪播控制邏輯
let currentSlideIndex = 0;
const totalSlides = 3;

function switchSlide(index) {
    currentSlideIndex = index;
    updateCarouselPosition();
}

function moveSlide(direction) {
    currentSlideIndex += direction;
    if (currentSlideIndex >= totalSlides) currentSlideIndex = 0;
    if (currentSlideIndex < 0) currentSlideIndex = totalSlides - 1;
    updateCarouselPosition();
}

function updateCarouselPosition() {
    const track = document.getElementById('carouselTrack');
    track.style.transform = `translateX(-${currentSlideIndex * 33.333}%)`;
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach((btn, i) => {
        if (i === currentSlideIndex) btn.classList.add('active');
        else btn.classList.remove('active');
    });
}

// 🆕 3. 回到最上層平滑滾動函數
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 4. 預約表單提交與彈出式通知
function triggerFormSubmit(event) {
    event.preventDefault();
    document.getElementById('custom-alert').style.display = 'block';
    setTimeout(() => { event.target.submit(); }, 1500);
}
function closeAlert() { document.getElementById('custom-alert').style.display = 'none'; }

// 5. 免費體驗解碼器
function runExperience() {
    const name = document.getElementById('user-name').value;
    const birth = document.getElementById('user-birth').value;
    if (!name || !birth) { alert("請輸入您的稱呼與生辰。"); return; }
    const date = new Date(birth); const seed = date.getDate() + date.getMonth() + date.getHours();
    const elements = ["潤木 (Wood)", "烈火 (Fire)", "厚土 (Earth)", "剛金 (Metal)", "清水 (Water)"];
    const samples = [
        { id: 6, name: "Ardra (參宿)", desc: "代表靈魂在經歷淬鍊後散發的鑽石光芒。具備極強的穿透力與重建能量。", svg: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="none" stroke="rgba(0, 229, 255, 0.3)" stroke-width="0.5"/><polygon points="50,15 80,50 50,85 20,50" fill="none" stroke="#00e5ff" stroke-width="1.2"/><circle cx="50" cy="50" r="2.5" fill="#33ffaa"/></svg>` },
        { id: 14, name: "Chitra (角宿)", desc: "代表宇宙極致的工藝與結構美。這類頻率者天生具備對秩序、美感與邏輯的敏閱洞察力。", svg: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="none" stroke="rgba(0, 229, 255, 0.3)" stroke-width="0.5"/><polygon points="50,15 80,32 80,68 50,85 20,68 20,32" fill="none" stroke="#00e5ff" stroke-width="1.2"/><line x1="50" y1="15" x2="50" y2="85" stroke="rgba(51, 255, 170, 0.5)" stroke-width="0.5"/></svg>` }
    ];
    const result = samples[seed % 2];
    document.getElementById('experience-result').style.display = 'block';
    document.getElementById('totem-output').innerHTML = result.svg;
    document.getElementById('result-text').innerHTML = `暨定主體 ── <strong>${name.toUpperCase()}</strong>，座標已定錨：<br><br>■ 五行屬性：${elements[seed % 5]}<br>■ 吠陀星宿：第 ${result.id} 星宿 ── ${result.name}<br>■ 幾何頻率：${result.desc}`;
}


// ── 頂部動態文字副標題輪播排程 ──
document.addEventListener("DOMContentLoaded", () => {
    const subtitles = document.querySelectorAll('.dynamic-subtitle');
    if (subtitles.length === 0) return;

    let currentIndex = 0;
    const switchInterval = 4000; // 👈 這裡可以設定切換時間：4000 毫秒 = 4 秒

    setInterval(() => {
        // 1. 讓當前顯示的句子淡出
        subtitles[currentIndex].classList.remove('active');

        // 2. 計算下一句的索引值
        currentIndex = (currentIndex + 1) % subtitles.length;

        // 3. 讓下一句優雅淡入
        subtitles[currentIndex].classList.add('active');
    }, switchInterval);
});

const toggleBtn = document.getElementById('toggleBtn');
const collapseContent = document.getElementById('collapseContent');

toggleBtn.addEventListener('click', function () {
    // 切換按鈕自身的 active 狀態（改變箭頭方向）
    this.classList.toggle('active');

    // 切換內容容器的 active 狀態
    collapseContent.classList.toggle('active');

    // 判斷是否展開，並動態設定高度（達到平滑動畫效果）
    if (collapseContent.classList.contains('active')) {
        collapseContent.style.maxHeight = collapseContent.scrollHeight + "px";
        toggleBtn.querySelector('span:first-child').innerText = "關：LIFE+ 四大美學維度演算法";
    } else {
        collapseContent.style.maxHeight = "0";
        toggleBtn.querySelector('span:first-child').innerText = "開：LIFE+ 四大美學維度演算法";
    }
});

// ── 手機版響應式漢堡選單控制 ──
function toggleMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links-container');

    if (menuBtn && navLinks) {
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('open');

        // 防止手機版選單打開時，後方網頁還能滾動
        if (navLinks.classList.contains('open')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
}

// 點擊導覽連結後，自動關閉滿版選單
function closeMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links-container');

    if (menuBtn && navLinks) {
        menuBtn.classList.remove('active');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
    }
}


// ── 💡 頁面載入安全防護：檢查是否有來自報告按鈕的「預約捲動信號」 ──
document.addEventListener("DOMContentLoaded", function () {
    // 檢查瀏覽器暫存是否有發射過來的信號，或是網址結尾自帶 #booking
    const hasScrollSignal = localStorage.getItem('trigger_scroll_to_booking');
    const isBookingHash = window.location.hash === '#booking';

    if (hasScrollSignal === 'true' || isBookingHash) {
        // 清除信號，避免下次重新整理網頁時又自動捲動
        localStorage.removeItem('trigger_scroll_to_booking');

        // 延遲 400 毫秒執行，確保您的星空 Canvas 與主網頁 DOM 元素已經完全渲染對齊完畢
        setTimeout(function () {
            const bookingSection = document.getElementById('booking') ||
                document.querySelector('.contact-section') ||
                document.getElementById('contact');

            if (bookingSection) {
                bookingSection.scrollIntoView({
                    behavior: 'smooth', // 👈 絲滑的極簡畫廊捲動感
                    block: 'start'
                });
            }
        }, 400);
    }
});

// ── 核心原理區塊：QA 折疊控制 ──
function toggleFaq(element) {
    // 如果點擊已打開的，就關閉它；如果點擊其他的，就打開它
    const isActive = element.classList.contains('active');

    // 可選：先關閉其他所有已打開的 QA（手風琴效果，保持畫面簡潔）
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });

    if (!isActive) {
        element.classList.add('active');
    }
}

// ── 4. 終極優化：點擊後另開精緻預覽網頁，內嵌科學實證與下載功能 ──
function downloadScienceReport() {
    // 💡 核心技術：建立包含完整美學排版與下載按鈕的獨立網頁字串
    const scienceHtmlContent = `<!DOCTYPE html> 

    <html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LIFE+ 記憶與療癒系統計畫：科學實證與醫學文獻摘要</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@300;400&display=swap" rel="stylesheet">
    <style>
        body {
            background-color: #0A0C12;
            color: #E8EAF0;
            font-family: 'Noto Serif TC', serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            padding: 40px 20px;
            box-sizing: border-box;
        }
        .report-card {
            width: 100%;
            max-width: 800px;
            background: #111420;
            border: 0.5px solid rgba(232, 234, 240, 0.15);
            border-radius: 16px;
            padding: 45px 50px;
            box-sizing: border-box;
            box-shadow: 0 10px 40px rgba(0,0,0,0.6);
            position: relative;
        }
        .header-logo {
            font-size: 0.8125rem;
            letter-spacing: 6px;
            color: #8A90A8;
            text-align: center;
            margin-bottom: 25px;
        }
        .title {
            font-size: 2.25rem;
            font-weight: 300;
            letter-spacing: 3px;
            color: #ffffff;
            text-align: center;
            margin-bottom: 6px;
        }
        .subtitle {
            font-size: 1rem;
            color: #8A90A8;
            letter-spacing: 1.5px;
            text-align: center;
            margin-bottom: 40px;
        }
        .section-title {
            font-size: 1.25rem;
            letter-spacing: 2px;
            color: #00e5ff;
            margin-top: 30px;
            margin-bottom: 12px;
            border-bottom: 0.5px solid rgba(0, 229, 255, 0.2);
            padding-bottom: 6px;
        }
        .content-box {
            font-size: 1rem;
            line-height: 1.8;
            letter-spacing: 1.5px;
            color: #D1D4E0;
            margin-bottom: 25px;
            text-align: justify;
        }
        .highlight {
            color: #33ffaa;
            font-weight: 400;
        }
        .ref-link {
            display: inline-block;
            color: #00e5ff;
            text-decoration: none;
            font-size: 11px;
            margin-top: 4px;
            border-bottom: 0.5px dashed rgba(0, 229, 255, 0.4);
            transition: all 0.3s ease;
        }
        .ref-link:hover { color: #ffffff; border-bottom-color: #ffffff; }
        
        /* 💡 新增：頁尾下載功能區塊樣式 */
        .action-zone {
            text-align: center;
            margin-top: 40px;
            border-top: 0.5px solid rgba(232, 234, 240, 0.1);
            padding-top: 30px;
        }
        .btn-download-now {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 10px 24px;
            background: transparent;
            border: 0.5px solid #33ffaa; /* 綠色安全指示 */
            color: #33ffaa;
            font-family: 'Noto Serif TC', serif;
            font-size: 12px;
            letter-spacing: 1.5px;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.4s ease;
        }
        .btn-download-now:hover {
            background: #33ffaa;
            color: #111420;
            box-shadow: 0 0 15px rgba(51,255,170,0.3);
        }
        .footer-note {
            font-size: 11px;
            color: #62687F;
            letter-spacing: 1px;
            line-height: 1.6;
            margin-top: 25px;
            text-align: center;
        }

        /* 💡 新增：雙按鈕橫向排版與寬度安全防護 */
        .btn-group-footer {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 16px;
            flex-wrap: wrap; /* 手機端自動垂直疊放 */
        }
        .btn-download-now, .btn-back-to-booking {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 10px 22px;
            background: transparent;
            font-family: 'Noto Serif TC', serif;
            font-size: 12px;
            letter-spacing: 1.5px;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
            white-space: nowrap;
        }
        .btn-download-now {
            border: 0.5px solid rgba(232, 234, 240, 0.3);
            color: #8A90A8;
        }
        .btn-download-now:hover {
            border-color: #ffffff;
            color: #ffffff;
            box-shadow: 0 0 12px rgba(255,255,255,0.1);
        }
        /* 專屬預約按鈕：釋放宇宙青藍光芒 */
        .btn-back-to-booking {
            border: 0.5px solid #00e5ff;
            color: #00e5ff;
        }
        .btn-back-to-booking:hover {
            background: #00e5ff;
            color: #111420;
            box-shadow: 0 0 15px rgba(0,229,255,0.3);
            font-weight: 400;
        }

    @media (max-width: 880px) {
            .report-card {padding: 30px 20px;} 
             }
    </style>
</head>
<body>
    <div class="report-card">
        <div class="header-logo">L I F E  +  M A T R I X</div>
        <div class="title">LIFE+ 記憶與療癒系統計畫科學實證</div>
        <div class="subtitle">設計學、神經科學與大腦健康之實證學術摘要</div>
        
        <div class="section-title">✦ 一起同行找回平衡生活吧!</div>
        <div class="content-box">
            ✍️ 您好，我是 Winnie。<br>
            在 2026 年初創立這個計畫之前，我和許多人一樣，在節奏緊湊的職場裡努力了多年，一步步從基層做到管理職級。
            這些高度緊繃的壓力環境與生活變故，讓我們失衡、內耗，甚至充滿焦慮與疲憊。<br>
            經歷了不平順人生的起伏，在喘息的空間裡，我決定停下腳步審視自己的人生。
            我問自己，能不能把天賦中「美學轉譯」與時間練就的「理性思維」，
            轉化為一項能兼顧助人與提升生命熱情的設計事業？<br>
            苦思沉澱許久，我試著將深奧的紫微八字與陰陽五行規律，用現代演算法重新梳理，轉化為乾淨、純粹的幾何座標設計。
            這不是傳統算命迷信，更像是融合了<strong>心理支持</strong>的視角，
            用<strong>科學邏輯</strong>幫你把雜亂的人生故事理出頭緒、<strong>重建內心秩序的「記憶修復工程」。</strong>
            這是我療癒自己的方式，也希望用自己半生累積的跨界專業，能夠也治癒您的一小部分。
            <strong>在您面對生命突如其來的風雨時，LIFE+ MATRIX將是一個無聲的心理陪伴者，安穩地守護著您的內心，給予您一份從容前行的支撐與力量。</strong>
        </div>
        
        <div class="section-title">✦ 臨床醫學與神經科學依據</div>
        <div class="content-box">
            根據國際神經科學與臨床心理學研究指出，透過規律的視覺線條刺激、生命故事回溯以及個人專屬符號的錨定，能建立深度的心理安全感與大腦防護：<br><br>
            
            1. <span class="highlight">活化大腦與非藥物介入療法</span>：<br>
            臨床證實，透過結構化的生命故事、視覺符號回溯療法（Reminiscence Therapy），能有效減緩認知功能退化。<br>
            <a href="https://www.alz.org/alzheimers-dementia/research_progress/non-pharmacological-therapies" class="ref-link" target="_blank">🔗 查閱阿茲海默症協會 (Alzheimer's Association) 非藥物介入研究進展 →</a><br><br>
            
            2. <span class="highlight">減緩失智與提升認知儲備</span>：<br>
            提早建立個人生命事件的結構化封存與精神錨定，能有效累積大腦的「認知儲備」（Cognitive Reserve），在年長時顯著延緩失智病程。<br>
            <a href="https://www.nia.nih.gov/news/cognitive-reserve-what-it-and-how-does-it-protect-brain" class="ref-link" target="_blank">🔗 查閱美國國家老化研究所 (NIA) 關於認知儲備與大腦保護機制 →</a><br><br>
            
            3. <span class="highlight">神經美學（Neuroaesthetics）與情緒安定</span>：<br>
            深度的美學轉譯與藝術創造過程，能顯著抑制體內皮質醇（壓力荷爾蒙）分泌，活化大腦神經元微循環，平衡自主神經系統。<br>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8472506/" class="ref-link" target="_blank">🔗 查閱美國國家生物技術資訊中心 (NCBI) 藝術治療與神經機制研究文獻 →</a>
        </div>
        
        <div class="section-title">✦ 數位資產與實體紀念載體</div>
        <div class="content-box">
            LIFE+ 系統將稍縱即逝的生命瞬間，編碼為宇宙中溫暖而永恆的幾何年輪。此視覺座標不僅適合作為數位桌布與記憶封存，更是日後轉化為高質感實體雷雕記憶載體、客製化數位書籍的關鍵索引，在慌亂的時空中提供最值得信賴的錨定點。
        </div>
        
        <div class="action-zone">
            <div class="btn-group-footer">
                <button class="btn-download-now" onclick="window.print()">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    儲存或列印報告
                </button>
                
                <button class="btn-back-to-booking" onclick="scrollToParentBooking()">
                    前往專屬預約
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
            </div>
            
            <div class="footer-note">
                © 2026 LIFE System & XUEXUEni Studio. All Rights Reserved.<br>
                本實證基於神經美學與認知心理學框架推演。
            </div>
        </div>

        <script>
            function scrollToParentBooking() {
                // 1. 在使用者的瀏覽器暫存中，寫入一個需要自動捲動到預約區的「幾何信號」
                try {
                    localStorage.setItem('trigger_scroll_to_booking', 'true');
                } catch(e) {
                    // 防護極端隱私模式
                }

                // 2. 優先檢查母視窗，如果母視窗還在，直接通知它導向預約區
                if (window.opener && !window.opener.closed) {
                    try {
                        window.opener.location.href = 'https://xuexue-ni.github.io/LIFE-LM/#booking';
                        window.opener.focus();
                        window.close();
                        return; // 成功觸發即中斷
                    } catch (err) {
                        // 萬一跨網域安全限制阻擋，則順流進入下方的直接跳轉邏輯
                    }
                }

                // 3. 終極絕招（100% 成功）：直接在當前視窗載入主網頁並帶入預約錨點
                // 這樣不論任何瀏覽器限制，都絕對能在同一個分頁無縫開啟主網頁並對準欄位
                window.location.href = 'https://xuexue-ni.github.io/LIFE-LM/#booking';
            }
        </script>
    </div>
</body>
</html>`;

    // ── 💡 終極亮點：不再默默下載，而是直接另開新視窗並寫入內容 ──
    const newWindow = window.open();
    if (newWindow) {
        newWindow.document.open();
        newWindow.document.write(scienceHtmlContent);
        newWindow.document.close();
    } else {
        alert('您的瀏覽器封鎖了彈出視窗，請允許彈出以查閱科學實證。');
    }
}
