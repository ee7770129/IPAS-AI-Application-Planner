/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：data-engineering.js
 * 功能：數據處理與特徵工程 - 中級科目二卡片資料
 * 建立日期：2026-05-15
 * 版本：1.0.0
 */

export default {
  id: 'data-engineering',
  label: '數據處理與特徵工程',
  cards: [
    {
      number: 1,
      title: 'Label Encoding 風險',
      engTitle: 'Label Encoding Risk',
      back: {
        sections: [
          { label: '是什麼', icon: 'warning', content: 'Label Encoding 把類別直接轉成整數（紅=0, 藍=1, 綠=2）。但模型會以為 2 > 1 > 0，覺得「綠 > 藍 > 紅」，引入了根本不存在的順序關係。' },
          { label: '範例', icon: 'table_chart', code: '原始：顏色 = [紅, 藍, 綠]\n\nLabel Encoding：\n  紅 → 0, 藍 → 1, 綠 → 2\n  → 模型以為 綠(2) > 藍(1) > 紅(0)\n  → 但顏色根本沒有大小之分！\n\n正確做法（無序類別）：One-hot Encoding' },
          { label: '什麼時候可以用', icon: 'check_circle', content: '只有「有順序」的類別才適合：\n例：學歷（國中=1, 高中=2, 大學=3）→ 真的有高低\n例：滿意度（不滿意=1, 普通=2, 滿意=3）→ 真的有順序' },
          { label: '考試重點', icon: 'school', content: 'Label Encoding 最常見的風險：「引入類別之間的虛假順序關係」。\n\n不是「無法處理缺值」。不是「無法擴展至新資料」。不是「記憶體佔用高」（反而比 One-hot 省）。' }
        ]
      }
    },
    {
      number: 2,
      title: '標準化 vs 正規化 辨析',
      engTitle: 'Standardization vs Normalization Clarification',
      back: {
        sections: [
          { label: '兩者差別', icon: 'compare', code: '標準化（Standardization / Z-score）：\n  X_new = (X - 平均值) / 標準差\n  → 平均值 = 0, 標準差 = 1\n  → 範圍不固定（可以超過 1 或低於 0）\n  → 不會壓縮到 [0,1]\n\nMin-Max 正規化（Normalization）：\n  X_new = (X - min) / (max - min)\n  → 壓縮到 [0, 1] 範圍\n  → 受極端值影響大' },
          { label: '考試陷阱', icon: 'warning', content: '常見錯誤敘述：「標準化會將數值壓縮至 0 至 1 之間」→ 錯！\n\n標準化讓平均值=0、標準差=1，但數值範圍「不是」0到1。壓縮到 [0,1] 的是 Min-Max 正規化。' },
          { label: '考試重點', icon: 'school', content: '「標準化使平均值為 0 標準差為 1」→ 正確。\n「標準化將範圍壓縮至 0 至 1」→ 錯誤！\n\n這是高頻考點。' }
        ]
      }
    },
    {
      number: 3,
      title: '特徵工程方法比較',
      engTitle: 'Feature Engineering Methods',
      back: {
        sections: [
          { label: '四種方法', icon: 'build', code: '特徵衍生（Feature Derivation）：\n  從現有欄位「計算」出新欄位\n  例：銷售額 / 瀏覽次數 = 轉換率\n\n特徵選擇（Feature Selection）：\n  從眾多特徵中「挑選」最重要的\n  例：用相關係數選前 10 個特徵\n\n特徵轉換（Feature Transformation）：\n  改變特徵的「表示方式」\n  例：標準化、對數轉換、One-hot\n\n分箱處理（Binning）：\n  連續值切成區間變成類別\n  例：年齡 → 青年/中年/老年' },
          { label: '考試重點', icon: 'school', content: '「用現有欄位計算出新變數」→ 特徵衍生。\n\n不是特徵選擇（選擇是挑，不是算新的）。\n不是特徵轉換（轉換是改表示方式，不是產生新欄位）。\n不是分箱（分箱是把連續值離散化）。' }
        ]
      }
    },
    {
      number: 4,
      title: 'Robust Scaling',
      engTitle: 'Robust Scaling / 穩健縮放',
      back: {
        sections: [
          { label: '是什麼', icon: 'shield', content: '用中位數和四分位距（IQR）來縮放資料，不受極端值影響。適合資料有明顯離群值的場景。' },
          { label: '怎麼算', icon: 'calculate', code: 'X_new = (X - 中位數) / IQR\n\n跟其他方法比較：\n  Min-Max → 用 min/max → 極端值一改全跑掉\n  Z-score → 用平均/標準差 → 極端值拉偏平均\n  Robust  → 用中位數/IQR → 不受極端值影響' },
          { label: '受極端值影響程度', icon: 'compare', code: '  Min-Max     ████████████  高\n  Z-score     ██████        中\n  Robust      ██            低\n\n有極端值 → 優先用 Robust Scaling' },
          { label: '考試重點', icon: 'school', content: '「資料存在極端值，哪種縮放最適合？」→ Robust Scaling。\n\n不是 Min-Max（最怕極端值）。不是 Z-score（也會受影響）。不是「標準分箱」（不是縮放方法）。' }
        ]
      }
    },
    {
      number: 5,
      title: '隨機過採樣風險',
      engTitle: 'Random Oversampling Risk',
      back: {
        sections: [
          { label: '是什麼', icon: 'copy_all', content: '把少數類別的樣本直接「複製貼上」來增加數量。最簡單的類別平衡方法，但有嚴重副作用。' },
          { label: '跟 SMOTE 的差別', icon: 'compare', code: '隨機過採樣：\n  直接複製少數類別樣本\n  → 完全一樣的資料出現多次\n  → 模型容易「背答案」→ 過擬合\n\nSMOTE：\n  在少數類別之間「合成」新樣本\n  → 新樣本有變化，不是複製\n  → 過擬合風險較低' },
          { label: '考試重點', icon: 'school', content: '隨機過採樣最常造成的問題：「增加過擬合風險」。\n\n不是「降低收斂速度」。不是「減少資料量」（是增加）。不是「欄位缺失」。' }
        ]
      }
    },
    { number: 6, title: 'PCA 前要標準化', engTitle: 'Standardization before PCA', back: { sections: [
      { label: '問題', icon: 'warning', code: '三個特徵量級差很大：\n  交易金額 ≈ 100,000（10^5）\n  交易次數 ≈ 10（10^1）\n  年齡 ≈ 30（10^2）\n\n直接跑 PCA → PC1 幾乎 = 交易金額\n→ 因為金額數字最大，變異也最大\n→ 不代表金額最重要，只是尺度最大' },
      { label: '解法', icon: 'build', content: 'PCA 前先標準化，讓每個特徵平均=0、標準差=1，消除尺度差異。' },
      { label: '考試重點', icon: 'school', content: '「PC1 被大數值特徵主導」→ 沒標準化。\n不是「正常現象」。不是「特徵選擇能解決」。不是「刪掉那個特徵」。' }
    ] } },
    { number: 7, title: 'Box-Cox 轉換', engTitle: 'Box-Cox Transformation', back: { sections: [
      { label: '是什麼', icon: 'transform', content: '讓資料更接近常態分佈的轉換。根據資料自動找最佳參數 λ。對數轉換是 λ=0 的特例。' },
      { label: '用途', icon: 'lightbulb', code: '問題：Y 右偏 + 變異數隨 X 增大\n  → 違反迴歸假設\n\n解法：對 Y 做 Box-Cox\n  λ=1 → 不變\n  λ=0 → ln(Y)\n  λ=0.5 → √Y\n  → 自動找最佳 λ 讓 Y 接近常態' },
      { label: '考試重點', icon: 'school', content: '「Y 右偏+變異數隨 X 增大」→ Box-Cox。\n不是「對 X 標準化」（問題在 Y）。不是「一次差分」（時間序列用）。' }
    ] } },
    { number: 8, title: 'SMOTE vs 過採樣 vs 欠採樣', engTitle: 'Imbalance Handling Comparison', back: { sections: [
      { label: '三者比較', icon: 'compare', code: '隨機過採樣：複製少數類 → 過擬合高\n隨機欠採樣：刪多數類 → 丟資訊\nSMOTE：合成新少數類 → 兼顧多樣性' },
      { label: '考試重點', icon: 'school', content: '「確診<1%+標註貴+提升偵測+避免過擬合」→ SMOTE。\n過採樣 → 過擬合。欠採樣 → 丟資訊。只調閾值 → 不解決不平衡。' }
    ] } },
    {
      number: 9,
      title: 'Pandas float64 與 NaN',
      engTitle: 'Pandas float64 NaN Behavior',
      back: {
        sections: [
          {
            label: '問題情境',
            icon: 'bug_report',
            content: 'CSV 中的 Year 欄位應該是整數（2006, 2008），但 Pandas 讀進來後卻顯示 float64（2006.0, 2008.0）。'
          },
          {
            label: '為什麼會這樣',
            icon: 'lightbulb',
            code: '原因 A ✓ 有缺失值（NaN）\n  Pandas 的 NaN 是 float 型別\n  只要欄位有任一個 NaN\n  → 整欄被強制轉成 float64\n  → 2006 變成 2006.0\n  這是最常見的原因！\n\n原因 D ✓ CSV 中有小數點（2006.0）\n  CSV 是純文字，如果寫的是 \"2006.0\"\n  → Pandas 讀成 float\n\n原因 B ✗ 字串轉換出錯\n  Pandas 不會把 \"2006\" 轉錯成 float\n  字串會維持 object 型別\n\n原因 C ✗ Pandas 預設全讀 float\n  錯！整數欄位（無 NaN）會讀成 int64'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「Year 欄位是 float64」的原因 → A（有 NaN）和 D（有小數點）。\n\nPandas 的關鍵行為：有 NaN 的整數欄會被自動轉成 float64。這是因為 NumPy 的整數型別不支援 NaN，只有 float 支援。\n\n解法：pd.read_csv() 時用 dtype={\"Year\": \"Int64\"}（大寫 I，Nullable 整數型別）。'
          }
        ]
      }
    }
  ]
}
