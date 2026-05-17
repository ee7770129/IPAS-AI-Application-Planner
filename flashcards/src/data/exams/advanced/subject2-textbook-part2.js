/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：subject2-textbook-part2.js
 * 功能：中級科目二 課本練習題（第 21-40 題）
 * 建立日期：2026-05-17
 * 版本：1.0.0
 */
export default [
    // ===== 第五章 大數據分析方法與工具 =====
    {
      id: 21,
      question: '在大數據的描述性分析中，最常用來呈現類別變數分佈的圖形是？',
      options: [
        { label: 'A', text: '折線圖' },
        { label: 'B', text: '箱型圖' },
        { label: 'C', text: '長條圖' },
        { label: 'D', text: '散佈圖' }
      ],
      answer: 'C',
      chapter: '大數據分析方法與工具',
      explanation: '長條圖可清楚顯示類別型變數的數量分佈，是描述性分析中的基礎視覺工具。',
      optionExplanations: { A: '折線圖適合時間趨勢，不是類別分佈。', B: '箱型圖顯示數值分佈（中位數、四分位距），不是類別分佈。', C: null, D: '散佈圖顯示兩個數值變數的關係。' }
    },
    {
      id: 22,
      question: '若要分析網站每日訪客數量的趨勢變化，最適合使用下列哪一種視覺化工具？',
      options: [
        { label: 'A', text: '熱力圖' },
        { label: 'B', text: '折線圖' },
        { label: 'C', text: '圓餅圖' },
        { label: 'D', text: '直方圖' }
      ],
      answer: 'B',
      chapter: '大數據分析方法與工具',
      explanation: '折線圖適合表現隨時間變動的連續數據，如日、週、月的趨勢觀察。',
      optionExplanations: { A: '熱力圖適合呈現矩陣型資料（如相關係數矩陣）。', B: null, C: '圓餅圖適合呈現比例組成，不適合趨勢。', D: '直方圖適合數值分佈，不適合時間趨勢。' }
    },
    {
      id: 23,
      question: '在大數據中進行關聯分析時，最常用來量化兩變數線性關係的指標為何？',
      options: [
        { label: 'A', text: '變異數' },
        { label: 'B', text: 't 值' },
        { label: 'C', text: '相關係數' },
        { label: 'D', text: 'z 分數' }
      ],
      answer: 'C',
      chapter: '大數據分析方法與工具',
      explanation: '相關係數（如 Pearson r）用於衡量兩變數間的線性關聯程度。',
      optionExplanations: { A: '變異數衡量單一變數的離散程度，不是兩變數關係。', B: 't 值是假設檢定的統計量，不直接量化關聯。', C: null, D: 'z 分數是標準化分數，不量化兩變數關係。' }
    },
    {
      id: 24,
      question: '為了分析社群網路使用者之間的互動結構，應使用下列哪種分析方法？',
      options: [
        { label: 'A', text: '文字探勘' },
        { label: 'B', text: '主成分分析' },
        { label: 'C', text: '圖論分析' },
        { label: 'D', text: '分群分析' }
      ],
      answer: 'C',
      chapter: '大數據分析方法與工具',
      explanation: '圖論分析可用於建構節點與邊的關係網路，適用於社群關係、推薦系統等情境。',
      optionExplanations: { A: '文字探勘分析文本內容，不是互動結構。', B: 'PCA 是降維方法，不分析網路結構。', C: null, D: '分群分析將資料分組，但不專門分析關係結構。' }
    },
    {
      id: 25,
      question: '在文字分析中，使用 TF-IDF 技術的主要目的是？',
      options: [
        { label: 'A', text: '去除標點符號' },
        { label: 'B', text: '將詞彙轉換為向量' },
        { label: 'C', text: '辨識常出現的關鍵詞並排除常見詞' },
        { label: 'D', text: '標示詞性與語法角色' }
      ],
      answer: 'C',
      chapter: '大數據分析方法與工具',
      explanation: 'TF-IDF 可強化具有辨識性的詞彙（高 TF），抑制文檔中普遍存在但不具代表性的詞語（高 IDF）。',
      optionExplanations: { A: '去除標點是文字前處理，不是 TF-IDF 的功能。', B: 'TF-IDF 確實產生向量，但主要目的是衡量詞彙重要性。', C: null, D: '標示詞性是 POS Tagging 的功能。' }
    },
    {
      id: 26,
      question: '下列哪一項屬於異常偵測技術常見的應用情境？',
      options: [
        { label: 'A', text: '定期報表自動生成' },
        { label: 'B', text: '用戶行為分群' },
        { label: 'C', text: '信用卡詐騙識別' },
        { label: 'D', text: '影片推薦排序' }
      ],
      answer: 'C',
      chapter: '大數據分析方法與工具',
      explanation: '異常偵測可用於發現違常模式，像是信用卡交易中異常消費、系統入侵等風險情境。',
      optionExplanations: { A: '報表生成是資料呈現，不是異常偵測。', B: '分群是非監督學習，與異常偵測不同。', C: null, D: '推薦排序是推薦系統，不是異常偵測。' }
    },
    {
      id: 27,
      question: '若要從大量原始變數中萃取低維的代表性特徵，最常使用哪一種降維技術？',
      options: [
        { label: 'A', text: 'K-means' },
        { label: 'B', text: 'PCA(主成分分析)' },
        { label: 'C', text: 't 檢定' },
        { label: 'D', text: 'SMOTE' }
      ],
      answer: 'B',
      chapter: '大數據分析方法與工具',
      explanation: 'PCA 是常見的線性降維方法，將原始特徵投影到新的主成分空間中，保留資料最大變異。',
      optionExplanations: { A: 'K-means 是分群方法，不是降維。', B: null, C: 't 檢定是假設檢定方法，不做降維。', D: 'SMOTE 是過採樣方法，不做降維。' }
    },
    {
      id: 28,
      question: '哪一種資料探勘技術可用於找出客戶購買行為中常見的組合規則？',
      options: [
        { label: 'A', text: '關聯規則分析' },
        { label: 'B', text: '分類分析' },
        { label: 'C', text: '時間序列分析' },
        { label: 'D', text: '迴歸分析' }
      ],
      answer: 'A',
      chapter: '大數據分析方法與工具',
      explanation: '關聯規則分析（如 Apriori 演算法）可找出項目間常見組合，例如「買牛奶常搭配買麵包」。',
      optionExplanations: { A: null, B: '分類分析預測類別標籤，不分析購買組合。', C: '時間序列分析預測趨勢，不分析購買組合。', D: '迴歸分析預測連續數值，不分析組合規則。' }
    },
    {
      id: 29,
      question: '箱型圖(Box Plot)如何呈現異常值？',
      options: [
        { label: 'A', text: '以箱體內部大小表示' },
        { label: 'B', text: '以特殊符號（如點或星號）單獨標記' },
        { label: 'C', text: '自動刪除異常值' },
        { label: 'D', text: '以中位數代表異常值' }
      ],
      answer: 'B',
      chapter: '大數據分析方法與工具',
      explanation: '箱型圖透過特殊符號（如點、星號）單獨標記超出鬚線範圍的異常值。',
      optionExplanations: { A: '箱體大小代表 IQR（中間 50% 資料範圍），不是異常值。', B: null, C: '箱型圖不會自動刪除異常值，只是標記出來。', D: '中位數是箱型圖中的橫線，不代表異常值。' }
    },
    {
      id: 30,
      question: '若企業需自動比對商品評論中出現的品牌名稱，建議使用哪一種處理流程？',
      options: [
        { label: 'A', text: '結構化資料匹配' },
        { label: 'B', text: '命名實體識別(NER)' },
        { label: 'C', text: '群集分析' },
        { label: 'D', text: '影像分類' }
      ],
      answer: 'B',
      chapter: '大數據分析方法與工具',
      explanation: 'NER 屬於 NLP 技術，可自動從文字中辨識出品牌、人名、地點等實體資訊。',
      optionExplanations: { A: '結構化資料匹配適合固定格式，不適合自由文字。', B: null, C: '群集分析分組資料，不辨識具體實體。', D: '影像分類處理圖片，不處理文字。' }
    },

    // ===== 第六章 大數據在 AI 之應用 =====
    {
      id: 31,
      question: '鑑別式 AI 模型的主要特性為何？',
      options: [
        { label: 'A', text: '可產生新內容樣本' },
        { label: 'B', text: '僅適用於無監督學習任務' },
        { label: 'C', text: '專注於資料分類與預測決策邊界' },
        { label: 'D', text: '無法使用結構化資料進行訓練' }
      ],
      answer: 'C',
      chapter: '大數據在AI之應用',
      explanation: '鑑別式 AI 模型（如邏輯迴歸、SVM）學習資料間的判別界線，廣泛應用於預測任務。',
      optionExplanations: { A: '產生新內容是生成式 AI，不是鑑別式。', B: '鑑別式 AI 主要用於監督式學習。', C: null, D: '鑑別式 AI 可以使用結構化資料。' }
    },
    {
      id: 32,
      question: '為了加速大數據環境下的 AI 模型訓練，以下哪一項為常見技術？',
      options: [
        { label: 'A', text: '早期停止(Early Stopping)' },
        { label: 'B', text: '批次分群(Mini-batching)' },
        { label: 'C', text: '混合精度訓練(Mixed Precision Training)' },
        { label: 'D', text: '主成分分析(PCA)' }
      ],
      answer: 'C',
      chapter: '大數據在AI之應用',
      explanation: '混合使用 16-bit 與 32-bit 浮點運算可減少訓練時間與記憶體使用量，提升效能。',
      optionExplanations: { A: 'Early Stopping 是防止過擬合，不是加速訓練。', B: 'Mini-batching 是分批處理，主要解決記憶體問題。', C: null, D: 'PCA 是降維方法，不直接加速模型訓練。' }
    },
    {
      id: 33,
      question: '在生成式 AI 中，若輸入為結構化資料並希望產出自然語言敘述，最適合使用下列哪類模型？',
      options: [
        { label: 'A', text: '決策樹' },
        { label: 'B', text: '強化學習模型' },
        { label: 'C', text: '語言生成模型' },
        { label: 'D', text: '圖論模型' }
      ],
      answer: 'C',
      chapter: '大數據在AI之應用',
      explanation: '生成式 AI 可根據輸入生成文字內容，GPT 是典型的文字生成架構。',
      optionExplanations: { A: '決策樹是分類/迴歸模型，不能生成自然語言。', B: '強化學習用於策略優化，不是文字生成。', C: null, D: '圖論模型分析網路結構，不生成語言。' }
    },
    {
      id: 34,
      question: '大數據對生成式 AI 內容品質的影響關鍵在於？',
      options: [
        { label: 'A', text: 'GPU 數量多寡' },
        { label: 'B', text: '訓練樣本是否具多樣性與語境一致性' },
        { label: 'C', text: 'API 回應速度' },
        { label: 'D', text: '是否使用 Python 編寫模型' }
      ],
      answer: 'B',
      chapter: '大數據在AI之應用',
      explanation: '生成式模型的品質極度依賴訓練資料的多樣性與語境品質，關係到語言流暢性與真實性。',
      optionExplanations: { A: 'GPU 影響訓練速度，但資料品質才是內容品質的關鍵。', B: null, C: 'API 速度是部署問題，不影響內容品質。', D: '程式語言選擇不影響生成內容品質。' }
    },
    {
      id: 35,
      question: '在 AI 模型訓練過程中，為避免使用含有個資的敏感欄位，常用哪一種資料處理方法？',
      options: [
        { label: 'A', text: '資料標註' },
        { label: 'B', text: '資料蒐集' },
        { label: 'C', text: '資料匿名化' },
        { label: 'D', text: '資料分群' }
      ],
      answer: 'C',
      chapter: '大數據在AI之應用',
      explanation: '資料匿名化處理如移除姓名、轉換欄位等，可降低個資風險並符合法規要求。',
      optionExplanations: { A: '資料標註是為資料加標籤，不保護隱私。', B: '資料蒐集是收集資料，不是保護隱私。', C: null, D: '資料分群是分組，不保護隱私。' }
    },
    {
      id: 36,
      question: '下列哪一項技術可強化 AI 模型對使用者資料的隱私保護？',
      options: [
        { label: 'A', text: '特徵擴增(Feature Augmentation)' },
        { label: 'B', text: '差分隱私(Differential Privacy)' },
        { label: 'C', text: '貝氏分類器' },
        { label: 'D', text: '強化學習' }
      ],
      answer: 'B',
      chapter: '大數據在AI之應用',
      explanation: '差分隱私透過加噪機制保護個別資料不被逆推出，即使在公開模型中也難以重建原始資料。',
      optionExplanations: { A: '特徵擴增增加特徵，不保護隱私。', B: null, C: '貝氏分類器是分類方法，不保護隱私。', D: '強化學習是訓練策略，不保護隱私。' }
    },
    {
      id: 37,
      question: '若企業欲將醫療資料用於訓練 AI 模型，下列哪一項最符合合法合規原則？',
      options: [
        { label: 'A', text: '將所有資料匿名處理後存於海外伺服器' },
        { label: 'B', text: '取得合法授權與病患同意，並執行隱私強化' },
        { label: 'C', text: '僅標註患者年齡即可訓練' },
        { label: 'D', text: '合併不同院所資料以擴大樣本量，不需其他處理' }
      ],
      answer: 'B',
      chapter: '大數據在AI之應用',
      explanation: '處理含敏感資訊之醫療資料時，必須符合隱私法規與倫理原則，包括告知、同意與匿名化處理。',
      optionExplanations: { A: '匿名化是對的，但存於海外伺服器可能違反資料在地化法規。', B: null, C: '只標年齡不夠，還有其他可識別資訊需處理。', D: '合併資料仍需授權和隱私處理。' }
    },
    {
      id: 38,
      question: '為確保 AI 系統合規性與可追溯性，應建立哪一種制度？',
      options: [
        { label: 'A', text: '模型評分制度' },
        { label: 'B', text: '模型自動訓練流程' },
        { label: 'C', text: '資料版本管理與操作紀錄制度' },
        { label: 'D', text: '開源資料集快速上線制度' }
      ],
      answer: 'C',
      chapter: '大數據在AI之應用',
      explanation: '版本管理可確保資料來源、處理歷程清楚記錄，對稽核與合規性追蹤至關重要。',
      optionExplanations: { A: '評分制度評估模型品質，但不確保可追溯性。', B: '自動訓練提升效率，但不保證合規性。', C: null, D: '快速上線反而可能跳過合規審查。' }
    },
    {
      id: 39,
      question: '在企業內部推動 AI 模型落地時，哪一種治理措施最能確保模型部署後持續符合法規與道德標準？',
      options: [
        { label: 'A', text: '部署後由 IT 團隊定期觀察效能' },
        { label: 'B', text: '設定固定訓練資料更新週期' },
        { label: 'C', text: '導入 AI 治理框架與跨部門監管流程' },
        { label: 'D', text: '採購更多模型訓練設備以強化能力' }
      ],
      answer: 'C',
      chapter: '大數據在AI之應用',
      explanation: 'AI 治理需結合技術、法務、業務等部門共同制定監督機制，確保風險控制與合規落實。',
      optionExplanations: { A: '只靠 IT 觀察效能不夠，需跨部門監管。', B: '固定更新週期不能應對突發的法規或道德問題。', C: null, D: '採購設備是資源問題，不是治理措施。' }
    },
    {
      id: 40,
      question: '若欲在大數據環境中有效訓練深度學習模型，以下哪一項策略最常用於解決資料與運算資源不對稱的問題？',
      options: [
        { label: 'A', text: '將所有資料轉存為影像格式以提升讀取效率' },
        { label: 'B', text: '將模型拆解為多個子模型並分別部署於本機' },
        { label: 'C', text: '採用分散式訓練與硬體加速架構' },
        { label: 'D', text: '改以監督式學習取代非監督式學習以降低負載' }
      ],
      answer: 'C',
      chapter: '大數據在AI之應用',
      explanation: '在面對龐大資料量與高計算需求時，常採用 GPU/TPU 加速與分散式訓練架構以縮短訓練時間並提升效能。',
      optionExplanations: { A: '轉為影像格式不會提升效率，反而可能增加資料量。', B: '拆解子模型不是分散式訓練的正確做法。', C: null, D: '學習方式的選擇取決於任務，不是解決運算問題的策略。' }
    }
  ]
