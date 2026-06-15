<!DOCTYPE html>
<html lang="zh-TW">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LIFE+ Legacy Matrix | 數位生命座標與記憶封存</title>
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/life-code.css">
    <link rel="preconnect" href="https://fonts.googleapis.com/">
    <link rel="stylesheet" href="assets/css/css2">

<body>
    <canvas id="life-space-canvas"></canvas>
    <div id="back-to-top-btn" onclick="scrollToTop()">
        <span class="arrow-icon">↑</span>
        <span>TOP</span>
    </div>
    <nav>
        <a href="#" class="logo-link-top" title="回到頂部">
            <div class="logo">LIFE+</div>
        </a>
        <div class="menu-toggle" id="mobile-menu-btn" onclick="toggleMobileMenu()">
            <span></span>
            <span></span>
        </div>

        <div class="nav-links" id="nav-links-container">
            <a href="#experience" onclick="closeMobileMenu()">免費體驗</a>
            <a href="#philosophy" onclick="closeMobileMenu()">核心原理</a>
            <a href="#solutions" onclick="closeMobileMenu()">留住記憶</a>
            <a href="#booking" onclick="closeMobileMenu()">專屬預約</a>
        </div>
    </nav>
    <div class="content-container">
        <header>
            <h1>瞬間即是永恆 </h1>
            <div class="subtitle-stage" id="experience">
                <h2 class="dynamic-subtitle active">你記憶中的自己是什麼樣子?</h2>
                <h2 class="dynamic-subtitle">傳承記憶，將生命錨定於宇宙座標</h2>
                <h2 class="dynamic-subtitle">探尋基因中流動的陰陽五行美學</h2>
                <h2 class="dynamic-subtitle">在時間的漣漪裡，你是獨一無二的純粹</h2>
            </div>
        </header>
        <!----------演算法----------->
        <main class="calculator">
            <!----立即解碼---->
            <div class="decode-trigger-container" id="trigger-area">
                <p class="decode-intro-text">輸入生辰數據<br>錨定生命在宇宙間的三維度視覺座標</p>
                <button class="btn-decode-trigger" onclick="toggleDecodeSystem()">立即解碼生命矩陣</button>
            </div>

            <div class="decode-expand-wrapper" id="decode-wrapper">
                <!-- 進度指示器 -->
                <div class="prog" id="prog">
                    <div class="pdot active" id="d0">1</div>
                    <div class="pline"></div>
                    <div class="pdot" id="d1">2</div>
                    <div class="pline"></div>
                    <div class="pdot" id="d2">3</div>
                    <div class="pline"></div>
                    <div class="pdot" id="d3">4</div>
                    <div class="pline"></div>
                    <div class="pdot" id="d4">5</div>
                </div>
                <div class="step-label">
                    <span>生辰輸入</span><span>命盤解碼</span><span>情感連結</span><span>視覺元素</span><span>座標輸出</span>
                </div>
                <!-- ── Step 0: 輸入 ── -->
                <div class="step active" id="s0">
                    <div class="card">
                        <div class="card-title">生辰資料 · Birth Data</div>
                        <div class="field-row">
                            <div>
                                <div class="field-label">曆法</div>
                                <select id="iCal">
                                    <option value="solar">國曆</option>
                                    <option value="lunar">農曆</option>
                                </select>
                            </div>
                            <div>
                                <div class="field-label">年</div>
                                <select id="iY">
                                    <option value="2026">2026年</option>
                                    <option value="2025">2025年</option>
                                    <option value="2024">2024年</option>
                                    <option value="2023">2023年</option>
                                    <option value="2022">2022年</option>
                                    <option value="2021">2021年</option>
                                    <option value="2020">2020年</option>
                                    <option value="2019">2019年</option>
                                    <option value="2018">2018年</option>
                                    <option value="2017">2017年</option>
                                    <option value="2016">2016年</option>
                                    <option value="2015">2015年</option>
                                    <option value="2014">2014年</option>
                                    <option value="2013">2013年</option>
                                    <option value="2012">2012年</option>
                                    <option value="2011">2011年</option>
                                    <option value="2010">2010年</option>
                                    <option value="2009">2009年</option>
                                    <option value="2008">2008年</option>
                                    <option value="2007">2007年</option>
                                    <option value="2006">2006年</option>
                                    <option value="2005">2005年</option>
                                    <option value="2004">2004年</option>
                                    <option value="2003">2003年</option>
                                    <option value="2002">2002年</option>
                                    <option value="2001">2001年</option>
                                    <option value="2000">2000年</option>
                                    <option value="1999">1999年</option>
                                    <option value="1998">1998年</option>
                                    <option value="1997">1997年</option>
                                    <option value="1996">1996年</option>
                                    <option value="1995">1995年</option>
                                    <option value="1994">1994年</option>
                                    <option value="1993">1993年</option>
                                    <option value="1992">1992年</option>
                                    <option value="1991">1991年</option>
                                    <option value="1990">1990年</option>
                                    <option value="1989">1989年</option>
                                    <option value="1988">1988年</option>
                                    <option value="1987">1987年</option>
                                    <option value="1986">1986年</option>
                                    <option value="1985">1985年</option>
                                    <option value="1984">1984年</option>
                                    <option value="1983">1983年</option>
                                    <option value="1982">1982年</option>
                                    <option value="1981">1981年</option>
                                    <option value="1980">1980年</option>
                                    <option value="1979">1979年</option>
                                    <option value="1978">1978年</option>
                                    <option value="1977">1977年</option>
                                    <option value="1976">1976年</option>
                                    <option value="1975">1975年</option>
                                    <option value="1974">1974年</option>
                                    <option value="1973">1973年</option>
                                    <option value="1972">1972年</option>
                                    <option value="1971">1971年</option>
                                    <option value="1970">1970年</option>
                                    <option value="1969">1969年</option>
                                    <option value="1968">1968年</option>
                                    <option value="1967">1967年</option>
                                    <option value="1966">1966年</option>
                                    <option value="1965">1965年</option>
                                    <option value="1964">1964年</option>
                                    <option value="1963">1963年</option>
                                    <option value="1962">1962年</option>
                                    <option value="1961">1961年</option>
                                    <option value="1960">1960年</option>
                                    <option value="1959">1959年</option>
                                    <option value="1958">1958年</option>
                                    <option value="1957">1957年</option>
                                    <option value="1956">1956年</option>
                                    <option value="1955">1955年</option>
                                    <option value="1954">1954年</option>
                                    <option value="1953">1953年</option>
                                    <option value="1952">1952年</option>
                                    <option value="1951">1951年</option>
                                    <option value="1950">1950年</option>
                                    <option value="1949">1949年</option>
                                    <option value="1948">1948年</option>
                                    <option value="1947">1947年</option>
                                    <option value="1946">1946年</option>
                                    <option value="1945">1945年</option>
                                    <option value="1944">1944年</option>
                                    <option value="1943">1943年</option>
                                    <option value="1942">1942年</option>
                                    <option value="1941">1941年</option>
                                    <option value="1940">1940年</option>
                                    <option value="1939">1939年</option>
                                    <option value="1938">1938年</option>
                                    <option value="1937">1937年</option>
                                    <option value="1936">1936年</option>
                                    <option value="1935">1935年</option>
                                    <option value="1934">1934年</option>
                                    <option value="1933">1933年</option>
                                    <option value="1932">1932年</option>
                                    <option value="1931">1931年</option>
                                    <option value="1930">1930年</option>
                                    <option value="1929">1929年</option>
                                    <option value="1928">1928年</option>
                                    <option value="1927">1927年</option>
                                    <option value="1926">1926年</option>
                                    <option value="1925">1925年</option>
                                    <option value="1924">1924年</option>
                                    <option value="1923">1923年</option>
                                    <option value="1922">1922年</option>
                                    <option value="1921">1921年</option>
                                    <option value="1920">1920年</option>
                                    <option value="1919">1919年</option>
                                    <option value="1918">1918年</option>
                                    <option value="1917">1917年</option>
                                    <option value="1916">1916年</option>
                                </select>
                            </div>
                            <div>
                                <div class="field-label">月</div>
                                <select id="iM">

                                </select>
                            </div>
                            <div>
                                <div class="field-label">日</div>
                                <select id="iD">
                                    <option value="1">1日</option>
                                    <option value="2">2日</option>
                                    <option value="3">3日</option>
                                    <option value="4">4日</option>
                                    <option value="5">5日</option>
                                    <option value="6">6日</option>
                                    <option value="7">7日</option>
                                    <option value="8">8日</option>
                                    <option value="9">9日</option>
                                    <option value="10">10日</option>
                                    <option value="11">11日</option>
                                    <option value="12">12日</option>
                                    <option value="13">13日</option>
                                    <option value="14">14日</option>
                                    <option value="15">15日</option>
                                    <option value="16">16日</option>
                                    <option value="17">17日</option>
                                    <option value="18">18日</option>
                                    <option value="19">19日</option>
                                    <option value="20">20日</option>
                                    <option value="21">21日</option>
                                    <option value="22">22日</option>
                                    <option value="23">23日</option>
                                    <option value="24">24日</option>
                                    <option value="25">25日</option>
                                    <option value="26">26日</option>
                                    <option value="27">27日</option>
                                    <option value="28">28日</option>
                                    <option value="29">29日</option>
                                    <option value="30">30日</option>
                                    <option value="31">31日</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <div class="field-label">出生時辰</div>
                            <select id="iH" style="width:100%">
                                <option value="0">子時 00:00–01:00</option>
                                <option value="1">子時 01:00–01:59</option>
                                <option value="2">丑時 02:00–02:59</option>
                                <option value="3">丑時 03:00–03:59</option>
                                <option value="4">寅時 04:00–04:59</option>
                                <option value="5">寅時 05:00–05:59</option>
                                <option value="6">卯時 06:00–06:59</option>
                                <option value="7">卯時 07:00–07:59</option>
                                <option value="8">辰時 08:00–08:59</option>
                                <option value="9">辰時 09:00–09:59</option>
                                <option value="10">巳時 10:00–10:59</option>
                                <option value="11">巳時 11:00–11:59</option>
                                <option value="12">午時 12:00–12:59</option>
                                <option value="13">午時 13:00–13:59</option>
                                <option value="14">未時 14:00–14:59</option>
                                <option value="15">未時 15:00–15:59</option>
                                <option value="16">申時 16:00–16:59</option>
                                <option value="17">申時 17:00–17:59</option>
                                <option value="18">酉時 18:00–18:59</option>
                                <option value="19">酉時 19:00–19:59</option>
                                <option value="20">戌時 20:00–20:59</option>
                                <option value="21">戌時 21:00–21:59</option>
                                <option value="22">亥時 22:00–22:59</option>
                                <option value="23">亥時 23:00–23:59</option>
                            </select>
                        </div>
                        <button class="btn-p" onclick="compute()">解碼我的生命座標 →</button>
                    </div>
                </div>

                <!-- ── Step 1: 命盤 + 人格特質 + 構圖預覽 ── -->
                <div class="step" id="s1">
                    <div class="card">
                        <div class="card-title">四柱八字 · Eight Characters</div>
                        <div class="pillar-row" id="pillarD"></div>
                        <div id="elemBars"></div>
                        <div id="healAlert"></div>
                    </div>
                    <div class="card">
                        <div class="card-title">你的色彩人格 · 命運特質</div>
                        <p style="font-size:1rem;color:var(--text3);margin: bottom 16px;font-style:italic">
                            每個元素的色調，都在說一件關於你的事。</p>
                        <div class="trait-grid" id="traitGrid"></div>
                    </div>
                    <div class="card">
                        <div class="card-title">初步構圖語言預覽</div>
                        <div class="palette-strip" id="palStrip"></div>
                        <div id="compDesc" style="font-size:1rem;color:var(--text2);line-height:1.75;"></div>
                    </div>
                    <button class="btn-p" onclick="go(2)">感覺到了，繼續 →</button>
                    <button class="btn-s" onclick="go(0)">← 重新輸入</button>
                </div>

                <!-- ── Step 2: 情感互動（三道問題） ── -->
                <div class="step" id="s2">
                    <div class="card">
                        <div class="card-title">情感記憶 · 視覺喜好</div>

                        <div class="q-block">
                            <div class="q-title">如果這幅畫掛在你最私密的空間裡，你希望它帶給你什麼？</div>
                            <div class="q-sub">選一個最貼近現在的你的答案</div>
                            <div class="choice-grid" id="moodG">
                                <div class="choice-card" onclick="sel(this,&#39;mood&#39;,&#39;healed&#39;)">
                                    <div class="c-icon">🌿</div>
                                    <div class="c-title">讓我靜下來</div>
                                    <div class="c-sub">不需要努力，只是存在就好的那種安靜</div>
                                    <div class="c-hint">→ 大面積留白 · 低彩度 · 沉澱感構圖</div>
                                </div>
                                <div class="choice-card" onclick="sel(this,&#39;mood&#39;,&#39;ignite&#39;)">
                                    <div class="c-icon">🔥</div>
                                    <div class="c-title">提醒我燃燒</div>
                                    <div class="c-sub">每次看到它，都想起自己最想成為的樣子</div>
                                    <div class="c-hint">→ 高對比色 · 放射構圖 · 強焦點</div>
                                </div>
                                <div class="choice-card" onclick="sel(this,&#39;mood&#39;,&#39;connect&#39;)">
                                    <div class="c-icon">✦</div>
                                    <div class="c-title">承載一段關係</div>
                                    <div class="c-sub">送給重要的人，或紀念兩個人之間的某件事</div>
                                    <div class="c-hint">→ 雙焦點構圖 · 互補色對話 · 溫柔質地</div>
                                </div>
                                <div class="choice-card" onclick="sel(this,&#39;mood&#39;,&#39;mark&#39;)">
                                    <div class="c-icon">◎</div>
                                    <div class="c-title">標記一個時刻</div>
                                    <div class="c-sub">某個結束、某個開始，值得被凝固成形狀</div>
                                    <div class="c-hint">→ 儀式感構圖 · 圓形中心象徵 · 深色底</div>
                                </div>
                            </div>
                        </div>

                        <div class="divider"></div>

                        <div class="q-block">
                            <div class="q-title">有一個瞬間或場景，是你最不想忘記的感覺——它是什麼？</div>
                            <div class="q-sub">這個選擇會直接影響畫面的光線質感與空間感</div>
                            <div class="choice-grid" id="memG">
                                <div class="choice-card" onclick="sel(this,&#39;mem&#39;,&#39;morning&#39;)">
                                    <div class="c-icon">🌅</div>
                                    <div class="c-title">斜光穿窗</div>
                                    <div class="c-sub">早晨陽光剛進來的那個角度，塵埃在光裡浮動</div>
                                    <div class="c-hint">→ 斜入光束 · 金色漫射 · 霧感邊緣</div>
                                </div>
                                <div class="choice-card" onclick="sel(this,&#39;mem&#39;,&#39;midnight&#39;)">
                                    <div class="c-icon">🌙</div>
                                    <div class="c-title">深夜獨自清醒</div>
                                    <div class="c-sub">世界安靜了，只有你還亮著燈，什麼都想</div>
                                    <div class="c-hint">→ 深色背景 · 單一光點 · 銳利靜謐感</div>
                                </div>
                                <div class="choice-card" onclick="sel(this,&#39;mem&#39;,&#39;rain&#39;)">
                                    <div class="c-icon">🌧</div>
                                    <div class="c-title">窗外下著雨</div>
                                    <div class="c-sub">在室內聽著雨聲，外面的世界和你之間有一層玻璃</div>
                                    <div class="c-hint">→ 流動紋理 · 冷色漫延 · 層次模糊</div>
                                </div>
                                <div class="choice-card" onclick="sel(this,&#39;mem&#39;,&#39;crowd&#39;)">
                                    <div class="c-icon">🌊</div>
                                    <div class="c-title">人群中心的平靜</div>
                                    <div class="c-sub">外面很吵，但你突然感到某種奇怪的平靜降下來</div>
                                    <div class="c-hint">→ 混沌外圍 · 清晰核心 · 對比張力</div>
                                </div>
                                <div class="choice-card" onclick="sel(this,&#39;mem&#39;,&#39;vast&#39;)">
                                    <div class="c-icon">⛰</div>
                                    <div class="c-title">站在高處看遠</div>
                                    <div class="c-sub">什麼都變小了，胸口有一種說不清楚的遼闊</div>
                                    <div class="c-hint">→ 水平線構圖 · 大比例留白 · 呼吸感</div>
                                </div>
                                <div class="choice-card" onclick="sel(this,&#39;mem&#39;,&#39;gaze&#39;)">
                                    <div class="c-icon">✧</div>
                                    <div class="c-title">某個眼神</div>
                                    <div class="c-sub">有人用一種讓你覺得被完整看見的方式看著你</div>
                                    <div class="c-hint">→ 單一聚焦 · 放射視線感 · 溫度與張力</div>
                                </div>
                            </div>
                        </div>

                        <div class="divider"></div>

                        <div class="q-block">
                            <div class="q-title">你平常最容易被哪一種視覺感受吸引？</div>
                            <div class="q-sub">看圖像時的直覺反應，不需要想太多</div>
                            <div class="choice-grid" id="visG">
                                <div class="choice-card" onclick="sel(this,&#39;vis&#39;,&#39;dark-depth&#39;)">
                                    <div class="c-icon">🖤</div>
                                    <div class="c-title">深色有層次</div>
                                    <div class="c-sub">深背景裡可以挖出很多東西的那種畫</div>
                                </div>
                                <div class="choice-card" onclick="sel(this,&#39;vis&#39;,&#39;light-breath&#39;)">
                                    <div class="c-icon">🤍</div>
                                    <div class="c-title">白底有呼吸感</div>
                                    <div class="c-sub">大量空白，一個輕輕的元素，靜靜放著</div>
                                </div>
                                <div class="choice-card" onclick="sel(this,&#39;vis&#39;,&#39;warm-rich&#39;)">
                                    <div class="c-icon">🟤</div>
                                    <div class="c-title">暖調豐富色</div>
                                    <div class="c-sub">像老照片或油畫，有時間感的飽和色彩</div>
                                </div>
                                <div class="choice-card" onclick="sel(this,&#39;vis&#39;,&#39;cold-sharp&#39;)">
                                    <div class="c-icon">🔷</div>
                                    <div class="c-title">冷調精準感</div>
                                    <div class="c-sub">銀、灰、靛，俐落的線條，礦物質感</div>
                                </div>
                                <div class="choice-card" onclick="sel(this,&#39;vis&#39;,&#39;figurative-nature&#39;)">
                                    <div class="c-icon">🌊</div>
                                    <div class="c-title">具象自然風景</div>
                                    <div class="c-sub">山、海、天空，有真實場景感的風景元素，帶情緒的自然力量</div>
                                    <div class="c-hint">→ 景深透視 · 自然色彩 · 寫實筆觸</div>
                                </div>
                                <div class="choice-card" onclick="sel(this,&#39;vis&#39;,&#39;figurative-figure&#39;)">
                                    <div class="c-icon">🧍</div>
                                    <div class="c-title">具象人物輪廓</div>
                                    <div class="c-sub">人形或局部肢體，剪影或輪廓感，有人的溫度與故事</div>
                                    <div class="c-hint">→ 人物輪廓 · 剪影構圖 · 情感張力</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn-p" id="s2btn" style="opacity:.4;pointer-events:none" onclick="go(3)">繼續選擇視覺元素
                        →</button>
                    <button class="btn-s" onclick="go(1)">← 回上一步</button>
                </div>

                <!-- ── Step 3: 玄學符號 + 質地 ── -->
                <div class="step" id="s3">
                    <div class="card">
                        <div class="card-title">紫微主星 · 命盤性格</div>
                        <p style="font-size:0.875rem;color:var(--text3);margin-bottom:0.875rem;">
                            根據你的命盤自動計算的對應主星特質，可加入畫面符號層
                        </p>
                        <div id="ziwei"
                            style="background:var(--bg2);border-radius:10px;padding:1rem;font-size:0.875rem;line-height:1.85;">
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-title">玄學符號層（最多選3個）</div>
                        <p style="font-size0.875rem;color:var(--text3);margin-bottom:0.75rem;font-style:italic">
                            以極細線條若隱若現地融入畫面背景</p>
                        <div class="sym-grid" id="symG">
                            <div class="sym-card" onclick="togSym(this,&#39;Sri Yantra 宇宙能量幾何矩陣&#39;)">
                                <div class="sym-g">✦</div>
                                <div class="sym-n">Sri Yantra</div>
                                <div class="sym-s">能量矩陣幾何<br>宇宙秩序中心</div>
                            </div>
                            <div class="sym-card" onclick="togSym(this,&#39;Om 梵文種子字 宇宙原初振動&#39;)">
                                <div class="sym-g">ॐ</div>
                                <div class="sym-n">Om · 起源</div>
                                <div class="sym-s">梵文種子字<br>生命原初振動</div>
                            </div>
                            <div class="sym-card" onclick="togSym(this,&#39;Rahu 北交點 今生使命渴望&#39;)">
                                <div class="sym-g">☊</div>
                                <div class="sym-n">Rahu 北交點</div>
                                <div class="sym-s">今生使命<br>靈魂渴望方向</div>
                            </div>
                            <div class="sym-card" onclick="togSym(this,&#39;Ketu 南交點 過去世靈魂記憶&#39;)">
                                <div class="sym-g">☋</div>
                                <div class="sym-n">Ketu 南交點</div>
                                <div class="sym-s">靈魂記憶<br>解脫與放下</div>
                            </div>
                            <div class="sym-card" onclick="togSym(this,&#39;Lagna 上升命宮 靈魂入口&#39;)">
                                <div class="sym-g">⊕</div>
                                <div class="sym-n">Lagna 命宮</div>
                                <div class="sym-s">上升點<br>靈魂入世入口</div>
                            </div>
                            <div class="sym-card" onclick="togSym(this,&#39;Mandala 曼陀羅 圓滿完整象徵&#39;)">
                                <div class="sym-g">◎</div>
                                <div class="sym-n">Mandala</div>
                                <div class="sym-s">圓滿<br>宇宙中心象徵</div>
                            </div>
                            <div class="sym-card" onclick="togSym(this,&#39;癸 天干日主符文 陰水本質智慧&#39;)">
                                <div class="sym-g">癸</div>
                                <div class="sym-n">日主天干</div>
                                <div class="sym-s">癸 · 陰水本質<br>直覺深沉智慧</div>
                            </div>
                            <div class="sym-card" onclick="togSym(this,&#39;☵ 坎卦 水之象 在險中守持正道&#39;)">
                                <div class="sym-g">☵</div>
                                <div class="sym-n">坎卦 ☵</div>
                                <div class="sym-s">水之象<br>在險中守持正道</div>
                            </div>
                            <div class="sym-card" onclick="togSym(this,&#39;☰ 乾卦 天之象 自強不息剛健&#39;)">
                                <div class="sym-g">☰</div>
                                <div class="sym-n">乾卦 ☰</div>
                                <div class="sym-s">天之象<br>自強不息剛健</div>
                            </div>
                            <div class="sym-card" onclick="togSym(this,&#39;紫微星 皇者之星 尊貴精神領袖&#39;)">
                                <div class="sym-g">紫</div>
                                <div class="sym-n">紫微星</div>
                                <div class="sym-s">皇者之星<br>尊貴 · 精神支柱</div>
                            </div>
                            <div class="sym-card" onclick="togSym(this,&#39;七殺星 武將之星 果敢衝鋒毅力&#39;)">
                                <div class="sym-g">殺</div>
                                <div class="sym-n">七殺星</div>
                                <div class="sym-s">武將之星<br>果敢 · 強大毅力</div>
                            </div>
                            <div class="sym-card" onclick="togSym(this,&#39;☯ 太極陰陽 對立統一動靜相生&#39;)">
                                <div class="sym-g">☯</div>
                                <div class="sym-n">太極陰陽</div>
                                <div class="sym-s">對立的統一<br>動靜相生</div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-title">圖像質地 · 物件偏好（最多選2個）</div>
                        <p style="font-size:12px;color:var(--text3);margin-bottom:0.75rem;font-style:italic">
                            你最容易被哪種觸覺感或物件感吸引？</p>
                        <div class="tex-grid" id="texG">
                            <div class="tex-card" onclick="togTex(this,&#39;極簡留白 大量負空間 靜默力量&#39;)">
                                <div class="tex-icon">□</div>
                                <div class="tex-title">極簡留白</div>
                                <div class="tex-sub">大量負空間，一個沉默而精準的焦點</div>
                            </div>
                            <div class="tex-card" onclick="togTex(this,&#39;水墨暈染 東方有機流動 呼吸感&#39;)">
                                <div class="tex-icon">🖌</div>
                                <div class="tex-title">水墨暈染</div>
                                <div class="tex-sub">東方美學，有機流動，像墨落在宣紙上</div>
                            </div>
                            <div class="tex-card" onclick="togTex(this,&#39;幾何精準 數學秩序 理性線條&#39;)">
                                <div class="tex-icon">△</div>
                                <div class="tex-title">幾何精準</div>
                                <div class="tex-sub">數學秩序，精確比例，理性之美</div>
                            </div>
                            <div class="tex-card" onclick="togTex(this,&#39;礦物結晶 石頭紋理 大地質感重量&#39;)">
                                <div class="tex-icon">💎</div>
                                <div class="tex-title">礦物結晶</div>
                                <div class="tex-sub">石頭、晶體、大理石紋，有重量感的美</div>
                            </div>
                            <div class="tex-card" onclick="togTex(this,&#39;舊紙張 時間感 復古油畫肌理溫度&#39;)">
                                <div class="tex-icon">📜</div>
                                <div class="tex-title">紙張時間感</div>
                                <div class="tex-sub">老照片、泛黃紙張、油畫肌理的溫度</div>
                            </div>
                            <div class="tex-card" onclick="togTex(this,&#39;植物葉脈 有機生命線條 自然紋路系統&#39;)">
                                <div class="tex-icon">🌿</div>
                                <div class="tex-title">植物葉脈</div>
                                <div class="tex-sub">葉脈、藤蔓、自然生長的線條系統</div>
                            </div>
                            <div class="tex-card" onclick="togTex(this,&#39;金屬光澤 銀箔燙金 精緻工藝感&#39;)">
                                <div class="tex-icon">✨</div>
                                <div class="tex-title">金屬光澤</div>
                                <div class="tex-sub">銀箔、燙金、金屬面的精緻工藝感</div>
                            </div>
                            <div class="tex-card" onclick="togTex(this,&#39;夜空星塵 宇宙粒子 深邃光點擴散&#39;)">
                                <div class="tex-icon">🌌</div>
                                <div class="tex-title">夜空星塵</div>
                                <div class="tex-sub">宇宙粒子、星點擴散、深邃光點感</div>
                            </div>
                        </div>
                    </div>
                    <button class="btn-p" onclick="go(4)">生成我的專屬圖像描述 →</button>
                    <button class="btn-s" onclick="go(2)">← 回上一步</button>
                </div>

                <!-- ── Step 4: 最終輸出 ── -->
                <div class="step" id="s4">

                    <!-- 權限狀態列 -->
                    <div id="authBar"
                        style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;padding:0.625rem 0.875rem;background:var(--bg3);border:0.5px solid var(--border);border-radius:10px;">
                        <div style="display:flex;align-items:center;gap:8px;">
                            <div id="authDot"
                                style="width:7px;height:7px;border-radius:50%;background:var(--text3);box-shadow:0 0 6px var(--text3)">
                            </div>
                            <span id="authLabel"
                                style="font-size:12px;color:var(--text3);font-family:&#39;DM Mono&#39;,monospace;letter-spacing:1px;">遊客模式
                                · 部分內容已鎖定</span>
                        </div>
                        <button id="authToggleBtn" onclick="openAuthModal()"
                            style="font-size:12px;padding:4px 12px;border-radius:6px;border:0.5px solid var(--border-glow);background:transparent;color:var(--text3);cursor:pointer;font-family:&#39;DM Mono&#39;,monospace;transition:all .2s;">主用戶登入</button>
                    </div>

                    <!-- 公開：情感療癒主張 -->
                    <div class="card">
                        <div class="card-title">你的情感療癒主張</div>
                        <div class="heal-box" id="healBox"></div>
                    </div>

                    <!-- 鎖定：專屬色彩座標 -->
                    <div class="card locked-card" id="lockCard1">
                        <div class="card-title">專屬色彩座標</div>
                        <div id="outPalWrap">
                            <div class="palette-strip" id="outPal"></div>
                            <div id="colorNote"
                                style="font-size:12px;color:var(--text3);margin-top:4px;font-family:&#39;DM Mono&#39;,monospace;">
                            </div>
                        </div>
                        <div class="lock-overlay" id="lockOverlay1">
                            <div class="lock-icon">⬡</div>
                            <div class="lock-msg">主用戶專屬內容</div>
                            <button class="lock-btn" onclick="openAuthModal()">解鎖查看</button>
                        </div>
                    </div>

                    <!-- 鎖定：療癒商品延伸方向 -->
                    <div class="card locked-card" id="lockCard2">
                        <div class="card-title">療癒商品延伸方向</div>
                        <div id="prodList"></div>
                        <div class="lock-overlay" id="lockOverlay2">
                            <div class="lock-icon">⬡</div>
                            <div class="lock-msg">主用戶專屬內容</div>
                            <button class="lock-btn" onclick="openAuthModal()">解鎖查看</button>
                        </div>
                    </div>

                    <!-- 鎖定：專屬視覺設計 -->
                    <div class="card locked-card" id="lockCard3">
                        <div class="card-title">你的專屬視覺設計</div>
                        <div class="prompt-box" id="finalPrompt"><button class="copy-btn"
                                onclick="copyPrompt()">複製</button>
                            <div id="promptText"></div>
                        </div>
                        <div id="promptNote"
                            style="font-size:10px;color:var(--text3);font-family:&#39;DM Mono&#39;,monospace;">
                        </div>
                        <div class="lock-overlay" id="lockOverlay3">
                            <div class="lock-icon">⬡</div>
                            <div class="lock-msg">主用戶專屬內容</div>
                            <button class="lock-btn" onclick="openAuthModal()">解鎖查看</button>
                        </div>
                    </div>

                    <!-- 鎖定：中文創作說明 -->
                    <div class="card locked-card" id="lockCard4">
                        <div class="card-title">中文創作說明（設計師溝通用）</div>
                        <div style="font-size:12px;color:var(--text2);line-height:1.9;" id="finalCN"></div>
                        <div class="lock-overlay" id="lockOverlay4">
                            <div class="lock-icon">⬡</div>
                            <div class="lock-msg">主用戶專屬內容</div>
                            <button class="lock-btn" onclick="openAuthModal()">解鎖查看</button>
                        </div>
                    </div>

                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:0.5rem">
                        <button class="btn-s" onclick="go(3)">← 調整元素</button>
                        <button class="btn-s" onclick="go(0)">重新開始</button>
                    </div>

                    <!-- ── 三大行動按鈕 ── -->
                    <div class="action-btns">
                        <button class="action-btn action-share" onclick="shareMatrix()">
                            <span class="action-icon">✦</span>
                            <span class="action-btn-text">
                                <span class="action-label">立即分享</span>
                                <span class="action-sub">快跟親朋好友一起討論生命座標!</span>
                            </span>
                        </button>
                        <button class="action-btn action-download" onclick="downloadMatrix()">
                            <span class="action-icon">⬡</span>
                            <span class="action-btn-text">
                                <span class="action-label">下載我的生命矩陣</span>
                                <span class="action-sub">儲存專屬報告 · 右鍵另存 PDF</span>
                            </span>
                        </button>
                        <a class="action-btn action-book" href="#booking">
                            <span class="action-icon">◎</span>
                            <span class="action-btn-text">
                                <span class="action-label">預約專屬訂製服務</span>
                                <span class="action-sub">與美學轉譯師一對一解碼你的生命座標</span>
                            </span>
                        </a>
                    </div>
                    <div id="shareToast" class="share-toast">✓ 文案已複製，立即貼上分享</div>
                </div>

                <!-- ── 權限 Modal ── -->
                <div id="authModal"
                    style="display:none;position:fixed;inset:0;z-index:999;background:rgba(0,0,0,0.75);backdrop-filter:blur(8px);align-items:center;justify-content:center;">
                    <div
                        style="background:var(--bg2);border:0.5px solid var(--border2);border-radius:16px;padding:2rem;width:min(360px,90vw);box-shadow:0 24px 80px rgba(0,0,0,0.6),0 0 40px rgba(108,142,255,0.08);">
                        <div
                            style="font-family:&#39;DM Mono&#39;,monospace;font-size:10px;color:var(--text3);letter-spacing:2px;margin-bottom:0.5rem;">
                            主用戶驗證</div>
                        <div
                            style="font-size:18px;font-weight:300;color:var(--text);letter-spacing:3px;margin-bottom:1.5rem;">
                            輸入存取密碼</div>
                        <input id="pwInput" type="password" placeholder="passkey"
                            style="width:100%;padding:11px 14px;border:0.5px solid var(--border2);border-radius:8px;background:var(--bg3);color:var(--text);font-family:&#39;DM Mono&#39;,monospace;font-size:14px;letter-spacing:3px;outline:none;transition:border-color .2s;margin-bottom:0.5rem;"
                            onkeydown="if(event.key===&#39;Enter&#39;)checkAuth()">
                        <div id="pwError"
                            style="font-size:12px;color:#E05545;min-height:18px;margin-bottom:0.75rem;font-family:&#39;DM Mono&#39;,monospace;">
                        </div>
                        <button onclick="checkAuth()"
                            style="width:100%;padding:12px;border-radius:8px;border:0.5px solid var(--accent);background:linear-gradient(135deg,rgba(108,142,255,0.15),rgba(155,127,255,0.1));color:var(--accent);font-size:13px;cursor:pointer;font-family:&#39;Noto Serif TC&#39;,serif;letter-spacing:2px;transition:all .25s;margin-bottom:8px;">解鎖完整內容</button>
                        <button onclick="closeAuthModal()"
                            style="width:100%;padding:10px;border-radius:8px;border:0.5px solid var(--border);background:transparent;color:var(--text3);font-size:12px;cursor:pointer;font-family:&#39;Noto Serif TC&#39;,serif;">以遊客繼續</button>
                        <div
                            style="margin-top:1rem;padding-top:1rem;border-top:0.5px solid var(--border);font-size:10px;color:var(--text3);font-family:&#39;DM Mono&#39;,monospace;text-align:center;line-height:1.6;">
                            主用戶可查看專屬視覺設計、商品方向與完整色彩報告</div>
                    </div>
                </div>

            </div>
        </main>
        <!----------演算法 / END ------->
        <!--理念說明 -->
        <div id="philosophy" class="section-card">
            <div class="container">
                <h1>✦ 核心原理：古老玄學的現代演算法</h1>
                <h4>The Four Pillars of Aesthetic Logic</h4>
                <div class="intro-section">
                    <p>我們將流淌於基因中的東方五行與占星時空，解構成現代數據演算法。<br>
                        這不僅是視覺革命，更是一場將古老神祕學轉化為現代美學的生命敘事。</p>
                    <p>系統以您誕生那一刻的<strong>「個人數據」</strong>為基底，
                        深度轉譯您與生俱來的時空座標與生命故事。
                        這串專屬的數位代碼將直接注入設計核心，將冷硬的數據，
                        轉化為您獨特且帶有靈魂共振的專屬視覺印記。
                    </p>
                </div>
                <!--- 生命矩陣演算法說明--->
                <button class="toggle-btn" id="toggleBtn">
                    <span>✨ LIFE+ 四大美學維度演算法</span>
                    <span class="arrow-icon"></span>
                </button>
                <div class="collapse-content" id="collapseContent">
                    <table>
                        <thead>
                            <tr>
                                <th style="width: 18%;">維度 (Pillars)</th>
                                <th style="width: 22%;">玄學基礎 (Philosophy)</th>
                                <th style="width: 25%;">美學應用 (Application)</th>
                                <th style="width: 35%;">演算邏輯 (Data Logic)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="維度">
                                    <span class="dimension-letter">L</span>
                                    <span class="dimension-name">Legacy</span><br>陰陽傳承
                                </td>
                                <td data-label="玄學基礎">
                                    <strong>陰陽之道</strong><br>
                                    天地萬物的虛實對比
                                </td>
                                <td data-label="美學應用">
                                    <strong>畫面構圖與基調</strong><br>
                                    定義作品的明暗比例
                                </td>
                                <td data-label="演算邏輯">
                                    依生命特質決定構圖重心。
                                    <ul>
                                        <li><strong>陽</strong>：高對比、放射構圖</li>
                                        <li><strong>陰</strong>：低對比、聚合構圖</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td data-label="維度">
                                    <span class="dimension-letter">I</span>
                                    <span class="dimension-name">Interaction</span><br>五行交感
                                </td>
                                <td data-label="玄學基礎">
                                    <strong>五行生剋</strong><br>
                                    金木水火土的流動平衡
                                </td>
                                <td data-label="美學應用">
                                    <strong>專屬色譜調候</strong><br>
                                    Color Palettes 系統
                                </td>
                                <td data-label="演算邏輯">
                                    識別生命能量缺口進行視覺補足。
                                    <ul>
                                        <li><strong>補木</strong>：綠色系，啟動生機</li>
                                        <li><strong>補水</strong>：藍色系，強化流動</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td data-label="維度">
                                    <span class="dimension-letter">F</span>
                                    <span class="dimension-name">Frequency</span><br>星曜頻率
                                </td>
                                <td data-label="玄學基礎">
                                    <strong>紫微十四主星</strong><br>
                                    與生俱來的性格天賦
                                </td>
                                <td data-label="美學應用">
                                    <strong>性格幾何</strong><br>
                                    Personality Geometry
                                </td>
                                <td data-label="演算邏輯">
                                    將性格特質轉化專屬圖紋。
                                    <ul>
                                        <li><strong>領袖型</strong>：對稱莊重的色塊</li>
                                        <li><strong>靈動型</strong>：交錯流線的線條</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td data-label="維度">
                                    <span class="dimension-letter">E</span>
                                    <span class="dimension-name">Essence</span><br>周易卦象
                                </td>
                                <td data-label="玄學基礎">
                                    <strong>《周易》六十四卦</strong><br>
                                    生命時空座標的象數
                                </td>
                                <td data-label="美學應用">
                                    <strong>記憶條碼化</strong><br>
                                    Data Barcoding / UI 比例
                                </td>
                                <td data-label="演算邏輯">
                                    鎖定生命重要瞬間的守護卦象，將<span class="math">陰陽爻（— / - -）</span>轉化為極簡條碼與視覺分割，永恆定格圓滿頻率。
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="highlight-box">
                    <h3>視覺調候 與 時空封印</h3>
                    <p>LIFE 系統讓每一件作品不只是單純的紀念，更是一份量身定做的能量調和。
                        <br>將記憶的瞬間，以極簡美學的專屬的守護符號，封印留存下來。
                    </p>
                </div>
                <!----計畫緣由 ---->
                <div style="margin-top:3rem;">
                    <h1>✦ 緣起</h1>
                    <h4>創建LIFE+ Legacy Matrix的原因?</h4>
                    <p class="origin-p">
                        原職是一名資深美術設計師，在不順遂的人生中總是奮力向前，終至失力委靡，深陷在失去與不安的黑暗中。
                        我知道這世上有太多人，也在失衡的步調中承載著焦慮、憂鬱與內耗。
                    </p>
                    <p class="origin-p">
                        在面對傷痛並與自我療癒的路上，終究明白：真正穩定的能量，源自於先擁抱、理解並看見自己。<br>
                        於是決定善用這份「美的轉譯」能力，開啟一項從「助人」而衍生的設計計畫——
                        <br>旨在協助安定情緒、療癒心理，在科學上也具有活化大腦、減緩未來失智風險的依據。
                    </p>
                    <p class="origin-p font-highlight">
                        願LIFE+ Legacy Matrix能幫助大家在面對生命突如其來的變故與黑夜時，心中多一份底氣與力量，將瞬間轉化為溫暖而永恆的記憶年輪。
                    </p>
                </div>

                <!---- FAQ 區塊---->
                <div class="faq-geometric-session">
                    <div class="faq-item" onclick="toggleFaq(this)">
                        <div class="faq-question">
                            <span class="faq-number">01</span>
                            <h3>這是什麼系統？它是算命嗎？</h3>
                            <span class="faq-icon">+</span>
                        </div>
                        <div class="faq-answer">
                            <p>不是算命，它更像是一面「用宇宙幾何為你量身打造的靈魂鏡子」。<br>
                                是科學的論點，我們將在基因中流動的陰陽五行與神秘學規律，透過現代數位設計方式，轉化為乾淨、純粹的三維度視覺座標，
                                並以此為設計基調，為您將流逝歲月的珍貴記憶資產，以藝術品設計形式(數位/實體)進行封存。
                            </p>
                        </div>
                    </div>

                    <div class="faq-item" onclick="toggleFaq(this)">
                        <div class="faq-question">
                            <span class="faq-number">02</span>
                            <h3>「LIFE+」能為我做什麼？</h3>
                            <span class="faq-icon">+</span>
                        </div>
                        <div class="faq-answer">
                            <p>因為「瞬間即永恆」。記憶會隨時間模糊，但數位化的紀錄不會。<br>
                                「生命視覺座標」這個座標是專屬於您，能作為您靈魂的畫布、人生的錨定點，
                                替你記錄著曾經的美好與力量，更是日後延伸為客製化實體、數位生命紀錄藝術品最核心的數位資產來源。
                            </p>
                        </div>
                    </div>

                    <div class="faq-item" onclick="toggleFaq(this)">
                        <div class="faq-question">
                            <span class="faq-number">03</span>
                            <h3>誰適合來體驗？怎麼進行？</h3>
                            <span class="faq-icon">+</span>
                        </div>
                        <div class="faq-answer">
                            <p>任何人都適用！您不需要耗時費力懂任何深奧的命理學或技術。<br>
                                只要輸入生辰或是那珍貴的時刻，後台演算法會自動幫您完成所有複雜的推演。
                                無論是想尋求內心療癒對話的你、想為自己或長輩留存珍貴記憶資產，或是寵物家長，
                                都能輕鬆解碼，若有明確的需求也可以進行客製，選擇自己最適合的方案，創造專屬獨一無二的藝術品，進行紀錄留存。</p>
                        </div>
                    </div>

                    <div class="faq-item" onclick="toggleFaq(this)">
                        <div class="faq-question">
                            <span class="faq-number">04</span>
                            <h3>解碼座標後，下一步可以做什麼？我的數據會被公開嗎?</h3>
                            <span class="faq-icon">+</span>
                        </div>
                        <div class="faq-answer">
                            <p>您可以自行決定要將充滿儀式感的排版報告一鍵下載珍藏，或以不同形式分享給重要的人，也能夠選擇多人共同參與的方式。<br>
                                若您想進一步推演完整的動態生命年輪，或是想將此座標實體客製化為獨一無二的藝術品，
                                歡迎攜帶此座標至網頁最下方進行「專屬預約」，將為您提供更多細節的服務。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--理念說明 / END -->
        <!-- 產品方案-->
        <div id="solutions" class="section-card">
            <h1>✦ 留住記憶</h1>
            <p class="desc">我們提供多種數位封存與實體定製服務，
                您可直接選擇適合需求的方案，或是選擇私人顧問級的訂製項目，來為您定錨生命中最珍貴的記憶軌跡。
            </p>

            <div class="tab-menu">
                <button class="tab-btn active" onclick="switchSlide(0)">【歲月書】<br>數位/實體</button>
                <button class="tab-btn" onclick="switchSlide(1)">【光軌】<br>實體藝術展品</button>
                <button class="tab-btn" onclick="switchSlide(2)">【我在】<br>實體藝術展品</button>
                <button class="tab-btn" onclick="switchSlide(3)">【生命樹】<br>數位空間</button>
            </div>

            <div class="carousel-wrapper-3d">
                <div class="carousel-arrow arrow-left" onclick="moveSlide(-1)">&#10229;</div>
                <div class="carousel-arrow arrow-right" onclick="moveSlide(1)">&#10230;</div>

                <div class="carousel-container">
                    <div class="carousel-track" id="carouselTrack">

                        <div class="carousel-slide">
                            <div class="slide-image-placeholder">
                                <div class="totem-center-glow"></div>
                                <span>[ GENERATIONAL LEGACY ]</span>
                            </div>
                            <div class="slide-intro">
                                專為家族傳承打造。我們進行溫暖且深度的私人訪談，將長輩塵封的老照片與聲音影像梳理編織，
                                化為可永久流傳的數位生命故事。
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <div class="slide-image-placeholder"
                                style="background-image: radial-gradient(circle at 50% 50%, rgba(51, 255, 170, 0.15), transparent 70%), linear-gradient(45deg, #091214 0%, #040406 100%);">
                                <div class="totem-center-glow"
                                    style="transform: rotate(0deg); width: 45px; height: 45px;"></div>
                                <span>[ IDENTITY CACHE ]</span>
                            </div>
                            <div class="slide-intro">
                                將生命數據實體化。將專屬生命代碼，轉譯為頂級幾何藝術品。
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <div class="slide-image-placeholder"
                                style="background-image: radial-gradient(circle at 30% 70%, rgba(112, 0, 255, 0.25), transparent 60%), linear-gradient(45deg, #070b19 0%, #050508 100%);">
                                <div class="totem-center-glow" style="border-radius: 50%;"></div>
                                <span>[ COMPANIONSHIP BOND ]</span>
                            </div>
                            <div class="slide-intro">
                                專屬毛孩的生命視覺紀念。
                                將愛寵的獨特數據凝練為實體美學展品，讓「我在」的溫暖承諾，在空間裡永恆定格。
                            </div>
                        </div>
                        <div class="carousel-slide">
                            <div class="slide-image-placeholder"
                                style="background-image: radial-gradient(circle at 50% 50%, rgba(255, 252, 51, 0.15), transparent 70%), linear-gradient(45deg, #091214 0%, #040406 100%);">
                                <div class="totem-center-glow"
                                    style="transform: rotate(0deg); width: 45px; height: 45px;"></div>
                                <span>[ IDENTITY CACHE ]</span>
                            </div>
                            <div class="slide-intro">
                                家族共享的線上數位空間。
                                打破時空限制，讓多位家族成員共同參與、攜手編織並封存彼此的溫暖記憶年輪。
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <!--產品方案 / END -->
        <!--與我聯繫 -->
        <div id="booking" class="section-card">
            <h1>✦ 專屬預約</h1>
            <p class="desc">請留下您的聯繫方式，為您進行深度生命記憶策展、定製實體記憶紀念。
                <br>我們將有專人盡快與您取得聯繫。
            </p>

            <form class="booking-form" action="mailto:winnietoto@gmail.com" method="POST" enctype="text/plain"
                onsubmit="triggerFormSubmit(event)">
                <div class="form-row">
                    <div class="form-col">
                        <label>聯絡姓名 *</label>
                        <input type="text" name="Name" class="form-input-box" required placeholder="如何稱呼您">
                    </div>
                    <div class="form-col">
                        <label>聯絡電話 *</label>
                        <input type="tel" name="Phone" class="form-input-box" required placeholder="0912345678">
                    </div>
                </div>
                <div class="form-group">
                    <label>電子郵件 Mail *</label>
                    <input type="email" name="Email" class="form-input-box" required placeholder="example@mail.com">
                </div>
                <div class="form-row">
                    <div class="form-col">
                        <label>委託對象類別</label>
                        <select name="TargetCategory" class="form-input-box">
                            <option>長輩傳承（長輩時空冊）</option>
                            <option>寵物生命紀念（伴侶生命誌）</option>
                            <option>個人生活重整（個人數位封存）</option>
                            <option>其他（數位資產策展）</option>
                        </select>
                    </div>
                    <div class="form-col">
                        <label>理想封存方式</label>
                        <select name="ArchiveType" class="form-input-box">
                            <option>純數位雲端封存報告</option>
                            <option>客製化實體幾何雷雕紀念物</option>
                            <option>私人策展顧問一對一訪談服務</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label>簡單聊聊您想留下的故事或期望（選填）</label>
                    <textarea name="UserMessage" class="form-input-box"
                        placeholder="例如：想幫心愛的貓咪留念or想替現在的自己留下紀錄!.."></textarea>
                </div>
                <div style="text-align: center; margin-top: 30px;">
                    <button type="submit" class="message-btn">提交委託意向</button>
                    <div class="lock-text" style="font-size:0.875rem; color:#798bee; margin-top:16px;">🔒
                        您的生命資訊受最高規格加密保護。</div>
                </div>
            </form>

            <div class="line-shortcut">
                <label>── 直接加入官方專屬對話 ──</label>
                <div class="line-qr-mock"><img src="assets/images/line-qr-code.jpg" alt="LINE QR Code"></div>
                <a href="https://lin.ee/sP2q1SG" onclick="alert('模擬對接：已開啟加入官方帳號連結')">👆點我直接與專屬生命策展人聊聊 →</a>
            </div>
            <label>也歡迎透過左下角社群連結與我們聯繫!</label>
        </div>
        <!--與我聯繫/END -->

    </div>
    <!--收信彈窗 -->
    <div id="custom-alert">
        <h3 style="color:#00e5ff; font-weight:300; letter-spacing:2px; margin-bottom:15px;">系統已收到委託</h3>
        <p style="font-size:0.88rem; line-height:1.8; color:#ccc; font-weight:300; margin-bottom:25px;">
            感謝您定錨生命座標。<br>您的委託意向已成功傳達至後端系統，請靜候專人與您聯絡，啟動一對一生命策展對話。
        </p>
        <button class="action-btn" style="padding:10px 30px;" onclick="closeAlert()">確認</button>
    </div>
    <!--收信彈窗 / END-->
    <footer>
        <div class="footer-content">
            <div class="footer-brand">
                <h4>LIFE+ Legacy Matrix</h4>
                <p>記憶傳承 · 本我印記 · 時間流轉 · 座標元素</p>
                <div class="social-icons">
                    <a href="https://www.facebook.com/LifeMatrixLab" target="_blank" class="icon-mock" title="Facebook">
                        <svg viewBox="0 0 24 24" class="social-svg">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/xuexueni.space/" target="_blank" class="icon-mock"
                        title="Instagram">
                        <svg viewBox="0 0 24 24" class="social-svg">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </a>
                    <!-- 💡 Threads -->
                    <a href="#" target="_blank" class="icon-mock" title="Threads">
                        <svg viewBox="0 0 20 22" class="social-svg threads-svg">
                            <path
                                d="M12 11c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm0 0v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V11c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.22 0 2.33-.44 3.2-1.17">
                            </path>
                        </svg>
                    </a>
                    <!-- 💡 TikTok / 抖音 -->
                    <a href="https://www.tiktok.com/@userhnmc4iqtxj?_r=1&_t=ZS-91MzYYArgNZ" target="_blank"
                        class="icon-mock" title="TikTok">
                        <svg viewBox="0 0 24 24" class="social-svg">
                            <!-- 完美的幾何圓點、直桿與拋物線尾翼構成的純線條八分音符 -->
                            <circle cx="9" cy="17" r="3"></circle>
                            <polyline points="12 17 12 4 20 4"></polyline>
                            <path d="M16 8c2.21 0 4-1.79 4-4"></path>
                        </svg>
                    </a>
                    <!-- 💡 小紅書 -->
                    <a href="https://xhslink.com/m/5sAcQVx2Drc" target="_blank" class="icon-mock" title="小紅書">
                        <svg viewBox="0 0 24 24" class="social-svg">
                            <path d="M4 5.2l3.6 2.4-3.6 3.6 4.8 1.2"></path>
                            <path d="M5.2 16h2.4"></path>
                            <path d="M13 5v14"></path>
                            <path d="M11 7h8"></path>
                            <path d="M11 17h8"></path>
                        </svg>
                    </a>
                    <!--<a href="您的LinkedIn網址" target="_blank" class="icon-mock" title="LinkedIn">
                        <svg viewBox="0 0 24 24" class="social-svg">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                            </path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a-->
                </div>
            </div>
            <div class="footer-links">
                <h5>商業合作與聯繫</h5>
                <p>XUEXUEni 數位生命美學工作室</p>
                <p><a href="mailto:winnietoto@gmail.com"> winnietoto@gmail.com</a></p>
            </div>
            <div class="footer-links">
                <h5>架構導覽</h5>
                <p><a href="#experience">體驗生命解碼</a></p>
                <p><a href="#philosophy">大師核心架構</a></p>
                <p><a href="#solutions">留存場景方案</a></p>
            </div>
        </div>
        <div class="footer-bottom">
            <div>&copy; 2026 LIFE System & XUEXUEni Studio. All Rights Reserved.</div>
            <div class="footer-bottom-right">
                <button class="lang-toggle-btn" onclick="switchLang()">EN</button>
                <button class="btn-footer-science" onclick="downloadScienceReport()">
                    <svg viewBox="0 0 24 24" class="science-btn-svg">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    LIFE+ 記憶與療癒系統計畫科學實證
                </button>
            </div>
        </div>
    </footer>
    <!-- JS-->
    <script src="assets/js/js.js"></script>
    <script src="assets/js/code-data.js"></script>
    <script src="assets/js/lang.js"></script>
</body>

</html>
