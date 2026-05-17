/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：subject1-mock-part1b.js
 * 功能：模擬題 科目一（第 25-47 題）
 * 建立日期：2026-05-17
 * 版本：1.0.0
 */
export default [
    {
      id: 25,
      question: '語言模型的主要功能不包括？',
      options: [
        { label: 'A', text: '理解自然語言' },
        { label: 'B', text: '生成自然語言文本' },
        { label: 'C', text: '分析圖像中的物體' },
        { label: 'D', text: '預測文字中的詞語' }
      ],
      answer: 'C',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: '語言模型專注於理解和生成文本，圖像分析屬於電腦視覺領域。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 26,
      question: '語音辨識技術的核心是將什麼轉換為文本？',
      options: [
        { label: 'A', text: '圖像信號' },
        { label: 'B', text: '音訊信號' },
        { label: 'C', text: '觸覺信號' },
        { label: 'D', text: '溫度信號' }
      ],
      answer: 'B',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: '語音辨識將音訊信號轉換為文本，是NLP的重要應用。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 27,
      question: '編碼器在 Transformer 模型中的作用是？',
      options: [
        { label: 'A', text: '生成目標語言序列' },
        { label: 'B', text: '將輸入文本轉換為語義表示' },
        { label: 'C', text: '對生成文本進行評估和校正' },
        { label: 'D', text: '連接不同的語言模型' }
      ],
      answer: 'B',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: '編碼器將輸入文本轉為語義表示，為後續解碼或任務提供基礎。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 28,
      question: '解碼器在 Transformer 模型中的作用是？',
      options: [
        { label: 'A', text: '分析輸入文本的語法結構' },
        { label: 'B', text: '從編碼器提供的語義表示中生成新的語言序列' },
        { label: 'C', text: '管理模型的訓練數據' },
        { label: 'D', text: '優化模型的運行速度' }
      ],
      answer: 'B',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: '解碼器根據編碼器的語義表示生成目標序列，如翻譯或摘要。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 29,
      question: '下列哪個產業不是自然語言處理（NLP）的主要應用領域？',
      options: [
        { label: 'A', text: '醫療' },
        { label: 'B', text: '金融' },
        { label: 'C', text: '製造業的設備監控' },
        { label: 'D', text: '文本分析' }
      ],
      answer: 'C',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: '設備監控主要依賴感測器和數據分析，NLP在醫療、金融和文本分析中應用更廣泛。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 30,
      question: '智慧文件處理的核心技術不包含？',
      options: [
        { label: 'A', text: '光學字符識別（OCR）' },
        { label: 'B', text: '自然語言處理（NLP）' },
        { label: 'C', text: '機器學習' },
        { label: 'D', text: '區塊鏈技術' }
      ],
      answer: 'D',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: '智慧文件處理依賴OCR、NLP和機器學習，區塊鏈技術與文件處理無直接關係。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 31,
      question: '預生成的模型在文件辨識解決方案中的主要優勢是？',
      options: [
        { label: 'A', text: '可以處理任意格式和大小的文件' },
        { label: 'B', text: '針對常見文件類型進行預訓練，能夠快速識別關鍵字段' },
        { label: 'C', text: '允許用戶完全自訂模型結構和參數' },
        { label: 'D', text: '不需要任何標註數據即可直接使用' }
      ],
      answer: 'B',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: '預生成模型針對常見文件類型預訓練，能快速識別關鍵字段，降低自訂成本。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 32,
      question: '在自然語言處理中，「關鍵片語擷取」的主要功能是？',
      options: [
        { label: 'A', text: '將文本分類到不同的類別中' },
        { label: 'B', text: '分析文本中的情感和態度' },
        { label: 'C', text: '評估並傳回非結構化文字中的主要概念' },
        { label: 'D', text: '將一種語言的文本翻譯成另一種語言' }
      ],
      answer: 'C',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: '關鍵片語擷取識別文本中的主要概念，提升資訊提取效率。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 33,
      question: 'Transformer模型中的「編碼器」的主要作用是？',
      options: [
        { label: 'A', text: '生成新的語言序列' },
        { label: 'B', text: '理解和分析輸入的文本，並轉換為語義表示' },
        { label: 'C', text: '將語音信號轉換為文本' },
        { label: 'D', text: '對文本進行語彙基元化處理' }
      ],
      answer: 'B',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: '編碼器將輸入文本轉為語義表示，為後續任務提供基礎。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 34,
      question: '在電商行業中，CRF的序列標註可以應用於識別商品描述中的？',
      options: [
        { label: 'A', text: '用戶評論的情感' },
        { label: 'B', text: '商品的品牌、型號、顏色等屬性' },
        { label: 'C', text: '促銷活動的開始和結束時間' },
        { label: 'D', text: '物流配送的方式' }
      ],
      answer: 'B',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: 'CRF的序列標註能識別商品描述中的結構化屬性，如品牌、型號、顏色。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 35,
      question: 'Transformer模型中用於捕捉序列內部依賴關係的關鍵機制是？',
      options: [
        { label: 'A', text: '卷積運算' },
        { label: 'B', text: '遞歸神經網路' },
        { label: 'C', text: '自注意力機制' },
        { label: 'D', text: '池化操作' }
      ],
      answer: 'C',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: '自注意力機制是Transformer的核心，能捕捉序列中長距離的依賴關係。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 36,
      question: 'Transformer模型在機器翻譯任務中的優勢是能夠？',
      options: [
        { label: 'A', text: '逐字翻譯，保持原文結構' },
        { label: 'B', text: '同時考慮整個句子中的所有詞語，生成更準確和流暢的翻譯結果' },
        { label: 'C', text: '僅依賴詞典進行翻譯' },
        { label: 'D', text: '無需訓練數據即可進行翻譯' }
      ],
      answer: 'B',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: 'Transformer通過自注意力機制同時考慮整個句子，生成更準確的翻譯。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 37,
      question: '編碼器在Transformer模型中的作用是？',
      options: [
        { label: 'A', text: '生成目標語言序列' },
        { label: 'B', text: '將輸入文本轉換為語義表示' },
        { label: 'C', text: '對生成文本進行評估和校正' },
        { label: 'D', text: '連接不同的語言模型' }
      ],
      answer: 'B',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: '編碼器將輸入文本轉換為語義表示，為後續處理提供基礎。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 38,
      question: '解碼器在Transformer模型中的作用是？',
      options: [
        { label: 'A', text: '分析輸入文本的語法結構' },
        { label: 'B', text: '從編碼器提供的語義表示中生成新的語言序列' },
        { label: 'C', text: '管理模型的訓練數據' },
        { label: 'D', text: '優化模型的運行速度' }
      ],
      answer: 'B',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: '解碼器基於編碼器的語義表示生成目標語言序列，如翻譯或文本生成。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 39,
      question: '在計算機視覺領域，常用於物件偵測的深度學習模型是？',
      options: [
        { label: 'A', text: 'YOLO' },
        { label: 'B', text: 'RNN' },
        { label: 'C', text: 'LSTM' },
        { label: 'D', text: 'BERT' }
      ],
      answer: 'A',
      chapter: '3.2 電腦視覺技術與應用',
      explanation: 'YOLO（You Only Look Once）是一種高效的物件偵測模型，廣泛應用於計算機視覺。RNN和LSTM適用於序列數據處理，BERT則用於NLP。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 40,
      question: '在計算機視覺中，YOLO（You Only Look Once）技術主要用於？',
      options: [
        { label: 'A', text: '目標檢測（Object Detection）' },
        { label: 'B', text: '影像分割（Image Segmentation）' },
        { label: 'C', text: '自然語言處理（NLP）' },
        { label: 'D', text: '強化學習' }
      ],
      answer: 'A',
      chapter: '3.2 電腦視覺技術與應用',
      explanation: 'YOLO是一種高效的目標檢測技術，能快速識別圖像中的物體及其位置。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 41,
      question: '影像分類問題中，使用 CNN 的主要原因是？',
      options: [
        { label: 'A', text: '它可以處理非結構化數據' },
        { label: 'B', text: '它不需要大量標註數據' },
        { label: 'C', text: '它比傳統的 MLP（多層感知機）運算更快' },
        { label: 'D', text: '它不適用於物件偵測' }
      ],
      answer: 'A',
      chapter: '3.2 電腦視覺技術與應用',
      explanation: 'CNN擅長處理非結構化數據（如圖像），通過卷積層提取空間特徵。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 42,
      question: '電腦視覺被定義為讓電腦具有理解和解釋？',
      options: [
        { label: 'A', text: '自然語言文本的能力' },
        { label: 'B', text: '程式碼的能力' },
        { label: 'C', text: '圖像和影片的能力' },
        { label: 'D', text: '感測器數據的能力' }
      ],
      answer: 'C',
      chapter: '3.2 電腦視覺技術與應用',
      explanation: '電腦視覺專注於讓電腦理解和處理圖像及影片數據，如物件識別和分割。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 43,
      question: '電腦視覺的核心技術不包括？',
      options: [
        { label: 'A', text: '圖像處理' },
        { label: 'B', text: '特徵提取' },
        { label: 'C', text: '文本生成' },
        { label: 'D', text: '物件檢測' }
      ],
      answer: 'C',
      chapter: '3.2 電腦視覺技術與應用',
      explanation: '文本生成屬於NLP領域，而圖像處理、特徵提取和物件檢測是電腦視覺核心技術。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 44,
      question: '對於電腦來說，圖像實際上是由什麼構成的陣列？',
      options: [
        { label: 'A', text: '語義單元' },
        { label: 'B', text: '特徵向量' },
        { label: 'C', text: '數位像素' },
        { label: 'D', text: '文本字串' }
      ],
      answer: 'C',
      chapter: '3.2 電腦視覺技術與應用',
      explanation: '數位圖像由像素陣列組成，每個像素包含顏色和亮度資訊。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 45,
      question: '在數位圖像中，RGB 三個通道分別代表？',
      options: [
        { label: 'A', text: '長度、寬度、深度' },
        { label: 'B', text: '紅色、綠色、藍色' },
        { label: 'C', text: '解析度、幀率、位元深度' },
        { label: 'D', text: '光照、陰影、色彩飽和度' }
      ],
      answer: 'B',
      chapter: '3.2 電腦視覺技術與應用',
      explanation: 'RGB表示紅、綠、藍三個顏色通道，用於表示數位圖像的顏色。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 46,
      question: '電腦視覺的核心能力是？',
      options: [
        { label: 'A', text: '理解和生成自然語言文本' },
        { label: 'B', text: '從大量非結構化數據中發現有用的知識' },
        { label: 'C', text: '讓電腦具有理解和解釋圖像和影片的能力' },
        { label: 'D', text: '自動化處理各類文件' }
      ],
      answer: 'C',
      chapter: '3.2 電腦視覺技術與應用',
      explanation: '電腦視覺專注於讓電腦理解和處理圖像及影片數據，如物件識別。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 47,
      question: '在影像分類解決方案中，數位圖像的本質是？',
      options: [
        { label: 'A', text: '一系列描述圖像內容的文本標籤' },
        { label: 'B', text: '多個顏色通道組成的圖元陣列' },
        { label: 'C', text: '將圖像壓縮後的二進制檔案' },
        { label: 'D', text: '圖像中物件的邊緣和輪廓資訊' }
      ],
      answer: 'B',
      chapter: '3.2 電腦視覺技術與應用',
      explanation: '數位圖像由多個顏色通道（如RGB）的像素陣列組成，作為影像分類的基礎。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    }
]
