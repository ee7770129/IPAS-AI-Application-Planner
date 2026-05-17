/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：subject1-114.js
 * 功能：中級科目一 114 年歷屆考題
 * 考試日期：114 年 11 月 08 日
 * 建立日期：2026-05-16
 * 版本：2.0.0
 */

export default {
  id: 'adv-s1-114',
  label: '114 年 科目一',
  subject: '科目一 人工智慧技術應用與規劃',
  examDate: '2025-11-08',
  questions: [
    {
      id: 1,
      question: '某電商企業希望利用自然語言處理(NLP)技術，分析顧客在社群平台與商品評論中的文字內容，以即時掌握顧客對產品的滿意度變化。若採用情感分析(Sentiment Analysis)模型，其主要目的為何？',
      options: [
        { label: 'A', text: '預測顧客使用的語言風格與語氣' },
        { label: 'B', text: '判斷文本中所表達的情感傾向' },
        { label: 'C', text: '將顧客留言自動翻譯成企業內部指定語言' },
        { label: 'D', text: '產生顧客評論的自動化摘要內容' }
      ],
      answer: 'B',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: '情感分析(Sentiment Analysis)的核心目的是判斷文本中表達的情感傾向（正面、負面、中性），企業透過情感分析可即時監控顧客滿意度的變化趨勢。',
      optionExplanations: {
        A: '語言風格與語氣分析屬於文體分析(Stylistic Analysis)的範疇，並非情感分析的主要目標。情感分析關注的是正面/負面/中性的情感判斷，而非用詞風格。',
        B: null,
        C: '自動翻譯屬於機器翻譯(Machine Translation)技術，與情感分析是完全不同的 NLP 任務。',
        D: '自動摘要屬於文本摘要(Text Summarization)技術，目的是壓縮文本產生精簡內容，與判斷情感傾向無關。'
      }
    },
    {
      id: 2,
      question: '某跨國金融科技公司導入 Transformer 架構開發多語客服系統，以提升長篇金融文件的自動翻譯品質。下列何者為該模型能顯著改善翻譯準確度的主要原因？',
      options: [
        { label: 'A', text: '透過自注意力機制(Self-Attention Mechanism)捕捉長距離語境依賴關係' },
        { label: 'B', text: '透過卷積運算(Convolution Operation)加速訓練過程' },
        { label: 'C', text: '透過強化學習(Reinforcement Learning)自動調整語句生成策略' },
        { label: 'D', text: '透過資料增強(Data Augmentation)平衡多語語料比例' }
      ],
      answer: 'A',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: 'Transformer 架構的核心創新是自注意力機制(Self-Attention)，它能讓模型在處理任一位置時同時關注序列中所有其他位置，有效捕捉長距離依賴關係，這是相比 RNN/LSTM 的主要優勢。',
      optionExplanations: {
        A: null,
        B: '卷積運算是 CNN 的核心技術，主要用於影像處理。Transformer 並不使用卷積運算，其加速靠的是平行化的注意力計算。',
        C: '強化學習是一種訓練範式（透過獎勵訊號學習策略），並非 Transformer 架構本身的機制。部分翻譯系統可能用 RL 微調，但這不是 Transformer 改善翻譯品質的主要原因。',
        D: '資料增強是一種資料前處理技巧，用來擴充訓練樣本，與 Transformer 的架構設計無關，也不是其改善翻譯品質的核心原因。'
      }
    },
    {
      id: 3,
      question: '某企業計畫應用 BERT(Bidirectional Encoder Representations from Transformers)模型分析大量顧客意見，以強化客服自動回覆系統。在 BERT 的預訓練過程中，「遮罩語言模型(Masked Language Model, MLM)」的主要訓練策略為何？',
      options: [
        { label: 'A', text: '依序遮罩句尾詞語，讓模型從左到右逐步生成完整句子' },
        { label: 'B', text: '隨機遮罩部分詞語，並讓模型根據雙向上下文(Bidirectional Context)預測被遮罩的詞' },
        { label: 'C', text: '透過對抗訓練(Adversarial Training)生成語意相似的擾動樣本以提升泛化性' },
        { label: 'D', text: '以未遮罩的詞為條件，使用解碼器(Decoder)結構重建整句內容' }
      ],
      answer: 'B',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: 'BERT 的 MLM 預訓練策略是隨機遮罩輸入中約 15% 的詞語(token)，然後讓模型利用雙向上下文來預測被遮罩的詞，使 BERT 能同時考慮左右兩側的語境。',
      optionExplanations: {
        A: '「依序遮罩句尾、從左到右生成」描述的是自迴歸語言模型（如 GPT）的做法。BERT 是雙向模型，不是從左到右逐步生成，而是隨機遮罩任意位置的詞。',
        B: null,
        C: '對抗訓練是 GAN 等模型的訓練方式，透過生成器與判別器對抗學習。這不是 BERT MLM 的訓練策略。',
        D: 'BERT 使用的是 Encoder 結構而非 Decoder。用解碼器重建整句的做法更接近自編碼器(Autoencoder)或 seq2seq 模型，與 MLM 的設計不同。'
      }
    },
    {
      id: 4,
      question: '在詞向量(Word Embedding)訓練方法中，GloVe(Global Vectors for Word Representation)與 Word2Vec 的主要差異為何？',
      options: [
        { label: 'A', text: 'Word2Vec 以詞頻權重訓練詞向量，而 GloVe 以隨機初始化向量進行學習' },
        { label: 'B', text: 'Word2Vec 以全局統計矩陣為基礎，而 GloVe 採用神經網路進行上下文預測' },
        { label: 'C', text: 'Word2Vec 為基於預測的模型，而 GloVe 為基於共現統計的模型' },
        { label: 'D', text: 'Word2Vec 僅能用於靜態文本語料，而 GloVe 可應用於即時語料更新' }
      ],
      answer: 'C',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: 'Word2Vec 是基於預測的模型（透過 Skip-gram 或 CBOW 預測上下文或中心詞），而 GloVe 是基於全局詞-詞共現矩陣的統計模型，透過矩陣分解學習詞向量。',
      optionExplanations: {
        A: '說反了。兩者都會隨機初始化向量再進行學習，Word2Vec 並非「以詞頻權重訓練」，而是用滑動視窗做預測任務。',
        B: '完全說反了。Word2Vec 是用神經網路做上下文預測，GloVe 才是以全局共現統計矩陣為基礎。',
        C: null,
        D: '兩者都是靜態詞向量模型（同一個詞不論語境都是同一個向量）。GloVe 同樣無法即時更新語料，要動態語境需使用 BERT 等上下文化模型。'
      }
    },
    {
      id: 5,
      question: '某企業以詞頻-逆文件頻率(Term Frequency-Inverse Document Frequency, TF-IDF)方法分析顧客意見內容，但發現模型在處理篇幅較長的回饋文本時，無法準確反映關鍵詞的重要性。下列何者為造成此現象的主要原因？',
      options: [
        { label: 'A', text: '長文本中的詞頻偏高，導致常見詞權重被過度放大' },
        { label: 'B', text: '長文本中缺乏明確句子邊界，造成 TF-IDF 無法計算詞頻' },
        { label: 'C', text: 'TF-IDF 無法同時處理多份文件' },
        { label: 'D', text: '長文本會改變 IDF(Inverse Document Frequency)的計算，使所有詞權重趨於相近' }
      ],
      answer: 'A',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: 'TF-IDF 中的 TF（詞頻）會隨文本長度增加而膨脹。長文本中即使是常見的非關鍵詞也會因高出現次數而獲得較高的 TF 值，導致權重失準。',
      optionExplanations: {
        A: null,
        B: 'TF-IDF 的詞頻計算是基於整份文件中的詞出現次數，不依賴句子邊界的切分，因此缺乏句子邊界不會影響計算。',
        C: 'TF-IDF 本身就是設計來處理多份文件的方法。IDF 的計算需要跨文件統計，多文件處理是其核心功能。',
        D: 'IDF 是根據「包含該詞的文件數」計算的，與單一文件的長度無關。長文本不會改變 IDF 值，問題出在 TF 部分。'
      }
    },
    {
      id: 6,
      question: '某企業嘗試以 N-gram 語言模型(N-gram Language Model)建立客服自動回覆系統，但發現模型生成的句子雖在片段上合理，卻缺乏整體語意連貫性。此問題最可能源自 N-gram 模型的哪一項限制？',
      options: [
        { label: 'A', text: 'N-gram 模型在訓練過程中需要龐大計算量，導致長句無法收斂' },
        { label: 'B', text: 'N-gram 模型僅根據固定長度的前序詞建立機率估計，難以捕捉長距離依賴關係(Long-range Dependencies)' },
        { label: 'C', text: 'N-gram 模型缺乏語意嵌入(Semantic Embedding)層，因此無法表徵詞語間的語意相似度' },
        { label: 'D', text: 'N-gram 模型假設詞與詞之間相互獨立，導致無法建構上下文語意關聯' }
      ],
      answer: 'B',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: 'N-gram 模型的核心限制是「固定視窗」：它只看前面 N-1 個詞來預測下一個詞，無法捕捉超出視窗範圍的長距離語意依賴，因此片段合理但整體不連貫。',
      optionExplanations: {
        A: 'N-gram 模型的訓練其實是統計詞頻與條件機率，計算量相對不大（相比深度學習模型）。長句問題不是計算量造成的，而是視窗限制。',
        B: null,
        C: '雖然 N-gram 確實沒有語意嵌入層，但題目描述的「片段合理、整體不連貫」問題的根源是固定視窗限制，不是語意表徵能力。',
        D: 'N-gram 並不假設詞與詞獨立（那是 Naive Bayes 的假設）。N-gram 的第 N 個詞是條件依賴於前 N-1 個詞的，只是這個依賴範圍被固定了。'
      }
    },
    {
      id: 7,
      question: '在企業導入的智慧監控系統中，模型以物件偵測(Object Detection)方式自動辨識影像中的人物與車輛。若評估指標採用平均精確率(Mean Average Precision, mAP)，其中 IoU(Intersection over Union)閾值設定較高時，代表下列哪一項意義？',
      options: [
        { label: 'A', text: '預測邊界框與真實邊界框的重疊程度越高，模型偵測結果越精準' },
        { label: 'B', text: '預測邊界框與真實邊界框的誤差越大，導致 mAP 數值上升' },
        { label: 'C', text: '模型整體精確率(Precision)降低，但召回率(Recall)上升' },
        { label: 'D', text: '預測邊界框的評估結果不受真實框大小影響' }
      ],
      answer: 'A',
      chapter: '3.2 電腦視覺技術與應用',
      explanation: 'IoU 閾值越高，代表對預測框與真實框的重疊要求越嚴格。只有高度重疊的預測才會被判定為正確，因此模型偵測結果需要更精準才能通過評估。',
      optionExplanations: {
        A: null,
        B: '說反了。IoU 閾值越高，對重疊的要求越嚴格，mAP 通常會下降（因為更多預測被判為錯誤），不是上升。',
        C: '高 IoU 閾值會使 Precision 和 Recall 都可能下降（因為判定正確的門檻變嚴格了），並非 Precision 降而 Recall 升。',
        D: 'IoU 的計算是「交集面積 / 聯集面積」，與真實框大小有直接關係。大框和小框在同樣的偏移下，IoU 值會不同。'
      }
    },
    {
      id: 8,
      question: '關於 Softmax 與 Max-Pooling，下列敘述何者正確？',
      options: [
        { label: 'A', text: 'Softmax 與 Max-Pooling 都會將特徵張量壓縮為單一最大值' },
        { label: 'B', text: 'Max-Pooling 會對輸入進行機率分佈的轉換' },
        { label: 'C', text: 'Softmax 會保留所有輸入資訊，但以比例表示；Max-Pooling 只保留區域最大值' },
        { label: 'D', text: 'Softmax 主要用於特徵降維，而 Max-Pooling 用於分類輸出' }
      ],
      answer: 'C',
      chapter: '3.2 電腦視覺技術與應用',
      explanation: 'Softmax 將所有輸入值轉換為總和為 1 的機率分佈，保留每個輸入的資訊（以比例表示）。Max-Pooling 則是從區域中只取最大值，其餘資訊被丟棄。',
      optionExplanations: {
        A: 'Softmax 不會壓縮為單一值，而是輸出與輸入等長的機率向量（每個元素都有對應的機率值）。只有 Max-Pooling 會保留最大值。',
        B: '說反了。Max-Pooling 只是取最大值的操作，不涉及機率分佈轉換。進行機率分佈轉換的是 Softmax。',
        C: null,
        D: '說反了。Softmax 常用於分類輸出層（將 logits 轉為機率），Max-Pooling 常用於 CNN 的特徵降維（縮小特徵圖尺寸）。'
      }
    },
    {
      id: 9,
      question: '某企業在訓練生成式 AI 模型時，導入資料增強(Data Augmentation)技術以擴充訓練資料，但觀察到模型效能反而下降。下列哪一項最可能的原因與對應改善策略最為正確？',
      options: [
        { label: 'A', text: '增強樣本未經隨機初始化，導致模型梯度更新不穩定，應重新設計訓練啟動流程' },
        { label: 'B', text: '增強後資料的特徵分佈與原始資料不一致，影響模型的泛化能力，應檢查並調整增強策略以維持語意一致性' },
        { label: 'C', text: '增強樣本的比例過高，造成模型對特定資料產生偏好，應適度提高增強比例並調整學習率' },
        { label: 'D', text: '增強後資料的標註可信度下降，導致訓練訊號偏差，應以半監督學習方式重新校正資料' }
      ],
      answer: 'B',
      chapter: '3.3 生成式AI技術與應用',
      explanation: '資料增強如果改變了原始資料的特徵分佈或語意，模型會學到錯誤的模式，反而降低泛化能力。正確做法是確保增強策略維持語意一致性。',
      optionExplanations: {
        A: '「增強樣本未經隨機初始化」的說法不合理。資料增強是對資料做轉換（旋轉、翻轉、同義詞替換等），與模型參數初始化無關。',
        B: null,
        C: '前半段「比例過高造成偏好」有一定道理，但後半段「應適度提高增強比例」自相矛盾——如果比例已過高，應該降低而非提高。',
        D: '資料增強不一定會改變標註（例如影像旋轉後標籤不變），且半監督學習是處理無標註資料的方法，不是校正增強資料的正確策略。'
      }
    },
    {
      id: 10,
      question: '如果希望同時兼顧「精確率(Precision)」和「召回率(Recall)」，下列哪一個指標可以作為綜合評估的標準？',
      options: [
        { label: 'A', text: '準確率(Accuracy)' },
        { label: 'B', text: '均方根誤差(RMSE)' },
        { label: 'C', text: '均方誤差(MSE)' },
        { label: 'D', text: 'F1 分數(F1 Score)' }
      ],
      answer: 'D',
      chapter: '5.1 數據準備與模型選擇',
      explanation: 'F1 Score 是 Precision 和 Recall 的調和平均數（2PR/(P+R)），專門設計來同時兼顧兩者，當任一方偏低時 F1 也會被拉低。',
      optionExplanations: {
        A: 'Accuracy 是「正確預測數 / 總預測數」，在類別不平衡時容易誤導（例如 99% 負樣本時，全猜負的也有 99% 準確率），且不直接反映 Precision 和 Recall 的平衡。',
        B: 'RMSE 是迴歸問題的評估指標（預測值與真實值差異的均方根），用於連續數值預測，與分類的 Precision/Recall 無關。',
        C: 'MSE 同樣是迴歸問題的指標（預測誤差的平方平均），與分類任務的 Precision/Recall 無關。',
        D: null
      }
    },
    {
      id: 11,
      question: '企業資料分析團隊使用 DBSCAN(Density-Based Spatial Clustering of Applications with Noise)演算法進行顧客行為分群，並希望模型能自動區分主要群集與雜訊資料。在此演算法中，決定聚類結果的兩個主要超參數為下列何者？',
      options: [
        { label: 'A', text: '特徵數與學習率' },
        { label: 'B', text: 'K 值與距離閾值' },
        { label: 'C', text: '鄰域半徑(Epsilon) 與最小點數(MinPts)' },
        { label: 'D', text: '交叉熵(Cross Entropy)與權重初始化' }
      ],
      answer: 'C',
      chapter: '5.1 數據準備與模型選擇',
      explanation: 'DBSCAN 的兩個核心超參數是 Epsilon（鄰域半徑，定義「鄰近」的距離範圍）和 MinPts（最小點數，定義一個核心點至少需要多少鄰居才能形成群集）。',
      optionExplanations: {
        A: '特徵數是資料本身的屬性，不是 DBSCAN 的超參數；學習率是梯度下降優化器的參數，DBSCAN 不涉及梯度下降。',
        B: 'K 值是 K-Means 或 KNN 的超參數，不是 DBSCAN 的。DBSCAN 的優勢之一就是不需要事先指定群集數量 K。',
        C: null,
        D: '交叉熵是分類任務的損失函數，權重初始化是神經網路的概念，兩者都與 DBSCAN 無關。DBSCAN 是基於密度的聚類算法，不涉及神經網路。'
      }
    },
    {
      id: 12,
      question: '某金融科技公司建立房價預測模型，使用多項特徵（如建坪、房齡、樓層、總價等）進行線性迴歸分析(Linear Regression Analysis)。資料分析師發現多個特徵之間存在高度相關性，導致模型係數不穩定、預測誤差上升。為解決此問題，下列哪一種方法最適合？',
      options: [
        { label: 'A', text: '繼續保留所有特徵，不進行任何處理' },
        { label: 'B', text: '使用主成分分析(PCA)將相關特徵轉換為彼此獨立的主成分' },
        { label: 'C', text: '新增更多原始變數以提升模型表現' },
        { label: 'D', text: '改用分類模型進行預測' }
      ],
      answer: 'B',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '特徵高度相關（多重共線性）會使線性迴歸係數不穩定。PCA 可將相關特徵轉換為正交（彼此獨立）的主成分，消除共線性問題。',
      optionExplanations: {
        A: '高度相關的特徵會造成多重共線性(Multicollinearity)，導致係數估計不穩定且方差膨脹，不處理只會讓問題持續。',
        B: null,
        C: '新增更多原始變數可能加劇共線性問題（新變數可能也與既有變數高度相關），問題會更嚴重而非改善。',
        D: '房價是連續數值，應用迴歸模型預測。改用分類模型不符合問題性質，且無法解決共線性問題。'
      }
    },
    {
      id: 13,
      question: '下列何者為 Kubernetes 在 AI 模型部署與運行中的核心功能？',
      options: [
        { label: 'A', text: '自動化管理模型的訓練流程與參數調校' },
        { label: 'B', text: '管理與協調模型服務的部署、擴展與運行環境' },
        { label: 'C', text: '提供 AI 模型的資料儲存與版本控管功能' },
        { label: 'D', text: '負責深度學習推論的 GPU 加速運算' }
      ],
      answer: 'B',
      chapter: '5.2 AI 技術系統集成與部署',
      explanation: 'Kubernetes(K8s)是容器編排平台，核心功能是管理容器化服務的部署、自動擴展(Auto-scaling)、負載平衡和運行環境管理。',
      optionExplanations: {
        A: '模型訓練流程管理屬於 MLOps 工具（如 MLflow、Kubeflow Pipelines）的職責，Kubernetes 本身是基礎設施層，不直接管理訓練邏輯。',
        B: null,
        C: '資料儲存與版本控管由 DVC、MLflow Model Registry 或資料庫系統負責。Kubernetes 管理的是執行環境，不是資料或模型版本。',
        D: 'GPU 加速運算由 CUDA、cuDNN 等框架負責。Kubernetes 可以調度 GPU 資源，但本身不負責 GPU 加速計算。'
      }
    },
    {
      id: 14,
      question: '在調整模型超參數(Hyperparameters)時，若希望避免因過度調整參數而導致過擬合，下列哪一種做法最有效提升模型的泛化能力？',
      options: [
        { label: 'A', text: '採用交叉驗證(Cross-Validation)於多組參數組合間反覆評估，選擇在驗證資料上表現最穩定的設定' },
        { label: 'B', text: '使用早期停止機制(Early Stopping)監控訓練誤差並在收斂前停止訓練，以防模型學習過度' },
        { label: 'C', text: '對輸入特徵進行標準化以減少特徵值差異帶來的過擬合風險' },
        { label: 'D', text: '提高模型複雜度並使用更多超參數搜尋範圍，以確保模型能充分學習資料特徵' }
      ],
      answer: 'A',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '交叉驗證透過多次分割訓練/驗證集反覆評估，能有效判斷哪組超參數在未見資料上表現最穩定，避免因單次劃分的偶然性而選到過擬合的參數。',
      optionExplanations: {
        A: null,
        B: 'Early Stopping 是防止訓練過程中的過擬合（監控驗證損失），但題目問的是「超參數調整」階段的過擬合防治。交叉驗證才是針對超參數選擇最有效的方法。',
        C: '特徵標準化可以幫助模型更快收斂，但它處理的是特徵尺度問題，不直接解決超參數調整導致的過擬合。',
        D: '提高模型複雜度和搜尋更多超參數組合反而會增加過擬合風險，方向完全相反。'
      }
    },
    {
      id: 15,
      question: '在企業導入的 MLOps(Machine Learning Operations)流程中，Model Registry 最常用於哪一個階段？',
      options: [
        { label: 'A', text: '用於設定運算資源與執行環境以確保訓練穩定' },
        { label: 'B', text: '用於建立可重複使用的資料與特徵版本' },
        { label: 'C', text: '用於集中管理模型版本、訓練紀錄與部署狀態' },
        { label: 'D', text: '用於追蹤模型上線後的表現與漂移情況' }
      ],
      answer: 'C',
      chapter: '5.2 AI 技術系統集成與部署',
      explanation: 'Model Registry 的核心用途是集中管理模型的版本、元資料（訓練紀錄、指標）和部署狀態（staging/production），是 MLOps 中模型生命週期管理的關鍵元件。',
      optionExplanations: {
        A: '運算資源與執行環境的設定屬於基礎設施管理（如 Kubernetes、Docker），不是 Model Registry 的功能。',
        B: '資料與特徵版本管理屬於 Feature Store 或 DVC(Data Version Control) 的職責，Model Registry 管理的是「模型」的版本。',
        C: null,
        D: '模型上線後的表現監控與漂移偵測屬於 Model Monitoring 工具的職責（如 Evidently、Whylabs），Model Registry 負責的是部署前的版本管理。'
      }
    },
    {
      id: 16,
      question: '下列哪一種情境中最適合使用「序列到序列(Seq2Seq)」模型？',
      options: [
        { label: 'A', text: '預測銷售趨勢曲線，輸出未來數值序列' },
        { label: 'B', text: '辨識文本中出現的人名、地名與組織名稱等實體資訊' },
        { label: 'C', text: '對輸入文本中的關鍵字進行頻率統計與可視化' },
        { label: 'D', text: '將輸入文字轉換成語意等價的另一段文字，如自動翻譯或摘要生成' }
      ],
      answer: 'D',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: 'Seq2Seq 模型的設計核心是「將一個序列轉換為另一個序列」，最典型的應用是機器翻譯（輸入一種語言的句子，輸出另一種語言的句子）和摘要生成。',
      optionExplanations: {
        A: '時間序列預測雖然也涉及序列，但通常用 ARIMA、LSTM 或 Temporal Fusion Transformer 等專門的時序模型，Seq2Seq 不是最適合的選擇。',
        B: '辨識文本中的實體是命名實體辨識(NER)任務，屬於序列標註問題（每個 token 標上標籤），通常用 BiLSTM-CRF 或 BERT 等模型，不是 Seq2Seq。',
        C: '關鍵字頻率統計是基本的文本統計分析，不需要任何深度學習模型，更不需要 Seq2Seq。',
        D: null
      }
    },
    {
      id: 17,
      question: '在自然語言處理中，檢索增強生成(Retrieval-Augmented Generation, RAG)是一種結合語言模型與向量搜尋的技術，可有效減少模型知識過時與產生幻覺的問題。若要建立一套高效能的 RAG 系統，下列何者為在「檢索階段」最關鍵的挑戰？',
      options: [
        { label: 'A', text: '確保檢索到的文件能被完整納入語言模型的上下文視窗(Context Window)中進行生成' },
        { label: 'B', text: '選擇使用 Faiss 或 ScaNN 等近似最近鄰搜尋函式庫' },
        { label: 'C', text: '降低嵌入模型(Embedding Model)在高維空間中的計算成本與記憶體占用' },
        { label: 'D', text: '避免向量檢索結果僅具語意相似但與查詢意圖無實質關聯的情況' }
      ],
      answer: 'D',
      chapter: '3.3 生成式AI技術與應用',
      explanation: 'RAG 檢索階段最關鍵的挑戰是確保檢索結果與查詢意圖真正相關（而非只是語意表面相似）。向量檢索常會返回語意相近但不切題的內容，這會直接影響生成品質。',
      optionExplanations: {
        A: '上下文視窗限制是生成階段的工程問題，可透過文件切塊(Chunking)等方式處理，不是檢索階段的核心挑戰。',
        B: '選擇搜尋函式庫是工程實作的決策，不是 RAG 檢索階段面臨的根本挑戰。Faiss/ScaNN 是解決效能問題的工具，不是挑戰本身。',
        C: '計算成本和記憶體是效能優化問題，重要但不是「最關鍵」的挑戰。就算計算快速，如果檢索結果不相關，生成的內容也會有問題。',
        D: null
      }
    },
    {
      id: 18,
      question: '當 Transformer 模型發生「注意力分布過於平均(Attention Collapse)」的情形時，導致模型無法有效聚焦於關鍵資訊，下列哪一項策略可有效改善此問題？',
      options: [
        { label: 'A', text: '提高 Query-Key 點積(Dot Product)的縮放常數' },
        { label: 'B', text: '在 Softmax 前加入高斯雜訊(Gaussian Noise)' },
        { label: 'C', text: '使用 ReLU 函數取代 Softmax' },
        { label: 'D', text: '對注意力權重施加稀疏化約束(Sparsity Constraint)' }
      ],
      answer: 'D',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: '注意力分布過於平均代表模型把注意力平均分散在所有位置上，無法聚焦。施加稀疏化約束可迫使模型將注意力集中在少數關鍵位置，有效改善此問題。',
      optionExplanations: {
        A: '提高縮放常數會讓點積值變小，Softmax 輸出會更平均，反而加劇 Attention Collapse，方向錯誤。原始 Transformer 除以 sqrt(d_k) 就是為了避免值過大。',
        B: '加入高斯雜訊會增加注意力分佈的隨機性，在注意力已經過於平均的情況下，增加雜訊不會幫助模型聚焦，反而可能讓分佈更混亂。',
        C: 'ReLU 會將負值變為 0，但不能保證輸出總和為 1（不是機率分佈），且可能造成大量注意力權重為 0 的問題，不是成熟的解決方案。',
        D: null
      }
    },
    {
      id: 19,
      question: '某研究團隊正在訓練一個針對低資源語言（如少數民族語言）的語言模型，但該語言僅有約 1 萬筆語料可用。在訓練過程中出現明顯的過擬合現象，若希望在不新增真實語料的前提下提升模型的泛化能力，採用下列哪一種方法最為適合？',
      options: [
        { label: 'A', text: '將 Transformer 的隱藏層維度擴增至 1024，以提升表徵能力' },
        { label: 'B', text: '採用反向翻譯(Back-Translation)技術，以生成額外目標語句的偽平行語料(Pseudo-Parallel Corpus)' },
        { label: 'C', text: '對詞嵌入矩陣(Embedding Matrix)施加 L1 正則化以壓縮模型參數' },
        { label: 'D', text: '將多語言 BERT(mBERT)中所有 Transformer 層全部凍結以保留預訓練知識' }
      ],
      answer: 'B',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: '反向翻譯(Back-Translation)是低資源語言常用的資料增強技術：先將目標語言翻譯成高資源語言，再翻回來，產生偽平行語料來擴充訓練集，有效提升泛化能力。',
      optionExplanations: {
        A: '在僅有 1 萬筆語料的情況下擴增模型維度，會大幅增加參數量，加劇過擬合（小資料配大模型 = 更容易記住訓練集），方向完全錯誤。',
        B: null,
        C: 'L1 正則化可以促進參數稀疏化，但只對詞嵌入矩陣施加 L1 效果有限，無法從根本上解決語料不足導致的過擬合問題。',
        D: '全部凍結所有層會讓模型完全無法適應目標語言的特性，等於沒有微調。正確做法是凍結底層、微調頂層，而非全部凍結。'
      }
    },
    {
      id: 20,
      question: '在使用生成對抗網路(GAN)進行人臉影像生成時，若出現「模式崩潰」(Mode Collapse)現象，下列哪一種方法最常被用來有效解決此問題？',
      options: [
        { label: 'A', text: '在鑑別器中加入梯度懲罰(Gradient Penalty)以穩定訓練過程' },
        { label: 'B', text: '採用 Wasserstein 距離(WGAN 損失)替代原始的 GAN 損失函數' },
        { label: 'C', text: '對生成器輸入的潛在向量加入隨機擾動' },
        { label: 'D', text: '使用多尺度鑑別器架構以提高對多樣性的判別能力' }
      ],
      answer: 'B',
      chapter: '3.3 生成式AI技術與應用',
      explanation: 'WGAN 使用 Wasserstein 距離（也叫 Earth Mover\'s Distance）替代原始 GAN 的 JS 散度，提供更平滑的梯度訊號，是解決模式崩潰最經典且被廣泛驗證的方法。',
      optionExplanations: {
        A: '梯度懲罰(GP)是 WGAN-GP 的技術，主要用於滿足 Lipschitz 約束以穩定訓練，是輔助手段。但核心改善模式崩潰的是 Wasserstein 距離本身，GP 是配套技術。',
        B: null,
        C: '潛在向量本身就是隨機取樣的，再加入擾動只是增加微小的隨機性，無法根本解決生成器只產出少數幾種模式的問題。',
        D: '多尺度鑑別器可以幫助模型在不同解析度下判別品質，但這主要改善的是生成品質，不是專門針對模式崩潰設計的解法。'
      }
    },
    {
      id: 21,
      question: '在多模態 AI 模型訓練或推論過程中，遇到某一模態資料缺失（例如僅有影像資料但缺少文本說明），下列哪一種策略最有效維持模型效能？',
      options: [
        { label: 'A', text: '以零向量或固定向量填充缺失模態輸入' },
        { label: 'B', text: '訓練具備模態缺失感知能力的模型，使其適應缺失狀況' },
        { label: 'C', text: '利用生成模型（如 GAN 或自迴歸模型）預測並補全缺失模態資料' },
        { label: 'D', text: '直接捨棄缺少模態的樣本，避免干擾訓練或推論' }
      ],
      answer: 'B',
      chapter: '3.4 多模態人工智慧應用',
      explanation: '訓練具備模態缺失感知能力的模型（如 Masked Modality Training），能讓模型在推論時自動適應某些模態缺失的狀況，是最有效且實用的策略。',
      optionExplanations: {
        A: '零向量填充雖簡單，但會引入無意義的訊號，可能誤導模型，尤其在缺失比例高時效果差。',
        B: null,
        C: '用生成模型補全缺失模態理論上可行，但生成的資料不一定準確，且增加系統複雜度和計算成本，不是最有效的策略。',
        D: '直接捨棄缺失樣本會浪費大量資料，在實際場景中缺失是常態，捨棄會嚴重減少可用資料量。'
      }
    },
    {
      id: 22,
      question: '某電商平台開發的顧客流失預測模型在上線數月後，預測準確率明顯下降。專案團隊懷疑顧客行為模式改變，導致模型輸入特徵的分佈與原始訓練資料不同，出現典型的資料漂移(Data Drift)問題。為了偵測並確認資料分佈是否發生變化，下列哪一種作法最合適？',
      options: [
        { label: 'A', text: '定期重新訓練模型以應對外部變化' },
        { label: 'B', text: '提升模型複雜度以捕捉更多資料變異性' },
        { label: 'C', text: '增加測試資料量以提高評估準確度' },
        { label: 'D', text: '計算輸入特徵分佈間的 KL 散度(KL Divergence)' }
      ],
      answer: 'D',
      chapter: '5.2 AI 技術系統集成與部署',
      explanation: 'KL 散度可以量化兩個機率分佈之間的差異，用來比較當前輸入特徵分佈與訓練時的分佈，是偵測資料漂移最直接的統計方法。',
      optionExplanations: {
        A: '重新訓練是「應對」漂移的手段，但題目問的是如何「偵測」漂移。要先確認有漂移，才決定是否重新訓練。',
        B: '提升模型複雜度不能解決資料分佈改變的問題，反而可能加劇過擬合，且與偵測漂移無關。',
        C: '增加測試資料量可以提高評估的統計顯著性，但不是偵測資料分佈變化的方法。',
        D: null
      }
    },
    {
      id: 23,
      question: '某大型醫院即將部署一套輔助診斷的 AI 系統，為降低對臨床流程的衝擊，同時確保風險可控與回饋可收斂，應採取何種「漸進式部署」(Phased Rollout)策略最為合適？',
      options: [
        { label: 'A', text: '從單一專科（如放射科）或特定病房開始啟用，逐步擴展至全院' },
        { label: 'B', text: '先部署於病例量較高的急診單位，加速收集高頻使用回饋' },
        { label: 'C', text: '僅在夜班或離峰時段啟用，避免影響主要臨床工作負載' },
        { label: 'D', text: '在使用者界面啟用提示模式，讓全院同步體驗但不影響診斷流程' }
      ],
      answer: 'A',
      chapter: '4.2 AI 導入規劃',
      explanation: '漸進式部署的核心精神是「小範圍試行、收集回饋、調整優化、逐步擴展」。從單一專科開始可以控制風險範圍，讓回饋可收斂，再逐步推廣。',
      optionExplanations: {
        A: null,
        B: '急診單位風險最高、壓力最大，作為首批部署對象反而會增加衝擊和風險，不符合「降低衝擊、風險可控」的原則。',
        C: '僅在離峰時段啟用會限制使用情境，收集到的回饋不具代表性（離峰病例組成與高峰不同），無法有效驗證系統。',
        D: '全院同步上線不是「漸進式」部署，即使只是提示模式，全院範圍的變更管理和使用者訓練成本仍然很高。'
      }
    },
    {
      id: 24,
      question: '某金融機構的 AI 風控系統遭受對抗性攻擊，駭客透過對輸入特徵進行微小但惡意的擾動，成功欺騙了模型。為了從根本上解決模型自身對這類攻擊的脆弱性，下列何者並非針對此種攻擊型態的技術手段？',
      options: [
        { label: 'A', text: '強化資料前處理，用以過濾掉格式不符或數值極端異常的輸入' },
        { label: 'B', text: '在模型訓練階段導入對抗樣本訓練，以提升模型對惡意特徵擾動的辨識與防禦能力' },
        { label: 'C', text: '於推論後階段使用規則引擎，以確保模型的預測結果不違反既有的業務硬性規定' },
        { label: 'D', text: '在模型部署環境中強化網路防火牆，以阻擋來自未授權來源的網路連線' }
      ],
      answer: 'D',
      chapter: '4.3 AI 風險管理',
      explanation: '題目問的是「並非針對對抗性攻擊的技術手段」。網路防火牆是網路安全措施，防止的是未授權存取，而非模型層面的對抗性擾動攻擊。',
      optionExplanations: {
        A: '資料前處理過濾異常輸入可以在一定程度上攔截惡意擾動，是防禦對抗性攻擊的輸入端措施。',
        B: '對抗樣本訓練(Adversarial Training)是最直接的防禦方法，讓模型在訓練時就接觸擾動樣本，提升魯棒性。',
        C: '規則引擎可以在輸出端攔截不合理的預測結果，是對抗性攻擊的最後一道防線。',
        D: null
      }
    },
    {
      id: 25,
      question: '某企業部署生成式 AI 系統協助行銷與內容產出，但近期遭質疑部分生成內容可能涉及著作權侵權。為降低企業在法律層面的潛在責任與風險，下列哪一項策略最能有效預防侵權問題產生？',
      options: [
        { label: 'A', text: '對生成內容進行語意相似度比對，自動標註可能涉及既有著作的輸出結果，以降低侵權風險' },
        { label: 'B', text: '建立訓練資料篩選與授權驗證機制，排除未授權或高風險資料來源' },
        { label: 'C', text: '在訓練與微調過程中採用差分隱私技術，避免模型記憶特定受著作權保護的樣本' },
        { label: 'D', text: '在模型輸出端嵌入浮水印(Watermarking)或數位指紋(Digital Fingerprint)技術，以確保生成內容可追溯' }
      ],
      answer: 'B',
      chapter: '4.3 AI 風險管理',
      explanation: '從源頭管控訓練資料的授權狀態是最有效的預防策略。排除未授權資料可以從根本上降低生成內容侵權的風險。',
      optionExplanations: {
        A: '語意比對是事後檢測手段，能發現問題但無法「預防」侵權。且語意相似不等於侵權，判斷標準複雜。',
        B: null,
        C: '差分隱私主要保護個人隱私資料，不是專門為著作權設計的技術。且實務上難以完全避免模型記憶受保護內容。',
        D: '浮水印和數位指紋用於追溯生成內容的來源（誰生成的），但不能預防侵權行為的發生，是事後追責而非事前預防。'
      }
    },
    {
      id: 26,
      question: '在房價預測任務中，若發現特徵如「房間數」與「坪數」存在高度多重共線性(Multicollinearity)，為降低共線性對模型參數估計的負面影響，應優先選擇下列哪種模型？',
      options: [
        { label: 'A', text: '不受多重共線性影響的決策樹模型' },
        { label: 'B', text: '傳統線性迴歸模型，不含正則化項' },
        { label: 'C', text: '支持向量機搭配線性核函數' },
        { label: 'D', text: '含 L1 正則化的 LASSO 迴歸模型' }
      ],
      answer: 'D',
      chapter: '5.1 數據準備與模型選擇',
      explanation: 'LASSO（L1 正則化）可以將部分相關特徵的係數壓縮至 0，自動進行特徵選擇，有效消除共線性特徵的干擾。',
      optionExplanations: {
        A: '決策樹雖然不直接受共線性影響（不估計係數），但題目問的是「降低共線性對參數估計的影響」，暗示仍在迴歸類模型的框架下。',
        B: '傳統線性迴歸沒有正則化，在共線性存在時係數估計會非常不穩定（方差膨脹），是問題的根源而非解法。',
        C: 'SVM 搭配線性核本質上也是線性模型，在高共線性時同樣會受到影響，且不具備自動特徵選擇能力。',
        D: null
      }
    },
    {
      id: 27,
      question: '某企業需分析半結構化的系統日誌（JSON 格式），以提取關鍵的時序特徵供故障預測模型使用。考量日誌結構複雜且包含巢狀欄位(Nested Fields)，下列哪一種策略最有效且實務可行？',
      options: [
        { label: 'A', text: '先將 JSON 資料扁平化轉成 CSV，再對欄位計算統計量（如均值、次數）作為特徵' },
        { label: 'B', text: '使用遞歸神經網路(RNN)直接輸入原始 JSON 字串進行時序特徵抽取' },
        { label: 'C', text: '設計遞迴函式展開巢狀欄位，並基於時間窗口(Time Window)進行聚合與特徵萃取' },
        { label: 'D', text: '只保留時間戳記欄位，忽略其他巢狀內容以簡化特徵工程' }
      ],
      answer: 'C',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '遞迴展開巢狀欄位能完整保留結構資訊，搭配時間窗口聚合可以捕捉時序特徵，是處理複雜 JSON 日誌最有效且實務可行的做法。',
      optionExplanations: {
        A: '扁平化會丟失巢狀結構中的層級關係資訊，且 JSON 結構不固定時 CSV 欄位難以統一，不夠靈活。',
        B: 'RNN 直接處理原始 JSON 字串不合理，JSON 是結構化資料格式而非自然語言序列，需要先做結構化解析。',
        C: null,
        D: '只保留時間戳記會丟棄大量有價值的特徵資訊（如錯誤代碼、元件名稱等），嚴重影響故障預測的準確性。'
      }
    },
    {
      id: 28,
      question: '在一個同時包含連續型特徵與類別型特徵的資料集中，若希望透過適當的特徵工程流程來提升模型整體表現，下列哪一種作法最為合適？',
      options: [
        { label: 'A', text: '將類別型特徵使用標籤編碼(Label Encoding)轉換後，與連續特徵直接合併進行模型訓練' },
        { label: 'B', text: '將連續特徵進行離散化(Discretization)或分桶(Binning)轉為類別型特徵，統一以類別方式處理' },
        { label: 'C', text: '對連續特徵做標準化(Standardization)，類別特徵採用目標編碼(Target Encoding)，並生成交互特徵提升模型表現' },
        { label: 'D', text: '只保留連續特徵，忽略類別型變量以簡化模型' }
      ],
      answer: 'C',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '針對不同型態的特徵分別處理（連續特徵標準化、類別特徵目標編碼），再生成交互特徵，是最完整且有效的特徵工程流程。',
      optionExplanations: {
        A: '標籤編碼會對無序類別引入不存在的大小關係（例如「紅=1, 藍=2, 綠=3」暗示綠>藍>紅），可能誤導模型。',
        B: '離散化會丟失連續特徵的精確數值資訊，且全部轉為類別處理不一定適合所有模型，做法不夠靈活。',
        C: null,
        D: '忽略類別特徵會丟失重要資訊（如地區、產品類型等），簡化模型不等於提升表現。'
      }
    },
    {
      id: 29,
      question: '某 AI 開發團隊為提升模型開發效率及品質控制，計畫實施持續整合(Continuous Integration, CI)流程。下列哪一項做法最符合 CI 的核心實踐，且能有效減少整合風險？',
      options: [
        { label: 'A', text: '在主分支(Main Branch)每日固定時間手動合併並執行完整測試流程' },
        { label: 'B', text: '每次程式碼提交(Commit)後自動觸發建置、單元測試及靜態程式碼分析' },
        { label: 'C', text: '於模型訓練完成後，定期安排開發團隊回顧並合併程式碼' },
        { label: 'D', text: '透過自動化部署腳本，將模型在特定時間點批次釋出到測試環境' }
      ],
      answer: 'B',
      chapter: '5.2 AI 技術系統集成與部署',
      explanation: 'CI 的核心是「每次提交自動觸發」建置和測試，盡早發現問題。自動化是關鍵，不是定期手動操作。',
      optionExplanations: {
        A: '「每日固定時間手動合併」不符合 CI 的「持續」和「自動化」精神。CI 強調每次提交都自動觸發，而非每日手動。',
        B: null,
        C: '「定期安排回顧並合併」是 Code Review 流程，不是 CI。CI 重點在自動化觸發建置和測試，不是人工排程。',
        D: '自動化部署到測試環境屬於 CD（Continuous Delivery/Deployment），不是 CI。CI 聚焦在程式碼整合和測試。'
      }
    },
    {
      id: 30,
      question: '某銀行計劃將 AI 詐欺偵測模組整合至核心交易系統，主管機關要求全流程必須符合金融監管對「不可否認性(Non-repudiation)」的資訊安全規範，以確保日後能進行法務追蹤與稽核。下列哪一項措施最能確保此要求的落實？',
      options: [
        { label: 'A', text: '為每筆 AI 模型推論記錄其輸入與輸出結果的加密雜湊值(Hash)，並簽署數位簽章以確保不可竄改性' },
        { label: 'B', text: '優化模型效能以降低平均推論延遲至 100ms 以下，提升使用者體驗' },
        { label: 'C', text: '增加主機備援數量，以確保系統在故障時持續可用' },
        { label: 'D', text: '將模型推論請求導入負載平衡器，避免單點壅塞導致服務延遲' }
      ],
      answer: 'A',
      chapter: '4.3 AI 風險管理',
      explanation: '不可否認性(Non-repudiation)要求能證明某項操作確實發生且無法被否認。加密雜湊值 + 數位簽章可確保推論記錄不可竄改、可追溯，滿足法務稽核需求。',
      optionExplanations: {
        A: null,
        B: '降低推論延遲是效能優化，與不可否認性（確保記錄不可竄改、可追溯）完全無關。',
        C: '主機備援是高可用性(High Availability)措施，確保系統不中斷，但與不可否認性無關。',
        D: '負載平衡是效能和可用性的措施，分散流量避免單點故障，與法務追蹤和稽核無關。'
      }
    },
    {
      id: 31,
      question: '某 AI 服務系統每次推論請求需約 1 秒完成，且必須支撐高達 10,000 次請求每秒(RPS)的流量。為確保系統具備高可用性且能穩定應付流量峰值，下列哪一種架構方案最為合適？',
      options: [
        { label: 'A', text: '依賴單台超高效能伺服器進行垂直擴展，提升硬體規格' },
        { label: 'B', text: '採用容器化部署並水平擴展服務實例，結合自動彈性伸縮機制(Auto Scaling)' },
        { label: 'C', text: '限制最大併發連線數，以避免系統過載' },
        { label: 'D', text: '增加批次處理大小，一次同時處理上千筆請求' }
      ],
      answer: 'B',
      chapter: '5.2 AI 技術系統集成與部署',
      explanation: '容器化 + 水平擴展 + Auto Scaling 是應對高流量的標準架構：多個服務實例分散負載，自動彈性伸縮機制根據流量動態調整實例數量。',
      optionExplanations: {
        A: '垂直擴展（單台升級硬體）有物理上限，且單點故障風險高，無法滿足高可用性要求。',
        B: null,
        C: '限制併發數是保護措施而非解決方案，會導致超出上限的請求被拒絕，無法「支撐」流量峰值。',
        D: '批次處理會增加單筆請求的等待時間（要等湊滿一批才處理），不適合需要即時回應的線上服務。'
      }
    },
    {
      id: 32,
      question: '某企業已將 AI 模型部署於生產環境，為確保系統持續穩定運作，並能提前偵測模型效能可能衰退，技術團隊希望透過監控指標進行預警。下列哪一項監控指標最具預測效力，能提早發現模型效能下滑風險？',
      options: [
        { label: 'A', text: '系統 CPU 與記憶體使用率波動幅度' },
        { label: 'B', text: '模型推論結果的置信度(Confidence)分佈變化趨勢' },
        { label: 'C', text: 'API 平均回應時間與延遲百分位數變化' },
        { label: 'D', text: '輸入特徵與訓練資料分布差異的 PSI(Population Stability Index)指數' }
      ],
      answer: 'D',
      chapter: '5.2 AI 技術系統集成與部署',
      explanation: 'PSI 衡量輸入特徵分佈與訓練資料分佈的差異，能在模型效能實際下降之前就偵測到資料漂移，具有「預測」效力。',
      optionExplanations: {
        A: 'CPU/記憶體使用率是系統基礎設施指標，反映的是硬體負載而非模型效能，無法預測模型是否會效能衰退。',
        B: '置信度分佈變化可以反映模型的不確定性增加，但這通常是效能已經開始下降時才會出現的「同步」指標，不如 PSI 有預測效力。',
        C: 'API 回應時間是系統效能指標，與模型預測品質無關。延遲增加代表系統問題，不代表模型效能衰退。',
        D: null
      }
    },
    {
      id: 33,
      question: '企業團隊在使用 Word2Vec 模型訓練客服文本語料時，若訓練資料量龐大且希望模型能更有效捕捉罕見詞的語意關聯，下列哪一種訓練策略最為適合？',
      options: [
        { label: 'A', text: '採用 Skip-gram 模型，但以隨機初始化權重加快高頻詞的訓練收斂' },
        { label: 'B', text: '採用 CBOW 模型(Continuous Bag of Words Model)並結合 TF-IDF 權重以強化低頻詞表示' },
        { label: 'C', text: '採用 Skip-gram 模型，利用中心詞預測周圍詞語，能更有效學習低頻詞關係' },
        { label: 'D', text: '採用 CBOW 模型(Continuous Bag of Words Model)，利用周圍詞預測中心詞，能提升罕見詞的語意穩定度' }
      ],
      answer: 'C',
      chapter: '3.1 自然語言處理技術與應用',
      explanation: 'Skip-gram 用中心詞預測周圍詞，每個罕見詞只要出現一次就能產生多組訓練樣本，因此對低頻詞的學習效果優於 CBOW。',
      optionExplanations: {
        A: '隨機初始化權重是所有模型的標準做法，不是特殊策略，且「加快高頻詞收斂」與「捕捉罕見詞」的目標無關。',
        B: 'CBOW 用周圍詞預測中心詞，對高頻詞效果較好但對罕見詞較弱。結合 TF-IDF 權重不是 Word2Vec 的標準做法。',
        C: null,
        D: 'CBOW 對罕見詞的表現不如 Skip-gram，因為 CBOW 會把多個上下文詞平均化，罕見詞的訊號容易被稀釋。'
      }
    },
    {
      id: 34,
      question: '在自駕車影像辨識系統中，開發團隊希望模型能同時辨識每個像素所屬的物件類別（例如道路、建築、行人），又能區分出同類物件的不同個體（例如多位行人）。此時最適合採用下列哪一項電腦視覺技術？',
      options: [
        { label: 'A', text: '語義分割(Semantic Segmentation)' },
        { label: 'B', text: '物件偵測(Object Detection)' },
        { label: 'C', text: '實例分割(Instance Segmentation)' },
        { label: 'D', text: '全景分割(Panoptic Segmentation)' }
      ],
      answer: 'D',
      chapter: '3.2 電腦視覺技術與應用',
      explanation: '全景分割(Panoptic Segmentation)結合語義分割和實例分割，既能標註每個像素的類別，又能區分同類物件的不同個體，完全符合題目的雙重需求。',
      optionExplanations: {
        A: '語義分割只能標註每個像素的類別，但無法區分同類物件的不同個體（例如兩個行人會被標成同一塊）。',
        B: '物件偵測用邊界框框出物件位置，但不是像素級標註，無法精確知道「每個像素」的類別。',
        C: '實例分割能區分不同個體並做像素級標註，但只處理「可數物件」（things），不處理背景類別（stuff，如道路、天空）。',
        D: null
      }
    },
    {
      id: 35,
      question: '某媒體公司計畫導入 CLIP(Contrastive Language-Image Pre-training)模型，以協助大量影像自動標註與搜尋，並希望在無需新增標訓資料的情況下，僅透過文字提示(Text Prompt)即可識別影像內容。請問此應用情境中，CLIP 能夠達成的關鍵技術特性為何？',
      options: [
        { label: 'A', text: '透過圖文對比式學習(Contrastive Learning)將影像與文字映射至共同嵌入空間(Shared Embedding Space)，可直接以語意相似度進行零樣本分類' },
        { label: 'B', text: '透過影像增強與特徵擴散降低標訓資料需求' },
        { label: 'C', text: '以監督式學習結合多層感知器(Multilayer Perceptron, MLP)進行影像特徵分類' },
        { label: 'D', text: '以自迴歸生成模型(Autoregressive Model)逐步生成文字標籤描述影像內容' }
      ],
      answer: 'A',
      chapter: '3.4 多模態人工智慧應用',
      explanation: 'CLIP 的核心是透過對比學習將影像和文字映射到同一個嵌入空間，使得可以直接比較影像與文字的語意相似度，實現零樣本(Zero-shot)分類。',
      optionExplanations: {
        A: null,
        B: '影像增強和特徵擴散是資料層面的技術，不是 CLIP 的核心機制。CLIP 的關鍵在於圖文共同嵌入空間，不是資料增強。',
        C: '監督式學習 + MLP 需要標註資料進行訓練，與題目「無需新增標訓資料」的條件矛盾，且不是 CLIP 的運作方式。',
        D: 'CLIP 不是自迴歸生成模型，它不逐步生成文字。CLIP 是對比式模型，比較圖文的嵌入向量相似度。'
      }
    },
    {
      id: 36,
      question: '某資料科學團隊在開發預測模型時，針對多種模型設定（如學習率、樹深度、正則化係數等）進行系統化測試，希望找出在驗證資料上表現最穩定的組合。此過程最可能採用下列哪一種方法？',
      options: [
        { label: 'A', text: '使用交叉驗證(Cross Validation)反覆評估模型以降低過擬合風險' },
        { label: 'B', text: '透過網格搜尋(Grid Search)在多組超參數設定中進行系統化搜尋與評估' },
        { label: 'C', text: '以隨機搜尋(Random Search)快速探索部分參數空間以提升搜尋效率' },
        { label: 'D', text: '採用貝葉斯優化(Bayesian Optimization)根據歷次結果動態調整搜尋方向' }
      ],
      answer: 'B',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '題目描述的是「針對多種設定進行系統化測試」，這正是網格搜尋(Grid Search)的定義：窮舉所有超參數組合並逐一評估。',
      optionExplanations: {
        A: '交叉驗證是「評估」方法，不是「搜尋」方法。它用來穩定評估每組參數的表現，但不負責系統化地遍歷參數組合。',
        B: null,
        C: '隨機搜尋是隨機抽樣參數組合，不是系統化地窮舉所有組合。題目強調「系統化測試」，對應的是 Grid Search。',
        D: '貝葉斯優化是根據先前結果智慧地選擇下一組參數，不是窮舉式的系統化測試。'
      }
    },
    {
      id: 37,
      question: '某公司正在訓練一個大型語音合成模型，開發團隊使用多台 GPU 進行訓練，但經常出現 GPU 記憶體不足問題。由於模型架構已固定且無法更換硬體，團隊希望在維持模型效能與收斂品質的前提下，下列哪一種方法最有效降低單張 GPU 的記憶體壓力？',
      options: [
        { label: 'A', text: '減少訓練資料量以降低記憶體使用' },
        { label: 'B', text: '採用較小的批次大小(Batch Size)並搭配資料分片(Data Sharding)分散訓練負載' },
        { label: 'C', text: '增加學習率(Learning Rate)以加快收斂速度' },
        { label: 'D', text: '改用測試資料集(Test Set)進行部分訓練以節省空間' }
      ],
      answer: 'B',
      chapter: '5.2 AI 技術系統集成與部署',
      explanation: '減小 Batch Size 直接降低單張 GPU 的記憶體佔用，搭配 Data Sharding 將資料分散到多台 GPU 可維持整體訓練效率和收斂品質。',
      optionExplanations: {
        A: '減少訓練資料量會影響模型的學習效果和泛化能力，不符合「維持模型效能」的前提。',
        B: null,
        C: '增加學習率不會降低記憶體使用（記憶體佔用取決於 Batch Size 和模型大小，與學習率無關），且可能導致訓練不穩定。',
        D: '用測試集訓練違反機器學習基本原則（測試集只能用於最終評估），且不會解決記憶體問題。'
      }
    },
    {
      id: 38,
      question: '某影像設計團隊在使用 Stable Diffusion 生成 4K 級產品圖時，發現影像邊緣與細節存在顆粒化與模糊現象。若僅能在生成階段進行調整，希望提升畫面清晰度與紋理層次，同時避免過度平滑，下列哪一項作法最適合？',
      options: [
        { label: 'A', text: '降低取樣步數，以縮短生成時間' },
        { label: 'B', text: '增加取樣步數並選擇高品質取樣器，以強化細節還原度' },
        { label: 'C', text: '提高 CFG(Classifier-Free Guidance)值，使生成結果更具創意與多樣性' },
        { label: 'D', text: '改用低解析度輸入以降低計算成本' }
      ],
      answer: 'B',
      chapter: '3.3 生成式AI技術與應用',
      explanation: '增加取樣步數讓擴散模型有更多去雜訊迭代，配合高品質取樣器（如 DPM++ 2M Karras）能有效提升細節還原度，減少顆粒化和模糊。',
      optionExplanations: {
        A: '降低取樣步數會減少去雜訊迭代次數，反而讓顆粒化和模糊更嚴重，方向完全錯誤。',
        B: null,
        C: '高 CFG 值會讓生成結果更貼近提示語但可能產生過飽和、色彩不自然等問題，不是解決顆粒化和模糊的方法。且高 CFG 是增加一致性而非多樣性。',
        D: '低解析度輸入會讓生成品質更差，與提升 4K 清晰度的目標完全背道而馳。'
      }
    },
    {
      id: 39,
      question: '某企業的資料科學團隊利用 ARIMA 模型(AutoRegressive Integrated Moving Average Model)預測每週產品銷售量。模型建立完成後，分析人員發現預測誤差隨時間呈現週期性波動，且自相關函數(ACF)顯示殘差在多個時滯(Lag)上仍顯著不為零。根據上述現象，最合理的模型診斷結論為何？',
      options: [
        { label: 'A', text: '模型殘差符合白噪音(White Noise)假設，預測表現穩定' },
        { label: 'B', text: '模型殘差雖有輕微異常，但可視為隨機誤差忽略不計' },
        { label: 'C', text: '模型存在配適不足(Underfitting)問題，需重新調整 p 或 q 參數以捕捉時間依賴性' },
        { label: 'D', text: '殘差特性不影響預測結果，無須進一步修正' }
      ],
      answer: 'C',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '殘差在多個時滯上顯著不為零且呈週期性，代表模型未能完整捕捉資料中的時間依賴結構，屬於配適不足(Underfitting)，需調整 ARIMA 的 p（自迴歸階數）或 q（移動平均階數）。',
      optionExplanations: {
        A: '白噪音殘差的 ACF 在所有時滯上應接近零。殘差在多個時滯上顯著不為零，明顯不符合白噪音假設。',
        B: '殘差呈週期性波動且 ACF 顯著不為零，這不是「輕微異常」而是系統性問題，不能忽略。',
        C: null,
        D: '殘差中存在未被模型捕捉的時間結構，直接影響預測品質（會產生系統性偏差），必須修正。'
      }
    },
    {
      id: 40,
      question: '下列哪一項最正確地描述了 VAE(Variational Autoencoder)、GAN(Generative Adversarial Network)與擴散模型(Diffusion Model)在多模態潛在空間對齊(Latent Alignment)與生成策略上的根本差異？',
      options: [
        { label: 'A', text: 'VAE 透過顯式潛在變數建模實現跨模態對齊，適合捕捉整體語意結構但生成解析度有限；GAN 透過對抗損失在不同模態間學習分佈映射，生成品質高但穩定性差；擴散模型則以條件化噪聲反推方式實現高保真跨模態生成，兼具穩定性與多樣性' },
        { label: 'B', text: 'VAE 與 Diffusion Model 均屬隱式生成架構，主要依賴對抗式訓練實現跨模態對齊；GAN 則以顯式後驗估計方式提升樣本一致性' },
        { label: 'C', text: 'VAE 與 GAN 均使用馬爾可夫鏈進行跨模態轉換；Diffusion Model 則透過 KL 散度最小化學習語意對應' },
        { label: 'D', text: '三者在多模態應用中皆依賴同一潛在表徵空間，僅在解碼器結構不同而已' }
      ],
      answer: 'A',
      chapter: '3.3 生成式AI技術與應用',
      explanation: '三種模型的根本差異在於潛在空間建模方式：VAE 用顯式機率建模（KL 散度約束）、GAN 用對抗訓練、擴散模型用逐步去雜訊。各有優劣，A 選項正確描述了三者特性。',
      optionExplanations: {
        A: null,
        B: 'VAE 是顯式生成模型（有明確的潛在變數分佈），不是隱式的；GAN 才是隱式生成模型（沒有明確的機率分佈），且 GAN 不做後驗估計。說法完全搞混了。',
        C: 'VAE 和 GAN 都不使用馬爾可夫鏈。使用馬爾可夫鏈的是擴散模型（逐步加噪/去噪的過程）。KL 散度是 VAE 的工具，不是擴散模型的。',
        D: '三者的潛在空間結構完全不同：VAE 有顯式高斯潛在空間、GAN 的潛在空間由對抗訓練隱式學習、擴散模型在像素空間逐步去雜訊。不是只差在解碼器。'
      }
    },
    {
      id: 41,
      question: '在進行超參數調校(Hyperparameter Tuning)時，若直接在 K-Fold 交叉驗證(Cross-Validation)的資料上同時調整模型參數並評估效能，最可能導致下列哪一種問題？',
      options: [
        { label: 'A', text: '模型的交叉驗證結果出現過度樂觀偏差(Over-optimistic Bias)，因測試摺資料間接參與參數選擇，造成資料洩漏(Data Leakage)' },
        { label: 'B', text: '模型會在每一摺(Fold)內反覆調整參數，導致訓練不穩與過度正則化' },
        { label: 'C', text: '因交叉驗證資料被重複使用，造成效能方差增大，無法獲得穩定估計' },
        { label: 'D', text: 'K-Fold 交叉驗證的假設與超參數搜尋相衝突，導致驗證過程失效' }
      ],
      answer: 'A',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '在同一個 K-Fold 上同時調參和評估，驗證摺的表現會「間接」引導參數選擇，造成過度樂觀的評估結果（Data Leakage）。正確做法是使用巢狀交叉驗證(Nested CV)。',
      optionExplanations: {
        A: null,
        B: '交叉驗證中每一摺的訓練是獨立的，不存在「在摺內反覆調整參數」的情況，且不會導致過度正則化。',
        C: '交叉驗證的設計本身就是重複使用資料的不同劃分來穩定評估，資料重複使用是其特性而非問題，核心問題是資料洩漏。',
        D: 'K-Fold 和超參數搜尋沒有假設衝突。問題不在於「衝突」，而在於同一層 CV 同時承擔調參和評估兩個角色時產生的偏差。'
      }
    },
    {
      id: 42,
      question: '若部署一個深度學習模型至金融風控系統，該模型採用鑑別式架構（如 Transformer Classifier）。然而上線後，模型對新樣本的分類錯誤率顯著上升，經檢查發現，輸入資料分佈已與原訓練集明顯不同。針對此情形，下列哪一種應對策略最為適合？',
      options: [
        { label: 'A', text: '改用生成對抗網路(GAN)生成新樣本並混入訓練集' },
        { label: 'B', text: '改用邏輯迴歸模型(Logistic Regression)以提升穩定性' },
        { label: 'C', text: '增加模型容量(Model Capacity)，以學習更多樣本差異' },
        { label: 'D', text: '使用變分自編碼器(VAE)監控潛在空間分佈，偵測輸入資料偏移' }
      ],
      answer: 'D',
      chapter: '5.2 AI 技術系統集成與部署',
      explanation: 'VAE 可以將輸入映射到潛在空間，透過監控潛在分佈的變化來偵測資料偏移(Data Drift)，是針對「資料分佈改變」最直接的應對策略。',
      optionExplanations: {
        A: '用 GAN 生成新樣本無法解決根本問題（新分佈的真實樣本特性不明），且生成的樣本不一定能反映真實的分佈變化。',
        B: '換成更簡單的模型不能解決資料分佈改變的問題，且邏輯迴歸在複雜場景中表現通常不如深度學習模型。',
        C: '增加模型容量只能讓模型學到更複雜的模式，但如果資料分佈已經改變，學更多舊分佈的模式沒有用。',
        D: null
      }
    },
    {
      id: 43,
      question: '某金融科技公司欲導入 AI 模型協助客服郵件自動分類（投訴、詢問、表揚）。團隊同時考慮兩種模型設計：方案 A 採用 VAE 建構潛在語意空間再結合分類器；方案 B 採用 BERT Classifier 直接監督式分類。現有標註資料約 2,000 筆，若團隊希望公平比較兩種模型的資料利用效率與泛化能力，下列哪一種實驗設計最能突顯兩者的本質差異？',
      options: [
        { label: 'A', text: '在完整資料集上分別訓練兩者，並比較其分類準確率(Accuracy)與推論時間' },
        { label: 'B', text: '在低資源情境(Low-resource Setting)下，逐步減少標註比例（100%、50%、10%），比較其 F1-score' },
        { label: 'C', text: '使用 GAN 自動生成文本樣本補足資料，觀察兩模型在資料增強後的精確率(Precision)差異' },
        { label: 'D', text: '在相同訓練資料上固定輸入維度，僅調整模型參數量，比較其對過擬合的敏感度' }
      ],
      answer: 'B',
      chapter: '5.1 數據準備與模型選擇',
      explanation: 'VAE（生成式）和 BERT（鑑別式）的本質差異在於資料利用效率。逐步減少標註比例可以清楚展現：VAE 能利用無標註資料學習潛在結構，而 BERT 依賴標註資料。',
      optionExplanations: {
        A: '只在完整資料上比較無法突顯「資料利用效率」的差異，因為資料充足時兩者差異不明顯。',
        B: null,
        C: '引入 GAN 生成資料會增加外部變因，無法公平比較兩個模型本身的資料利用效率差異。',
        D: '調整參數量比較的是模型容量對過擬合的影響，不是資料利用效率和泛化能力的本質差異。'
      }
    },
    {
      id: 44,
      question: '某電信公司希望建立一個模型來預測顧客是否即將流失，並進一步模擬不同促銷或服務策略下顧客的行為變化，以生成多樣化的虛擬樣本資料進行 A/B 測試與行銷策略評估。若要同時兼顧預測與資料生成的需求，最適合採用下列哪一種方法？',
      options: [
        { label: 'A', text: '使用傳統隨機森林(Random Forest)' },
        { label: 'B', text: '使用邏輯迴歸(Logistic Regression)模型' },
        { label: 'C', text: '使用變分自編碼器(Variational Autoencoder, VAE)或生成對抗網路(Generative Adversarial Network, GAN)' },
        { label: 'D', text: '使用強化學習代理(Reinforcement Learning Agent)' }
      ],
      answer: 'C',
      chapter: '3.3 生成式AI技術與應用',
      explanation: 'VAE 和 GAN 都是生成式模型，能學習資料分佈後生成虛擬樣本。VAE 的潛在空間也可用於預測任務，同時滿足「預測」和「資料生成」兩個需求。',
      optionExplanations: {
        A: '隨機森林是鑑別式模型，只能做預測分類，無法生成虛擬樣本資料。',
        B: '邏輯迴歸同樣是鑑別式模型，只能做二元分類預測，沒有資料生成能力。',
        C: null,
        D: '強化學習適合在動態環境中學習最佳策略，但不擅長生成多樣化的虛擬樣本資料，不是資料生成的最佳選擇。'
      }
    },
    {
      id: 45,
      question: '進行影像分類任務時，研究團隊嘗試利用主成分分析(Principal Component Analysis, PCA)將輸入特徵從 1024 維降至 100 維，並將降維後的資料輸入支持向量機(Support Vector Machine, SVM)模型進行訓練。關於此作法，下列哪一項描述最為合理？',
      options: [
        { label: 'A', text: 'PCA 保留的主成分必然能提升 SVM 的分類準確率' },
        { label: 'B', text: '使用原始高維資料通常更能保留資訊，因此 PCA 沒有實際意義' },
        { label: 'C', text: 'PCA 可讓 SVM 自動適用於非線性(Nonlinear)資料集' },
        { label: 'D', text: '降維後可降低訓練時間並減少過擬合(Overfitting)風險' }
      ],
      answer: 'D',
      chapter: '5.1 數據準備與模型選擇',
      explanation: 'PCA 降維減少特徵數量，直接降低 SVM 的訓練計算量（特別是高維資料），同時去除雜訊維度可減少過擬合風險。',
      optionExplanations: {
        A: '不一定。PCA 保留的是變異量最大的方向，但最大變異不一定是最有分類價值的特徵，有可能丟掉對分類重要的資訊。',
        B: '高維資料常有「維度詛咒」問題（資料在高維空間中變得稀疏），適當降維反而能提升模型效果，PCA 有實際意義。',
        C: 'PCA 是線性降維方法，不會讓線性 SVM 自動處理非線性問題。要處理非線性資料需使用核函數（如 RBF kernel）。',
        D: null
      }
    },
    {
      id: 46,
      question: '某企業的 AI 模型已部署於線上服務環境中，用於即時預測顧客流失機率。近期團隊注意到模型預測準確率逐漸下降，但系統運作正常且未出現錯誤訊息。經分析發現，近期輸入資料的分布與模型訓練資料相比出現顯著偏移。若要在 MLOps 流程中主動偵測並預警此類問題，最應採用下列哪項措施？',
      options: [
        { label: 'A', text: '建立即時的資料漂移(Data Drift)與概念漂移(Concept Drift)監測機制' },
        { label: 'B', text: '將模型轉換為量化版本以降低延遲' },
        { label: 'C', text: '增加模型超參數調整次數以強化適應性' },
        { label: 'D', text: '使用固定隨機種子(Random Seed)確保訓練穩定' }
      ],
      answer: 'A',
      chapter: '5.2 AI 技術系統集成與部署',
      explanation: '資料漂移和概念漂移監測機制可以在模型效能明顯下降之前偵測到輸入分佈的變化，是 MLOps 中主動預警的標準做法。',
      optionExplanations: {
        A: null,
        B: '模型量化是壓縮模型大小和降低推論延遲的技術，與偵測資料分佈偏移完全無關。',
        C: '增加超參數調整次數不能解決資料分佈改變的問題，且不是「偵測和預警」機制。',
        D: '固定隨機種子確保的是訓練過程的可重現性，與偵測線上資料分佈變化無關。'
      }
    },
    {
      id: 47,
      question: '某金融科技公司導入多任務學習架構，讓單一 Transformer 模型同時執行 OCR 後的文檔分類以及命名實體辨識(NER)任務。在部署初期，團隊發現當模型的 NER 準確率提升時，文檔分類準確率反而下降。若模型架構正確且資料品質良好，下列哪一項最可能是造成此現象的原因？',
      options: [
        { label: 'A', text: '模型架構無法同時支援文字分類與序列標註任務(Sequence Labeling)' },
        { label: 'B', text: '文檔分類任務不需要語意化表徵(Contextualized Representation)' },
        { label: 'C', text: '損失函數(Loss Function)未進行權重平衡，導致任務間競爭' },
        { label: 'D', text: '所使用的 BERT 模型無法支援多任務輸出頭(Multi-Head Outputs)' }
      ],
      answer: 'C',
      chapter: '5.1 數據準備與模型選擇',
      explanation: '多任務學習中，如果各任務的損失函數權重未經平衡，某個任務的損失可能主導梯度更新，導致另一個任務的表現下降。這是典型的任務間競爭(Task Competition)問題。',
      optionExplanations: {
        A: 'Transformer 架構完全可以同時支援分類和序列標註任務，透過不同的輸出頭即可實現，這不是架構限制。',
        B: '文檔分類同樣需要理解文本語意，語意化表徵對分類很有幫助。這不是造成效能下降的原因。',
        C: null,
        D: 'BERT/Transformer 可以支援多任務輸出頭，這是多任務學習的標準做法，不是技術限制。'
      }
    },
    {
      id: 48,
      question: '某數據工程師使用 DBSCAN 演算法對一份數百萬筆的高維顧客資料進行聚類分析，但發現程式執行速度極慢，甚至出現記憶體不足的情況。若要在不改變演算法核心邏輯的前提下，最有效提升其運算效率的作法為何？',
      options: [
        { label: 'A', text: '改用以平均連結(Average Linkage)為基礎的階層式群集法(Hierarchical Clustering)' },
        { label: 'B', text: '採用高效率的距離索引結構(Distance Index Structure)，例如 KD-Tree 或 Ball Tree' },
        { label: 'C', text: '將 Epsilon 參數調得極小，以減少鄰近點的數量' },
        { label: 'D', text: '在資料前處理時增加標準化後的特徵維度數' }
      ],
      answer: 'B',
      chapter: '5.1 數據準備與模型選擇',
      explanation: 'KD-Tree 或 Ball Tree 是空間索引結構，可以加速 DBSCAN 中最耗時的鄰近點搜尋操作，將複雜度從 O(n^2) 降至約 O(n log n)，且不改變演算法核心邏輯。',
      optionExplanations: {
        A: '改用階層式聚類就是「改變演算法」了，不符合題目「不改變演算法核心邏輯」的前提。',
        B: null,
        C: '將 Epsilon 調極小會導致每個點的鄰居極少，大部分點會被判為雜訊，聚類結果會失去意義。這不是提升效率的正確方法。',
        D: '增加特徵維度會讓距離計算更耗時、記憶體佔用更大，且高維空間會加劇「維度詛咒」，效能只會更差。'
      }
    },
    {
      id: 49,
      question: '某電商平台導入 AI 情感分析模型，用以自動偵測顧客評論中的負面情緒並觸發客服機制。然而，上線後發現模型在面對不同語言或族群書寫風格的評論時表現不一致。若從技術與資料治理的角度分析，下列哪一項描述不正確？',
      options: [
        { label: 'A', text: '模型未啟用詞嵌入正規化(Embedding Normalization)可能造成語意距離不穩定，導致預測誤差' },
        { label: 'B', text: '訓練語料若偏向特定文化或語氣特徵，可能使模型產生內隱偏誤(Implicit Bias)' },
        { label: 'C', text: '模型若訓練資料來源不平衡，容易導致對不同語言或族群風格的情緒判斷不準確' },
        { label: 'D', text: 'Transformer 架構能捕捉上下文語意，但若訓練資料偏差仍存在，模型仍可能學習到偏誤判斷' }
      ],
      answer: 'A',
      chapter: '4.3 AI 風險管理',
      explanation: '題目問「不正確」的描述。A 選項的說法不正確：詞嵌入正規化主要處理的是向量長度的標準化，與「不同語言/族群書寫風格的表現不一致」問題的根本原因（訓練資料偏差）無直接關係。',
      optionExplanations: {
        A: null,
        B: '正確描述。訓練語料偏向特定文化或語氣確實會造成內隱偏誤，是造成跨族群表現不一致的主要原因之一。',
        C: '正確描述。訓練資料來源不平衡（某些語言/族群的資料過少）確實會導致模型對少數群體的判斷不準確。',
        D: '正確描述。再好的架構也無法自動修正訓練資料中的偏差，模型會忠實地學習資料中的偏誤。'
      }
    },
    {
      id: 50,
      question: '某設計師使用公司內部建置的生成式 AI 工具製作行銷素材，輸入提示語：「請生成一張模特兒手持品牌飲料、背景為海邊夕陽的照片」。系統能正確生成主要主題與場景，但輸出的圖像中，品牌標誌顏色常有誤差，或人物手部姿勢顯得不自然。若從多模態生成模型的技術機制分析，此現象最可能是下列哪一項原因所造成？',
      options: [
        { label: 'A', text: '擴散式生成模型的去雜訊過程出現隨機梯度漂移，導致影像像素錯誤' },
        { label: 'B', text: '提示語過長造成 Transformer 的位置編碼超出上下文限制，導致生成混亂' },
        { label: 'C', text: 'CLIP 模型中的文字編碼器與影像編碼器在語意嵌入空間未充分對齊，導致跨模態理解偏差' },
        { label: 'D', text: '模型未採用對比學習(Contrastive Learning)損失函數，無法建立多模態語意關聯' }
      ],
      answer: 'C',
      chapter: '3.4 多模態人工智慧應用',
      explanation: '品牌標誌顏色誤差和手部姿勢不自然，反映的是文字描述（品牌顏色、手持姿勢）與影像生成之間的語意理解不精確。這是 CLIP 文字-影像嵌入空間對齊不足造成的跨模態理解偏差。',
      optionExplanations: {
        A: '「隨機梯度漂移」不是擴散模型的標準術語。擴散模型的去雜訊過程本身就包含隨機性，但這不是造成特定細節（品牌顏色、手部姿勢）錯誤的原因。',
        B: '題目的提示語並不長（只有一句話），遠未超出 Transformer 的上下文限制。這不是原因。',
        C: null,
        D: '現代的多模態生成模型（如 Stable Diffusion）通常已使用 CLIP（基於對比學習）。問題不在於「沒有對比學習」，而在於對齊的精確度不足。'
      }
    }
  ]
}
