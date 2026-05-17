/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：adv-s1-mock.js
 * 功能：模擬題 科目一
 * 來源：中級AI應用規畫師已分區.xlsx
 * 建立日期：2026-05-17
 * 版本：1.0.0
 */

export default {
  id: 'adv-s1-mock',
  label: '模擬題 科目一',
  subject: '科目一 人工智慧技術應用與規劃',
  examDate: '模擬題',
  questions: [
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
    },
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
    },
    {
      id: 95,
      question: 'Edge AI（邊緣 AI）相較於雲端 AI 的主要優勢是？',
      options: [
        { label: 'A', text: '不需要 AI 模型訓練' },
        { label: 'B', text: '可以降低數據傳輸延遲，提高即時性' },
        { label: 'C', text: '適合大規模 AI 計算' },
        { label: 'D', text: '不需要考慮數據隱私問題' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '邊緣AI將計算任務放在設備端，減少數據傳輸延遲，提升即時性和隱私保護。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 96,
      question: '在 AI 項目中，為了評估 AI 的商業價值，應關注哪些關鍵指標？',
      options: [
        { label: 'A', text: '訓練時間' },
        { label: 'B', text: 'AI 模型大小' },
        { label: 'C', text: 'AI 預測的準確率與業務影響' },
        { label: 'D', text: 'AI 使用的編程語言' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: 'AI的商業價值主要通過預測準確率和對業務的實際影響來評估，與訓練時間或程式語言無直接關聯。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 97,
      question: 'AI 項目的可行性評估中，不包含以下哪一項？',
      options: [
        { label: 'A', text: 'AI 模型訓練成本' },
        { label: 'B', text: '競爭對手的商業策略' },
        { label: 'C', text: 'AI 系統的維護成本' },
        { label: 'D', text: 'AI 技術的適用性' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '競爭對手的商業策略屬於外部因素，與AI項目可行性評估的技術和成本因素無直接關係。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 98,
      question: '在 AI 風險管理中，什麼策略可以降低 AI 偏見（Bias）對企業決策的影響？',
      options: [
        { label: 'A', text: '限制 AI 模型的使用範圍' },
        { label: 'B', text: '增強 AI 模型的自學能力' },
        { label: 'C', text: '定期審查與更新數據集' },
        { label: 'D', text: '只使用少量的數據進行訓練' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '定期審查和更新數據集有助於確保數據的多樣性和代表性，從而降低偏見風險。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 99,
      question: 'AI 導入過程中的關鍵步驟之一是技術選型，以下哪一項不是技術選型時的主要考量？',
      options: [
        { label: 'A', text: '模型的可擴展性' },
        { label: 'B', text: '開發團隊的技術熟練度' },
        { label: 'C', text: '企業的市場行銷策略' },
        { label: 'D', text: '訓練數據的品質' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '市場行銷策略屬於業務層面，與技術選型的技術因素無直接關係。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 100,
      question: '在 AI 模型的部署過程中，若發現 AI 模型在真實環境中的表現低於測試結果，最可能的原因是？',
      options: [
        { label: 'A', text: '測試環境與生產環境的數據分佈不同' },
        { label: 'B', text: '測試環境使用的 AI 算法較生產環境更先進' },
        { label: 'C', text: '測試環境的 GPU 計算能力較生產環境更強' },
        { label: 'D', text: '測試環境的 AI 模型未經過過擬合處理' }
      ],
      answer: 'A',
      chapter: '4.3 AI 風險管理',
      explanation: '數據分佈差異是導致模型真實環境表現下降的常見原因，需確保訓練數據與實際數據一致。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 101,
      question: 'AI 模型監測（AI Model Monitoring）的主要目的是？',
      options: [
        { label: 'A', text: '確保模型的準確性與穩定性' },
        { label: 'B', text: '減少 AI 的計算資源消耗' },
        { label: 'C', text: '增強 AI 的運行速度' },
        { label: 'D', text: '使 AI 系統更加透明' }
      ],
      answer: 'A',
      chapter: '4.3 AI 風險管理',
      explanation: '模型監測旨在持續追蹤模型的準確性和穩定性，確保其在動態環境中的表現。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 102,
      question: '在 AI 系統部署中，以下哪一種方法可用來確保 AI 模型的公平性？',
      options: [
        { label: 'A', text: '使用可解釋性技術（Explainable AI）來分析決策過程' },
        { label: 'B', text: '減少 AI 模型的訓練數據量' },
        { label: 'C', text: '只使用特定群體的數據進行訓練' },
        { label: 'D', text: '限制 AI 的學習能力' }
      ],
      answer: 'A',
      chapter: '4.3 AI 風險管理',
      explanation: '可解釋性技術有助於分析模型決策過程，識別和減少潛在偏見，提升公平性。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 103,
      question: '在 AI 技術與系統整合的過程中，API 的主要用途是？',
      options: [
        { label: 'A', text: '儲存 AI 模型數據' },
        { label: 'B', text: '提供標準化的介面，讓不同系統能夠交互' },
        { label: 'C', text: '訓練 AI 模型' },
        { label: 'D', text: '限制 AI 模型的運算能力' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: 'API提供標準化介面，促進AI系統與其他系統的數據交互和整合。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 104,
      question: '企業導入 AI 模型後，應該如何確保 AI 系統的持續有效性？',
      options: [
        { label: 'A', text: '定期更新數據集與模型' },
        { label: 'B', text: '限制 AI 模型的學習能力' },
        { label: 'C', text: '只使用一次訓練好的模型，不再更新' },
        { label: 'D', text: '減少 AI 在業務決策中的應用' }
      ],
      answer: 'A',
      chapter: '4.3 AI 風險管理',
      explanation: '定期更新數據集和模型可確保AI系統適應變化，維持高效預測能力。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 105,
      question: '在 AI 產品開發中，「MLOps」的主要目標是？',
      options: [
        { label: 'A', text: '減少 AI 訓練的計算資源需求' },
        { label: 'B', text: '確保 AI 模型的部署與維運可持續性' },
        { label: 'C', text: '減少 AI 模型的參數數量' },
        { label: 'D', text: '增強 AI 模型的複雜度' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: 'MLOps專注於模型的部署、監控和持續更新，確保AI系統的可持續運營。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 106,
      question: '在 AI 法規與倫理規範中，以下哪一點最符合 AI 責任使用原則？',
      options: [
        { label: 'A', text: '確保 AI 決策的透明度與可解釋性' },
        { label: 'B', text: '允許 AI 自主學習，不受人類監管' },
        { label: 'C', text: '限制 AI 在所有商業領域的應用' },
        { label: 'D', text: '只使用開源 AI 模型' }
      ],
      answer: 'A',
      chapter: '4.3 AI 風險管理',
      explanation: '透明度和可解釋性是負責任AI的核心，確保決策可被理解和信任。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 107,
      question: '進行 AI 技術可行性評估時，最重要的考量因素是？',
      options: [
        { label: 'A', text: '資料可用性與品質' },
        { label: 'B', text: '訓練數據越多越好' },
        { label: 'C', text: '只需考慮演算法的精度' },
        { label: 'D', text: '訓練時間長短' }
      ],
      answer: 'A',
      chapter: '4.3 AI 風險管理',
      explanation: '資料的可用性和品質直接影響AI模型的訓練效果和應用可行性。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 108,
      question: 'AI 風險管理中，「公平性」(Fairness) 主要關注？',
      options: [
        { label: 'A', text: 'AI 模型是否遵循倫理規範' },
        { label: 'B', text: '訓練數據是否均衡' },
        { label: 'C', text: '模型的運行速度' },
        { label: 'D', text: 'AI 模型的可解釋性' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '公平性關注訓練數據的均衡性，確保模型對不同群體的預測無偏見。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 109,
      question: 'AI 部署前的評估指標通常不包含？',
      options: [
        { label: 'A', text: '準確度 (Accuracy)' },
        { label: 'B', text: '模型大小 (Model Size)' },
        { label: 'C', text: '記憶體使用量 (Memory Usage)' },
        { label: 'D', text: 'UI 介面設計' }
      ],
      answer: 'D',
      chapter: '4.3 AI 風險管理',
      explanation: 'UI介面設計屬於應用層面，與AI模型性能評估無直接關係。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 110,
      question: '在選擇 AI 模型時，對於即時應用 (Real-time Application)，最佳的考量因素是？',
      options: [
        { label: 'A', text: '模型參數量越大越好' },
        { label: 'B', text: '推論速度 (Inference Speed)' },
        { label: 'C', text: '訓練時間長短' },
        { label: 'D', text: '是否使用 RNN 結構' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '即時應用需快速響應，推論速度是關鍵考量因素。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 111,
      question: 'AI 系統整合時，API 設計的關鍵原則不包含？',
      options: [
        { label: 'A', text: '易於擴展' },
        { label: 'B', text: '資料格式標準化' },
        { label: 'C', text: '只支援單一資料類型' },
        { label: 'D', text: '安全性與權限控管' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: 'API設計應支持多種資料類型，以實現靈活的系統整合。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 112,
      question: '在邊緣計算 (Edge Computing) 的 AI 部署中，最重要的考量因素是？',
      options: [
        { label: 'A', text: '訓練數據大小' },
        { label: 'B', text: '低功耗與計算資源限制' },
        { label: 'C', text: '模型複雜度不重要' },
        { label: 'D', text: '只需考慮準確度' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '邊緣計算受限於設備的功耗和計算資源，需優化模型以適應這些限制。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 113,
      question: '在 AI 導入規劃階段，最需要確認的第一步是？',
      options: [
        { label: 'A', text: '選擇最佳 AI 演算法' },
        { label: 'B', text: '設定模型評估指標' },
        { label: 'C', text: '確認 AI 導入的業務需求與目標' },
        { label: 'D', text: '進行模型微調' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '確認業務需求與目標是AI導入的首要步驟，確保技術方案與企業目標一致。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 114,
      question: '在 AI 風險評估時，「可解釋性」(Explainability) 的主要目的包括？',
      options: [
        { label: 'A', text: '增加模型的計算效能' },
        { label: 'B', text: '提高使用者的信任度' },
        { label: 'C', text: '讓模型更難以被攻擊' },
        { label: 'D', text: '降低模型的計算成本' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '可解釋性通過揭示模型決策過程，增強用戶對AI的信任，特別是在高風險應用中。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 115,
      question: '若一個 AI 系統部署後出現「數據漂移」(Data Drift) 現象，最適當的應對方式是？',
      options: [
        { label: 'A', text: '重新蒐集並更新訓練數據' },
        { label: 'B', text: '減少 AI 模型的訓練次數' },
        { label: 'C', text: '增加更多的模型參數' },
        { label: 'D', text: '讓系統自動調整權重' }
      ],
      answer: 'A',
      chapter: '4.3 AI 風險管理',
      explanation: '數據漂移指訓練數據與實際數據分佈不一致，需重新收集和更新訓練數據以適應新環境。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 116,
      question: '在 AI 模型的監管要求中，「公平性評估」的核心目標是？',
      options: [
        { label: 'A', text: '確保不同群體的結果不偏頗' },
        { label: 'B', text: '降低模型的訓練成本' },
        { label: 'C', text: '讓 AI 自行進行決策' },
        { label: 'D', text: '減少 AI 模型的計算量' }
      ],
      answer: 'A',
      chapter: '4.3 AI 風險管理',
      explanation: '公平性評估旨在確保模型對不同群體的預測無偏見，符合倫理和法規要求。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 117,
      question: 'AI 技術導入企業流程時，以下哪一項不是主要考量的風險？',
      options: [
        { label: 'A', text: '資料隱私與保護' },
        { label: 'B', text: '算法公平性' },
        { label: 'C', text: '訓練時間越長越好' },
        { label: 'D', text: '模型決策透明度' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '訓練時間長短是技術執行層面的考量，而非主要風險；數據隱私、公平性和透明度是核心風險。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 118,
      question: '在 AI 技術與系統整合時，以下哪個技術最適合進行異構數據整合？',
      options: [
        { label: 'A', text: 'RESTful API' },
        { label: 'B', text: '微服務架構 (Microservices)' },
        { label: 'C', text: '事件驅動架構 (Event-driven Architecture)' },
        { label: 'D', text: '以上皆是' }
      ],
      answer: 'D',
      chapter: '4.3 AI 風險管理',
      explanation: 'RESTful API、微服務和事件驅動架構均適用於異構數據整合，提供靈活性和標準化介面。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 119,
      question: '在邊緣運算環境下，AI 模型的部署需要特別考慮以下哪個因素？',
      options: [
        { label: 'A', text: '記憶體與計算資源限制' },
        { label: 'B', text: '訓練數據的標註方式' },
        { label: 'C', text: 'AI 模型是否為深度學習' },
        { label: 'D', text: '網路頻寬的影響不大' }
      ],
      answer: 'A',
      chapter: '4.3 AI 風險管理',
      explanation: '邊緣運算受限於設備的記憶體和計算資源，需優化模型以適應低功耗環境。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 120,
      question: '企業選擇 AI 技術供應商時，最應該優先考量哪個因素？',
      options: [
        { label: 'A', text: 'AI 供應商是否有公開的模型參數' },
        { label: 'B', text: '供應商提供的 AI 服務是否符合企業需求' },
        { label: 'C', text: 'AI 供應商的技術團隊規模' },
        { label: 'D', text: 'AI 供應商的市場行銷策略' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '選擇供應商時，首要考量是其AI服務是否符合企業的具體業務需求。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 121,
      question: '在 AI 模型的可擴展性考量中，以下哪種技術最能提升系統的彈性？',
      options: [
        { label: 'A', text: '使用單機運行 AI 模型' },
        { label: 'B', text: '採用容器化 (Containerization) 與 Kubernetes' },
        { label: 'C', text: '降低模型的計算量' },
        { label: 'D', text: '只使用本地 GPU 訓練模型' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '容器化和Kubernetes提供靈活的部署和管理，提升AI系統的可擴展性和彈性。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 122,
      question: '在 AI 應用系統的 CI/CD (持續整合/持續部署) 過程中，以下哪項屬於 MLOps (機器學習運營) 的核心目標？',
      options: [
        { label: 'A', text: '只關注 AI 模型的訓練效率' },
        { label: 'B', text: '確保 AI 模型能夠快速迭代與更新' },
        { label: 'C', text: '只專注於 AI 模型的部署，不考慮監控' },
        { label: 'D', text: '讓 AI 模型自行學習，不需要監管' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: 'MLOps的核心是實現模型的快速迭代、部署和監控，確保持續更新和穩定性。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 123,
      question: '在 AI 系統的雲端部署策略中，選擇混合雲架構的主要優勢是？',
      options: [
        { label: 'A', text: '完全不需要考慮資料安全性' },
        { label: 'B', text: '兼顧內部私有數據的安全與雲端擴展性' },
        { label: 'C', text: '減少所有運算成本' },
        { label: 'D', text: '確保所有 AI 模型都可以離線運行' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '混合雲架構結合私有雲和公有雲，保護敏感數據同時提供擴展性。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 124,
      question: '在 AI 模型監控 (Model Monitoring) 中，「概念漂移」(Concept Drift) 的主要影響是？',
      options: [
        { label: 'A', text: '訓練時間變長' },
        { label: 'B', text: '模型性能下降，無法準確預測新數據' },
        { label: 'C', text: 'AI 模型的參數會自動更新' },
        { label: 'D', text: '模型的準確度保持不變' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '概念漂移指數據背後的模式變化，導致模型性能下降，需重新訓練或更新。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 125,
      question: 'AI 應用程式的 API 設計時，若需要提高 AI 推論請求的處理效能，最佳的策略是？',
      options: [
        { label: 'A', text: '增加 API 的請求頻率' },
        { label: 'B', text: '使用批次請求 (Batch Inference)' },
        { label: 'C', text: '降低 AI 模型的運算能力' },
        { label: 'D', text: '只允許同步請求' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '批次請求可一次處理多個輸入，減少API調用次數，提升推論效率。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 126,
      question: 'AI 相關法規中，「個人資料保護法」(GDPR) 強調 AI 模型應？',
      options: [
        { label: 'A', text: '讓所有數據對公眾開放' },
        { label: 'B', text: '允許個人要求刪除與 AI 相關的個資' },
        { label: 'C', text: '限制 AI 在醫療領域的應用' },
        { label: 'D', text: '確保 AI 可以完全自動化決策' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: 'GDPR強調個人數據權利，包括要求刪除與AI相關的個人資訊，保護隱私。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 127,
      question: '若 AI 系統在招聘決策中出現偏見 (Bias)，最可能的原因是？',
      options: [
        { label: 'A', text: '訓練數據不夠多' },
        { label: 'B', text: 'AI 模型參數太少' },
        { label: 'C', text: '訓練數據中存在歷史偏見' },
        { label: 'D', text: '使用錯誤的 AI 框架' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '歷史偏見存在於訓練數據中，會被AI模型學習並放大，導致招聘決策不公。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 128,
      question: 'AI 企業若要遵守 AI 倫理規範，應優先考量？',
      options: [
        { label: 'A', text: 'AI 模型的商業價值' },
        { label: 'B', text: 'AI 的決策是否公平、透明' },
        { label: 'C', text: '訓練 AI 時的計算資源' },
        { label: 'D', text: '降低 AI 模型的成本' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '公平性和透明性是AI倫理的核心，確保決策可被信任並符合社會規範。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 129,
      question: '企業導入 AI 時，若希望提高決策的透明度，最適合的方法是？',
      options: [
        { label: 'A', text: '使用可解釋性 AI (Explainable AI, XAI) 技術' },
        { label: 'B', text: '完全依賴 AI 進行決策' },
        { label: 'C', text: '降低 AI 模型的複雜度，不考慮性能' },
        { label: 'D', text: '隱藏 AI 模型的運作邏輯，以確保技術競爭力' }
      ],
      answer: 'A',
      chapter: '4.3 AI 風險管理',
      explanation: '可解釋性AI技術（如SHAP、LIME）能揭示模型決策過程，提升透明度和信任。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 130,
      question: '在企業評估是否導入AI應用時，需要分析現有的？',
      options: [
        { label: 'A', text: '員工社交網絡' },
        { label: 'B', text: '供應商合作關係' },
        { label: 'C', text: '數據和技術基礎' },
        { label: 'D', text: '競爭對手的AI策略' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '數據和技術基礎是評估AI導入可行性的核心，直接影響項目成功率。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 131,
      question: '在企業評估導入AI應用的員工技能和培訓需求時，下列哪一項屬於考量？',
      options: [
        { label: 'A', text: '現有的硬體設施是否足夠' },
        { label: 'B', text: '數據是否完整、一致和準確' },
        { label: 'C', text: '員工是否具備基本的AI知識' },
        { label: 'D', text: '導入AI的預期效益分析' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '員工的AI知識水平直接影響導入的順利程度，需評估並提供培訓。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 132,
      question: '在評估AI方案導入的優先順序時，若DIP工站架設攝像頭評估導入難易程度為3分，人工動作影像標註為4分，則制定方案優先順序時應主要考量？',
      options: [
        { label: 'A', text: '各部門評估導入帶來的好處總和' },
        { label: 'B', text: '綜合評估導入難易程度與帶來的好處' },
        { label: 'C', text: '僅考量導入難易程度低的項目' },
        { label: 'D', text: '僅考量導入可能帶來好處最大的項目' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '優先順序需平衡導入難易度和預期效益，確保資源分配合理。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 133,
      question: '針對企業導入AI的設計階段，其主要目的為何？',
      options: [
        { label: 'A', text: '持續發揮導入AI的價值' },
        { label: 'B', text: '確保AI導入既有流程後人員能適應變動' },
        { label: 'C', text: '確認AI應用需求規格' },
        { label: 'D', text: '監控AI模型效能並評估重新訓練頻率' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '設計階段專注於明確AI應用需求和規格，為後續開發奠定基礎。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 134,
      question: '在AI導入的實施/營運階段，確保模型能長期適應動態的業務環境並保持高效預測能力的主要步驟是？',
      options: [
        { label: 'A', text: '闡明導入AI必要性、提供員工所需AI知識與技能培訓資源' },
        { label: 'B', text: '將AI應用從單點擴展到各部門和各層級' },
        { label: 'C', text: '監控AI模型效能、評估重新訓練頻率與閾值' },
        { label: 'D', text: '解決大規模應用AI衍生的技術、文化、制度等層面問題' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '監控模型效能並定期重新訓練是確保AI適應動態環境的關鍵步驟。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 135,
      question: '負責任AI的核心原則旨在？',
      options: [
        { label: 'A', text: '加速AI技術的發展與應用' },
        { label: 'B', text: '提高AI系統的運算效能' },
        { label: 'C', text: '防止AI系統引發社會不公、歧視、隱私侵害和其他潛在的負面影響' },
        { label: 'D', text: '確保AI系統的商業價值最大化' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '負責任AI專注於避免社會不公、歧視和隱私侵害，確保技術應用符合倫理。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 136,
      question: '在評估AI系統的公平性時，「精確率的差異」是指？',
      options: [
        { label: 'A', text: '模型預測錯誤的比例在不同子群體之間存在差異' },
        { label: 'B', text: '模型預測值與實際值之間的差距在不同子群體中存在差異' },
        { label: 'C', text: '模型能夠正確預測正類樣本的比例在不同子群體中存在差異' },
        { label: 'D', text: '模型預測正確的比例在不同子群體之間存在差異' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '精確率差異指模型對正類樣本的預測正確率在不同群體間的差異，反映公平性問題。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 137,
      question: '在機器學習生命週期中，對模型註冊事件進行通知和提醒的主要目的是？',
      options: [
        { label: 'A', text: '監控應用程式的操作問題' },
        { label: 'B', text: '探索訓練和推理之間模型輸入的差異' },
        { label: 'C', text: '確保相關人員及時獲悉模型的重要階段並做出反應' },
        { label: 'D', text: '提供機器學習基礎設施的監控和警報' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '模型註冊事件通知確保相關人員了解模型訓練、部署等關鍵階段，促進協作。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 138,
      question: '「負責任AI儀表板」的主要功能是？',
      options: [
        { label: 'A', text: '自動化機器學習模型的訓練和部署' },
        { label: 'B', text: '提供雲端運算資源以加速AI開發' },
        { label: 'C', text: '提供單一介面，協助有效率地進行負責任AI的實務工作' },
        { label: 'D', text: '監控AI系統的硬體資源使用情況' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '負責任AI儀表板提供統一介面，監控公平性、可解釋性等，確保倫理合規。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 139,
      question: '反事實分析的主要目的是？',
      options: [
        { label: 'A', text: '評估模型在不同情境下的整體效能' },
        { label: 'B', text: '生成與當前情況略有不同的假設場景，以探索可能改變結果的特徵' },
        { label: 'C', text: '對數據進行小幅度的變動，以觀察這些變動對模型預測的影響' },
        { label: 'D', text: '提供具有相反或不同模型預測的最接近資料點' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '反事實分析通過模擬假設場景，探索特徵變化對結果的影響，提升模型解釋性。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 140,
      question: '在貸款審批被拒的反事實分析案例中，通過將客戶A的年收入從50,000美元模擬增加到60,000美元，觀察貸款結果的目的是為了進行？',
      options: [
        { label: 'A', text: '創建假設場景' },
        { label: 'B', text: '敏感度分析' },
        { label: 'C', text: '識別偏見' },
        { label: 'D', text: '調整模型' }
      ],
      answer: 'A',
      chapter: '4.3 AI 風險管理',
      explanation: '模擬收入變化屬於創建假設場景，探索不同條件下貸款結果的變化。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 141,
      question: '微擾技術的主要目的是？',
      options: [
        { label: 'A', text: '生成與當前情況略有不同的假設場景' },
        { label: 'B', text: '提供具有相反模型預測的最接近資料點' },
        { label: 'C', text: '對數據進行小幅度的變動，以觀察這些變動對模型預測的影響' },
        { label: 'D', text: '分析特徵微擾如何影響模型預測' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '微擾技術通過小幅度改變數據，觀察對模型預測的影響，評估模型穩定性。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 142,
      question: '根據歐盟《人工智慧法案》，對於被視為「不可接受風險」的AI系統，其處理原則是？',
      options: [
        { label: 'A', text: '需符合高透明度要求' },
        { label: 'B', text: '需定期接受合規評估' },
        { label: 'C', text: '將被禁止' },
        { label: 'D', text: '需進行嚴格的風險管理' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '歐盟AI法案對高風險AI系統（如涉及歧視）採取禁止措施，確保安全和倫理。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 143,
      question: '中華民國生成式AI參考指引（草案）的主要適用對象是？',
      options: [
        { label: 'A', text: '全國所有企業和個人' },
        { label: 'B', text: '行政院及所屬機關（構）' },
        { label: 'C', text: '公營事業機構和公立學校' },
        { label: 'D', text: '民間企業和研究機構' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '該指引主要針對行政院及所屬機構，規範公部門使用生成式AI的行為。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 144,
      question: '根據中華民國生成式AI參考指引（草案），業務承辦人在使用生成式AI時，不得提供下列哪類資訊？',
      options: [
        { label: 'A', text: '已公開的政府統計數據' },
        { label: 'B', text: '經機關（構）同意公開的資訊' },
        { label: 'C', text: '涉及公務應保密的資訊' },
        { label: 'D', text: '一般的政策宣導內容' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '指引禁止提供涉及公務保密的資訊，以保護敏感數據。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 145,
      question: '企業在評估是否導入AI應用時，首先需要？',
      options: [
        { label: 'A', text: '分析現有數據和技術基礎' },
        { label: 'B', text: '評估員工技能和培訓需求' },
        { label: 'C', text: '了解企業的目標和挑戰' },
        { label: 'D', text: '進行成本效益分析' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: '了解企業目標和挑戰是AI導入的第一步，確保技術應用與業務需求一致。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 146,
      question: '在企業評估導入AI應用的數據品質時，「數據一致性」是指？',
      options: [
        { label: 'A', text: '數據是否沒有遺漏或缺失' },
        { label: 'B', text: '數據在不同系統中是否一致' },
        { label: 'C', text: '數據是否準確和真實' },
        { label: 'D', text: '數據是否符合特定的格式要求' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '數據一致性指數據在不同系統或來源中保持一致，確保模型輸入可靠性。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 147,
      question: '資料導向的深入解析主要透過負責任AI儀表板的哪個元件提供？',
      options: [
        { label: 'A', text: '反事實假設' },
        { label: 'B', text: '模型導向的深入解析' },
        { label: 'C', text: '原因推斷元件' },
        { label: 'D', text: '模型概覽' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '模型導向的深入解析提供資料洞察，幫助理解模型行為和數據模式。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 148,
      question: '企業部門主管在確認AI應用情境時，主要負責下列哪項工作？',
      options: [
        { label: 'A', text: '設定AI分析項目、預測時間範疇' },
        { label: 'B', text: '規劃AI產出的具體形式' },
        { label: 'C', text: '提供AI所需的原始數據' },
        { label: 'D', text: '評估AI導入的成本效益' }
      ],
      answer: 'A',
      chapter: '4.3 AI 風險管理',
      explanation: '部門主管負責定義AI分析項目和時間範圍，確保與業務需求一致。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 149,
      question: '在企業導入AI時，若希望提高模型的可解釋性，應採用哪種技術？',
      options: [
        { label: 'A', text: '增加模型的參數數量' },
        { label: 'B', text: '使用可解釋性AI技術（如SHAP或LIME）' },
        { label: 'C', text: '減少訓練數據的多樣性' },
        { label: 'D', text: '僅使用簡單的線性模型' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: 'SHAP和LIME等可解釋性技術能揭示模型決策過程，提升透明度。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 150,
      question: '在數據準備階段，哪一項技術可以用來處理遺漏值？',
      options: [
        { label: 'A', text: 'KNN 插補法' },
        { label: 'B', text: 'One-hot 編碼' },
        { label: 'C', text: '標準化' },
        { label: 'D', text: '降維' }
      ],
      answer: 'A',
      chapter: '5.1 數據準備與模型選擇',
      explanation: 'KNN插補法利用鄰近數據點估計遺漏值，適用於數據預處理。其他選項用於不同目的。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 151,
      question: '以下哪種技術通常用於強化學習（Reinforcement Learning）？',
      options: [
        { label: 'A', text: 'Q-learning' },
        { label: 'B', text: '支持向量機（SVM）' },
        { label: 'C', text: 'K-means 聚類' },
        { label: 'D', text: '主要成分分析（PCA）' }
      ],
      answer: 'A',
      chapter: '5.1 數據準備與模型選擇',
      explanation: 'Q-learning是強化學習的經典算法，通過學習動作價值函數優化決策。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 152,
      question: '在 AI 模型的運行環境中，「推理」（Inference）指的是？',
      options: [
        { label: 'A', text: '訓練 AI 模型' },
        { label: 'B', text: '對新輸入數據進行預測' },
        { label: 'C', text: '儲存 AI 模型的權重' },
        { label: 'D', text: '監控 AI 運行的能耗' }
      ],
      answer: 'B',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '推理是指使用訓練好的模型對新數據進行預測或分類，是AI應用的核心步驟。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 153,
      question: '以下哪項技術可用於 AI 模型的優化？',
      options: [
        { label: 'A', text: '模型剪枝（Model Pruning）' },
        { label: 'B', text: '增加網路層數' },
        { label: 'C', text: '只使用 CPU 而不使用 GPU' },
        { label: 'D', text: '減少數據集的多樣性' }
      ],
      answer: 'A',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '模型剪枝通過移除不必要的參數，減少模型複雜度和計算需求，提升效率。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 154,
      question: '哪一項技術可以用來減少 AI 模型的過擬合（Overfitting）？',
      options: [
        { label: 'A', text: '增加訓練數據' },
        { label: 'B', text: '減少模型層數' },
        { label: 'C', text: '只使用測試數據訓練模型' },
        { label: 'D', text: '減少特徵數量' }
      ],
      answer: 'A',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '增加訓練數據的多樣性和數量有助於模型學習更廣泛的模式，減少過擬合風險。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 155,
      question: '以下哪種 AI 模型適合處理序列資料（Sequential Data）？',
      options: [
        { label: 'A', text: 'CNN（卷積神經網路）' },
        { label: 'B', text: 'RNN（循環神經網路）' },
        { label: 'C', text: 'KNN（K 近鄰演算法）' },
        { label: 'D', text: 'PCA（主成分分析）' }
      ],
      answer: 'B',
      chapter: '5.1 數據準備與模型選擇',
      explanation: 'RNN專為處理序列數據設計，能捕捉時間或順序相關的依賴關係。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 156,
      question: '在 AI 訓練過程中，微調（Fine-tuning）技術的主要目的是？',
      options: [
        { label: 'A', text: '提高模型的可解釋性' },
        { label: 'B', text: '讓模型適應特定任務或數據集' },
        { label: 'C', text: '減少運算時間' },
        { label: 'D', text: '增加訓練數據量' }
      ],
      answer: 'B',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '微調通過在預訓練模型上針對特定任務進行進一步訓練，提升模型在特定場景的表現。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 157,
      question: '什麼是 AI 模型壓縮技術？',
      options: [
        { label: 'A', text: '降低 AI 模型的運行時間' },
        { label: 'B', text: '減少 AI 模型的儲存空間與運算需求' },
        { label: 'C', text: '增強 AI 模型的學習能力' },
        { label: 'D', text: '增加 AI 模型的計算層數' }
      ],
      answer: 'B',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '模型壓縮技術（如剪枝、量化）旨在減少模型的儲存和計算需求，提升效率。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 158,
      question: '一個 AI 模型在訓練時出現嚴重的過擬合問題，你可以採取的措施不包括？',
      options: [
        { label: 'A', text: '增加訓練數據量' },
        { label: 'B', text: '使用更深層的神經網路' },
        { label: 'C', text: '加入 Dropout 技術' },
        { label: 'D', text: '使用 L2 正則化' }
      ],
      answer: 'B',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '增加更深層的神經網路可能加劇過擬合，而增加數據量、Dropout和L2正則化有助於減少過擬合。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 159,
      question: '企業在導入 AI 時，若數據來源包含異質數據，最合適的數據前處理方法是？',
      options: [
        { label: 'A', text: '直接將數據合併進行訓練' },
        { label: 'B', text: '先進行特徵工程與正規化處理' },
        { label: 'C', text: '只保留數量最多的數據類型' },
        { label: 'D', text: '移除所有異質數據，確保模型不受影響' }
      ],
      answer: 'B',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '特徵工程和正規化有助於統一異質數據的格式，提升模型訓練效果。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 160,
      question: 'AI 在「聯邦學習」(Federated Learning) 的主要優勢是？',
      options: [
        { label: 'A', text: '提高數據隱私與安全性' },
        { label: 'B', text: '降低 AI 訓練成本' },
        { label: 'C', text: 'AI 訓練完全去中心化' },
        { label: 'D', text: '以上皆是' }
      ],
      answer: 'D',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '聯邦學習允許在本地設備上訓練模型，保護數據隱私、降低成本並實現去中心化。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 161,
      question: '「知識挖掘」的主要目標是從大量數據中發現？',
      options: [
        { label: 'A', text: '潛在的商業合作夥伴' },
        { label: 'B', text: '隱藏的模式、關聯和知識' },
        { label: 'C', text: '最暢銷的產品列表' },
        { label: 'D', text: '最有效的廣告投放渠道' }
      ],
      answer: 'B',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '知識挖掘旨在從大數據中提取隱藏的模式和關聯，產生有價值的洞察。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 162,
      question: '支持向量機（SVM）是一種？',
      options: [
        { label: 'A', text: '非監督式學習模型' },
        { label: 'B', text: '生成式模型' },
        { label: 'C', text: '監督式學習模型' },
        { label: 'D', text: '強化學習模型' }
      ],
      answer: 'C',
      chapter: '5.1 數據準備與模型選擇',
      explanation: 'SVM是一種監督式學習模型，用於分類和回歸任務，通過尋找最佳超平面分隔數據。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 163,
      question: '機器學習被定義為使電腦能夠從什麼中學習的科學？',
      options: [
        { label: 'A', text: '人工編寫的規則' },
        { label: 'B', text: '大量的程式碼' },
        { label: 'C', text: '數據' },
        { label: 'D', text: '預先設定的知識庫' }
      ],
      answer: 'C',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '機器學習通過從數據中學習模式和規律，實現無需顯式編程的智能行為。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 164,
      question: '機器學習的運作模式不包括？',
      options: [
        { label: 'A', text: '數據分類' },
        { label: 'B', text: '數據壓縮' },
        { label: 'C', text: '數據分析與預測' },
        { label: 'D', text: '分群' }
      ],
      answer: 'B',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '數據壓縮屬於數據處理技術，而非機器學習的核心運作模式。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 165,
      question: '在機器學習中，「特徵」是作為系統？',
      options: [
        { label: 'A', text: '輸出的預測結果' },
        { label: 'B', text: '輸入的獨立變量' },
        { label: 'C', text: '訓練的目標' },
        { label: 'D', text: '評估的標準' }
      ],
      answer: 'B',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '特徵是輸入數據的獨立變量，用於模型學習和預測。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 166,
      question: '為了使機器學習模型能夠更好地訓練與工作，需要進行？',
      options: [
        { label: 'A', text: '模型壓縮' },
        { label: 'B', text: '特徵工程' },
        { label: 'C', text: '演算法升級' },
        { label: 'D', text: '硬體加速' }
      ],
      answer: 'B',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '特徵工程通過選擇和轉換合適的特徵，提升模型的訓練效果和性能。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 167,
      question: '在監督式學習中，「標籤」是？',
      options: [
        { label: 'A', text: '輸入模型的原始數據' },
        { label: 'B', text: '模型學習過程中的參數' },
        { label: 'C', text: '已知的結果，模型在訓練過程中學習將其與輸入特徵相關聯' },
        { label: 'D', text: '模型預測不確定性的度量' }
      ],
      answer: 'C',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '標籤是監督式學習中的已知結果，模型學習將特徵與標籤關聯。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 168,
      question: '了解數據的分佈和特徵對AI模型開發的哪個環節沒有直接的幫助？',
      options: [
        { label: 'A', text: '數據預處理' },
        { label: 'B', text: '特徵選擇' },
        { label: 'C', text: '模型選擇' },
        { label: 'D', text: '模型部署' }
      ],
      answer: 'D',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '數據分佈和特徵分析主要影響預處理、特徵選擇和模型選擇，部署階段影響較小。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 169,
      question: '知識挖掘的主要目標是？',
      options: [
        { label: 'A', text: '自動生成新的文本內容' },
        { label: 'B', text: '將掃描的文件轉換為可編輯的文本' },
        { label: 'C', text: '從大量數據中發現隱藏的、有用的模式和資訊' },
        { label: 'D', text: '自動執行重複性的文件處理任務' }
      ],
      answer: 'C',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '知識挖掘從大數據中提取隱藏模式和資訊，產生商業洞察。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 170,
      question: '在AI模型訓練過程中，若發現模型對某些類別的預測偏差較大，可能的原因是？',
      options: [
        { label: 'A', text: '訓練數據中該類別的樣本數不足' },
        { label: 'B', text: '模型的計算能力過高' },
        { label: 'C', text: '訓練時間過長' },
        { label: 'D', text: '使用了不適合的優化器' }
      ],
      answer: 'A',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '類別樣本數不足導致模型無法充分學習該類特徵，產生預測偏差。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 171,
      question: '在AI導入的過程中，企業需要評估「技術債」（Technical Debt），這主要指的是？',
      options: [
        { label: 'A', text: '硬體設備的折舊成本' },
        { label: 'B', text: '因快速部署AI而導致的長期維護與更新成本' },
        { label: 'C', text: '員工培訓的費用' },
        { label: 'D', text: '購買AI模型的初始投資' }
      ],
      answer: 'B',
      chapter: '4.1 AI 導入評估',
      explanation: '技術債指因快速部署AI系統而忽略最佳實踐，導致未來需要額外的維護與更新成本。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 172,
      question: '在AI導入的成本效益分析中，企業需要考慮的成本不包括？',
      options: [
        { label: 'A', text: '數據收集與標註成本' },
        { label: 'B', text: '模型訓練與部署成本' },
        { label: 'C', text: '員工的個人興趣' },
        { label: 'D', text: '系統維護與更新成本' }
      ],
      answer: 'C',
      chapter: '4.1 AI 導入評估',
      explanation: '成本效益分析應聚焦數據、訓練、部署及維護成本，員工個人興趣與此無關。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 173,
      question: '在AI導入的過程中，企業需要進行「變革管理」（Change Management），其主要目的是？',
      options: [
        { label: 'A', text: '降低硬體成本' },
        { label: 'B', text: '確保員工適應AI技術的導入' },
        { label: 'C', text: '提高模型的運算速度' },
        { label: 'D', text: '減少數據收集的工作量' }
      ],
      answer: 'B',
      chapter: '4.1 AI 導入評估',
      explanation: '變革管理幫助員工適應AI技術的導入，減少抵觸並提升效率。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 174,
      question: '在AI導入的過程中，企業需要考慮「數據治理」（Data Governance），其主要目的是？',
      options: [
        { label: 'A', text: '提高模型的運算速度' },
        { label: 'B', text: '確保數據的質量、隱私和合規性' },
        { label: 'C', text: '降低數據收集的成本' },
        { label: 'D', text: '增加數據的數量' }
      ],
      answer: 'B',
      chapter: '4.1 AI 導入評估',
      explanation: '數據治理確保數據質量、隱私和合規性，為AI導入提供可靠基礎。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 175,
      question: '在企業評估導入AI應用時，下列哪一項屬於「員工技能和培訓需求」的考量？',
      options: [
        { label: 'A', text: '現有的硬體設施是否足夠' },
        { label: 'B', text: '數據是否完整、一致和準確' },
        { label: 'C', text: '員工是否具備基本的AI知識' },
        { label: 'D', text: '導入AI的預期效益分析' }
      ],
      answer: 'C',
      chapter: '4.1 AI 導入評估',
      explanation: '員工技能和培訓需求聚焦於員工是否具備使用AI的基礎知識。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 176,
      question: '在AI模型的持續監控中，應該定期檢查的指標不包括？',
      options: [
        { label: 'A', text: '模型的預測準確率' },
        { label: 'B', text: '數據漂移（Data Drift）' },
        { label: 'C', text: '模型的訓練時間' },
        { label: 'D', text: '模型的公平性指標' }
      ],
      answer: 'C',
      chapter: '5.2 AI 技術系統集成與部署',
      explanation: '持續監控應聚焦模型性能（如準確率、數據漂移、公平性），而訓練時間屬於訓練階段的指標。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 177,
      question: '在醫療領域，AI模型的應用需要符合HIPAA（健康保險流通與責任法案）的要求，這主要涉及？',
      options: [
        { label: 'A', text: '提高模型的計算速度' },
        { label: 'B', text: '確保患者數據的隱私與安全' },
        { label: 'C', text: '降低模型的訓練成本' },
        { label: 'D', text: '增加模型的複雜度' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: 'HIPAA要求保護患者數據隱私與安全，AI模型需遵守相關數據處理規範。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 178,
      question: '在AI模型的部署中，若採用「影子模式」（Shadow Mode），其主要目的是？',
      options: [
        { label: 'A', text: '直接取代現有系統' },
        { label: 'B', text: '在不影響現有流程的情況下測試AI模型的表現' },
        { label: 'C', text: '降低模型的運算成本' },
        { label: 'D', text: '加速模型的訓練過程' }
      ],
      answer: 'B',
      chapter: '5.2 AI 技術系統集成與部署',
      explanation: '影子模式允許在現有系統運行時測試AI模型，確保其表現穩定而不影響實際運營。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 179,
      question: '在AI模型的部署中，若採用容器化技術（如Docker），其主要優勢是？',
      options: [
        { label: 'A', text: '降低模型的訓練時間' },
        { label: 'B', text: '提高模型的可移植性與環境一致性' },
        { label: 'C', text: '減少模型的參數數量' },
        { label: 'D', text: '增加模型的複雜度' }
      ],
      answer: 'B',
      chapter: '5.2 AI 技術系統集成與部署',
      explanation: '容器化技術（如Docker）確保模型在不同環境中一致運行，提升可移植性。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 180,
      question: '在AI模型的訓練中，若希望提高模型的泛化能力，應採取以下哪種方法？',
      options: [
        { label: 'A', text: '增加模型的層數和參數' },
        { label: 'B', text: '使用數據增強（Data Augmentation）技術' },
        { label: 'C', text: '只使用單一來源的數據' },
        { label: 'D', text: '降低模型的學習率' }
      ],
      answer: 'B',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '數據增強通過增加數據多樣性，幫助模型學習更廣泛的模式，提升泛化能力。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 181,
      question: '在AI模型的訓練中，若發現模型的損失函數（Loss Function）不再下降，可能的原因是？',
      options: [
        { label: 'A', text: '訓練數據過多' },
        { label: 'B', text: '模型已達到收斂' },
        { label: 'C', text: '模型的參數過少' },
        { label: 'D', text: '訓練數據的質量過高' }
      ],
      answer: 'B',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '損失函數不再下降通常表示模型已達到收斂，無法進一步優化。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 182,
      question: '在AI模型的評估中，ROC曲線（Receiver Operating Characteristic）主要用於評估什麼？',
      options: [
        { label: 'A', text: '模型的訓練時間' },
        { label: 'B', text: '模型的分類性能' },
        { label: 'C', text: '模型的計算成本' },
        { label: 'D', text: '模型的參數數量' }
      ],
      answer: 'B',
      chapter: '5.1 數據準備與模型選擇',
      explanation: 'ROC曲線用於評估分類模型的性能，特別是真陽率與假陽率的平衡。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 183,
      question: '在AI模型的訓練中，若使用遷移學習（Transfer Learning），其主要優勢是？',
      options: [
        { label: 'A', text: '無需任何訓練數據' },
        { label: 'B', text: '減少訓練時間並利用預訓練模型的知識' },
        { label: 'C', text: '增加模型的參數數量' },
        { label: 'D', text: '降低模型的泛化能力' }
      ],
      answer: 'B',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '遷移學習利用預訓練模型的知識，減少訓練時間並提升效率。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 184,
      question: '在AI模型的倫理考量中，「透明性」的主要目的是？',
      options: [
        { label: 'A', text: '提高模型的運算效率' },
        { label: 'B', text: '讓用戶理解模型的決策過程' },
        { label: 'C', text: '降低模型的訓練成本' },
        { label: 'D', text: '增加模型的參數數量' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '透明性確保用戶能理解AI決策過程，增強信任並符合倫理要求。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 185,
      question: '在AI導入的風險管理中，如何有效應對模型的「黑盒問題」？',
      options: [
        { label: 'A', text: '使用更複雜的深度學習模型' },
        { label: 'B', text: '採用可解釋性技術，如SHAP或LIME' },
        { label: 'C', text: '減少模型的訓練數據' },
        { label: 'D', text: '限制模型的使用範圍' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: 'SHAP和LIME等可解釋性技術能揭示模型決策邏輯，解決黑盒問題。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 186,
      question: '在AI導入的風險評估中，企業需要特別關注的法律風險不包括？',
      options: [
        { label: 'A', text: '數據隱私法規' },
        { label: 'B', text: '知識產權法規' },
        { label: 'C', text: '員工薪資法規' },
        { label: 'D', text: 'AI倫理規範' }
      ],
      answer: 'C',
      chapter: '4.3 AI 風險管理',
      explanation: 'AI導入的法律風險包括數據隱私、知識產權和倫理規範，員工薪資法規與此無關。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
    {
      id: 187,
      question: '在數位圖像中，RGB三個通道分別代表？',
      options: [
        { label: 'A', text: '長度、寬度、深度' },
        { label: 'B', text: '紅色、綠色、藍色' },
        { label: 'C', text: '解析度、幀率、位元深度' },
        { label: 'D', text: '光照、陰影、色彩飽和度' }
      ],
      answer: 'B',
      chapter: '3.2 電腦視覺技術與應用',
      explanation: 'RGB通道分別代表紅色、綠色和藍色，用於表示圖像的顏色。',
      optionExplanations: { A: null, B: null, C: null, D: null }
    },
  ]
}