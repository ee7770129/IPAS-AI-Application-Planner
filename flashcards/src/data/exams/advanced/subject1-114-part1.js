/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：subject1-114-part1.js
 * 功能：114 年歷屆考題 科目一（第 1-25 題）
 * 建立日期：2026-05-17
 * 版本：1.0.0
 */

export default [
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
    }
]
