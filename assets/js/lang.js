// ── 語言系統 ──
const LANG = {
  zh: {
    nav: ['留住記憶','服務介紹','免費體驗','專屬預約','關於LIFE+'],
    navSub: ['免費體驗','核心原理','留住記憶','服務方案','專屬預約'],
    symQ: 'Q.選擇一個您最有感的符號意義,以極細線條若隱若現地融入畫面背景',
    texQ: 'Q.你最容易被哪種觸覺感或物件感吸引？',
    heroTagline: '把人生故事與美好紀念，化為可珍藏的客製化典藏作品',
    heroSlogan: '瞬間即是永恆',
    heroTitle: '人生故事典藏',
    heroSubs: ['你記憶中的自己是什麼樣子?','退休後，是否發現那些年輕時的故事，從來沒有被好好記錄下來？','決定自己的生命故事將如何傳承','傳承記憶，將生命錨定於宇宙座標','探尋愛將如何再次流動的美學','在時間的漣漪裡，你是獨一無二的純粹'],
    decodeIntro: '輸入生辰數據<br>錨定生命在宇宙間的三維度視覺座標',
    decodeBtn: '立即解碼生命矩陣',
    stepLabels: ['生辰輸入','命盤解碼','情感連結','視覺元素','座標輸出'],
    calLabel: '曆法', yearLabel: '年', monthLabel: '月', dayLabel: '日',
    calOptions: ['國曆','農曆'],
    hourLabel: '出生時辰',
    computeBtn: '解碼我的生命座標 →',
    card1Title: '四柱八字 · Eight Characters',
    card2Title: '你的色彩人格 · 命運特質',
    card2Sub: '每個元素的色調，都在說一件關於你的事。',
    card3Title: '初步構圖語言預覽',
    nextBtn: '感覺到了，繼續 →',
    backBtn: '← 重新輸入',
    s2Title: '情感記憶 · 視覺喜好',
    q1Title: '如果這幅畫掛在你最私密的空間裡，你希望它帶給你什麼？',
    q1Sub: '選一個最貼近現在的你的答案',
    moodCards: [
      {icon:'🌿',title:'讓我靜下來',sub:'不需要努力，只是存在就好的那種安靜',hint:'→ 大面積留白 · 低彩度 · 沉澱感構圖'},
      {icon:'🔥',title:'提醒我燃燒',sub:'每次看到它，都想起自己最想成為的樣子',hint:'→ 高對比色 · 放射構圖 · 強焦點'},
      {icon:'✦',title:'承載一段關係',sub:'送給重要的人，或紀念兩個人之間的某件事',hint:'→ 雙焦點構圖 · 互補色對話 · 溫柔質地'},
      {icon:'◎',title:'標記一個時刻',sub:'某個結束、某個開始，值得被凝固成形狀',hint:'→ 儀式感構圖 · 圓形中心象徵 · 深色底'}
    ],
    q2Title: '有一個瞬間或場景，是你最不想忘記的感覺——它是什麼？',
    q2Sub: '這個選擇會直接影響畫面的光線質感與空間感',
    memCards: [
      {icon:'🌅',title:'斜光穿窗',sub:'早晨陽光剛進來的那個角度，塵埃在光裡浮動',hint:'→ 斜入光束 · 金色漫射 · 霧感邊緣'},
      {icon:'🌙',title:'深夜獨自清醒',sub:'世界安靜了，只有你還亮著燈，什麼都想',hint:'→ 深色背景 · 單一光點 · 銳利靜謐感'},
      {icon:'🌧',title:'窗外下著雨',sub:'在室內聽著雨聲，外面的世界和你之間有一層玻璃',hint:'→ 流動紋理 · 冷色漫延 · 層次模糊'},
      {icon:'🌊',title:'人群中心的平靜',sub:'外面很吵，但你突然感到某種奇怪的平靜降下來',hint:'→ 混沌外圍 · 清晰核心 · 對比張力'},
      {icon:'⛰',title:'站在高處看遠',sub:'什麼都變小了，胸口有一種說不清楚的遼闊',hint:'→ 水平線構圖 · 大比例留白 · 呼吸感'},
      {icon:'✧',title:'某個眼神',sub:'有人用一種讓你覺得被完整看見的方式看著你',hint:'→ 單一聚焦 · 放射視線感 · 溫度與張力'}
    ],
    q3Title: '你平常最容易被哪一種視覺感受吸引？',
    q3Sub: '看圖像時的直覺反應，不需要想太多',
    visCards: [
      {icon:'🖤',title:'深色有層次',sub:'深背景裡可以挖出很多東西的那種畫'},
      {icon:'🤍',title:'白底有呼吸感',sub:'大量空白，一個輕輕的元素，靜靜放著'},
      {icon:'🟤',title:'暖調豐富色',sub:'像老照片或油畫，有時間感的飽和色彩'},
      {icon:'🔷',title:'冷調精準感',sub:'銀、灰、靛，俐落的線條，礦物質感'},
      {icon:'🌊',title:'具象自然風景',sub:'山、海、天空，有真實場景感的風景元素',hint:'→ 景深透視 · 自然色彩 · 寫實筆觸'},
      {icon:'🧍',title:'具象人物輪廓',sub:'人形或局部肢體，剪影或輪廓感，有人的溫度與故事',hint:'→ 人物輪廓 · 剪影構圖 · 情感張力'}
    ],
    s2Next: '繼續選擇視覺元素 →',
    s2Back: '← 回上一步',
    s3Card1Title: '紫微主星 · 命盤性格',
    s3Card1Sub: '根據你的命盤自動計算的對應主星特質，可加入畫面符號層',
    s3Card2Title: '玄學符號層（最多選3個）',
    s3Card2Sub: '以極細線條若隱若現地融入畫面背景',
    s3Card3Title: '圖像質地 · 物件偏好（最多選2個）',
    s3Card3Sub: '你最容易被哪種觸覺感或物件感吸引？',
    s3Next: '生成我的專屬圖像描述 →',
    s3Back: '← 回上一步',
    guestMode: '遊客模式 · 部分內容已鎖定',
    masterLogin: '主用戶登入',
    healTitle: '你的情感療癒主張',
    colorTitle: '專屬色彩座標',
    prodTitle: '療癒商品延伸方向',
    promptTitle: '你的專屬視覺設計',
    cnTitle: '中文創作說明（設計師溝通用）',
    lockMsg: '主用戶專屬內容',
    unlockBtn: '解鎖查看',
    adjustBtn: '← 調整元素',
    restartBtn: '重新開始',
    shareBtn: '立即分享',
    shareSub: '複製分享文案 · LINE / FB / IG',
    downloadBtn: '下載我的生命矩陣',
    downloadSub: '儲存專屬報告 · 右鍵另存 PDF',
    bookBtn: '預約專屬訂製服務',
    bookSub: '與設計師一對一解碼你的生命座標',
    shareToast: '✓ 文案已複製，立即貼上分享',
    modalTitle: '主用戶驗證',
    modalSubtitle: '輸入存取密碼',
    modalPlaceholder: 'passkey',
    modalUnlock: '解鎖完整內容',
    modalGuest: '以遊客繼續',
    modalNote: '主用戶可查看專屬視覺設計、商品方向與完整色彩報告',
    philoTitle: '✦ 核心原理：古老玄學的現代演算法',
    philoSub: 'The Four Pillars of Aesthetic Logic',
    philoDesc: '我們將流淌於基因中的東方五行與占星時空，解構成現代數據演算法。<br>這不僅是視覺革命，更是一場將古老神祕學轉化為現代美學的生命敘事。',
    philoDesc2: '系統以您誕生那一刻的<strong>「個人數據」</strong>為基底，深度轉譯您與生俱來的時空座標與生命故事。這串專屬的數位代碼將直接注入設計核心，將冷硬的數據，轉化為您獨特且帶有靈魂共振的專屬視覺印記。',
    toggleBtnText: '✨ LIFE+ 四大美學維度演算法',
    philoHighTitle: '視覺調候 與 時空封印',
    philoHighDesc: 'LIFE 系統讓每一件作品不只是單純的紀念，更是一份量身定做的能量調和。<br>將記憶的瞬間，以極簡美學的專屬的守護符號，封印留存下來。',
    originTitle: '✦ 緣起',
    originSub: '創建LIFE+ Legacy Matrix的原因?',
    originP1: '原職是一名資深美術設計師，在不順遂的人生中總是奮力向前，終至失力委靡，深陷在失去與不安的黑暗中。我知道這世上有太多人，也在失衡的步調中承載著焦慮、憂鬱與內耗。',
    originP2: '在面對傷痛並與自我療癒的路上，終究明白：真正穩定的能量，源自於先擁抱、理解並看見自己。<br>於是決定善用這份「美的轉譯」能力，開啟一項從「助人」而衍生的設計計畫——<br>旨在協助安定情緒、療癒心理，在科學上也具有活化大腦、減緩未來失智風險的依據。',
    originP3: '願 LIFE+能幫助大家在面對生命突如其來的變故與黑夜時，心中多一份底氣與力量，將瞬間轉化為溫暖而永恆的記憶年輪。',
    faqItems: [
      {n:'01',q:'這是什麼系統？它是算命嗎？',a:'不是算命，它更像是一面「用宇宙幾何為你量身打造的靈魂鏡子」。<br>是科學的論點，我們將在基因中流動的陰陽五行與神秘學規律，透過現代數位設計方式，轉化為乾淨、純粹的三維度視覺座標，並以此為設計基調，為您將流逝歲月的珍貴記憶資產，以藝術品設計形式(數位/實體)進行封存。'},
      {n:'02',q:'「生命視覺座標」能為我做什麼？',a:'因為「瞬間即永恆」。記憶會隨時間模糊，但數位化的紀錄不會。<br>這個座標是專屬於你、誰也拿不走的生命密碼，能作為您靈魂的畫布、人生的錨定點，不論未來經歷什麼變化，這個座標都會穩定地存在，替你記錄著曾經的美好與力量，更是日後延伸為客製化實體、數位生命紀錄藝術品最核心的數位資產來源。'},
      {n:'03',q:'誰適合來體驗？怎麼進行？',a:'任何人都適用！您不需要耗時費力懂任何深奧的命理學或技術。<br>只要輸入生辰或是那珍貴的時刻，後台演算法會自動幫您完成所有複雜的推演。無論是想尋求內心療癒對話的你、想為自己或長輩留存珍貴記憶資產，或是寵物家長，都能輕鬆解碼，若有明確的需求也可以進行客製，選擇自己最適合的方案，創造專屬獨一無二的藝術品，進行紀錄留存。'},
      {n:'04',q:'解碼座標後，下一步可以做什麼？我的數據會被公開嗎?',a:'您可以自行決定要將充滿儀式感的排版報告一鍵下載珍藏，或以不同形式分享給重要的人，也能夠選擇多人共同參與的方式。<br>若您想進一步推演完整的動態生命年輪，或是想將此座標實體客製化為獨一無二的藝術品，歡迎攜帶此座標至網頁最下方進行「專屬預約」，將為您提供更多細節的服務。'}
    ],
    solutionsTitle: '✦ 留住記憶',
    solutionsDesc: '我們提供私人顧問級的數位封存與實體定製服務，<br>您可選擇適合需求的方案，來為您定錨生命中最珍貴的記憶軌跡。',
    tabLabels: ['【歲月書】<br>數位/實體','【光軌】<br>實體藝術展品','【我在】<br>實體藝術展品','【生命樹】<br>數位空間'],
    slideIntros: [
      '專為家族傳承打造。我們進行溫暖且深度的私人訪談，將長輩塵封的老照片與聲音影像梳理編織，化為可永久流傳的數位生命故事。',
      '將生命數據實體化。將專屬生命代碼，轉譯為頂級幾何藝術品。',
      '專屬毛孩的生命視覺紀念。將愛寵的獨特數據凝練為實體美學展品，讓「我在」的溫暖承諾，在空間裡永恆定格。',
      '家族共享的線上數位空間。打破時空限制，讓多位家族成員共同參與、攜手編織並封存彼此的溫暖記憶年輪。'
    ],
    bookingTitle: '✦ 專屬預約',
    bookingDesc: '請留下您的聯繫方式，為您進行深度生命記憶策展、定製實體記憶紀念。<br>我們將有專人盡快與您取得聯繫。',
    formLabels: ['聯絡姓名 *','聯絡電話 *','電子郵件 Mail *','委託對象類別','理想封存方式','簡單聊聊您想留下的故事或期望（選填）'],
    formPlaceholders: ['如何稱呼您','0912345678','example@mail.com','','','例如：想幫心愛的貓咪留念or想替現在的自己留下紀錄!..'],
    targetOptions: ['長輩傳承（長輩時空冊）','寵物生命紀念（伴侶生命誌）','個人生活重整（個人數位封存）','其他（數位資產策展）'],
    archiveOptions: ['純數位雲端封存報告','客製化實體幾何雷雕紀念物','私人策展顧問一對一訪談服務'],
    submitBtn: '提交委託意向',
    lockText: '🔒 您的生命資訊受最高規格加密保護。',
    lineLabel: '── 直接加入官方專屬對話 ──',
    lineLink: '👆點我直接與專屬生命策展人聊聊 →',
    socialLabel: '歡迎透過下方社群連結與我們聯繫^_^',
    alertTitle: '系統已收到委託',
    alertMsg: '感謝您定錨生命座標。<br>您的委託意向已成功傳達至後端系統，請靜候專人與您聯絡，啟動一對一生命策展對話。',
    alertConfirm: '確認',
    footerBrand: 'LIFE+ Legacy Matrix',
    footerTagline: '記憶傳承 · 本我印記 · 時間流轉 · 座標元素',
    footerCol1Title: '商業合作與聯繫',
    footerCol1Lines: ['XUEXUEni 數位美學工作室','商業合作洽談：'],
    footerCol2Title: '架構導覽',
    footerCol2Links: [['#experience','體驗生命解碼'],['#philosophy','大師核心架構'],['#solutions','留存場景方案']],
    footerCopy: '© 2026 LIFE+ Legacy Matrix & XUEXUEni Studio. All Rights Reserved.',
    scienceBtn: 'LIFE+ 記憶與療癒系統計畫科學實證',
    langBtn: 'EN',
    unlockedMode: '主用戶模式 · 完整內容已解鎖',
    unlockedBtn: '已解鎖',
    pillarLabels: ['年柱','月柱','日柱（日主）','時柱'],
    healCoreLabel: '療癒核心：補',
    healCoreLabel2: '能量',
    healCoreDesc: '為主色（強旺主結構），',
    healCoreDesc2: '為療癒色（補充張力），這幅畫本身就是你的平衡處方',
    traitRoles: ['主色（強旺）','療癒色（缺失）','輔色'],
    compDesc: {木:'畫面向上生長，有機線條為主，空間有呼吸感',火:'中心放射聚焦，高對比光暈，熱烈而清晰',土:'重心居中偏下，均衡穩定，有包覆與歸屬感',金:'大面積精準留白，單一聚焦，收斂而純粹',水:'由下而上的沉澱層次，流動而深邃，像深海'},
    geomDesc: {木:'垂直延伸·有機曲線',火:'放射三角·聚焦光暈',土:'水平網格·方形重心',金:'圓弧幾何·極簡留白',水:'波形層疊·不規則漫延'},
    mainStruct: '主結構（',
    healTension: '）：',
    healTension2: '療癒張力（',
    healTension3: '）：',
    healTension4: '衝破主結構，製造視覺與情感的對話張力',
    copyBtn: '複製',
    copiedBtn: '已複製',
    healAffLabel: '✦ 療愈語句：「',
    scienceReport: '下載科學實證報告',
    tableHeaders: ['維度 (Pillars)','玄學基礎 (Philosophy)','美學應用 (Application)','演算邏輯 (Data Logic)'],
  },
  en: {
    nav: ['Preserve Memory','Services','Free Trial','Book Now','About LIFE+'],
    navSub: ['Free Trial','Core Philosophy','Preserve Memory','Service Plans','Book Now'],
    symQ: 'Q. Choose the symbol that resonates most — woven as ultra-fine, barely-visible lines in the background',
    texQ: 'Q. Which tactile or material feeling draws you in most?',
    heroTagline: 'Turn your life story and cherished memories into a custom, treasured archive',
    heroSlogan: 'Every Moment is Eternal',
    heroTitle: 'Life Story Archive',
    heroSubs: ['Who are you in your own memory?','After retirement, have you noticed those younger stories were never properly recorded?','Decide how your life story will be passed on','Preserve memory, anchor your life to cosmic coordinates','Explore the aesthetics of how love flows again','In the ripples of time, you are uniquely pure'],
    decodeIntro: 'Enter your birth data<br>Anchor your life\'s 3D visual coordinate in the universe',
    decodeBtn: 'Decode My Life Matrix',
    stepLabels: ['Birth Data','Chart Decode','Emotional Link','Visual Elements','Coordinate Output'],
    calLabel: 'Calendar', yearLabel: 'Year', monthLabel: 'Month', dayLabel: 'Day',
    calOptions: ['Solar (Gregorian)','Lunar'],
    hourLabel: 'Birth Hour',
    computeBtn: 'Decode My Life Coordinate →',
    card1Title: 'Four Pillars · Eight Characters',
    card2Title: 'Your Color Persona · Destiny Traits',
    card2Sub: 'Every elemental hue tells a story about who you are.',
    card3Title: 'Preliminary Composition Preview',
    nextBtn: 'I feel it, continue →',
    backBtn: '← Re-enter',
    s2Title: 'Emotional Memory · Visual Preference',
    q1Title: 'If this artwork hung in your most private space, what would you want it to give you?',
    q1Sub: 'Choose the answer that resonates most with you right now',
    moodCards: [
      {icon:'🌿',title:'Let me be still',sub:'No effort needed — just the quiet of simply existing',hint:'→ Large negative space · Low saturation · Sediment composition'},
      {icon:'🔥',title:'Remind me to burn',sub:'Every time I see it, I remember who I most want to become',hint:'→ High contrast · Radiant composition · Strong focal point'},
      {icon:'✦',title:'Hold a relationship',sub:'A gift for someone special, or to commemorate something between two people',hint:'→ Dual-focal composition · Complementary color dialogue · Tender texture'},
      {icon:'◎',title:'Mark a moment',sub:'An ending, a beginning — something worth being frozen into form',hint:'→ Ritual composition · Circular center symbol · Dark background'}
    ],
    q2Title: 'A moment or scene you never want to forget — what is it?',
    q2Sub: 'This choice directly influences the light quality and spatial feel of the artwork',
    memCards: [
      {icon:'🌅',title:'Diagonal morning light',sub:'The angle of morning sun entering the room, dust floating in the beams',hint:'→ Angled light shaft · Golden diffusion · Foggy edges'},
      {icon:'🌙',title:'Alone awake at midnight',sub:'The world is quiet, only you still have the lights on, thinking everything',hint:'→ Dark background · Single light point · Sharp, silent atmosphere'},
      {icon:'🌧',title:'Rain outside the window',sub:'Listening to rain indoors, a pane of glass between you and the world outside',hint:'→ Flowing texture · Cool color bleeding · Layered blur'},
      {icon:'🌊',title:'Calm in the midst of a crowd',sub:'It was loud outside, but a strange peace suddenly descended on you',hint:'→ Chaotic periphery · Clear core · Contrast tension'},
      {icon:'⛰',title:'Looking far from a height',sub:'Everything became small; a vast, indescribable feeling in your chest',hint:'→ Horizon composition · Large-scale negative space · Breathing room'},
      {icon:'✧',title:'A certain gaze',sub:'Someone looked at you in a way that made you feel completely seen',hint:'→ Single focal point · Radiant gaze-lines · Warmth and tension'}
    ],
    q3Title: 'What kind of visual feeling do you instinctively gravitate toward?',
    q3Sub: 'Gut reaction when you see images — no overthinking',
    visCards: [
      {icon:'🖤',title:'Dark with depth',sub:'Paintings where you can excavate layers from a dark background'},
      {icon:'🤍',title:'White with breathing room',sub:'Lots of empty space, one quiet element, just sitting there'},
      {icon:'🟤',title:'Warm, rich tones',sub:'Like vintage photos or oil paintings — saturated with a sense of time'},
      {icon:'🔷',title:'Cool, precise feel',sub:'Silver, grey, indigo — clean lines with a mineral quality'},
      {icon:'🌊',title:'Figurative natural landscape',sub:'Mountains, sea, sky — real scene elements with emotional natural force',hint:'→ Depth perspective · Natural color · Painterly touch'},
      {icon:'🧍',title:'Figurative human silhouette',sub:'Human form or body contour, silhouette quality — human warmth and story',hint:'→ Human outline · Silhouette composition · Emotional tension'}
    ],
    s2Next: 'Continue to visual elements →',
    s2Back: '← Go back',
    s3Card1Title: 'Ziwei Main Star · Chart Personality',
    s3Card1Sub: 'Auto-calculated main star traits from your chart — can be added as symbol layer',
    s3Card2Title: 'Metaphysical Symbol Layer (max 3)',
    s3Card2Sub: 'Woven as fine translucent lines barely visible in the background',
    s3Card3Title: 'Image Texture · Object Preference (max 2)',
    s3Card3Sub: 'Which tactile or material feeling resonates with you most?',
    s3Next: 'Generate My Personal Image Description →',
    s3Back: '← Go back',
    guestMode: 'Guest Mode · Some content is locked',
    masterLogin: 'Master Login',
    healTitle: 'Your Emotional Healing Statement',
    colorTitle: 'Your Color Coordinates',
    prodTitle: 'Healing Product Directions',
    promptTitle: 'Your Exclusive Visual Design',
    cnTitle: 'Creative Brief (for designer communication)',
    lockMsg: 'Master User Exclusive Content',
    unlockBtn: 'Unlock to View',
    adjustBtn: '← Adjust Elements',
    restartBtn: 'Start Over',
    shareBtn: 'Share Now',
    shareSub: 'Copy share text · LINE / FB / IG',
    downloadBtn: 'Download My Life Matrix',
    downloadSub: 'Save your exclusive report · Right-click → Save PDF',
    bookBtn: 'Book Exclusive Custom Service',
    bookSub: 'One-on-one decode session with our designer',
    shareToast: '✓ Copied — paste to share now',
    modalTitle: 'Master User Verification',
    modalSubtitle: 'Enter Access Passkey',
    modalPlaceholder: 'passkey',
    modalUnlock: 'Unlock Full Content',
    modalGuest: 'Continue as Guest',
    modalNote: 'Master users can view exclusive visual design, product directions, and full color report',
    philoTitle: '✦ Core Philosophy: Ancient Metaphysics as Modern Algorithm',
    philoSub: 'The Four Pillars of Aesthetic Logic',
    philoDesc: 'We deconstruct the Eastern Five Elements and astrological space-time flowing in your genes into a modern data algorithm.<br>This is not just a visual revolution — it is a life narrative that transforms ancient mysticism into contemporary aesthetics.',
    philoDesc2: 'The system takes the <strong>"personal data"</strong> of the moment you were born as its foundation, deeply translating your innate space-time coordinates and life story. This exclusive digital code is injected directly into the design core, transforming cold data into a visual imprint that resonates with your unique soul.',
    toggleBtnText: '✨ LIFE+ Four Aesthetic Dimensions Algorithm',
    philoHighTitle: 'Visual Tuning & Space-Time Seal',
    philoHighDesc: 'LIFE System makes each work more than a simple memento — it is a bespoke energy tuning.<br>Memory\'s fleeting moments are sealed within a guardian symbol of minimalist aesthetics.',
    originTitle: '✦ Origin',
    originSub: 'What was the reason for creating the LIFE+ Legacy Matrix?',
    originP1: 'A senior art director by profession, I pushed forward relentlessly through a difficult life — until I exhausted myself and sank into a dark night of loss and unease. Yet precisely because of this, I came to understand viscerally how many people carry anxiety, depression, and inner depletion in an off-balance rhythm.<br>On the path of facing pain and self-healing, I ultimately came to understand: truly stable energy comes from first embracing, understanding, and seeing yourself.',
    originP2: 'On the journey of facing pain and healing myself, I finally understood that true, stable energy comes from first embracing, understanding, and seeing oneself. Therefore, I decided to utilize this ability to "translate beauty" to launch a design project derived from "helping others"—aiming to assist in stabilizing emotions and healing the mind, it also has scientific basis in activating the brain and reducing the risk of future dementia.',
    originP3: 'May LIFE+ help everyone feel more confident and stronger when facing life\'s sudden changes and darkness.Instead of frantically grabbing at things, those who are lost can see the light. Transform fleeting moments into warm and eternal memories.',
    faqItems: [
      {n:'01',q:'What is this system? Is it fortune-telling?',a:'It is not fortune-telling — it is more like a "soul mirror custom-crafted for you in cosmic geometry."<br>Based on scientific principles, we transform the flow of yin-yang Five Elements and metaphysical patterns embedded in your genetic makeup into clean, pure three-dimensional visual coordinates through modern digital design — and use these as a design foundation to archive your precious life memory assets in the form of art (digital/physical).'},
      {n:'02',q:'What can a "Life Visual Coordinate" do for me?',a:'"Every moment is eternal." Memories blur with time, but digitized records do not.<br>This coordinate is your exclusive, inalienable life code — a canvas for your soul, an anchor point for your life. No matter what changes you experience in the future, this coordinate will exist stably, recording your past beauty and strength, and is the core digital asset for future custom physical or digital life-record artworks.'},
      {n:'03',q:'Who is this for? How does it work?',a:'Anyone can use it! You don\'t need to understand any deep metaphysics or technology.<br>Simply enter your birth date and time (or that precious moment), and the backend algorithm will automatically complete all the complex calculations. Whether you seek inner healing dialogue, wish to preserve precious memory assets for yourself or elders, or are a pet parent — you can easily decode. For specific needs, custom options are available to create your unique one-of-a-kind artwork.'},
      {n:'04',q:'What can I do after decoding my coordinate? Will my data be made public?',a:'You can choose to download the beautifully formatted ritual report for safekeeping, share it with important people in various ways, or invite multiple people to participate together.<br>If you want to further develop a complete dynamic life annual ring, or have this coordinate physically customized into a unique artwork, please bring your coordinate to the bottom of the page for "Exclusive Booking" — we will provide detailed service.'}
    ],
    solutionsTitle: '✦ Preserve Memory',
    solutionsDesc: 'We offer private-consultant-level digital archiving and physical customization services,<br>with plans tailored to anchor the most precious memory traces of your life.',
    tabLabels: ['【Chronicle】<br>Digital / Physical','【Light Trail】<br>Physical Art Piece','【I Was Here】<br>Physical Art Piece','【Life Tree】<br>Digital Space'],
    slideIntros: [
      'Crafted for family heritage. We conduct warm, in-depth private interviews, weaving together elders\' archived photos and audio-visual memories into a digital life story that can be passed down forever.',
      'Materializing life data. Translating your exclusive life code into a premium geometric artwork.',
      'A visual life memorial for your beloved pet. Condensing your companion\'s unique data into a physical aesthetic exhibit — letting the warm promise of "I was here" be eternally fixed in space.',
      'An online digital space shared by the family. Breaking through time and space, letting multiple family members jointly participate in weaving and preserving each other\'s warm memory rings.'
    ],
    bookingTitle: '✦ Exclusive Booking',
    bookingDesc: 'Leave your contact information for an in-depth life memory curation session or physical memorial customization.<br>Our team will contact you as soon as possible.',
    formLabels: ['Contact Name *','Phone Number *','Email Address *','Subject Category','Preferred Archive Type','Tell us briefly about the story or vision you want to preserve (optional)'],
    formPlaceholders: ['How shall we address you?','e.g. 0912345678','example@mail.com','','','e.g. Memorial for my beloved cat, or a record of who I am right now...'],
    targetOptions: ['Elder Heritage (Elder Time Capsule)','Pet Life Memorial (Companion Life Record)','Personal Life Reset (Personal Digital Archive)','Other (Digital Asset Curation)'],
    archiveOptions: ['Pure Digital Cloud Archive Report','Custom Physical Geometric Laser-Engraved Memorial','Private Curation Consultant One-on-One Interview Service'],
    submitBtn: 'Submit Commission Inquiry',
    lockText: '🔒 Your life information is protected by the highest standard encryption.',
    lineLabel: '── Or join the official private conversation directly ──',
    lineLink: '👆 Click to chat directly with your exclusive life curator →',
    socialLabel: 'Connect with us through our social channels below ^_^',
    alertTitle: 'Commission Received',
    alertMsg: 'Thank you for anchoring your life coordinate.<br>Your commission inquiry has been successfully sent. Our team will contact you to initiate a one-on-one life curation conversation.',
    alertConfirm: 'Confirm',
    footerBrand: 'LIFE System',
    footerTagline: 'Legacy · Identity · Flow · Element',
    footerCol1Title: 'Business Collaboration',
    footerCol1Lines: ['XUEXUEni Digital Life Aesthetics Studio','Business cooperation negotiations'],
    footerCol2Title: 'Navigation',
    footerCol2Links: [['#experience','Experience Decode'],['#philosophy','Core Philosophy'],['#solutions','Memory Solutions']],
    footerCopy: '© 2026 LIFE+ Legacy Matrix & XUEXUEni Studio. All Rights Reserved.',
    scienceBtn: 'LIFE+ Science & Healing',
    langBtn: '中文',
    unlockedMode: 'Master Mode · Full Content Unlocked',
    unlockedBtn: 'Unlocked',
    pillarLabels: ['Year Pillar','Month Pillar','Day Pillar (Day Master)','Hour Pillar'],
    healCoreLabel: 'Healing Core: Supplement ',
    healCoreLabel2: ' Energy',
    healCoreDesc: ' as dominant color (strong structure), ',
    healCoreDesc2: ' as healing color (supplementing tension) — this artwork is your balance prescription',
    traitRoles: ['Dominant (Strong)','Healing (Deficient)','Complementary'],
    compDesc: {木:'Upward growth, organic lines, breathing space',火:'Center-radiant focus, high-contrast glow, vibrant and clear',土:'Grounded mid-low center of gravity, balanced stability, sense of enclosure',金:'Large-scale precise negative space, single focus, restrained purity',水:'Bottom-up sediment layers, flowing and profound, like the deep sea'},
    geomDesc: {木:'Vertical extension · Organic curves',火:'Radiant triangles · Focal glow',土:'Horizontal grid · Square gravity',金:'Circular arcs · Minimal space',水:'Wave layers · Irregular drift'},
    mainStruct: 'Main Structure (',
    healTension: '): ',
    healTension2: 'Healing Tension (',
    healTension3: '): ',
    healTension4: 'breaks through the main structure, creating visual and emotional dialogue tension',
    copyBtn: 'Copy',
    copiedBtn: 'Copied',
    healAffLabel: '✦ Healing Affirmation: "',
    scienceReport: 'Download Science Report',
    tableHeaders: ['Dimension (Pillars)','Metaphysical Basis','Aesthetic Application','Algorithmic Logic'],
  }
};

