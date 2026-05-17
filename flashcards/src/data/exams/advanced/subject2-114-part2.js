/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：subject2-114-part2.js
 * 功能：114 年歷屆考題 科目二（第 26-50 題）
 * 建立日期：2026-05-17
 * 版本：1.0.0
 */

export default [
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
