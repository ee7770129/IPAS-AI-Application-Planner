/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：cards.js
 * 功能：學習卡片資料定義（新增卡片只需修改此檔案）
 * 建立日期：2026-05-14
 * 版本：2.0.0
 *
 * 卡片格式：
 * {
 *   number: 編號,
 *   title: '中文名稱',
 *   engTitle: 'English Name（選填）',
 *   back: {
 *     sections: [
 *       { label: '區段標題', icon: 'material_icon_name', content: '文字', code: '程式碼區塊' }
 *     ]
 *   }
 * }
 */

export const DATA = {
  beginner: {
    label: '初級',
    subjects: [
      {
        id: 'subject1',
        label: '第一科 人工智慧基礎概論',
        topics: [
          /* ========== 資料處理與分析 ========== */
          {
            id: 'data-processing',
            label: '資料處理與分析',
            cards: [
              {
                number: 1,
                title: '資料整合',
                engTitle: 'Data Integration',
                back: {
                  sections: [
                    {
                      label: '是什麼',
                      icon: 'merge_type',
                      content: '把不同來源的資料合在一起，讓它們可以統一使用、統一分析。'
                    },
                    {
                      label: '三大目的',
                      icon: 'checklist',
                      code: '1. 統一格式與欄位定義 → 確保分析一致性\n2. 識別並處理重複資料 → 避免影響模型訓練\n3. 整併多來源資料   → 提升完整性與應用價值'
                    },
                    {
                      label: '容易搞混',
                      icon: 'warning',
                      content: '「延長資料留存期限」不是資料整合的目的，那是資料保存政策（Data Retention Policy）的範圍。'
                    }
                  ]
                }
              },
              {
                number: 2,
                title: '離群值處理',
                engTitle: 'Outlier Handling',
                back: {
                  sections: [
                    {
                      label: '是什麼',
                      icon: 'scatter_plot',
                      content: '資料中遠離大多數數據點的異常值。不一定是錯的，可能是有意義的極端情況。'
                    },
                    {
                      label: '常見處理方式',
                      icon: 'build',
                      code: '1. Z-score 判斷  → 看離平均值幾個標準差\n2. IQR 四分位距  → 超出 Q1-1.5*IQR 或 Q3+1.5*IQR\n3. 截尾 Trimming → 直接移除極端值\n4. 結合領域知識  → 判斷是否合理再決定'
                    },
                    {
                      label: '重點',
                      icon: 'lightbulb',
                      content: '處理離群值之前，一定要先判斷它是「有意義的極端值」還是「資料錯誤」，不能無腦刪除。'
                    }
                  ]
                }
              },
              {
                number: 3,
                title: 'Z-score',
                engTitle: 'Z-score / 標準分數',
                back: {
                  sections: [
                    {
                      label: '是什麼',
                      icon: 'functions',
                      content: '衡量一個數據點離平均值有多遠，單位是「幾個標準差」。'
                    },
                    {
                      label: '怎麼算',
                      icon: 'calculate',
                      code: 'Z = (X - 平均值) / 標準差\n\n例：平均值=100, 標準差=10, X=130\nZ = (130-100)/10 = 3\n→ 離平均值 3 個標準差，通常視為離群值'
                    },
                    {
                      label: '判斷標準',
                      icon: 'rule',
                      content: '一般 |Z| > 2 或 |Z| > 3 就會被標記為離群值。'
                    }
                  ]
                }
              },
              {
                number: 4,
                title: 'IQR 四分位距',
                engTitle: 'Interquartile Range',
                back: {
                  sections: [
                    {
                      label: '是什麼',
                      icon: 'functions',
                      content: '第三四分位數（Q3）減去第一四分位數（Q1）的差距，代表中間 50% 資料的分散程度。'
                    },
                    {
                      label: '怎麼用來抓離群值',
                      icon: 'calculate',
                      code: 'IQR = Q3 - Q1\n\n下界 = Q1 - 1.5 * IQR\n上界 = Q3 + 1.5 * IQR\n\n超出上下界的就是離群值'
                    },
                    {
                      label: '優點',
                      icon: 'lightbulb',
                      content: '不受極端值影響（因為只看中間 50%），比 Z-score 更穩健。'
                    }
                  ]
                }
              },
              {
                number: 5,
                title: '截尾',
                engTitle: 'Trimming',
                back: {
                  sections: [
                    {
                      label: '是什麼',
                      icon: 'content_cut',
                      content: '直接把資料中最極端的部分砍掉（例如最高和最低的 5%），只保留中間的資料來分析。'
                    },
                    {
                      label: '用途',
                      icon: 'check_circle',
                      content: '提升模型穩定性，避免極端值拉偏結果。'
                    },
                    {
                      label: '風險',
                      icon: 'warning',
                      content: '砍掉的資料可能包含有價值的資訊（例如真實的異常交易），所以要謹慎使用。'
                    }
                  ]
                }
              },
              {
                number: 6,
                title: 'One-hot 編碼',
                engTitle: 'One-hot Encoding',
                back: {
                  sections: [
                    {
                      label: '是什麼',
                      icon: 'grid_on',
                      content: '把類別型資料轉換成 0 和 1 的向量，每個類別一個欄位。'
                    },
                    {
                      label: '範例',
                      icon: 'table_chart',
                      code: '原始：顏色 = [紅, 藍, 綠]\n\n轉換後：\n紅 → [1, 0, 0]\n藍 → [0, 1, 0]\n綠 → [0, 0, 1]'
                    },
                    {
                      label: '重點',
                      icon: 'lightbulb',
                      content: 'One-hot 編碼是給「類別資料」用的，不是拿來處理離群值的。離群值是數值問題，One-hot 是類別轉換工具，兩者用途完全不同。'
                    }
                  ]
                }
              },
              {
                number: 7,
                title: '正規化',
                engTitle: 'Normalization',
                back: {
                  sections: [
                    {
                      label: '是什麼',
                      icon: 'straighten',
                      content: '把數值縮放到固定範圍（通常是 0 到 1），讓不同單位的特徵可以公平比較。'
                    },
                    {
                      label: '怎麼算',
                      icon: 'calculate',
                      code: 'X_new = (X - X_min) / (X_max - X_min)\n\n例：身高 150~190 cm，體重 40~100 kg\n正規化後都變成 0~1，不會因為單位不同而偏袒某個特徵'
                    },
                    {
                      label: '適用時機',
                      icon: 'lightbulb',
                      content: '適合資料沒有明顯離群值、且需要固定範圍的場景（如 KNN、神經網路）。'
                    }
                  ]
                }
              },
              {
                number: 8,
                title: '標準化',
                engTitle: 'Standardization',
                back: {
                  sections: [
                    {
                      label: '是什麼',
                      icon: 'straighten',
                      content: '把數值轉換成「平均值為 0、標準差為 1」的分佈，讓資料以 0 為中心分散。'
                    },
                    {
                      label: '怎麼算',
                      icon: 'calculate',
                      code: 'X_new = (X - 平均值) / 標準差\n\n轉換後：平均值 = 0，標準差 = 1\n（其實就是算 Z-score）'
                    },
                    {
                      label: '跟正規化的差別',
                      icon: 'compare',
                      code: '正規化 → 壓到 [0, 1]，受離群值影響大\n標準化 → 以 0 為中心，對離群值較穩健\n\n標準化更常用，尤其是有離群值的時候'
                    }
                  ]
                }
              },
              {
                number: 9,
                title: '資料洩漏',
                engTitle: 'Data Leakage',
                back: {
                  sections: [
                    {
                      label: '是什麼',
                      icon: 'leak_add',
                      content: '訓練模型時，不小心讓模型「偷看」到測試資料的資訊，導致評估結果虛高，上線後表現卻很差。'
                    },
                    {
                      label: '常見犯錯方式',
                      icon: 'warning',
                      code: '錯誤：先對整份資料做標準化，再分割\n  → 標準化用了測試資料的統計量（平均值、標準差）\n  → 模型間接「知道」了測試資料的分佈\n\n正確：先分割，只用訓練資料算統計量，再套用到測試資料'
                    },
                    {
                      label: '正確流程',
                      icon: 'check_circle',
                      code: '1. 先分割 → 訓練集 / 測試集\n2. 只用訓練集算平均值、標準差\n3. 用這組統計量去轉換訓練集和測試集'
                    }
                  ]
                }
              },
              {
                number: 10,
                title: '訓練/測試資料分割',
                engTitle: 'Train-Test Split',
                back: {
                  sections: [
                    {
                      label: '是什麼',
                      icon: 'call_split',
                      content: '把資料切成兩份：一份拿來訓練模型，一份留著測試模型好不好。'
                    },
                    {
                      label: '為什麼要分',
                      icon: 'help_outline',
                      content: '如果用同一份資料又訓練又測試，模型會「背答案」，看起來很準但遇到新資料就不行了（過擬合）。'
                    },
                    {
                      label: '常見比例',
                      icon: 'pie_chart',
                      code: '訓練集 : 測試集 = 80% : 20%\n或 70% : 30%\n\n有時還會多切一份驗證集（Validation Set）\n訓練 60% / 驗證 20% / 測試 20%'
                    }
                  ]
                }
              },
              {
                number: 11,
                title: '類別型特徵',
                engTitle: 'Categorical Features',
                back: {
                  sections: [
                    {
                      label: '是什麼',
                      icon: 'label',
                      content: '資料中表示「類別」而非數值的欄位，例如性別、地區、方案類型。模型不能直接吃文字，要先轉成數字。'
                    },
                    {
                      label: '常見轉換方式',
                      icon: 'transform',
                      code: 'One-hot 編碼 → 每個類別一個欄位（0/1）\nLabel 編碼   → 直接給編號（0, 1, 2...）\n特徵交叉     → 組合兩個類別產生新特徵'
                    },
                    {
                      label: '注意',
                      icon: 'warning',
                      content: 'Label 編碼會讓模型以為類別有大小順序（1 < 2 < 3），除非類別確實有順序（如學歷），否則建議用 One-hot。'
                    }
                  ]
                }
              },
              {
                number: 12,
                title: '特徵交叉',
                engTitle: 'Feature Cross',
                back: {
                  sections: [
                    {
                      label: '是什麼',
                      icon: 'join_inner',
                      content: '把兩個以上的特徵「組合」成一個新特徵，讓模型能學到特徵之間的交互關係。'
                    },
                    {
                      label: '範例',
                      icon: 'table_chart',
                      code: '原始特徵：地區 = 台北, 方案 = 吃到飽\n\n特徵交叉後：\n地區_方案 = 台北_吃到飽\n\n這樣模型就能學到「台北+吃到飽」這個組合的特殊規律'
                    },
                    {
                      label: '用途',
                      icon: 'lightbulb',
                      content: '常用在推薦系統、廣告點擊預測等場景。寬深模型（Wide and Deep）的「寬」的部分就是靠特徵交叉來記住歷史組合。'
                    }
                  ]
                }
              }
            ]
          },
          /* ========== AI 技術與架構 ========== */
          {
            id: 'ai-tech',
            label: 'AI 技術與架構',
            cards: [
              {
                number: 1,
                title: '專家系統',
                engTitle: 'Expert System',
                back: {
                  sections: [
                    {
                      label: '是什麼',
                      icon: 'psychology',
                      content: '模擬人類專家的決策過程，用「如果...那就...」的規則來做判斷。'
                    },
                    {
                      label: '怎麼運作',
                      icon: 'build',
                      code: '知識庫：存放專家的規則和知識\n推理引擎：根據規則做出判斷\n\n例：醫療診斷\n如果 體溫>38 且 咳嗽 且 喉嚨痛\n那就 → 可能是流感'
                    },
                    {
                      label: '特點',
                      icon: 'lightbulb',
                      content: '基於人工設定的規則，不像機器學習那樣從資料自動學。規則是人寫的，所以需要領域專家參與。'
                    }
                  ]
                }
              },
              {
                number: 2,
                title: '決策支援系統',
                engTitle: 'Decision Support System, DSS',
                back: {
                  sections: [
                    {
                      label: '是什麼',
                      icon: 'support',
                      content: '幫助人類做決策的資訊系統，提供資料分析、模型模擬等功能，但最終決策還是由人來做。'
                    },
                    {
                      label: '跟專家系統的差別',
                      icon: 'compare',
                      code: '專家系統 → 自動給答案（模擬專家）\nDSS      → 提供資訊輔助（人做決定）'
                    },
                    {
                      label: '應用',
                      icon: 'business',
                      content: '企業經營分析、投資組合評估、醫療方案比較等需要「人+系統」合作的場景。'
                    }
                  ]
                }
              },
              {
                number: 3,
                title: '啟發式決策引擎',
                engTitle: 'Heuristic Decision Engine',
                back: {
                  sections: [
                    {
                      label: '是什麼',
                      icon: 'explore',
                      content: '用「經驗法則」快速找到「夠好的答案」，不追求最佳解，而是在合理時間內找到可接受的解。'
                    },
                    {
                      label: '核心概念',
                      icon: 'lightbulb',
                      code: '精確演算法 → 保證找到最佳解，但可能很慢\n啟發式方法 → 不保證最佳，但速度快很多\n\n例：旅行推銷員問題\n窮舉所有路線太慢 → 用「每次走最近的城市」當捷徑'
                    },
                    {
                      label: '應用',
                      icon: 'route',
                      content: '路徑規劃、排程優化、遊戲 AI 等需要快速決策的場景。'
                    }
                  ]
                }
              },
              {
                number: 4,
                title: '感知器網路',
                engTitle: 'Sensor Network',
                back: {
                  sections: [
                    {
                      label: '是什麼',
                      icon: 'sensors',
                      content: '由大量分散部署的感測器（Sensor）組成的網路，持續蒐集環境數據並回傳。'
                    },
                    {
                      label: '蒐集什麼',
                      icon: 'thermostat',
                      code: '溫度、濕度、PM2.5、氣體濃度\n光線強度、聲音、震動\n設備狀態（如垃圾桶滿溢度）'
                    },
                    {
                      label: '應用場景',
                      icon: 'location_city',
                      content: '智慧城市（空氣品質監測）、智慧農業（土壤濕度）、工業 IoT（設備狀態監控）。是 IoT 物聯網的核心技術之一。'
                    }
                  ]
                }
              }
            ]
          },
          /* ========== 機器學習概念 ========== */
          {
            id: 'ml-concepts',
            label: '機器學習概念',
            cards: [
              {
                number: 1,
                title: '監督式學習',
                engTitle: 'Supervised Learning',
                back: {
                  sections: [
                    {
                      label: '是什麼',
                      icon: 'school',
                      content: '用「有標準答案」的資料來訓練模型。每筆資料都有輸入（特徵）和正確輸出（標籤），模型學習兩者的對應關係。'
                    },
                    {
                      label: '兩大任務',
                      icon: 'category',
                      code: '分類（Classification）\n  → 預測類別，例：這封信是不是垃圾郵件？\n\n迴歸（Regression）\n  → 預測數值，例：這間房子值多少錢？'
                    },
                    {
                      label: '關鍵字',
                      icon: 'key',
                      content: '有標籤（Labeled Data）、有標準答案、學輸入與輸出的對應。'
                    }
                  ]
                }
              },
              {
                number: 2,
                title: '非監督式學習',
                engTitle: 'Unsupervised Learning',
                back: {
                  sections: [
                    {
                      label: '是什麼',
                      icon: 'explore',
                      content: '用「沒有標準答案」的資料來訓練。模型自己去發現資料裡的隱藏結構或分群。'
                    },
                    {
                      label: '常見任務',
                      icon: 'category',
                      code: '分群（Clustering）\n  → 自動把相似的資料歸在一起\n  例：客戶分群（高消費 vs 低消費）\n\n降維（Dimensionality Reduction）\n  → 把高維資料壓縮成低維，保留重要資訊\n  例：PCA 主成分分析'
                    },
                    {
                      label: '跟監督式的差別',
                      icon: 'compare',
                      code: '監督式   → 有標籤，學「輸入→輸出」\n非監督式 → 無標籤，學「資料的結構」'
                    }
                  ]
                }
              },
              {
                number: 3,
                title: '資料分群',
                engTitle: 'Data Clustering',
                back: {
                  sections: [
                    {
                      label: '是什麼',
                      icon: 'bubble_chart',
                      content: '把相似的資料自動歸成一組，不需要事先給標籤。屬於非監督式學習的典型任務。'
                    },
                    {
                      label: '常見方法',
                      icon: 'build',
                      code: 'K-Means    → 指定分 K 群，依距離歸類\n層次聚類   → 由下而上逐步合併\nDBSCAN     → 依密度分群，能抓出離群點'
                    },
                    {
                      label: '注意',
                      icon: 'warning',
                      content: '分群是把「相似資料歸在一起」，不是把「類別型特徵轉成數字」。要轉類別型特徵應該用 One-hot 編碼。'
                    }
                  ]
                }
              },
              {
                number: 4,
                title: '線性迴歸',
                engTitle: 'Linear Regression',
                back: {
                  sections: [
                    {
                      label: '是什麼',
                      icon: 'show_chart',
                      content: '找一條直線，盡可能貼合所有資料點，用來預測連續數值。'
                    },
                    {
                      label: '怎麼用',
                      icon: 'build',
                      code: 'Y = aX + b\n\nX = 房屋坪數\nY = 預測房價\n\n模型學到 a（斜率）和 b（截距），\n之後給新的坪數就能預測價格'
                    },
                    {
                      label: '優缺點',
                      icon: 'balance',
                      tags: [
                        { type: 'pro', text: '優點：簡單易懂、計算快' },
                        { type: 'con', text: '缺點：只能抓線性關係，複雜模式學不到' }
                      ]
                    }
                  ]
                }
              },
              {
                number: 5,
                title: '決策樹',
                engTitle: 'Decision Tree',
                back: {
                  sections: [
                    {
                      label: '是什麼',
                      icon: 'account_tree',
                      content: '像流程圖一樣，一層一層問問題，根據答案往左或往右走，最後到達葉節點得到結果。'
                    },
                    {
                      label: '範例',
                      icon: 'table_chart',
                      code: '要不要出門？\n│\n├─ 下雨？\n│   ├─ 是 → 帶傘出門\n│   └─ 否 → 直接出門\n└─ 溫度 > 35度？\n    ├─ 是 → 待在家\n    └─ 否 → 出門'
                    },
                    {
                      label: '優缺點',
                      icon: 'balance',
                      tags: [
                        { type: 'pro', text: '優點：直覺好懂、可解釋性高' },
                        { type: 'con', text: '缺點：容易過擬合，對新資料泛化能力較差' }
                      ]
                    }
                  ]
                }
              },
              {
                number: 6,
                title: '支援向量機',
                engTitle: 'Support Vector Machine, SVM',
                back: {
                  sections: [
                    {
                      label: '是什麼',
                      icon: 'linear_scale',
                      content: '找一個「最佳分界線（超平面）」，把兩類資料分開，而且讓分界線離兩邊最近的資料點距離最大。'
                    },
                    {
                      label: '核心概念',
                      icon: 'lightbulb',
                      code: '支援向量 → 離分界線最近的那幾個資料點\n間隔（Margin）→ 分界線到支援向量的距離\n\nSVM 的目標：讓間隔最大化'
                    },
                    {
                      label: '特點',
                      icon: 'star',
                      content: '在高維空間和小樣本情況下表現好，但資料量很大時訓練速度慢。可以用核函數（Kernel）處理非線性問題。'
                    }
                  ]
                }
              },
              {
                number: 7,
                title: '寬深模型',
                engTitle: 'Wide and Deep Model',
                back: {
                  sections: [
                    {
                      label: '是什麼',
                      icon: 'view_stream',
                      content: '結合「寬模型」和「深模型」的混合架構，同時具備記憶力和泛化力。Google 提出，常用於推薦系統。'
                    },
                    {
                      label: '兩部分各做什麼',
                      icon: 'build',
                      code: '寬（Wide）部分：\n  線性模型 + 特徵交叉\n  → 記住歷史已出現的特徵組合\n  → 例：「台北+吃到飽」流失率高\n\n深（Deep）部分：\n  深度神經網路\n  → 對未見過的特徵組合做泛化預測\n  → 例：新的「高雄+日租型」也能推測'
                    },
                    {
                      label: '優點',
                      icon: 'lightbulb',
                      content: '同時學到「已知規律」（記憶）和「未知組合」（泛化），比單一模型更適合稀疏類別 + 數值型混合特徵的場景。'
                    }
                  ]
                }
              }
            ]
          },
          /* ========== 神經網路與深度學習 ========== */
          {
            id: 'nn-dl',
            label: '神經網路與深度學習',
            cards: [
              {
                number: 1,
                title: 'Softmax 函數',
                engTitle: 'Softmax Function',
                back: {
                  sections: [
                    {
                      label: '是什麼',
                      icon: 'pie_chart',
                      content: '把一組數值轉換成「機率分佈」，所有輸出加總 = 1。用在多類別分類的輸出層。'
                    },
                    {
                      label: '範例',
                      icon: 'table_chart',
                      code: '模型原始輸出：[2.0, 1.0, 0.1]\n\nSoftmax 轉換後：\n動作片：0.66 (66%)\n喜劇片：0.24 (24%)\n恐怖片：0.10 (10%)\n\n加總 = 1.0 → 可以當成機率來用'
                    },
                    {
                      label: '什麼時候用',
                      icon: 'lightbulb',
                      content: '多類別分類（3 類以上）的輸出層。例如：預測影片類型、辨識手寫數字（0-9）。'
                    }
                  ]
                }
              },
              {
                number: 2,
                title: 'Sigmoid 函數',
                engTitle: 'Sigmoid Function',
                back: {
                  sections: [
                    {
                      label: '是什麼',
                      icon: 'ssid_chart',
                      content: '把任意數值壓縮到 0 和 1 之間，輸出可以解釋為「機率」。形狀像 S 曲線。'
                    },
                    {
                      label: '範例',
                      icon: 'calculate',
                      code: '輸入 → 輸出\n-10  → 0.00005  (接近 0)\n  0  → 0.5      (正中間)\n +10 → 0.99995  (接近 1)'
                    },
                    {
                      label: '什麼時候用',
                      icon: 'lightbulb',
                      content: '二元分類（只有兩類）的輸出層。例如：這封信是不是垃圾郵件？（是/否）\n\n跟 Softmax 差別：Sigmoid 用在「二選一」，Softmax 用在「多選一」。'
                    }
                  ]
                }
              },
              {
                number: 3,
                title: 'ReLU 函數',
                engTitle: 'Rectified Linear Unit',
                back: {
                  sections: [
                    {
                      label: '是什麼',
                      icon: 'trending_up',
                      content: '最常用的「隱藏層」激活函數。規則很簡單：正數保留原值，負數變成 0。'
                    },
                    {
                      label: '怎麼算',
                      icon: 'calculate',
                      code: 'ReLU(x) = max(0, x)\n\n輸入 → 輸出\n -5  →  0\n  0  →  0\n  3  →  3\n 10  → 10'
                    },
                    {
                      label: '為什麼常用',
                      icon: 'lightbulb',
                      content: '計算超快（只是比大小），而且能緩解深層網路的梯度消失問題。是隱藏層的預設選擇。\n\n注意：ReLU 用在隱藏層，不是輸出層。輸出層用 Softmax 或 Sigmoid。'
                    }
                  ]
                }
              },
              {
                number: 4,
                title: '線性函數',
                engTitle: 'Linear Function',
                back: {
                  sections: [
                    {
                      label: '是什麼',
                      icon: 'show_chart',
                      content: '最簡單的函數：輸出 = 輸入（或乘一個常數）。不做任何非線性轉換。'
                    },
                    {
                      label: '公式',
                      icon: 'calculate',
                      code: 'f(x) = x  或  f(x) = ax + b\n\n輸入多少就輸出多少，沒有彎曲'
                    },
                    {
                      label: '用在哪',
                      icon: 'lightbulb',
                      content: '迴歸問題的輸出層（預測連續數值，如房價）。\n\n不適合當隱藏層的激活函數，因為多層線性函數疊起來還是線性，等於白疊。'
                    }
                  ]
                }
              },
              {
                number: 5,
                title: '激活函數總結',
                engTitle: 'Activation Functions',
                back: {
                  sections: [
                    {
                      label: '怎麼選',
                      icon: 'account_tree',
                      tree: '要用哪個激活函數？\n│\n├─ 隱藏層\n│   └─ ReLU（預設首選）\n│\n└─ 輸出層（看任務類型）\n    ├─ 二元分類 → Sigmoid（輸出 0~1 機率）\n    ├─ 多類別分類 → Softmax（輸出機率分佈）\n    └─ 迴歸問題 → 線性函數（輸出連續數值）'
                    }
                  ]
                }
              }
            ]
          },
          /* ========== 類別不平衡處理 ========== */
          {
            id: 'imbalance',
            label: '類別不平衡處理',
            cards: [
              {
                number: 1,
                title: 'SMOTE',
                engTitle: 'Synthetic Minority Over-sampling Technique',
                back: {
                  sections: [
                    {
                      label: '是什麼',
                      icon: 'add_circle',
                      content: '少數類別樣本太少時，在少數類別的特徵空間中「合成」全新的樣本出來。'
                    },
                    {
                      label: '怎麼做',
                      icon: 'build',
                      content: '在少數類別的樣本之間連線，在連線上插值產生新樣本：',
                      code: '詐欺A (2,4)  詐欺B (6,8)  詐欺C (4,2)\n\n新樣本1 (4,6)  ← A和B之間\n新樣本2 (3,3)  ← A和C之間\n\n3筆 → 5筆，少數類別變多了'
                    },
                    {
                      label: '重點',
                      icon: 'lightbulb',
                      content: '不是複製貼上（那叫 Random Over-sampling），而是合成全新的樣本。'
                    },
                    {
                      label: '優缺點',
                      icon: 'balance',
                      tags: [
                        { type: 'pro', text: '優點：不會丟失任何資料' },
                        { type: 'con', text: '缺點：少數類別有雜訊時，合成樣本也可能是雜訊' }
                      ]
                    }
                  ]
                }
              },
              {
                number: 2,
                title: '隨機欠取樣',
                engTitle: 'Random Under-sampling',
                back: {
                  sections: [
                    {
                      label: '是什麼',
                      icon: 'remove_circle',
                      content: '多數類別太多時，隨機刪掉一部分，讓兩邊比例接近。'
                    },
                    {
                      label: '範例',
                      icon: 'table_chart',
                      code: '原始：正常 10,000 筆 / 詐欺 50 筆\n處理後：正常 100 筆 / 詐欺 50 筆\n\n比例從 200:1 → 2:1'
                    },
                    {
                      label: '優缺點',
                      icon: 'balance',
                      tags: [
                        { type: 'pro', text: '優點：簡單快速，訓練速度快' },
                        { type: 'con', text: '缺點：丟掉的 9,900 筆裡可能有重要模式' }
                      ]
                    }
                  ]
                }
              },
              {
                number: 3,
                title: '成本敏感學習',
                engTitle: 'Cost-sensitive Learning',
                back: {
                  sections: [
                    {
                      label: '是什麼',
                      icon: 'tune',
                      content: '不改資料，改模型的懲罰力度。猜錯少數類別時扣更多分，逼模型更認真學。'
                    },
                    {
                      label: '怎麼做',
                      icon: 'build',
                      code: '一般：猜錯正常 扣1分 / 猜錯詐欺 扣1分\n調整：猜錯正常 扣1分 / 猜錯詐欺 扣50分\n\n模型：「猜錯詐欺太痛了，要更認真辨識」'
                    },
                    {
                      label: '優缺點',
                      icon: 'balance',
                      tags: [
                        { type: 'pro', text: '優點：資料完整保留，不需改動資料' },
                        { type: 'con', text: '缺點：權重設太高會過度預測為少數類別' }
                      ]
                    }
                  ]
                }
              },
              {
                number: 4,
                title: '交叉驗證',
                engTitle: 'Cross-validation',
                back: {
                  sections: [
                    {
                      label: '是什麼',
                      icon: 'grid_view',
                      content: '評估模型好不好的方法。不直接解決類別不平衡，但常搭配使用。'
                    },
                    {
                      label: '怎麼做（5-fold 為例）',
                      icon: 'build',
                      code: '把資料分 5 份，每份輪流當測試集：\n\n第1輪：[測試] [訓練] [訓練] [訓練] [訓練]\n第2輪：[訓練] [測試] [訓練] [訓練] [訓練]\n第3輪：[訓練] [訓練] [測試] [訓練] [訓練]\n...\n\n跑 5 次取平均，結果更穩定可信'
                    },
                    {
                      label: '優缺點',
                      icon: 'balance',
                      tags: [
                        { type: 'pro', text: '優點：充分利用所有資料，結果更客觀' },
                        { type: 'con', text: '缺點：訓練 K 次，花 K 倍時間' }
                      ]
                    }
                  ]
                }
              },
              {
                number: 5,
                title: '損失函數',
                engTitle: 'Loss Function',
                back: {
                  sections: [
                    {
                      label: '是什麼',
                      icon: 'functions',
                      content: '衡量模型預測值和真實值之間差距的函數。差距越大，損失越高，模型就知道自己猜得不好。'
                    },
                    {
                      label: '怎麼用',
                      icon: 'build',
                      code: '訓練過程：\n1. 模型做預測\n2. 損失函數算出「猜錯多少」\n3. 模型調整參數，讓損失變小\n4. 重複直到損失夠小'
                    },
                    {
                      label: '跟 Cost-sensitive 的關係',
                      icon: 'link',
                      content: 'Cost-sensitive Learning 就是修改損失函數的權重，讓猜錯少數類別的懲罰更大。'
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        id: 'subject2',
        label: '第二科 生成式AI應用與規劃',
        topics: []
      }
    ]
  },
  advanced: {
    label: '中級',
    subjects: []
  }
}
