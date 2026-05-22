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
          { label: '受極端值影響程度', icon: 'compare', chart: {
            data: [
              { label: 'Min-Max', value: 100, color: '#ef5350', tip: '高 - 極端值直接改變 min/max' },
              { label: 'Z-score', value: 50, color: '#ffa726', tip: '中 - 極端值拉偏平均值' },
              { label: 'Robust', value: 15, color: '#66bb6a', tip: '低 - 用中位數/IQR，不受影響' }
            ]
          }, content: '有極端值 → 優先用 Robust Scaling' },
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
    },
    {
      number: 10,
      title: 'Pandas 含 NaN 欄位轉整數',
      engTitle: 'Pandas NaN Column to Integer',
      back: {
        sections: [
          {
            label: '四種做法比較',
            icon: 'compare',
            code: '(A) .astype(int)\n  → 有 NaN 會報錯！int 不支援 NaN\n\n(B) .fillna(0).astype(int)\n  → 先用 0 填 NaN 再轉\n  → 缺失年份變成 0 → 不合理（0 年？）\n\n(C) .fillna(1).astype(int)\n  → 缺失年份變成 1 → 更不合理\n\n(D) .astype(\"Int64\")  ← 大寫 I\n  → Pandas Nullable Integer\n  → NaN 保持為 <NA>，不需要填值\n  → 最合適！'
          },
          {
            label: '關鍵知識',
            icon: 'lightbulb',
            code: 'int64（小寫 i）= NumPy 整數\n  → 不支援 NaN，有 NaN 就會報錯\n\nInt64（大寫 I）= Pandas Nullable Integer\n  → 支援 <NA>（Pandas 自己的 NaN）\n  → 不需要先填值再轉\n  → 是最乾淨的做法'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「含 NaN 的 Year 欄位轉整數」→ .astype(\"Int64\")（大寫 I）。\n\n不是 .astype(int)（會報錯）。\n不是 fillna(0)（0 年不合理）。\n大寫 I 和小寫 i 的差別是高頻考點。'
          }
        ]
      }
    },
    {
      number: 11,
      title: 'Pandas groupby + plot',
      engTitle: 'Pandas groupby Aggregation & Visualization',
      back: {
        sections: [
          {
            label: '常見操作比較',
            icon: 'code',
            code: '統計每個平台的全球銷售「總額」：\n  data.groupby("Platform")["Global_Sales"].sum()\n  → 加總 → 畫長條圖用 .plot(kind="bar")\n\n統計每個平台的「筆數」：\n  .count() → 有幾款遊戲\n  不是銷售總額！\n\n統計每個平台的「平均」銷售：\n  .mean() → 平均每款遊戲賣多少\n  不是總額！\n\n統計每個平台有「幾款遊戲」：\n  data["Platform"].value_counts()\n  → 只計算出現次數，不看銷售額'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「每個平台的全球銷售總額」→ groupby().sum().plot(kind=\"bar\")。\n\n.count() 是筆數不是金額。\n.value_counts() 是出現次數不是銷售。\n.mean() 是平均不是總額。'
          }
        ]
      }
    },
    {
      number: 12,
      title: 'pd.melt + sns.barplot',
      engTitle: 'Pandas melt & Seaborn barplot',
      back: {
        sections: [
          {
            label: 'pd.melt 是什麼',
            icon: 'transform',
            code: '把「寬表」轉成「長表」\n\n原始（寬）：\n  NA_Sales  EU_Sales  JP_Sales\n  41.49     29.02     3.77\n\nmelt 後（長）：\n  variable     value\n  NA_Sales     41.49\n  EU_Sales     29.02\n  JP_Sales      3.77\n\n→ 四個銷售欄變成兩欄（variable + value）\n→ 方便用 seaborn 畫圖'
          },
          {
            label: '完整程式碼',
            icon: 'code',
            code: 'sns.barplot(\n  x="variable",\n  y="value",\n  data=pd.melt(data,\n    value_vars=["NA_Sales","EU_Sales",\n                "JP_Sales","Other_Sales"]),\n  estimator=sum\n)\n\nestimator=sum → 每個地區加總\n→ 畫出各地區銷售總額長條圖'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「比較多個欄位的加總」→ pd.melt 轉長表 + barplot(estimator=sum)。\n\ncountplot 計算次數不是金額。lineplot 畫線不是長條。histplot 畫分佈不是比較。'
          }
        ]
      }
    },
    {
      number: 13,
      title: 'nlargest + sns.barplot',
      engTitle: 'Pandas nlargest & Seaborn barplot',
      back: {
        sections: [
          {
            label: '怎麼取前 N 名',
            icon: 'code',
            code: '取北美銷售前 5 名：\n  data.nlargest(5, "NA_Sales")\n  → 依 NA_Sales 排序取最大 5 筆\n\n畫圖：\n  sns.barplot(\n    x="Name",\n    y="NA_Sales",\n    data=data.nlargest(5, "NA_Sales")\n  )\n  → x 軸是遊戲名稱，y 軸是銷售額'
          },
          {
            label: '常見錯誤',
            icon: 'warning',
            code: 'data.head(5)\n  → 取前 5 筆（照原始順序，不是最大 5 筆）\n  → 除非資料已經按銷售額排好序\n\ndata.nlargest(5, "NA_Sales")\n  → 取 NA_Sales 最大的 5 筆（正確）'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「銷售最好的前五名」→ nlargest(5, \"NA_Sales\")。\n\nhead(5) 不是取最大值（是取前幾筆）。\ncountplot 不能指定 y 軸數值。\nlineplot 畫折線不是長條。'
          }
        ]
      }
    },
    {
      number: 14,
      title: 'describe() 結果解讀',
      engTitle: 'Reading describe() Output',
      back: {
        sections: [
          {
            label: 'df.describe() 輸出',
            icon: 'table_chart',
            table: {
              headers: ['', 'youtube', 'facebook', 'newspaper', 'sales'],
              rows: [
                ['count', '200.000', '199.000', '200.000', '200.000'],
                ['mean', '176.451', '27.820', '36.665', '16.827'],
                ['std', '103.025', '17.808', '26.134', '6.261'],
                ['min', '0.840', '0.000', '0.360', '1.920'],
                ['25%', '89.250', '11.940', '15.300', '12.450'],
                ['50%', '179.700', '27.000', '30.900', '15.480'],
                ['75%', '262.590', '43.680', '54.120', '20.880'],
                ['max', '355.680', '59.520', '136.800', '32.400']
              ]
            },
            content: '25% = Q1，50% = 中位數，75% = Q3'
          },
          {
            label: '逐項驗證',
            icon: 'check_circle',
            code: '(A) 資料集 199 筆，變數 4 個？\n  → 看 count：youtube=200, facebook=199\n  → 筆數不全是 199（有的 200）\n  → 而且變數確實是 4 個\n  → 但「資料集個數 199 筆」不精確 ✗\n\n(B) sales 中位數是 16.827？\n  → 16.827 是 mean（平均值）\n  → 中位數看 50% = 15.480\n  → ✗\n\n(C) facebook Q3 是 11.94？\n  → 11.94 是 25%（Q1）\n  → Q3 看 75% = 43.68\n  → ✗\n\n(D) youtube Q1 是 89.25？\n  → 25% = 89.250 ✓'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '解讀 describe() 要認清每行：\n- mean ≠ 中位數（中位數看 50%）\n- 25% = Q1，75% = Q3（不要看反）\n- count 各欄可能不同（有 NaN 的欄 count 會少）\n\nfacebook count=199（少一筆 → 有 NaN）\nyoutube count=200（沒有 NaN）'
          }
        ]
      }
    },
    {
      number: 15,
      title: 'Pandas 檢查 NaN 方法',
      engTitle: 'Pandas NaN Detection Methods',
      back: {
        sections: [
          {
            label: '四種寫法比較',
            icon: 'code',
            code: 'df.isnull().sum()   ✓ 正確！\n  → Pandas 內建，偵測 NaN/None\n\ndf.isna().sum()     ✓ 正確！\n  → isnull() 的別名，功能完全相同\n\ndf.isNaN().sum()    ✗ 不存在！\n  → Pandas 沒有 isNaN（大小寫錯誤）\n  → 會報 AttributeError\n\ndf.isnan().sum()    ✗ 不存在！\n  → Pandas 沒有 isnan\n  → np.isnan() 可以，但 df.isnan() 不行'
          },
          {
            label: '記法',
            icon: 'lightbulb',
            code: 'Pandas 的 NaN 偵測只有兩個：\n  .isnull()  ← 原名\n  .isna()    ← 別名（完全相同）\n\n兩個都正確，用哪個都行。\n其他寫法都是錯的。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '能正確計算 NaN 個數的 → isnull().sum() 和 isna().sum()。\n\nisNaN() 和 isnan() 都不是 Pandas DataFrame 的方法，會報錯。注意大小寫陷阱。'
          }
        ]
      }
    },
    {
      number: 16,
      title: 'sklearn vs statsmodels 線性迴歸',
      engTitle: 'LinearRegression: sklearn vs statsmodels',
      back: {
        sections: [
          {
            label: 'sklearn 用法',
            icon: 'code',
            code: 'from sklearn.linear_model import LinearRegression\n\nreg = LinearRegression().fit(X, y)\n                              ↑  ↑\n                          特徵 目標\n\n注意順序：先 X 後 y（不能反！）\n\nreg.coef_      → 迴歸係數（不含截距）\n  → 有幾個特徵就有幾個係數\n  → 3 個特徵 → 3 個係數（不是 4 個）\n\nreg.intercept_ → 截距（另外看）'
          },
          {
            label: 'statsmodels 用法',
            icon: 'code',
            code: 'import statsmodels.api as sm\n\nX2 = sm.add_constant(X)  ← 手動加截距欄\nmodel_sm = sm.OLS(y, X2).fit()\n                   ↑  ↑\n               目標 特徵（順序跟 sklearn 相反！）\n\nmodel_sm.summary() → 看 p-value 判斷顯著性\n  p < 0.05 → 該係數顯著\n  p >= 0.05 → 不顯著'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '關鍵差異：\n- sklearn: .fit(X, y) → 先特徵後目標\n- statsmodels: OLS(y, X) → 先目標後特徵\n\nreg.coef_ 不含截距（3 個特徵 = 3 個係數，不是 4 個）。\n截距看 reg.intercept_ 或 summary 的 const 行。\n\n「所有係數都顯著」要看每個的 p-value，不能只看整體。'
          }
        ]
      }
    },
    {
      number: 17,
      title: '缺失值填補方法',
      engTitle: 'Missing Value Imputation',
      supplementary: true,
      back: {
        sections: [
          {
            label: '五種方法',
            icon: 'healing',
            code: '1. 刪除（Deletion）\n   整列或整欄刪掉 → 最簡單但浪費資料\n\n2. 平均/中位數填補\n   數值型用平均或中位數填 → 簡單但忽略分佈\n   有偏態/極端值 → 用中位數\n\n3. 眾數填補\n   類別型用出現最多的值填 → 簡單\n\n4. KNN 填補\n   找最相似的 K 個樣本，用其值的平均填\n   → 效果好但計算量大\n\n5. 多重填補（Multiple Imputation）\n   產生多組填補值 → 取平均\n   → 最嚴謹，考慮了填補的不確定性'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「資料有偏態 + 缺失值」→ 用中位數填補（不是平均）。\n「類別型缺失」→ 眾數填補。\n「最精確的填補」→ KNN 或多重填補。\n\n注意：填補前要判斷缺失是「隨機」還是「系統性」。系統性缺失不能隨便填。'
          }
        ]
      }
    },
    {
      number: 18,
      title: '離群值偵測方法',
      engTitle: 'Outlier Detection Methods',
      supplementary: true,
      back: {
        sections: [
          {
            label: '四種方法',
            icon: 'report_problem',
            code: '1. Z-score 法\n   |Z| > 3 → 離群值\n   → 假設常態分佈，受偏態影響\n\n2. IQR 法（箱型圖）\n   下界 = Q1 - 1.5*IQR\n   上界 = Q3 + 1.5*IQR\n   超出範圍 → 離群值\n   → 不受分佈假設限制\n\n3. Isolation Forest\n   用隨機森林隔離樣本\n   離群值更容易被隔離（切割次數少）\n   → 適合高維資料\n\n4. LOF（Local Outlier Factor）\n   比較每個點跟鄰居的密度\n   密度比鄰居低很多 → 離群值\n   → 適合密度不均的資料'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「簡單快速的離群值偵測」→ IQR 或 Z-score。\n「高維資料的離群值偵測」→ Isolation Forest。\n\n發現離群值後的處理：\n- 刪除（可能丟失資訊）\n- 截尾（Winsorize，用上下界取代）\n- 保留但標記（讓模型自己處理）'
          }
        ]
      }
    },
    {
      number: 19,
      title: '特徵重要性',
      engTitle: 'Feature Importance',
      supplementary: true,
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'sort',
            content: '衡量每個特徵對模型預測結果的貢獻度。幫助理解「模型覺得什麼最重要」，也可用於特徵選擇。'
          },
          {
            label: '常見方法',
            icon: 'build',
            code: '樹模型內建（Gini / Information Gain）：\n  隨機森林、XGBoost 直接提供\n  → 最方便，但只適用於樹模型\n\nPermutation Importance：\n  隨機打亂一個特徵的值\n  → 效能下降越多 = 越重要\n  → 適用任何模型\n\nSHAP（博弈論方法）：\n  計算每個特徵對每筆預測的貢獻\n  → 全局 + 局部解釋\n  → 最精確但計算量大'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「找出最重要的特徵」→ 特徵重要性分析。\n「模型可解釋性」→ SHAP / LIME。\n\n特徵重要性 ≠ 因果關係。高重要性只代表相關性強，不代表是原因。'
          }
        ]
      }
    },
    {
      number: 20,
      title: '維度災難',
      engTitle: 'Curse of Dimensionality',
      supplementary: true,
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'all_out',
            content: '當特徵維度很高時，資料點之間的距離會變得越來越接近（距離趨同），導致基於距離的演算法（KNN、DBSCAN、K-means）效能大幅下降。'
          },
          {
            label: '為什麼',
            icon: 'lightbulb',
            code: '低維（2D）：近的很近，遠的很遠\n  → 距離有區分度\n\n高維（500D）：所有點的距離都差不多\n  → 距離失去意義\n\n需要的資料量隨維度指數成長：\n  2D → 100 筆可能就夠\n  10D → 可能需要 10^10 筆\n  → 現實中不可能有這麼多資料'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「DBSCAN 高維全部判為雜訊」→ 維度災難導致距離趨同。\n「KNN 高維效果差」→ 維度災難。\n\n解法：PCA / UMAP / t-SNE 降維後再做。\n\n不是「模型太簡單」。不是「資料太少」（資料少是結果不是原因）。'
          }
        ]
      }
    },
    {
      number: 21,
      title: 'ETL 流程',
      engTitle: 'Extract, Transform, Load',
      supplementary: true,
      back: {
        sections: [
          {
            label: '三個步驟',
            icon: 'swap_horiz',
            code: 'Extract（擷取）：\n  從各種來源抽取原始資料\n  來源：資料庫、API、CSV、日誌、IoT\n\nTransform（轉換）：\n  清洗、格式統一、特徵計算\n  例：日期格式統一、缺失值處理、型別轉換\n\nLoad（載入）：\n  載入到目標系統\n  目標：資料倉儲、資料湖、Feature Store'
          },
          {
            label: 'ETL vs ELT',
            icon: 'compare',
            content: 'ETL：先轉換再載入（傳統方式）\n→ 載入前資料已整理好\n\nELT：先載入再轉換（現代方式）\n→ 先全部丟進資料湖，需要時再轉換\n→ 雲端時代更常見（儲存便宜、運算彈性大）'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「資料從多個來源整合到統一平台」→ ETL。\n「先存原始資料再處理」→ ELT + 資料湖。\n\nETL 是大數據管線的基礎流程。\n常見工具：Apache Airflow、Spark、dbt。'
          }
        ]
      }
    }
  ]
}
