// 假資料：之後接後台時，換成 API 回傳同結構即可
window.EMOTION_COLORS = [
  { key: 'yellow', word: '喜悅・滿足',       btn: '喜悅・滿足', hi: '#FFF3C2', base: '#F2C94C', lo: '#B5862A', rgb: '242,201,76' },
  { key: 'blue',   word: '悲傷・沉澱',       btn: '悲傷・沉澱', hi: '#C9DBFF', base: '#5B8DEF', lo: '#2C4FA0', rgb: '91,141,239' },
  { key: 'red',    word: '激動・熱烈',       btn: '激動・熱烈', hi: '#FFC4C0', base: '#E5484D', lo: '#9A1F27', rgb: '229,72,77' },
  { key: 'purple', word: '迷惘・不安',       btn: '迷惘・不安', hi: '#E2D6FF', base: '#9B7BE0', lo: '#5A3FA0', rgb: '155,123,224' },
  { key: 'green',  word: '平靜・安穩',       btn: '平靜・安穩', hi: '#CDF2DE', base: '#5FBF8F', lo: '#2D7A56', rgb: '95,191,143' },
  { key: 'pink',   word: '溫暖・被愛',       btn: '溫暖・被愛', hi: '#FFE0EA', base: '#F29BB8', lo: '#B55A7C', rgb: '242,155,184' },
  { key: 'white',  word: '療癒・能量・釋然', btn: '療癒・釋然', hi: '#FFFFFF', base: '#EEE9DE', lo: '#B9B2A3', rgb: '238,233,222', rim: 'rgba(255,255,255,0.6)' },
  { key: 'black',  word: '沉痛・遺憾・銘記', btn: '遺憾・銘記', hi: '#4A5068', base: '#161926', lo: '#030305', rgb: '0,229,255', rim: 'rgba(0,229,255,0.4)', dim: true }
];

// audio: src 為 null 時以 duration 模擬播放
window.MOCK_STORIES = {
  a: {
    id: 'a',
    chapter: 'people', visibility: 'family', // 個人頁用
    title: '外婆家的那棵芒果樹',
    date: '2026-11-06',
    color: 'pink',
    audio: { src: null, duration: 232 },
    photos: ['../assets/images/p1-1.jpg', '../assets/images/p1-2.jpg', '../assets/images/p1-3.jpg'],
    text: '那年夏天，外婆家門口的芒果樹結得特別滿。午後蟬聲一停，表哥就爬上去搖樹枝，我和妹妹在樹下用竹籃接，誰接得多，晚上就能先挑最大的那顆。\n外婆總坐在門檻上剝綠豆，嘴裡唸著「小心、小心」，眼睛卻一直笑著。芒果汁沿著手腕流到手肘，黏黏的，洗也洗不掉那股甜。\n後來老家改建，樹被移走了。可是每次聞到熟芒果的味道，我還是會想起那個門檻、那把竹籃，和外婆的那句「小心」。'
  },
  b: {
    id: 'b',
    chapter: 'turning', visibility: 'public', // 個人頁用
    title: '第一次自己搭夜車',
    date: '2026-10-21',
    color: 'purple',
    audio: null,
    photos: [],
    text: '十九歲那年，我第一次一個人搭夜車北上。車廂燈很暗，窗外只看得見偶爾閃過的平交道。\n我把背包抱在胸前，一路都沒睡，心裡反覆想著到了台北要怎麼轉車、會不會找不到宿舍。\n天快亮的時候，車子開過一片稻田，霧很低，太陽從山後面慢慢浮上來。那一刻突然覺得，好像也沒有那麼可怕。'
  },
  c: {
    id: 'c',
    chapter: 'people', visibility: 'private', // 個人頁用
    title: '爸爸的最後一通電話',
    date: '2026-09-02',
    color: 'black',
    audio: { src: null, duration: 95 },
    photos: ['../assets/images/p3-1.jpg'],
    text: '那天他只說了一句：「吃飽沒？」我說在忙，晚點回。'
  }
};
