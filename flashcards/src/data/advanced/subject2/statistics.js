/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：statistics.js
 * 功能：機率統計基礎 - 中級科目二卡片資料
 * 建立日期：2026-05-15
 * 版本：1.0.0
 */

export default {
  id: 'statistics',
  label: '機率統計基礎',
  cards: [
    {
      number: 1,
      title: '敘述統計 vs 推論統計',
      engTitle: 'Descriptive vs Inferential Statistics',
      back: {
        sections: [
          {
            label: '敘述統計',
            icon: 'summarize',
            content: '「描述」和「整理」手邊這批資料的特徵。不做任何預測、不下結論，只是把資料的樣貌呈現出來。'
          },
          {
            label: '推論統計',
            icon: 'psychology',
            content: '從「樣本」推測「母體」的特性。透過假設檢定、信賴區間等方法，對母體做出統計上的推論和判斷。'
          },
          {
            label: '怎麼分',
            icon: 'compare',
            code: '敘述統計：\n  平均數、中位數、眾數 → 集中趨勢\n  標準差、變異數、全距 → 分散程度\n  直方圖、箱型圖       → 視覺化\n  → 「資料長什麼樣？」\n\n推論統計：\n  假設檢定（t 檢定、卡方檢定）\n  信賴區間\n  迴歸分析\n  → 「資料背後的真相是什麼？」'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「概括並整理資料特徵」→ 敘述統計。\n「平均數、標準差、最大值等統計量」→ 敘述統計。\n\n不是推論統計（推論涉及假設檢定和預測）。\n不是機率模型（機率模型描述隨機現象）。\n不是監督式學習（那是機器學習）。'
          }
        ]
      }
    },
    {
      number: 2,
      title: '離散型 vs 連續型機率分佈',
      engTitle: 'Discrete vs Continuous Distribution',
      back: {
        sections: [
          {
            label: '離散型',
            icon: 'casino',
            content: '變數只能取「可數的」值（整數）。像擲骰子只能出 1~6，不會出 3.7。'
          },
          {
            label: '常見離散型分佈',
            icon: 'list',
            code: '二項分佈（Binomial）\n  → N 次試驗中成功的次數\n  例：丟 10 次硬幣，正面出現幾次？\n\n卜瓦松分佈（Poisson）\n  → 單位時間內事件發生的次數\n  例：每小時接到幾通客服電話？\n\n伯努利分佈（Bernoulli）\n  → 單次試驗成功或失敗（0/1）'
          },
          {
            label: '常見連續型分佈',
            icon: 'list',
            code: '常態分佈（Normal）\n  → 鐘型曲線，自然界最常見\n\n指數分佈（Exponential）\n  → 事件之間的等待時間\n\n貝他分佈（Beta）\n  → 機率的機率（貝氏統計常用）\n\n均勻分佈（Uniform）\n  → 每個值出現機率相同'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「常見的離散型機率分佈？」→ 二項分佈。\n\n常態/指數/貝他都是連續型（變數可以取任意實數值）。\n二項分佈是離散型（只能是 0, 1, 2, 3... 次）。'
          }
        ]
      }
    },
    {
      number: 3,
      title: '二項分佈',
      engTitle: 'Binomial Distribution',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'casino',
            content: '重複做 N 次「成功或失敗」的獨立試驗，計算成功次數的機率分佈。每次試驗的成功機率固定為 p。'
          },
          {
            label: '範例',
            icon: 'table_chart',
            code: '丟硬幣 10 次（N=10），每次正面機率 p=0.5\n\n問：恰好出現 7 次正面的機率？\n→ 用二項分佈公式計算\n\n條件：\n  1. 固定次數 N\n  2. 每次獨立\n  3. 每次成功機率相同（p）\n  4. 只有成功/失敗兩種結果'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '二項分佈 = 離散型。「多次伯努利試驗中成功的次數」。\n\n跟常態分佈的關係：當 N 夠大時，二項分佈會趨近常態分佈。'
          }
        ]
      }
    },
    {
      number: 4,
      title: '常態分佈',
      engTitle: 'Normal Distribution',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'ssid_chart',
            content: '最重要的連續型機率分佈。曲線呈鐘型、對稱於平均值。大多數數據集中在平均值附近，越遠離越少。'
          },
          {
            label: '關鍵特性',
            icon: 'lightbulb',
            code: '68-95-99.7 法則：\n  平均值 +/- 1 個標準差 → 包含 68% 資料\n  平均值 +/- 2 個標準差 → 包含 95% 資料\n  平均值 +/- 3 個標準差 → 包含 99.7% 資料\n\n標準常態分佈：\n  平均值 = 0, 標準差 = 1\n  → 任何常態分佈都能標準化成這個'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考法：「下列何者關於常態分佈的敘述錯誤？」\n\n錯誤敘述：「任何類型的數據在樣本數足夠大時，都會呈現常態分佈」。\n\n正確觀念：中央極限定理說的是「樣本平均數的分佈」趨近常態，不是「原始資料本身」變成常態。原始資料的分佈不會因為樣本數增加而改變。'
          }
        ]
      }
    },
    {
      number: 5,
      title: '中央極限定理',
      engTitle: 'Central Limit Theorem, CLT',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'auto_graph',
            content: '不管原始資料是什麼分佈（偏態、均勻、奇怪形狀都行），只要從中反覆抽樣計算「樣本平均值」，這些平均值的分佈就會趨近常態分佈。'
          },
          {
            label: '關鍵區分',
            icon: 'warning',
            code: '會趨近常態的：\n  「樣本平均數」的分佈（抽很多組樣本的平均）\n\n不會趨近常態的：\n  「原始資料本身」的分佈\n\n例：薪資分佈是右偏的\n  抽 1000 組各 30 人的樣本，算每組平均\n  → 這 1000 個平均值的分佈 ≈ 常態\n  → 但原始薪資資料還是右偏的'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '這是最常考的陷阱題：\n\n「任何數據在樣本數夠大時都會呈現常態分佈」→ 錯！\n→ 是「樣本平均數的分佈」趨近常態，不是「原始資料」。\n\n中央極限定理是推論統計（如 t 檢定、信賴區間）的理論基礎。'
          }
        ]
      }
    },
    {
      number: 6,
      title: '偏態分佈與集中趨勢',
      engTitle: 'Skewness & Central Tendency',
      back: {
        sections: [
          {
            label: '三種形狀',
            icon: 'ssid_chart',
            code: '對稱分佈：平均值 ≈ 中位數 ≈ 眾數\n  → 三者都適合\n\n右偏（正偏）：尾巴往右拉\n  平均值 > 中位數 > 眾數\n  例：薪資分佈（少數高薪拉高平均）\n\n左偏（負偏）：尾巴往左拉\n  平均值 < 中位數 < 眾數\n  例：考試成績（大部分高分，少數極低分拉低平均）'
          },
          {
            label: '偏態時該用什麼',
            icon: 'lightbulb',
            content: '有偏態或極端值 → 用中位數（不受極端值影響）。\n不要用平均數（會被極端值拉走）。\n不要用標準差（那是分散程度，不是集中趨勢）。\n不要用變異係數（那是相對分散程度）。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「極端值眾多」→ 中位數。\n「資料明顯左偏」→ 中位數。\n「資料明顯右偏」→ 中位數。\n\n記法：只要資料「不正常」（偏態/極端值），就用中位數。平均數只在資料對稱且無極端值時才可靠。'
          }
        ]
      }
    },
    {
      number: 7,
      title: '標準差（中級進階）',
      engTitle: 'Standard Deviation - Advanced',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'functions',
            content: '衡量資料平均偏離中心值（平均數）的程度。標準差越大，資料越分散；越小，資料越集中在平均值附近。'
          },
          {
            label: '跟其他分散指標的差別',
            icon: 'compare',
            code: '全距（Range）\n  → 最大值 - 最小值\n  → 只看兩個極端，受離群值影響\n\n變異數（Variance）\n  → 標準差的平方\n  → 單位跟原始資料不同（平方單位）\n\n標準差（SD）\n  → 變異數開根號\n  → 單位跟原始資料相同，最常用\n\n四分位距（IQR）\n  → Q3 - Q1\n  → 不受極端值影響'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「資料平均偏離中心值的程度」→ 標準差。\n\n不是「最大與最小值的距離」（那是全距 Range）。\n不是「對稱程度」（那是偏態 Skewness）。\n不是「資料的平均數」（平均數是集中趨勢）。'
          }
        ]
      }
    },
    {
      number: 8,
      title: '假設檢定',
      engTitle: 'Hypothesis Testing',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'gavel',
            content: '用統計方法判斷「樣本中觀察到的現象，是真的有差異，還是只是隨機波動」。像法庭上先假設「被告無罪」，再看證據是否足以推翻。'
          },
          {
            label: '核心概念',
            icon: 'build',
            code: '虛無假設（H0）：「沒有差異」（被告無罪）\n對立假設（H1）：「有差異」（被告有罪）\n\n流程：\n  1. 設定 H0 和 H1\n  2. 選顯著水準 α（通常 0.05）\n  3. 計算檢定統計量（t 值、z 值等）\n  4. 算出 p 值\n  5. 比較 p 值和 α\n     p < α → 拒絕 H0（有顯著差異）\n     p >= α → 無法拒絕 H0（證據不足）'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「p 值小於 0.05」→ 拒絕虛無假設（有顯著差異）。\n「判斷顯著性的核心指標」→ p 值。\n\nz-score 和 t 值是「計算工具」，p 值才是「判斷依據」。\n標準差是「分散程度」，不是用來判斷顯著性的。'
          }
        ]
      }
    },
    {
      number: 9,
      title: 'p 值',
      engTitle: 'p-value',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'functions',
            content: '假設 H0 是對的（沒有差異），你觀察到這麼極端的結果的機率有多少。p 值越小，H0 越不可信。'
          },
          {
            label: '怎麼判斷',
            icon: 'rule',
            code: 'p < 0.05 → 拒絕 H0（統計上顯著）\np < 0.01 → 強力拒絕 H0（非常顯著）\np >= 0.05 → 無法拒絕 H0（證據不足）\n\n注意：「無法拒絕 H0」不等於「接受 H0」\n→ 只是證據不夠強，不代表 H0 一定對'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「p 值小於顯著水準 0.05」→ 拒絕虛無假設。\n\n不是「接受虛無假設」（反了）。\n不是「樣本數不足」（p 值跟樣本數沒有直接對應）。\n不是「結果不顯著」（p < 0.05 就是顯著）。'
          }
        ]
      }
    },
    {
      number: 10,
      title: 't 檢定',
      engTitle: 't-test',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'functions',
            content: '比較平均數是否有顯著差異的假設檢定方法。母體標準差未知時使用（幾乎所有實務場景都未知）。'
          },
          {
            label: '三種類型',
            icon: 'list',
            code: '單樣本 t 檢定：\n  一組樣本 vs 一個已知值\n  例：這批產品的平均重量跟標準 500g 有差嗎？\n\n獨立樣本 t 檢定：\n  兩組獨立樣本互相比較\n  例：A 班和 B 班的成績有差嗎？\n\n成對樣本 t 檢定：\n  同一組人的前後比較\n  例：吃藥前 vs 吃藥後的血壓有差嗎？'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「比較一組樣本與既定平均值的差異」→ 單樣本 t 檢定。\n\n不是「比較兩群獨立樣本」（那是獨立樣本 t 檢定）。\n不是「分析線性關係」（那是迴歸分析）。\n不是「檢定類別分佈」（那是卡方檢定）。'
          }
        ]
      }
    },
    {
      number: 11,
      title: 'Z-score 進階解讀',
      engTitle: 'Z-Score Interpretation',
      back: {
        sections: [
          {
            label: '基礎複習',
            icon: 'refresh',
            content: 'Z-score = (X - 平均值) / 標準差。衡量一個數據點離平均值有幾個標準差。'
          },
          {
            label: '正負號的意義',
            icon: 'swap_vert',
            code: 'Z = +2 → 比平均值「高」2 個標準差\nZ = -2 → 比平均值「低」2 個標準差\nZ =  0 → 剛好等於平均值\n\n        低 ←──── 平均 ────→ 高\n        ...Z=-2...Z=-1...Z=0...Z=+1...Z=+2...\n                         ↑\n                      平均值'
          },
          {
            label: 'Z-score 不等於原始值',
            icon: 'warning',
            content: 'Z = 2 不代表「原始數值是 2」！\n\n例：平均值 = 100, 標準差 = 10\nZ = 2 → 原始值 = 100 + 2*10 = 120\n\nZ-score 是「相對位置」，不是「絕對值」。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「Z-Score = 2」→ 該數據點比平均值高 2 個標準差。\n\n不是「原始數值為 2」（Z-score 是相對值）。\n不是「比平均值低 2 個標準差」（正號是高，負號才是低）。\n不是「一定是異常值」（一般 |Z| > 3 才視為異常，Z = 2 在常態分佈中約 2.3% 的資料會超過）。'
          }
        ]
      }
    },
    {
      number: 12,
      title: 'pandas describe()',
      engTitle: 'pandas describe() Method',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'code',
            content: 'Python pandas 套件中，一行就能算出一個欄位所有敘述統計量的方法。是資料探索的第一步。'
          },
          {
            label: '輸出什麼',
            icon: 'table_chart',
            code: "df['總銷售額'].describe()\n\n輸出：\n  count    1000      ← 資料筆數\n  mean     5200      ← 平均值\n  std      1800      ← 標準差\n  min       200      ← 最小值\n  25%      3800      ← Q1（第 25 百分位）\n  50%      5100      ← 中位數\n  75%      6500      ← Q3（第 75 百分位）\n  max     15000      ← 最大值"
          },
          {
            label: '跟其他方法的差別',
            icon: 'compare',
            code: ".describe() → 一次算出所有敘述統計量\n.sum()      → 只算總和（一個數字）\n.sort_values() → 排序，不算統計量\n.stats()    → 不存在，pandas 沒有這個方法"
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「計算敘述性統計量（平均值、標準差等）」→ describe()。\n\nsum() 只算加總。sort_values() 是排序。stats() 根本不存在。'
          }
        ]
      }
    },
    {
      number: 13,
      title: '偏態值判讀',
      engTitle: 'Skewness Value Interpretation',
      back: {
        sections: [
          {
            label: '三種偏態',
            icon: 'ssid_chart',
            code: '左偏（負偏）Skewness < 0：\n  尾巴往左拉，大部分資料集中在右邊\n\n          ╱╲\n        ╱    ╲\n  ____╱       ╲___\n  ←尾巴    集中→\n\n對稱 Skewness = 0：\n  完美鐘型，左右對稱\n\n       ╱╲\n     ╱    ╲\n  __╱      ╲__\n\n右偏（正偏）Skewness > 0：\n  尾巴往右拉，大部分資料集中在左邊\n\n    ╱╲\n  ╱    ╲\n ╱       ╲____\n  ←集中    尾巴→'
          },
          {
            label: '怎麼判斷',
            icon: 'lightbulb',
            content: '看「尾巴」往哪邊拉：\n- 尾巴往左 = 左偏 = Skewness < 0\n- 尾巴往右 = 右偏 = Skewness > 0\n\n記法：「尾巴的方向 = 偏的方向 = Skewness 的正負號」'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '看到分佈圖，先找「尾巴往哪邊拉長」：\n- 尾巴在左邊 → Skewness < 0（左偏/負偏）\n- 尾巴在右邊 → Skewness > 0（右偏/正偏）\n- 對稱 → Skewness = 0\n\n題目的圖中尾巴往左拉長 → Skewness < 0。\n\n偏態資料用中位數代表集中趨勢（不管左偏右偏都一樣）。'
          }
        ]
      }
    },
    {
      number: 14,
      title: 'CDF 與 PDF',
      engTitle: 'CDF & PDF',
      back: {
        sections: [
          {
            label: 'PDF 機率密度函數',
            icon: 'ssid_chart',
            content: '描述連續隨機變數在「某個值附近」出現的相對機率有多高。曲線下面積代表機率。整條曲線下面積 = 1。',
            code: 'PDF（常態分佈）：\n\n        ╱╲\n      ╱    ╲\n    ╱        ╲\n  ╱            ╲\n─╱──────────────╲──\n        ↑\n     平均值\n\n曲線越高 = 那個值附近的機率密度越大'
          },
          {
            label: 'CDF 累積分佈函數',
            icon: 'trending_up',
            content: 'PDF 從左邊開始一路「累加」起來的結果。CDF(x) = P(X <= x)，也就是「隨機變數小於等於 x 的機率」。',
            code: 'CDF：\n\n  1.0 ─ ─ ─ ─ ─ ─ ─ ─ ╱─────\n                      ╱\n  0.5 ─ ─ ─ ─ ─ ╱──\n                ╱\n  0.0 ────────╱\n\n從 0 開始，永遠遞增，最後趨近 1'
          },
          {
            label: '兩者關係',
            icon: 'link',
            code: 'CDF = PDF 從 -∞ 到 x 的積分\nPDF = CDF 的微分\n\nPDF → 每個點的機率密度有多高\nCDF → 到這個點為止累計了多少機率'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「CDF 的數學定義」→ PDF 的積分。\n\n不是「PDF 的平均值」（那是期望值）。\n不是「PDF 的離散總和」（連續型用積分不是加總）。\n不是「PDF 的標準差」（那是分散程度）。'
          }
        ]
      }
    },
    {
      number: 15,
      title: '吉尼不純度',
      engTitle: 'Gini Impurity',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'pie_chart',
            content: '衡量一組資料「有多混亂」的指標。決策樹用它來決定每一步該怎麼分割。不純度越低，資料越純（都是同一類）。'
          },
          {
            label: '怎麼算',
            icon: 'calculate',
            code: 'Gini = 1 - Σ(p_i²)\n\np_i = 第 i 類的比例\n\n例：A:5, B:5（共 10 筆）\n  p_A = 0.5, p_B = 0.5\n  Gini = 1 - (0.5² + 0.5²) = 1 - 0.5 = 0.5\n\n最純（全同類）：Gini = 0\n最亂（均勻分佈）：Gini = 1 - 1/K（K 是類別數）'
          },
          {
            label: '正規化吉尼不純度',
            icon: 'functions',
            code: 'Normalized Gini = Gini / Gini_max\n\nGini_max = 1 - 1/K\n  K=2 類時 Gini_max = 0.5\n\n例：A:5, B:5\n  Gini = 0.5\n  Normalized = 0.5 / 0.5 = 1.0\n  → 最大不純度（兩類一樣多，最混亂）\n\n例：A:10, B:0\n  Gini = 0\n  Normalized = 0 / 0.5 = 0\n  → 最純（全是同一類）'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'A:5, B:5 的正規化 Gini = 1（最亂）。\nA:10, B:0 的正規化 Gini = 0（最純）。\n\n兩類各半 = 最大不純度 = 1。'
          }
        ]
      }
    },
    {
      number: 16,
      title: '卜瓦松分佈應用',
      engTitle: 'Poisson Distribution Application',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'casino',
            content: '描述「固定時間或空間內，事件發生幾次」的離散型機率分佈。事件必須是隨機、獨立、且平均發生率固定。'
          },
          {
            label: '適用條件',
            icon: 'checklist',
            code: '1. 事件在時間/空間中隨機發生\n2. 事件彼此獨立\n3. 平均發生率固定（如每小時 20 通）\n4. 關心的是「次數」（0, 1, 2, 3...）\n\n例：每小時接 20 通電話\n  → 每分鐘平均 20/60 ≈ 0.33 通\n  → 「每分鐘接到幾通」→ 卜瓦松分佈'
          },
          {
            label: '跟其他分佈的差別',
            icon: 'compare',
            code: '卜瓦松 → 固定時間內事件發生「幾次」\n指數   → 兩次事件之間「等多久」\n二項   → N 次試驗中成功「幾次」\n常態   → 連續型，鐘型對稱\n均勻   → 每個值機率相同'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「每分鐘接到幾通來電」+「事件獨立」+「機率與時間成正比」→ 卜瓦松分佈。\n\n不是均勻分佈（每個值機率不相同）。\n不是指數分佈（那是問「等多久」，不是「幾次」）。\n不是常態分佈（來電次數是離散的 0,1,2...）。'
          }
        ]
      }
    },
    {
      number: 17,
      title: 'Z-score 計算題',
      engTitle: 'Z-Score Calculation Problem',
      back: {
        sections: [
          {
            label: '公式複習',
            icon: 'functions',
            code: 'Z = (X - 平均值) / 標準差'
          },
          {
            label: '完整解題範例',
            icon: 'calculate',
            code: '已知：\n  平均值 = 2,000 元\n  標準差 = 400 元\n  某筆交易 X = 3,200 元\n\nZ = (3,200 - 2,000) / 400\n  = 1,200 / 400\n  = 3\n\n判斷：\n  公司規定 |Z| >= 3 為異常\n  Z = 3，|Z| = 3 >= 3\n  → 應標記為異常值'
          },
          {
            label: '解題步驟',
            icon: 'lightbulb',
            code: '1. 代入公式算 Z\n2. 取絕對值 |Z|\n3. 跟閾值比較\n   |Z| >= 閾值 → 異常\n   |Z| < 閾值 → 正常'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考題會直接給你平均值、標準差和數據點，要你算 Z-score 並判斷是否異常。\n\n記住公式：Z = (X - 平均) / 標準差\n代數字進去算就對了。'
          }
        ]
      }
    },
    {
      number: 18,
      title: '信賴區間與 p 值判讀',
      engTitle: 'Confidence Interval & p-value',
      back: {
        sections: [
          { label: '怎麼搭配判讀', icon: 'build', code: 'H0：平均值 = 100 萬, α = 0.05\n結果：p = 0.08, 95% CI = [95萬, 108萬]\n\np = 0.08 > 0.05 → 無法拒絕 H0\n100萬落在 CI [95, 108] 內 → 跟 H0 一致\n→ 兩個方式都說「無法拒絕」\n\n若 α 改 0.10：p=0.08 < 0.10 → 就顯著了' },
          { label: '考試重點', icon: 'school', content: '「100萬落在信賴區間內」→ 無法拒絕 H0。\n信賴區間寬度跟樣本數和變異都有關，不是只跟顯著水準有關。' }
        ]
      }
    },
    {
      number: 19,
      title: '常態近似二項分佈',
      engTitle: 'Normal Approximation to Binomial',
      back: {
        sections: [
          { label: '條件', icon: 'functions', code: '兩個都要滿足：\n  np >= 5\n  n(1-p) >= 5\n\n例：n=5000, p=0.4\n  np = 2000 >= 5 ✓\n  n(1-p) = 3000 >= 5 ✓\n  → 可以用常態近似' },
          { label: '考試重點', icon: 'school', content: '「np 與 n(1-p) 皆大於 5」→ 才能用常態近似。\n不是「樣本大就能直接近似」。不是「只適用 p=0.5」。' }
        ]
      }
    },
    {
      number: 20,
      title: '分位數回歸',
      engTitle: 'Quantile Regression',
      back: {
        sections: [
          { label: '是什麼', icon: 'ssid_chart', content: '不像一般迴歸只預測平均值，可以預測任意分位數（第 5%、50%、95%）。特別適合分析尾部極端風險。' },
          { label: '考試重點', icon: 'school', content: '「非對稱分佈」+「極端損失」+「不依賴常態假設」→ 分位數回歸。\n\n不是「線性迴歸+常態殘差」。不是「裁剪 ±3σ」（丟極端值反而看不到風險）。' }
        ]
      }
    },
    {
      number: 21,
      title: '雙比例 Z 檢定',
      engTitle: 'Two-proportion Z-test',
      back: {
        sections: [
          { label: '是什麼', icon: 'functions', content: '比較兩組的「比例/良率」是否有顯著差異。跟 t 檢定（比較平均數）不同。' },
          { label: '情境', icon: 'table_chart', code: '原生產線良率 95%\n新生產線良率 97%\n→ 2% 差異是真的還是隨機？\n→ 雙比例 Z 檢定' },
          { label: '跟其他檢定比較', icon: 'compare', code: 't 檢定 → 比較「平均數」\nZ 比例檢定 → 比較「比例」\n卡方檢定 → 比較「分佈是否一致」\nANOVA → 比較「三組以上平均數」' },
          { label: '考試重點', icon: 'school', content: '「比較兩條生產線良率差異」→ 雙比例 Z 檢定。\n不是 t 檢定（比較平均數不是比例）。' }
        ]
      }
    },
    {
      number: 22,
      title: '卜瓦松 PMF/CDF 程式碼',
      engTitle: 'Poisson PMF/CDF in Python',
      back: {
        sections: [
          {
            label: '程式碼解讀',
            icon: 'code',
            code: 'from scipy.stats import poisson\nlambda_poisson = 5  # 平均每小時 5 個瑕疵品\n\n# PMF: 恰好 5 個瑕疵品的機率\npoisson.pmf(5, lambda_poisson)\n  → P(X = 5)\n  → 「恰好」5 個的機率\n\n# CDF: 小於等於 10 個的機率\npoisson.cdf(10, 5)\n  → P(X <= 10)\n  → 「10 個以下」的累積機率\n  → 不是「大於等於 10」！'
          },
          {
            label: 'PMF vs CDF',
            icon: 'compare',
            code: 'PMF（機率質量函數）：\n  P(X = k) → 「恰好」k 次的機率\n\nCDF（累積分佈函數）：\n  P(X <= k) → 「k 次以下」的累積機率\n\n如果要 P(X >= k)：\n  = 1 - P(X <= k-1)\n  = 1 - poisson.cdf(k-1, lambda)'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '正確敘述：「卜瓦松分佈的適用條件為事件彼此獨立，且平均發生率固定」。\n\nlambda = 5 是「平均」5 個，不是「最多」5 個。\npmf(5, 5) 是「恰好 5 個」的機率，不是「小於 5 個」。\ncdf(10, 5) 是「小於等於 10 個」，不是「大於等於 10 個」。'
          }
        ]
      }
    }
  ]
}
