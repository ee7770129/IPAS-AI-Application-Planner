/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：subject2-stest-u5.js
 * 功能：S測驗題庫 科目二 單元5（15題，跳過附圖題）
 * 來源：S測驗 (sustainnovation.cc)
 * 建立日期：2026-05-22
 * 版本：1.0.0
 */
export default [
  {
    id: 1,
    question: '考慮購物網站銷售資料集使用集群法進行銷售分析，下列敘述何者正確？',
    options: [
      { label: 'A', text: '凝聚階層法是切割式集群法' },
      { label: 'B', text: '在k-medoid中側影係數為正數且數值較大時表示資料分派到較合適的集群' },
      { label: 'C', text: 'k-medoid比k-means較容易受異常值影響' },
      { label: 'D', text: 'k-means結果是同一集群內樣本具高度差異性' }
    ],
    answer: 'B',
    chapter: '大數據分析方法',
    explanation: '側影係數（Silhouette Coefficient）介於 -1 到 1 之間，正數且越大表示該樣本被分派到越合適的集群。A：凝聚階層法是階層式不是切割式。C：k-medoid 比 k-means 更不容易受異常值影響（用中位數而非均值）。D：同一集群內應具高度相似性。',
    optionExplanations: { A: '凝聚階層法屬於階層式集群法，不是切割式集群法。', B: null, C: 'k-medoid 使用中位數點而非均值，比 k-means 更不容易受異常值影響。', D: '集群分析的目標是讓同一集群內的樣本具有高度相似性，而非差異性。' }
  },
  {
    id: 2,
    question: '關於長條圖與直方圖，下列敘述何者「不」正確？',
    options: [
      { label: 'A', text: '從長條圖可以看出中位數眾數的大約位置' },
      { label: 'B', text: '直方圖橫軸為數值型連續變數' },
      { label: 'C', text: '直方圖組距有順序不可置換長條圖則無順序' },
      { label: 'D', text: '長條圖橫軸為類別型離散變數' }
    ],
    answer: 'A',
    chapter: '數據分析工具',
    explanation: '長條圖呈現的是各類別的次數或比例，可以看出眾數（最高的那根），但無法得知中位數，因為類別型資料沒有中位數的概念。',
    optionExplanations: { A: null, B: '直方圖的橫軸確實是數值型連續變數，這是正確的描述。', C: '直方圖的組距有順序且不可置換，長條圖的類別無固定順序，這是正確的。', D: '長條圖的橫軸確實是類別型離散變數，這是正確的描述。' }
  },
  {
    id: 3,
    question: '關於深度學習的說明，下列敘述何者「不」正確？',
    options: [
      { label: 'A', text: '卷積神經網路表現比一般深度神經網路出色大幅降低參數量' },
      { label: 'B', text: '具忍受有雜訊的數據可分析影像影片等' },
      { label: 'C', text: '利用多層神經網路分析數據重點是事先給定特徵值' },
      { label: 'D', text: '不斷調整參數直到找到有效運作的參數組合' }
    ],
    answer: 'C',
    chapter: '機器學習基礎',
    explanation: '深度學習的核心優勢就是「自動學習特徵」，不需要事先給定特徵值。傳統機器學習才需要手動設計特徵（Feature Engineering）。',
    optionExplanations: { A: 'CNN 透過權重共享與局部連結確實大幅降低參數量，表現優於一般 DNN，這是正確的。', B: '深度學習確實能容忍有雜訊的資料，且可分析影像、影片等，這是正確的。', C: null, D: '深度學習確實透過反向傳播不斷調整參數直到找到有效的參數組合，這是正確的。' }
  },
  {
    id: 4,
    question: '資料清理是指發現並糾正資料中的錯誤，下列敘述何者「不」正確？',
    options: [
      { label: 'A', text: '驗證資料正確性' },
      { label: 'B', text: '遺缺值處理' },
      { label: 'C', text: '迴歸係數的處理' },
      { label: 'D', text: '異常值處理' }
    ],
    answer: 'C',
    chapter: '數據處理與特徵工程',
    explanation: '迴歸係數的處理屬於模型訓練階段的工作，不是資料清理的範疇。資料清理包括處理遺缺值、異常值、重複資料、格式錯誤等。',
    optionExplanations: { A: '驗證資料正確性是資料清理的基本步驟之一，屬於正確描述。', B: '遺缺值處理是資料清理中的重要環節，屬於正確描述。', C: null, D: '異常值處理是資料清理的核心工作之一，屬於正確描述。' }
  },
  {
    id: 5,
    question: '關於 OLS 失靈的狀況，「不」包括下列何項？',
    options: [
      { label: 'A', text: '某變量是其他變量的線性組合' },
      { label: 'B', text: '預測變量個數大於樣本數' },
      { label: 'C', text: '預測變量矩陣存在共線性' },
      { label: 'D', text: '預測變量間相關性不足' }
    ],
    answer: 'D',
    chapter: '統計基礎',
    explanation: '預測變量間相關性不足不會導致 OLS 失靈，反而有助於模型穩定。OLS 失靈的原因包括完全共線性、變量是線性組合（矩陣不可逆）、樣本數不足等。',
    optionExplanations: { A: '某變量是其他變量的線性組合會導致矩陣不可逆，確實會使 OLS 失靈。', B: '預測變量個數大於樣本數時矩陣無法求解，確實會使 OLS 失靈。', C: '預測變量矩陣存在共線性會導致估計不穩定，確實會使 OLS 失靈。', D: null }
  },
  {
    id: 6,
    question: '關於 ETL，下列敘述何者「不」正確？',
    options: [
      { label: 'A', text: 'Load是將轉換過的數據載入目的地' },
      { label: 'B', text: 'Extract是從資料來源擷取數據' },
      { label: 'C', text: 'Transform針對結構資料轉換非結構資料則無法處理' },
      { label: 'D', text: '建置或更新資料倉儲時所需過程' }
    ],
    answer: 'C',
    chapter: '大數據處理技術',
    explanation: 'ETL 的 Transform 階段可以處理各種類型的資料，包括非結構化資料（如文字、圖片等），將其轉換為適合載入的格式。',
    optionExplanations: { A: 'Load 確實是將轉換過的數據載入目的地（如資料倉儲），這是正確的。', B: 'Extract 確實是從各種資料來源擷取數據的步驟，這是正確的。', C: null, D: 'ETL 確實是建置或更新資料倉儲時的必要過程，這是正確的。' }
  },
  {
    id: 7,
    question: '關於 PCA 於特徵提取之主要用途，下列敘述何者正確？',
    options: [
      { label: 'A', text: '將數個變數組合成具訊息力的特徵變數' },
      { label: 'B', text: '將最相關訊息與無關雜訊結合' },
      { label: 'C', text: '將低度相關的矩陣轉換成相關且量多的潛在變項' },
      { label: 'D', text: '提取重要特徵後不能以圖像視覺化' }
    ],
    answer: 'A',
    chapter: '數據處理與特徵工程',
    explanation: 'PCA 將多個相關變數組合成少數幾個不相關的主成分，保留最大變異量的訊息。B：應分離訊息和雜訊。C：應轉換成不相關且較少的變項。D：PCA 結果可以視覺化。',
    optionExplanations: { A: null, B: 'PCA 的目的是分離有用訊息與雜訊，而非將兩者結合在一起。', C: 'PCA 應將高度相關的變數轉換成少數不相關的主成分，而非產生更多的潛在變項。', D: 'PCA 提取的主成分可以透過散佈圖等方式進行視覺化呈現。' }
  },
  {
    id: 8,
    question: '關於不平衡學習的處理方式，下列敘述何者「不」正確？',
    options: [
      { label: 'A', text: '進行特徵選取來解決類別不平衡' },
      { label: 'B', text: '運用過度抽樣可避免模型過度配適' },
      { label: 'C', text: '運用正負樣本的懲罰權重來解決' },
      { label: 'D', text: '以薈萃式學習集成模型解決' }
    ],
    answer: 'B',
    chapter: '數據處理與特徵工程',
    explanation: '過度抽樣（Oversampling）會複製少數類樣本，反而容易導致過度配適（Overfitting），而非避免。特別是簡單的隨機過度抽樣。',
    optionExplanations: { A: '特徵選取可以移除不相關特徵，有助於改善類別不平衡問題，這是正確的做法。', B: null, C: '對正負樣本設定不同的懲罰權重（如 Cost-sensitive Learning）確實是處理不平衡的有效方法。', D: '薈萃式學習（Ensemble Learning）如 Bagging、Boosting 確實可用於改善類別不平衡問題。' }
  },
  {
    id: 9,
    question: '關於因素分析的概念，下列敘述何者「不」正確？',
    options: [
      { label: 'A', text: '資料經因素分析後不能以簡化後的因素對個體作分析' },
      { label: 'B', text: '因素分析在於從一群變數中找出少數具代表性的變數' },
      { label: 'C', text: '每個變數除受共同因素影響外也包含獨特因素' },
      { label: 'D', text: '因素分析是利用少數因素來解釋彼此有關係的變數' }
    ],
    answer: 'A',
    chapter: '統計基礎',
    explanation: '因素分析後得到的因素分數可以用於後續分析（如迴歸、集群等），所以「不能以簡化後的因素對個體作分析」是錯誤的。',
    optionExplanations: { A: null, B: '因素分析確實是從多個變數中萃取出少數具代表性的因素，這是正確的描述。', C: '每個變數確實同時受共同因素與獨特因素（唯一因素）影響，這是因素分析的基本假設。', D: '因素分析確實是利用少數潛在因素來解釋一群相互關聯的觀察變數，這是正確的。' }
  },
  {
    id: 10,
    question: '關於線性相依、線性獨立、正交與相關，下列敘述何者正確？',
    options: [
      { label: 'A', text: '線性獨立則兩者無關/正交' },
      { label: 'B', text: '線性相依則兩者相關' },
      { label: 'C', text: '線性相依則兩者非正交' },
      { label: 'D', text: '無關/正交則兩者線性獨立' }
    ],
    answer: 'C',
    chapter: '數學基礎',
    explanation: '如果兩個向量線性相依（一個是另一個的倍數），它們的內積不為零（除非其中一個是零向量），所以不會正交。A 不完全正確因為線性獨立不一定正交。B 和 D 的推論方向不嚴謹。',
    optionExplanations: { A: '線性獨立不一定正交，例如兩個不平行的向量線性獨立但未必互相垂直。', B: '線性相依不一定代表統計上的相關，兩者是不同層面的概念。', C: null, D: '無關/正交可推出線性獨立，但此選項的推論方向不夠嚴謹，且題目要求選正確的。' }
  },
  {
    id: 11,
    question: 'PCA 計算出 5 個特徵值 λ1=3.148, λ2=1.352, λ3=0.351, λ4=0.122, λ5=0.037，第1主成分解釋全體變數的變異數比例為何？',
    options: [
      { label: 'A', text: '62.9%' },
      { label: 'B', text: '90.0%' },
      { label: 'C', text: '67.7%' },
      { label: 'D', text: '87.3%' }
    ],
    answer: 'A',
    chapter: '統計基礎',
    explanation: '第1主成分解釋比例 = λ1 / (λ1+λ2+λ3+λ4+λ5) = 3.148 / (3.148+1.352+0.351+0.122+0.037) = 3.148 / 5.01 ≈ 62.8% ≈ 62.9%。',
    optionExplanations: { A: null, B: '90.0% 是前兩個主成分的累積解釋比例（(3.148+1.352)/5.01），不是第1主成分單獨的比例。', C: '67.7% 不符合計算結果，3.148/5.01 約為 62.9% 而非 67.7%。', D: '87.3% 不符合計算結果，可能混淆了累積比例的計算。' }
  },
  {
    id: 12,
    question: 'k 折交叉驗證，以下敘述何者正確？',
    options: [
      { label: 'A', text: 'k=10分10份7份訓練3份驗證' },
      { label: 'B', text: '通常重複k次以上取k-1次結果平均' },
      { label: 'C', text: '留一驗證法也是一種k-fold cross-validation' },
      { label: 'D', text: '資料依類別排序後依序分成10份' }
    ],
    answer: 'C',
    chapter: '機器學習基礎',
    explanation: '留一驗證法（LOOCV）是 k-fold 的特例，其中 k = 樣本數 N，每次只留1個樣本做驗證。A：k=10 是 9 份訓練 1 份驗證。B：重複 k 次取全部 k 次結果的均值。D：應隨機分組而非排序後分。',
    optionExplanations: { A: 'k=10 時是 9 份訓練、1 份驗證，而非 7 份訓練 3 份驗證。', B: 'k 折交叉驗證恰好重複 k 次，取全部 k 次結果的平均值，而非取 k-1 次。', C: null, D: '資料應隨機打散後分組，若依類別排序會導致各折資料分布不均勻。' }
  },
  {
    id: 13,
    question: '下列何者是較穩健（Robust）的相關性衡量方法？',
    options: [
      { label: 'A', text: '最小共變異數判別式法（MCD）' },
      { label: 'B', text: '肯德爾（Kendall）相關係數法' },
      { label: 'C', text: '皮爾森（Pearson）相關係數法' },
      { label: 'D', text: '史皮爾曼（Spearman）相關係數法' }
    ],
    answer: 'A',
    chapter: '統計基礎',
    explanation: 'MCD（Minimum Covariance Determinant）是專門設計用於穩健估計共變異數/相關性的方法，對離群值具有高度抗性。雖然 Spearman 和 Kendall 也比 Pearson 穩健，但 MCD 在統計學中被歸類為正式的穩健估計方法。',
    optionExplanations: { A: null, B: 'Kendall 相關係數雖比 Pearson 穩健，但不如 MCD 專門針對穩健估計設計。', C: 'Pearson 相關係數對離群值非常敏感，不屬於穩健的相關性衡量方法。', D: 'Spearman 相關係數雖有一定穩健性，但不如 MCD 這類專門的穩健估計方法。' }
  },
  {
    id: 14,
    question: '有 4 種交叉驗證方法：(1)LOOCV (2)5-fold (3)Bootstrap (4)10-fold。在約 1000 筆資料集中，執行時間排序何者正確？',
    options: [
      { label: 'A', text: '(1)>(3)>(4)>(2)' },
      { label: 'B', text: '(1)>(4)>(2)>(3)' },
      { label: 'C', text: '(3)>(4)>(2)>(1)' },
      { label: 'D', text: '(4)>(2)>(1)>(3)' }
    ],
    answer: 'A',
    chapter: '機器學習基礎',
    explanation: 'LOOCV 需迭代 1000 次（最慢），Bootstrap 通常設定數百到上千次重抽樣，10-fold 需 10 次，5-fold 需 5 次（最快）。排序：LOOCV > Bootstrap > 10-fold > 5-fold。',
    optionExplanations: { A: null, B: 'Bootstrap 的執行時間通常介於 LOOCV 和 10-fold 之間，此排序將 Bootstrap 放在最後是錯誤的。', C: '此排序將 LOOCV 放在最快是錯誤的，LOOCV 需迭代 1000 次應該是最慢的。', D: '此排序將 10-fold 放在最慢是錯誤的，LOOCV 迭代次數遠多於 10-fold。' }
  },
  {
    id: 15,
    question: '關於 CSV 檔案格式，下列何者「並非」CSV 的特性？',
    options: [
      { label: 'A', text: '列與列之間以換行分隔' },
      { label: 'B', text: '不支援中文資料' },
      { label: 'C', text: '儲存兩個維度的陣列資料' },
      { label: 'D', text: '欄與欄之間以逗號分隔' }
    ],
    answer: 'B',
    chapter: '數據基礎概念',
    explanation: 'CSV 是純文字檔案格式，完全支援中文資料（使用 UTF-8 編碼即可）。「不支援中文」是錯誤的。',
    optionExplanations: { A: 'CSV 的列與列之間確實以換行符號分隔，這是 CSV 的基本特性。', B: null, C: 'CSV 確實以列和欄的方式儲存二維陣列資料，這是正確的描述。', D: 'CSV 的全名就是 Comma-Separated Values，欄與欄之間確實以逗號分隔。' }
  }
]
