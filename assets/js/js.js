function downloadMatrix() {
    const booking = document.querySelector('#booking');
    if (booking) booking.scrollIntoView({ behavior: 'smooth' });
}

// 1. 宇宙背景動態 Canvas 引擎（新增安全防護網）
const canvas = document.getElementById('life-space-canvas');
// 💡 安全修改：只有在 canvas 存在時才獲取 2d Context
const ctx = canvas ? canvas.getContext('2d') : null; 
const NEON_COLORS = ['#00e5ff', '#00aaff', '#7000ff', '#33ffaa'];
let rippleCircles = [], sparks = [], mouse = { x: null, y: null, targetX: null, targetY: null }, scrollY = 0, targetScrollY = 0;

function resizeCanvas() {
    if (!canvas || !ctx) return; // 💡 安全判斷
    const scale = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * scale; canvas.height = window.innerHeight * scale;
    ctx.scale(scale, scale); initSystem();
}

function initSystem() {
    if (!canvas) return; // 💡 安全判斷
    rippleCircles = []; sparks = [];

    const totalRipples = 48;
    for (let i = 0; i < totalRipples; i++) {
        rippleCircles.push({
            radius: (Math.max(window.innerWidth, window.innerHeight) / totalRipples) * i,
            speed: 0.2 + Math.random() * 0.5,
            weight: Math.random() > 0.6 ? 0.6 : 0.1,
            opacityFactor: 0.1 + Math.random() * 0.3,
            seed: Math.random() * 150,
            color: NEON_COLORS[Math.floor(Math.random() * NEON_COLORS.length)]
        });
    }

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
    // 💡 安全修改：加上 toTopBtn 存在檢查
    if (toTopBtn) {
        if (window.scrollY > 300) { toTopBtn.classList.add('show'); } else { toTopBtn.classList.remove('show'); }
    }
});

