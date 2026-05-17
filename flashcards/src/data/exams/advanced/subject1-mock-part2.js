/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：subject1-mock-part2.js
 * 功能：模擬題 科目一（第 48-94 題）
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
    },
    {
      id: 72,
      question: '量子運算 (Quantum Computing) 對 AI 的潛在影響是？',
      options: [
        { label: 'A', text: 'AI 訓練速度顯著提升' },
        { label: 'B', text: 'AI 模型將無需數據訓練' },
        { label: 'C', text: 'AI 無法與量子運算結合' },
        { label: 'D', text: 'AI 只能應用於圖像識別' }
      ],
      answer: 'A',
      chapter: '3.4 多模態人工智慧應用',
      explanation: '量子運算可加速複雜計算，提升AI訓練速度，特別是在大規模數據處理中。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 73,
      question: 'AI 在自動化程式碼生成 (如 GitHub Copilot) 的應用，最可能的挑戰是？',
      options: [
        { label: 'A', text: '確保生成程式碼的安全性' },
        { label: 'B', text: 'AI 產生的程式碼無法被執行' },
        { label: 'C', text: 'AI 只能產生 Python 程式碼' },
        { label: 'D', text: '無法應用於軟體開發' }
      ],
      answer: 'A',
      chapter: '3.4 多模態人工智慧應用',
      explanation: '自動化程式碼生成需確保生成代碼的安全性和正確性，避免引入漏洞。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 74,
      question: 'AI 在智慧城市 (Smart City) 應用中的主要挑戰不包括？',
      options: [
        { label: 'A', text: '交通管理與即時數據處理的需求' },
        { label: 'B', text: 'AI 演算法的能源消耗問題' },
        { label: 'C', text: '增強 AI 在社會治理中的決策權限' },
        { label: 'D', text: '數據隱私與資安問題' }
      ],
      answer: 'C',
      chapter: '3.4 多模態人工智慧應用',
      explanation: '智慧城市的AI挑戰包括即時處理、能耗和隱私問題，社會治理決策權限非技術挑戰。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 75,
      question: 'AI 在教育領域的應用主要目標是？',
      options: [
        { label: 'A', text: '完全取代人類教師' },
        { label: 'B', text: '對學生需求提供個人化學習體驗' },
        { label: 'C', text: '限制 AI 在學術研究的應用' },
        { label: 'D', text: '讓學生被動學習 AI 技術' }
      ],
      answer: 'B',
      chapter: '3.4 多模態人工智慧應用',
      explanation: 'AI在教育中通過分析學生數據提供個人化學習，提升學習效果而非取代教師。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 76,
      question: 'AI 在自動駕駛領域的發展瓶頸主要是？',
      options: [
        { label: 'A', text: 'AI 演算法的計算速度' },
        { label: 'B', text: '環境變數的複雜性與未預測事件的應對能力' },
        { label: 'C', text: '只能應用於高速公路，無法用於城市道路' },
        { label: 'D', text: 'AI 模型無法學習駕駛行為' }
      ],
      answer: 'B',
      chapter: '3.4 多模態人工智慧應用',
      explanation: '自動駕駛需處理複雜環境和突發事件，環境變數和應對能力是主要瓶頸。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 77,
      question: 'AI 在醫療影像分析的應用中，最重要的數據需求是？',
      options: [
        { label: 'A', text: '擁有大量標註清楚的高品質醫療影像數據' },
        { label: 'B', text: '快速的數據處理速度' },
        { label: 'C', text: '標準化的醫療報告格式' },
        { label: 'D', text: '公開的醫療影像數據庫' }
      ],
      answer: 'A',
      chapter: '3.4 多模態人工智慧應用',
      explanation: '醫療影像分析需高品質、標註清楚的數據，確保模型的準確性和可靠性。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 78,
      question: '根據傳統產業公司的構想評估表，為了依專利佈局分析技術發展趨勢，導入AI的主要必要性為何？',
      options: [
        { label: 'A', text: '減少資深同仁離開造成的整體經驗流失' },
        { label: 'B', text: '縮短開發試誤期及資源浪費' },
        { label: 'C', text: '降低人員留任率' },
        { label: 'D', text: '需先匯入全球各地專利資料，透過預發展技術的關鍵字來檢索相關專利熱度及投入的可行性' }
      ],
      answer: 'D',
      chapter: '3.4 多模態人工智慧應用',
      explanation: 'AI通過分析全球專利數據和關鍵字，評估技術趨勢，降低試誤成本。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 79,
      question: '在評估員工培訓計劃是否能提高生產力的原因推斷案例中，作為控制變量收集的員工背景信息不包含？',
      options: [
        { label: 'A', text: '年齡' },
        { label: 'B', text: '性別' },
        { label: 'C', text: '培訓課程參與時長' },
        { label: 'D', text: '教育水平' }
      ],
      answer: 'C',
      chapter: '3.4 多模態人工智慧應用',
      explanation: '培訓課程參與時長是因變量或結果變量，非控制變量；年齡、性別和教育水平是背景控制變量。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 80,
      question: '在自動駕駛車輛的行人識別系統中，通過反事實分析發現模型對光照條件的變化反應過於劇烈，下列哪個調整措施不是針對此問題的可能解決方案？',
      options: [
        { label: 'A', text: '增加訓練數據的多樣性' },
        { label: 'B', text: '調整模型的特徵權重' },
        { label: 'C', text: '引入輔助特徵' },
        { label: 'D', text: '優化模型部署的硬體配置' }
      ],
      answer: 'D',
      chapter: '3.4 多模態人工智慧應用',
      explanation: '硬體配置優化與光照條件敏感性無直接關係，數據多樣性和特徵調整更有效。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 81,
      question: '在醫療領域，知識挖掘不被應用於？',
      options: [
        { label: 'A', text: '病歷分析' },
        { label: 'B', text: '基因研究' },
        { label: 'C', text: '藥物研發' },
        { label: 'D', text: '醫療影像的增強處理' }
      ],
      answer: 'D',
      chapter: '3.4 多模態人工智慧應用',
      explanation: '醫療影像增強屬於電腦視覺，知識挖掘主要用於病歷、基因和藥物研發的數據分析。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 82,
      question: '在AI應用於客戶服務時，聊天機器人（Chatbot）的主要優勢是？',
      options: [
        { label: 'A', text: '完全取代人類客服' },
        { label: 'B', text: '提供24/7即時回應並降低人力成本' },
        { label: 'C', text: '無需任何數據訓練' },
        { label: 'D', text: '僅能處理簡單的查詢' }
      ],
      answer: 'B',
      chapter: '3.4 多模態人工智慧應用',
      explanation: '聊天機器人提供全天候服務，降低人力成本，同時保留複雜問題給人類客服。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 83,
      question: 'AI 導入評估時，主要關注以下哪個因素？',
      options: [
        { label: 'A', text: '企業財務狀況' },
        { label: 'B', text: 'AI 模型的計算成本、數據可用性、技術適配性' },
        { label: 'C', text: '競爭對手的 AI 技術應用狀況' },
        { label: 'D', text: '員工的薪資結構' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: 'AI導入評估需考慮計算成本、數據可用性和技術適配性，這些直接影響項目的可行性和效果。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 84,
      question: 'AI 風險管理主要考量以下哪個風險？',
      options: [
        { label: 'A', text: '硬體設備損壞風險' },
        { label: 'B', text: 'AI 產生偏見與數據隱私風險' },
        { label: 'C', text: '企業品牌風險' },
        { label: 'D', text: '法律合規風險' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: 'AI風險管理中，偏見和數據隱私是主要風險，可能導致不公平決策或違反法規。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 85,
      question: 'AI 導入規劃時，以下哪個步驟最先進行？',
      options: [
        { label: 'A', text: '選擇 AI 平台' },
        { label: 'B', text: '確定應用場景與需求分析' },
        { label: 'C', text: '設計 AI 模型' },
        { label: 'D', text: '訓練數據' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '確定應用場景和需求分析是AI導入的首要步驟，確保後續工作與業務目標一致。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 86,
      question: 'AI 導入評估報告中，哪個指標最能反映模型的準確度？',
      options: [
        { label: 'A', text: '訓練時間' },
        { label: 'B', text: '模型權重大小' },
        { label: 'C', text: '混淆矩陣（Confusion Matrix）' },
        { label: 'D', text: 'GPU 計算能力' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '混淆矩陣提供真陽性、假陽性等指標，直接反映模型的預測準確度。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 87,
      question: '在 AI 模型部署時，選擇邊緣運算的主要優勢是？',
      options: [
        { label: 'A', text: '降低雲端運算成本並提高即時性' },
        { label: 'B', text: '提供無限的存儲空間' },
        { label: 'C', text: '能夠減少對 AI 模型的需求' },
        { label: 'D', text: '保證 100% 無延遲' }
      ],
      answer: 'A',
      chapter: '4.3 AI 風險管理',
      explanation: '邊緣運算將計算移到設備端，降低雲端成本並提升即時性，適合低延遲場景。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 88,
      question: 'AI 項目導入時，影響可行性的主要因素不包括？',
      options: [
        { label: 'A', text: '技術成熟度' },
        { label: 'B', text: '訓練數據的可用性' },
        { label: 'C', text: '企業組織結構' },
        { label: 'D', text: '模型的推理時間' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '企業組織結構對AI項目可行性的直接影響較小，技術成熟度和數據可用性更關鍵。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 89,
      question: 'AI 風險管理過程中，應如何降低 AI 偏見的風險？',
      options: [
        { label: 'A', text: '使用更多 GPU 訓練模型' },
        { label: 'B', text: '增加數據來源的多樣性' },
        { label: 'C', text: '使用較小的數據集' },
        { label: 'D', text: '讓 AI 自動選擇訓練數據' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '增加數據來源多樣性可減少偏見，確保模型學習到更全面的特徵。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 90,
      question: 'AI 導入規劃時，哪個步驟應最晚進行？',
      options: [
        { label: 'A', text: '需求分析' },
        { label: 'B', text: 'AI 模型測試與驗證' },
        { label: 'C', text: '風險評估' },
        { label: 'D', text: 'AI 模型部署' }
      ],
      answer: 'D',
      chapter: '4.3 AI 風險管理',
      explanation: '模型部署是AI導入的最後階段，需在需求分析、測試和風險評估完成後進行。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 91,
      question: '以下哪種方法可以用來評估 AI 系統的可解釋性？',
      options: [
        { label: 'A', text: '混淆矩陣' },
        { label: 'B', text: 'LIME（Local Interpretable Model-Agnostic Explanations）' },
        { label: 'C', text: 'Adam 優化器' },
        { label: 'D', text: '梯度下降法' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: 'LIME是一種可解釋性技術，通過局部線性近似解釋模型預測，提升透明度。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 92,
      question: 'AI 模型在企業應用中的最大挑戰之一是？',
      options: [
        { label: 'A', text: '訓練時間過短' },
        { label: 'B', text: 'AI 決策過於透明' },
        { label: 'C', text: '缺乏可解釋性與合規性問題' },
        { label: 'D', text: '計算能力過剩' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '缺乏可解釋性和合規性是AI應用的主要挑戰，可能影響信任度和法律合規。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 93,
      question: '企業導入 AI 技術時，最適合用於實驗性部署的環境是？',
      options: [
        { label: 'A', text: '生產環境' },
        { label: 'B', text: '雲端測試環境' },
        { label: 'C', text: '本地筆記型電腦' },
        { label: 'D', text: '社交媒體平台' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '雲端測試環境提供可控的測試條件，適合實驗性部署，減少對生產環境的影響。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 94,
      question: 'AI 模型的部署策略中，使用「A/B 測試」的主要目的為何？',
      options: [
        { label: 'A', text: '測試不同 AI 模型的表現' },
        { label: 'B', text: '讓 AI 自動選擇最佳模型' },
        { label: 'C', text: '降低 AI 訓練成本' },
        { label: 'D', text: '縮短開發週期' }
      ],
      answer: 'A',
      chapter: '4.3 AI 風險管理',
      explanation: 'A/B測試用於比較不同模型或配置的表現，幫助選擇最佳方案。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    }
]
