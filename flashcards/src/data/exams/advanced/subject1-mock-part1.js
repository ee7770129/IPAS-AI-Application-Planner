/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：subject1-mock-part1.js
 * 功能：模擬題 科目一（第 1-47 題）
 * 建立日期：2026-05-17
 * 版本：1.0.0
 */
export default [
    {
      id: 1,
      question: '以下哪種技術與自然語言處理（NLP）無關？',
      options: [
        { label: 'A', text: '分詞技術' },
        { label: 'B', text: '卷積神經網路（CNN）' },
        { label: 'C', text: '命名實體識別（NER）' },
        { label: 'D', text: '依存句法分析' }
      ],
      answer: 'B',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: '分詞技術、命名實體識別（NER）和依存句法分析均為NLP的核心技術，用於處理文本數據。卷積神經網路（CNN）主要用於圖像處理，與NLP關聯較少。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 2,
      question: '在 NLP 領域中，Transformer 模型的核心機制是？',
      options: [
        { label: 'A', text: '卷積層（Convolution Layer）' },
        { label: 'B', text: '長短期記憶網路（LSTM）' },
        { label: 'C', text: '注意力機制（Attention Mechanism）' },
        { label: 'D', text: '反向傳播（Backpropagation）' }
      ],
      answer: 'C',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: '注意力機制是Transformer的核心，允許模型捕捉序列中長距離依賴關係。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 3,
      question: 'BERT（Bidirectional Encoder Representations from Transformers） 的主要特點是？',
      options: [
        { label: 'A', text: '單向語言模型' },
        { label: 'B', text: '無監督學習' },
        { label: 'C', text: '雙向語境學習' },
        { label: 'D', text: '生成式模型' }
      ],
      answer: 'C',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: 'BERT通過雙向語境學習，同時考慮詞語前後的上下文，提升NLP任務表現。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 4,
      question: '自然語言處理中的「詞嵌入」（Word Embedding）技術，如 Word2Vec 和 GloVe，其主要目的是？',
      options: [
        { label: 'A', text: '壓縮文本資料' },
        { label: 'B', text: '以向量方式表示詞語間的關係' },
        { label: 'C', text: '產生語法分析樹' },
        { label: 'D', text: '將詞語轉換為圖片' }
      ],
      answer: 'B',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: '詞嵌入將詞語轉為向量，捕捉詞語間的語義關係，適用於NLP任務。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 5,
      question: '在自然語言處理 (NLP) 中，Transformer 模型的主要優勢是？',
      options: [
        { label: 'A', text: '記憶能力較長' },
        { label: 'B', text: '訓練速度較 RNN 慢' },
        { label: 'C', text: '無法進行序列標註' },
        { label: 'D', text: '適用於小規模數據集' }
      ],
      answer: 'A',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: 'Transformer通過注意力機制捕捉長距離依賴，解決了RNN記憶能力有限的問題。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 6,
      question: '在語音識別系統中，使用 MFCC (Mel-Frequency Cepstral Coefficients) 的主要目的是？',
      options: [
        { label: 'A', text: '增強語音的時序關係' },
        { label: 'B', text: '提取語音的頻譜特徵' },
        { label: 'C', text: '減少訓練時間' },
        { label: 'D', text: '用於模型的正則化' }
      ],
      answer: 'B',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: 'MFCC是一種用於語音識別的標準特徵提取方法，通過將語音信號轉換為頻譜特徵，捕捉人類聽覺系統的特性，提升模型識別準確性。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 7,
      question: '在 NLP 領域中，使用 Word2Vec 進行詞向量訓練時，若語料庫較小，最可能發生的問題是？',
      options: [
        { label: 'A', text: '訓練時間過長' },
        { label: 'B', text: '向量維度過高' },
        { label: 'C', text: '過擬合 (Overfitting)' },
        { label: 'D', text: '模型無法學習到有效的語義關係' }
      ],
      answer: 'D',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: 'Word2Vec依賴大量語料來學習詞語間的語義關係，若語料庫較小，模型難以捕捉有效的語義，導致詞向量質量差。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 8,
      question: 'Transformer 模型中的 Self-Attention 機制與 CNN 的主要區別在於？',
      options: [
        { label: 'A', text: 'Self-Attention 能夠捕捉更遠距離的依賴關係' },
        { label: 'B', text: 'CNN 能夠更有效地處理長序列數據' },
        { label: 'C', text: 'Transformer 無法處理語言建模問題' },
        { label: 'D', text: 'Self-Attention 需要額外的池化層來降維' }
      ],
      answer: 'A',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: 'Self-Attention機制能捕捉序列中任意位置的依賴關係，適合長距離依賴，而CNN主要依賴局部感受野，適合空間數據。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 9,
      question: '自然語言處理在金融領域的常見應用是？',
      options: [
        { label: 'A', text: '醫學影像分析' },
        { label: 'B', text: '生產流程優化' },
        { label: 'C', text: '風險管理和市場分析' },
        { label: 'D', text: '氣象預報' }
      ],
      answer: 'C',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: 'NLP在金融領域用於分析文本數據，如財報或新聞，進行風險管理和市場預測。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 10,
      question: '智慧文件處理（Intelligent Document Processing, IDP）的核心技術不包括？',
      options: [
        { label: 'A', text: '光學字符識別（OCR）' },
        { label: 'B', text: '自然語言處理（NLP）' },
        { label: 'C', text: '區塊鏈技術' },
        { label: 'D', text: '機器學習' }
      ],
      answer: 'C',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: 'IDP依賴OCR、NLP和機器學習處理文件，區塊鏈技術與文件處理無直接關係。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 11,
      question: '預生成的模型在文件辨識中的優勢是？',
      options: [
        { label: 'A', text: '可以處理任何格式的文件' },
        { label: 'B', text: '針對常見文件類型進行預訓練，能自動識別關鍵字段' },
        { label: 'C', text: '需要大量的自訂訓練數據' },
        { label: 'D', text: '只能識別單一語言的文件' }
      ],
      answer: 'B',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: '預生成模型針對常見文件類型進行預訓練，能快速識別關鍵字段，減少自訂訓練需求。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 12,
      question: '下列哪一個是預生成的模型可能應用的領域？',
      options: [
        { label: 'A', text: '基因序列分析' },
        { label: 'B', text: '星體圖像分類' },
        { label: 'C', text: '餐飲帳單資訊提取' },
        { label: 'D', text: '股票市場預測' }
      ],
      answer: 'C',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: '預生成模型在文件辨識中擅長提取結構化資訊，如餐飲帳單的字段。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 13,
      question: '關鍵片語擷取的主要功能是評估並傳回非結構化文字中的？',
      options: [
        { label: 'A', text: '作者的情感傾向' },
        { label: 'B', text: '主要概念' },
        { label: 'C', text: '文本的字數統計' },
        { label: 'D', text: '文本的語言種類' }
      ],
      answer: 'B',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: '關鍵片語擷取旨在識別文本中的主要概念或主題，提升資訊提取效率。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 14,
      question: '在自然語言處理中，「實體」指的是？',
      options: [
        { label: 'A', text: '文本中不重要的詞語' },
        { label: 'B', text: '文本中具有特定意義的詞或短語，如人名、地名、組織名等' },
        { label: 'C', text: '用於連接句子和段落的詞語' },
        { label: 'D', text: '表達情感的詞語' }
      ],
      answer: 'B',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: '實體是NLP中具有特定意義的詞或短語，如人名、地名，用於命名實體識別。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 15,
      question: '自訂文字分類適用於將非結構化文件分類成？',
      options: [
        { label: 'A', text: '隨機生成的類別' },
        { label: 'B', text: '預先定義的類別' },
        { label: 'C', text: '根據文本長度劃分的類別' },
        { label: 'D', text: '根據語法結構劃分的類別' }
      ],
      answer: 'B',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: '自訂文字分類將文本分配到預定義的類別中，適用於結構化分析。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 16,
      question: '具名實體辨識（NER）技術的主要功能是將文本中的實體分類到？',
      options: [
        { label: 'A', text: '根據詞頻排序的類別' },
        { label: 'B', text: '預先定義的類別群組中' },
        { label: 'C', text: '根據字母順序排列的類別' },
        { label: 'D', text: '根據情感極性劃分的類別' }
      ],
      answer: 'B',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: 'NER將文本中的實體（如人名、地名）分類到預定義類別，如「人」、「地點」等。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 17,
      question: '個人識別資訊（PII）偵測的目的是識別、分類和修訂非結構化文字中的？',
      options: [
        { label: 'A', text: '技術術語' },
        { label: 'B', text: '敏感性資訊' },
        { label: 'C', text: '產品規格' },
        { label: 'D', text: '歷史事件描述' }
      ],
      answer: 'B',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: 'PII偵測旨在識別和保護敏感資訊，如姓名、電話號碼，確保數據隱私。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 18,
      question: '語言偵測技術的主要目的是偵測撰寫文件時所使用的？',
      options: [
        { label: 'A', text: '主要論點' },
        { label: 'B', text: '修辭手法' },
        { label: 'C', text: '語言' },
        { label: 'D', text: '作者的風格' }
      ],
      answer: 'C',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: '語言偵測技術用於識別文本的語言類型，如英文、中文等。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 19,
      question: '在語言偵測中，基於統計的方法主要依賴於對文本中各種？',
      options: [
        { label: 'A', text: '標點符號' },
        { label: 'B', text: '特徵進行定量分析和判斷語言模型' },
        { label: 'C', text: '顏文字和表情符號' },
        { label: 'D', text: '超連結和網址' }
      ],
      answer: 'B',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: '基於統計的語言偵測分析文本特徵（如詞頻、N-gram），判斷語言模型。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 20,
      question: '條件隨機場（CRF）特別適合處理具有什麼特性的語言數據？',
      options: [
        { label: 'A', text: '獨立性' },
        { label: 'B', text: '上下文依賴性' },
        { label: 'C', text: '結構化' },
        { label: 'D', text: '數據量小' }
      ],
      answer: 'B',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: 'CRF擅長處理上下文依賴的語言數據，如序列標註任務，考慮全局結構。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 21,
      question: '在電商行業中，CRF 的序列標註可以應用於識別商品描述中的？',
      options: [
        { label: 'A', text: '用戶評論的情感' },
        { label: 'B', text: '商品的品牌、型號、顏色等屬性' },
        { label: 'C', text: '促銷活動的開始和結束時間' },
        { label: 'D', text: '物流配送的方式' }
      ],
      answer: 'B',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: 'CRF的序列標註用於提取商品描述中的結構化屬性，如品牌、型號，提升資訊提取效率。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 22,
      question: 'Transformer 模型中用於捕捉序列內部依賴關係的關鍵機制是？',
      options: [
        { label: 'A', text: '卷積運算' },
        { label: 'B', text: '遞歸神經網路' },
        { label: 'C', text: '自注意力機制' },
        { label: 'D', text: '池化操作' }
      ],
      answer: 'C',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: '自注意力機制是Transformer的核心，能捕捉序列中任意位置的依賴關係。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 23,
      question: 'Transformer 模型在機器翻譯任務中的優勢是能夠？',
      options: [
        { label: 'A', text: '逐字翻譯，保持原文結構' },
        { label: 'B', text: '同時考慮整個句子中的所有詞語，生成更準確和流暢的翻譯結果' },
        { label: 'C', text: '僅依賴詞典進行翻譯' },
        { label: 'D', text: '無需訓練數據即可進行翻譯' }
      ],
      answer: 'B',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: 'Transformer通過自注意力機制同時考慮句子的全局上下文，生成更準確的翻譯。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 24,
      question: '擷取式摘要是通過什麼方式生成摘要？',
      options: [
        { label: 'A', text: '生成全新的句子來概括原文內容' },
        { label: 'B', text: '選取原文中的句子來生成摘要' },
        { label: 'C', text: '將原文翻譯成另一種語言再摘要' },
        { label: 'D', text: '使用關鍵詞的同義詞替換生成摘要' }
      ],
      answer: 'B',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: '擷取式摘要從原文中選取最具代表性的句子作為摘要，保留原始內容。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
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
