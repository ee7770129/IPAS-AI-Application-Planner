/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：subject1-mock-part2a.js
 * 功能：模擬題 科目一（第 48-71 題）
 * 建立日期：2026-05-17
 * 版本：1.0.0
 */
export default [
    {
      id: 48,
      question: '生成式 AI 主要使用以下哪種技術？',
      options: [
        { label: 'A', text: '強化學習' },
        { label: 'B', text: '監督學習' },
        { label: 'C', text: '生成對抗網路（GAN）' },
        { label: 'D', text: '主成分分析（PCA）' }
      ],
      answer: 'C',
      chapter: '3.3 生成式AI技術與應用',
      explanation: '生成對抗網路（GAN）是生成式AI的核心技術，通過生成器和判別器對抗學習生成新數據。強化學習和監督學習主要用於其他任務，PCA用於降維。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 49,
      question: '在 AI 圖像生成技術中，GAN（生成對抗網路）包含哪兩個主要組件？',
      options: [
        { label: 'A', text: '判別器（Discriminator）與生成器（Generator）' },
        { label: 'B', text: 'RNN 與 CNN' },
        { label: 'C', text: 'Encoder 與 Decoder' },
        { label: 'D', text: '探索策略與獎勵機制' }
      ],
      answer: 'A',
      chapter: '3.3 生成式AI技術與應用',
      explanation: 'GAN由生成器（生成數據）和判別器（判斷真偽）組成，通過對抗訓練生成逼真數據。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 50,
      question: '生成式 AI（Generative AI）技術的核心應用場景不包括？',
      options: [
        { label: 'A', text: '圖像生成' },
        { label: 'B', text: '文本摘要' },
        { label: 'C', text: 'AI 模型監管與審計' },
        { label: 'D', text: '語音合成' }
      ],
      answer: 'C',
      chapter: '3.3 生成式AI技術與應用',
      explanation: '生成式AI主要用於生成新內容，如圖像、文本和語音，模型監管與審計屬於管理範疇。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 51,
      question: '在生成式 AI 模型中，GAN 的主要結構包括？',
      options: [
        { label: 'A', text: '編碼器與解碼器' },
        { label: 'B', text: '生成器與判別器' },
        { label: 'C', text: '記憶體與控制器' },
        { label: 'D', text: '層級式貝葉斯模型' }
      ],
      answer: 'B',
      chapter: '3.3 生成式AI技術與應用',
      explanation: 'GAN由生成器和判別器組成，通過對抗訓練生成逼真數據。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 52,
      question: '在影像處理領域，GAN 被廣泛應用於？',
      options: [
        { label: 'A', text: '影像降噪' },
        { label: 'B', text: '類別分類' },
        { label: 'C', text: '影像風格轉換與生成' },
        { label: 'D', text: '邊緣檢測' }
      ],
      answer: 'C',
      chapter: '3.3 生成式AI技術與應用',
      explanation: 'GAN通過生成器和判別器的對抗學習，廣泛用於影像風格轉換（如風格遷移）和生成逼真圖像。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 53,
      question: '在 AI 生成內容 (如 ChatGPT) 的應用中，哪項屬於主要風險？',
      options: [
        { label: 'A', text: 'AI 可能生成不準確或偏誤的信息' },
        { label: 'B', text: 'AI 內容創作成本過高' },
        { label: 'C', text: 'AI 只能生成文字，無法創建圖片或音樂' },
        { label: 'D', text: 'AI 內容無法用於企業應用' }
      ],
      answer: 'A',
      chapter: '3.3 生成式AI技術與應用',
      explanation: '生成式AI可能因訓練數據偏見或錯誤生成不準確內容，需人工審核降低風險。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 54,
      question: '生成式AI在社交媒體內容生成方面的應用包括？',
      options: [
        { label: 'A', text: '自動化客戶服務回覆' },
        { label: 'B', text: '自動生成貼文和個人化內容推薦' },
        { label: 'C', text: '預測用戶的購買行為' },
        { label: 'D', text: '分析競爭對手的行銷策略' }
      ],
      answer: 'B',
      chapter: '3.3 生成式AI技術與應用',
      explanation: '生成式AI可生成社交媒體貼文和個人化內容，提升用戶參與度。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 55,
      question: '語音合成的主要依賴於？',
      options: [
        { label: 'A', text: '說話者的語氣和情感' },
        { label: 'B', text: '文本內容和選定的朗讀聲音' },
        { label: 'C', text: '環境噪音的大小' },
        { label: 'D', text: '語音輸入設備的品質' }
      ],
      answer: 'B',
      chapter: '3.3 生成式AI技術與應用',
      explanation: '語音合成基於輸入文本和選定的聲音模型生成語音，與環境噪音無直接關係。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 56,
      question: '生成式AI的主要功能是？',
      options: [
        { label: 'A', text: '識別圖像中的物件及其位置' },
        { label: 'B', text: '分析文本中的情感和態度' },
        { label: 'C', text: '基於學習到的模式生成新的、原創的內容' },
        { label: 'D', text: '從文本中提取關鍵詞和重要資訊' }
      ],
      answer: 'C',
      chapter: '3.3 生成式AI技術與應用',
      explanation: '生成式AI通過學習數據模式生成新內容，如文本、圖像或音訊。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 57,
      question: '在遊戲開發中，生成式AI不被應用於？',
      options: [
        { label: 'A', text: '遊戲場景生成' },
        { label: 'B', text: '角色設計' },
        { label: 'C', text: '故事情節創作' },
        { label: 'D', text: '遊戲物理引擎的優化' }
      ],
      answer: 'D',
      chapter: '3.3 生成式AI技術與應用',
      explanation: '遊戲物理引擎優化屬於數值計算領域，生成式AI主要用於場景、角色和劇情創作。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 58,
      question: '鑑別式AI與生成式AI的主要區別在於？',
      options: [
        { label: 'A', text: '鑑別式AI使用監督式學習，生成式AI使用非監督式學習' },
        { label: 'B', text: '鑑別式AI處理結構化數據，生成式AI處理非結構化數據' },
        { label: 'C', text: '鑑別式AI用於分類和預測，生成式AI用於創造新的數據實例' },
        { label: 'D', text: '鑑別式AI在雲端運行，生成式AI在邊緣設備運行' }
      ],
      answer: 'C',
      chapter: '3.3 生成式AI技術與應用',
      explanation: '鑑別式AI專注於分類和預測，生成式AI則生成新數據實例。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 59,
      question: '在使用生成式AI進行內容創作時，如何降低生成錯誤或不當內容的風險？',
      options: [
        { label: 'A', text: '增加模型的參數數量' },
        { label: 'B', text: '對生成內容進行人工審核' },
        { label: 'C', text: '使用更少的訓練數據' },
        { label: 'D', text: '關閉模型的學習功能' }
      ],
      answer: 'B',
      chapter: '3.3 生成式AI技術與應用',
      explanation: '人工審核能有效檢查生成內容，確保其準確性和適當性，降低錯誤或不當內容的風險。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 60,
      question: '多模態人工智慧應用的核心概念是？',
      options: [
        { label: 'A', text: '單一數據來源的處理' },
        { label: 'B', text: '將不同類型的數據（如文本、影像、音訊）結合分析' },
        { label: 'C', text: '使用單一神經網路解決所有問題' },
        { label: 'D', text: '只關注影像數據處理' }
      ],
      answer: 'B',
      chapter: '3.4 多模態人工智慧應用',
      explanation: '多模態AI的核心是整合和分析多種數據類型（如文本、影像、音訊），以實現更全面的理解和應用。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 61,
      question: 'AI 系統應用於醫療領域時，以下哪個問題是企業需要特別考量的？',
      options: [
        { label: 'A', text: 'AI 訓練數據的合規性與隱私保護' },
        { label: 'B', text: 'AI 使用的程式語言' },
        { label: 'C', text: 'AI 模型的執行速度' },
        { label: 'D', text: 'AI 的能源消耗' }
      ],
      answer: 'A',
      chapter: '3.4 多模態人工智慧應用',
      explanation: '醫療領域的AI應用需確保數據合規性和隱私保護，符合法規如HIPAA。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 62,
      question: 'AI 在智慧城市應用中，可以提供哪些關鍵價值？',
      options: [
        { label: 'A', text: '優化交通管理與能源分配' },
        { label: 'B', text: '增強城市的地震預測能力' },
        { label: 'C', text: '減少城市建設的成本' },
        { label: 'D', text: '完全取代人類進行決策' }
      ],
      answer: 'A',
      chapter: '3.4 多模態人工智慧應用',
      explanation: 'AI在智慧城市中通過數據分析優化交通和能源管理，提升城市效率。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 63,
      question: 'AI 在自動駕駛系統中的主要挑戰是？',
      options: [
        { label: 'A', text: '確保即時性與安全性' },
        { label: 'B', text: '減少 AI 的運算成本' },
        { label: 'C', text: '增加汽車的耗能' },
        { label: 'D', text: '確保 AI 無需數據學習' }
      ],
      answer: 'A',
      chapter: '3.4 多模態人工智慧應用',
      explanation: '自動駕駛需即時處理複雜環境數據，確保安全性和即時性是主要挑戰。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 64,
      question: '在多模態 AI 應用中，主要挑戰之一是？',
      options: [
        { label: 'A', text: '訓練時無法使用 GPU' },
        { label: 'B', text: '不同數據模態之間的對齊與融合' },
        { label: 'C', text: '無法與 NLP 結合使用' },
        { label: 'D', text: '只能應用於語音識別' }
      ],
      answer: 'B',
      chapter: '3.4 多模態人工智慧應用',
      explanation: '多模態AI需將文本、圖像等不同模態數據對齊和融合，是一大技術挑戰。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 65,
      question: 'AI 應用在醫療領域時，最重要的倫理考量是？',
      options: [
        { label: 'A', text: 'AI 決策的準確性高於人類醫生' },
        { label: 'B', text: '確保 AI 決策過程透明，並提供解釋' },
        { label: 'C', text: '讓 AI 自行決定治療方案' },
        { label: 'D', text: '只需考慮 AI 訓練數據的大小' }
      ],
      answer: 'B',
      chapter: '3.4 多模態人工智慧應用',
      explanation: '醫療領域的AI需透明且可解釋，以確保醫生和患者信任並符合倫理規範。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 66,
      question: 'AI 自動駕駛系統若發生事故，法律責任的主要爭議點是？',
      options: [
        { label: 'A', text: '車輛製造商是否應負責' },
        { label: 'B', text: 'AI 模型的準確度是否達標' },
        { label: 'C', text: '事故是否與 AI 演算法決策有關' },
        { label: 'D', text: '以上皆是' }
      ],
      answer: 'D',
      chapter: '3.4 多模態人工智慧應用',
      explanation: '自動駕駛事故的法律責任涉及製造商、模型準確性和算法決策等多方面因素。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 67,
      question: '在零售業中，AI 主要可應用於？',
      options: [
        { label: 'A', text: '顧客行為分析與預測' },
        { label: 'B', text: '產品標籤自動生成' },
        { label: 'C', text: '供應鏈管理最佳化' },
        { label: 'D', text: '以上皆是' }
      ],
      answer: 'D',
      chapter: '3.4 多模態人工智慧應用',
      explanation: 'AI在零售業可應用於顧客行為分析、標籤生成和供應鏈優化，提升效率和體驗。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 68,
      question: 'AI 在金融產業中的應用，最可能涉及哪種技術？',
      options: [
        { label: 'A', text: '強化學習 (Reinforcement Learning)' },
        { label: 'B', text: '區塊鏈與 AI 結合的風險分析' },
        { label: 'C', text: '機器學習的詐欺偵測' },
        { label: 'D', text: '以上皆是' }
      ],
      answer: 'D',
      chapter: '3.4 多模態人工智慧應用',
      explanation: '金融業的AI應用涵蓋強化學習、區塊鏈風險分析和詐欺偵測等多種技術。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 69,
      question: 'AI 在醫療診斷中的應用，主要挑戰不包括？',
      options: [
        { label: 'A', text: '確保 AI 模型的透明度與可解釋性' },
        { label: 'B', text: '訓練數據的品質與代表性' },
        { label: 'C', text: '設計比醫生更快的診斷決策流程' },
        { label: 'D', text: '確保 AI 符合醫療法規' }
      ],
      answer: 'C',
      chapter: '3.4 多模態人工智慧應用',
      explanation: '醫療AI的挑戰在於透明性、數據品質和法規合規，速度並非核心挑戰。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 70,
      question: 'AI 在供應鏈管理中的應用，主要目標是？',
      options: [
        { label: 'A', text: '最佳化庫存與物流配送' },
        { label: 'B', text: '減少 AI 相關技術的使用' },
        { label: 'C', text: '降低供應鏈數據的收集量' },
        { label: 'D', text: '確保 AI 不影響人員決策' }
      ],
      answer: 'A',
      chapter: '3.4 多模態人工智慧應用',
      explanation: 'AI在供應鏈管理中通過數據分析優化庫存和物流，提升效率和成本效益。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 71,
      question: '目前 AI 的技術發展趨勢不包括？',
      options: [
        { label: 'A', text: 'AI 模型越來越小型化' },
        { label: 'B', text: '增強 AI 模型的計算效率' },
        { label: 'C', text: '減少 AI 在日常生活的應用' },
        { label: 'D', text: 'AI 的自適應學習能力提升' }
      ],
      answer: 'C',
      chapter: '3.4 多模態人工智慧應用',
      explanation: 'AI技術趨勢包括模型小型化、效率提升和自適應學習，應用範圍持續擴大而非減少。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    }
]
