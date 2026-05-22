/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：subject1-mock-part1a.js
 * 功能：模擬題 科目一（第 1-24 題）
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
      optionExplanations: { A: '分詞技術是 NLP 的基礎步驟，用於將連續文字切分成有意義的詞語單元。', B: null, C: '命名實體識別（NER）是 NLP 的核心任務之一，用於辨識文本中的人名、地名等實體。', D: '依存句法分析是 NLP 中分析詞語間語法關係的重要技術。' }
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
      optionExplanations: { A: '卷積層是 CNN 的核心元件，用於提取局部特徵，並非 Transformer 的核心機制。', B: 'LSTM 是 RNN 的改良版本，用於處理序列資料，但 Transformer 刻意捨棄了遞歸結構。', C: null, D: '反向傳播是神經網路訓練的通用演算法，並非 Transformer 獨有的核心機制。' }
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
      optionExplanations: { A: 'BERT 的名稱中 Bidirectional 即表示雙向，並非單向語言模型。', B: 'BERT 的預訓練使用的是自監督學習（遮罩語言模型），而非無監督學習。', C: null, D: 'BERT 是編碼器架構，主要用於理解任務（分類、NER 等），並非生成式模型。' }
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
      optionExplanations: { A: '詞嵌入的目的是表示語義關係，而非壓縮文本資料量。', B: null, C: '語法分析樹由句法分析器產生，與詞嵌入的向量表示功能無關。', D: '詞嵌入是將詞語轉換為數值向量，而非轉換為圖片。' }
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
      optionExplanations: { A: null, B: 'Transformer 的訓練速度比 RNN 快，因為可以平行處理，而非更慢。', C: 'Transformer 可以進行序列標註，例如 BERT 就常用於命名實體識別等序列標註任務。', D: 'Transformer 通常需要大規模數據集才能發揮優勢，並非特別適用於小規模數據集。' }
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
      optionExplanations: { A: 'MFCC 是頻譜特徵提取方法，時序關係由後續的模型（如 RNN）處理，而非 MFCC 本身。', B: null, C: 'MFCC 是特徵提取步驟，與減少訓練時間無關。', D: 'MFCC 是特徵提取技術，正則化是防止過擬合的訓練策略，兩者用途不同。' }
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
      optionExplanations: { A: '語料庫較小時，Word2Vec 訓練反而更快，不會有訓練時間過長的問題。', B: '向量維度是人為設定的超參數，與語料庫大小無直接關係。', C: '過擬合雖然可能發生，但 Word2Vec 在小語料下最主要的問題是無法學到有意義的語義關係。', D: null }
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
      optionExplanations: { A: null, B: 'CNN 依賴局部感受野，處理長序列時需要多層堆疊，效率不如 Self-Attention。', C: 'Transformer 廣泛應用於語言建模，例如 GPT 系列就是基於 Transformer 的語言模型。', D: 'Self-Attention 不需要池化層，它直接透過注意力權重計算序列中各位置的關聯性。' }
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
      optionExplanations: { A: '醫學影像分析屬於電腦視覺（CV）領域，而非自然語言處理。', B: '生產流程優化屬於工業工程或自動化控制領域，與 NLP 文本處理無直接關係。', C: null, D: '氣象預報主要依賴數值模擬與感測器數據，並非 NLP 在金融領域的應用。' }
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
      optionExplanations: { A: 'OCR 是 IDP 的核心技術之一，負責將紙本或圖像中的文字轉為數位文字。', B: 'NLP 是 IDP 的核心技術之一，用於理解和提取文件中的語義資訊。', C: null, D: '機器學習是 IDP 的核心技術之一，用於訓練模型自動分類和提取文件資訊。' }
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
      optionExplanations: { A: '預生成模型針對常見文件類型預訓練，無法處理「任何」格式的文件，仍有適用範圍限制。', B: null, C: '預生成模型的優勢正是減少自訂訓練數據的需求，而非需要大量自訂數據。', D: '預生成模型通常支援多語言文件辨識，並非只能識別單一語言。' }
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
      optionExplanations: { A: '基因序列分析屬於生物資訊學領域，需要專門的序列分析模型，非預生成文件辨識模型的應用。', B: '星體圖像分類屬於天文學的影像辨識領域，與文件辨識的預生成模型無關。', C: null, D: '股票市場預測屬於時間序列分析領域，並非預生成文件辨識模型的典型應用。' }
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
      optionExplanations: { A: '情感傾向分析是情感分析（Sentiment Analysis）的功能，而非關鍵片語擷取。', B: null, C: '字數統計是基本的文字處理功能，不需要關鍵片語擷取技術。', D: '語言種類判別屬於語言偵測技術，與關鍵片語擷取的功能不同。' }
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
      optionExplanations: { A: '實體恰恰是文本中重要且有意義的詞語，而非不重要的詞語。', B: null, C: '連接句子和段落的詞語屬於連接詞或過渡詞，並非 NLP 中「實體」的定義。', D: '表達情感的詞語屬於情感詞彙，情感分析會處理這類詞語，但它們不是「實體」。' }
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
      optionExplanations: { A: '文字分類需要有明確的類別定義，隨機生成的類別無法進行有意義的分類。', B: null, C: '文本長度不是分類的依據，自訂文字分類是根據內容語義進行分類。', D: '語法結構分析屬於句法分析的範疇，與文字分類的目的不同。' }
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
      optionExplanations: { A: 'NER 是根據語義類別分類實體，並非根據詞頻排序。', B: null, C: '字母順序是排列方式而非分類方式，NER 按語義類別（人、地、組織等）分類。', D: '情感極性分析屬於情感分析任務，NER 辨識的是實體類別而非情感。' }
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
      optionExplanations: { A: '技術術語屬於專業詞彙範疇，並非 PII 偵測的目標。', B: null, C: '產品規格屬於商業資訊，不屬於個人識別資訊的範疇。', D: '歷史事件描述屬於一般文本內容，並非個人識別資訊。' }
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
      optionExplanations: { A: '主要論點的識別屬於文本摘要或論點擷取技術，而非語言偵測。', B: '修辭手法分析屬於文體學或語言風格分析，非語言偵測的功能。', C: null, D: '作者風格辨識屬於作者歸屬分析（Authorship Attribution），與語言偵測不同。' }
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
      optionExplanations: { A: '標點符號在不同語言中有部分差異，但並非統計方法進行語言偵測的主要依據。', B: null, C: '顏文字和表情符號是跨語言通用的，無法作為語言偵測的有效特徵。', D: '超連結和網址通常是語言無關的結構化資訊，不適合用於語言偵測。' }
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
      optionExplanations: { A: 'CRF 的優勢在於建模標籤之間的依賴關係，獨立性假設反而是其他模型（如 Naive Bayes）的特點。', B: null, C: '結構化是 CRF 輸出的特性，但其核心優勢是處理上下文依賴性，而非僅因數據結構化。', D: '數據量小並非 CRF 特別擅長處理的特性，CRF 的優勢在於考慮序列的上下文關係。' }
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
      optionExplanations: { A: '用戶評論的情感分析屬於情感分析任務，而非 CRF 序列標註在電商中的典型應用。', B: null, C: '促銷活動時間提取屬於事件時間抽取，非 CRF 在商品描述中序列標註的主要用途。', D: '物流配送方式是結構化的分類資訊，不需要使用序列標註技術來識別。' }
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
      optionExplanations: { A: '卷積運算是 CNN 的核心操作，用於提取局部空間特徵，非 Transformer 的關鍵機制。', B: '遞歸神經網路（RNN）是另一種序列模型，Transformer 正是為了取代 RNN 的遞歸結構而設計。', C: null, D: '池化操作用於降維和提取主要特徵，常見於 CNN，並非 Transformer 的關鍵機制。' }
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
      optionExplanations: { A: '逐字翻譯無法處理語序差異和語境，現代機器翻譯追求的是語義層面的翻譯。', B: null, C: '僅依賴詞典的翻譯是早期規則式翻譯的做法，Transformer 使用的是深度學習方法。', D: 'Transformer 需要大量平行語料進行訓練，無法在無訓練數據的情況下進行翻譯。' }
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
      optionExplanations: { A: '生成全新句子來概括原文是「生成式摘要」（Abstractive Summarization）的做法，而非擷取式。', B: null, C: '翻譯成另一種語言再摘要並非擷取式摘要的方法，擷取式摘要直接從原文選取句子。', D: '同義詞替換屬於改寫（Paraphrase）技術，與擷取式摘要直接選取原句的方式不同。' }
    }
]