let currentLang = 'zh';

function switchLang() {
  currentLang = currentLang === 'zh' ? 'en' : 'zh';
  applyLang();
  applyLangPrice();
  applyLangEvent();
  applyLangIndexExtra();
  localStorage.setItem('lifeLang', currentLang);
}

function t(key) {
  return LANG[currentLang][key];
}

function applyLang() {
  const L = LANG[currentLang];
  document.documentElement.lang = currentLang === 'zh' ? 'zh-TW' : 'en';

  // lang toggle buttons
  document.querySelectorAll('.lang-toggle-btn').forEach(b => b.textContent = L.langBtn);

  // 側邊欄／手機選單分享按鈕（tooltip、title、icon-txt）
  applySidebarLang();

  // nav（依頁面偵測：index.html / price.html+event頁 導覽列項目與順序不同）
  const navLinks = document.querySelectorAll('.nav-links > a');
  const isPriceOrEvent = !!document.getElementById('priceHeader') || !!document.getElementById('ev-brandTitle');
  const navArr = isPriceOrEvent ? L.navSub : L.nav;
  navArr.forEach((txt, i) => { if (navLinks[i]) navLinks[i].textContent = txt; });

  // hero
  const heroTagline = document.querySelector('header h3');
  if (heroTagline) heroTagline.textContent = L.heroTagline;
  const heroSlogan = document.querySelector('header .slogan');
  if (heroSlogan) heroSlogan.textContent = L.heroSlogan;
  const heroTitle = document.querySelector('header h1');
  if (heroTitle) heroTitle.textContent = L.heroTitle;
  const heroDynamics = document.querySelectorAll('.dynamic-subtitle');
  L.heroSubs.forEach((txt, i) => { if (heroDynamics[i]) heroDynamics[i].textContent = txt; });

  // decode trigger
  const decodeIntroEl = document.querySelector('.decode-intro-text');
  if (decodeIntroEl) decodeIntroEl.innerHTML = L.decodeIntro;
  const decodeBtnEl = document.querySelector('.btn-decode-trigger');
  if (decodeBtnEl) decodeBtnEl.textContent = L.decodeBtn;

  // step labels
  const stepLabelEls = document.querySelectorAll('.step-label span');
  L.stepLabels.forEach((txt, i) => { if (stepLabelEls[i]) stepLabelEls[i].textContent = txt; });

  // s0
  const fieldLabels = document.querySelectorAll('#s0 .field-label');
  if (fieldLabels[0]) fieldLabels[0].textContent = L.calLabel;
  if (fieldLabels[1]) fieldLabels[1].textContent = L.yearLabel;
  if (fieldLabels[2]) fieldLabels[2].textContent = L.monthLabel;
  if (fieldLabels[3]) fieldLabels[3].textContent = L.dayLabel;
  const calOpts = document.querySelectorAll('#iCal option');
  L.calOptions.forEach((txt, i) => { if (calOpts[i]) calOpts[i].textContent = txt; });
  const hourLabelEl = document.querySelector('#s0 .field-label:last-of-type');
  if (hourLabelEl) hourLabelEl.textContent = L.hourLabel;
  document.querySelectorAll('#s0 .field-label').forEach((el, i) => {
    const labels = [L.calLabel, L.yearLabel, L.monthLabel, L.dayLabel];
    if (labels[i]) el.textContent = labels[i];
  });
  const hourFieldLabel = document.querySelector('#s0 > div.card > div:nth-child(3) > .field-label');
  if (hourFieldLabel) hourFieldLabel.textContent = L.hourLabel;
  const computeBtnEl = document.querySelector('#s0 .btn-p');
  if (computeBtnEl) computeBtnEl.textContent = L.computeBtn;

  // s1（情感記憶問卷步驟；原本誤植 #s2 選擇器，實際HTML沒有 #s2）
  const s1TitleEl = document.querySelector('#s1 .card-title');
  if (s1TitleEl) s1TitleEl.textContent = L.s2Title;
  const qTitles = document.querySelectorAll('#s1 .q-title');
  const qSubs = document.querySelectorAll('#s1 .q-sub');
  if (qTitles[0]) qTitles[0].textContent = L.q1Title;
  if (qSubs[0]) qSubs[0].textContent = L.q1Sub;
  if (qTitles[1]) qTitles[1].textContent = L.q2Title;
  if (qSubs[1]) qSubs[1].textContent = L.q2Sub;
  if (qTitles[2]) qTitles[2].textContent = L.q3Title;
  if (qSubs[2]) qSubs[2].textContent = L.q3Sub;
  // mood cards
  const moodCards = document.querySelectorAll('#moodG .choice-card');
  L.moodCards.forEach((c, i) => {
    if (!moodCards[i]) return;
    moodCards[i].querySelector('.c-title').textContent = c.title;
    moodCards[i].querySelector('.c-sub').textContent = c.sub;
    if (moodCards[i].querySelector('.c-hint') && c.hint) moodCards[i].querySelector('.c-hint').textContent = c.hint;
  });
  const memCards = document.querySelectorAll('#memG .choice-card');
  L.memCards.forEach((c, i) => {
    if (!memCards[i]) return;
    memCards[i].querySelector('.c-title').textContent = c.title;
    memCards[i].querySelector('.c-sub').textContent = c.sub;
    if (memCards[i].querySelector('.c-hint') && c.hint) memCards[i].querySelector('.c-hint').textContent = c.hint;
  });
  const visCards = document.querySelectorAll('#visG .choice-card');
  L.visCards.forEach((c, i) => {
    if (!visCards[i]) return;
    visCards[i].querySelector('.c-title').textContent = c.title;
    visCards[i].querySelector('.c-sub').textContent = c.sub;
    if (visCards[i].querySelector('.c-hint') && c.hint) visCards[i].querySelector('.c-hint').textContent = c.hint;
  });
  const s1Btns = document.querySelectorAll('#s1 button');
  if (s1Btns[0]) s1Btns[0].textContent = L.s2Next;
  if (s1Btns[1]) s1Btns[1].textContent = L.s2Back;

  // s3（符號/質地步驟：實際只有2張卡，非原本假設的3張）
  const s3Titles = document.querySelectorAll('#s3 .card-title');
  if (s3Titles[0]) s3Titles[0].textContent = L.s3Card2Title;
  if (s3Titles[1]) s3Titles[1].textContent = L.s3Card3Title;
  const s3Qs = document.querySelectorAll('#s3 .card p.q-title');
  if (s3Qs[0]) s3Qs[0].textContent = L.symQ;
  if (s3Qs[1]) s3Qs[1].textContent = L.texQ;
  const s3Btns = document.querySelectorAll('#s3 button');
  if (s3Btns[0]) s3Btns[0].textContent = L.s3Next;
  if (s3Btns[1]) s3Btns[1].textContent = L.s3Back;

  // s4
  const authLabelEl = document.getElementById('authLabel');
  if (authLabelEl && !isAdmin) authLabelEl.textContent = L.guestMode;
  const authToggleEl = document.getElementById('authToggleBtn');
  if (authToggleEl && !isAdmin) authToggleEl.textContent = L.masterLogin;
  const s4Titles = document.querySelectorAll('#s4 .card-title');
  const s4TitleTexts = [L.healTitle, L.colorTitle, L.prodTitle, L.promptTitle, L.cnTitle];
  s4Titles.forEach((el, i) => { if (s4TitleTexts[i]) el.textContent = s4TitleTexts[i]; });
  document.querySelectorAll('.lock-msg').forEach(el => el.textContent = L.lockMsg);
  document.querySelectorAll('.lock-btn').forEach(el => el.textContent = L.unlockBtn);
  const s4GridBtns = document.querySelectorAll('#s4 > div.decode-expand-wrapper > div:last-of-type button, #s4 .step > div[style*="grid"] button');
  // adjust / restart buttons
  const gridBtns = document.querySelectorAll('#s4 > div[style*="grid"] button');
  if (gridBtns[0]) gridBtns[0].textContent = L.adjustBtn;
  if (gridBtns[1]) gridBtns[1].textContent = L.restartBtn;
  // action buttons
  const actionLabels = document.querySelectorAll('.action-label');
  const actionSubs = document.querySelectorAll('.action-sub');
  if (actionLabels[0]) actionLabels[0].textContent = L.shareBtn;
  if (actionSubs[0]) actionSubs[0].textContent = L.shareSub;
  if (actionLabels[1]) actionLabels[1].textContent = L.downloadBtn;
  if (actionSubs[1]) actionSubs[1].textContent = L.downloadSub;
  if (actionLabels[2]) actionLabels[2].textContent = L.bookBtn;
  if (actionSubs[2]) actionSubs[2].textContent = L.bookSub;
  const shareToastEl = document.getElementById('shareToast');
  if (shareToastEl) shareToastEl.textContent = L.shareToast;
  // modal
  const modalTitleEl = document.querySelector('#authModal div > div:first-child');
  if (modalTitleEl) modalTitleEl.textContent = L.modalTitle;
  const modalSubEl = document.querySelector('#authModal div > div:nth-child(2)');
  if (modalSubEl) modalSubEl.textContent = L.modalSubtitle;
  const pwEl = document.getElementById('pwInput');
  if (pwEl) pwEl.placeholder = L.modalPlaceholder;
  const modalBtns = document.querySelectorAll('#authModal button');
  if (modalBtns[0]) modalBtns[0].textContent = L.modalUnlock;
  if (modalBtns[1]) modalBtns[1].textContent = L.modalGuest;
  const modalNoteEl = document.querySelector('#authModal div > div:last-child');
  if (modalNoteEl) modalNoteEl.textContent = L.modalNote;

  // philosophy section
  const philoTitleEl = document.querySelector('#philosophy h1');
  if (philoTitleEl) philoTitleEl.textContent = L.philoTitle;
  const philoSubEl = document.querySelector('#philosophy h4');
  if (philoSubEl) philoSubEl.textContent = L.philoSub;
  const philoDescEls = document.querySelectorAll('#philosophy .intro-section p');
  if (philoDescEls[0]) philoDescEls[0].innerHTML = L.philoDesc;
  if (philoDescEls[1]) philoDescEls[1].innerHTML = L.philoDesc2;
  const toggleBtnEl = document.getElementById('toggleBtn');
  if (toggleBtnEl) toggleBtnEl.querySelector('span:first-child').textContent = L.toggleBtnText;
  const philoHighTitleEl = document.querySelector('.highlight-box h3');
  if (philoHighTitleEl) philoHighTitleEl.textContent = L.philoHighTitle;
  const philoHighDescEl = document.querySelector('.highlight-box p');
  if (philoHighDescEl) philoHighDescEl.innerHTML = L.philoHighDesc;

  // origin
  const originTitleEl = document.querySelector('#philosophy h1:nth-of-type(2)');
  const allH1s = document.querySelectorAll('#philosophy h1');
  if (allH1s[1]) allH1s[1].textContent = L.originTitle;
  const allH4s = document.querySelectorAll('#philosophy h4');
  if (allH4s[1]) allH4s[1].textContent = L.originSub;
  const originPs = document.querySelectorAll('.origin-p');
  if (originPs[0]) originPs[0].innerHTML = L.originP1;
  if (originPs[1]) originPs[1].innerHTML = L.originP2;
  if (originPs[2]) originPs[2].innerHTML = L.originP3;
  if (originPs[3]) originPs[3].textContent = L.originP4;

  // FAQ
  const faqItems = document.querySelectorAll('.faq-item');
  L.faqItems.forEach((item, i) => {
    if (!faqItems[i]) return;
    faqItems[i].querySelector('h3').textContent = item.q;
    faqItems[i].querySelector('.faq-answer p').innerHTML = item.a;
  });

  // solutions
  const solTitleEl = document.querySelector('#solutions h1');
  if (solTitleEl) solTitleEl.textContent = L.solutionsTitle;
  const solDescEl = document.querySelector('#solutions .desc');
  if (solDescEl) solDescEl.innerHTML = L.solutionsDesc;
  const tabBtns = document.querySelectorAll('.tab-btn');
  L.tabLabels.forEach((txt, i) => { if (tabBtns[i]) tabBtns[i].innerHTML = txt; });
  const slideIntros = document.querySelectorAll('.slide-intro');
  L.slideIntros.forEach((txt, i) => { if (slideIntros[i]) slideIntros[i].textContent = txt; });

  // booking
  const bookTitleEl = document.querySelector('#booking h1');
  if (bookTitleEl) bookTitleEl.textContent = L.bookingTitle;
  const bookDescEl = document.querySelector('#booking .desc');
  if (bookDescEl) bookDescEl.innerHTML = L.bookingDesc;
  const formLabelEls = document.querySelectorAll('.booking-form label');
  L.formLabels.forEach((txt, i) => { if (formLabelEls[i]) formLabelEls[i].textContent = txt; });
  const formInputs = document.querySelectorAll('.booking-form .form-input-box');
  L.formPlaceholders.forEach((p, i) => { if (formInputs[i] && p) formInputs[i].placeholder = p; });
  const targetOptsEls = document.querySelectorAll('[name="TargetCategory"] option');
  L.targetOptions.forEach((txt, i) => { if (targetOptsEls[i]) targetOptsEls[i].textContent = txt; });
  const archiveOptsEls = document.querySelectorAll('[name="ArchiveType"] option');
  L.archiveOptions.forEach((txt, i) => { if (archiveOptsEls[i]) archiveOptsEls[i].textContent = txt; });
  const submitBtnEl = document.querySelector('button[type="submit"].message-btn');
  if (submitBtnEl) submitBtnEl.textContent = L.submitBtn;
  const lockTextEl = document.querySelector('.lock-text');
  if (lockTextEl) lockTextEl.textContent = L.lockText;
  const lineLabelEl = document.querySelector('.line-shortcut label');
  if (lineLabelEl) lineLabelEl.textContent = L.lineLabel;
  const lineLinkEl = document.querySelector('.line-shortcut a');
  if (lineLinkEl) lineLinkEl.textContent = L.lineLink;
  const socialLabelEl = document.querySelector('#booking > label');
  if (socialLabelEl) socialLabelEl.textContent = L.socialLabel;

  // alert
  const alertTitleEl = document.querySelector('#custom-alert h3');
  if (alertTitleEl) alertTitleEl.textContent = L.alertTitle;
  const alertMsgEl = document.querySelector('#custom-alert p');
  if (alertMsgEl) alertMsgEl.innerHTML = L.alertMsg;
  const alertBtnEl = document.querySelector('#custom-alert .action-btn');
  if (alertBtnEl) alertBtnEl.textContent = L.alertConfirm;

  // footer
  const footerBrandH4 = document.querySelector('.footer-brand h4');
  if (footerBrandH4) footerBrandH4.textContent = L.footerBrand;
  const footerTaglineEl = document.querySelector('.footer-brand p');
  if (footerTaglineEl) footerTaglineEl.textContent = L.footerTagline;
  const footerCol1 = document.querySelectorAll('.footer-links');
  if (footerCol1[0]) {
    footerCol1[0].querySelector('h5').textContent = L.footerCol1Title;
    const ps = footerCol1[0].querySelectorAll('p');
    if (ps[0]) ps[0].textContent = L.footerCol1Lines[0];
  }
  if (footerCol1[1]) {
    footerCol1[1].querySelector('h5').textContent = L.footerCol2Title;
    const links = footerCol1[1].querySelectorAll('a');
    L.footerCol2Links.forEach(([href, txt], i) => { if (links[i]) links[i].textContent = txt; });
  }
  const scienceBtnEl = document.querySelector('.btn-footer-science');
  if (scienceBtnEl) {
    const svgEl = scienceBtnEl.querySelector('svg');
    scienceBtnEl.textContent = L.scienceBtn;
    if (svgEl) scienceBtnEl.insertBefore(svgEl, scienceBtnEl.firstChild);
  }
}

