/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：subject2-114-part1.js
 * 功能：114 年歷屆考題 科目二（第 1-25 題）
 * 建立日期：2026-05-17
 * 版本：1.0.0
 */

export default [
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
    }
]
