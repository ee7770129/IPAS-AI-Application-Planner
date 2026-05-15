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
    },
    {
      number: 27,
      title: 'ETL 流程',
      engTitle: 'Extract, Transform, Load',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'sync_alt',
            content: '資料處理的三步驟流程：先從各種來源「抽取」資料，再「轉換」成統一格式，最後「載入」到目標資料庫或資料倉儲。是資料工程的核心流程。'
          },
          {
            label: '三個步驟',
            icon: 'format_list_numbered',
            code: 'Extract（抽取）\n  從各種來源撈資料\n  例：MySQL、API、CSV、網頁爬蟲\n\nTransform（轉換）\n  清洗、格式統一、欄位對齊、去重複\n  例：日期格式統一為 YYYY-MM-DD\n      金額統一為新台幣\n\nLoad（載入）\n  把處理好的資料寫入目標系統\n  例：資料倉儲、分析平台、報表資料庫'
          },
          {
            label: '生活比喻',
            icon: 'lightbulb',
            content: '就像做菜：\nExtract = 從冰箱、市場、菜園「取出」食材\nTransform = 洗菜、切菜、調味「處理」食材\nLoad = 把做好的菜「裝盤」上桌'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'ETL 是 AI 技術架構「技術底層」的關鍵技術，屬於資料處理與分析的範疇。\n\n常見平台：Hadoop、Spark 都支援大規模 ETL。\n\n考題常問：「資料處理流程的正確順序」→ 抽取 → 轉換 → 載入。不要跟 ELT（先載入再轉換）搞混。'
          }
        ]
      }
    },
    {
      number: 28,
      title: '數據蒐集方法',
      engTitle: 'Data Collection Methods',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'download',
            content: '取得 AI 訓練所需資料的各種方式。資料是 AI 的燃料，沒有好的資料就訓練不出好的模型。'
          },
          {
            label: '五大方法',
            icon: 'format_list_numbered',
            code: '1. 問卷與調查\n   線上/線下直接蒐集第一手資料\n   用於市場研究、用戶回饋\n\n2. 自有產品數據\n   自家網站/App/裝置產生的資料\n   例：智慧手錶、電商網站點擊紀錄\n\n3. 外部公開數據\n   政府開放平台 API、公開資料集\n   例：氣象局 API、公開統計數據\n\n4. 網路爬蟲（Web Scraping）\n   自動抓取網站公開資料\n   例：商品價格、新聞、評論\n\n5. 外部付費數據\n   向第三方購買專業數據集\n   例：市場調查報告、人口統計數據'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考題常問「哪些是常見的數據蒐集方式」或「某情境該用哪種方法」：\n\n- 想了解客戶滿意度 → 問卷調查\n- 想分析自家用戶行為 → 自有產品數據\n- 想抓競品價格 → 網路爬蟲\n- 想補充專業數據 → 付費購買'
          }
        ]
      }
    },
    {
      number: 29,
      title: '遺缺值處理',
      engTitle: 'Missing Value Handling',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'browser_not_supported',
            content: '資料中某些欄位「沒有填值」或「值是空的」，這就是遺缺值。資料清洗的第一步就是處理它，否則模型無法正常訓練。'
          },
          {
            label: '處理方式',
            icon: 'build',
            code: '填補法（常用）：\n  平均值填補 → 數值型資料，用所有值的平均來補\n  中位數填補 → 有離群值時比平均值更穩健\n  眾數填補   → 類別型資料，用出現最多的類別補\n  插補法     → 用前後值推算（適合時間序列）\n  預測模型   → 用迴歸等模型預測遺缺值\n\n刪除法（謹慎用）：\n  刪除整列 → 遺缺太多的那筆直接丟掉\n  刪除整欄 → 某欄位遺缺率超高就整欄砍掉\n  → 要注意刪除後樣本是否還有代表性'
          },
          {
            label: '怎麼選',
            icon: 'lightbulb',
            content: '遺缺比例低（< 5%）→ 填補即可\n遺缺比例高（> 50%）→ 考慮刪除該欄位\n資料量很大 → 刪除幾筆影響不大\n資料量很小 → 盡量填補，不要刪'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '遺缺值處理屬於「資料清洗」的核心步驟。\n\n考題常問「下列何者是處理遺缺值的適當方式」：\n正確：平均值/中位數填補、插補法、刪除（謹慎）\n錯誤：One-hot 編碼（那是類別轉換，不是處理遺缺值）'
          }
        ]
      }
    },
    {
      number: 30,
      title: '重複值處理',
      engTitle: 'Duplicate Value Handling',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'content_copy',
            content: '資料中出現完全相同或幾乎相同的記錄。通常是因為多次匯入、系統錯誤、或人工重複輸入造成的。'
          },
          {
            label: '為什麼要處理',
            icon: 'warning',
            content: '重複資料會讓模型「多學了某些樣本好幾次」，導致結果偏向那些被重複的資料。統計分析也會因為重複而失準（例如平均值被拉偏）。'
          },
          {
            label: '怎麼處理',
            icon: 'build',
            code: '1. 識別重複值\n   檢查主鍵（Primary Key）或唯一識別碼\n   比對關鍵欄位是否完全相同\n\n2. 刪除重複值\n   保留第一筆（或最新的一筆）\n   刪除其餘重複記錄\n\n3. 合併重複值\n   有時候兩筆「幾乎」一樣但各有補充\n   → 合併成一筆完整的記錄'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '重複值處理是資料清洗的基本步驟之一，跟遺缺值處理、錯誤值處理並列。\n\n識別重複的方法：透過主鍵、唯一識別碼或關鍵欄位比對。'
          }
        ]
      }
    },
    {
      number: 31,
      title: '錯誤值處理',
      engTitle: 'Error / Invalid Value Handling',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'error_outline',
            content: '資料中的值「不合理」或「明顯有誤」。不像離群值可能是真實的極端情況，錯誤值是確定不對的。'
          },
          {
            label: '常見類型',
            icon: 'list',
            code: '超出合理範圍：\n  年齡 = -5 歲（不可能有負數）\n  體溫 = 500 度（明顯異常）\n\n格式錯誤：\n  日期欄位出現「abc」\n  電話號碼出現中文字\n\n拼寫錯誤：\n  Taiwan 被記錄成 Taiwwn\n  Male 被記錄成 Mael\n\n邏輯矛盾：\n  出生日期比當前日期還晚\n  訂單金額為 0 但數量不是 0'
          },
          {
            label: '怎麼處理',
            icon: 'build',
            content: '1. 設定合理範圍規則，自動偵測超出範圍的值\n2. 修正明顯的拼寫錯誤（如 Taiwwn → Taiwan）\n3. 無法修正的錯誤值 → 標記為遺缺值再處理\n4. 建立資料驗證規則，防止未來再次輸入錯誤'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '錯誤值 vs 離群值的差別：\n- 錯誤值：確定是錯的（年齡 -5 歲）→ 必須修正或刪除\n- 離群值：可能是真實的極端值（收入 1000 萬）→ 需要判斷再決定\n\n處理順序通常是：遺缺值 → 重複值 → 錯誤值 → 離群值'
          }
        ]
      }
    },
    {
      number: 32,
      title: '網路爬蟲',
      engTitle: 'Web Scraping',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'bug_report',
            content: '自動化程式去網站上「爬」公開資料，模擬瀏覽器行為把網頁內容抓下來。是數據蒐集的重要方法之一。'
          },
          {
            label: '能抓什麼',
            icon: 'list',
            code: '商品價格與規格（電商比價）\n新聞文章標題與內容\n使用者評論與評分\n股票/匯率/天氣等公開數據\n職缺資訊（人力銀行）\n社群媒體公開貼文'
          },
          {
            label: '常見工具',
            icon: 'build',
            code: 'Python：\n  requests + BeautifulSoup → 靜態網頁\n  Selenium → 動態網頁（需要執行 JS）\n  Scrapy → 大規模爬蟲框架\n\n注意事項：\n  遵守 robots.txt 規範\n  控制爬取速度，不要癱瘓對方伺服器\n  注意法律與隱私問題'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '網路爬蟲屬於「外部公開數據蒐集」方法。\n\n跟 API 的差別：\n- API → 網站官方提供的資料接口，格式規範\n- 爬蟲 → 直接解析網頁 HTML，格式需自行處理\n\n課本重點：爬蟲抓取的是「網站公開數據」，如商品價格、評論、新聞等。'
          }
        ]
      }
    },
    {
      number: 33,
      title: '插補法',
      engTitle: 'Interpolation',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'timeline',
            content: '利用已知的資料點「推算」出遺缺的值。特別適合時間序列或有順序性的資料，因為前後的值有參考意義。'
          },
          {
            label: '常見方法',
            icon: 'build',
            code: '線性插補：\n  用前後兩點畫直線，取中間值\n  例：1月=100, 3月=300 → 2月推算為200\n\n多項式插補：\n  用更多點擬合曲線，推算遺缺值\n  比線性更精確，但可能過擬合\n\n最近鄰插補：\n  直接用最近的已知值來填補\n  例：缺 3 月的值 → 用 2 月的值補上'
          },
          {
            label: '跟其他填補法的差別',
            icon: 'compare',
            code: '平均值填補 → 用全部資料的平均，不考慮順序\n中位數填補 → 用全部資料的中位數\n插補法     → 考慮前後資料的趨勢來推算\n預測模型   → 用迴歸等模型預測遺缺值\n\n插補法的優勢：保留了資料的「趨勢」和「連續性」'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '插補法是遺缺值填補的方法之一，特點是「根據前後已知值推算」。\n\n適用時機：資料有順序性（時間序列、空間資料）。\n不適用時機：資料沒有順序關係（如隨機抽樣的問卷）→ 用平均值/中位數更合適。'
          }
        ]
      }
    },
    {
      number: 34,
      title: '折線圖',
      engTitle: 'Line Chart',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'show_chart',
            content: '用線段把各個資料點連起來，顯示資料隨時間或連續變數的「變化趨勢」。最適合看資料是上升、下降還是波動。'
          },
          {
            label: '範例',
            icon: 'timeline',
            code: '月營收走勢：\n\n1月 ─── 2月 ─── 3月 ─── 4月\n100萬    120萬    90萬     150萬\n\n→ 一眼就能看出 3月下滑、4月大幅回升\n→ 也可以畫多條線比較不同產品的趨勢'
          },
          {
            label: '跟其他圖的差別',
            icon: 'compare',
            code: '折線圖 → 看「趨勢變化」（時間序列最適合）\n直方圖 → 看「資料分佈」（連續型）\n長條圖 → 比較「類別大小」（離散型）\n散佈圖 → 看「兩變數關聯」'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '折線圖的強項是「顯示資料的變化趨勢」，可以同時顯示多個變量的趨勢。\n\n限制：不適合展示類別型資料（那是長條圖的工作）。\n\n考題常問「哪種圖適合看趨勢」→ 折線圖。'
          }
        ]
      }
    },
    {
      number: 35,
      title: '箱型圖',
      engTitle: 'Box Plot / 盒鬚圖',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'candlestick_chart',
            content: '用一個「盒子」加上「鬚線」來呈現資料的分佈情況。一張圖就能看到中位數、四分位數、資料範圍和離群值。'
          },
          {
            label: '怎麼看',
            icon: 'visibility',
            code: '    離群值 *\n       |\n  ┌────┤ ← Q3（第75百分位）\n  │    │\n  │──── ← 中位數（Q2）\n  │    │\n  └────┤ ← Q1（第25百分位）\n       |\n    離群值 *\n\n盒子 = 中間 50% 的資料（IQR）\n鬚線 = 延伸到 1.5 * IQR 範圍\n超出鬚線的點 = 離群值'
          },
          {
            label: '用途',
            icon: 'check_circle',
            content: '比較不同群組的分佈差異（例如不同地區的收入）、快速找出離群值、了解資料的對稱性和分散程度。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '箱型圖屬於探索性分析（EDA）的重要工具。\n\n核心功能：「展示資料分佈情況，突出離群值與中位數等特徵」。\n\n跟直方圖的差別：直方圖看分佈形狀（有幾個峰），箱型圖看統計摘要（中位數、四分位、離群值）。'
          }
        ]
      }
    },
    {
      number: 36,
      title: '熱圖',
      engTitle: 'Heatmap',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'gradient',
            content: '用顏色的深淺來表示數值的大小。顏色越深（或越紅）代表數值越大，越淺（或越藍）代表越小。一眼就能看出哪些地方「熱」、哪些地方「冷」。'
          },
          {
            label: '常見用法',
            icon: 'grid_on',
            code: '相關矩陣熱圖（最常見）：\n\n        年齡  收入  消費\n年齡    1.0   0.3   0.2\n收入    0.3   1.0   0.8  ← 顏色很深（高相關）\n消費    0.2   0.8   1.0\n\n→ 一眼看出「收入和消費」高度相關\n→ 顏色深的格子 = 兩變數關聯性強'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '熱圖屬於探索性分析（EDA）工具。\n\n核心功能：「透過色彩強度展示資料項目之間的關聯程度」。\n\n常用情境：了解客戶消費行為特徵之間的關聯（如年齡與消費金額）。'
          }
        ]
      }
    },
    {
      number: 37,
      title: '散佈圖矩陣',
      engTitle: 'Scatter Plot Matrix',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'grid_view',
            content: '把多個變數「兩兩配對」畫成散佈圖，排列成一個矩陣。一次看完所有變數之間的關係，適合高維資料的初步探索。'
          },
          {
            label: '怎麼看',
            icon: 'visibility',
            code: '假設有 3 個變數：價格、數量、地區\n\n       價格    數量    地區\n價格   直方圖  散佈圖  散佈圖\n數量   散佈圖  直方圖  散佈圖\n地區   散佈圖  散佈圖  直方圖\n\n對角線 = 各變數自己的分佈（直方圖）\n其他格 = 兩兩變數的散佈圖\n→ 一次看完所有配對關係'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '散佈圖矩陣屬於探索性分析（EDA）工具。\n\n核心功能：「展示多個變量兩兩之間的相關性」，適合高維資料的初步探索。\n\n跟單一散佈圖的差別：散佈圖看兩個變數，散佈圖矩陣一次看所有變數配對。'
          }
        ]
      }
    },
    {
      number: 38,
      title: '雷達圖',
      engTitle: 'Radar Chart',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'radar',
            content: '又叫蜘蛛圖，把多個維度的指標畫在放射狀的軸上，用線段連起來形成多邊形。適合「比較不同個體在多個指標上的表現」。'
          },
          {
            label: '範例',
            icon: 'pentagon',
            code: '比較兩款手機的規格：\n\n        效能\n         /\\\n        /  \\\n  電池 /    \\ 相機\n       \\    /\n        \\  /\n        螢幕\n\n手機A（外圈）：效能強、相機普通\n手機B（內圈）：各項均衡\n\n→ 多邊形面積越大 = 整體表現越好\n→ 形狀偏某一邊 = 該指標特別強/弱'
          },
          {
            label: '限制',
            icon: 'warning',
            content: '不適合做資料分佈估計。雷達圖是用來「比較多維度表現」的，不是用來看數據分佈形狀的。要看分佈應該用直方圖、箱型圖。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考法：「下列何者不適合做為資料分布估計？」→ 雷達圖。\n\n適合資料分佈估計的：直方圖（看分佈形狀）、散佈圖（看兩變數關係）、四分位數/箱型圖（看分佈摘要）。\n\n雷達圖的用途是「比較不同個體在多維度的表現」，跟資料分佈無關。'
          }
        ]
      }
    },
    {
      number: 39,
      title: '四種數據分析方法',
      engTitle: 'Four Types of Data Analysis',
      back: {
        sections: [
          {
            label: '一張圖搞懂',
            icon: 'account_tree',
            code: '1. 敘述性分析（Descriptive）\n   「發生了什麼？」\n   用統計指標和圖表描述資料現況\n   工具：平均值、中位數、直方圖、折線圖\n\n2. 探索性分析（Exploratory / EDA）\n   「資料裡藏了什麼？」\n   不預設假設，多角度探索模式和異常\n   工具：散佈圖矩陣、熱圖、箱型圖、PCA\n\n3. 診斷性分析（Diagnostic）\n   「為什麼會這樣？」\n   找出現象背後的根本原因\n   工具：鑽取分析、關聯分析、因果分析(A/B測試)\n\n4. 預測性分析（Predictive）\n   「未來會怎樣？」\n   用歷史資料預測未來趨勢\n   工具：迴歸模型、分類模型、時間序列、集成學習'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '四種分析的層次是遞進的：\n敘述性（看現況）→ 探索性（找線索）→ 診斷性（找原因）→ 預測性（看未來）\n\n情境判斷：\n- 「用平均值和圖表描述銷售情況」→ 敘述性\n- 「不預設假設，探索客戶行為模式」→ 探索性\n- 「銷售下降，逐層分析找原因」→ 診斷性\n- 「用歷史資料預測下季營收」→ 預測性'
          }
        ]
      }
    },
    {
      number: 40,
      title: '關聯分析',
      engTitle: 'Association Analysis',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'link',
            content: '找出資料中「哪些東西常常一起出現」的規則。最經典的例子就是超市購物籃分析：買尿布的人常常也會買啤酒。'
          },
          {
            label: '核心概念',
            icon: 'build',
            code: 'Apriori 演算法（最經典）：\n\n支持度（Support）\n  兩樣東西同時出現的比例\n  例：100 筆交易中有 30 筆同時買啤酒和尿布\n  → 支持度 = 30%\n\n信賴度（Confidence）\n  買了 A 的人中，也買了 B 的比例\n  例：買尿布的 50 人中有 30 人也買啤酒\n  → 信賴度 = 60%\n\n增益（Lift）\n  > 1 表示正相關（一起出現比隨機多）\n  = 1 表示無關\n  < 1 表示負相關'
          },
          {
            label: '應用場景',
            icon: 'shopping_cart',
            content: '超市商品擺放（把常一起買的放附近）、推薦系統（買了A推薦B）、醫療（哪些症狀常一起出現）、網站分析（哪些頁面常被連續瀏覽）。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '關聯分析屬於「診斷性分析」的方法之一，用來分析資料項目之間的共現關係。\n\n經典考題情境：「啤酒與尿布的關聯性」→ Apriori 演算法 / 關聯分析。\n\n不要跟「相關性分析」搞混：相關性分析（皮爾森係數）看兩個數值變數的線性關係，關聯分析看項目的共現規則。'
          }
        ]
      }
    },
    {
      number: 41,
      title: '數據縮減',
      engTitle: 'Data Reduction',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'compress',
            content: '減少資料的維度或體積，讓分析更有效率、儲存更省空間，同時盡量保留原始資料的重要資訊。'
          },
          {
            label: '三種方法',
            icon: 'format_list_numbered',
            code: '1. 特徵選擇（Feature Selection）\n   從現有特徵中「挑出」最重要的\n   砍掉不重要或重複的欄位\n   例：100 個欄位中只留 20 個最相關的\n\n2. 特徵提取（Feature Extraction）\n   把多個特徵「合成」新的特徵\n   例：PCA 把 50 維壓成 5 維\n\n3. 降維（Dimensionality Reduction）\n   減少資料的維度數\n   代表方法：PCA（主成分分析）\n   保留最大變異方向，壓縮其他維度'
          },
          {
            label: 'PCA 主成分分析',
            icon: 'lightbulb',
            content: 'PCA（Principal Component Analysis）是最常見的降維方法。它找出資料中「變化最大的方向」當作新的軸，把高維資料投影到少數幾個主成分上，保留大部分資訊但維度大幅降低。\n\n例：100 維資料 → PCA 壓成 10 維，保留 95% 的資訊量。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '數據縮減屬於「數據轉換」階段的技術。\n\nPCA 是最常考的降維方法：\n- 用途：減少維度、保留重要資訊、便於視覺化\n- 屬於探索性分析（EDA）的工具之一\n\n不要跟「資料壓縮」搞混：資料壓縮是檔案壓縮（zip），數據縮減是減少分析維度。'
          }
        ]
      }
    },
    {
      number: 42,
      title: '眾數',
      engTitle: 'Mode',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'functions',
            content: '一組資料中「出現次數最多」的值。三大集中趨勢指標（平均值、中位數、眾數）中，眾數是唯一可以用在類別型資料的。'
          },
          {
            label: '範例',
            icon: 'calculate',
            code: '數值型：\n  成績：70, 80, 80, 80, 90, 95\n  眾數 = 80（出現 3 次最多）\n\n類別型：\n  最愛水果：蘋果, 香蕉, 蘋果, 葡萄, 蘋果\n  眾數 = 蘋果（出現 3 次最多）\n  → 平均值和中位數沒辦法算「水果」的平均\n     但眾數可以！'
          },
          {
            label: '特殊情況',
            icon: 'warning',
            content: '可能有多個眾數（雙峰分佈），也可能不存在眾數（每個值都只出現一次）。這是眾數的限制，不像平均值和中位數一定會有唯一結果。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考法：「哪種情況最適合用眾數？」\n→ 有一個值出現頻率遠高於其他值時。\n\n例：某產品銷量遠高於其他產品 → 用眾數反映「最受歡迎的產品」。\n\n三指標比較：\n- 平均值 → 受極端值影響\n- 中位數 → 不受極端值影響\n- 眾數 → 不受極端值影響，且能用在類別型資料'
          }
        ]
      }
    },
    {
      number: 43,
      title: '偏態分佈',
      engTitle: 'Skewness',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'trending_flat',
            content: '資料分佈不對稱時，就有「偏態」。看尾巴往哪邊拉，就是哪邊偏態。'
          },
          {
            label: '兩種偏態',
            icon: 'compare',
            code: '正偏態（右偏）：\n  尾巴往右邊拉 →→→\n  少數極大值把平均數拉高\n  平均數 > 中位數 > 眾數\n\n  ██\n  ████\n  ██████\n  ████████▁▁▁▁  → 尾巴在右邊\n\n  例：薪資分佈（多數人薪水低，少數人超高薪）\n\n負偏態（左偏）：\n  尾巴往左邊拉 ←←←\n  少數極小值把平均數拉低\n  平均數 < 中位數 < 眾數\n\n          ██\n        ████\n      ██████\n  ▁▁▁████████  → 尾巴在左邊\n\n  例：考試成績（大部分人高分，少數人特別低）'
          },
          {
            label: '對稱分佈',
            icon: 'balance',
            content: '如果分佈完全對稱（像常態分佈），則平均數 = 中位數 = 眾數，三者相等。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '超高頻考點，記住這個口訣：\n\n「平均數 > 中位數 → 正偏態（右偏）」\n「平均數 < 中位數 → 負偏態（左偏）」\n\n記法：平均數被「拉」向尾巴的方向。\n正偏 = 尾巴在右 = 右邊有極大值把平均拉高。\n負偏 = 尾巴在左 = 左邊有極小值把平均拉低。'
          }
        ]
      }
    },
    {
      number: 44,
      title: '假設檢定',
      engTitle: 'Hypothesis Testing',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'science',
            content: '用數據來驗證一個「猜想」是否成立的統計方法。先假設「沒有效果」（虛無假設），然後看數據是否有足夠的證據推翻它。'
          },
          {
            label: '核心概念',
            icon: 'build',
            code: '虛無假設 H0：「沒有差異/沒有效果」\n  例：新藥跟安慰劑效果一樣\n\n對立假設 Ha：「有差異/有效果」\n  例：新藥比安慰劑有效\n\np 值：在 H0 為真的情況下，\n  觀察到這麼極端結果的機率\n\n顯著水準 α：通常設 0.05\n  → 表示願意接受 5% 的風險犯錯\n\n決策規則：\n  p 值 < α → 拒絕 H0（有顯著差異）\n  p 值 >= α → 不拒絕 H0（證據不足）'
          },
          {
            label: '兩種錯誤',
            icon: 'error',
            code: '             H0 其實是真的   H0 其實是假的\n拒絕 H0      Type I 錯誤     正確！\n             （冤枉好人）    （抓到壞人）\n             機率 = α\n\n不拒絕 H0    正確！          Type II 錯誤\n             （放過好人）    （漏掉壞人）\n                             機率 = β\n\nType I = 把沒效果的說成有效果（假陽性）\nType II = 把有效果的說成沒效果（假陰性）'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考法：「p 值 = 0.03，顯著水準 = 0.05」\n→ 0.03 < 0.05 → 拒絕 H0\n→ 有 95% 的信心認為結果非偶然\n\n注意：\n- 「有 5% 的機率犯 Type I 錯誤」→ 正確（α = 0.05）\n- 「有 97% 的信心」→ 錯！信心水準 = 1 - α = 95%，跟 p 值無關'
          }
        ]
      }
    },
    {
      number: 45,
      title: '探索性 vs 驗證性資料分析',
      engTitle: 'EDA vs CDA',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'compare',
            content: '資料分析依目的可分為兩大類：探索性（EDA）是「先看看資料長什麼樣」，驗證性（CDA）是「驗證我的假設對不對」。'
          },
          {
            label: '兩者比較',
            icon: 'table_chart',
            code: '探索性資料分析（EDA）：\n  目的：發現資料中的模式、異常、關聯\n  時機：研究初期，對資料不熟悉時\n  方法：視覺化（圖表）、描述統計\n  心態：「資料告訴我什麼？」（開放探索）\n  產出：提出假設\n\n驗證性資料分析（CDA）：\n  目的：驗證先前提出的假設\n  時機：有了初步假設之後\n  方法：假設檢定、分類、迴歸、分群\n  心態：「我的假設對嗎？」（驗證假設）\n  產出：接受或拒絕假設'
          },
          {
            label: '流程關係',
            icon: 'arrow_forward',
            content: 'EDA 在前，CDA 在後。\n\n先用 EDA 探索資料 → 發現規律、提出假設 → 再用 CDA 驗證假設是否成立。\n\n兩者是互補的，不是互斥的。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考法：「CDA 與 EDA 相比，主要著重於什麼？」\n→ 驗證先前生成的假設並進行深入挖掘。\n\n錯誤選項：\n- 「對資料進行初步描述和視覺化」→ 那是 EDA\n- 「探索數據中潛在的模式和異常」→ 也是 EDA\n- 「排除極端值以提高準確性」→ 那是資料清洗'
          }
        ]
      }
    },
    {
      number: 46,
      title: '全距',
      engTitle: 'Range',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'straighten',
            content: '最簡單的分散度指標：最大值減最小值。一個數字就能看出資料的「展開範圍」有多大。'
          },
          {
            label: '怎麼算',
            icon: 'calculate',
            code: '全距 = 最大值 - 最小值\n\n例：\n  班級A成績：60, 70, 75, 80, 85\n  全距 = 85 - 60 = 25\n\n  班級B成績：40, 65, 75, 80, 100\n  全距 = 100 - 40 = 60\n\n→ 班級B的全距大 = 分散程度大'
          },
          {
            label: '缺點',
            icon: 'warning',
            content: '只看兩個極端值，完全忽略中間的資料。\n\n例：{1, 50, 50, 50, 50, 50, 100}\n和  {1, 10, 20, 50, 80, 90, 100}\n全距都是 99，但分散程度完全不同。\n\n而且極端值（離群值）會嚴重影響全距。一個異常值就能讓全距暴增。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '分散度指標比較：\n- 全距 → 最簡單但最粗糙，受極端值影響\n- IQR 四分位距 → 看中間 50%，不受極端值影響\n- 標準差 → 考慮所有資料點，最常用\n\n全距的限制：「只考慮最大與最小值，未考慮所有觀察值，不能精確反映整體分散程度」。'
          }
        ]
      }
    }
  ]
}