// ==========================================================================
// price.html 服務方案頁翻譯
// ==========================================================================
const PRICE_LANG = {
  zh: {
    h2: 'LIFE+ Legacy Matrix 服務方案',
    p: '可選擇適合您的方案與加值服務或 <strong>私人顧問級訂製</strong>，來為您定錨生命中最珍貴的記憶軌跡。',
    rows: {
      '00': { title:'免費體驗', content:'<p>生命矩陣座標解碼:依據個人生命座標，進行特質評估與設計分析。提供部分內容可免費自行下載。</p><p>👉 適合：想先了解自己／初次體驗</p>', unit:'/ 單次', btn:'啟動資產委託' },
      '01': { title:'基礎數位憶留', content:'<p>根據個人座標與透過系統建構identify（識別）基礎人生故事軌跡與引導，提供系統演算專屬之設計計畫，專注於生命記憶素材的結構化建檔。完成輕量化數位Memoirs檔案導出，並包含 1次線上資料校正服務。</p><p>✔ 回憶素材整理<br>✔ 故事結構重整<br>✔ 初步視覺化建議<br>✔ 記憶主題規劃</p><p>語音錄音、生活影片、老照片、手寫信、手稿畫作...等，都適合成為編寫回憶的素材。</p><p>👉 適合：想替父母／自己整理人生故事的人</p>', unit:'/ 起', btn:'啟動資產委託' },
      '02': { title:'印記・時光圖譜', content:'<p>將出生時令的陰陽五行與時空卦象，轉譯為專屬視覺 DNA。透過平衡與補足，將您的人生座標編織成獨一無二的幾何線譜，為您量身打造專屬的「視覺調候（Visual Tuning）」。輕量化數位圖像導出，可完美對接實體藝術品製作</p><p> ✔ 專屬時空參數之視覺化建議<br>✔ 個人美學元素與風格主題規劃<br>✔ 將獨一無二的生命座標轉譯為當代藝術品<br></p><p>👉 一座屬於時間的紀念碑，為您深刻封存與守護。</p>', unit:'/ 起', btn:'啟動資產委託' },
      '03': { title:'LIFE+核心典藏', content:'<p>最完整的雙軌留存方案。包含深度生命紀實與時空矩陣架構配置，經由 AI 進階美學轉譯，完整儲存於加密型 Meta-Aesthetics 資料模組。本方案附贈 1 組客製化實體 Physical Memoirs 記憶資產載體，讓情感永恆傳承。</p><p>✔ 深度回憶整理<br>✔ 主題設計規劃<br>✔ 視覺化作品設計<br>✔ 初版典藏成果</p><p>👉 適合：「紀念禮物／自留保存」的人生禮物</p>', unit:'/ 起', btn:'優先客製預約' },
      '04': { title:'永恆資產典藏設計', content:'<p>頂級全景式生命篇章深度整合。結合 6 大維度記憶軌跡演算法，提供最高規格之純手工平面美術與數位雙軌量身訂製。享有獨立算力通道與專屬雲端數位資產永久維護，適合家族傳家寶或專屬圖騰之極致客製需求。</p><p>✔ 全客製流程<br>✔ 深度訪談整理<br>✔ 高階藝術設計<br>✔ 實體作品製作</p><p>👉 適合：重要人生紀念／高情感需求療癒</p>', unit:'/ 起', btn:'尊榮專案洽詢' },
      '05': { title:'多元美學加值配置', content:'<p>提供全方位記憶資產的延伸解碼與實體高階工藝配置，可以個人需求喜好選配</p><p> 📖 <span class="itemname">時光冊</span> :<br>〈數位〉個人專屬數位網頁設計<br>〈實體〉精裝書 <br>🖼 <span class="itemname">光軌</span> :融入現代居家空間的質感陪伴<br>〈數位〉專屬數位網頁設計或影像處理<br>〈實體〉e.g.掛畫、公仔展示、擺件、常用周邊<br>🎁 <span class="itemname">我在</span>:<br>〈數位〉專屬數位網頁設計或影像處理<br>〈實體〉藝術展示品:e.g.掛畫、公仔展示、擺件、常用周邊<br>💾 <span class="itemname">生命樹</span>:<br>〈數位〉專屬數位網頁設計或影像處理<br>〈實體〉藝術展示品:e.g.掛畫、塑像、各式材質擺件<br></p>', price:'另行報價', unit2:'材質數量皆為製作成本調整因素' }
    }
  },
  en: {
    h2: 'LIFE+ Legacy Matrix Service Plans',
    p: 'Choose a plan and add-ons that suit you, or opt for <strong>private-consultant-level customization</strong> to anchor your life\'s most precious memory trace.',
    rows: {
      '00': { title:'Free Trial', content:'<p>Life Matrix Coordinate Decode: trait assessment and design analysis based on your personal life coordinate. Some content is available as a free download.</p><p>👉 Best for: first-time exploration or self-discovery</p>', unit:'/ one-time', btn:'Start My Commission' },
      '01': { title:'Basic Digital Memoir', content:'<p>Builds a foundational life-story timeline and guided prompts from your personal coordinate, delivering an algorithm-generated design plan focused on structuring your memory materials. Includes a lightweight digital Memoirs export plus 1 online data review session.</p><p>✔ Memory material organization<br>✔ Story structure editing<br>✔ Preliminary visual suggestions<br>✔ Memory theme planning</p><p>Voice recordings, home videos, old photos, handwritten letters, sketches — all make great source material.</p><p>👉 Best for: organizing your own or your parents\' life story</p>', unit:'/ from', btn:'Start My Commission' },
      '02': { title:'Imprint · Time Atlas', content:'<p>Translates the Yin-Yang Five Elements and hexagram of your birth moment into exclusive visual DNA. Through balance and supplementation, your life coordinate is woven into a one-of-a-kind geometric score — a bespoke "Visual Tuning." Lightweight digital image export, ready for physical artwork production.</p><p> ✔ Visual suggestions from your space-time parameters<br>✔ Personal aesthetic elements & style planning<br>✔ Translating your unique life coordinate into contemporary art<br></p><p>👉 A monument of time — deeply archived and safeguarded for you.</p>', unit:'/ from', btn:'Start My Commission' },
      '03': { title:'LIFE+ Core Archive', content:'<p>Our most complete dual-track preservation plan. In-depth life documentation and space-time matrix configuration, translated through advanced AI aesthetics and stored in an encrypted Meta-Aesthetics data module. Includes 1 custom Physical Memoirs artifact, carrying emotion forward forever.</p><p>✔ In-depth memory curation<br>✔ Thematic design planning<br>✔ Visual artwork design<br>✔ First archival edition</p><p>👉 Best for: memorial gifts or a keepsake for yourself</p>', unit:'/ from', btn:'Priority Custom Booking' },
      '04': { title:'Eternal Legacy Design', content:'<p>The ultimate panoramic integration of your life chapters. Combines a 6-dimension memory-trace algorithm with top-tier hand-crafted fine art and bespoke digital dual-track production. Includes a dedicated compute channel and permanent cloud asset maintenance — ideal for family heirlooms or fully custom totems.</p><p>✔ Fully custom process<br>✔ In-depth interview curation<br>✔ Premium art design<br>✔ Physical artwork production</p><p>👉 Best for: major life milestones / deep emotional healing needs</p>', unit:'/ from', btn:'Inquire: Premium Project' },
      '05': { title:'Aesthetic Add-On Options', content:'<p>Full-spectrum extended decoding and premium physical craftsmanship add-ons, selectable to your preference</p><p> 📖 <span class="itemname">Chronicle</span> :<br>〈Digital〉Personal web page design<br>〈Physical〉Hardcover book <br>🖼 <span class="itemname">Light Trail</span> : tasteful companionship for modern living spaces<br>〈Digital〉Custom web design or image processing<br>〈Physical〉e.g. wall art, figure display, ornaments, everyday items<br>🎁 <span class="itemname">I Was Here</span>:<br>〈Digital〉Custom web design or image processing<br>〈Physical〉Art display: e.g. wall art, figure display, ornaments, everyday items<br>💾 <span class="itemname">Life Tree</span>:<br>〈Digital〉Custom web design or image processing<br>〈Physical〉Art display: e.g. wall art, sculpture, various material ornaments<br></p>', price:'Custom Quote', unit2:'Material & quantity affect final cost' }
    }
  }
};

