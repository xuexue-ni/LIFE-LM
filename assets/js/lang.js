// ── 語言系統 ──
const LANG = {
  zh: {
    nav: ['免費體驗','核心原理','留住記憶','專屬預約'],
    heroTitle: '瞬間即是永恆',
    heroSubs: ['你記憶中的自己是什麼樣子?','傳承記憶，將生命錨定於宇宙座標','探尋基因中流動的陰陽五行美學','在時間的漣漪裡，你是獨一無二的純粹'],
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
    nav: ['Free Trial','Core Philosophy','Preserve Memory','Book Now'],
    heroTitle: 'Every Moment is Eternal',
    heroSubs: ['Who are you in your own memory?','Preserve heritage, anchor life to cosmic coordinates','Explore the Five Elements flowing in your genes','In the ripples of time, you are uniquely pure'],
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
    scienceBtn: 'LIFE+ Memory & Healing System Scientific Evidence',
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
}

function t(key) {
  return LANG[currentLang][key];
}

function applyLang() {
  const L = LANG[currentLang];
  document.documentElement.lang = currentLang === 'zh' ? 'zh-TW' : 'en';

  // lang toggle buttons
  document.querySelectorAll('.lang-toggle-btn').forEach(b => b.textContent = L.langBtn);

  // nav
  const navLinks = document.querySelectorAll('.nav-links a');
  L.nav.forEach((txt, i) => { if (navLinks[i]) navLinks[i].textContent = txt; });

  // hero
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

  // s1 titles
  const s1Titles = document.querySelectorAll('#s1 .card-title');
  if (s1Titles[0]) s1Titles[0].textContent = L.card1Title;
  if (s1Titles[1]) s1Titles[1].textContent = L.card2Title;
  if (s1Titles[2]) s1Titles[2].textContent = L.card3Title;
  const s1SubEl = document.querySelector('#s1 .card:nth-child(2) p');
  if (s1SubEl) s1SubEl.textContent = L.card2Sub;
  const s1Btns = document.querySelectorAll('#s1 button');
  if (s1Btns[0]) s1Btns[0].textContent = L.nextBtn;
  if (s1Btns[1]) s1Btns[1].textContent = L.backBtn;

  // s2
  const s2TitleEl = document.querySelector('#s2 .card-title');
  if (s2TitleEl) s2TitleEl.textContent = L.s2Title;
  const qTitles = document.querySelectorAll('#s2 .q-title');
  const qSubs = document.querySelectorAll('#s2 .q-sub');
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
  const s2Btns = document.querySelectorAll('#s2 button');
  if (s2Btns[0]) s2Btns[0].textContent = L.s2Next;
  if (s2Btns[1]) s2Btns[1].textContent = L.s2Back;

  // s3
  const s3Titles = document.querySelectorAll('#s3 .card-title');
  if (s3Titles[0]) s3Titles[0].textContent = L.s3Card1Title;
  if (s3Titles[1]) s3Titles[1].textContent = L.s3Card2Title;
  if (s3Titles[2]) s3Titles[2].textContent = L.s3Card3Title;
  const s3Subs = document.querySelectorAll('#s3 .card p');
  if (s3Subs[0]) s3Subs[0].textContent = L.s3Card1Sub;
  if (s3Subs[1]) s3Subs[1].textContent = L.s3Card2Sub;
  if (s3Subs[2]) s3Subs[2].textContent = L.s3Card3Sub;
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
