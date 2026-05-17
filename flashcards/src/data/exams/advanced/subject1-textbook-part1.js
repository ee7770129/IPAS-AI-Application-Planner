/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：subject1-textbook-part1.js
 * 功能：中級科目一 課本練習題（第 1-15 題）
 * 建立日期：2026-05-17
 * 版本：1.0.0
 */
export default [
    // ===== 第三章 AI 相關技術應用 =====
    {
      id: 1,
      question: '下列何者為自然語言處理(NLP)中的詞嵌入技術，能將文字轉換為向量以利機器學習處理？',
      options: [
        { label: 'A', text: 'TF-IDF' },
        { label: 'B', text: 'Word2Vec' },
        { label: 'C', text: 'Stop Words' },
        { label: 'D', text: 'Bag-of-Words' }
      ],
      answer: 'B',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: 'Word2Vec 是詞嵌入方法，將文字轉換為連續向量空間中具語意的表示。TF-IDF 和 BoW 是統計型表示（非嵌入），Stop Words 是前處理技術。',
      optionExplanations: {
        A: 'TF-IDF 是統計權重方法，雖能產生向量但不是「詞嵌入」技術，無法捕捉語意關聯。',
        B: null,
        C: 'Stop Words（停用詞）是前處理步驟，用來移除高頻低語意詞，不是向量化技術。',
        D: 'Bag-of-Words 是詞袋模型，只計算詞頻，不是詞嵌入。無法捕捉語意相似性。'
      }
    },
    {
      id: 2,
      question: '在自然語言處理應用中，哪一項任務主要目的是從文字中識別出人名、地名、組織等資訊？',
      options: [
        { label: 'A', text: '情感分析' },
        { label: 'B', text: '主題建模' },
        { label: 'C', text: '命名實體識別' },
        { label: 'D', text: '語音辨識' }
      ],
      answer: 'C',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: '命名實體識別(NER)用於辨識文本中的具名實體，如人名、地點與組織等。',
      optionExplanations: {
        A: '情感分析判斷文本的情感傾向（正面/負面），不是識別實體。',
        B: '主題建模用來發現文本集合中的隱含主題，不是識別具體實體。',
        C: null,
        D: '語音辨識是將語音轉為文字，與從文字中識別實體是不同任務。'
      }
    },
    {
      id: 3,
      question: '語言模型 BERT 的主要特性為何？',
      options: [
        { label: 'A', text: '使用遞迴神經網路' },
        { label: 'B', text: '無法處理上下文資訊' },
        { label: 'C', text: '為單向語言模型' },
        { label: 'D', text: '具雙向上下文理解能力' }
      ],
      answer: 'D',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: 'BERT(Bidirectional Encoder Representations from Transformers)可同時考慮上下文中前後的語意，有利於更精準的語言理解。',
      optionExplanations: {
        A: 'BERT 使用的是 Transformer 架構，不是 RNN。',
        B: '完全相反，BERT 的核心優勢就是能處理雙向上下文。',
        C: '單向語言模型是 GPT 的特性，BERT 是雙向的。',
        D: null
      }
    },
    {
      id: 4,
      question: '在電腦視覺中，影像分類(Image Classification)的主要任務是？',
      options: [
        { label: 'A', text: '區分影像中不同實體的邊界' },
        { label: 'B', text: '產生新的影像內容' },
        { label: 'C', text: '為整張圖片指定一個標籤' },
        { label: 'D', text: '判斷影像是否含有文字' }
      ],
      answer: 'C',
      chapter: '3.2 電腦視覺技術與應用',
      explanation: '影像分類的目標是判斷整張影像的主要內容屬於哪一預定義類別，例如分類為「貓」、「狗」、「汽車」等。',
      optionExplanations: {
        A: '區分不同實體邊界是語意分割(Semantic Segmentation)的任務。',
        B: '產生新影像是生成式任務（如風格轉換），不是分類。',
        C: null,
        D: '判斷是否含有文字更接近文字偵測(OCR)，不是影像分類。'
      }
    },
    {
      id: 5,
      question: '若需在一張影像中辨識出多個目標並標示其位置，最適合使用何種技術？',
      options: [
        { label: 'A', text: '影像增強' },
        { label: 'B', text: '影像分類' },
        { label: 'C', text: '目標偵測' },
        { label: 'D', text: '圖像生成' }
      ],
      answer: 'C',
      chapter: '3.2 電腦視覺技術與應用',
      explanation: '目標偵測(Object Detection)能辨識圖像中多個實體，並給出邊界框位置資訊。',
      optionExplanations: {
        A: '影像增強是前處理技術（調亮度、對比度等），不涉及物件辨識。',
        B: '影像分類只能判斷整張圖的類別，無法標示多個目標的位置。',
        C: null,
        D: '圖像生成是創造新影像，不是辨識既有影像中的物件。'
      }
    },
    {
      id: 6,
      question: '生成對抗網路(GAN)的訓練包含哪兩個核心組件？',
      options: [
        { label: 'A', text: '分類器與分群器' },
        { label: 'B', text: '產生器與鑑別器' },
        { label: 'C', text: '強化器與回饋器' },
        { label: 'D', text: '解碼器與編碼器' }
      ],
      answer: 'B',
      chapter: '3.3 生成式AI技術與應用',
      explanation: 'GAN 由產生器(Generator)負責生成資料，鑑別器(Discriminator)判斷真偽，兩者相互對抗學習。',
      optionExplanations: {
        A: '分類器和分群器是監督式/非監督式學習的元件，不是 GAN 的架構。',
        B: null,
        C: '強化器和回饋器不是 GAN 的標準術語。',
        D: '編碼器-解碼器是 VAE 或 Seq2Seq 的架構，不是 GAN。'
      }
    },
    {
      id: 7,
      question: '在以下哪一個任務中，生成式 AI 技術最常被應用？',
      options: [
        { label: 'A', text: '詐欺偵測' },
        { label: 'B', text: '語音辨識' },
        { label: 'C', text: '圖片風格轉換' },
        { label: 'D', text: '資料壓縮' }
      ],
      answer: 'C',
      chapter: '3.3 生成式AI技術與應用',
      explanation: '圖片風格轉換（如將相片轉為畫風）是生成式 AI 的典型應用，通常利用 GAN（如 CycleGAN）完成。',
      optionExplanations: {
        A: '詐欺偵測是分類/異常偵測任務，屬於鑑別式 AI。',
        B: '語音辨識是將語音轉文字，屬於理解型任務，不是生成。',
        C: null,
        D: '資料壓縮是工程技術，不是生成式 AI 的應用。'
      }
    },
    {
      id: 8,
      question: '多模態人工智慧的核心目標為何？',
      options: [
        { label: 'A', text: '提升硬體運算效能' },
        { label: 'B', text: '同時處理並整合來自不同感知類型的資料' },
        { label: 'C', text: '專注於純文字輸入的分析' },
        { label: 'D', text: '僅適用於影像分類任務' }
      ],
      answer: 'B',
      chapter: '3.4 多模態人工智慧應用',
      explanation: '多模態 AI 整合文字、影像、聲音等不同資料來源，提升模型理解與生成能力。',
      optionExplanations: {
        A: '多模態 AI 的目標不是硬體效能，而是跨模態資料整合。',
        B: null,
        C: '專注純文字是 NLP 的範疇，多模態強調的是「多種」資料類型。',
        D: '多模態不僅限於影像分類，還包含語音、文字、感測器等多種模態。'
      }
    },
    {
      id: 9,
      question: 'CLIP 模型結合了哪兩種模態進行訓練？',
      options: [
        { label: 'A', text: '聲音與影像' },
        { label: 'B', text: '影像與文字' },
        { label: 'C', text: '文字與數值' },
        { label: 'D', text: '圖形與表格' }
      ],
      answer: 'B',
      chapter: '3.4 多模態人工智慧應用',
      explanation: 'CLIP 由 OpenAI 提出，透過大量圖文配對資料進行對比學習，使模型能理解跨模態語意關聯。',
      optionExplanations: {
        A: 'CLIP 處理的是影像和文字，不涉及聲音模態。',
        B: null,
        C: 'CLIP 的兩個模態是影像和文字，不是文字和數值。',
        D: '圖形和表格不是 CLIP 處理的模態。'
      }
    },
    {
      id: 10,
      question: '在多模態 AI 應用中，以下哪一情境最能展現其優勢？',
      options: [
        { label: 'A', text: 'SQL 資料查詢' },
        { label: 'B', text: '純圖片壓縮' },
        { label: 'C', text: '影片自動生成字幕' },
        { label: 'D', text: '單一感測器故障排除' }
      ],
      answer: 'C',
      chapter: '3.4 多模態人工智慧應用',
      explanation: '影片字幕生成涉及聲音（語音辨識）、文字（轉錄）、影像（上下文輔助）等多模態資料處理，最能展現多模態 AI 的優勢。',
      optionExplanations: {
        A: 'SQL 查詢是結構化資料操作，不涉及多模態。',
        B: '純圖片壓縮只涉及影像單一模態。',
        C: null,
        D: '單一感測器故障排除不需要跨模態整合。'
      }
    },

    // ===== 第四章 AI 導入評估規劃 =====
    {
      id: 11,
      question: '在評估企業 AI 導入可行性時，下列哪一項屬於「商業價值評估」的考量？',
      options: [
        { label: 'A', text: '模型參數量大小' },
        { label: 'B', text: '開發人員數量' },
        { label: 'C', text: '預期效益與回報' },
        { label: 'D', text: '演算法選擇難度' }
      ],
      answer: 'C',
      chapter: '4.1 AI 導入評估',
      explanation: '商業價值評估主要衡量 AI 專案在解決問題或創造價值上的潛力，如降低成本、增加收入或提升效率。',
      optionExplanations: {
        A: '模型參數量屬於技術評估，不是商業價值評估。',
        B: '開發人員數量屬於資源規劃，不是商業價值評估。',
        C: null,
        D: '演算法選擇難度屬於技術可行性評估。'
      }
    },
    {
      id: 12,
      question: '在進行 AI 導入評估時，為確保企業體系具備執行能力，應考量下列哪一項？',
      options: [
        { label: 'A', text: '使用者介面風格' },
        { label: 'B', text: '技術成熟度與部署資源' },
        { label: 'C', text: '品牌識別度' },
        { label: 'D', text: '客服滿意度' }
      ],
      answer: 'B',
      chapter: '4.1 AI 導入評估',
      explanation: '技術評估是導入前的重要環節，需確認所選技術是否穩定且能在現有架構下順利實作。',
      optionExplanations: {
        A: 'UI 風格是產品設計問題，不是執行能力的核心考量。',
        B: null,
        C: '品牌識別度是行銷層面，與技術執行能力無關。',
        D: '客服滿意度是業務成效指標，不是導入前的執行能力評估。'
      }
    },
    {
      id: 13,
      question: '企業進行 AI 導入前的評估分析，通常第一步應聚焦於？',
      options: [
        { label: 'A', text: '演算法選擇' },
        { label: 'B', text: '資料標註工具' },
        { label: 'C', text: '業務痛點與需求辨識' },
        { label: 'D', text: '建立測試模型' }
      ],
      answer: 'C',
      chapter: '4.1 AI 導入評估',
      explanation: 'AI 導入需以業務需求為出發點，若無明確問題定義，後續模型開發將失焦或無法產生實際效益。',
      optionExplanations: {
        A: '演算法選擇是後續步驟，先要搞清楚要解決什麼問題。',
        B: '資料標註工具是技術準備階段的工作，不是第一步。',
        C: null,
        D: '建立測試模型屬於 POC 階段，在需求確認之後。'
      }
    },
    {
      id: 14,
      question: '在 AI 導入專案的初期規劃階段，下列哪一項屬於「人員規劃」的重點內容？',
      options: [
        { label: 'A', text: 'API 規格設計' },
        { label: 'B', text: '模型優化參數' },
        { label: 'C', text: 'AI 專案所需的跨部門協作角色' },
        { label: 'D', text: '作業系統版本' }
      ],
      answer: 'C',
      chapter: '4.2 AI 導入規劃',
      explanation: 'AI 專案涉及資料、業務、IT 等部門合作，需在規劃階段即明確分工與責任分配。',
      optionExplanations: {
        A: 'API 規格設計屬於技術架構規劃，不是人員規劃。',
        B: '模型優化參數屬於模型開發階段。',
        C: null,
        D: '作業系統版本屬於 IT 基礎設施。'
      }
    },
    {
      id: 15,
      question: '在 AI 導入規劃過程中，下列哪一項規劃內容最能避免部門間溝通斷裂與責任不清的風險？',
      options: [
        { label: 'A', text: '確認所採用演算法的最新研究成果' },
        { label: 'B', text: '由高階主管全權拍板模型選擇與部署方式' },
        { label: 'C', text: '建立跨部門協作機制與角色分工' },
        { label: 'D', text: '優先採購效能最佳的 GPU 運算資源' }
      ],
      answer: 'C',
      chapter: '4.2 AI 導入規劃',
      explanation: 'AI 導入需橫跨業務、資料、IT 等多部門，建立協作機制可確保需求對齊、流程協同一致。',
      optionExplanations: {
        A: '研究最新演算法是技術層面，無法解決部門溝通問題。',
        B: '由主管全權決定反而可能忽略各部門專業意見，不是協作。',
        C: null,
        D: '採購 GPU 是資源配置問題，與部門間溝通斷裂無關。'
      }
    }
  ]