function applyLangPrice() {
  const header = document.getElementById('priceHeader');
  if (!header) return;
  const L = PRICE_LANG[currentLang];
  header.querySelector('h2').textContent = L.h2;
  header.querySelector('p').innerHTML = L.p;
  Object.keys(L.rows).forEach(id => {
    const row = document.getElementById('row-' + id);
    if (!row) return;
    const r = L.rows[id];
    row.querySelector('.row-meta h3').textContent = r.title;
    row.querySelector('.row-content').innerHTML = r.content;
    if (r.price) {
      row.querySelector('.row-price').innerHTML = `<span class="currency">${r.price}</span><br><span class="unit">${r.unit2}</span>`;
    } else {
      row.querySelector('.row-price .unit').textContent = r.unit;
    }
    const btnEl = row.querySelector('.row-action-btn');
    if (btnEl) btnEl.textContent = r.btn;
  });
}

// ==========================================================================
// event_brain-color.html 大腦檢測頁翻譯
// ==========================================================================
const EVENT_LANG = {
  zh: {
    brandTitle:'大腦記憶內修復體檢測', brandSub:'LIFE+ Legacy Matrix System',
    descH3:'請輸入您的代號與出生時間。',
    descBody:'LIFE 系統將以此解碼您基因中的陰陽五行干支矩陣，<br>並診斷高壓環境下您的大腦記憶內修復體狀態。',
    lblId:'基本識別 // IDENTIFIER', namePh:'輸入您的暱稱',
    optF:'女性', optM:'男性',
    lblDate:'出生日期 (陽曆) // BIRTH DATE', lblHour:'出生時辰 // BIRTH TIME',
    submitBtn:'進行大腦修復體解碼',
    th:['時柱','日柱','月柱','年柱'],
    stEnergy:'生辰五行氣場 // ENERGY MATRIX', stStatus:'大腦危機診斷 // STATUS', stRecovery:'內在療癒處方 // RECOVERY',
    mlEnemy:'⚡ 精神天敵 (剋星)', mlFriend:'🤝 靈魂共生 (好友)',
    btnShare:'複製報告去揪朋友實測（相愛相殺合盤）', btnDownload:'儲存/下載大腦記憶卡片',
    toggleOpen:'[ 點擊展開 // 觀看所有大腦修復體 ↓ ]', toggleClose:'[ 點擊收起 // CLOSE MATRIX VIEW ↑ ]',
    closebarTitle:'總表展開中 // DECODING LOG', closebarBtn:'✕ 收起',
    log1:'DECODING LOG // 記憶脈絡解析', log2:'大腦記憶內修復體 // 五行能量脈絡總表', log3:'此總表供對照其他基因時間座標。高亮區塊為您本次的定錨屬性。',
    ctaP:'想了解更多將生命記憶轉化為數位或實體藝術資產方案，請前往 LIFE 主艙體。', ctaBtn:'啟動 LIFE 核心定錨體驗艙 ↗',
    hourOptions:['子時 00:00–01:00','子時 01:00–01:59','丑時 02:00–02:59','丑時 03:00–03:59','寅時 04:00–04:59','寅時 05:00–05:59','卯時 06:00–06:59','卯時 07:00–07:59','辰時 08:00–08:59','辰時 09:00–09:59','巳時 10:00–10:59','巳時 11:00–11:59','午時 12:00–12:59','午時 13:00–13:59','未時 14:00–14:59','未時 15:00–15:59','申時 16:00–16:59','申時 17:00–17:59','酉時 18:00–18:59','酉時 19:00–19:59','戌時 20:00–20:59','戌時 21:00–21:59','亥時 22:00–22:59','亥時 23:00–23:59'],
    cells: {
      WOOD:  { name:'社交救火仙姑 // 俠客', label:'木核偏向 (Wood)', t1:'高壓大腦危機', c1:'白天把正能量都燒給別人，回到家卻是一具連外賣都懶得拆的廢棄人偶。海馬迴被「過度責任感」超載磨損，面臨集體斷電風險。', t2:'內在療癒處方', c2:'大腦需要「物理隔離」。立刻停止接收他人的精神垃圾，每天留出 1 小時完全不與人溝通的「空白時間」來修復神經脈絡。' },
      FIRE:  { name:'瞬間斷片灶神 // 祝融', label:'火核偏向 (Fire)', t1:'高壓大腦危機', c1:'辦事全憑第一直覺。最近嚴重懷疑自己得了健忘症，上一秒拿鑰匙、下一秒找鑰匙，短期記憶區正因為環境高壓面臨經常性格式化。', t2:'內在療癒處方', c2:'最需要的是「大腦排毒與燃料補充」。刻意遠離高工時壓榨環境，多與高能量、正向思維的人群相處，讓海馬迴稍微恢復機能。' },
      EARTH: { name:'孤獨硬撐土地婆 // 公', label:'土核偏向 (Earth)', t1:'高壓大腦危機', c1:'習慣沒有人陪伴，所以把所有能量都聚焦在工作和自律上。大腦防禦牆長期過載，海馬迴因為習慣「一個人硬撐」而陷入憂鬱與慢性疲勞。', t2:'內在療癒處方', c2:'需要建立「外在的安全感與連結」。目前的你財務無虞，請停止無止盡的自我鞭策，容許生活出現預料之外的留白與社交。' },
      METAL: { name:'完美主義判官娘 // 包公', label:'金核偏向 (Metal)', t1:'高壓大腦危機', c1:'害怕做錯事，所以進場或決策前反覆考慮，時常錯過最佳時機。對完美主義的執著，讓大腦的運算核心天天超載內耗，睡眠障礙隨之而來。', t2:'內在療癒處方', c2:'需要「容許殘缺與臣服當下」。不完美的進場，勝過完美的等待；不完美的記錄，勝過完美的遺忘。試著放手讓核心休息。' },
      WATER: { name:'邊界模糊龍王女 // 水怪', label:'水核偏向 (Water)', t1:'高壓大腦危機', c1:'天生自帶高同理心，一走進房間就能吸收所有人散發的焦慮。邊界太模糊，大腦海馬迴嚴重超載，記憶與自我定位被悄悄磨滅。', t2:'內在療癒處方', c2:'需要強效的「心理除濕與邊界建立」。明確拒絕不屬於自身目的之工作與情緒垃圾，拿回生活作息的絕對掌控權，清除大腦內耗物。' }
    }
  },
  en: {
    brandTitle:'Brain Memory Recovery Diagnostic', brandSub:'LIFE+ Legacy Matrix System',
    descH3:'Enter your codename and birth time.',
    descBody:'The LIFE System decodes the Yin-Yang Five Elements matrix in your genes,<br>and diagnoses your brain\'s memory-recovery state under high stress.',
    lblId:'BASIC ID // IDENTIFIER', namePh:'Enter your nickname',
    optF:'Female', optM:'Male',
    lblDate:'BIRTH DATE (Solar) // BIRTH DATE', lblHour:'BIRTH HOUR // BIRTH TIME',
    submitBtn:'Run Brain Recovery Decode',
    th:['Hour','Day','Month','Year'],
    stEnergy:'Five-Element Energy // ENERGY MATRIX', stStatus:'Brain Crisis Diagnosis // STATUS', stRecovery:'Inner Healing Prescription // RECOVERY',
    mlEnemy:'⚡ Nemesis (Conflicting Type)', mlFriend:'🤝 Soul Ally (Compatible Type)',
    btnShare:'Copy Report & Challenge a Friend (Compatibility Test)', btnDownload:'Save / Download Memory Card',
    toggleOpen:'[ Click to Expand // View All Brain Types ↓ ]', toggleClose:'[ Click to Collapse // CLOSE MATRIX VIEW ↑ ]',
    closebarTitle:'Full Matrix Expanded // DECODING LOG', closebarBtn:'✕ Close',
    log1:'DECODING LOG // MEMORY TRACE ANALYSIS', log2:'Brain Memory Recovery Types // Five-Element Energy Matrix', log3:'For comparison against other genetic time coordinates. The highlighted block is your current anchor attribute.',
    ctaP:'Want to turn life memories into digital or physical art assets? Visit the LIFE main capsule.', ctaBtn:'Enter LIFE Core Anchor Experience ↗',
    hourOptions:['Zi 00:00–01:00','Zi 01:00–01:59','Chou 02:00–02:59','Chou 03:00–03:59','Yin 04:00–04:59','Yin 05:00–05:59','Mao 06:00–06:59','Mao 07:00–07:59','Chen 08:00–08:59','Chen 09:00–09:59','Si 10:00–10:59','Si 11:00–11:59','Wu 12:00–12:59','Wu 13:00–13:59','Wei 14:00–14:59','Wei 15:00–15:59','Shen 16:00–16:59','Shen 17:00–17:59','You 18:00–18:59','You 19:00–19:59','Xu 20:00–20:59','Xu 21:00–21:59','Hai 22:00–22:59','Hai 23:00–23:59'],
    cells: {
      WOOD:  { name:'Social Firefighter // The Ranger', label:'Wood-Core Leaning (Wood)', t1:'High-Stress Brain Crisis', c1:'You burn all your positive energy on others by day, then come home an empty shell too tired to open a delivery bag. The hippocampus is worn thin by "over-responsibility," at risk of total shutdown.', t2:'Inner Healing Prescription', c2:'Your brain needs "physical isolation." Stop absorbing other people\'s emotional waste immediately — set aside 1 hour of totally silent, no-contact time daily to repair your neural pathways.' },
      FIRE:  { name:'Instant Blackout Hearth Spirit // The Fire God', label:'Fire-Core Leaning (Fire)', t1:'High-Stress Brain Crisis', c1:'You run entirely on first instinct. Lately you suspect you have memory loss — grabbing your keys one second, hunting for them the next. Short-term memory is being repeatedly wiped by environmental pressure.', t2:'Inner Healing Prescription', c2:'You most need a "brain detox and fuel refill." Deliberately step away from overworked, high-pressure settings and spend more time with high-energy, positive people to help the hippocampus recover.' },
      EARTH: { name:'Lonely Load-Bearing Earth Goddess // The Guardian', label:'Earth-Core Leaning (Earth)', t1:'High-Stress Brain Crisis', c1:'Used to being alone, you pour all your energy into work and self-discipline. Your brain\'s defense wall is chronically overloaded — the hippocampus, habituated to "carrying it alone," slides into depression and chronic fatigue.', t2:'Inner Healing Prescription', c2:'You need to build "external safety and connection." You are financially secure — stop the endless self-whipping and allow room for unplanned rest and social time.' },
      METAL: { name:'Perfectionist Judge // The Magistrate', label:'Metal-Core Leaning (Metal)', t1:'High-Stress Brain Crisis', c1:'Afraid of making mistakes, you deliberate endlessly before entering or deciding, often missing the best timing. Your grip on perfectionism keeps the brain\'s processing core overloaded daily, bringing sleep trouble along with it.', t2:'Inner Healing Prescription', c2:'You need to "allow imperfection and surrender to the present." An imperfect entry beats a perfect wait; an imperfect record beats a perfect forgetting. Try letting go so the core can rest.' },
      WATER: { name:'Boundary-Blurred Dragon Princess // The Water Spirit', label:'Water-Core Leaning (Water)', t1:'High-Stress Brain Crisis', c1:'Naturally high in empathy, you absorb everyone\'s anxiety the moment you enter a room. With boundaries too blurred, your hippocampus is severely overloaded, quietly eroding memory and sense of self.', t2:'Inner Healing Prescription', c2:'You need strong "psychological dehumidifying and boundary-building." Clearly decline work and emotional baggage that isn\'t yours, reclaim full control of your daily rhythm, and clear out the brain\'s internal clutter.' }
    }
  }
};

