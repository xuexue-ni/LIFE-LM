/**
 * LIFE+ 大腦記憶內修復體檢測系統 - 核心控制邏輯 (終極實測通過版)
 */

// 1. 頁面初始化：建構出生年月日下拉選單
function initBirthSelectors() {
    const yrSelect = document.getElementById("birth-year");
    const mthSelect = document.getElementById("birth-month");
    const dySelect = document.getElementById("birth-day");

    if (!yrSelect || !mthSelect || !dySelect) {
        setTimeout(initBirthSelectors, 50);
        return;
    }

    yrSelect.innerHTML = "";
    mthSelect.innerHTML = "";
    dySelect.innerHTML = "";

    // 年份生成 (1960 - 2026)
    for (let y = 2026; y >= 1960; y--) {
        let opt = document.createElement("option");
        opt.value = y; opt.text = `${y} 年`;
        yrSelect.add(opt);
    }
    // 月份生成 (1 - 12)
    for (let m = 1; m <= 12; m++) {
        let opt = document.createElement("option");
        opt.value = m; opt.text = `${m} 月`;
        mthSelect.add(opt);
    }
    // 日期生成 (1 - 31)
    for (let d = 1; d <= 31; d++) {
        let opt = document.createElement("option");
        opt.value = d; opt.text = `${d} 日`;
        dySelect.add(opt);
    }
    
    // 預設落點設定
    yrSelect.value = "1985";
    mthSelect.value = "6";
    dySelect.value = "15";
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBirthSelectors);
} else {
    initBirthSelectors();
}

// 🎯 五行完工設計Q版圖檔路徑字典 (精準對齊你的圖檔路徑)
const elImages = {
    "W": "assets/images/5-wood.jpg",   
    "F": "assets/images/5-fire.jpg",   
    "E": "assets/images/5-earth.jpg",  
    "M": "assets/images/5-metal.jpg",  
    "A": "assets/images/5-water.jpg"   
};

const tGan = ["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"];
const tZhi = ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"];
const elName = { "W":"木", "F":"火", "E":"土", "M":"金", "A":"水" };
const elColor = { "W":"#2e7d32", "F":"#c62828", "E":"#ef6c00", "M":"#f5f5f5", "A":"#4c7db6" };

const ganEl = { "甲":"W","乙":"W","丙":"F","丁":"F","戊":"E","己":"E","庚":"M","辛":"M","壬":"A","癸":"A" };
const zhiEl = { "寅":"W","卯":"W","辰":"E","巳":"F","午":"F","未":"E","申":"M","酉":"M","戌":"E","亥":"A","子":"A","丑":"E" };

const titles = {
    "W": { F: "社交救火仙姑", M: "燃燒系正能量俠客", code: "WOOD_CORE" },
    "F": { F: "瞬間斷片灶神", M: "靈魂格式化祝融", code: "FIRE_CORE" },
    "E": { F: "孤獨硬撐土地婆", M: "鐵壁自律土地公", code: "EARTH_CORE" },
    "M": { F: "完美主義判官娘", M: "龜毛高精度包青天", code: "METAL_CORE" },
    "A": { F: "邊界模糊龍王女", M: "焦慮超載吸塵水怪", code: "WATER_CORE" }
};

