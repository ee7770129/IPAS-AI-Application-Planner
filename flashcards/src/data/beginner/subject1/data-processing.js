/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：data-processing.js
 * 功能：資料處理與分析 - 卡片資料
 * 建立日期：2026-05-15
 * 版本：1.0.0
 */

export default {
  id: 'data-processing',
  label: '資料處理與分析',
  cards: [
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
    },
    {
      number: 17,
      title: '中位數',
      engTitle: 'Median',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'functions',
            content: '把資料從小到大排好，正中間那個值就是中位數。如果資料個數是偶數，取中間兩個值的平均。'
          },
          {
            label: '範例',
            icon: 'calculate',
            code: '奇數個：1, 3, 5, 7, 9 → 中位數 = 5\n偶數個：1, 3, 5, 7 → 中位數 = (3+5)/2 = 4'
          },
          {
            label: '優點',
            icon: 'check_circle',
            content: '不受極端值影響。不管最大值是 9 還是 9000，中位數都不會被拉走。所以在有離群值的資料中，中位數比平均值更能代表「典型值」。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考題陷阱：「中位數能反映極端值的影響」→ 錯！中位數的優點正好是「不受極端值影響」。能反映極端值影響的是平均值。'
          }
        ]
      }
    },
    {
      number: 18,
      title: '標準差',
      engTitle: 'Standard Deviation',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'functions',
            content: '衡量資料「分散程度」的指標。標準差越大，資料點離平均值越遠（越分散）；越小，資料越集中。'
          },
          {
            label: '直覺理解',
            icon: 'lightbulb',
            code: '班級 A 成績：78, 80, 82, 79, 81 → 標準差小（很集中）\n班級 B 成績：30, 50, 90, 100, 60 → 標準差大（很分散）\n\n標準差大 = 分散\n標準差小 = 集中'
          },
          {
            label: '跟 Z-score 的關係',
            icon: 'link',
            content: 'Z-score 就是用標準差當「尺」來量每個資料點離平均值多遠。Z = (X - 平均值) / 標準差。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考題陷阱：「標準差越大代表資料越集中」→ 錯！正好相反，標準差越大代表越分散。'
          }
        ]
      }
    },
    {
      number: 19,
      title: '百分位數',
      engTitle: 'Percentile',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'functions',
            content: '把資料排好後分成 100 等份，第 P 百分位數表示「有 P% 的資料小於或等於這個值」。用來看一個值在整體中的相對位置。'
          },
          {
            label: '範例',
            icon: 'calculate',
            code: '你考了 85 分，全班排在第 90 百分位數\n→ 表示你贏過 90% 的人\n\n常見百分位數：\nQ1（第 25 百分位）= 排在 25% 的位置\nQ2（第 50 百分位）= 中位數\nQ3（第 75 百分位）= 排在 75% 的位置'
          },
          {
            label: '特點',
            icon: 'lightbulb',
            content: '不受極端值影響，能詳細描述資料分佈。IQR（四分位距）就是用 Q3 - Q1 來抓離群值。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '百分位數的核心功能是「衡量資料在整體分布中的相對位置」。這是考題最常考的敘述。'
          }
        ]
      }
    },
    {
      number: 20,
      title: '直方圖',
      engTitle: 'Histogram',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'bar_chart',
            content: '把連續型數據分成幾個區間（bin），用長條的高度表示每個區間有多少筆資料。看的是「資料分佈的形狀」。'
          },
          {
            label: '範例',
            icon: 'table_chart',
            code: '顧客年齡分佈：\n\n20-29歲 ████████  (80人)\n30-39歲 ████████████ (120人)\n40-49歲 ██████ (60人)\n50-59歲 ███ (30人)\n\n→ 30-39歲最多，呈現左偏分佈'
          },
          {
            label: '跟長條圖的差別',
            icon: 'compare',
            code: '直方圖（Histogram）\n  → 連續型資料（數值），長條彼此相連\n  → 看分佈形狀\n\n長條圖（Bar Chart）\n  → 類別型資料（文字），長條之間有間隔\n  → 比較各類別的數量'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「檢視資料在不同區間的集中情形」→ 直方圖。\n「比較各類別的數量」→ 長條圖。\n「看兩變數的關聯」→ 散佈圖。'
          }
        ]
      }
    },
    {
      number: 21,
      title: '散佈圖',
      engTitle: 'Scatter Plot',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'scatter_plot',
            content: '把兩個變數的值畫成一個個點，看它們之間有沒有關聯性。X 軸放一個變數，Y 軸放另一個。'
          },
          {
            label: '能看出什麼',
            icon: 'lightbulb',
            code: '正相關：點從左下到右上 ↗（X大Y也大）\n負相關：點從左上到右下 ↘（X大Y反而小）\n無相關：點散亂分佈（看不出方向）\n\n例：廣告支出 vs 銷售額 → 看是否正相關'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「分析兩個變數之間的關聯程度」→ 散佈圖。\n不要跟直方圖搞混：直方圖看一個變數的分佈，散佈圖看兩個變數的關係。'
          }
        ]
      }
    },
    {
      number: 22,
      title: '長條圖',
      engTitle: 'Bar Chart',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'bar_chart',
            content: '用長條的高度或長度來比較不同「類別」之間的數量或大小。長條之間有間隔，表示類別是離散的。'
          },
          {
            label: '範例',
            icon: 'table_chart',
            code: '各產品年度銷售總額：\n\n手機  ████████████ 120萬\n筆電  ████████ 80萬\n平板  █████ 50萬\n手錶  ███ 30萬\n\n→ 比較不同「類別」的銷售額'
          },
          {
            label: '跟直方圖的差別',
            icon: 'compare',
            content: '長條圖：類別型資料，長條有間隔，比較各類大小。\n直方圖：連續型資料，長條相連，看資料分佈形狀。\n\n記法：長條「比大小」，直方「看分佈」。'
          }
        ]
      }
    },
    {
      number: 23,
      title: '資料增強',
      engTitle: 'Data Augmentation',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'auto_fix_high',
            content: '透過對現有訓練資料做各種「變形」來產生更多訓練樣本，增加資料的多樣性，讓模型學到更多變化，減少過擬合。'
          },
          {
            label: '影像常見手法',
            icon: 'image',
            code: '旋轉（Rotation）    → 圖片轉 15 度、90 度\n水平翻轉（Flip）    → 左右鏡像\n裁切（Crop）        → 隨機裁掉邊緣\n縮放（Scale）       → 放大縮小\n亮度/對比調整       → 模擬不同光線\n加雜訊（Noise）     → 模擬模糊或粗糙的圖片\n\n一張原始圖 → 可以變出幾十張「不同」的圖'
          },
          {
            label: '為什麼有效',
            icon: 'lightbulb',
            content: '模型看到同一隻貓的各種角度、光線、大小後，會學到「不管怎麼變，這都是貓」的本質特徵，而不是死背某一張特定的圖。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '情境題：「訓練 98% 但測試 72%（過擬合），想增加資料多樣性」\n→ 正確答案：資料增強（旋轉、翻轉等隨機變化）\n\n錯誤選項陷阱：\n- 「增加模型深度」→ 過擬合更嚴重\n- 「只保留表現好的資料」→ 減少多樣性\n- 「提高訓練速度」→ 跟過擬合無關'
          }
        ]
      }
    },
    {
      number: 24,
      title: '對數轉換',
      engTitle: 'Log Transformation',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'functions',
            content: '對數值取 log，把「右偏分佈」（少數極端大值拉長尾巴）壓成比較對稱的分佈。常用在金額、收入等有極端值的資料。'
          },
          {
            label: '為什麼有效',
            icon: 'lightbulb',
            code: '原始資料（右偏）：\n  100, 200, 300, 500, 10000, 50000\n  → 10000 和 50000 拉很長的尾巴\n\n取 log 後：\n  2.0, 2.3, 2.5, 2.7, 4.0, 4.7\n  → 極端值被「壓縮」，分佈變對稱\n  → 模型學習更穩定'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '情境：「高度偏態分佈」+「少數極端大值」+「降低極端值影響」→ 對數轉換。\n\n不是 One-hot 編碼（那是類別轉數值）。\n不是區間化（那是把連續值切成類別）。\n不是隨機重抽樣（那是改變樣本數量）。'
          }
        ]
      }
    },
    {
      number: 25,
      title: '區間化',
      engTitle: 'Binning / Discretization',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'view_column',
            content: '把連續型數值切成幾個區間，變成類別型資料。例如把年齡從精確數字變成「青年/中年/老年」。'
          },
          {
            label: '範例',
            icon: 'table_chart',
            code: '原始：年齡 = 23, 35, 42, 58, 67\n\n區間化後：\n  23 → 20-29（青年）\n  35 → 30-39（壯年）\n  42 → 40-49（中年）\n  58 → 50-59（中老年）\n  67 → 60-69（老年）\n\n連續數值 → 離散類別'
          },
          {
            label: '用途',
            icon: 'check_circle',
            content: '減少雜訊影響、簡化模型、讓某些不擅長連續值的模型也能處理。但會損失精確度（32歲和39歲被歸為同類）。'
          }
        ]
      }
    },
    {
      number: 26,
      title: '大數據 4V',
      engTitle: 'Big Data 4Vs',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'data_usage',
            content: '描述大數據特性的四個 V，也是大數據專案會面臨的四大挑戰。'
          },
          {
            label: '四個 V',
            icon: 'list',
            code: 'Volume（量）\n  資料量非常大（TB、PB 級）\n\nVelocity（速度）\n  資料產生和需要處理的速度很快\n  例：即時交易、串流資料\n\nVariety（多樣性）\n  資料格式五花八門\n  結構化 + 半結構化 + 非結構化混合\n  例：數值、影像、文字、感測器同時來\n\nVeracity（真實性）\n  資料品質參差不齊\n  可能有錯誤、遺漏、不一致'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '情境判斷：\n- 「格式差異大、整合成本高」→ Variety（多樣性）\n- 「資料量從 2GB 增到 50GB」→ Volume（量）\n- 「需要 3 秒內完成判定」→ Velocity（速度）\n- 「資料品質不穩定」→ Veracity（真實性）\n\n考題最常考 Variety：混合影像+數值+文字 → 整合困難。'
          }
        ]
      }
    }
  ]
}