function applyLangEvent() {
  const brandTitleEl = document.getElementById('ev-brandTitle');
  if (!brandTitleEl) return;
  const L = EVENT_LANG[currentLang];

  brandTitleEl.textContent = L.brandTitle;
  const set = (id, val, html) => { const el = document.getElementById(id); if (el) { if (html) el.innerHTML = val; else el.textContent = val; } };
  set('ev-brandSub', L.brandSub);
  const descEl = document.getElementById('ev-desc');
  if (descEl) descEl.innerHTML = `<h3>${L.descH3}</h3>${L.descBody}`;
  set('ev-lbl-id', L.lblId);
  const nameInput = document.getElementById('user-name');
  if (nameInput) nameInput.placeholder = L.namePh;
  set('ev-opt-f', L.optF); set('ev-opt-m', L.optM);
  set('ev-lbl-date', L.lblDate); set('ev-lbl-hour', L.lblHour);
  set('ev-submitBtn', L.submitBtn);
  ['h','d','m','y'].forEach((k,i) => set('ev-th-' + k, L.th[i]));
  set('ev-st-energy', L.stEnergy); set('ev-st-status', L.stStatus); set('ev-st-recovery', L.stRecovery);
  set('ev-ml-enemy', L.mlEnemy); set('ev-ml-friend', L.mlFriend);
  set('ev-btn-share', L.btnShare); set('ev-btn-download', L.btnDownload);
  set('ev-closebar-title', L.closebarTitle); set('ev-closebar-btn', L.closebarBtn);
  set('ev-log-1', L.log1); set('ev-log-2', L.log2); set('ev-log-3', L.log3);
  set('ev-cta-p', L.ctaP); set('ev-cta-btn', L.ctaBtn + ' ↗');

  const toggleBtn = document.getElementById('toggle-matrix-btn');
  const zone = document.getElementById('matrixCollapseZone');
  if (toggleBtn && zone) toggleBtn.innerText = (zone.style.display === 'block') ? L.toggleClose : L.toggleOpen;

  const hourSelect = document.getElementById('birth-hour');
  if (hourSelect) {
    Array.from(hourSelect.options).forEach((opt, i) => { if (L.hourOptions[i]) opt.textContent = L.hourOptions[i]; });
  }

  const cellMap = { WOOD_CORE:'WOOD', FIRE_CORE:'FIRE', EARTH_CORE:'EARTH', METAL_CORE:'METAL', WATER_CORE:'WATER' };
  Object.keys(cellMap).forEach(domId => {
    const cell = document.getElementById('cell-' + domId);
    if (!cell) return;
    const d = L.cells[cellMap[domId]];
    cell.querySelector('.cell-main-name').textContent = d.name;
    cell.querySelector('.cell-element-label').textContent = d.label;
    const sections = cell.querySelectorAll('.cell-section');
    if (sections[0]) { sections[0].querySelector('.cell-section-title').textContent = d.t1; sections[0].querySelector('.cell-section-content').textContent = d.c1; }
    if (sections[1]) { sections[1].querySelector('.cell-section-title').textContent = d.t2; sections[1].querySelector('.cell-section-content').textContent = d.c2; }
  });

  if (typeof currentReport !== 'undefined' && currentReport && document.getElementById('result-container') && document.getElementById('result-container').style.display !== 'none') {
    if (typeof calculateMatrix === 'function') calculateMatrix();
  }
}