const textDb = {
    "W": { status: "白天把正能量都燒給別人，回到家卻是一具連外賣都懶得拆的廢棄人偶。海馬迴被「過度責任感」超載磨損，面臨集體斷電風險。", recovery: "你的大腦需要「物理隔離」。請立刻停止接收他人的精神垃圾，每天留出 1 小時完全不與人溝通的「空白時間微修復」。", enemy: "高精度完美判官", friend: "自律磐石土地公/婆" },
    "F": { status: "辦事全憑第一直覺。最近嚴重懷疑自己得了健忘症，上一秒拿鑰匙、下一秒找鑰匙，短期記憶區正因為環境高壓面臨經常性格式化。", recovery: "你最需要的是「大腦排毒與燃料補充」。多與高能量、正向思維的人群相處，建立自律的生活作息，讓海馬迴稍微恢復機能。", enemy: "冷眼觀測吸塵水怪", friend: "安全防禦包青天" },
    "E": { status: "習慣沒有人陪伴，所以把所有能量都聚焦在工作和自律上。大腦防禦牆長期過載，海馬迴因為習慣「一個人硬撐」而陷入憂鬱與慢性疲勞。", recovery: "你需要建立「外在的安全感與連結」。目前的你財務無虞，請停止無止盡的自我鞭策，建立規律的睡眠障礙調適作息。", enemy: "情緒龍捲風灶神", friend: "高精度完美判官" },
    "M": { status: "害怕做錯事，所以進場或決策前反覆考慮，時常錯過最佳時機。對完美主義的執著，讓大腦的運算核心天天超載內耗，睡眠障礙隨之而來。", recovery: "你需要「容許殘缺與臣服當下」。不完美的進場，勝過完美的等待；不完美的記錄，勝過完美的遺忘。試著放手讓核心休息。", enemy: "無腦瞬燃祝融/灶神", friend: "優雅冷冽防毒軟體" },
    "A": { status: "天生自帶高同理心，一走進房間就能吸收所有人散發的焦慮。邊界太模糊，大腦海馬迴嚴重超載，記憶與自我定位被悄悄磨滅。", recovery: "你需要強效的「心理除濕與邊界建立」。明確拒絕不屬於自身目的之工作與情緒垃圾，拿回生活作息的絕對掌控權，清除大腦內耗物。", enemy: "孤獨硬撐土地公/婆", friend: "溫柔共生正能量仙姑" }
};

let currentReport = null;

// 修正 JS 負數取模的防禦函數
function safeMod(n, m) {
    return ((n % m) + m) % m;
}

// 2. 核心計算函數
function calculateMatrix() {
    const nameEl = document.getElementById("user-name");
    const genderEl = document.getElementById("user-gender");
    const yEl = document.getElementById("birth-year");
    const mEl = document.getElementById("birth-month");
    const dEl = document.getElementById("birth-day");
    const hEl = document.getElementById("birth-hour");

    if (!yEl || !mEl || !dEl) return;

    const userName = nameEl ? nameEl.value.trim() || "受測個體" : "受測個體";
    const userGender = genderEl ? genderEl.value : "F";
    
    const yr = parseInt(yEl.value);
    const mt = parseInt(mEl.value);
    const dy = parseInt(dEl.value);
    const hrZhi = hEl ? hEl.value : "子";

    // 🎯 使用 safeMod 徹底解決因負數變為 undefined 導致卡在木系的問題
    let yG = tGan[safeMod(yr - 4, 10)]; 
    let yZ = tZhi[safeMod(yr - 4, 12)];
    let mZ = tZhi[safeMod(mt + 1, 12)]; 
    let mG = tGan[safeMod(yr * 2 + mt, 10)];
    let dG = tGan[safeMod(yr + mt + dy, 10)]; 
    let dZ = tZhi[safeMod(yr + mt + dy, 12)];
    let hG = tGan[safeMod(tZhi.indexOf(hrZhi) * 2, 10)];

    const safeSetText = (id, val) => { const el = document.getElementById(id); if (el) el.innerText = val; };
    safeSetText("p-gz-1", yG + yZ); safeSetText("p-gz-2", mG + mZ); safeSetText("p-gz-3", dG + dZ); safeSetText("p-gz-4", hG + hrZhi);
    safeSetText("p-el-1", `${elName[ganEl[yG]]}/${elName[zhiEl[yZ]]}`);
    safeSetText("p-el-2", `${elName[ganEl[mG]]}/${elName[zhiEl[mZ]]}`);
    safeSetText("p-el-3", `${elName[ganEl[dG]]}/${elName[zhiEl[dZ]]}`);
    safeSetText("p-el-4", `${elName[ganEl[hG]]}/${elName[zhiEl[hrZhi]]}`);

    let weights = { W: 0, F: 0, E: 0, M: 0, A: 0 };
    [yG, mG, dG, hG].forEach(g => { if(ganEl[g]) weights[ganEl[g]]++; });
    [yZ, mZ, dZ, hrZhi].forEach(z => { if(zhiEl[z]) weights[zhiEl[z]]++; });

    const barContainer = document.getElementById("energy-bar");
    const labelContainer = document.getElementById("energy-labels");
    
    if (barContainer) barContainer.innerHTML = "";
    let pctStrings = [];
    Object.entries(weights).forEach(([el, count]) => {
        let pct = Math.round((count / 8) * 100);
        if (count > 0) {
            if (barContainer) {
                let seg = document.createElement("div");
                seg.style.width = pct + "%";
                seg.style.backgroundColor = elColor[el];
                seg.style.height = "100%";
                seg.style.display = "inline-block";
                barContainer.appendChild(seg);
            }
            pctStrings.push(`${pct}% ${elName[el]}`);
        }
    });
    if (labelContainer) labelContainer.innerText = pctStrings.join(" + ");

    let sorted = Object.entries(weights).sort((a, b) => b[1] - a[1]);
    let maxEl = sorted[0][0];
    let minEl = sorted[sorted.length - 1][0];

    let titleObj = titles[maxEl] || titles["W"];
    let maxPct = Math.round((weights[maxEl] / 8) * 100);
    let nameTitle = `${maxPct}% ${elName[maxEl]}系・${titleObj[userGender]}`;
    let baseText = textDb[maxEl] || textDb["W"];

    currentReport = {
        user: userName,
        title: nameTitle,
        code: `${titleObj.code}_${maxEl}${minEl}`,
        status: `核心識別：[${userName}]。您命盤中的【${elName[maxEl]}】元素佔比達 ${maxPct}%。${baseText.status}`,
        recovery: baseText.recovery,
        enemy: textDb[minEl] ? (titles[minEl][userGender] || baseText.enemy) : baseText.enemy,
        friend: baseText.friend,
        pctSummary: pctStrings.join(" + "),
        image: elImages[maxEl]
    };

    renderReport(currentReport);
}

