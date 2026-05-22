/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：subject2-stest-u3.js
 * 功能：S測驗題庫 科目二 單元3（18題，跳過附圖題）
 * 來源：S測驗 (sustainnovation.cc)
 * 建立日期：2026-05-22
 * 版本：1.0.0
 */

export default [
  {
    id: 1,
    question: '下列技術之應用，何者最「不」適當？',
    options: [
      { label: 'A', text: '用k-means學習多分類問題' },
      { label: 'B', text: '用CNN辨識影像' },
      { label: 'C', text: '用autoencoder降維' },
      { label: 'D', text: '用RNN進行文字翻譯' }
    ],
    answer: 'A',
    chapter: '機器學習基礎',
    explanation: 'k-means 是非監督式集群演算法，不能用於監督式的多分類問題。分類需要有標籤的監督式學習方法。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 2,
    question: '集群（clustering）是以非監督方式定義問題，下列何者「不是」內部核驗準則？',
    options: [
      { label: 'A', text: '類別標籤' },
      { label: 'B', text: '各群到中心距離平方和' },
      { label: 'C', text: '側影係數' },
      { label: 'D', text: '群內距離相對於群間距離比值' }
    ],
    answer: 'A',
    chapter: '大數據分析方法',
    explanation: '類別標籤是「外部」核驗準則，需要已知的真實標籤。內部核驗準則不需要外部標籤，僅根據資料本身的結構來評估。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 3,
    question: '下列何種集群法是利用兩兩樣本間的距離與樹狀結構，一開始將所有資料視為一個完整群體，不斷分裂為較小群體？',
    options: [
      { label: 'A', text: '階層式集群' },
      { label: 'B', text: 'k-means集群' },
      { label: 'C', text: '密度集群' },
      { label: 'D', text: 'k-medoids集群' }
    ],
    answer: 'A',
    chapter: '大數據分析方法',
    explanation: '題目描述的是分裂式階層集群（Divisive Hierarchical Clustering），從一個大群不斷分裂為小群。階層式集群包含凝聚式（由下而上）和分裂式（由上而下）兩種。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 4,
    question: '關於 SVM 的模型超參數，下列敘述何者「不」正確？',
    options: [
      { label: 'A', text: '懲罰係數C越高越容易過度最佳化' },
      { label: 'B', text: '支援向量的數目要事先決定' },
      { label: 'C', text: '網格搜尋常用來尋找超參數' },
      { label: 'D', text: '核函數要事先決定' }
    ],
    answer: 'B',
    chapter: '機器學習基礎',
    explanation: '支援向量的數目是模型訓練後自動決定的結果，不需要也不能事先指定。需要事先設定的超參數是 C 值和核函數類型。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 5,
    question: '關於類神經網路，下列敘述何者「不」正確？',
    options: [
      { label: 'A', text: 'ReLU和hard tanh取代了Sigmoid和tanh因更適合訓練多層神經網路' },
      { label: 'B', text: '除投入層外各層均需設置活化函數' },
      { label: 'C', text: '最簡單的類神經網路是感知機是線性分類模型' },
      { label: 'D', text: '類神經網路至少包括投入層與隱藏層投入層接收自變數隱藏層試圖預測因變數' }
    ],
    answer: 'D',
    chapter: '機器學習基礎',
    explanation: '最簡單的類神經網路（如感知機）只需要投入層和「輸出層」，不一定要有隱藏層。隱藏層是選用的，輸出層才負責產出預測。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 6,
    question: '下列何者「不是」用來評估模型的驗證指標？',
    options: [
      { label: 'A', text: 'MSE' },
      { label: 'B', text: '特徵值（eigenvalue）' },
      { label: 'C', text: '混淆矩陣與敏感度' },
      { label: 'D', text: 'ROC曲線與AUC' }
    ],
    answer: 'B',
    chapter: '機器學習基礎',
    explanation: '特徵值（eigenvalue）是線性代數中用於矩陣分解（如 PCA）的數學概念，不是模型驗證指標。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 7,
    question: '關於隨機森林，下列敘述何者「不」正確？',
    options: [
      { label: 'A', text: '提供變數重要度分數' },
      { label: 'B', text: '可用來預測分類' },
      { label: 'C', text: '可用於有遺缺值的資料' },
      { label: 'D', text: '在薈萃式學習裡隨機森林採用boosting方式進行系集' }
    ],
    answer: 'D',
    chapter: '機器學習基礎',
    explanation: '隨機森林使用 Bagging（Bootstrap Aggregating），不是 Boosting。Boosting 是 AdaBoost、XGBoost 等方法的特徵。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 8,
    question: '關於求解線性迴歸，下列敘述何者「不」正確？',
    options: [
      { label: 'A', text: '簡單線性迴歸可用最小平方法' },
      { label: 'B', text: '多元迴歸等於只有輸入輸出層的神經網路可用SGD' },
      { label: 'C', text: '簡單線性迴歸需計算r確認X對Y有顯著影響' },
      { label: 'D', text: '多元線性迴歸自變數之間的相關程度可以高於自變數與因變數之間的相關程度' }
    ],
    answer: 'D',
    chapter: '統計基礎',
    explanation: '當自變數之間的相關程度高於自變數與因變數之間的相關程度時，表示存在嚴重的多重共線性問題，這會導致模型不穩定且係數估計不可靠，在良好的迴歸建模中不應出現此情況。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 9,
    question: '關於 ROC 曲線，下列敘述何者「不」正確？',
    options: [
      { label: 'A', text: '常用於分析二元分類' },
      { label: 'B', text: 'ROC以FPR為X軸TPR為Y軸' },
      { label: 'C', text: '曲線往左上角移動敏感度越高' },
      { label: 'D', text: 'AUC=0.8代表無鑑別力' }
    ],
    answer: 'D',
    chapter: '機器學習基礎',
    explanation: 'AUC=0.8 代表「良好的鑑別力」。AUC=0.5 才代表無鑑別力（等同隨機猜測）。AUC 越接近 1 表示模型越好。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 10,
    question: '關於 FP-growth 演算法，下列敘述何者「不」正確？',
    options: [
      { label: 'A', text: '構造FP-tree壓縮原始交易資料' },
      { label: 'B', text: '沒有生成候選項目集的頻繁項目集探勘方法' },
      { label: 'C', text: '著重於頻繁項目的增長避免昂貴的候選生成' },
      { label: 'D', text: '採用類似Apriori的generate-and-test策略' }
    ],
    answer: 'D',
    chapter: '大數據分析方法',
    explanation: 'FP-growth 的核心優勢就是不採用 Apriori 的 generate-and-test 策略，而是透過 FP-tree 直接挖掘頻繁項目集，大幅提升效率。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 11,
    question: '關於 AdaBoost 的訓練過程，下列敘述何者「不」正確？',
    options: [
      { label: 'A', text: '準確分類的樣本權重降低未準確的提高' },
      { label: 'B', text: '每個樣本初始權值1/M' },
      { label: 'C', text: '分類錯誤率低的弱分類器在最終分類器中占的權重較小否則較大' },
      { label: 'D', text: '弱分類器集合成強分類器' }
    ],
    answer: 'C',
    chapter: '機器學習基礎',
    explanation: 'AdaBoost 中，分類錯誤率「低」的弱分類器表現好，應該在最終分類器中占的權重「較大」而非較小。表現越好的弱分類器影響力越大。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 12,
    question: '測試誤差高訓練誤差低的狀況稱為？',
    options: [
      { label: 'A', text: '配適良好' },
      { label: 'B', text: '配適狀況不明' },
      { label: 'C', text: '過度配適' },
      { label: 'D', text: '配適不足' }
    ],
    answer: 'C',
    chapter: '機器學習基礎',
    explanation: '過度配適（Overfitting）的特徵就是訓練誤差低但測試誤差高，模型過度學習訓練資料的細節和雜訊。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 13,
    question: '關於決策樹與隨機森林的比較，下列敘述何者正確？',
    options: [
      { label: 'A', text: '決策樹是監督式隨機森林是非監督式' },
      { label: 'B', text: '隨機森林的每棵決策樹之間是有關聯的' },
      { label: 'C', text: '兩者皆屬於薈萃式學習' },
      { label: 'D', text: '隨機森林能處理離散型也能處理連續型資料' }
    ],
    answer: 'D',
    chapter: '機器學習基礎',
    explanation: '隨機森林可以處理離散型和連續型資料。A 錯誤：兩者都是監督式。B 錯誤：隨機森林的樹之間是獨立的（bagging）。C 錯誤：決策樹是單一模型不屬於集成學習。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 14,
    question: '關於交叉驗證，下列敘述何者「不」正確？',
    options: [
      { label: 'A', text: '常用於分類預測和PLS迴歸' },
      { label: 'B', text: '常見保留法和k摺驗證' },
      { label: 'C', text: 'k=10代表分10份9份訓練1份驗證' },
      { label: 'D', text: '通常重複k次以上以k-1次結果均值作為精度估計' }
    ],
    answer: 'D',
    chapter: '機器學習基礎',
    explanation: 'k 摺交叉驗證重複 k 次（不是 k 次以上），每次用不同的 1 份做驗證，最後取全部 k 次結果的均值。不是取 k-1 次的均值。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 15,
    question: '下列何種方法，訓練的速度通常最快？',
    options: [
      { label: 'A', text: 'k近鄰法' },
      { label: 'B', text: '多層感知器' },
      { label: 'C', text: '支援向量機' },
      { label: 'D', text: '決策樹' }
    ],
    answer: 'D',
    chapter: '機器學習基礎',
    explanation: '決策樹訓練速度通常最快，因為其分裂過程相對簡單。KNN 嚴格來說不需要訓練但預測時慢。MLP 和 SVM 的訓練通常較耗時。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 16,
    question: '當訓練資料有遺缺資料時，下列何者「不是」處理方式？',
    options: [
      { label: 'A', text: '將遺缺資料用合理數字補上' },
      { label: 'B', text: '將資料分成n組交叉檢驗' },
      { label: 'C', text: '將遺缺資料的樣本移除' },
      { label: 'D', text: '以原始資料平均值補上' }
    ],
    answer: 'B',
    chapter: '數據處理與特徵工程',
    explanation: '交叉驗證是模型評估方法，不是處理遺缺資料的方法。處理遺缺資料的方法包括刪除、均值/中位數填補、插值法等。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 17,
    question: '關於重抽樣方法進行模型訓練與測試，下列敘述何者正確？',
    options: [
      { label: 'A', text: 'k摺交叉驗證相較於他法有較高的變異但訓練集大時問題較不嚴重' },
      { label: 'B', text: '模型評定包括同一模型不同參數調校以及跨越不同模型比較' },
      { label: 'C', text: '模型優化是確定最優模型後合理估計未來實際應用績效' },
      { label: 'D', text: '與隨機誤差建模相關的參數有兩種一種可直接利用資料估計的超參數另一種是不易從資料估計的模型參數' }
    ],
    answer: 'A',
    chapter: '機器學習基礎',
    explanation: 'k 摺交叉驗證相較於 LOOCV 等方法有較高的變異，但隨著訓練集增大此問題會緩解。B 混淆了模型選擇和評定的定義。C 混淆了模型優化和評定。D 把超參數和模型參數的定義弄反了。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 18,
    question: '關於 k 近鄰學習，下列敘述何者「不」正確？',
    options: [
      { label: 'A', text: '資料需服從常態分配' },
      { label: 'B', text: 'KNN計算耗時大量資料時用k-d tree加速' },
      { label: 'C', text: '沒有模型限制了解預測變數與目標變數關係' },
      { label: 'D', text: '度量綱不一和名目屬性需額外處理' }
    ],
    answer: 'A',
    chapter: '機器學習基礎',
    explanation: 'KNN 是非參數方法（non-parametric），不需要假設資料服從任何特定分佈（如常態分佈）。這是 KNN 的優勢之一。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  }
]