// ==========================================================================
// index.html 專屬區塊翻譯（什麼是LIFE+ / 產品卡 / #solutions服務方案 / 腦檢引導列）
// ==========================================================================
const INDEX_EXTRA = {
  zh: {
    wwdH1: '什麼是 LIFE+？',
    wwdP: '是將人生回憶轉化為情感資產典藏的設計系統。<br>從生命探索、回憶整理到藝術創作，協助將珍貴故事保存成數位與實體作品。<br><span style="color:#00fcda;">專人諮詢 → 矩陣系統 → 故事整合 → 專屬設計 → 數位/實體典藏</span><br><strong>『 全 程 採 一 對 一 客 製 規 劃 』</strong>',
    solH4: '我們提供多種數位封存與實體定製服務',
    solP: '手機裡的照片越來越多，保存下來的回憶卻越來越少，某天才發現那些珍貴瞬間，總是消失的措手不及。',
    pm: [
      { h:'📖《時光冊》數位(晶片)/實體', p:'數位永存，化為可傳承的生命故事。' },
      { h:'🎁《光軌》數位(晶片)/實體', p:'將專屬生命代碼，轉譯為頂級幾何藝術品。' },
      { h:'🐶《我在》數位(晶片)/實體', p:'將愛的陪伴凝練為實體美學展品。「我一直都在」' },
      { h:'💾《生命樹》數位(晶片)/實體', p:'適合家族共享的線上數位空間。' }
    ],
    solPriceH2: '✦ LIFE+ Legacy Matrix 服務方案',
    solPriceP: '可選合適方案與加值服務或啟用 <strong>『私人顧問級訂製』</strong>。',
    solRows: {
      '00': { title:'生命矩陣', content:'<p>生命矩陣探索:依據個人生命座標解碼，進行初步特質評估與設計分析。</p>', unit:'/ 單次', btn:'馬上體驗' },
      '01': { title:'基礎數位憶留', content:'<p>✔ 想替父母保存人生故事<br>✔ 想整理老照片<br>✔ 想留下家族回憶</p>', unit:'/ 起', btn:'了解更多' },
      '02': { title:'印記・時光圖譜', content:'<p> ✔ 專屬時空參數之視覺化建議<br>✔ 個人美學元素與風格主題規劃<br>✔ 將專屬生命座標轉譯為當代藝術品</p>', unit:'/起', btn:'啟動資產委託' },
      '03': { title:'LIFE+核心典藏', content:'✔ 數位典藏<br>✔ 專屬生命矩陣分析<br>✔ 客製化視覺設計<br>✔ 實體藝術載體', unit:'/ 起', btn:'優先客製預約' },
      '04': { title:'永恆資產典藏設計', content:'<p>頂級深度整合，適合家族傳家寶或專屬圖騰之極致客製需求。依實際服務需求另行報價。</p>', unit:'/起', btn:'尊榮專案洽詢' },
      '05': { title:'多元美學加值配置', content:'<p>提供全方位記憶資產的延伸解碼與實體高階工藝配置，可以個人需求喜好選擇加值服務，依實際服務需求另行報價。</p>', price:'依所選配置報價', btn:'更多加值服務' }
    },
    btfTxt: '👉 從大腦記憶修復體檢測開始吧?',
    btfLink: '🧠腦體檢中心'
  },
  en: {
    wwdH1: 'What is LIFE+?',
    wwdP: 'A design system that transforms life memories into archived emotional assets.<br>From life exploration and memory curation to artistic creation, helping preserve precious stories as digital and physical works.<br><span style="color:#00fcda;">Consultation → Matrix System → Story Integration → Custom Design → Digital/Physical Archive</span><br><strong>『 Every Step, Fully One-on-One Custom Planned 』</strong>',
    solH4: 'We offer a range of digital archiving and physical customization services',
    solP: 'More photos pile up on your phone every day, yet fewer memories are truly preserved — until one day you realize those precious moments have quietly slipped away.',
    pm: [
      { h:'📖 Chronicle · Digital (Chip) / Physical', p:'Digitally preserved forever, becoming a life story that can be passed down.' },
      { h:'🎁 Light Trail · Digital (Chip) / Physical', p:'Your exclusive life code, translated into a premium geometric artwork.' },
      { h:'🐶 I Was Here · Digital (Chip) / Physical', p:'Loving companionship condensed into a physical aesthetic exhibit — "I am always here."' },
      { h:'💾 Life Tree · Digital (Chip) / Physical', p:'An online digital space for the whole family to share.' }
    ],
    solPriceH2: '✦ LIFE+ Legacy Matrix Service Plans',
    solPriceP: 'Choose a plan and add-ons that suit you, or opt for <strong>private-consultant-level customization</strong>.',
    solRows: {
      '00': { title:'Life Matrix', content:'<p>Life Matrix Exploration: preliminary trait assessment and design analysis based on your personal life coordinate.</p>', unit:'/ one-time', btn:'Try It Now' },
      '01': { title:'Basic Digital Memoir', content:'<p>✔ Preserve your parents\' or your own life story<br>✔ Organize old photos<br>✔ Keep family memories</p>', unit:'/ from', btn:'Learn More' },
      '02': { title:'Imprint · Time Atlas', content:'<p> ✔ Visual suggestions from your space-time parameters<br>✔ Personal aesthetic elements & style planning<br>✔ Translating your unique life coordinate into contemporary art</p>', unit:'/ from', btn:'Start My Commission' },
      '03': { title:'LIFE+ Core Archive', content:'✔ Digital archive<br>✔ Personal life matrix analysis<br>✔ Custom visual design<br>✔ Physical art piece', unit:'/ from', btn:'Priority Custom Booking' },
      '04': { title:'Eternal Legacy Design', content:'<p>Top-tier deep integration, ideal for family heirlooms or fully custom totems. Quoted based on actual service needs.</p>', unit:'/ from', btn:'Inquire: Premium Project' },
      '05': { title:'Aesthetic Add-On Options', content:'<p>Full-spectrum extended decoding and premium physical craftsmanship add-ons, selectable to your preference. Quoted based on actual service needs.</p>', price:'Custom Quote', btn:'More Add-Ons' }
    },
    btfTxt: '👉 Start with the Brain Memory Recovery Test?',
    btfLink: '🧠 Brain Check Center'
  }
};