function animate() {
    if (!ctx) return; // 💡 安全判斷：沒有 Canvas 的頁面不跑動畫迴圈

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    if (mouse.targetX !== null) {
        if (mouse.x === null) { mouse.x = mouse.targetX; mouse.y = mouse.targetY; }
        mouse.x += (mouse.targetX - mouse.x) * 0.05; mouse.y += (mouse.targetY - mouse.y) * 0.05;
    } else { mouse.x = null; mouse.y = null; }

    scrollY += (targetScrollY - scrollY) * 0.05;
    let scrollSpeed = (targetScrollY - scrollY);

    rippleCircles.forEach((circle) => {
        circle.radius += circle.speed;
        circle.radius += Math.abs(scrollSpeed) * 0.15;

        const maxRadius = Math.max(window.innerWidth, window.innerHeight) * 0.8;
        if (circle.radius > maxRadius) {
            circle.radius = 0;
            circle.speed = 0.2 + Math.random() * 0.3;
        }

        let lifeRatio = circle.radius / maxRadius;
        let currentOpacity = Math.sin(lifeRatio * Math.PI) * circle.opacityFactor;

        ctx.beginPath();
        ctx.lineWidth = circle.weight;
        ctx.strokeStyle = circle.color;
        ctx.shadowBlur = 5;
        ctx.shadowColor = circle.color;
        ctx.globalAlpha = currentOpacity < 0 ? 0 : currentOpacity;

        const totalPoints = 120;
        for (let j = 0; j <= totalPoints; j++) {
            let angle = (j / totalPoints) * Math.PI * 2;
            let timeParam = Date.now() * 0.0005;
            let noise = Math.sin(angle * 6 + circle.seed + timeParam) * 16;

            let r = circle.radius + noise;
            let x = centerX + Math.cos(angle) * r;
            let y = centerY + Math.sin(angle) * r;

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

    sparks.forEach((spark) => {
        spark.pulseAngle += spark.pulseSpeed;
        let currentOpacity = spark.opacity + Math.sin(spark.pulseAngle) * 0.15;

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

// 只有在畫面上存在 Canvas 時才啟動引擎
if (canvas) {
    window.addEventListener('resize', resizeCanvas); 
    resizeCanvas(); 
    animate();
}

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
    if (track) track.style.transform = `translateX(-${currentSlideIndex * 33.333}%)`;
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach((btn, i) => {
        if (i === currentSlideIndex) btn.classList.add('active');
        else btn.classList.remove('active');
    });
}

// 3. 回到最上層平滑滾動函數
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 4. 預約表單提交與彈出式通知
function triggerFormSubmit(event) {
    event.preventDefault();
    const alertBox = document.getElementById('custom-alert');
    if (alertBox) alertBox.style.display = 'block';
    setTimeout(() => { event.target.submit(); }, 1500);
}
function closeAlert() { 
    const alertBox = document.getElementById('custom-alert');
    if (alertBox) alertBox.style.display = 'none'; 
}

// 5. 免費體驗解碼器
function runExperience() {
    const nameEl = document.getElementById('user-name');
    const birthEl = document.getElementById('user-birth');
    if (!nameEl || !birthEl) return;

    const name = nameEl.value;
    const birth = birthEl.value;
    if (!name || !birth) { alert("請輸入您的稱呼與生辰。"); return; }
    const date = new Date(birth); const seed = date.getDate() + date.getMonth() + date.getHours();
    const elements = ["潤木 (Wood)", "烈火 (Fire)", "厚土 (Earth)", "剛金 (Metal)", "清水 (Water)"];
    const samples = [
        { id: 6, name: "Ardra (參宿)", desc: "代表靈魂在經歷淬鍊後散發的鑽石光芒。具備極強的穿透力與重建能量。", svg: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="none" stroke="rgba(0, 229, 255, 0.3)" stroke-width="0.5"/><polygon points="50,15 80,50 50,85 20,50" fill="none" stroke="#00e5ff" stroke-width="1.2"/><circle cx="50" cy="50" r="2.5" fill="#33ffaa"/></svg>` },
        { id: 14, name: "Chitra (角宿)", desc: "代表宇宙極致的工藝與結構美。這類頻率者天生具備對秩序、美感與邏輯的敏閱洞察力。", svg: `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="none" stroke="rgba(0, 229, 255, 0.3)" stroke-width="0.5"/><polygon points="50,15 80,32 80,68 50,85 20,68 20,32" fill="none" stroke="#00e5ff" stroke-width="1.2"/><line x1="50" y1="15" x2="50" y2="85" stroke="rgba(51, 255, 170, 0.5)" stroke-width="0.5"/></svg>` }
    ];
    const result = samples[seed % 2];
    const expResult = document.getElementById('experience-result');
    const totemOut = document.getElementById('totem-output');
    const resText = document.getElementById('result-text');

    if (expResult) expResult.style.display = 'block';
    if (totemOut) totemOut.innerHTML = result.svg;
    if (resText) resText.innerHTML = `暨定主體 ── <strong>${name.toUpperCase()}</strong>，座標已定錨：<br><br>■ 五行屬性：${elements[seed % 5]}<br>■ 吠陀星宿：第 ${result.id} 星宿 ── ${result.name}<br>■ 幾何頻率：${result.desc}`;
}

// 一鍵複製當前網頁網址功能
function copyCurrentUrl() {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(function() {
        alert('網址已成功複製至剪貼簿');
    }).catch(function(err) {
        const textArea = document.createElement("textarea");
        textArea.value = currentUrl;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('網址已成功複製至剪貼簿');
    });
}

// 頂部動態文字副標題輪播排程
document.addEventListener("DOMContentLoaded", () => {
    const subtitles = document.querySelectorAll('.dynamic-subtitle');
    if (subtitles.length === 0) return;

    let currentIndex = 0;
    const switchInterval = 4000;

    setInterval(() => {
        subtitles[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % subtitles.length;
        subtitles[currentIndex].classList.add('active');
    }, switchInterval);
});

// 手機版響應式漢堡選單控制
function toggleMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links-container');

    if (menuBtn && navLinks) {
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('open');

        if (navLinks.classList.contains('open')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
}

function closeMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links-container');

    if (menuBtn && navLinks) {
        menuBtn.classList.remove('active');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
    }
}

// QA 折疊控制
function toggleFaq(element) {
    const isActive = element.classList.contains('active');

    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });

    if (!isActive) {
        element.classList.add('active');
    }
}

// 動態載入 Footer
document.addEventListener("DOMContentLoaded", function () {
    const footerPlaceholder = document.getElementById("footer-placeholder");
    
    if (footerPlaceholder) {
        fetch("footer.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error("無法讀取 footer 檔案");
                }
                return response.text();
            })
            .then(htmlData => {
                footerPlaceholder.innerHTML = htmlData;
                if (typeof applyLang === "function" && typeof currentLang !== "undefined") {
                    applyLang(currentLang); 
                }
            })
            .catch(error => {
                console.error("載入 Footer 失敗:", error);
            });
    }
});

// 💡 摺疊按鈕事件（保留唯一一處，且包含安全檢查）
const toggleBtn = document.getElementById('toggleBtn');
const collapseContent = document.getElementById('collapseContent');

if (toggleBtn && collapseContent) {
    toggleBtn.addEventListener('click', function () {
        this.classList.toggle('active');
        collapseContent.classList.toggle('active');

        if (collapseContent.classList.contains('active')) {
            collapseContent.style.maxHeight = collapseContent.scrollHeight + "px";
            const textSpan = toggleBtn.querySelector('span:first-child');
            if (textSpan) textSpan.innerText = "關：LIFE+ 四大美學維度演算法";
        } else {
            collapseContent.style.maxHeight = "0";
            const textSpan = toggleBtn.querySelector('span:first-child');
            if (textSpan) textSpan.innerText = "開：LIFE+ 四大美學維度演算法";
        }
    });
}

// 下載科學報告
function downloadScienceReport() {
    const EN = typeof currentLang !== 'undefined' && currentLang === 'en';
    const T = EN ? {
        htmlLang: 'en', pageTitle: 'LIFE+ Memory & Healing System: Scientific Evidence Summary',
        title: 'LIFE+ Memory & Healing System: Scientific Evidence',
        subtitle: 'An Evidence-Based Summary of Design, Neuroscience & Brain Health',
        s1Title: '✦ Let\'s Walk Toward a Balanced Life, Together',
        s1Body: `✍️ Hi, I'm Winnie.<br>
            Before founding this project in early 2026, I spent years like many others pushing forward in a fast-paced career, climbing step by step from an entry role to management.
            That relentless pressure and life's turns left me off-balance, depleted, even anxious and exhausted.<br>
            Through the ups and downs, in a rare moment of breathing room, I decided to stop and take a hard look at my own life.
            I asked myself: could I turn my talent for "translating beauty" and the rational thinking I'd sharpened over the years into a design practice that helps others while reigniting my own passion for life?<br>
            After much reflection, I began reorganizing the deep logic of Ziwei astrology and the Five Elements through a modern algorithm, turning it into clean, pure geometric coordinate design.
            This isn't traditional fortune-telling superstition — it's closer to a <strong>psychological support</strong> lens,
            using <strong>scientific logic</strong> to help you untangle a messy life story and <strong>rebuild inner order through a "memory repair project."</strong>
            This is how I healed myself, and I hope this cross-disciplinary expertise, built over half a lifetime, can heal a small part of you too.
            <strong>When you face life's sudden storms, LIFE+ MATRIX aims to be a silent psychological companion — steadily guarding your inner world and offering calm support to move forward.</strong>`,
        s2Title: '✦ Clinical & Neuroscience Basis',
        s2Intro: 'International neuroscience and clinical psychology research shows that regular visual-line stimulation, life-story reminiscence, and anchoring to personal symbols can build deep psychological safety and brain protection:',
        s2Item1Title: 'Brain Activation & Non-Pharmacological Intervention',
        s2Item1Body: 'Clinical evidence shows that structured life-story and visual-symbol Reminiscence Therapy can effectively slow cognitive decline.',
        s2Item1Link: '🔗 See the Alzheimer\'s Association on non-pharmacological therapy progress →',
        s2Item2Title: 'Slowing Dementia & Building Cognitive Reserve',
        s2Item2Body: 'Early structured archiving and mental anchoring of personal life events can effectively build "Cognitive Reserve," significantly delaying dementia progression later in life.',
        s2Item2Link: '🔗 See the NIA (National Institute on Aging) on cognitive reserve & brain protection →',
        s3Title: '✦ Digital Assets & Physical Memorial Carriers',
        s3Body: 'The LIFE+ System encodes fleeting life moments into warm, eternal geometric rings within the cosmos. This visual coordinate works beautifully as a digital wallpaper and memory archive, and later becomes the key index for premium physical laser-engraved memorial pieces or custom digital books — a trustworthy anchor point amid life\'s chaos.',
        btnPrint: 'Save or Print Report',
        btnBooking: 'Go to Booking',
        footerNote: 'This evidence is based on frameworks from neuroaesthetics and cognitive psychology.',
        alertBlocked: 'Your browser blocked the pop-up. Please allow pop-ups to view the scientific evidence.'
    } : {
        htmlLang: 'zh-TW', pageTitle: 'LIFE+ 記憶與療癒系統計畫：科學實證與醫學文獻摘要',
        title: 'LIFE+ 記憶與療癒系統計畫科學實證',
        subtitle: '設計學、神經科學與大腦健康之實證學術摘要',
        s1Title: '✦ 一起同行找回平衡生活吧!',
        s1Body: `✍️ 您好，我是 Winnie。<br>
            在 2026 年初創立這個計畫之前，我和許多人一樣，在節奏緊湊的職場裡努力了多年，一步步從基層做到管理職級。
            這些高度緊繃的壓力環境與生活變故，讓我們失衡、內耗，甚至充滿焦慮與疲憊。<br>
            經歷了不平順人生的起伏，在喘息的空間裡，我決定停下腳步審視自己的人生。
            我問自己，能不能把天賦中「美學轉譯」與時間練就的「理性思維」，
            轉化為一項能兼顧助人與提升生命熱情的設計事業？<br>
            苦思沉澱許久，我試著將深奧的紫微八字與陰陽五行規律，用現代演算法重新梳理，轉化為乾淨、純粹的幾何座標設計。
            這不是傳統算命迷信，更像是融合了<strong>心理支持</strong>的視角，
            用<strong>科學邏輯</strong>幫你把雜亂的人生故事理出頭緒、<strong>重建內心秩序的「記憶修復工程」。</strong>
            這是我療癒自己的方式，也希望用自己半生累積的跨界專業，能夠也治癒您的一小部分。
            <strong>在您面對生命突如其來的風雨時，LIFE+ MATRIX將是一個無聲的心理陪伴者，安穩地守護著您的內心，給予您一份從容前行的支撐與力量。</strong>`,
        s2Title: '✦ 臨床醫學與神經科學依據',
        s2Intro: '根據國際神經科學與臨床心理學研究指出，透過規律的視覺線條刺激、生命故事回溯以及個人專屬符號的錨定，能建立深度的心理安全感與大腦防護：',
        s2Item1Title: '活化大腦與非藥物介入療法',
        s2Item1Body: '臨床證實，透過結構化的生命故事、視覺符號回溯療法（Reminiscence Therapy），能有效減緩認知功能退化。',
        s2Item1Link: '🔗 查閱阿茲海默症協會 (Alzheimer\'s Association) 非藥物介入研究進展 →',
        s2Item2Title: '減緩失智與提升認知儲備',
        s2Item2Body: '提早建立個人生命事件的結構化封存與精神錨定，能有效累積大腦的「認知儲備」（Cognitive Reserve），在年長時顯著延緩失智病程。',
        s2Item2Link: '🔗 查閱美國國家老化研究所 (NIA) 關於認知儲備與大腦保護機制 →',
        s3Title: '✦ 數位資產與實體紀念載體',
        s3Body: 'LIFE+ 系統將稍縱即逝的生命瞬間，編碼為宇宙中溫暖而永恆的幾何年輪。此視覺座標不僅適合作為數位桌布與記憶封存，更是日後轉化為高質感實體雷雕記憶載體、客製化數位書籍的關鍵索引，在慌亂的時空中提供最值得信賴的錨定點。',
        btnPrint: '儲存或列印報告',
        btnBooking: '前往專屬預約',
        footerNote: '本實證基於神經美學與認知心理學框架推演。',
        alertBlocked: '您的瀏覽器封鎖了彈出視窗，請允許彈出以查閱科學實證。'
    };

    const scienceHtmlContent = `
<!DOCTYPE html> 
<html lang="${T.htmlLang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${T.pageTitle}</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@300;400&display=swap" rel="stylesheet">
    <style>
        body { background-color: #0A0C12; color: #E8EAF0; font-family: 'Noto Serif TC', serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; padding: 40px 20px; box-sizing: border-box; }
        .report-card { width: 100%; max-width: 800px; background: #111420; border: 0.5px solid rgba(232, 234, 240, 0.15); border-radius: 16px; padding: 45px 50px; box-sizing: border-box; box-shadow: 0 10px 40px rgba(0,0,0,0.6); position: relative; }
        .header-logo { font-size: 0.8125rem; letter-spacing: 6px; color: #8A90A8; text-align: center; margin-bottom: 25px; }
        .title { font-size: 2.25rem; font-weight: 300; letter-spacing: 3px; color: #ffffff; text-align: center; margin-bottom: 6px; }
        .subtitle { font-size: 1rem; color: #8A90A8; letter-spacing: 1.5px; text-align: center; margin-bottom: 40px; }
        .section-title { font-size: 1.25rem; letter-spacing: 2px; color: #00e5ff; margin-top: 30px; margin-bottom: 12px; border-bottom: 0.5px solid rgba(0, 229, 255, 0.2); padding-bottom: 6px; }
        .content-box { font-size: 1rem; line-height: 1.8; letter-spacing: 1.5px; color: #D1D4E0; margin-bottom: 25px; text-align: justify; }
        .action-zone { text-align: center; margin-top: 40px; border-top: 0.5px solid rgba(232, 234, 240, 0.1); padding-top: 30px; }
        .btn-download-now, .btn-back-to-booking { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 10px 22px; background: transparent; font-family: 'Noto Serif TC', serif; font-size: 12px; letter-spacing: 1.5px; border-radius: 20px; cursor: pointer; text-decoration: none !important; transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1); white-space: nowrap; box-sizing: border-box; }
        .btn-download-now { border: 0.5px solid rgba(232, 234, 240, 0.3); color: #8A90A8; }
        .btn-download-now:hover { border-color: #ffffff; color: #ffffff; box-shadow: 0 0 12px rgba(255,255,255,0.1); }
        .btn-back-to-booking { border: 0.5px solid #00e5ff; color: #00e5ff; }
        .btn-back-to-booking:hover { background: #00e5ff; color: #111420; box-shadow: 0 0 15px rgba(0,229,255,0.3); }
        .footer-note { font-size: 11px; color: #62687F; letter-spacing: 1px; line-height: 1.6; margin-top: 25px; text-align: center; }
        @media (max-width: 880px) { .report-card {padding: 30px 20px;} }
    </style>
</head>
<body>
    <div class="report-card">
        <div class="header-logo">LIFE+ Legacy Matrix</div>
        <div class="title">${T.title}</div>
        <div class="subtitle">${T.subtitle}</div>
        <div class="section-title">${T.s1Title}</div>
        <div class="content-box">${T.s1Body}</div>
        <div class="section-title">${T.s2Title}</div>
        <div class="content-box">
            ${T.s2Intro}<br><br>
            1. <span style="color:#33ffaa;">${T.s2Item1Title}</span>：<br>${T.s2Item1Body}<br><a href="https://www.alz.org/alzheimers-dementia/research_progress/non-pharmacological-therapies" style="color:#00e5ff;" target="_blank">${T.s2Item1Link}</a><br><br>
            2. <span style="color:#33ffaa;">${T.s2Item2Title}</span>：<br>${T.s2Item2Body}<br><a href="https://www.nia.nih.gov/news/cognitive-reserve-what-it-and-how-does-it-protect-brain" style="color:#00e5ff;" target="_blank">${T.s2Item2Link}</a>
        </div>
        <div class="section-title">${T.s3Title}</div>
        <div class="content-box">${T.s3Body}</div>
        <div class="action-zone">
            <button class="btn-download-now" onclick="window.print()">${T.btnPrint}</button>
            <a href="https://xuexue-ni.github.io/LIFE-LM/#booking" target="_top" class="btn-back-to-booking">${T.btnBooking}</a>
            <div class="footer-note">© 2026 LIFE+ Legacy Matrix System & XUEXUEni Studio.<br>${T.footerNote}</div>
        </div>
    </div>
</body>
</html>`;

    const newWindow = window.open();
    if (newWindow) {
        newWindow.document.open();
        newWindow.document.write(scienceHtmlContent);
        newWindow.document.close();
    } else {
        alert(T.alertBlocked);
    }
}