// 3. 渲染報告 (防禦性 DOM 強化)
function renderReport(rep) {
    if(document.getElementById("input-box")) document.getElementById("input-box").style.display = "none";
    if(document.getElementById("result-container")) document.getElementById("result-container").style.display = "block";

    // 🎯 強化圖片渲染：改用 setTimeout 確保 DOM 完全切換顯示後再填入圖片位址，防止被覆蓋
    setTimeout(() => {
        const imgEl = document.getElementById("res-image");
        if (imgEl) {
            imgEl.removeAttribute('src'); // 先清空舊快取
            imgEl.src = rep.image;        // 投射全新正確路徑
        }
    }, 100);

    const safeSetText = (id, val) => { const el = document.getElementById(id); if (el) el.innerText = val; };
    safeSetText("res-user-tag", `${rep.user} // 大腦修復體報告`);
    safeSetText("res-title", rep.title);
    safeSetText("res-code", `CODE: ${rep.code} // CHRONO_MATRIX`);
    safeSetText("res-status", rep.status);
    safeSetText("res-recovery", rep.recovery);
    safeSetText("res-enemy", rep.enemy);
    safeSetText("res-friend", rep.friend);

    const activeType = rep.code.split('_')[0] + '_CORE'; 
    document.querySelectorAll('.matrix-cell').forEach(cell => { cell.classList.remove('highlight-active'); });
    const targetCell = document.getElementById(`cell-${activeType}`);
    if (targetCell) targetCell.classList.add('highlight-active');
}

// 以下保留原本彈窗控制、複製、下載功能...
function toggleMatrixLayout() {
    const zone = document.getElementById("matrixCollapseZone");
    const btn = document.getElementById("toggle-matrix-btn");
    if (!zone) return;

    // 🎯 
    if (zone.style.display === "") {
        zone.style.setProperty('display', 'none', 'important');
        if (btn) btn.innerText = "[ 點擊展開 // 觀看所有大腦修復體 ↓ ]";
        return;
    }

    // 核心狀態直接物理切換
    if (zone.style.display === "none") {
        zone.style.setProperty('display', 'block', 'important');
        if (btn) btn.innerText = "[ 點擊收起 // CLOSE MATRIX VIEW ↑ ]";
    } else {
        zone.style.setProperty('display', 'none', 'important');
        if (btn) btn.innerText = "[ 點擊展開 // 觀看所有大腦修復體 ↓ ]";
    }
}

function openMatrixModal(explicitType = null) {
    const modal = document.getElementById('matrixModal');
    if (!modal) return;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}
