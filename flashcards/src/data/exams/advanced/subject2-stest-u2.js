/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：subject2-stest-u2.js
 * 功能：S測驗題庫 科目二 單元2（18題，跳過附圖題）
 * 來源：S測驗 (sustainnovation.cc)
 * 建立日期：2026-05-22
 * 版本：1.0.0
 */
export default [
  {
    id: 1,
    question: '下列何者不是屬性轉換的主要目的？',
    options: [
      { label: 'A', text: '資料可能呈現嚴重的偏態分布經過轉換後差異可以拉開' },
      { label: 'B', text: '能夠讓資料的可讀性更高' },
      { label: 'C', text: '讓資料能夠符合模型所需要的假設例如經過轉換後的資料呈現正態分布' },
      { label: 'D', text: '轉換後可能更容易發現資料之間的關係使沒有關係變成有關係' }
    ],
    answer: 'D',
    chapter: '數據處理與特徵工程',
    explanation: '屬性轉換可以揭示已存在的隱藏關係，但不能「使沒有關係變成有關係」。轉換不應該憑空製造不存在的關聯性。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 2,
    question: '下列何種統計量無法由盒鬚圖（box-and-whisker plot, boxplot）得知？',
    options: [
      { label: 'A', text: '全距' },
      { label: 'B', text: '最小值' },
      { label: 'C', text: '變異數' },
      { label: 'D', text: '中位數' }
    ],
    answer: 'C',
    chapter: '統計基礎',
    explanation: '盒鬚圖可顯示最小值、Q1、中位數、Q3、最大值（可算全距），但無法直接得知變異數。變異數需要計算每個數據點與平均值的偏差平方和。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 3,
    question: '下列何種圖形，較適合用來顯示資料隨著時間的變化趨勢？',
    options: [
      { label: 'A', text: '直方圖' },
      { label: 'B', text: '圓餅圖' },
      { label: 'C', text: '折線圖' },
      { label: 'D', text: '盒鬚圖' }
    ],
    answer: 'C',
    chapter: '數據分析工具',
    explanation: '折線圖以時間為 X 軸、數值為 Y 軸，最適合呈現趨勢變化。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 4,
    question: '關於邏輯斯迴歸中的迴歸係數，可以使用下列何種方法求解？',
    options: [
      { label: 'A', text: '牛頓迭代法' },
      { label: 'B', text: '馬可夫鏈演算法' },
      { label: 'C', text: '最大概似估計法' },
      { label: 'D', text: '最小平方法' }
    ],
    answer: 'C',
    chapter: '機器學習基礎',
    explanation: '邏輯斯迴歸使用最大概似估計法（MLE）求解迴歸係數。最小平方法用於線性迴歸，牛頓迭代法是 MLE 的數值求解方法之一但不是主要方法名稱。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 5,
    question: '關於資料特徵，下列敘述何者不正確？',
    options: [
      { label: 'A', text: '特徵個數越多容易引起維度災難模型越複雜' },
      { label: 'B', text: '可透過模型計算特徵重要程度例如Random Forest' },
      { label: 'C', text: '特徵個數越多該模型所需的運算時間也就越短' },
      { label: 'D', text: '剔除不相關特徵以減少特徵個數提高模型效果' }
    ],
    answer: 'C',
    chapter: '數據處理與特徵工程',
    explanation: '特徵個數越多，運算時間越「長」而非越短。更多特徵意味著更大的計算量和記憶體需求。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 6,
    question: '關於巨量資料技術架構，下列何者不是應具備的需求？',
    options: [
      { label: 'A', text: '具有高容錯性' },
      { label: 'B', text: '可以被平行擴充' },
      { label: 'C', text: '儘可能能夠被分散式處理' },
      { label: 'D', text: '儘可能的使用單一節點資料庫' }
    ],
    answer: 'D',
    chapter: '大數據處理技術',
    explanation: '巨量資料的核心理念是分散式處理和水平擴展。使用單一節點資料庫無法應對大量資料，與巨量資料技術架構的需求相反。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 7,
    question: '對自變數 X 與依變數 Y 作簡單線性迴歸得到的相關係數 r，下列敘述何者正確？',
    options: [
      { label: 'A', text: 'r=0代表數據點恰好落在同一條水平直線上' },
      { label: 'B', text: 'r=1代表Y=aX+b（a b是常數 a>0）' },
      { label: 'C', text: 'r=-1代表X與Y完全無關' },
      { label: 'D', text: 'r>0代表X Y間有因果關係' }
    ],
    answer: 'B',
    chapter: '統計基礎',
    explanation: 'r=1 代表完美正線性關係，即 Y=aX+b 且 a>0。r=0 不代表在水平線上（可能有非線性關係）。r=-1 代表完美負線性關係而非無關。相關不等於因果。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 8,
    question: '關於資料解析思維，下列敘述何者不正確？',
    options: [
      { label: 'A', text: '利用重抽樣的不確定性可強化參數估計避免過度配適' },
      { label: 'B', text: '集成模型可發揮團結力量大的效果' },
      { label: 'C', text: '穩健統計方法可降低雜訊對模型的影響' },
      { label: 'D', text: '機器學習模型不需要考慮資料是否與背景假設吻合' }
    ],
    answer: 'D',
    chapter: '機器學習基礎',
    explanation: '機器學習模型仍需考慮資料假設。例如線性迴歸假設常態分佈、同質變異等。忽略假設可能導致模型偏差或失效。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 9,
    question: '下列何者不屬於非監督式學習？',
    options: [
      { label: 'A', text: 'Word2Vec' },
      { label: 'B', text: '關聯法則' },
      { label: 'C', text: 'K Nearest Neighbor' },
      { label: 'D', text: 'K-Means' }
    ],
    answer: 'C',
    chapter: '機器學習基礎',
    explanation: 'KNN（K 最近鄰）是監督式學習的分類/迴歸演算法，需要標籤資料。Word2Vec、關聯法則、K-Means 都屬於非監督式學習。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 10,
    question: '行銷部選擇部分客戶進行簡訊產品推薦，同時獲取了客戶是否願意購買產品的資訊；而通過這些已知資訊，用來判斷其他用戶的購買意願，請問屬於下列何種方法？',
    options: [
      { label: 'A', text: '預測模型' },
      { label: 'B', text: '關聯法則' },
      { label: 'C', text: '探索性分析' },
      { label: 'D', text: '推薦系統' }
    ],
    answer: 'A',
    chapter: '機器學習基礎',
    explanation: '根據已知的標籤（購買/不購買）來預測未知用戶的行為，這是典型的監督式學習預測模型（分類問題）。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 11,
    question: '對於某些資料屬性內出現異常大的值，有可能會導致誤導模型訓練的結果，此時會將該屬性值進行何種處理，使所有屬性值被轉換到 0 至 1 之間？',
    options: [
      { label: 'A', text: '資料組織' },
      { label: 'B', text: '資料分析' },
      { label: 'C', text: '資料特徵縮放' },
      { label: 'D', text: '資料清理' }
    ],
    answer: 'C',
    chapter: '數據處理與特徵工程',
    explanation: '資料特徵縮放（Feature Scaling）如 Min-Max Normalization，可將數值映射到 [0, 1] 區間，消除不同量綱的影響。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 12,
    question: '下列哪種的資料可以無需經過前處理，直接使用線性模型（Linear Model）進行學習？',
    options: [
      { label: 'A', text: '身高（公分）體重（公斤）' },
      { label: 'B', text: '氣候（晴陰雨）溫度（攝氏）' },
      { label: 'C', text: '最高時速（公里/小時）車款（車種型號）' },
      { label: 'D', text: '性別（男女）腰圍（公分）' }
    ],
    answer: 'A',
    chapter: '數據處理與特徵工程',
    explanation: '身高和體重都是連續數值型資料，可以直接用於線性模型。其他選項包含類別型變數（氣候、車款、性別），需要先進行編碼（如 One-Hot Encoding）才能輸入線性模型。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 13,
    question: '關於模型績效評估，下列敘述何者不正確？',
    options: [
      { label: 'A', text: 'Mallow\'s Cp有考慮變數數量適合比較不同變數數量下的模型' },
      { label: 'B', text: 'AIC與BIC的不同在於懲罰過多變數入模的方式不同' },
      { label: 'C', text: '迴歸模型績效衡量大多基於殘差' },
      { label: 'D', text: '殘差是預測的反應變數值減去真實的反應變數值' }
    ],
    answer: 'D',
    chapter: '機器學習基礎',
    explanation: '殘差的標準定義是「真實值減去預測值」（y - y_hat），而非「預測值減去真實值」。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 14,
    question: '下列何者不適合用來預測「句子的下一個詞」？',
    options: [
      { label: 'A', text: 'Conditional random field' },
      { label: 'B', text: 'Hidden Markov model' },
      { label: 'C', text: 'N-gram' },
      { label: 'D', text: 'Linear Regression' }
    ],
    answer: 'D',
    chapter: '機器學習基礎',
    explanation: '線性迴歸用於預測連續數值，不適合預測離散的詞彙。CRF、HMM、N-gram 都是處理序列資料和語言模型的方法。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 15,
    question: '下列何者不是極端值或雜訊產生的主要原因？',
    options: [
      { label: 'A', text: '人為故意謊報資料' },
      { label: 'B', text: '數據輸入錯誤' },
      { label: 'C', text: '測量儀器出錯' },
      { label: 'D', text: '資料交給分析人員時是透過電子郵件寄送而非隨身碟傳送' }
    ],
    answer: 'D',
    chapter: '數據處理與特徵工程',
    explanation: '資料的傳輸方式（電郵或隨身碟）不會影響資料的數值內容，不是極端值或雜訊的來源。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 16,
    question: '以下何者不是探索性資料分析經常關心的議題？',
    options: [
      { label: 'A', text: '與應變數相關的自變數' },
      { label: 'B', text: '資料的四分位數' },
      { label: 'C', text: '資料是否有離群值' },
      { label: 'D', text: '資料模型的準確度' }
    ],
    answer: 'D',
    chapter: '統計基礎',
    explanation: '探索性資料分析（EDA）重點在了解資料特性（分佈、離群值、相關性等），模型的準確度是建模後的評估階段，不屬於 EDA。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 17,
    question: '下列學習方法，何者難以獲得人類容易理解的知識或特徵？',
    options: [
      { label: 'A', text: 'Multilayer perceptron' },
      { label: 'B', text: 'Logistic regression' },
      { label: 'C', text: 'Decision tree' },
      { label: 'D', text: 'Association rule mining' }
    ],
    answer: 'A',
    chapter: '機器學習基礎',
    explanation: '多層感知器（MLP/深度神經網路）是黑箱模型，難以解釋其決策過程。邏輯迴歸、決策樹、關聯法則都具有較好的可解釋性。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 18,
    question: '關於獨立（independence）與相依（dependency），下列敘述何者不正確？',
    options: [
      { label: 'A', text: '數值變數以相關係數代表相依性' },
      { label: 'B', text: '獨立與相依描述兩變數關係' },
      { label: 'C', text: '關聯衡量基於頻次計算表達類別變數相依性' },
      { label: 'D', text: '相關係數為0代表兩變數統計獨立' }
    ],
    answer: 'D',
    chapter: '統計基礎',
    explanation: '相關係數為 0 只代表兩變數之間沒有「線性」關係，不代表統計獨立。兩變數可能存在非線性相依關係但相關係數為 0。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  }
]
