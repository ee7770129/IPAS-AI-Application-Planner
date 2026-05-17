/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：subject2-114.js
 * 功能：中級科目二 114 年歷屆考題
 * 考試日期：114 年 11 月 08 日
 * 建立日期：2026-05-16
 * 版本：1.0.0
 */

export default {
  id: 'adv-s2-114',
  label: '114 年 科目二',
  subject: '科目二 大數據處理分析與應用',
  examDate: '2025-11-08',
  questions: [
    {
      id: 1,
      question: '若某數據點的 Z 分數(Z-Score) = 2，請問代表下列哪一種意涵？',
      options: [
        { label: 'A', text: '代表該數據點之原始數值為 2' },
        { label: 'B', text: '該數據點比平均值低 2 個標準差' },
        { label: 'C', text: '代表數據為異常值' },
        { label: 'D', text: '該數據點比平均值高 2 個標準差' }
      ],
      answer: 'D',
      chapter: '機率統計基礎',
      explanation: 'Z 分數 = (X - 平均值) / 標準差。Z = 2 代表該數據點比平均值高出 2 個標準差，是標準化後的相對位置指標。',
      optionExplanations: {
        A: 'Z 分數不是原始數值，而是標準化後的相對位置。Z = 2 不代表原始值是 2，原始值取決於平均值和標準差。',
        B: '比平均值「低」2 個標準差應該是 Z = -2，不是 Z = 2。正值代表高於平均。',
        C: 'Z = 2 雖然偏離平均值較遠，但不能直接說是異常值。通常 Z > 3 才被視為可能的異常值，且判斷異常值需要結合情境。',
        D: null
      }
    },
    {
      id: 2,
      question: '使用 Python 的 pandas 套件處理各商品銷售數據（變數為 df）時，若需計算「總銷售額」欄位的敘述性統計量（如平均值、標準差等），應使用下列哪一種語法？',
      options: [
        { label: 'A', text: "df['總銷售額'].sum()" },
        { label: 'B', text: "df['總銷售額'].describe()" },
        { label: 'C', text: "df['總銷售額'].sort_values()" },
        { label: 'D', text: "df['總銷售額'].stats()" }
      ],
      answer: 'B',
      chapter: '數據處理與特徵工程',
      explanation: 'pandas 的 describe() 方法會一次計算出 count、mean、std、min、25%、50%、75%、max 等敘述性統計量，是最完整的敘述統計方法。',
      optionExplanations: {
        A: 'sum() 只計算總和一個數值，不是「敘述性統計量」（平均值、標準差等多個統計量的集合）。',
        B: null,
        C: 'sort_values() 是排序功能，會按數值大小排列資料，完全不涉及統計量計算。',
        D: 'pandas 中不存在 stats() 方法，這個語法會報錯。正確的方法是 describe()。'
      }
    },
    {
      id: 3,
      question: '附圖為某資料之分佈圖，此圖資料之偏態(Skewness)值較有可能為下列哪個選項？',
      image: '/exams/s2-114-q3.png',
      options: [
        { label: 'A', text: 'Skewness < 0' },
        { label: 'B', text: 'Skewness > 0' },
        { label: 'C', text: 'Skewness = 0' },
        { label: 'D', text: '無法計算 Skewness' }
      ],
      answer: 'A',
      chapter: '機率統計基礎',
      explanation: '分佈圖顯示資料峰值偏右、左側有較長的尾巴（左偏/負偏），因此 Skewness < 0。記法：尾巴往哪邊拖就是哪邊偏（左尾 = 左偏 = 負偏態）。',
      optionExplanations: {
        A: null,
        B: 'Skewness > 0 是右偏（正偏態），代表右側有較長的尾巴。但圖中尾巴在左側，所以不是正偏。',
        C: 'Skewness = 0 代表對稱分佈。圖中明顯左右不對稱（左尾較長），不可能是 0。',
        D: '只要有數值資料就可以計算 Skewness，沒有「無法計算」的情況。'
      }
    },
    {
      id: 4,
      question: '累積分佈函數(Cumulative Distribution Function, CDF)可用於描述隨機變數的機率分佈特性，其數學定義為下列何者？',
      options: [
        { label: 'A', text: '機率密度函數(Probability Density Function, PDF)的平均值' },
        { label: 'B', text: '機率密度函數(Probability Density Function, PDF)的積分' },
        { label: 'C', text: '機率密度函數(Probability Density Function, PDF)的離散總和' },
        { label: 'D', text: '機率密度函數(Probability Density Function, PDF)的標準差' }
      ],
      answer: 'B',
      chapter: '機率統計基礎',
      explanation: 'CDF F(x) = P(X <= x) = 從負無限大到 x 對 PDF 做積分。CDF 表示隨機變數小於等於某值的累積機率。',
      optionExplanations: {
        A: 'PDF 的平均值是期望值 E(X)，不是 CDF。CDF 是 PDF 的累積積分，不是平均。',
        B: null,
        C: '離散總和適用於離散型隨機變數的機率質量函數(PMF)，但 CDF 的通用數學定義是 PDF 的積分（連續型）。',
        D: 'PDF 的標準差沒有意義（標準差是對隨機變數而非函數本身計算的），與 CDF 的定義無關。'
      }
    },
    {
      id: 5,
      question: '在進行資料前處理時，若使用 Label Encoding 將類別變數轉換為數字型態，下列何者為最常見的潛在風險？',
      options: [
        { label: 'A', text: '無法處理缺值' },
        { label: 'B', text: '會引入類別之間的虛假順序關係' },
        { label: 'C', text: '無法擴展至新資料' },
        { label: 'D', text: '記憶體佔用過高' }
      ],
      answer: 'B',
      chapter: '數據處理與特徵工程',
      explanation: 'Label Encoding 將類別轉為整數（如紅=0, 藍=1, 綠=2），模型會誤以為綠>藍>紅有大小關係，但實際上顏色間沒有順序。',
      optionExplanations: {
        A: 'Label Encoding 可以處理缺值（例如將缺值編為特定數字），這不是其主要風險。',
        B: null,
        C: 'Label Encoding 可以擴展至新資料（為新類別分配新數字即可），擴展性不是主要問題。',
        D: 'Label Encoding 將每個類別用一個整數表示，記憶體佔用非常低（比 One-Hot Encoding 更省記憶體）。'
      }
    },
    {
      id: 6,
      question: '在進行資料分析時，會遇到類別型(Categorical)與數值型(Numerical)資料格式。關於這兩種資料格式的處理，下列敘述何者不正確？',
      options: [
        { label: 'A', text: 'One-Hot 編碼會將類別變數轉換為多維二元向量，適用於無序類別資料，但在高基數特徵下可能造成維度爆炸問題' },
        { label: 'B', text: '標籤編碼會以整數表示不同類別，若應用於無序資料，可能導致模型誤將編碼值解讀為具數值大小關係的特徵' },
        { label: 'C', text: '標準化透過將資料平移與縮放，使其平均值為 0、標準差為 1，可在多數距離型演算法中改善收斂速度，並同時將數值範圍壓縮至 0 至 1 之間' },
        { label: 'D', text: '對連續變數進行分箱可提升模型可解釋性，但若分段方式未依據資料分佈特性設計，可能導致資訊損失或邊界偏誤' }
      ],
      answer: 'C',
      chapter: '數據處理與特徵工程',
      explanation: '題目問「不正確」。標準化(Standardization)使平均值=0、標準差=1，但數值範圍不會被壓縮至 0~1。壓縮到 0~1 的是 Min-Max 正規化(Normalization)。C 混淆了兩者。',
      optionExplanations: {
        A: '正確。One-Hot Encoding 確實會在類別數很多時產生高維度稀疏向量（維度爆炸），適用於無序類別。',
        B: '正確。Label Encoding 用整數表示類別，無序類別會被誤解為有大小順序，這是已知風險。',
        C: null,
        D: '正確。分箱確實能提升可解釋性，但分段不當會丟失資訊或在邊界處造成偏誤。'
      }
    },
    {
      id: 7,
      question: '在資料庫的 ACID 特性中，下列何者為「原子性(Atomicity)」的正確定義？',
      options: [
        { label: 'A', text: '所有資料欄位必須為相同型別' },
        { label: 'B', text: '每次交易需以批次方式執行' },
        { label: 'C', text: '交易不可分割，需完全成功或完全失敗' },
        { label: 'D', text: '系統會自動同步交易資料至所有節點' }
      ],
      answer: 'C',
      chapter: '大數據處理技術',
      explanation: '原子性(Atomicity)是 ACID 的 A，意思是交易中的所有操作要嘛全部成功提交，要嘛全部回滾(Rollback)，不存在「做一半」的狀態。',
      optionExplanations: {
        A: '資料欄位型別與原子性無關，這描述的也不是任何 ACID 特性。',
        B: '批次執行不是原子性的定義。原子性強調的是「全有或全無」(All or Nothing)，不是批次處理。',
        C: null,
        D: '自動同步至所有節點描述的是分散式系統的一致性(Consistency)或複製(Replication)概念，不是原子性。'
      }
    },
    {
      id: 8,
      question: '資料科學家為分析顧客行為，利用現有欄位「銷售金額」與「瀏覽次數」，計算出新變數「銷售金額/瀏覽次數」。此動作屬於下列哪一類特徵工程方法？',
      options: [
        { label: 'A', text: '特徵選擇(Feature Selection)' },
        { label: 'B', text: '特徵衍生(Feature Derivation)' },
        { label: 'C', text: '特徵轉換(Feature Transformation)' },
        { label: 'D', text: '分箱處理(Binning)' }
      ],
      answer: 'B',
      chapter: '數據處理與特徵工程',
      explanation: '從現有欄位透過數學運算（除法）產生全新的欄位，屬於特徵衍生(Feature Derivation)。衍生 = 創造新特徵。',
      optionExplanations: {
        A: '特徵選擇是從現有特徵中「挑選」重要的，不會產生新特徵。這裡是「創造」新特徵，不是選擇。',
        B: null,
        C: '特徵轉換是對單一特徵做數學變換（如 log 轉換、標準化），不涉及多個欄位間的運算組合。',
        D: '分箱是將連續數值切成幾個區間（如年齡分成青年/中年/老年），不是欄位間的除法運算。'
      }
    },
    {
      id: 9,
      question: '在進行數值特徵的標準化(Normalization)時，若資料中存在極端值(Outliers)，下列哪一種方法最適合使用？',
      options: [
        { label: 'A', text: 'Min-Max 正規化(Min-Max Scaling)' },
        { label: 'B', text: 'Z-score 標準化(Z-score Normalization)' },
        { label: 'C', text: '穩健縮放(Robust Scaling)' },
        { label: 'D', text: '標準分箱(Standard Binning)' }
      ],
      answer: 'C',
      chapter: '數據處理與特徵工程',
      explanation: 'Robust Scaling 使用中位數和四分位距(IQR)做縮放，不受極端值影響。公式：(X - 中位數) / IQR。',
      optionExplanations: {
        A: 'Min-Max Scaling 使用最大值和最小值做縮放，極端值會直接影響 min/max，導致大部分資料被壓縮在很小的範圍內。',
        B: 'Z-score 使用平均值和標準差，兩者都會受極端值影響（尤其平均值會被拉偏），不夠穩健。',
        C: null,
        D: '標準分箱不是標準化方法，而是將資料分成區間。它可以減輕極端值影響，但會丟失數值精度，且不是「標準化」的做法。'
      }
    },
    {
      id: 10,
      question: '下列哪一種情境最適合應用異常偵測(Anomaly Detection)技術？',
      options: [
        { label: 'A', text: '根據歷史銷售資料預測特定商品在旺季期間是否會出現供貨短缺，以提前調整庫存策略' },
        { label: 'B', text: '透過信用風險模型預測顧客是否可能發生違約，以輔助核貸決策' },
        { label: 'C', text: '即時分析金融交易資料流，偵測與平常交易行為明顯不同的可疑交易紀錄' },
        { label: 'D', text: '監控線上服務平台的使用者登入次數，預測次日的登入量變化趨勢' }
      ],
      answer: 'C',
      chapter: '大數據分析方法與工具',
      explanation: '異常偵測的核心是找出「與正常模式明顯不同」的資料點。即時偵測可疑交易（與平常行為不同）是最典型的異常偵測應用。',
      optionExplanations: {
        A: '預測商品是否短缺屬於預測/迴歸問題，不是異常偵測。',
        B: '信用風險預測是二元分類問題（違約 vs 不違約），有明確的標籤定義，不是異常偵測。',
        C: null,
        D: '預測登入量變化趨勢是時間序列預測問題，不是異常偵測。'
      }
    },
    {
      id: 11,
      question: '若一家公司需即時監控大量物聯網裝置的異常行為，下列哪一種組合最適合此應用？',
      options: [
        { label: 'A', text: '傳統關聯式資料庫 + 圖形視覺化' },
        { label: 'B', text: '批次資料處理 + 雲端備份' },
        { label: 'C', text: '大數據平台 + 即時資料分析技術' },
        { label: 'D', text: 'Word 文件 + 手動標註' }
      ],
      answer: 'C',
      chapter: '大數據處理技術',
      explanation: '大量物聯網裝置產生的是高流量即時資料，需要大數據平台（如 Kafka、Spark Streaming）搭配即時分析技術來處理。',
      optionExplanations: {
        A: '傳統關聯式資料庫無法有效處理大量即時串流資料，且圖形視覺化不等於即時分析。',
        B: '批次處理是定期處理已累積的資料，無法滿足「即時」監控的需求。',
        C: null,
        D: '這顯然不適合處理大量即時資料，手動標註無法應對物聯網的資料量和速度。'
      }
    },
    {
      id: 12,
      question: '在處理分類問題時，若某一類樣本數明顯少於其他類別，研究人員可能採用隨機過採樣(Random Oversampling)以平衡資料比例，此方法最常造成下列哪一種問題？',
      options: [
        { label: 'A', text: '增加過擬合風險' },
        { label: 'B', text: '降低模型的收斂速度' },
        { label: 'C', text: '減少資料總筆數數量' },
        { label: 'D', text: '導致訓練資料欄位缺失' }
      ],
      answer: 'A',
      chapter: '數據處理與特徵工程',
      explanation: '隨機過採樣是複製少數類別的現有樣本來平衡比例，模型會反覆學到相同的資料，容易記住而非泛化，導致過擬合。',
      optionExplanations: {
        A: null,
        B: '過採樣增加資料量（雖然是重複的），不會降低收斂速度，甚至可能因為類別平衡而改善收斂。',
        C: '過採樣(Oversampling)是增加樣本數，不是減少。減少樣本的是欠採樣(Undersampling)。',
        D: '過採樣是複製整筆資料（包含所有欄位），不會造成欄位缺失。'
      }
    },
    {
      id: 13,
      question: '下列何者為同態加密(Homomorphic Encryption)技術的核心特性？',
      options: [
        { label: 'A', text: '將資料轉換為匿名識別碼以隱藏身分' },
        { label: 'B', text: '對資料進行標準化處理以提升模型精度' },
        { label: 'C', text: '自動偵測與排除異常值' },
        { label: 'D', text: '可直接在加密狀態下進行數據運算' }
      ],
      answer: 'D',
      chapter: '大數據隱私保護與安全',
      explanation: '同態加密最大的特色是可以在不解密的情況下對密文直接做運算（加法、乘法等），運算結果解密後等同於對明文做相同運算。',
      optionExplanations: {
        A: '將資料轉為匿名識別碼是去識別化(De-identification)或假名化(Pseudonymization)技術，不是同態加密。',
        B: '標準化處理是資料前處理技術，與加密完全無關。',
        C: '異常值偵測是資料分析技術，與加密無關。',
        D: null
      }
    },
    {
      id: 14,
      question: '某組資料共 10 項標籤如下：A, A, A, A, A, B, B, B, B, B。若該標籤僅有 A、B 兩種，請問這組資料的「正規化吉尼不純度(Normalized Gini impurity)」為何？',
      options: [
        { label: 'A', text: '0' },
        { label: 'B', text: '0.42' },
        { label: 'C', text: '0.84' },
        { label: 'D', text: '1' }
      ],
      answer: 'D',
      chapter: '機率統計基礎',
      explanation: '吉尼不純度 = 1 - (p_A^2 + p_B^2) = 1 - (0.5^2 + 0.5^2) = 0.5。二分類的最大吉尼不純度也是 0.5（各佔一半時）。正規化吉尼 = 實際值/最大值 = 0.5/0.5 = 1，代表最大不純度。',
      optionExplanations: {
        A: '吉尼不純度 = 0 代表完全純淨（只有一種類別），但這裡 A 和 B 各佔 50%，是最不純的情況。',
        B: '0.42 不是正規化後的值。原始吉尼不純度為 0.5，正規化後為 1。',
        C: '0.84 不是正確的計算結果。',
        D: null
      }
    },
    {
      id: 15,
      question: '某家客服中心統計資料發現，平均每小時會接到約 20 通顧客來電，但每分鐘的來電數量不固定，可能為 0、1、2 通不等。這些來電事件彼此獨立，且在短時間內，發生的機率與時間長短成正比。若要以機率模型描述「每分鐘接到幾通來電」的機率分佈，下列哪一種最適合使用？',
      options: [
        { label: 'A', text: '均勻分佈(Uniform distribution)' },
        { label: 'B', text: '指數分佈(Exponential distribution)' },
        { label: 'C', text: '卜瓦松分佈(Poisson distribution)' },
        { label: 'D', text: '常態分佈(Normal distribution)' }
      ],
      answer: 'C',
      chapter: '機率統計基礎',
      explanation: '卜瓦松分佈描述的是「固定時間區間內，獨立事件發生的次數」。來電彼此獨立、平均頻率已知、計數次數（0,1,2...）完全符合卜瓦松分佈的條件。',
      optionExplanations: {
        A: '均勻分佈描述的是每個值出現機率相同的情況，但來電次數不同的機率顯然不同（0 通和 5 通的機率不同）。',
        B: '指數分佈描述的是「兩次事件之間的等待時間」，不是次數。如果問「多久會接到下一通電話」才用指數分佈。',
        C: null,
        D: '常態分佈是連續分佈，適用於可取任意實數值的變數。來電次數是非負整數（離散的），不適合用常態分佈。'
      }
    },
    {
      id: 16,
      question: '某金融科技公司以 Z 分數(Z-Score)監控交易金額異常狀況。若交易金額平均為新台幣 2,000 元，標準差為 400 元，某筆交易金額為 3,200 元，且公司以 |Z| >= 3 判定為異常值(Outlier)，下列判斷何者最為正確？',
      options: [
        { label: 'A', text: '該筆交易的 Z 分數為 3，應標記為異常值' },
        { label: 'B', text: '該筆交易的 Z 分數為 2.5，屬於合理變異範圍' },
        { label: 'C', text: '該筆交易的 Z 分數為 2，顯示模型標準差估計過高' },
        { label: 'D', text: '該筆交易的 Z 分數為 1.5，無須納入異常檢測' }
      ],
      answer: 'A',
      chapter: '機率統計基礎',
      explanation: 'Z = (X - 平均值) / 標準差 = (3200 - 2000) / 400 = 1200 / 400 = 3。|Z| = 3 >= 3，達到異常值判定標準。',
      optionExplanations: {
        A: null,
        B: '計算錯誤。(3200-2000)/400 = 3，不是 2.5。',
        C: '計算錯誤。(3200-2000)/400 = 3，不是 2。',
        D: '計算錯誤。(3200-2000)/400 = 3，不是 1.5。'
      }
    },
    {
      id: 17,
      question: '某電商公司欲利用顧客行為資料建立消費預測模型，其中「會員等級」欄位包含「一般、白金、黑卡」三種類別。若模型採用梯度提升樹(Gradient Boosting Tree)演算法，資料科學家在進行特徵編碼時應特別注意下列何種情況？',
      options: [
        { label: 'A', text: '應優先採用獨熱編碼(One-Hot Encoding)，以減少類別之間的相依性與記憶體使用量' },
        { label: 'B', text: '直接使用標籤編碼(Label Encoding)可能使模型誤判類別間存在順序關係，導致特徵重要性偏誤' },
        { label: 'C', text: '使用目標編碼(Target Encoding)會自動消除過擬合風險' },
        { label: 'D', text: '若類別數量較少，建議先使用主成分分析(PCA)進行降維' }
      ],
      answer: 'B',
      chapter: '數據處理與特徵工程',
      explanation: '雖然樹模型對 Label Encoding 的順序性較不敏感，但「會員等級」看似有序（一般<白金<黑卡），如果這個順序不反映真實的目標變數關係，仍可能導致特徵重要性偏誤。',
      optionExplanations: {
        A: 'One-Hot Encoding 不會減少記憶體使用量（反而會增加維度和記憶體佔用），且對樹模型不一定是最佳選擇。',
        B: null,
        C: '目標編碼不會自動消除過擬合風險，反而容易產生過擬合（因為直接使用目標變數的統計量做編碼），需搭配正則化或交叉驗證。',
        D: 'PCA 適用於高維連續特徵的降維，不適合用在只有 3 個類別的類別型特徵上，且會降低可解釋性。'
      }
    },
    {
      id: 18,
      question: '某人工智慧團隊使用分散式資料庫儲存模型訓練資料，並在更新訓練樣本時啟用多節點交易。若其中一個節點在交易過程中發生錯誤，但系統仍確保整體資料不會出現部分更新、最終狀態維持一致，下列何者最能說明此現象？',
      options: [
        { label: 'A', text: '系統透過原子性(Atomicity)確保交易必須全部成功或全部回復(Rollback)' },
        { label: 'B', text: '系統透過一致性(Consistency)確保交易完成後資料符合完整性規則' },
        { label: 'C', text: '系統透過隔離性(Isolation)避免多筆交易同時存取或修改相同資料' },
        { label: 'D', text: '系統透過持久性(Durability)確保交易一旦提交，其結果將永久保留於資料庫中' }
      ],
      answer: 'A',
      chapter: '大數據處理技術',
      explanation: '「部分節點錯誤 → 整體不會出現部分更新 → 全部回復」正是原子性(Atomicity)的定義：交易要嘛全部成功，要嘛全部回滾。',
      optionExplanations: {
        A: null,
        B: '一致性確保交易前後資料滿足約束規則（如外鍵、唯一性），但題目描述的是「部分失敗時全部回滾」，是原子性。',
        C: '隔離性是處理並行交易互不干擾的問題，與單一交易的部分失敗回滾無關。',
        D: '持久性確保已提交的交易不會丟失，但題目描述的情境是交易失敗要回滾，還沒到提交的階段。'
      }
    },
    {
      id: 19,
      question: '某製造企業導入上萬台物聯網(IoT)感測器以進行設備健康監測。系統需在毫秒級回應異常事件，並同時將完整資料保留於雲端供後續 AI 模型訓練與分析。若企業希望兼顧即時性、資料完整性與可擴展性，下列哪一種資料流程設計最符合此目標？',
      options: [
        { label: 'A', text: '感測器 → 雲端 API Gateway → 分散式資料庫 → 批次特徵工程 → 模型推論' },
        { label: 'B', text: '感測器 → MQTT Broker → 雲端資料倉儲 → 即時儀表板 → 模型再訓練' },
        { label: 'C', text: '感測器 → 邊緣運算節點 → 流式資料處理框架(Stream Processing Framework) → 雲端資料湖 → 模型推論' },
        { label: 'D', text: '感測器 → 本地快取層 → RESTful API → 雲端報表系統 → 模型批次更新' }
      ],
      answer: 'C',
      chapter: '大數據處理技術',
      explanation: '邊緣運算提供毫秒級回應（即時性），流式處理框架處理即時資料流，雲端資料湖保留完整資料（資料完整性），整體架構支援水平擴展（可擴展性）。三個需求全部滿足。',
      optionExplanations: {
        A: '所有資料都上傳到雲端再處理，無法達到毫秒級回應。批次特徵工程也不是即時處理。',
        B: 'MQTT Broker 適合 IoT 訊息傳遞，但「雲端資料倉儲 → 即時儀表板」的流程中缺少即時處理環節，且資料倉儲不適合毫秒級回應。',
        C: null,
        D: 'RESTful API 和雲端報表系統不適合毫秒級即時處理，批次更新也不符合即時性需求。'
      }
    },
    {
      id: 20,
      question: '某銀行計畫將信用風險評估模型部署至雲端平台，以便即時分析客戶交易行為。由於涉及大量敏感金融資料，銀行要求雲端服務商在不解密原始資料的情況下仍能執行模型運算。為達成此目標，最適合採用下列哪一項技術？',
      options: [
        { label: 'A', text: '在上傳資料前進行匿名化(Anonymization)，僅保留可識別代碼供比對使用' },
        { label: 'B', text: '利用雜湊(Hash)函數轉換資料，以確保模型可追蹤但無法還原個資' },
        { label: 'C', text: '採用資料本地化(Data Localization)策略，將所有模型訓練限制於內部伺服器中' },
        { label: 'D', text: '透過同態加密(Homomorphic Encryption)，讓雲端系統能直接在加密資料上執行運算，解密後結果與原始資料一致' }
      ],
      answer: 'D',
      chapter: '大數據隱私保護與安全',
      explanation: '同態加密允許在不解密的情況下直接對密文做運算，運算結果解密後等同於對明文做相同運算，完全符合「不解密仍能執行模型運算」的需求。',
      optionExplanations: {
        A: '匿名化會改變或移除部分資料，可能影響模型運算的準確性。且匿名化後的資料仍是明文，不符合「不解密」的條件。',
        B: '雜湊函數是單向的，經過雜湊的資料無法還原也無法做有意義的數學運算（如加減乘除），不適合模型推論。',
        C: '資料本地化是把資料留在本地，等於不用雲端了，不符合「部署至雲端平台」的需求。',
        D: null
      }
    },
    {
      id: 21,
      question: '某資料分析師設計業務績效報告時，希望單一頁面中同時呈現多區域、不同產品線的銷售趨勢變化，並確保主管能在短時間內掌握整體資料走向。若依據 Edward Rolf Tufte 的數據密度(Data Density)原則，下列哪一種設計方式最能符合該概念？',
      options: [
        { label: 'A', text: '將每個區域的銷售資料分成多張獨立折線圖，以避免資訊重疊' },
        { label: 'B', text: '使用顏色區分產品線，於同一圖表中整合多區域趨勢線，保持比例一致且標註清晰' },
        { label: 'C', text: '移除所有輔助線與標籤，僅保留主要折線以凸顯趨勢' },
        { label: 'D', text: '將資料轉換為表格形式，確保數值精確呈現並取代圖表視覺化' }
      ],
      answer: 'B',
      chapter: '大數據分析方法與工具',
      explanation: 'Tufte 的數據密度原則強調在有限空間中最大化有效資訊量。同一圖表整合多條趨勢線、用顏色區分、保持清晰標註，正是高數據密度的展現。',
      optionExplanations: {
        A: '分成多張獨立圖表會降低數據密度（單位面積的資訊量變少），且難以跨區域比較。',
        B: null,
        C: '移除所有標籤雖然減少了「非數據墨水」，但也移除了理解數據所需的必要資訊，反而降低可讀性。',
        D: '表格適合精確數值查詢，但無法像圖表一樣讓人「短時間內掌握整體走向」，不符合數據密度原則的視覺化精神。'
      }
    },
    {
      id: 22,
      question: '某投資研究員希望分析四檔科技類股的每日報酬率變化趨勢，以判斷這些股票之間是否存在高度相關性與共變動性。若研究員希望以單一圖表快速呈現各股票間的關聯強度與方向，下列哪一種視覺化呈現方式最適合？',
      options: [
        { label: 'A', text: '為每檔股票各自繪製直方圖(Histogram)以比較報酬率分佈' },
        { label: 'B', text: '針對任兩檔股票繪製散佈圖並加上趨勢線(Regression Line)' },
        { label: 'C', text: '使用雙軸折線圖(Dual-axis Line Chart)同時顯示四檔股價變化' },
        { label: 'D', text: '熱力圖(Heatmap)配合相關係數矩陣(Correlation Matrix)' }
      ],
      answer: 'D',
      chapter: '大數據分析方法與工具',
      explanation: '相關係數矩陣 + 熱力圖可以在單一圖表中同時呈現所有股票兩兩之間的相關係數，用顏色深淺表示關聯強度，正負代表方向，一目了然。',
      optionExplanations: {
        A: '直方圖只能看各股票各自的分佈形狀，無法直接呈現股票之間的關聯性。',
        B: '散佈圖一次只能看兩檔股票的關係，四檔股票需要 6 張散佈圖，不符合「單一圖表」的要求。',
        C: '雙軸折線圖最多同時看兩個量度，且雙軸容易造成視覺誤導，不適合比較四檔股票的相關性。',
        D: null
      }
    },
    {
      id: 23,
      question: '某研究團隊以單樣本 t 檢定(one-sample t-test)檢驗「新行銷策略後的平均月銷售額是否與原本的 100 萬元不同」，顯著水準設定為 alpha = 0.05。檢定結果顯示：p 值 = 0.08，且 95% 信賴區間為 [95 萬元, 108 萬元]。根據上述結果，下列敘述何者正確？',
      options: [
        { label: 'A', text: '因 p 值 < 0.05，可拒絕虛無假設' },
        { label: 'B', text: '若顯著水準改為 0.10，仍不顯著' },
        { label: 'C', text: '因 100 萬元落在信賴區間內，無法拒絕虛無假設' },
        { label: 'D', text: '信賴區間寬度僅與顯著水準有關' }
      ],
      answer: 'C',
      chapter: '機率統計基礎',
      explanation: '虛無假設的值（100 萬元）落在 95% 信賴區間 [95, 108] 內，代表在 5% 顯著水準下無法拒絕虛無假設。這與 p 值 = 0.08 > 0.05 的結論一致。',
      optionExplanations: {
        A: 'p 值 = 0.08 > 0.05，不是小於 0.05，所以不能拒絕虛無假設。',
        B: '若顯著水準改為 0.10，因 p 值 = 0.08 < 0.10，反而會變成顯著（可拒絕虛無假設）。',
        C: null,
        D: '信賴區間寬度同時與顯著水準、樣本數和標準差有關，不是只跟顯著水準有關。'
      }
    },
    {
      id: 24,
      question: '某企業建置生成式 AI 系統，利用大量客服紀錄與產品評論資料訓練語言模型。由於資料來源多樣，且包含非結構化文字、影像與表格資訊，團隊希望在不降低模型效能的前提下，提升資料處理效率與一致性，下列哪一種資料處理策略最適合？',
      options: [
        { label: 'A', text: '建立資料湖(Data Lake)結構，並以 Apache Spark 或 Ray 進行分散式資料預處理與特徵抽取，再串接至模型訓練管線(Pipeline)' },
        { label: 'B', text: '採用單節點高效能伺服器搭配批次處理模式，集中執行資料清理與格式轉換' },
        { label: 'C', text: '將所有文字資料轉換為向量，並以資料庫索引方式直接餵入語言模型訓練' },
        { label: 'D', text: '使用生成式模型先行自動清理資料內容，再將結果輸入至下游訓練流程' }
      ],
      answer: 'A',
      chapter: '大數據處理技術',
      explanation: '資料湖可存放多種格式的非結構化資料，Apache Spark/Ray 提供分散式處理能力，串接至訓練管線確保流程一致性。完整滿足效率和一致性需求。',
      optionExplanations: {
        A: null,
        B: '單節點伺服器無法有效處理「大量」多樣化資料，擴展性差，且單點故障風險高。',
        C: '直接將所有文字轉向量再用索引餵入模型，跳過了必要的資料清理和預處理步驟，會影響模型品質。',
        D: '用生成式模型清理資料可能引入新的偏差或錯誤，且生成式模型本身也需要資源，不是標準的資料處理流程。'
      }
    },
    {
      id: 25,
      question: '某電商資料團隊繪製顧客單筆消費金額的箱型圖後發現：四分位距(IQR)範圍極小，但上鬚線拉得很長，且在高金額區域有多筆離群值。若希望協助行銷部門依據消費層級設計分群策略，下列哪一種視覺化方式最有助於凸顯不同消費層級間的差異？',
      options: [
        { label: 'A', text: '以對數刻度繪製箱型圖或長條圖，放大高金額消費族群的變化差異' },
        { label: 'B', text: '移除所有離群值，確保資料呈現集中分布' },
        { label: 'C', text: '採用等距分箱(Equal-Width Binning)方式分群' },
        { label: 'D', text: '改以折線圖(Line Chart)觀察時間變化趨勢' }
      ],
      answer: 'A',
      chapter: '大數據分析方法與工具',
      explanation: '對數刻度可以壓縮極端值的範圍，讓高金額和低金額的分佈差異都能清楚呈現，適合處理右偏且有離群值的資料。',
      optionExplanations: {
        A: null,
        B: '移除離群值會丟失高消費族群的重要資訊，而這些正是行銷部門感興趣的高價值客戶。',
        C: '等距分箱在資料高度偏斜時效果差，大部分資料會集中在第一個箱，高金額族群的差異無法被區分。',
        D: '折線圖適合觀察時間趨勢，不適合觀察消費金額的分佈和分群。'
      }
    },
    {
      id: 26,
      question: '某串流影音平台運用關聯規則學習(Association Rule Learning)分析用戶的觀影行為，發現若使用者觀看了科幻影集，則有較高機率接著觀看超級英雄電影。分析顯示，同時觀看這兩種類型的使用者約佔全部觀影紀錄的 12%，而觀看科幻影集的使用者中，有 50% 也觀看了超級英雄電影，該規則的提升度(Lift)為 1.8。根據上述資訊，下列哪一項推論最為正確？',
      options: [
        { label: 'A', text: '支持度(Support)過低，代表此規則不具任何商業價值' },
        { label: 'B', text: '提升度(Lift)大於 1 表示兩種類型內容無關，僅屬於隨機重疊' },
        { label: 'C', text: '信賴度(Confidence)為 50%，代表觀看科幻影集者有明顯傾向觀看超級英雄電影' },
        { label: 'D', text: '同時觀看比例僅 12%，代表兩種類型互相排斥' }
      ],
      answer: 'C',
      chapter: '大數據分析方法與工具',
      explanation: '信賴度 50% 表示觀看科幻影集的人有一半也看了超級英雄電影，Lift = 1.8 > 1 代表正相關（觀看科幻影集的確增加觀看超英的機率），支持此推論。',
      optionExplanations: {
        A: '支持度 12% 不算低，且支持度的高低需視業務情境判斷。12% 在影音平台的推薦場景中可能相當有價值。',
        B: '說反了。Lift > 1 代表兩者正相關（一起出現的頻率高於隨機），Lift = 1 才代表無關。',
        C: null,
        D: '12% 是同時觀看的比例（支持度），不代表互相排斥。Lift = 1.8 > 1 明確顯示兩者正相關。'
      }
    },
    {
      id: 27,
      question: '某金融科技公司分析每日上億筆交易資料，以監控客戶轉帳金額分佈與異常波動。由於資料量極大，為兼顧效率與準確度，團隊決定採用「近似分位數(Approximate Quantile)」方法進行資料摘要統計。下列何者最能正確反映該技術的核心目的？',
      options: [
        { label: 'A', text: '確保每個分位值的結果完全精確，即使計算時間較長' },
        { label: 'B', text: '利用機器學習模型預測分位數位置，以減少統計計算量' },
        { label: 'C', text: '僅能對結構化資料進行批次處理，無法應用於即時資料流' },
        { label: 'D', text: '在可容忍誤差範圍內，快速估算分位值以支援即時分析' }
      ],
      answer: 'D',
      chapter: '大數據處理技術',
      explanation: '近似分位數演算法（如 t-digest、GK algorithm）的核心是在允許微小誤差的前提下，大幅降低計算量和記憶體使用，支援大規模資料的即時分析。',
      optionExplanations: {
        A: '「近似」的核心就是犧牲微小精確度換取效率，追求完全精確就不需要用近似方法了。',
        B: '近似分位數是統計演算法（如 t-digest），不是用機器學習模型做預測。',
        C: '近似分位數演算法設計上就支援串流資料處理，T-digest 等演算法可以增量更新，適用於即時資料流。',
        D: null
      }
    },
    {
      id: 28,
      question: '若在高維度(> 500 維)的資料上應用 DBSCAN 演算法，卻發現所有資料點皆被判定為雜訊(Noise)，下列何者為最有可能的原因？',
      options: [
        { label: 'A', text: '高維下距離變化趨同，導致 Epsilon 閾值選擇失效' },
        { label: 'B', text: '使用錯誤的距離函數(Distance Function)' },
        { label: 'C', text: 'MinPts 參數設得太小' },
        { label: 'D', text: '資料過度標準化導致特徵消失' }
      ],
      answer: 'A',
      chapter: '數據處理與特徵工程',
      explanation: '高維度下所有資料點之間的距離趨於相似（維度詛咒），導致 Epsilon 閾值無法有效區分鄰近點和遠方點，所有點都不滿足密度要求而被判為雜訊。',
      optionExplanations: {
        A: null,
        B: '錯誤的距離函數可能影響結果，但不是造成「所有點都是雜訊」的最主要原因。高維距離趨同才是根本問題。',
        C: 'MinPts 太小反而會讓更多點被判為核心點，不會導致所有點都變成雜訊。MinPts 太大才可能造成雜訊增多。',
        D: '標準化是推薦的前處理步驟，不會導致特徵消失。標準化只是讓特徵尺度一致。'
      }
    },
    {
      id: 29,
      question: '某團隊在開發風險評估模型時，使用主成分分析(PCA)進行降維。輸入資料包含三個數值欄位：「交易金額(約 10^5)」、「交易次數(約 10^1)」與「年齡(約 10^2)」。分析人員直接將原始數據帶入 PCA，結果第一主成分(PC1)幾乎完全由「交易金額」主導。下列哪一項作法或判斷最合理？',
      options: [
        { label: 'A', text: '這是正常現象，金額本身變異較大，應主導主要成分' },
        { label: 'B', text: '若改用特徵選擇法，可自動解決變數量級問題' },
        { label: 'C', text: '可刪除「交易金額」欄位以平衡各主成分的影響' },
        { label: 'D', text: '在進行 PCA 前應先進行標準化(Standardization)，以避免因數值尺度差異造成特徵偏誤' }
      ],
      answer: 'D',
      chapter: '數據處理與特徵工程',
      explanation: 'PCA 基於變異數計算主成分，數值量級大的特徵會主導結果。標準化讓所有特徵在同一尺度上比較，PCA 才能正確反映真正的資料結構。',
      optionExplanations: {
        A: '不正常。金額量級大只是因為單位不同（元 vs 次 vs 歲），不代表它「應該」主導。這是尺度問題，不是重要性問題。',
        B: '特徵選擇法是選出重要特徵，不會改變特徵的數值量級，無法解決 PCA 的尺度敏感問題。',
        C: '直接刪除特徵會丟失有價值的資訊，正確做法是標準化而非刪除。',
        D: null
      }
    },
    {
      id: 30,
      question: '某行銷團隊想了解「廣告預算」與「銷售金額」之間的關聯程度。經繪製散佈圖後發現兩者呈現明顯線性趨勢，且資料中無明顯離群值。若希望衡量兩者之間線性關係的強度與方向，下列哪一種方法最適合？',
      options: [
        { label: 'A', text: '均方根誤差(Root Mean Squared Error, RMSE)' },
        { label: 'B', text: '共變異數(Covariance)' },
        { label: 'C', text: '皮爾森相關係數(Pearson Correlation Coefficient)' },
        { label: 'D', text: '平均絕對誤差(Mean Absolute Error, MAE)' }
      ],
      answer: 'C',
      chapter: '機率統計基礎',
      explanation: '皮爾森相關係數衡量兩變數的線性關係強度（-1 到 1）和方向（正/負），且不受量級影響，完全符合題目需求。',
      optionExplanations: {
        A: 'RMSE 衡量的是預測誤差大小，用於模型評估，不是衡量兩變數之間的關聯程度。',
        B: '共變異數可以衡量方向（正/負），但其值受變數量級影響，無法直接判斷「強度」（共變異數 1000 是強還是弱取決於量級）。',
        C: null,
        D: 'MAE 同樣是預測誤差指標，不是衡量變數間關聯的方法。'
      }
    },
    {
      id: 31,
      question: '某電商團隊觀察到，每位顧客對廣告推播的點擊行為可視為一次伯努利試驗(Bernoulli Trial)，單次點擊成功機率為 p = 0.4。當推播對象擴增至 5,000 位顧客時，團隊想快速預估「成功點擊總數」的分佈情形。若希望以常態分佈近似原始分佈，下列哪一項判斷最為合理？',
      options: [
        { label: 'A', text: '因樣本數極大，可直接以常態分佈近似二項分佈' },
        { label: 'B', text: '只有當 np 與 n(1-p) 皆大於 5 時，才能以常態分佈作近似' },
        { label: 'C', text: '常態近似只適用於 p = 0.5 的情況' },
        { label: 'D', text: '無論樣本數多大，二項分佈都不能以常態分佈近似' }
      ],
      answer: 'B',
      chapter: '機率統計基礎',
      explanation: '二項分佈的常態近似條件是 np >= 5 且 n(1-p) >= 5。本例 np = 5000 x 0.4 = 2000，n(1-p) = 5000 x 0.6 = 3000，都遠大於 5，可以近似。但 B 選項陳述的是正確的判斷條件。',
      optionExplanations: {
        A: '「樣本數極大就可以直接近似」的說法太粗略。如果 p 極端接近 0 或 1，即使 n 很大，np 或 n(1-p) 可能仍不夠大，需要檢查條件。',
        B: null,
        C: '常態近似不限於 p = 0.5。只要 np 和 n(1-p) 都足夠大（通常 > 5），任何 p 值都可以近似。',
        D: '錯誤。中央極限定理保證，在條件滿足時（np, n(1-p) > 5），二項分佈可以用常態分佈近似。'
      }
    },
    {
      id: 32,
      question: '某電信公司導入生成式 AI 客服系統，利用過去對話紀錄與用戶行為資料訓練語言模型。在資料治理與合規審查過程中，團隊發現模型可能會在回答中生成包含真實姓名、電話或交易資訊的內容。為確保系統符合個資法及生成式 AI 的安全與隱私要求，下列哪一項作法最符合實務可行及法規原則？',
      options: [
        { label: 'A', text: '在訓練資料前進行資料匿名化(Anonymization)或偽匿名化(Pseudonymization)處理，並建立輸出內容稽核機制' },
        { label: 'B', text: '改以強化學習(Reinforcement Learning)微調模型，使模型學習避免產出真實資訊' },
        { label: 'C', text: '採用同態加密(Homomorphic Encryption)以加密所有文字輸入，確保模型無法辨識任何個資' },
        { label: 'D', text: '僅設定模型回覆時不顯示用戶姓名，即可視為隱私防護完成' }
      ],
      answer: 'A',
      chapter: '大數據隱私保護與安全',
      explanation: '從源頭做匿名化/偽匿名化，加上輸出稽核機制做最後防線，是最實務可行且符合個資法精神的做法（資料最小化原則 + 事後監控）。',
      optionExplanations: {
        A: null,
        B: '強化學習微調成本高且效果不穩定，無法保證模型 100% 不會洩漏個資。從源頭處理資料更可靠。',
        C: '同態加密目前對語言模型的推論效率極差（計算成本極高），且不適合用在 NLP 任務上，實務上不可行。',
        D: '只隱藏姓名遠不足以保護隱私，電話、交易資訊等同樣是個資。且只靠前端隱藏不是根本的隱私防護。'
      }
    },
    {
      id: 33,
      question: '某金融機構的量化分析師在建立資產風險評估模型時，發現報酬率資料分佈明顯非對稱，且出現多次極端損失事件。若希望在不依賴常態分佈假設的前提下，採取更能捕捉資料極端情況的建模策略，下列哪一種方法最為合適？',
      options: [
        { label: 'A', text: '採用線性迴歸模型，以常態分佈殘差為基礎進行推估' },
        { label: 'B', text: '使用平均數與標準差估計波動範圍' },
        { label: 'C', text: '將資料裁剪至正負 3 個標準差範圍內以排除異常值影響' },
        { label: 'D', text: '採用分位數回歸模型(Quantile Regression Model)，聚焦於尾部分位以評估極端風險' }
      ],
      answer: 'D',
      chapter: '機率統計基礎',
      explanation: '分位數回歸不依賴常態分佈假設，可以直接估計任意分位數（如 5%、1% 尾部），特別適合捕捉極端損失事件的風險。',
      optionExplanations: {
        A: '線性迴歸假設殘差為常態分佈，直接違反「不依賴常態分佈假設」的前提。',
        B: '平均數和標準差是基於常態分佈的統計量，在非對稱分佈下會低估極端風險。',
        C: '裁剪到正負 3 個標準差是丟棄極端值，但極端損失事件正是需要被捕捉的重點，不能丟棄。',
        D: null
      }
    },
    {
      id: 34,
      question: '在圖形資料庫(Graph Database)中建模社群平台資料時，若每筆「按讚」行為都包含時間戳記與裝置類型等資訊。若希望同時保留使用者與貼文之間的互動關係，並能有效查詢「按讚」的行為屬性，下列哪一種設計方式最為合適？',
      options: [
        { label: 'A', text: '將「按讚」視為節點(Node)，與使用者建立邊(Edge)' },
        { label: 'B', text: '將「按讚」資訊作為邊的屬性(Property)儲存，連結使用者與被按讚的貼文節點' },
        { label: 'C', text: '把「按讚」資訊直接寫入使用者節點中作為屬性' },
        { label: 'D', text: '建立「按讚紀錄表」並將資料存入關聯式資料庫' }
      ],
      answer: 'B',
      chapter: '大數據處理技術',
      explanation: '在圖形資料庫中，「按讚」是使用者和貼文之間的關係（邊），將時間戳記和裝置類型作為這條邊的屬性，最自然且高效。',
      optionExplanations: {
        A: '將按讚做成節點會增加不必要的複雜度，且破壞使用者-貼文的直接關係結構。',
        B: null,
        C: '寫入使用者節點會導致使用者節點膨脹（一個人可能按讚上千次），且無法直接查詢與特定貼文的關係。',
        D: '題目是在圖形資料庫中建模，改用關聯式資料庫就失去了圖形資料庫在關係查詢上的優勢。'
      }
    },
    {
      id: 35,
      question: '某企業欲建構知識圖譜(Knowledge Graph)，以整合內部的研究報告、專利資料與專家知識，並支援語意查詢與關聯推理。若希望模型能具備良好的語意擴展性與高效推理能力，下列哪一種圖模型設計最為合適？',
      options: [
        { label: 'A', text: '僅以節點與邊表示，所有資訊存放於節點屬性中' },
        { label: 'B', text: '將資料結構建為 RDF(Resource Description Framework)三元組(Subject-Predicate-Object)' },
        { label: 'C', text: '使用文件型資料庫儲存內容，並以標籤(Tag)連接節點' },
        { label: 'D', text: '採用關聯式資料庫儲存對應關係，並搭配預建索引加速查詢' }
      ],
      answer: 'B',
      chapter: '大數據處理技術',
      explanation: 'RDF 三元組（主詞-述詞-受詞）是知識圖譜的標準資料模型，支援 SPARQL 語意查詢和本體推理(Ontology Reasoning)，具備最佳的語意擴展性和推理能力。',
      optionExplanations: {
        A: '僅用節點屬性存資訊缺乏語意結構（述詞的語意），無法支援標準的語意查詢和推理。',
        B: null,
        C: '文件型資料庫（如 MongoDB）不原生支援語意查詢和關聯推理，標籤也缺乏語意定義。',
        D: '關聯式資料庫的固定 Schema 不適合知識圖譜的靈活語意結構，且不原生支援圖形推理。'
      }
    },
    {
      id: 36,
      question: '某研究人員欲使用線性迴歸模型分析變數 Y 與 X 之間的關係，但發現 Y 的分佈明顯右偏，且其變異數隨 X 的增大而增加。為滿足模型假設並提升配適效果，下列哪一種前處理方法最為合適？',
      options: [
        { label: 'A', text: '對 X 進行標準化(Standardization)' },
        { label: 'B', text: '對 Y 進行 Box-Cox 轉換(Box-Cox Transformation)' },
        { label: 'C', text: '對資料進行一次差分(First Differencing)' },
        { label: 'D', text: '將 Y 中變異較大的樣本移除' }
      ],
      answer: 'B',
      chapter: '數據處理與特徵工程',
      explanation: 'Box-Cox 轉換可以同時處理兩個問題：將右偏分佈轉為接近常態（滿足殘差常態性假設），且穩定變異數（解決異方差問題）。',
      optionExplanations: {
        A: '標準化 X 可以改善收斂速度，但無法解決 Y 的右偏和異方差(Heteroscedasticity)問題。問題在 Y 不在 X。',
        B: null,
        C: '一次差分用於消除時間序列的趨勢性，不適合處理分佈偏態和異方差問題。',
        D: '移除高變異樣本會丟失資料，且不是統計上正確的做法。正確方法是透過轉換來穩定變異數。'
      }
    },
    {
      id: 37,
      question: '若開發一個用於罕見疾病自動診斷的分類模型，目前資料集中確診樣本僅佔不到 1%，且因為標註成本高，短期內無法取得更多資料。在此情況下，若希望提升模型對少數類的偵測能力，同時避免過擬合，下列哪一種策略最為合理？',
      options: [
        { label: 'A', text: '對少數類進行隨機過採樣(Random Oversampling)' },
        { label: 'B', text: '對多數類進行欠採樣(Random Undersampling)' },
        { label: 'C', text: '使用 SMOTE(Synthetic Minority Over-sampling Technique)生成合成少數類樣本後再訓練分類模型' },
        { label: 'D', text: '僅使用現有資料調整模型決策閾值(Decision Threshold)以提升召回率' }
      ],
      answer: 'C',
      chapter: '數據處理與特徵工程',
      explanation: 'SMOTE 在少數類樣本之間插值生成「合成」新樣本，不是簡單複製。這樣既能平衡類別比例，又因為新樣本具有多樣性而避免過擬合。',
      optionExplanations: {
        A: '隨機過採樣是複製現有少數類樣本，容易造成過擬合（模型記住重複的樣本），題目明確要求避免過擬合。',
        B: '欠採樣會丟棄大量多數類資料，在資料本身就稀少（標註成本高）的情況下更不適合。',
        C: null,
        D: '調整決策閾值可以提升召回率，但在少數類僅佔 1% 的極端不平衡下，模型可能根本學不到少數類的特徵，只調閾值效果有限。'
      }
    },
    {
      id: 38,
      question: '一家製造廠評估新生產線推出後，產品良率是否較原生產線提升。工程師分別從兩條生產線各抽樣 100 件產品，原生產線良率為 95%，新生產線為 97%。若欲檢定兩條生產線良率的差異是否具有統計意義，下列哪一種方法最為合適？',
      options: [
        { label: 'A', text: '雙樣本平均數 t 檢定(Two-sample t-test)' },
        { label: 'B', text: '雙比例 Z 檢定(Two-proportion Z-test)' },
        { label: 'C', text: '卡方檢定(Chi-square test)' },
        { label: 'D', text: '變異數分析(ANOVA)' }
      ],
      answer: 'B',
      chapter: '機率統計基礎',
      explanation: '比較兩組的「比例」（良率 95% vs 97%）是否有顯著差異，應使用雙比例 Z 檢定。t 檢定適用於比較平均數，這裡比較的是比例。',
      optionExplanations: {
        A: 't 檢定用於比較兩組的「平均值」差異（連續型資料），但良率是比例（離散型），應用比例檢定。',
        B: null,
        C: '卡方檢定可用於分析類別變數的獨立性，雖然也能處理比例差異，但雙比例 Z 檢定更直接且專門設計用於比較兩個比例。',
        D: 'ANOVA 用於比較三組以上的平均值差異，這裡只有兩組且比較的是比例，不適用。'
      }
    },
    {
      id: 39,
      question: '若評估一個新開發的腫瘤分類模型，其資料集中有 80% 的樣本來自良性病例。若直接使用 5-fold 交叉驗證進行模型評估，可能導致模型效能評估出現偏差，為避免此問題，下列哪一種作法最合適？',
      options: [
        { label: 'A', text: '降低 K 值以減少交叉驗證次數' },
        { label: 'B', text: '改為使用拔靴法(Bootstrap)' },
        { label: 'C', text: '調整測試集使良性樣本比例更高，以模擬真實分佈' },
        { label: 'D', text: '使用分層交叉驗證(Stratified K-Fold Cross-Validation)，以確保每折類別比例一致' }
      ],
      answer: 'D',
      chapter: '數據處理與特徵工程',
      explanation: '資料類別不平衡時，普通 K-Fold 可能導致某些折中少數類樣本極少甚至沒有。分層交叉驗證確保每折都維持與原始資料相同的類別比例，評估更穩定。',
      optionExplanations: {
        A: '降低 K 值會減少每折的樣本量，反而讓類別不平衡問題更嚴重。',
        B: 'Bootstrap 是另一種重抽樣方法，但不能保證每次抽樣都維持類別比例一致。',
        C: '刻意調整測試集比例會破壞真實分佈的代表性，讓評估結果不可靠。',
        D: null
      }
    },
    {
      id: 40,
      question: '請參考附圖虛擬程式碼（將第 i 筆資料作為測試集，其餘 N-1 筆作為訓練集，對每筆資料重複此過程），此程式碼最可能是在描述何種驗證法？',
      image: '/exams/s2-114-q37.png',
      options: [
        { label: 'A', text: 'Hold-out 驗證(Hold-out Validation)' },
        { label: 'B', text: '留一交叉驗證 LOOCV(Leave-One-Out Cross Validation)' },
        { label: 'C', text: 'K-fold 交叉驗證(K-fold Cross Validation)' },
        { label: 'D', text: '拔靴法(Bootstrap)驗證' }
      ],
      answer: 'B',
      chapter: '數據處理與特徵工程',
      explanation: '每次只留 1 筆資料做測試、其餘 N-1 筆做訓練，重複 N 次，正是留一交叉驗證(LOOCV)的定義。',
      optionExplanations: {
        A: 'Hold-out 是將資料一次性分為訓練集和測試集（如 80/20），不是每次只留一筆。',
        B: null,
        C: 'K-fold 是將資料分成 K 份，每次留一份做測試。LOOCV 可視為 K = N 的特殊情況（每份只有 1 筆）。',
        D: 'Bootstrap 是有放回抽樣產生多組訓練集，不是每次只留一筆做測試。'
      }
    },
    {
      id: 41,
      question: '請參考附圖虛擬程式碼（隨機選擇 X 個初始中心，反覆將資料指派給最近的中心並更新中心為群內平均值，直到收斂），此程式碼最可能是在描述何種演算法？',
      image: '/exams/s2-114-q39.png',
      options: [
        { label: 'A', text: 'K-means 分群(K-means Clustering)' },
        { label: 'B', text: '高斯混合模型分群(Gaussian Mixture Model Clustering)' },
        { label: 'C', text: '階層式分群(Hierarchical Clustering)' },
        { label: 'D', text: 'DBSCAN 分群' }
      ],
      answer: 'A',
      chapter: '大數據分析方法與工具',
      explanation: '「隨機選初始中心 → 計算距離指派 → 更新中心為平均值 → 重複直到收斂」是 K-means 的標準流程。',
      optionExplanations: {
        A: null,
        B: 'GMM 使用期望最大化(EM)演算法，計算的是機率而非距離，且不是簡單的「指派給最近中心」。',
        C: '階層式分群是逐步合併或分裂群集，不涉及「選初始中心」和「更新中心為平均值」。',
        D: 'DBSCAN 基於密度和鄰域半徑，不需要指定群數 K，也不計算群中心。'
      }
    },
    {
      id: 42,
      question: '考慮某生產線每小時出現瑕疵品的個數符合卜瓦松分佈，已知平均每小時產生 5 個瑕疵品。附圖程式碼展示資料處理（lambda_poisson = 5, poisson.pmf(5, lambda_poisson)），請問下列敘述何者正確？',
      image: '/exams/s2-114-q42.png',
      options: [
        { label: 'A', text: 'lambda_poisson = 5 表示每小時最多 5 個瑕疵品' },
        { label: 'B', text: 'poisson.pmf(5, lambda_poisson) 表示小於 5 個瑕疵品的機率' },
        { label: 'C', text: '卜瓦松分佈的適用條件為事件彼此獨立，且平均發生率固定' },
        { label: 'D', text: 'poisson.cdf(10, 5) 表示大於或等於 10 個瑕疵品的機率' }
      ],
      answer: 'C',
      chapter: '機率統計基礎',
      explanation: '卜瓦松分佈的兩個核心條件：(1) 事件彼此獨立，(2) 在固定時間內的平均發生率(lambda)固定。',
      optionExplanations: {
        A: 'lambda = 5 是「平均值」（期望值），不是最大值。瑕疵品數量可以超過 5，只是機率較低。',
        B: 'pmf(5, lambda) 是「恰好等於 5 個」的機率（Probability Mass Function），不是「小於 5」。小於 5 要用 cdf(4, lambda)。',
        C: null,
        D: 'cdf(10, 5) 是「小於或等於 10 個」的累積機率，不是「大於或等於 10」。大於等於 10 應為 1 - cdf(9, 5)。'
      }
    },
    {
      id: 43,
      question: '分析師載入 vgsales.csv 後，檢視 Year 欄位的資料型態發現是 float64 而非整數。請問下列哪些原因可能導致這種狀況？\n原因 A：CSV 檔中 Year 欄位有缺失值(NaN)，導致 Pandas 自動將整欄轉為浮點數。\n原因 B：CSV 檔中的年份資料原本是字串（如 "2006"），Pandas 轉換時出錯而變成浮點數。\n原因 C：Pandas 預設會將所有數值型態讀取為 float64，不論資料是否為整數。\n原因 D：CSV 檔中的年份資料可能包含小數點（例如 2006.0），因此被視為浮點數。',
      image: '/exams/s2-114-q46.png',
      options: [
        { label: 'A', text: '原因 B、原因 C' },
        { label: 'B', text: '原因 A、原因 D' },
        { label: 'C', text: '原因 A、原因 B、原因 D' },
        { label: 'D', text: '原因 C、原因 D' }
      ],
      answer: 'B',
      chapter: '數據處理與特徵工程',
      explanation: '原因 A 正確：pandas 中 NaN 是 float 類型，含 NaN 的整數欄位會被自動轉為 float64。原因 D 正確：CSV 中若數值帶小數點(2006.0)，自然會被讀為 float。',
      optionExplanations: {
        A: '原因 B 不正確（字串會被讀為 object 而非 float），原因 C 不正確（pandas 會盡量保持整數型態，不會預設全轉 float）。',
        B: null,
        C: '原因 B 不正確。字串 "2006" 不會被自動轉為 float，pandas 會保持為 object 型態。',
        D: '原因 C 不正確。pandas 讀取整數時會保持 int64，除非有 NaN 才轉 float64。'
      }
    },
    {
      id: 44,
      question: '研究團隊想將 Year 欄位轉換為整數型態，以便進行年份趨勢分析。考慮到資料中可能包含缺失值(NaN)，請選出最合適的轉換方式。',
      options: [
        { label: 'A', text: "data['Year'] = data['Year'].astype(int)" },
        { label: 'B', text: "data['Year'] = data['Year'].fillna(0).astype(int)" },
        { label: 'C', text: "data['Year'] = data['Year'].fillna(1).astype(int)" },
        { label: 'D', text: "data['Year'] = data['Year'].astype('Int64')" }
      ],
      answer: 'D',
      chapter: '數據處理與特徵工程',
      explanation: "pandas 的 'Int64'（大寫 I）是可空整數型態(Nullable Integer)，能直接保留 NaN 並將其餘值轉為整數，不需要先填充假值。",
      optionExplanations: {
        A: "astype(int) 遇到 NaN 會報錯（ValueError），因為 Python 原生 int 不支援 NaN。",
        B: "fillna(0) 將缺失年份填為 0，但 0 不是有效年份，會在後續分析中造成誤導。",
        C: "fillna(1) 將缺失年份填為 1，同樣不是有效年份值，會污染資料。",
        D: null
      }
    },
    {
      id: 45,
      question: '為了觀察各遊戲平台的市場表現，分析師想要統計每個平台的全球銷售總額，並以長條圖呈現。請選出最能正確實現此分析的程式碼。',
      options: [
        { label: 'A', text: 'data.groupby("Platform")["Global_Sales"].sum().plot(kind="bar")' },
        { label: 'B', text: 'data.groupby("Platform")["Global_Sales"].count().plot(kind="bar")' },
        { label: 'C', text: 'data["Platform"].value_counts().plot(kind="bar")' },
        { label: 'D', text: 'data.groupby("Platform")["Global_Sales"].mean().plot(kind="bar")' }
      ],
      answer: 'A',
      chapter: '數據處理與特徵工程',
      explanation: 'groupby("Platform") 分組 → ["Global_Sales"].sum() 計算各平台的銷售總額 → .plot(kind="bar") 畫長條圖。完整正確。',
      optionExplanations: {
        A: null,
        B: 'count() 計算的是每個平台的「遊戲數量」，不是銷售總額。',
        C: 'value_counts() 計算的是每個平台出現的次數（遊戲數量），不是銷售總額。',
        D: 'mean() 計算的是每個平台的「平均銷售額」，不是「總額」。'
      }
    },
    {
      id: 46,
      question: '團隊希望比較北美、歐洲、日本及其他地區的整體銷售比例，並使用 seaborn 套件以長條圖進行可視化分析。請選出能正確顯示這些地區銷售總額比例的程式碼。',
      options: [
        { label: 'A', text: 'sns.countplot(x=["NA_Sales","EU_Sales","JP_Sales","Other_Sales"], data=data)' },
        { label: 'B', text: 'sns.lineplot(x="Platform", y=["NA_Sales","EU_Sales","JP_Sales","Other_Sales"], data=data)' },
        { label: 'C', text: 'sns.barplot(x="variable", y="value", data=pd.melt(data, value_vars=["NA_Sales","EU_Sales","JP_Sales","Other_Sales"]), estimator=sum)' },
        { label: 'D', text: 'sns.histplot(data[["NA_Sales","EU_Sales","JP_Sales","Other_Sales"]])' }
      ],
      answer: 'C',
      chapter: '數據處理與特徵工程',
      explanation: 'pd.melt() 將四個銷售欄位從寬格式轉為長格式（variable 和 value），再用 sns.barplot 搭配 estimator=sum 計算各地區的銷售總額。',
      optionExplanations: {
        A: 'countplot 計算的是計數（次數），不是銷售金額的總和。且無法直接傳入欄位名稱列表。',
        B: 'lineplot 畫的是折線圖不是長條圖，且 y 參數不能直接傳入欄位列表。',
        C: null,
        D: 'histplot 畫的是直方圖（分佈圖），不是比較各地區總額的長條圖。'
      }
    },
    {
      id: 47,
      question: '研究團隊想要知道在北美地區(NA)銷售成績最好的遊戲前五名，並希望以 seaborn 的條狀圖呈現結果。請選出能正確完成這項分析的程式碼。',
      options: [
        { label: 'A', text: 'sns.barplot(x="NA_Sales", y="Name", data=data.head(5))' },
        { label: 'B', text: 'sns.barplot(x="Name", y="NA_Sales", data=data.nlargest(5, "NA_Sales"))' },
        { label: 'C', text: 'sns.lineplot(x="Name", y="NA_Sales", data=data.nlargest(5, "NA_Sales"))' },
        { label: 'D', text: 'sns.countplot(x="Name", y="NA_Sales", data=data)' }
      ],
      answer: 'B',
      chapter: '數據處理與特徵工程',
      explanation: 'nlargest(5, "NA_Sales") 取北美銷售最高的前 5 筆，再用 barplot 畫長條圖。x 為遊戲名稱、y 為銷售額。',
      optionExplanations: {
        A: 'data.head(5) 取的是資料前 5 列（按原始順序），不是銷售最高的前 5 名。且 x/y 軸方向通常遊戲名稱放 x 軸。',
        B: null,
        C: 'lineplot 畫折線圖，不是條狀圖（長條圖）。題目要求用條狀圖。',
        D: 'countplot 不接受 y 參數搭配 x 使用（countplot 只計算次數），且會計算所有遊戲的出現次數，不是銷售額。'
      }
    },
    {
      id: 48,
      question: '使用銷售資料集(marketing.csv)進行迴歸分析。附圖顯示 df.head() 和 df.describe() 的輸出結果。根據結果，下列何者正確？',
      image: '/exams/s2-114-q53.png',
      options: [
        { label: 'A', text: '資料集個數為 199 筆，變數個數為 4 個' },
        { label: 'B', text: 'sales 變數的中位數是 16.827' },
        { label: 'C', text: 'facebook 變數的第三四分位數(Q3)是 11.94' },
        { label: 'D', text: 'youtube 變數的第一四分位數(Q1)是 89.25' }
      ],
      answer: 'D',
      chapter: '數據處理與特徵工程',
      explanation: '從 df.describe() 輸出中，youtube 的 25%（Q1）= 89.25。count 顯示 youtube 有 200 筆（不是 199），sales 的中位數（50%）是 15.48（不是 16.827），facebook 的 Q3（75%）是 43.68（不是 11.94）。',
      optionExplanations: {
        A: 'youtube 的 count = 200，所以資料有 200 筆（不是 199）。facebook 的 count = 199 是因為有 1 個缺失值。',
        B: '16.827 是 sales 的平均值(mean)，不是中位數。中位數（50%）是 15.48。',
        C: '11.94 是 facebook 的 Q1（25%），不是 Q3。facebook 的 Q3（75%）是 43.68。',
        D: null
      }
    },
    {
      id: 49,
      question: '參考附圖計算各變數的遺漏值(NaN)個數結果，下列哪些語法可以正確計算？\n選項 A：df.isnull().sum()\n選項 B：df.isNaN().sum()\n選項 C：df.isna().sum()\n選項 D：df.isnan().sum()',
      image: '/exams/s2-114-q55.png',
      options: [
        { label: 'A', text: '選項 D' },
        { label: 'B', text: '選項 B、選項 C、選項 D' },
        { label: 'C', text: '選項 A、選項 C' },
        { label: 'D', text: '選項 A、選項 B、選項 C' }
      ],
      answer: 'C',
      chapter: '數據處理與特徵工程',
      explanation: 'pandas 中 isnull() 和 isna() 是完全等價的別名，都能正確檢測缺失值。isNaN() 和 isnan() 不是 pandas DataFrame 的方法，會報錯。',
      optionExplanations: {
        A: 'df.isnan() 不是 pandas 的方法（numpy 有 np.isnan()，但 DataFrame 沒有），會報 AttributeError。',
        B: 'df.isNaN() 不存在（大小寫錯誤），df.isnan() 也不存在，只有 A 和 C 正確。',
        C: null,
        D: 'df.isNaN() 不是有效的 pandas 方法（注意大小寫），會報錯。'
      }
    },
    {
      id: 50,
      question: '考慮資料集已填補遺漏值，參考附圖 OLS 迴歸結果，下列哪些敘述正確？\nA：空格 1 語法 reg = LinearRegression().fit(y, X)\nB：空格 1 語法 reg = LinearRegression().fit(X, y)\nC：print(reg.coef_) 結果為包括截距項等 4 個係數值\nD：空格 2 語法 sm.OLS(X2, y).fit()\nE：model_sm 迴歸模型的所有迴歸係數在 alpha=0.05 之下具有顯著的解釋力\nF：截距項係數值為 3.5561',
      image: '/exams/s2-114-q57.png',
      options: [
        { label: 'A', text: 'B、C、F' },
        { label: 'B', text: 'B、F' },
        { label: 'C', text: 'A、C、D、F' },
        { label: 'D', text: 'B、E' }
      ],
      answer: 'B',
      chapter: '數據處理與特徵工程',
      explanation: 'B 正確：sklearn 的 fit(X, y) 參數順序是特徵在前、目標在後。F 正確：OLS 結果表中 const 的 coef = 3.5561。C 錯誤：reg.coef_ 只有 3 個係數（不含截距，截距在 reg.intercept_）。E 錯誤：newspaper 的 P>|t| = 0.914 > 0.05，不顯著。',
      optionExplanations: {
        A: 'C 不正確。sklearn 的 reg.coef_ 只包含特徵係數（3 個），不包含截距項。截距項存在 reg.intercept_ 中。',
        B: null,
        C: 'A 不正確（參數順序應為 X, y 不是 y, X），D 不正確（statsmodels OLS 的參數順序是 sm.OLS(y, X2)，y 在前）。',
        D: 'E 不正確。從 OLS 結果表可見 newspaper 的 p 值 = 0.914，遠大於 0.05，不具顯著解釋力。'
      }
    }
  ]
}
