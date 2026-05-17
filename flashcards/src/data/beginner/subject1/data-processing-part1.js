/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：data-processing-part1.js
 * 功能：資料處理與分析（第 1-16 張）
 * 建立日期：2026-05-17
 * 版本：1.0.0
 */

export default [
    {
      number: 1,
      title: '資料整合',
      engTitle: 'Data Integration',
      back: {
        sections: [
          { label: '是什麼', icon: 'merge_type', content: '把不同來源的資料合在一起，讓它們可以統一使用、統一分析。' },
          { label: '三大目的', icon: 'checklist', code: '1. 統一格式與欄位定義 → 確保分析一致性\n2. 識別並處理重複資料 → 避免影響模型訓練\n3. 整併多來源資料   → 提升完整性與應用價值' },
          { label: '容易搞混', icon: 'warning', content: '「延長資料留存期限」不是資料整合的目的，那是資料保存政策（Data Retention Policy）的範圍。' },
          {
            label: '考試重點',
            icon: 'school',
            content: '考法：「下列何者不屬於資料整合的主要目的？」\n\n正確的目的：統一格式、處理重複、整併多來源。\n不是目的：「延長資料留存期限」→ 那是資料保存政策。\n\n記法：整合 = 把不同來源的資料「合在一起用」，跟「存多久」無關。'
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
          { label: '是什麼', icon: 'scatter_plot', content: '資料中遠離大多數數據點的異常值。不一定是錯的，可能是有意義的極端情況。' },
          { label: '常見處理方式', icon: 'build', code: '1. Z-score 判斷  → 看離平均值幾個標準差\n2. IQR 四分位距  → 超出 Q1-1.5*IQR 或 Q3+1.5*IQR\n3. 截尾 Trimming → 直接移除極端值\n4. 結合領域知識  → 判斷是否合理再決定' },
          { label: '重點', icon: 'lightbulb', content: '處理離群值之前，一定要先判斷它是「有意義的極端值」還是「資料錯誤」，不能無腦刪除。' },
          {
            label: '考試重點',
            icon: 'school',
            content: '考法：「下列何者最不適當？」→ 用 One-hot 編碼處理離群值是錯的。\n\nOne-hot 是「類別→數值」的轉換工具，離群值是「數值」問題，兩者用途完全不同。\n\n正確做法：Z-score/IQR 評估、截尾、結合領域知識判斷。'
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
          { label: '是什麼', icon: 'functions', content: '衡量一個數據點離平均值有多遠，單位是「幾個標準差」。' },
          { label: '怎麼算', icon: 'calculate', code: 'Z = (X - 平均值) / 標準差\n\n例：平均值=100, 標準差=10, X=130\nZ = (130-100)/10 = 3\n→ 離平均值 3 個標準差，通常視為離群值' },
          { label: '判斷標準', icon: 'rule', content: '一般 |Z| > 2 或 |Z| > 3 就會被標記為離群值。' }
        ]
      }
    },
    {
      number: 4,
      title: 'IQR 四分位距',
      engTitle: 'Interquartile Range',
      back: {
        sections: [
          { label: '是什麼', icon: 'functions', content: '第三四分位數（Q3）減去第一四分位數（Q1）的差距，代表中間 50% 資料的分散程度。' },
          { label: '怎麼用來抓離群值', icon: 'calculate', code: 'IQR = Q3 - Q1\n\n下界 = Q1 - 1.5 * IQR\n上界 = Q3 + 1.5 * IQR\n\n超出上下界的就是離群值' },
          { label: '優點', icon: 'lightbulb', content: '不受極端值影響（因為只看中間 50%），比 Z-score 更穩健。' }
        ]
      }
    },
    {
      number: 5,
      title: '截尾',
      engTitle: 'Trimming',
      back: {
        sections: [
          { label: '是什麼', icon: 'content_cut', content: '直接把資料中最極端的部分砍掉（例如最高和最低的 5%），只保留中間的資料來分析。' },
          { label: '用途', icon: 'check_circle', content: '提升模型穩定性，避免極端值拉偏結果。' },
          { label: '風險', icon: 'warning', content: '砍掉的資料可能包含有價值的資訊（例如真實的異常交易），所以要謹慎使用。' }
        ]
      }
    },
    {
      number: 6,
      title: 'One-hot 編碼',
      engTitle: 'One-hot Encoding',
      back: {
        sections: [
          { label: '是什麼', icon: 'grid_on', content: '把類別型資料轉換成 0 和 1 的向量，每個類別一個欄位。' },
          { label: '範例', icon: 'table_chart', code: '原始：顏色 = [紅, 藍, 綠]\n\n轉換後：\n紅 → [1, 0, 0]\n藍 → [0, 1, 0]\n綠 → [0, 0, 1]' },
          { label: '重點', icon: 'lightbulb', content: 'One-hot 編碼是給「類別資料」用的，不是拿來處理離群值的。離群值是數值問題，One-hot 是類別轉換工具，兩者用途完全不同。' }
        ]
      }
    },
    {
      number: 7,
      title: '正規化',
      engTitle: 'Normalization',
      back: {
        sections: [
          { label: '是什麼', icon: 'straighten', content: '把數值縮放到固定範圍（通常是 0 到 1），讓不同單位的特徵可以公平比較。' },
          { label: '怎麼算', icon: 'calculate', code: 'X_new = (X - X_min) / (X_max - X_min)\n\n例：身高 150~190 cm，體重 40~100 kg\n正規化後都變成 0~1，不會因為單位不同而偏袒某個特徵' },
          { label: '適用時機', icon: 'lightbulb', content: '適合資料沒有明顯離群值、且需要固定範圍的場景（如 KNN、神經網路）。' },
          {
            label: '考試重點',
            icon: 'school',
            content: '考法常跟「資料洩漏」一起出：\n正確流程：先分割 → 只用訓練集算 min/max → 套用到測試集。\n錯誤流程：先對整份資料正規化再分割 → 會洩漏測試資料的 min/max。'
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
          { label: '是什麼', icon: 'straighten', content: '把數值轉換成「平均值為 0、標準差為 1」的分佈，讓資料以 0 為中心分散。' },
          { label: '怎麼算', icon: 'calculate', code: 'X_new = (X - 平均值) / 標準差\n\n轉換後：平均值 = 0，標準差 = 1\n（其實就是算 Z-score）' },
          { label: '跟正規化的差別', icon: 'compare', code: '正規化 → 壓到 [0, 1]，受離群值影響大\n標準化 → 以 0 為中心，對離群值較穩健\n\n標準化更常用，尤其是有離群值的時候' },
          {
            label: '考試重點',
            icon: 'school',
            content: '考法常跟「資料洩漏」一起出：\n正確流程：先分割 → 只用訓練集算平均值和標準差 → 套用到測試集。\n\n另一個考法：「各自獨立計算統計量」也是錯的，測試集的統計量不該用測試集自己算。'
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
          { label: '是什麼', icon: 'leak_add', content: '訓練模型時，不小心讓模型「偷看」到測試資料的資訊，導致評估結果虛高，上線後表現卻很差。' },
          { label: '常見犯錯方式', icon: 'warning', code: '錯誤：先對整份資料做標準化，再分割\n  → 標準化用了測試資料的統計量（平均值、標準差）\n  → 模型間接「知道」了測試資料的分佈\n\n正確：先分割，只用訓練資料算統計量，再套用到測試資料' },
          { label: '正確流程', icon: 'check_circle', code: '1. 先分割 → 訓練集 / 測試集\n2. 只用訓練集算平均值、標準差\n3. 用這組統計量去轉換訓練集和測試集' },
          {
            label: '考試重點',
            icon: 'school',
            content: '最常考的情境：「為確保評估真實性並避免資料洩漏，下列何者最適當？」\n\n正確答案：先分割，僅以訓練資料計算統計量，再套用至測試資料。\n\n四個選項的陷阱：\n(A) 分割前對完整資料標準化 → 洩漏！\n(B) 各自獨立計算 → 測試集用自己的統計量也不對\n(C) 只用訓練集算再套用 → 正確！\n(D) 測試資料不處理 → 尺度不一致，模型會出錯'
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
          { label: '是什麼', icon: 'call_split', content: '把資料切成兩份：一份拿來訓練模型，一份留著測試模型好不好。' },
          { label: '為什麼要分', icon: 'help_outline', content: '如果用同一份資料又訓練又測試，模型會「背答案」，看起來很準但遇到新資料就不行了（過擬合）。' },
          { label: '常見比例', icon: 'pie_chart', code: '訓練集 : 測試集 = 80% : 20%\n或 70% : 30%\n\n有時還會多切一份驗證集（Validation Set）\n訓練 60% / 驗證 20% / 測試 20%' }
        ]
      }
    },
    {
      number: 11,
      title: '類別型特徵',
      engTitle: 'Categorical Features',
      back: {
        sections: [
          { label: '是什麼', icon: 'label', content: '資料中表示「類別」而非數值的欄位，例如性別、地區、方案類型。模型不能直接吃文字，要先轉成數字。' },
          { label: '常見轉換方式', icon: 'transform', code: 'One-hot 編碼 → 每個類別一個欄位（0/1）\nLabel 編碼   → 直接給編號（0, 1, 2...）\n特徵交叉     → 組合兩個類別產生新特徵' },
          { label: '注意', icon: 'warning', content: 'Label 編碼會讓模型以為類別有大小順序（1 < 2 < 3），除非類別確實有順序（如學歷），否則建議用 One-hot。' },
          {
            label: '考試重點',
            icon: 'school',
            content: '考法：「將類別型特徵轉換為模型可處理的數值格式」→ One-hot 編碼。\n\n資料分群不是轉換格式（是把資料分組）。\n特徵交叉不是轉換格式（是組合特徵）。\n寬深模型不是轉換格式（是模型架構）。'
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
          { label: '是什麼', icon: 'join_inner', content: '把兩個以上的特徵「組合」成一個新特徵，讓模型能學到特徵之間的交互關係。' },
          { label: '範例', icon: 'table_chart', code: '原始特徵：地區 = 台北, 方案 = 吃到飽\n\n特徵交叉後：\n地區_方案 = 台北_吃到飽\n\n這樣模型就能學到「台北+吃到飽」這個組合的特殊規律' },
          { label: '用途', icon: 'lightbulb', content: '常用在推薦系統、廣告點擊預測等場景。寬深模型（Wide and Deep）的「寬」的部分就是靠特徵交叉來記住歷史組合。' },
          {
            label: '考試重點',
            icon: 'school',
            content: '特徵交叉不是「轉換類別型特徵為數值」的工具（那是 One-hot）。特徵交叉是「組合已有特徵產生新特徵」。\n\n寬深模型的「寬」部分就是用特徵交叉，但寬深模型本身是「模型架構」不是「特徵轉換方法」。'
          }
        ]
      }
    },
    {
      number: 13,
      title: '結構化數據',
      engTitle: 'Structured Data',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'table_chart',
            content: '有固定格式、整齊排列成「行和列」的資料，就像 Excel 試算表一樣。每一欄有固定的欄位名稱和資料型別，可以直接查詢和分析。'
          },
          {
            label: '長什麼樣',
            icon: 'grid_on',
            code: '訂單ID | 客戶名 | 金額  | 日期\n------+--------+-------+----------\n001   | 小明   | 1500  | 2026-01-15\n002   | 小華   | 2300  | 2026-01-16\n\n→ 每一列是一筆資料，每一欄是一個欄位\n→ 格式固定、結構清晰'
          },
          {
            label: '存在哪裡',
            icon: 'storage',
            content: '關聯式資料庫（MySQL、PostgreSQL、SQL Server）、規範化的 Excel/CSV 試算表。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考題常問「哪個是結構化數據」：\n- MySQL 資料庫的訂單記錄 → 結構化\n- JSON/XML → 半結構化（有標籤但格式彈性）\n- 純文字對話紀錄 → 非結構化'
          }
        ]
      }
    },
    {
      number: 14,
      title: '半結構化數據',
      engTitle: 'Semi-structured Data',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'data_object',
            content: '有一定的標籤或標記來組織資料，但不像結構化數據那樣嚴格遵循固定的行列格式。介於結構化和非結構化之間。'
          },
          {
            label: '常見格式',
            icon: 'code',
            code: 'JSON（最常見）：\n{ "name": "小明", "age": 25, "hobbies": ["游泳","跑步"] }\n→ 有鍵值對，但欄位可以不固定、可巢狀\n\nXML：\n<product>\n  <name>手機</name>\n  <price>15000</price>\n</product>\n→ 有標籤標記，但格式彈性\n\nCSV：\n介於結構化和半結構化之間（看規範程度）'
          },
          {
            label: '跟結構化的差別',
            icon: 'compare',
            code: '結構化   → 嚴格的行列格式（像 Excel 表格）\n半結構化 → 有標籤但格式彈性（像 JSON）\n非結構化 → 沒有固定結構（像純文字、圖片）'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'JSON 和 XML 是半結構化的典型代表。考題會用它們當選項來混淆「結構化」和「半結構化」。'
          }
        ]
      }
    },
    {
      number: 15,
      title: '非結構化數據',
      engTitle: 'Unstructured Data',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'description',
            content: '沒有固定格式、沒有行列結構的資料。需要經過處理和解析後才能分析。佔全世界資料量的 80% 以上。'
          },
          {
            label: '常見類型',
            icon: 'list',
            code: '文字類：電子郵件、文章、客服對話紀錄、社群貼文\n影像類：照片、X光片、衛星圖\n音訊類：語音留言、音樂、Podcast\n影片類：監視器畫面、YouTube 影片'
          },
          {
            label: '怎麼處理',
            icon: 'build',
            content: '需要用 NLP（自然語言處理）、電腦視覺、語音辨識等 AI 技術先「理解」內容，才能進一步分析。這也是 AI 最擅長的領域。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「純文字檔案的客服對話」是非結構化，不是半結構化。半結構化需要有標籤（如 JSON 的鍵值對），純文字沒有。'
          }
        ]
      }
    },
    {
      number: 16,
      title: '平均值',
      engTitle: 'Mean',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'functions',
            content: '把所有數值加起來除以個數，得到的就是平均值。最直覺的「集中趨勢」指標。'
          },
          {
            label: '怎麼算',
            icon: 'calculate',
            code: '數據：10, 20, 30, 40, 100\n\n平均值 = (10+20+30+40+100) / 5 = 40'
          },
          {
            label: '致命弱點',
            icon: 'warning',
            content: '極端值（離群值）會嚴重拉偏平均值。\n\n例：5 個人月薪 3萬、3萬、3萬、3萬、100萬\n平均值 = 22.4 萬 ← 完全不能代表「大多數人」\n中位數 = 3 萬 ← 更能反映真實情況'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考題常考：「有離群值或偏態資料時，平均值不適合描述集中趨勢」→ 正確。這時候應該用中位數。'
          }
        ]
      }
    }
  ]
