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
      optionExplanations: { A: '強化學習主要用於決策優化（如遊戲、機器人控制），並非生成式AI的核心技術。', B: '監督學習用於分類與預測任務，屬於鑑別式AI的範疇，而非生成式AI。', C: null, D: '主成分分析（PCA）是一種降維技術，用於資料壓縮與特徵提取，與內容生成無關。' }
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
      optionExplanations: { A: null, B: 'RNN 與 CNN 是不同類型的神經網路架構，並非 GAN 的兩個組件。', C: 'Encoder 與 Decoder 是自編碼器（Autoencoder）或 Seq2Seq 模型的組件，不是 GAN 的結構。', D: '探索策略與獎勵機制屬於強化學習的核心概念，與 GAN 無關。' }
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
      optionExplanations: { A: '圖像生成是生成式AI的核心應用場景之一，例如 DALL-E、Stable Diffusion 等。', B: '文本摘要屬於自然語言生成任務，是生成式AI的典型應用。', C: null, D: '語音合成（如 TTS）是生成式AI的重要應用，可將文字轉為自然語音。' }
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
      optionExplanations: { A: '編碼器與解碼器是自編碼器（Autoencoder）或 Transformer 的結構，並非 GAN 的主要組成。', B: null, C: '記憶體與控制器是神經圖靈機（NTM）等記憶增強模型的組件，與 GAN 無關。', D: '層級式貝葉斯模型屬於機率圖模型，是完全不同的統計建模方法。' }
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
      optionExplanations: { A: '影像降噪雖可用深度學習處理，但並非 GAN 最廣泛的應用場景。', B: '類別分類屬於鑑別式AI的任務，GAN 的核心是生成而非分類。', C: null, D: '邊緣檢測是傳統電腦視覺技術（如 Canny、Sobel），不需要 GAN。' }
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
      optionExplanations: { A: null, B: '生成式AI大幅降低了內容創作成本，高成本並非其主要風險。', C: '現代生成式AI已能創建圖片、音樂、影片等多種內容，不僅限於文字。', D: 'AI生成內容已廣泛應用於企業的行銷、客服、報告撰寫等場景。' }
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
      optionExplanations: { A: '自動化客服回覆屬於對話式AI應用，不屬於社交媒體內容生成的範疇。', B: null, C: '預測購買行為屬於預測分析（鑑別式AI），不是生成式AI在社交媒體的應用。', D: '分析競爭對手策略屬於商業智慧分析，並非生成式AI的社交媒體內容生成功能。' }
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
      optionExplanations: { A: '語氣和情感是語音合成的輔助參數，但主要依賴的是文本內容與聲音模型。', B: null, C: '環境噪音影響的是語音辨識（輸入端），而非語音合成（輸出端）。', D: '語音輸入設備與語音辨識有關，語音合成是將文字轉為語音，不需要輸入設備。' }
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
      optionExplanations: { A: '物件識別與定位屬於電腦視覺中的鑑別式AI任務，不是生成式AI的主要功能。', B: '情感分析屬於自然語言處理中的分類任務，是鑑別式AI的應用。', C: null, D: '關鍵詞提取屬於資訊擷取任務，是分析既有內容而非生成新內容。' }
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
      optionExplanations: { A: '遊戲場景生成是生成式AI的典型應用，可自動產生地圖、地形等內容。', B: '角色設計可透過生成式AI自動生成角色外觀、造型等視覺元素。', C: '故事情節創作是生成式AI在遊戲中的應用之一，可自動產生對話與劇情。', D: null }
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
      optionExplanations: { A: '兩者都可使用監督式或非監督式學習，學習方式並非兩者的主要區別。', B: '鑑別式與生成式AI都能處理結構化和非結構化數據，數據類型不是區分標準。', C: null, D: '兩者的運行環境取決於部署策略，與雲端或邊緣設備無必然關係。' }
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
      optionExplanations: { A: '增加參數數量可能提升模型能力，但不能直接降低生成錯誤或不當內容的風險。', B: null, C: '使用更少的訓練數據反而會降低模型品質，增加生成錯誤內容的機率。', D: '關閉學習功能會使模型無法運作，這不是合理的風險管控方式。' }
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
      optionExplanations: { A: '單一數據來源的處理屬於單模態AI，與多模態的核心概念相反。', B: null, C: '多模態AI通常需要多個專門的神經網路協作，而非單一網路解決所有問題。', D: '只關注影像數據屬於電腦視覺領域，多模態AI強調的是多種數據類型的結合。' }
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
      optionExplanations: { A: null, B: '程式語言的選擇是技術實作細節，不是醫療AI需要特別考量的核心問題。', C: '執行速度雖然重要，但在醫療領域中數據合規與隱私保護的優先級更高。', D: '能源消耗是一般性的IT考量，並非醫療AI應用需要特別關注的議題。' }
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
      optionExplanations: { A: null, B: '地震預測主要依賴地質監測技術，AI目前在此領域的應用尚不成熟，非智慧城市的關鍵價值。', C: '減少建設成本更多取決於工程管理與材料技術，AI的主要價值在於營運優化而非降低建設成本。', D: 'AI是輔助決策工具，無法也不應完全取代人類進行城市治理決策。' }
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
      optionExplanations: { A: null, B: '減少運算成本是一般性的工程考量，自動駕駛的首要挑戰是即時性與安全性。', C: '增加耗能並非自動駕駛的挑戰目標，反而是要降低能耗、提升效率。', D: 'AI必須依靠大量數據學習才能安全駕駛，不可能不需要數據學習。' }
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
      optionExplanations: { A: '多模態AI訓練完全可以使用GPU，GPU加速是深度學習的標準做法。', B: null, C: '多模態AI可以且經常與NLP結合使用，例如圖文理解任務。', D: '多模態AI的應用範圍廣泛，涵蓋語音、影像、文本等多種場景，不僅限於語音識別。' }
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
      optionExplanations: { A: '準確性高於醫生並非倫理考量的重點，且AI目前仍需人類醫生監督與確認。', B: null, C: '讓AI自行決定治療方案違反醫療倫理，醫療決策應由醫生與患者共同參與。', D: '訓練數據的大小只是技術面向之一，倫理考量涵蓋透明度、公平性與隱私等更廣泛的議題。' }
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
      optionExplanations: { A: '車輛製造商責任確實是爭議點之一，但不是唯一的爭議，答案應選「以上皆是」。', B: 'AI模型準確度是否達標確實是爭議點之一，但不是唯一的爭議，答案應選「以上皆是」。', C: '事故與AI演算法決策的關聯確實是爭議點之一，但不是唯一的爭議，答案應選「以上皆是」。', D: null }
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
      optionExplanations: { A: '顧客行為分析與預測確實是AI在零售業的應用之一，但不夠完整，答案應選「以上皆是」。', B: '產品標籤自動生成確實是AI在零售業的應用之一，但不夠完整，答案應選「以上皆是」。', C: '供應鏈管理最佳化確實是AI在零售業的應用之一，但不夠完整，答案應選「以上皆是」。', D: null }
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
      optionExplanations: { A: '強化學習確實應用於金融交易策略優化，但不是唯一涉及的技術，答案應選「以上皆是」。', B: '區塊鏈與AI結合的風險分析確實是金融AI應用之一，但不夠完整，答案應選「以上皆是」。', C: '機器學習詐欺偵測確實是金融AI的重要應用，但不夠完整，答案應選「以上皆是」。', D: null }
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
      optionExplanations: { A: '確保模型透明度與可解釋性是醫療AI的重要挑戰之一，屬於核心議題。', B: '訓練數據的品質與代表性直接影響模型的公平性和準確性，是重大挑戰。', C: null, D: '確保AI符合醫療法規（如HIPAA、GDPR）是醫療AI應用的關鍵挑戰。' }
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
      optionExplanations: { A: null, B: 'AI的目標是提升供應鏈效率，而非減少AI技術的使用，這與應用目標矛盾。', C: '供應鏈管理需要大量數據支持決策，降低數據收集量會削弱AI的分析能力。', D: 'AI在供應鏈中的價值正是輔助人員做出更好的決策，而非避免影響決策。' }
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
      optionExplanations: { A: '模型小型化（如模型蒸餾、量化）是當前AI的重要趨勢，便於邊緣部署。', B: '提升計算效率是AI技術發展的核心方向之一，包括硬體加速與演算法優化。', C: null, D: '自適應學習能力的提升（如遷移學習、持續學習）是AI技術的發展趨勢。' }
    }
]