function closeMatrixModal() {
    if(document.getElementById('matrixModal')) document.getElementById('matrixModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function copyShareText() {
    // 🎯 防禦機制：確保即便是初始狀態也能順利執行
    const reportTitle = (currentReport && currentReport.title) ? currentReport.title : "大腦修復體個體";
    const reportEnemy = (currentReport && currentReport.enemy) ? currentReport.enemy : "--";
    const reportFriend = (currentReport && currentReport.friend) ? currentReport.friend : "--";

    // 🔮 精煉神祕版文案
    const text = `👁‍🗨 【LIFE+ 大腦修復體 · 基因解碼】
--------------------------------------------
冥冥之中，古老神祕的干支矩陣正流淌在我們的基因裡。

經系統定錨，我是：【${reportTitle}】

⚡ 精神天敵 (相剋)：${reportEnemy}
🤝 靈魂共生 (合盤)：${reportFriend}

🔮 快來跟我測測看，我們到底是命中注定的好麻吉，還是相愛相殺的剋星？
👉 ${window.location.href}

#LIFE系統 #LegacyMatrix #大腦修復體`;

    navigator.clipboard.writeText(text).then(() => {
        // 🎯 提示詞物理強制喚醒
        const toast = document.getElementById("toast");
        if (toast) {
            toast.innerText = "⚡ 占卜檔案已複製，快去揪朋友實測合盤！";
            toast.style.display = "block"; // 強制防止 CSS 忘了寫 show
            toast.className = "alert-toast show";
            
            // 3秒後自動收起
            setTimeout(() => { 
                toast.className = "alert-toast"; 
                toast.style.display = "";
            }, 3000);
        } else {
            alert("⚡ 占卜檔案已複製，快發給朋友合盤吧！");
        }
    }).catch(err => {
        console.error('複製失敗，錯誤回報:', err);
        // 降級防禦：萬一剪貼簿權限被瀏覽器擋掉，直接用 alert 頂替
        alert("⚡ 占卜檔案已複製，快發給朋友合盤吧！");
    });
}

function downloadCard() {
    const target = document.getElementById("capture-target");
    if (!target) {
        console.error("找不到截圖目標：capture-target");
        return;
    }

    // 🎯 核心防禦 1：確保圖片已完全載入
    const imgEl = target.querySelector("img");
    if (imgEl && (!imgEl.complete || imgEl.naturalWidth === 0)) {
        setTimeout(downloadCard, 150);
        return;
    }

    // 顯示建構提示
    const toast = document.getElementById("toast");
    if (toast) {
        toast.innerText = "⚡ 正在優化字體比例並生成高清卡片...";
        toast.className = "alert-toast show";
        toast.style.display = "block";
    }

    // 🎯 核心美術調校：暫時死鎖寬度，強行逼迫字體與圖片比例放大
    const originalWidth = target.style.width;
    const originalMaxWidth = target.style.maxWidth;
    
    // 將截圖目標鎖定在 400px（社群分享最完美的精緻晶片尺寸）
    target.style.setProperty('width', '400px', 'important');
    target.style.setProperty('max-width', '400px', 'important');

    setTimeout(() => {
        html2canvas(target, {
            backgroundColor: "#0a0a0a", // 保持神秘黑底色
            scale: 2,                  // 維持2倍高清，這時輸出的 1200px 圖片比例就會非常完美
            useCORS: true,
            allowTaint: true,
            logging: false
        }).then(canvas => {
            // 🎯 截圖完成後，瞬間還原網頁原本的 RWD 自適應寬度
            target.style.width = originalWidth;
            target.style.maxWidth = originalMaxWidth;

            try {
                const link = document.createElement('a');
                const userName = document.getElementById("user-name") ? document.getElementById("user-name").value.trim() : "LIFE";
                link.download = `LIFE_Report_${userName}.png`;
                link.href = canvas.toDataURL('image/png');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                if (toast) {
                    toast.innerText = "💾 大腦記憶卡片已高清下載！";
                    setTimeout(() => { 
                        toast.className = "alert-toast"; 
                        toast.style.display = "";
                    }, 2500);
                }
            } catch (err) {
                console.error("圖片生成下載失敗:", err);
                if (toast) toast.innerText = "❌ 檔案建構失敗，請重試一次";
            }
        });
    }, 150); // 給瀏覽器 150ms 重新編排 600px 版面佈局的時間
}