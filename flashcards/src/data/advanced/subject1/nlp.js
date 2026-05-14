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
            content: 'Word2Vec = 基於預測的模型（Prediction-based）。\nGloVe = 基於共現統計的模型（Count-based）。\n\n這是最常考的差異。不要搞反。'
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
    }
  ]
}
