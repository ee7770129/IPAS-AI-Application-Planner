/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：statistics-part2.js
 * 功能：機率統計基礎（第 12-22 張）
 * 建立日期：2026-05-17
 * 版本：1.0.0
 */
export default [
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
    },
    {
      number: 23,
      title: 'ANOVA 變異數分析',
      engTitle: 'Analysis of Variance',
      supplementary: true,
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'functions',
            content: '比較「三組以上」的平均值是否有顯著差異。t 檢定只能比兩組，ANOVA 可以比多組。核心原理：比較「組間變異」和「組內變異」的大小。'
          },
          {
            label: '怎麼判斷',
            icon: 'build',
            code: 'F 統計量 = 組間變異 / 組內變異\n\n如果各組平均值差不多：\n  組間變異小 → F 值小 → 不顯著\n\n如果各組平均值差很多：\n  組間變異大 → F 值大 → 顯著\n\n判斷：p < 0.05 → 至少有一組不同\n但不知道哪一組！\n→ 需要事後檢定（Post-hoc Test）'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「比較三組以上的平均值」→ ANOVA（不是多次 t 檢定）。\n\n多次 t 檢定會讓型一錯誤膨脹。\n\n常用事後檢定：Tukey HSD、Bonferroni 校正。\n\nt 檢定 → 兩組。ANOVA → 三組以上。卡方 → 分佈。'
          }
        ]
      }
    },
    {
      number: 24,
      title: '卡方檢定',
      engTitle: 'Chi-Square Test',
      supplementary: true,
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'grid_on',
            content: '用來檢定「類別型資料」的分佈是否符合預期，或兩個類別變數之間是否有關聯。跟 t 檢定不同，t 檢定比較的是平均數，卡方比較的是「出現次數/比例」。'
          },
          {
            label: '兩種用途',
            icon: 'compare',
            code: '適合度檢定（Goodness of Fit）：\n  觀察的分佈 vs 預期的分佈\n  例：骰子六面出現次數是否均勻？\n\n獨立性檢定（Independence）：\n  兩個類別變數是否有關聯\n  例：性別跟購買偏好有沒有關？\n\n  都用列聯表（交叉表）進行'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「類別資料的分佈是否一致」→ 卡方適合度檢定。\n「兩個類別變數是否獨立」→ 卡方獨立性檢定。\n\n不是 t 檢定（t 比較平均值）。\n不是 ANOVA（ANOVA 也是比較平均值）。\n不是相關係數（相關係數看連續變數）。'
          }
        ]
      }
    },
    {
      number: 25,
      title: '貝氏定理',
      engTitle: 'Bayes\' Theorem',
      supplementary: true,
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'psychology',
            content: '在已知「新證據」的情況下，更新原來的信念（機率）。核心公式：P(A|B) = P(B|A) * P(A) / P(B)。'
          },
          {
            label: '白話範例',
            icon: 'lightbulb',
            code: '情境：1% 的人有病，檢測準確率 99%\n\n已知：\n  P(有病) = 0.01（先驗機率）\n  P(陽性|有病) = 0.99\n  P(陽性|沒病) = 0.01（偽陽性）\n\nP(有病|陽性) = ?\n  = 0.99 * 0.01 / (0.99*0.01 + 0.01*0.99)\n  = 0.0099 / 0.0198\n  = 50%\n\n即使檢測 99% 準確，陽性也只有 50% 真的有病！\n→ 因為「有病」的先驗機率太低了'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '三個關鍵機率：\n- 先驗機率 P(A) → 看到證據前的信念\n- 似然 P(B|A) → 假設 A 成立，看到 B 的機率\n- 後驗機率 P(A|B) → 看到證據後更新的信念\n\n「低盛行率 + 高準確率檢測」→ 陽性預測值可能很低（貝氏定理的經典應用）。'
          }
        ]
      }
    },
    {
      number: 26,
      title: '條件機率',
      engTitle: 'Conditional Probability',
      supplementary: true,
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'functions',
            content: '在已知事件 B 發生的前提下，事件 A 發生的機率。寫作 P(A|B)，讀作「在 B 的條件下 A 的機率」。'
          },
          {
            label: '公式與範例',
            icon: 'calculate',
            code: 'P(A|B) = P(A 且 B) / P(B)\n\n例：一副撲克牌\n  P(紅心|紅色) = ?\n  P(紅心 且 紅色) = 13/52（紅心本身就是紅色）\n  P(紅色) = 26/52\n  P(紅心|紅色) = (13/52) / (26/52) = 1/2\n\n獨立事件：\n  P(A|B) = P(A) → B 的發生不影響 A\n  例：丟兩次硬幣，第一次正面不影響第二次'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: 'P(A|B) ≠ P(B|A)（常見混淆！）\n\n例：P(下雨|烏雲) ≠ P(烏雲|下雨)\n有烏雲不一定下雨，但下雨幾乎都有烏雲。\n\n條件機率是貝氏定理、朴素貝氏分類器的基礎。'
          }
        ]
      }
    },
    {
      number: 27,
      title: '共變異數 vs 相關係數',
      engTitle: 'Covariance vs Correlation',
      supplementary: true,
      back: {
        sections: [
          {
            label: '兩者差別',
            icon: 'compare',
            code: '共變異數（Covariance）：\n  衡量兩個變數是否「一起變大或一起變小」\n  Cov > 0 → 正向關係\n  Cov < 0 → 反向關係\n  Cov = 0 → 無線性關係\n  缺點：沒有固定範圍，受量級影響\n\n相關係數（Correlation）：\n  = 共變異數 / (標準差A * 標準差B)\n  範圍固定在 [-1, +1]\n  r = +1 → 完美正相關\n  r = -1 → 完美負相關\n  r = 0  → 無線性關係\n  → 就是「標準化」的共變異數'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「衡量線性關係的強度和方向」→ 相關係數（而非共變異數）。\n\n因為相關係數有固定範圍 [-1,1]，可以比較不同變數對之間的關係強度。共變異數沒有固定範圍，無法直接比較。\n\n注意：只能捕捉線性關係，非線性關係可能 r=0 但其實有關。'
          }
        ]
      }
    },
    {
      number: 28,
      title: '型一錯誤 vs 型二錯誤',
      engTitle: 'Type I Error vs Type II Error',
      supplementary: true,
      back: {
        sections: [
          {
            label: '兩種錯誤',
            icon: 'error',
            code: '型一錯誤（False Positive）：\n  H0 是對的，但你拒絕了它\n  = 沒病說有病 = 誤報\n  機率 = α（顯著水準，通常 0.05）\n\n型二錯誤（False Negative）：\n  H0 是錯的，但你沒拒絕它\n  = 有病說沒病 = 漏報\n  機率 = β\n\n檢定力（Power）= 1 - β\n  = 正確拒絕錯誤 H0 的能力'
          },
          {
            label: '跟 ML 的連結',
            icon: 'link',
            code: '假設檢定          機器學習\n型一錯誤(FP)  =  假陽性（沒病判有病）\n型二錯誤(FN)  =  假陰性（有病判沒病）\nα             ≈  1 - Precision\nβ             ≈  1 - Recall\n檢定力         ≈  Recall（TPR）'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「型一錯誤」= 拒絕了正確的 H0 = 假陽性。\n「型二錯誤」= 沒拒絕錯誤的 H0 = 假陰性。\n\nα 和 β 是蹺蹺板：\n降低 α（更嚴格）→ β 會上升（更容易漏）。\n\n「降低型一錯誤」→ 提高顯著水準門檻（如 α=0.01）。'
          }
        ]
      }
    }
]
