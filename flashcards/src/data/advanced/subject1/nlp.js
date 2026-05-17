/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：nlp.js
 * 功能：自然語言處理技術與應用 - 中級卡片資料
 * 建立日期：2026-05-15
 * 版本：1.0.0
 */

export default {
  id: 'nlp',
  label: '自然語言處理技術與應用',
  cards: [
    {
      number: 1,
      title: '情感分析',
      engTitle: 'Sentiment Analysis',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'mood',
            content: '分析文字中表達的「情感傾向」-- 正面、負面還是中性。讓機器讀懂人話中的情緒和態度。'
          },
          {
            label: '怎麼做',
            icon: 'build',
            code: '輸入：「這個產品超好用，買了不後悔！」\n輸出：正面（信心度 95%）\n\n輸入：「客服態度很差，等了一小時」\n輸出：負面（信心度 88%）\n\n輸入：「東西收到了」\n輸出：中性'
          },
          {
            label: '應用場景',
            icon: 'storefront',
            content: '社群輿情監控、商品評論分析、品牌聲譽追蹤、客服滿意度即時監測、選舉民意分析。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '情感分析的核心目的：「判斷文本中所表達的情感傾向」。\n\n不是「預測語言風格」（那是風格分析 / Stylometry）。\n不是「自動翻譯」（那是機器翻譯 / Machine Translation）。\n不是「生成摘要」（那是文本摘要 / Text Summarization）。\n\n情境關鍵字：「掌握滿意度變化」「分析評論情感」→ 情感分析。'
          }
        ]
      }
    },
    {
      number: 2,
      title: 'Transformer 架構',
      engTitle: 'Transformer Architecture',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'architecture',
            content: '2017 年 Google 提出的革命性架構，完全基於「注意力機制」運作，拋棄了 RNN 的順序處理。是 GPT、BERT、LLM 的底層基礎。'
          },
          {
            label: '核心結構',
            icon: 'build',
            code: 'Encoder（編碼器）\n  輸入文字 → 理解語意\n  BERT 主要用這邊\n\nDecoder（解碼器）\n  根據理解 → 生成文字\n  GPT 主要用這邊\n\n兩者都靠「自注意力機制」運作\n\n自注意力（Self-Attention）：\n  每個字都能「看到」句子裡的所有其他字\n  → 能捕捉長距離的語境依賴關係\n  → 不像 RNN 要一步一步傳遞，容易遺忘'
          },
          {
            label: '為什麼比 RNN 好',
            icon: 'compare',
            code: 'RNN  → 順序處理，一步步傳，長距離會遺忘\nLSTM → 改善遺忘，但還是順序處理（慢）\nTransformer → 平行處理 + 注意力直接看全文\n  → 速度快、長距離記憶好、效果更強'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考法：「Transformer 能改善長篇文件翻譯品質的主要原因？」\n→ 「透過自注意力機制捕捉長距離語境依賴關係」\n\n不是「卷積運算加速」（卷積是 CNN 的，不是 Transformer）。\n不是「強化學習調整策略」（訓練方式不同）。\n不是「資料增強平衡語料」（那是資料前處理）。'
          }
        ]
      }
    },
    {
      number: 3,
      title: 'BERT',
      engTitle: 'Bidirectional Encoder Representations from Transformers',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'psychology',
            content: 'Google 在 2018 年推出的預訓練語言模型。核心特色是「雙向」-- 同時看左邊和右邊的上下文來理解每個字的意思。主要用 Transformer 的 Encoder 部分。'
          },
          {
            label: '預訓練方式：MLM',
            icon: 'build',
            code: '遮罩語言模型（Masked Language Model）：\n\n原句：「我 喜歡 吃 蘋果」\n遮罩：「我 [MASK] 吃 蘋果」\n\n→ 模型要根據左右兩邊的上下文\n  猜出 [MASK] = 「喜歡」\n\n關鍵：隨機遮罩（不是固定遮句尾）\n      雙向上下文（同時看左和右）'
          },
          {
            label: '跟 GPT 的差別',
            icon: 'compare',
            code: 'BERT → Encoder，雙向，擅長「理解」\n  適合：分類、問答、命名實體辨識\n\nGPT  → Decoder，單向（左到右），擅長「生成」\n  適合：文字生成、對話、翻譯\n\nBERT 看全文理解意思 → 判斷型任務\nGPT 從左到右生成 → 創作型任務'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'MLM 的訓練策略：「隨機遮罩部分詞語，根據雙向上下文預測被遮罩的詞」。\n\n錯誤選項：\n- 「從左到右逐步生成」→ 那是 GPT 的做法，不是 BERT\n- 「對抗訓練」→ 那是 GAN 的做法\n- 「用解碼器重建整句」→ BERT 用的是 Encoder，不是 Decoder'
          }
        ]
      }
    },
    {
      number: 4,
      title: 'GPT',
      engTitle: 'Generative Pre-trained Transformer',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'chat',
            content: 'OpenAI 推出的生成式預訓練語言模型。用 Transformer 的 Decoder 部分，從左到右逐字生成文字。ChatGPT 就是基於 GPT 架構。'
          },
          {
            label: '訓練方式',
            icon: 'build',
            code: '預訓練：給前文，預測下一個字\n  「我喜歡吃」→ 預測「蘋果」\n  「今天天氣」→ 預測「很好」\n\n→ 讀大量文本，學會「接下來最可能是什麼字」\n→ 單向（只看左邊，不偷看右邊）\n\n微調：用特定任務資料調整\nRLHF：用人類偏好回饋優化回答品質'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'GPT vs BERT 是高頻考點：\n- GPT = Decoder + 單向 + 擅長生成\n- BERT = Encoder + 雙向 + 擅長理解\n\nGPT 的預訓練不是「遮罩」（那是 BERT），而是「預測下一個字」。'
          }
        ]
      }
    },
    {
      number: 5,
      title: '詞向量',
      engTitle: 'Word Embedding',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'space_bar',
            content: '把文字轉換成「數字向量」的技術。因為電腦不認識文字，只認識數字，所以需要把每個詞轉成一串數字來表達它的意思。'
          },
          {
            label: '核心概念',
            icon: 'lightbulb',
            code: '語意相近的詞 → 向量距離近\n\n例：\n  「國王」的向量 ≈ [0.2, 0.8, 0.1, ...]\n  「王后」的向量 ≈ [0.3, 0.7, 0.2, ...]\n  「蘋果」的向量 ≈ [0.9, 0.1, 0.8, ...]\n\n國王和王后很近，跟蘋果很遠\n\n經典公式：\n  國王 - 男人 + 女人 ≈ 王后'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '詞向量讓模型理解「詞與詞之間的語意關係」。是 NLP 的基礎，後續的 BERT、GPT 都建立在詞向量之上（但用更進階的 contextual embedding）。'
          }
        ]
      }
    },
    {
      number: 6,
      title: 'Word2Vec',
      engTitle: 'Word2Vec',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'text_fields',
            content: 'Google 在 2013 年推出的詞向量訓練方法。用「預測」的方式學習：看周圍的字猜中間的字（CBOW），或看中間的字猜周圍的字（Skip-gram）。'
          },
          {
            label: '兩種模式',
            icon: 'build',
            code: 'CBOW（連續詞袋）：\n  輸入：「我 __ 吃 蘋果」→ 預測「喜歡」\n  → 用上下文預測中間的詞\n\nSkip-gram：\n  輸入：「喜歡」→ 預測「我」「吃」「蘋果」\n  → 用中間的詞預測上下文'
          },
          {
            label: '特點',
            icon: 'lightbulb',
            content: '基於「預測」的模型 -- 透過神經網路學習上下文關係。每個詞只有一個固定向量（不考慮多義詞）。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'Word2Vec = 基於預測的模型（Prediction-based）。\nGloVe = 基於共現統計的模型（Count-based）。\n\n這是最常考的差異。不要搞反。\n\nCBOW vs Skip-gram：\n- CBOW 訓練快，適合高頻詞\n- Skip-gram 對罕見詞更有效（一個罕見詞能產生多組訓練樣本）\n- 考題：「大量語料 + 捕捉罕見詞」→ 選 Skip-gram'
          }
        ]
      }
    },
    {
      number: 7,
      title: 'GloVe',
      engTitle: 'Global Vectors for Word Representation',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'grid_on',
            content: 'Stanford 在 2014 年推出的詞向量訓練方法。不像 Word2Vec 用預測，而是先統計整個語料庫中「詞與詞共同出現的頻率」，再用這個共現矩陣來學習向量。'
          },
          {
            label: '怎麼做',
            icon: 'build',
            code: '1. 建立全局共現矩陣\n   統計每對詞在整個語料中一起出現的次數\n\n2. 用矩陣分解學習詞向量\n   讓向量的內積 ≈ 共現次數的 log 值\n\n→ 同時利用「全局統計」和「局部上下文」\n→ 結合兩者的優點'
          },
          {
            label: '跟 Word2Vec 的差別',
            icon: 'compare',
            code: 'Word2Vec：\n  基於預測（Prediction-based）\n  用滑動視窗逐句訓練\n  局部上下文\n\nGloVe：\n  基於共現統計（Count-based）\n  先建全局共現矩陣再訓練\n  全局統計資訊'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考法：「Word2Vec 與 GloVe 的主要差異？」\n\n正確：「Word2Vec 為基於預測的模型，GloVe 為基於共現統計的模型」。\n\n常見錯誤選項：\n- 「Word2Vec 以全局統計」→ 反了，GloVe 才是全局\n- 「Word2Vec 只能用於靜態語料」→ 兩者都是靜態詞向量\n- 「GloVe 用神經網路預測」→ 反了，Word2Vec 才用神經網路預測'
          }
        ]
      }
    },
    {
      number: 8,
      title: '文本分類',
      engTitle: 'Text Classification',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'label',
            content: '把一段文字自動歸到預定義的類別。情感分析是文本分類的一種特例（類別是正面/負面/中性）。'
          },
          {
            label: '常見應用',
            icon: 'list',
            code: '垃圾郵件偵測 → 垃圾/正常\n新聞分類     → 政治/財經/體育/娛樂\n客訴分類     → 退貨/品質/物流/服務\n意圖辨識     → 查詢/投訴/購買/諮詢'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '文本分類 = 輸入一段文字，輸出一個類別。\n情感分析 = 文本分類的子集（類別是情感）。\n命名實體辨識 = 找出文字中的人名/地名/日期（不是分類整段文字）。'
          }
        ]
      }
    },
    {
      number: 9,
      title: '命名實體辨識',
      engTitle: 'Named Entity Recognition, NER',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'person_pin',
            content: '從文字中找出並標記「有名字的實體」-- 人名、地名、組織名、日期、金額等。是結構化預測的典型任務。'
          },
          {
            label: '範例',
            icon: 'table_chart',
            code: '輸入：「蘋果公司的CEO提姆庫克在2024年WWDC上發表新產品」\n\n輸出：\n  蘋果公司 → [組織]\n  提姆庫克 → [人名]\n  2024年  → [日期]\n  WWDC    → [事件]'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'NER 是「逐詞標註」任務，屬於結構化預測。\n不是文本分類（分類是給整段文字一個標籤）。\n不是情感分析（情感分析判斷正負面）。'
          }
        ]
      }
    },
    {
      number: 10,
      title: 'TF-IDF',
      engTitle: 'Term Frequency-Inverse Document Frequency',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'functions',
            content: '衡量一個詞在一份文件中「有多重要」的方法。結合「這個詞在這份文件出現多頻繁」和「這個詞在所有文件中有多罕見」兩個面向。'
          },
          {
            label: '怎麼算',
            icon: 'calculate',
            code: 'TF（詞頻）= 這個詞在這份文件出現的次數\n             / 這份文件的總詞數\n→ 出現越多，TF 越高\n\nIDF（逆文件頻率）= log（總文件數 / 包含這個詞的文件數）\n→ 越多文件都有這個詞，IDF 越低（越不稀有）\n\nTF-IDF = TF × IDF\n\n「的」「是」「在」→ 到處出現，IDF 低 → 權重低\n「量子計算」→ 只有少數文件有，IDF 高 → 權重高'
          },
          {
            label: '致命弱點',
            icon: 'warning',
            content: '長文本中詞頻天生就偏高（文章越長，每個字出現越多次），導致常見詞的 TF 被過度放大，掩蓋了真正重要的關鍵詞。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考法：「長文本中 TF-IDF 無法準確反映關鍵詞重要性」的原因？\n→ 「長文本中詞頻偏高，導致常見詞權重被過度放大」\n\n不是「缺乏句子邊界」（TF-IDF 不需要句子邊界）。\n不是「無法處理多份文件」（IDF 本來就是看多份文件）。\n不是「IDF 讓所有詞權重趨近」（IDF 的設計就是要區分常見/罕見）。'
          }
        ]
      }
    },
    {
      number: 11,
      title: 'N-gram 語言模型',
      engTitle: 'N-gram Language Model',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'short_text',
            content: '用「前面 N-1 個字」來預測「下一個字」的統計語言模型。N=2 叫 Bigram（看前 1 個字），N=3 叫 Trigram（看前 2 個字）。'
          },
          {
            label: '範例',
            icon: 'table_chart',
            code: 'Bigram（N=2，看前 1 個字）：\n  「我喜歡」→ P(吃|喜歡) = 0.3\n  「我喜歡」→ P(看|喜歡) = 0.2\n\nTrigram（N=3，看前 2 個字）：\n  「我喜歡吃」→ P(蘋果|喜歡,吃) = 0.4\n\n→ 只看固定長度的前面幾個字\n→ 看不到更遠的上下文'
          },
          {
            label: '致命弱點',
            icon: 'warning',
            content: '只能看「固定窗口」大小的前文，無法捕捉長距離依賴。\n\n例：「雖然今天天氣很好，但是我...」\nN-gram 看不到「雖然」和「但是」的轉折關係（太遠了）。\n→ 生成的句子片段合理但整體不連貫。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考法：「N-gram 生成句子片段合理但缺乏整體連貫性」的原因？\n→ 「僅根據固定長度的前序詞建立機率估計，難以捕捉長距離依賴關係」\n\n不是「計算量大導致無法收斂」（N-gram 其實很輕量）。\n不是「缺乏語意嵌入」（那是另一個問題，不是連貫性的主因）。\n不是「假設詞相互獨立」（那是 Bag-of-Words 的假設，N-gram 有考慮前序詞）。'
          }
        ]
      }
    },
    {
      number: 12,
      title: 'Seq2Seq',
      engTitle: 'Sequence-to-Sequence',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'swap_horiz',
            content: '輸入一段序列，輸出另一段序列的模型架構。輸入和輸出的長度可以不同。是機器翻譯、文本摘要的核心架構。'
          },
          {
            label: '怎麼運作',
            icon: 'build',
            code: 'Encoder：讀取整段輸入 → 壓縮成語意向量\nDecoder：從語意向量 → 逐字生成輸出\n\n例（翻譯）：\n  輸入：「我喜歡吃蘋果」\n  Encoder → [語意向量]\n  Decoder → "I like eating apples"\n\n例（摘要）：\n  輸入：一整篇新聞文章\n  Encoder → [語意向量]\n  Decoder → 三句話摘要'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '最適合 Seq2Seq 的情境：「將輸入文字轉換成語意等價的另一段文字」，如自動翻譯、摘要生成。\n\n不是「預測數值序列」（那更像時間序列迴歸）。\n不是「NER 實體辨識」（那是序列標注，不是 Seq2Seq）。\n不是「關鍵字頻率統計」（那是統計方法，不需要 Seq2Seq）。'
          }
        ]
      }
    },
    {
      number: 13,
      title: 'RAG 語意漂移問題',
      engTitle: 'RAG Semantic Drift',
      back: {
        sections: [
          {
            label: '問題情境',
            icon: 'warning',
            content: '向量檢索找到的文件「語意相似」但跟使用者的「真正意圖」無關。例如搜「蘋果手機維修」卻檢索到「蘋果水果營養」，因為「蘋果」的向量語意相似。'
          },
          {
            label: '為什麼是最大挑戰',
            icon: 'lightbulb',
            code: '檢索階段的核心挑戰：\n  語意相似 ≠ 意圖相關\n\n工具選擇（Faiss/ScaNN）→ 效能問題，不是核心\n計算成本 → 工程問題，不是品質問題\n上下文視窗 → 生成階段的問題，不是檢索階段'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'RAG 檢索階段「最關鍵的挑戰」：避免檢索結果僅具語意相似但與查詢意圖無實質關聯。\n\n這是品質問題（最難解），其他都是工程問題（可以花錢解決）。'
          }
        ]
      }
    },
    {
      number: 14,
      title: 'Attention Collapse',
      engTitle: 'Attention Collapse / 注意力崩塌',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'blur_on',
            content: 'Transformer 的注意力分佈變得「過於平均」，每個位置都分配差不多的注意力權重，失去了「聚焦」能力。模型變得什麼都看，但什麼都看不清楚。'
          },
          {
            label: '解法',
            icon: 'build',
            code: '稀疏化約束（Sparsity Constraint）：\n  強制讓注意力權重「集中」在少數關鍵位置\n  → 讓模型學會只看重要的地方\n  → 恢復聚焦能力'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '改善 Attention Collapse 的策略：「對注意力權重施加稀疏化約束」。\n\n不是「提高縮放常數」（會讓分佈更平均）。\n不是「加高斯雜訊」（會讓分佈更模糊）。\n不是「用 ReLU 取代 Softmax」（會破壞注意力機制）。'
          }
        ]
      }
    },
    {
      number: 15,
      title: '反向翻譯',
      engTitle: 'Back-Translation',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'translate',
            content: '一種 NLP 資料增強技術。先把目標語言的句子翻譯成另一種語言，再翻譯回來，得到語意相同但措辭不同的「偽平行語料」。'
          },
          {
            label: '怎麼做',
            icon: 'build',
            code: '原始（少數民族語言 A）：\n  「今天天氣很好」\n\n第 1 步：A → 英文\n  "The weather is nice today"\n\n第 2 步：英文 → A\n  「今日氣候宜人」← 措辭不同但語意相同\n\n→ 用 1 句原始語料生出 1 句新語料\n→ 不需要人工標註，自動擴增'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '情境：「低資源語言」+「語料極少」+「過擬合」+「不新增真實語料」→ 反向翻譯。\n\n不是「擴增隱藏層維度」（更大模型在少量資料上只會更過擬合）。\n不是「L1 正則化」（壓縮參數有幫助但不增加資料多樣性）。\n不是「全部凍結 mBERT」（全凍結無法適應新語言）。'
          }
        ]
      }
    },
    {
      number: 16,
      title: 'CLIP',
      engTitle: 'Contrastive Language-Image Pre-training',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'photo_camera',
            content: 'OpenAI 開發的多模態模型。同時學習「圖片」和「文字」的關聯，讓兩者映射到同一個嵌入空間。可以用文字搜圖片，或用文字做零樣本分類。'
          },
          {
            label: '怎麼運作',
            icon: 'build',
            code: '訓練：圖文對比學習\n  配對的圖文 → 拉近距離\n  不配對的圖文 → 拉遠距離\n\n推論（零樣本分類）：\n  圖片 → 圖片嵌入向量\n  文字提示 → 文字嵌入向量\n  比較語意相似度 → 最像的就是答案\n\n例：不需要訓練「貓」的圖片分類器\n  只要給文字「a photo of a cat」\n  → CLIP 就能判斷圖片是不是貓'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'CLIP 的關鍵特性：「圖文對比學習 → 共同嵌入空間 → 零樣本分類」。\n\n不是「影像增強降低標訓需求」（CLIP 不需要傳統標訓）。\n不是「MLP 分類」（CLIP 用的是語意相似度，不是分類器）。\n不是「自迴歸生成標籤」（CLIP 不生成文字，是比較相似度）。'
          }
        ]
      }
    },
    {
      number: 17,
      title: 'NLP / NLU / NLG',
      engTitle: 'NLP vs NLU vs NLG',
      back: {
        sections: [
          {
            label: '三者關係',
            icon: 'account_tree',
            content: 'NLP 是總稱，涵蓋所有讓機器能理解、處理、產生語言的技術。NLU 和 NLG 是 NLP 的兩個核心子領域。'
          },
          {
            label: '各自負責什麼',
            icon: 'build',
            code: 'NLP（自然語言處理）\n  總體框架，涵蓋所有語言技術\n  應用：對話系統、機器翻譯、語音助理\n\nNLU（自然語言理解）\n  負責「理解」階段\n  分析語意、辨識意圖、抽取實體\n  應用：意圖辨識、NER、情感分析\n\nNLG（自然語言生成）\n  負責「產出」階段\n  將資料/語意轉換為自然語言\n  應用：自動摘要、回應生成、報告撰寫'
          },
          {
            label: '實際流程範例',
            icon: 'chat',
            content: '使用者對客服機器人說：「我要退貨」\n1. NLU 理解意圖 → 退貨需求\n2. 系統查詢退貨規則\n3. NLG 生成回覆 → 「好的，請提供訂單編號，我為您處理退貨。」\n\n整個互動過程 = NLP 技術的綜合運作。'
          }
        ]
      }
    },
    {
      number: 18,
      title: 'NLP 技術演進四階段',
      engTitle: 'NLP Evolution: 4 Stages',
      back: {
        sections: [
          {
            label: '演進總覽',
            icon: 'timeline',
            code: '第一階段（1980s-1990s）規則式方法\n  手動設計語法規則與詞彙辭典\n  代表：ELIZA、專家系統\n  限制：擴展性差、維護成本高\n\n第二階段（1990s-2010）統計語言模型\n  用大量語料訓練機率模型\n  代表：N-gram、HMM、CRF\n  限制：無法捕捉長距離依賴\n\n第三階段（2010-2018）深度學習\n  神經網路處理語言序列\n  代表：RNN、LSTM、GRU\n  限制：訓練慢、難以並行\n\n第四階段（2018-至今）預訓練語言模型\n  大規模預訓練 + 下游微調\n  代表：BERT、GPT、T5\n  突破：全局語境、並行處理'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '每個階段「解決了上一階段的什麼限制」是常見考點：\n- 統計模型解決了規則式的「無法靈活應對語言變化」\n- 深度學習解決了統計模型的「無法捕捉長距離依賴」\n- 預訓練模型解決了深度學習的「需大量標註資料」和「無法並行處理」'
          }
        ]
      }
    },
    {
      number: 19,
      title: 'HMM / CRF',
      engTitle: 'Hidden Markov Model / Conditional Random Field',
      back: {
        sections: [
          {
            label: '隱馬可夫模型 HMM',
            icon: 'visibility_off',
            content: '基於機率的統計模型，從「可觀察的序列」推測「隱藏的狀態」。\n\n例：語音辨識中，聲音訊號是可觀察的，對應的文字是隱藏的。HMM 根據聲音序列推測最可能的文字序列。\n\n也用於詞性標注：看到詞語序列（可觀察），推測每個詞的詞性（隱藏狀態）。'
          },
          {
            label: '條件隨機場 CRF',
            icon: 'label',
            content: '基於機率的圖形模型，專門用於「序列標注」任務。\n\n與 HMM 的差異：CRF 是判別式模型（直接建模 P(標籤|輸入)），能考慮更豐富的特徵；HMM 是生成式模型（建模 P(輸入,標籤)），假設較嚴格。\n\n主要應用：命名實體辨識(NER)、詞性標注、中文斷詞。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'HMM 和 CRF 都屬於「第二階段：統計語言模型」。\n\n常考配對：\n- 序列標注 → CRF\n- 語音辨識 → HMM\n- 詞頻/共現統計 → N-gram\n\n這些都是深度學習之前的經典方法，現已被 BERT 等預訓練模型取代，但考試仍會考。'
          }
        ]
      }
    },
    {
      number: 20,
      title: 'GRU',
      engTitle: 'Gated Recurrent Unit / 門控循環單元',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'memory',
            content: 'GRU 是 LSTM 的簡化版本，同樣能解決 RNN 的梯度消失問題，但結構更簡單、計算更快。\n\nLSTM 有三個門（輸入門、遺忘門、輸出門），GRU 只有兩個門（更新門、重設門），參數更少。'
          },
          {
            label: 'RNN 家族比較',
            icon: 'compare',
            code: 'RNN（基礎版）\n  能處理序列，但有梯度消失問題\n  長序列時記不住前面的資訊\n\nLSTM（改良版）\n  加入門控機制，解決梯度消失\n  能記住長距離依賴\n  但結構複雜、訓練較慢\n\nGRU（精簡版）\n  LSTM 的簡化版，效果相近\n  參數更少、訓練更快\n  適合資源有限的場景'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'RNN/LSTM/GRU 都屬於「第三階段：深度學習」。\n\n常考：「N-gram 片段合理但整體不連貫」→ 因為固定視窗限制（不是 RNN 家族的問題，N-gram 才有這個問題）。\n\n三者共同限制：序列處理無法並行 → 被 Transformer 的自注意力機制取代。'
          }
        ]
      }
    },
    {
      number: 21,
      title: 'Pre-training + Fine-tuning',
      engTitle: '預訓練 + 微調範式',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'model_training',
            content: '現代 NLP 的標準開發流程：先在大規模通用語料上「預訓練」學習語言通用知識，再用少量任務專用資料「微調」適應特定任務。\n\n好處：不需要從零訓練，大幅降低開發門檻和資料需求。'
          },
          {
            label: '兩階段流程',
            icon: 'build',
            code: '預訓練（Pre-training）\n  資料：大量無標註文本（維基百科、網路文章等）\n  目標：學習語言的通用結構和語意\n  方法：\n    BERT → 遮罩語言模型（MLM）雙向理解\n    GPT → 自迴歸生成（從左到右預測）\n\n微調（Fine-tuning）\n  資料：少量有標註的任務資料\n  目標：適應特定任務（分類、NER、QA 等）\n  方法：在預訓練模型上接一個任務頭\n        用任務資料調整全部或部分參數'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '預訓練模型解決了深度學習時代的兩大問題：\n1. 需要大量標註資料 → 預訓練用無標註資料\n2. 每個任務從零訓練 → 預訓練一次，微調多個任務\n\nBERT = 雙向理解（適合理解型任務）\nGPT = 單向生成（適合生成型任務）'
          }
        ]
      }
    },
    {
      number: 22,
      title: 'RoBERTa / T5 / PaLM',
      engTitle: 'Post-BERT Pre-trained Models',
      back: {
        sections: [
          {
            label: '三個模型各自的改進',
            icon: 'upgrade',
            code: 'RoBERTa（Facebook/Meta）\n  BERT 的優化版本\n  改進：更多訓練資料、更長訓練時間\n  移除 Next Sentence Prediction 任務\n  動態遮罩（每次 epoch 換遮罩位置）\n  → 所有改進都是「訓練策略」層面\n\nT5（Google）\n  把所有 NLP 任務統一為「文本到文本」\n  輸入是文字，輸出也是文字\n  分類 → 輸出類別名稱的文字\n  翻譯 → 輸出目標語言的文字\n  → 架構簡潔，一個模型解決所有任務\n\nPaLM（Google）\n  超大規模語言模型（5400 億參數）\n  展現「湧現能力」（Emergent Abilities）\n  在數學推理、程式碼生成等任務突破'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '這些都是基於 Transformer 架構的預訓練模型。\n\n常考區分：\n- RoBERTa 是 BERT 的「訓練策略優化」\n- T5 的創新是「統一文本到文本框架」\n- PaLM 的特點是「超大規模 + 湧現能力」\n\n它們都屬於第四階段（2018-至今）的預訓練語言模型。'
          }
        ]
      }
    },
    {
      number: 23,
      title: 'NLP 前處理五大技術',
      engTitle: 'NLP Preprocessing Techniques',
      back: {
        sections: [
          {
            label: '五大前處理步驟',
            icon: 'cleaning_services',
            code: '1. 分詞（Tokenization）\n   把文字拆成詞/子詞\n   「我愛自然語言處理」→「我」「愛」「自然語言處理」\n   中文需要斷詞字典或模型輔助\n\n2. 詞性標注（POS Tagging）\n   標記每個詞的語法角色（名詞/動詞/形容詞）\n   用於 NER、關係抽取等下游任務\n\n3. 詞形還原（Lemmatization）\n   還原字典形式：running → run\n   保留語意，適合語意分析\n\n4. 詞幹提取（Stemming）\n   暴力裁剪字尾：happiness → happi\n   速度快但可能產生非有效單字\n\n5. 停用詞移除（Stopword Removal）\n   去掉 is/the/at 等高頻低語意詞\n   降低維度、凸顯關鍵詞'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '詞形還原 vs 詞幹提取：\n- Lemmatization 語意佳但慢（查字典）\n- Stemming 速度快但結果可能不是有效單字\n\n停用詞移除要注意：對話生成和語法分析任務中可能需要保留停用詞，否則語句不自然。\n\n分詞是所有 NLP 任務的第一步，切錯了後續全部受影響。'
          }
        ]
      }
    },
    {
      number: 24,
      title: '文字表示方法總覽',
      engTitle: 'Text Representation Methods',
      back: {
        sections: [
          {
            label: '五種表示方法演進',
            icon: 'timeline',
            code: '1. 純離散表示\n   One-hot / Bag of Words\n   簡單但稀疏、無語意\n\n2. 統計型表示\n   TF-IDF\n   反映詞彙重要性，但忽略語序\n\n3. 統計共現表示\n   N-gram\n   可表示短程語序，但長句效果差\n\n4. 靜態詞嵌入（非語境型）\n   Word2Vec / GloVe / FastText\n   語意可運算，但每個詞只有一個向量\n   「bank」不管是銀行還是河岸，向量都一樣\n\n5. 語境型詞嵌入（動態）\n   ELMo / BERT / GPT\n   同一個詞在不同句子中向量不同\n   「bank」在金融語境和地理語境有不同向量'
          },
          {
            label: '兩組關鍵區分',
            icon: 'compare',
            content: '語境型 vs 非語境型：\n- 語境型：詞向量隨上下文動態變化（BERT、ELMo）\n- 非語境型：每個詞永遠是同一個向量（Word2Vec、GloVe）\n\n分布式 vs 非分布式：\n- 分布式：從語料中學習詞間關聯，語意相近的詞向量接近（Word2Vec）\n- 非分布式：每個詞獨立表示，無語意關聯（One-hot）'
          }
        ]
      }
    },
    {
      number: 25,
      title: 'One-hot / BoW',
      engTitle: 'One-hot Encoding / Bag of Words',
      back: {
        sections: [
          {
            label: 'One-hot Encoding',
            icon: 'grid_on',
            content: '每個詞用一個高維向量表示，只有對應位置為 1，其餘為 0。\n\n例：詞表 [dog, cat, fish]\n- dog = [1, 0, 0]\n- cat = [0, 1, 0]\n- fish = [0, 0, 1]\n\n優點：簡單易實作\n缺點：維度高、稀疏、無語意關聯（dog 和 cat 的距離 = dog 和 fish 的距離）'
          },
          {
            label: 'Bag of Words (BoW)',
            icon: 'inventory_2',
            content: '把文件視為一袋詞，只計算每個詞出現幾次，不管順序。\n\n例：詞表 [dog, cat, fish]\n- 文件1 "dog dog cat" → [2, 1, 0]\n- 文件2 "cat fish fish" → [0, 1, 2]\n\n優點：能捕捉詞頻模式，適合文本分類\n缺點：忽略語序（「狗咬人」和「人咬狗」的向量一樣）、維度爆炸'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'One-hot 和 BoW 都是「非分布式、非語境型」的表示方法。\n\n共同限制：無法捕捉語意關聯、忽略語序。\n差異：One-hot 是詞級別（一個詞一個向量），BoW 是文件級別（一篇文件一個向量）。\n\n這兩者被 TF-IDF → Word2Vec → BERT 逐步取代。'
          }
        ]
      }
    },
    {
      number: 26,
      title: 'ELMo / FastText',
      engTitle: 'ELMo / FastText',
      back: {
        sections: [
          {
            label: 'ELMo',
            icon: 'auto_awesome',
            content: 'ELMo（Embeddings from Language Models）是第一個「語境型」詞嵌入模型，2018 年由 Allen AI 提出。\n\n核心特點：用雙向 LSTM 生成詞向量，同一個詞在不同句子中會得到不同的向量。\n\n例：bank 在「去銀行存錢」和「河岸很高」中會有不同的向量表示。\n\nELMo 是 BERT 之前的重要過渡技術，開啟了語境型表示的時代。'
          },
          {
            label: 'FastText',
            icon: 'speed',
            content: 'Facebook 開發的詞嵌入方法，是 Word2Vec 的改良版。\n\n核心改進：把每個詞拆成多個子詞（subword），學習子詞的向量再組合。\n\n例：「unhappiness」拆成「un」「happi」「ness」\n\n優勢：\n- 能處理未見過的詞（透過子詞組合）\n- 對拼寫錯誤更魯棒\n- 對形態豐富的語言（如德文、土耳其文）效果更好\n\n限制：仍然是靜態詞嵌入（非語境型）。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'FastText 是「靜態詞嵌入」（與 Word2Vec、GloVe 同級）\nELMo 是「語境型詞嵌入」（與 BERT、GPT 同級）\n\n常考區分：\n- Word2Vec / GloVe / FastText → 非語境型（同一個詞永遠同一個向量）\n- ELMo / BERT / GPT → 語境型（同一個詞在不同句子中向量不同）'
          }
        ]
      }
    },
    {
      number: 27,
      title: 'Prompt / Few-shot / Zero-shot',
      engTitle: 'Prompt-based Learning',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'chat',
            content: '基於提示學習(Prompt-based Learning)是讓大型語言模型在極少或零標註資料下完成任務的方法。核心思路：把任務轉成「填空」或「問答」格式，讓模型用它原有的語言能力直接回答。'
          },
          {
            label: '三種學習模式',
            icon: 'build',
            code: 'Zero-shot（零樣本）\n  完全不給範例，只給指令\n  「請判斷這封信是哪個類別：技術支援/會議通知/廣告」\n  → 模型直接靠預訓練知識回答\n\nFew-shot（少樣本）\n  給幾個範例，讓模型學習格式\n  「正面：這產品超好用！負面：品質很差。請判斷：還不錯→？」\n  → 模型從範例推斷規則\n\nPrompt Engineering\n  設計好的提示詞引導模型\n  「你是一位專業客服，請用友善語氣回答...」\n  → 提示詞品質直接影響輸出品質'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'Zero-shot：不給任何範例，模型靠預訓練知識推理。\nFew-shot：給少量範例（如 3-5 個），模型從中學習。\n\n兩者都不需要重新訓練模型（不改參數），只靠「提示」引導。\n\n與 Fine-tuning 的差異：Fine-tuning 需要標註資料並修改模型參數，Prompt-based 不改參數。'
          }
        ]
      }
    },
    {
      number: 28,
      title: 'LoRA',
      engTitle: 'Low-Rank Adaptation / 低秩自適應',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'tune',
            content: 'LoRA 是一種高效微調技術，不修改原始模型的全部參數，只在模型中插入少量的「低秩矩陣」進行訓練。\n\n好處：大幅減少需要訓練的參數量（通常只有原始模型的 0.1%-1%），節省計算和儲存資源。'
          },
          {
            label: '為什麼需要',
            icon: 'build',
            code: '傳統 Fine-tuning：\n  修改模型全部參數\n  需要大量 GPU 記憶體\n  每個任務存一份完整模型副本\n  → 成本極高\n\nLoRA：\n  凍結原始模型參數（不動）\n  只訓練插入的低秩矩陣（很小）\n  每個任務只需存一組小矩陣\n  → 成本大幅降低\n  → 適合資源有限的場景'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'LoRA 的核心：「不修改原始模型，只加輕量級參數」。\n\n與 RAG 的區分：\n- LoRA = 高效微調（改少量參數適應新任務）\n- RAG = 檢索增強生成（不改模型，外掛知識庫）\n\n應用情境：「資源有限 + 要微調大模型」→ LoRA。'
          }
        ]
      }
    },
    {
      number: 29,
      title: 'NLP 風險三層架構',
      engTitle: 'NLP Risk Layers',
      back: {
        sections: [
          {
            label: '三層風險',
            icon: 'warning',
            code: '資料層風險：\n  資料隱私 → 訓練資料含個資\n  標註偏誤 → 樣本偏斜、標註不一致\n  授權版權 → 未授權資料、生成內容侵權\n\n模型層風險：\n  模型偏見 → 學到訓練資料的偏見\n  （如：男性主管=果斷、女性主管=情緒化）\n  公平性不足 → 少數語言/族群表現差\n\n應用層風險：\n  語意理解限制 → 反語、方言、俚語誤判\n  模型幻覺 → 生成虛假但語法正確的內容\n  部署維運 → 效能下降、版本混亂'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '常考情境判斷：\n- 「模型對不同族群表現不一致」→ 訓練資料偏差（資料層）+ 模型偏見（模型層）\n- 「生成法國首都在柏林」→ 模型幻覺（應用層）\n- 「客服紀錄含真實姓名電話」→ 資料隱私（資料層）\n\n處理方式：\n- 資料層 → 匿名化/去識別化 + 授權驗證\n- 模型層 → WEAT 偏見檢測 + 公平性指標\n- 應用層 → 事實檢查 + 人工審核 + 回饋機制'
          }
        ]
      }
    },
    {
      number: 30,
      title: '去識別化 vs 匿名化',
      engTitle: 'De-identification vs Anonymization',
      back: {
        sections: [
          {
            label: '兩者差異',
            icon: 'security',
            code: '去識別化（De-identification）\n  遮蔽或替換個資，但保留連結可能\n  可透過對應代碼重新辨識\n  方法：\n    代碼替換：0912-345-678 → phone_XXYYZZ\n    資料抽象化：1986/07/12 → 1980年代出生\n    資料遮罩：王曉明 → 王X明\n\n匿名化（Anonymization）\n  徹底移除所有可辨識資訊\n  處理後無法再與任何個體連結\n  方法：\n    徹底刪除辨識欄位\n    資料隨機化：用隨機值取代\n    聚合處理：轉為群體統計'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '去識別化 = 還能連回去（部分保留可識別性）\n匿名化 = 完全無法連回去（不可逆）\n\n常考情境：\n- 「確保模型不洩漏個資」→ 匿名化 + 輸出稽核\n- 「研究需要但要保護隱私」→ 去識別化（保留分析價值）\n- 「符合 GDPR」→ 匿名化（最嚴格）'
          }
        ]
      }
    },
    {
      number: 31,
      title: '模型幻覺',
      engTitle: 'Model Hallucination',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'psychology',
            content: '模型幻覺是指生成式 AI 產出語法正確、語氣自然，但內容虛假或與事實不符的資訊。模型「看起來很有信心」地說出錯誤的東西。\n\n例：聊天機器人回答「法國的首都在柏林」-- 語法沒問題，但事實完全錯誤。'
          },
          {
            label: '為什麼會發生',
            icon: 'build',
            content: '生成式模型（如 GPT）是基於機率預測下一個最可能的詞，不是從知識庫查詢事實。當模型對某個主題的訓練資料不足時，它會「編造」看起來合理的答案。\n\n高風險場景：醫療建議、法律諮詢、金融分析 -- 錯誤資訊可能造成嚴重後果。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '模型幻覺屬於「應用層風險」。\n\n解法：\n- RAG（檢索增強生成）→ 從外部知識庫檢索事實再生成\n- 事實檢查機制 → 生成後驗證內容\n- 人工審核 → 高風險領域必須人工把關\n- 使用前風險預告 → 告知使用者內容可能有誤'
          }
        ]
      }
    }
  ]
}
