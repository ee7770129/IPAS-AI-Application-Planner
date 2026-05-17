/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：ml-advanced-part2.js
 * 功能：機器學習進階概念（第 11-20 張）
 * 建立日期：2026-05-17
 * 版本：1.0.0
 */
export default [
    {
      number: 11,
      title: '時間窗口特徵萃取',
      engTitle: 'Time Window Feature Extraction',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'schedule',
            content: '以固定時間區間為單位，對原始資料做聚合統計（如平均、最大值、計數），產生有意義的特徵。常用在時序資料的特徵工程。'
          },
          {
            label: '範例',
            icon: 'build',
            code: '系統日誌（JSON，含巢狀欄位）：\n\n1. 遞迴展開巢狀欄位\n   {"error": {"code": 500, "msg": "timeout"}}\n   → error_code=500, error_msg=timeout\n\n2. 以時間窗口聚合\n   過去 1 小時：錯誤次數 = 15, 平均回應 = 2.3s\n   過去 24 小時：錯誤次數 = 42, CPU 峰值 = 95%\n\n→ 把原始日誌轉成模型能用的特徵'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '情境：「半結構化 JSON 日誌」+「巢狀欄位」+「故障預測」→ 遞迴展開巢狀欄位 + 時間窗口聚合特徵萃取。\n\n不是「扁平化轉 CSV」（丟失巢狀結構資訊）。\n不是「RNN 直接吃 JSON 字串」（不實際）。\n不是「只保留時間戳」（丟掉太多資訊）。'
          }
        ]
      }
    },
    {
      number: 12,
      title: 'Batch Size 與 Data Sharding',
      engTitle: 'Batch Size & Data Sharding',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'memory',
            content: 'Batch Size 是每次訓練時送進 GPU 的樣本數。越大佔越多記憶體。Data Sharding 是把資料分片分配到不同 GPU，分散負載。'
          },
          {
            label: '怎麼降低記憶體壓力',
            icon: 'build',
            code: '問題：GPU 記憶體不夠\n\n解法：\n  1. 縮小 Batch Size → 每次少送一點\n  2. Data Sharding → 資料分片到多張 GPU\n  3. 結合兩者 → 每張 GPU 只處理小批次\n\n→ 單張 GPU 記憶體壓力大幅降低\n→ 整體訓練效率不打折'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '情境：「GPU 記憶體不足」+「模型架構固定不能換」+「不能換硬體」→ 縮小 Batch Size + Data Sharding。\n\n不是「減少訓練資料」（影響模型效能）。\n不是「增加學習率」（跟記憶體無關，還可能爆炸）。\n不是「用測試資料訓練」（嚴重違規）。'
          }
        ]
      }
    },
    {
      number: 13,
      title: 'ARIMA 模型',
      engTitle: 'AutoRegressive Integrated Moving Average',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'timeline',
            content: '經典的時間序列預測模型。結合自迴歸（AR）、差分（I）和移動平均（MA）三個部分，用過去的數值預測未來。'
          },
          {
            label: '三個參數',
            icon: 'build',
            code: 'ARIMA(p, d, q)：\n\np = AR 階數（用過去幾期的值）\nd = 差分次數（讓資料變穩定）\nq = MA 階數（用過去幾期的誤差）\n\n例：ARIMA(2,1,1)\n  看過去 2 期的值 + 1 次差分 + 過去 1 期的誤差'
          },
          {
            label: '怎麼診斷',
            icon: 'bug_report',
            code: '好的模型：殘差是白噪音（隨機、無規律）\n  ACF 在所有 Lag 上都不顯著\n\n壞的模型（配適不足）：\n  殘差有週期性波動\n  ACF 在多個 Lag 上顯著不為零\n  → 還有模式沒被捕捉到\n  → 需要調整 p 或 q 參數'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '情境：「殘差週期性波動」+「ACF 多個 Lag 顯著不為零」→ 配適不足，需調整 p 或 q。\n\n不是「白噪音」（白噪音的 ACF 都不顯著）。\n不是「可忽略的隨機誤差」（有系統性規律就不能忽略）。\n不是「不影響預測」（殘差有規律就代表模型有問題）。'
          }
        ]
      }
    },
    {
      number: 14,
      title: 'K-Fold 超參數洩漏',
      engTitle: 'K-Fold Hyperparameter Leakage',
      back: {
        sections: [
          {
            label: '問題情境',
            icon: 'leak_add',
            content: '在 K-Fold 交叉驗證上直接調超參數並評估效能，會造成「過度樂觀偏差」-- 因為測試摺的資料間接參與了參數選擇，結果看起來比實際更好。'
          },
          {
            label: '為什麼會洩漏',
            icon: 'warning',
            code: '錯誤做法：\n  用同一組 K-Fold 同時調參 + 評估\n  → 你選了「在這幾摺上表現最好」的參數\n  → 這些摺的資料已經影響了你的選擇\n  → 評估結果偏高\n\n正確做法（Nested CV）：\n  外層 CV：評估泛化效能\n  內層 CV：調超參數\n  → 評估用的資料完全沒參與調參'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '在 K-Fold 上直接調參並評估 → 「過度樂觀偏差」+「資料洩漏」。\n\n不是「訓練不穩」（跟穩定性無關）。\n不是「方差增大」（主要問題是偏差不是方差）。\n不是「假設衝突」（K-Fold 的假設沒問題）。'
          }
        ]
      }
    },
    {
      number: 15,
      title: 'VAE 監控分佈偏移',
      engTitle: 'VAE for Distribution Shift Detection',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'monitoring',
            content: '利用 VAE 的潛在空間來偵測輸入資料是否偏離訓練時的分佈。如果新資料在潛在空間的位置跟訓練資料差很多，就是偏移了。'
          },
          {
            label: '怎麼做',
            icon: 'build',
            code: '1. 訓練時：用 VAE 學習訓練資料的潛在空間分佈\n2. 上線後：新資料經 VAE 編碼器映射到潛在空間\n3. 比較新資料的潛在表示跟訓練分佈的差異\n   → 差異大 = 資料偏移 = 需要注意\n\n優點：不需要標籤，純看分佈變化\n→ 比等模型預測錯誤才發現更早'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '情境：「鑑別式模型上線後錯誤率上升」+「輸入分佈跟訓練集不同」→ 用 VAE 監控潛在空間分佈偵測偏移。\n\n不是「用 GAN 生成新樣本」（生成不等於監控）。\n不是「改用邏輯迴歸」（換模型不解決分佈問題）。\n不是「增加模型容量」（更大模型不能解決分佈偏移）。'
          }
        ]
      }
    },
    {
      number: 16,
      title: '生成式 vs 鑑別式路徑',
      engTitle: 'Generative vs Discriminative Path',
      back: {
        sections: [
          {
            label: '核心差異',
            icon: 'compare',
            code: '鑑別式路徑（如 BERT Classifier）：\n  直接學 P(y|x)（給定輸入，預測標籤）\n  → 資料充足時效果好\n  → 資料少時容易過擬合\n\n生成式路徑（如 VAE + 分類器）：\n  先學 P(x)（資料的整體分佈）\n  再用學到的表示做分類\n  → 資料少時仍能學到有用的結構\n  → 但分類精準度可能不如鑑別式'
          },
          {
            label: '怎麼公平比較',
            icon: 'science',
            content: '在「低資源情境」下逐步減少標註比例（100%→50%→10%），比較 F1-score。\n\n這樣能看出：鑑別式在資料充足時很強，但資料減少後衰退得更快；生成式衰退較慢（資料利用效率高）。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「突顯兩者本質差異」的實驗設計 → 低資源情境下逐步減少標註比例，比較 F1-score。\n\n不是「完整資料比 Accuracy」（看不出資料效率差異）。\n不是「GAN 生成補資料」（改變了實驗條件）。\n不是「只調參數量」（模型大小不是核心差異）。'
          }
        ]
      }
    },
    {
      number: 17,
      title: 'PCA + SVM 降維效益',
      engTitle: 'PCA Dimensionality Reduction with SVM',
      back: {
        sections: [
          {
            label: '降維的好處',
            icon: 'compress',
            content: '高維資料（1024 維）降到低維（100 維）後：訓練時間大幅減少，同時因為去掉了雜訊維度，過擬合風險也降低。'
          },
          {
            label: '常見誤解',
            icon: 'warning',
            code: '錯誤：「PCA 保留的主成分必然提升準確率」\n  → 不一定，可能丟掉有用的細節\n\n錯誤：「原始高維資料一定更好」\n  → 高維有維度災難，不一定\n\n錯誤：「PCA 讓 SVM 能處理非線性」\n  → PCA 是線性降維，不改變資料的非線性結構\n  → 非線性要靠 SVM 的核函數'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '正確描述：「降維後可降低訓練時間並減少過擬合風險」。\n\nPCA 主成分不保證提升準確率。\nPCA 不能讓 SVM 處理非線性。\n高維不一定比低維好。'
          }
        ]
      }
    },
    {
      number: 18,
      title: '概念漂移',
      engTitle: 'Concept Drift',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'swap_vert',
            content: '輸入資料 (X) 跟目標 (Y) 之間的關係改變了。即使輸入分佈沒變，「同樣的輸入對應的正確答案」已經不同了。'
          },
          {
            label: '跟資料漂移的差別',
            icon: 'compare',
            code: '資料漂移（Data Drift）：\n  P(X) 改變了\n  例：顧客年齡分佈從年輕人為主變成老年人為主\n  → 輸入的「長相」變了\n\n概念漂移（Concept Drift）：\n  P(Y|X) 改變了\n  例：同樣的消費行為，以前不算流失，現在算流失\n  → 輸入跟輸出的「關係」變了\n\n兩者都會讓模型變差，但原因不同'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '情境：「模型準確率下降」+「輸入分佈偏移」→ 建立資料漂移 + 概念漂移監測機制。\n\n不是「量化降低延遲」（那是效能優化）。\n不是「增加超參數調整」（調參不解決漂移）。\n不是「固定隨機種子」（那是確保可重現性）。'
          }
        ]
      }
    },
    {
      number: 19,
      title: '多任務學習損失權重',
      engTitle: 'Multi-task Learning Loss Balancing',
      back: {
        sections: [
          {
            label: '問題情境',
            icon: 'balance',
            content: '一個模型同時做多個任務（如文檔分類 + NER），但一個任務變好時另一個反而變差。原因通常是損失函數的權重沒平衡好。'
          },
          {
            label: '為什麼會打架',
            icon: 'warning',
            code: '總損失 = 分類損失 + NER 損失\n\n如果 NER 損失的數值天生比較大：\n  梯度更新會偏向優化 NER\n  分類任務被忽略 → 準確率下降\n\n解法：加權平衡\n  總損失 = α * 分類損失 + β * NER 損失\n  調整 α 和 β 讓兩邊公平競爭\n\n進階：動態權重（如 Uncertainty Weighting）\n  根據各任務的不確定性自動調整權重'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '情境：「NER 提升但分類下降」+「架構正確、資料品質好」→ 損失函數未進行權重平衡，導致任務間競爭。\n\n不是「架構不支援」（Transformer 可以多任務）。\n不是「不需要語意表徵」（分類也需要）。\n不是「BERT 不支援多頭輸出」（BERT 可以接多個輸出頭）。'
          }
        ]
      }
    },
    {
      number: 20,
      title: 'KD-Tree / Ball Tree',
      engTitle: 'Distance Index Structure',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'account_tree',
            content: '加速「最近鄰搜尋」的資料結構。把資料組織成樹狀結構，查詢時不需要跟每一筆資料比較距離，大幅加速。'
          },
          {
            label: '兩種結構',
            icon: 'build',
            code: 'KD-Tree（K-Dimensional Tree）：\n  依據各維度交替分割空間\n  → 低維（< 20 維）效果好\n  → 高維時退化成暴力搜尋\n\nBall Tree：\n  用超球體（Ball）劃分空間\n  → 高維資料比 KD-Tree 好\n  → 建樹成本較高'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '情境：「DBSCAN 在大量高維資料上太慢」+「不改演算法核心邏輯」→ 採用 KD-Tree 或 Ball Tree 加速距離計算。\n\n不是「改用階層式聚類」（改了演算法）。\n不是「把 ε 調極小」（會變成每個點自己一群）。\n不是「增加特徵維度」（只會更慢）。'
          }
        ]
      }
    }
]