function applyLangIndexExtra() {
  const wwdH1 = document.getElementById('wwd-h1');
  if (!wwdH1) return; // 非index.html則不執行
  const L = INDEX_EXTRA[currentLang];
  wwdH1.textContent = L.wwdH1;
  const wwdP = document.getElementById('wwd-p'); if (wwdP) wwdP.innerHTML = L.wwdP;
  const solH4 = document.getElementById('sol-h4'); if (solH4) solH4.textContent = L.solH4;
  const solP = document.getElementById('sol-p'); if (solP) solP.textContent = L.solP;
  L.pm.forEach((item, i) => {
    const h = document.getElementById('pm-' + (i + 1) + '-h');
    const p = document.getElementById('pm-' + (i + 1) + '-p');
    if (h) h.textContent = item.h;
    if (p) p.textContent = item.p;
  });
  const solPriceHeader = document.getElementById('solPriceHeader');
  if (solPriceHeader) {
    solPriceHeader.querySelector('h2').textContent = L.solPriceH2;
    solPriceHeader.querySelector('p').innerHTML = L.solPriceP;
  }
  Object.keys(L.solRows).forEach(id => {
    const row = document.getElementById('sol-row-' + id);
    if (!row) return;
    const r = L.solRows[id];
    row.querySelector('.row-meta h3').textContent = r.title;
    row.querySelector('.row-content').innerHTML = r.content;
    if (r.price) {
      row.querySelector('.row-price').innerHTML = `<span class="currency">${r.price}</span>`;
    } else {
      row.querySelector('.row-price .unit').textContent = r.unit;
    }
    const btnEl = row.querySelector('.row-action-btn');
    if (btnEl) btnEl.textContent = r.btn;
  });
  const btfTxt = document.getElementById('btf-txt'); if (btfTxt) btfTxt.textContent = L.btfTxt;
  const btfLink = document.getElementById('btf-link'); if (btfLink) btfLink.textContent = L.btfLink;
}

