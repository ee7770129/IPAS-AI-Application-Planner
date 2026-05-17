/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：data-processing-part2.js
 * 功能：資料處理與分析（第 17-31 張）
 * 建立日期：2026-05-17
 * 版本：1.0.0
 */

export default [
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
            label: '範例：顧客年齡分佈',
            icon: 'table_chart',
            chart: {
              data: [
                { label: '20-29歲', value: 80, color: '#FFB74D', tip: '80 人' },
                { label: '30-39歲', value: 120, color: '#FF9800', tip: '120 人（最多）' },
                { label: '40-49歲', value: 60, color: '#FFB74D', tip: '60 人' },
                { label: '50-59歲', value: 30, color: '#FFCC80', tip: '30 人' }
              ]
            },
            content: '30-39歲最多，呈現左偏分佈'
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
            label: '範例：各產品年度銷售總額',
            icon: 'table_chart',
            chart: {
              data: [
                { label: '手機', value: 120, color: '#42A5F5', tip: '120 萬' },
                { label: '筆電', value: 80, color: '#66BB6A', tip: '80 萬' },
                { label: '平板', value: 50, color: '#FFA726', tip: '50 萬' },
                { label: '手錶', value: 30, color: '#AB47BC', tip: '30 萬' }
              ]
            },
            content: '比較不同「類別」的銷售額'
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
    }
  ]