// ==========================================================================
// 語言持久化（localStorage）：切換後跨頁瀏覽自動維持同一語言
// ==========================================================================
(function () {
  const saved = localStorage.getItem('lifeLang');
  if (saved === 'en' || saved === 'zh') currentLang = saved;
})();

document.addEventListener('DOMContentLoaded', () => {
  if (currentLang === 'en') {
    applyLang();
    applyLangPrice();
    applyLangEvent();
    applyLangIndexExtra();
  }
});

// ==========================================================================
// 側邊欄／手機選單分享按鈕翻譯（data-tooltip / title / .icon-txt）
// ==========================================================================
const SIDEBAR_MAP = {
  "看看適合方案": "View Plans",
  "馬上分析": "Instant Analysis",
  "分享至 LINE": "Share via LINE",
  "分享至 Facebook": "Share via Facebook",
  "複製網頁連結": "Copy Link",
  "腦檢中心": "Brain Check Center",
  "✨了解典藏服務": "✨ View Our Services",
  "🧠腦體檢中心": "🧠 Brain Check Center"
};

function applySidebarLang() {
  const en = currentLang === 'en';
  document.querySelectorAll('[data-tooltip]').forEach(el => {
    if (!el.dataset.zhTooltip) el.dataset.zhTooltip = el.getAttribute('data-tooltip').trim();
    const zh = el.dataset.zhTooltip;
    el.setAttribute('data-tooltip', en && SIDEBAR_MAP[zh] ? SIDEBAR_MAP[zh] : zh);
  });
  document.querySelectorAll('[title]').forEach(el => {
    const cur = (el.dataset.zhTitle || el.getAttribute('title') || '').trim();
    if (!SIDEBAR_MAP[cur]) return;
    if (!el.dataset.zhTitle) el.dataset.zhTitle = cur;
    el.setAttribute('title', en ? SIDEBAR_MAP[cur] : cur);
  });
  document.querySelectorAll('.icon-txt').forEach(el => {
    if (!el.dataset.zhTxt) el.dataset.zhTxt = el.textContent.trim();
    const zh = el.dataset.zhTxt;
    el.textContent = en && SIDEBAR_MAP[zh] ? SIDEBAR_MAP[zh] : zh;
  });
}
