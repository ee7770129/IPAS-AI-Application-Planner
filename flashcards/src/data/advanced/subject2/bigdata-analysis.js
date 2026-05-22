/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：bigdata-analysis.js
 * 功能：大數據分析方法與工具 - 中級科目二卡片資料
 * 建立日期：2026-05-15
 * 版本：1.0.0
 */

export default {
  id: 'bigdata-analysis',
  label: '大數據分析方法與工具',
  cards: [
    {
      number: 1,
      title: '異常偵測情境辨析',
      engTitle: 'Anomaly Detection Scenario Analysis',
      back: {
        sections: [
          { label: '什麼情境用異常偵測', icon: 'report_problem', content: '核心判斷：要找的是「跟正常明顯不同的少數異常」，通常沒有足夠的異常標籤可以訓練。' },
          { label: '情境辨析', icon: 'compare', code: '異常偵測 ✓\n  「偵測與平常交易行為明顯不同的可疑交易」\n  → 找的是「偏離正常」的少數異常\n\n預測/迴歸 ✗\n  「預測商品是否供貨短缺」→ 預測問題\n  「預測次日登入量」→ 時間序列預測\n\n分類 ✗\n  「預測顧客是否違約」→ 二元分類\n  （有明確的正/負標籤可訓練）' },
          { label: '考試重點', icon: 'school', content: '判斷關鍵字：\n- 「偵測與正常明顯不同」→ 異常偵測\n- 「預測是否...」→ 分類或迴歸\n- 「預測未來數值」→ 時間序列預測\n\n異常偵測 ≠ 分類。異常偵測通常「沒有異常標籤」。' }
        ]
      }
    },
    {
      number: 2,
      title: '梯度提升樹',
      engTitle: 'Gradient Boosting Tree, GBT',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'forest',
            content: '一種集成學習方法。多棵決策樹「串聯」，每棵新樹專注修正前一棵的錯誤，逐步提升整體預測能力。XGBoost、LightGBM 都屬於這類。'
          },
          {
            label: '跟隨機森林的差別',
            icon: 'compare',
            code: '隨機森林（Bagging）：\n  多棵樹「各自獨立」訓練 → 投票\n  → 降低變異（減少過擬合）\n\n梯度提升樹（Boosting）：\n  多棵樹「串聯」，後面修前面的錯\n  → 降低偏差（減少欠擬合）\n  → 但過擬合風險較高\n\n      樹1 → 殘差 → 樹2 → 殘差 → 樹3\n      每棵樹學的是前面的「錯誤」'
          },
          {
            label: '編碼注意事項',
            icon: 'warning',
            content: '樹模型可以直接處理數值型特徵，但類別型特徵要小心：\n\n- Label Encoding → 可能讓模型誤判類別間有順序，導致特徵重要性偏誤\n- One-hot → 安全但類別多時維度爆炸\n- Target Encoding → 效果好但要防過擬合（不會自動消除）\n- PCA 降維 → 類別數少時沒必要'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '梯度提升樹搭配 Label Encoding 的風險：「模型誤判類別間存在順序關係，導致特徵重要性偏誤」。\n\nOne-hot 不會減少記憶體（反而會增加）。\nTarget Encoding 不會自動消除過擬合。\nPCA 不適合用在類別數量少的情況。'
          }
        ]
      }
    },
    { number: 3, title: '數據密度原則', engTitle: 'Data Density (Tufte)', back: { sections: [
      { label: '是什麼', icon: 'grid_view', content: 'Tufte 提出：在有限版面中盡可能呈現最多有意義的資訊，同時保持清晰。每個像素都要有用。' },
      { label: '考試重點', icon: 'school', content: '「同一頁面呈現多區域趨勢」→ 用顏色區分、整合同一圖表、比例一致。\n不是「分成多張獨立圖」。不是「移除所有輔助線」。不是「轉成表格」。' }
    ] } },
    { number: 4, title: '熱力圖 + 相關矩陣', engTitle: 'Heatmap + Correlation Matrix', back: { sections: [
      { label: '是什麼', icon: 'grid_on', content: '用顏色深淺表示數值大小的矩陣圖。搭配相關係數矩陣，一眼看出哪些變數高度相關。' },
      { label: '怎麼看', icon: 'table_chart', code: '     A     B     C     D\nA  [1.0] [0.9] [0.2] [-0.3]\nB  [0.9] [1.0] [0.1] [-0.2]\nC  [0.2] [0.1] [1.0] [0.7]\nD  [-0.3][-0.2][0.7] [1.0]\n\n深紅 = 高度正相關（A和B = 0.9）\n深藍 = 高度負相關\n淺色 = 低相關' },
      { label: '考試重點', icon: 'school', content: '「多變數相關性」+「單一圖表快速呈現」→ 熱力圖+相關矩陣。\n不是直方圖。不是散佈圖（只看兩個）。不是雙軸折線圖。' }
    ] } },
    { number: 5, title: '對數刻度視覺化', engTitle: 'Log Scale Visualization', back: { sections: [
      { label: '是什麼', icon: 'show_chart', content: '把圖表軸從等距改成對數刻度（10,100,1000,10000）。適合資料跨度極大的情況。' },
      { label: '考試重點', icon: 'school', content: '「IQR 極小但上鬚很長」+「凸顯消費層級差異」→ 對數刻度。\n不是「移除離群值」。不是「等距分箱」。不是「折線圖看時間趨勢」。' }
    ] } },
    { number: 6, title: '關聯規則學習', engTitle: 'Association Rule Learning', back: { sections: [
      { label: '三個指標', icon: 'functions', code: '支持度（Support）= 12%\n  A和B同時出現佔全部12%\n\n信賴度（Confidence）= 50%\n  看了A的人中50%也看B\n\n提升度（Lift）= 1.8\n  比隨機機率高1.8倍\n  Lift > 1 → 正相關\n  Lift = 1 → 無關\n  Lift < 1 → 負相關' },
      { label: '考試重點', icon: 'school', content: '「信賴度50%」→ 有明顯傾向。\n「Lift > 1」→ 正相關不是無關。\n「Support 12%」→ 不代表沒價值。' }
    ] } },
    { number: 7, title: '近似分位數', engTitle: 'Approximate Quantile', back: { sections: [
      { label: '是什麼', icon: 'speed', content: '超大量資料中精確算分位數太慢，用近似演算法在可接受誤差內快速估算。' },
      { label: '考試重點', icon: 'school', content: '核心：「可容忍誤差範圍內快速估算以支援即時分析」。\n不是「確保完全精確」。不是「ML 預測」。不是「只能批次」。' }
    ] } },
    { number: 8, title: 'DBSCAN 高維失效', engTitle: 'DBSCAN High-dim Failure', back: { sections: [
      { label: '問題', icon: 'error', content: '高維（>500維）下所有點距離差不多（距離趨同），ε 怎麼設都分不出密疏，全部變雜訊。' },
      { label: '原因', icon: 'lightbulb', code: '「維度災難」：\n低維：近的很近、遠的很遠 → ε 好選\n高維：距離都差不多 → ε 怎麼設都不對\n\n解法：先降維（PCA/UMAP）再跑 DBSCAN' },
      { label: '考試重點', icon: 'school', content: '「高維下全部判為雜訊」→ 距離趨同導致 ε 失效。\n不是距離函數錯誤。不是 MinPts 太小。不是過度標準化。' }
    ] } },
    { number: 9, title: '皮爾森相關係數', engTitle: 'Pearson Correlation', back: { sections: [
      { label: '怎麼解讀', icon: 'calculate', code: 'r = +1   → 完美正相關\nr = +0.8 → 強正相關\nr =  0   → 無線性關係\nr = -1   → 完美負相關' },
      { label: '考試重點', icon: 'school', content: '「衡量線性關係強度與方向」+「散佈圖線性」+「無離群值」→ 皮爾森。\n不是 RMSE/MAE（預測誤差）。不是共變異數（沒有固定範圍）。' }
    ] } },
    { number: 10, title: '分層交叉驗證', engTitle: 'Stratified K-Fold CV', back: { sections: [
      { label: '是什麼', icon: 'grid_view', content: '分 K 折時確保每一折的類別比例跟原始資料一致。解決不平衡時普通 K-Fold 某折沒有少數類別的問題。' },
      { label: '考試重點', icon: 'school', content: '「類別不平衡」+「交叉驗證可能偏差」→ 分層交叉驗證。\n不是「降低 K 值」。不是「拔靴法」。不是「調測試集比例」。' }
    ] } },
    { number: 11, title: 'LOOCV 留一交叉驗證', engTitle: 'Leave-One-Out CV', back: { sections: [
      { label: '是什麼', icon: 'filter_1', content: '每次留 1 筆當測試，其餘 N-1 筆訓練，跑 N 次取平均。K-Fold 的極端情況（K=N）。' },
      { label: '虛擬碼', icon: 'code', code: 'for i = 1 到 N:\n  test = 第 i 筆\n  train = 其餘 N-1 筆\n  訓練 → 預測第 i 筆 → 記錄\n\n最終指標 = N 次平均' },
      { label: '考試重點', icon: 'school', content: '看到「for i=1到N, 每次留第 i 筆測試」→ LOOCV。\n不是 Hold-out（只分一次）。不是 K-Fold（K 通常 5 或 10）。不是 Bootstrap（有放回抽樣）。' }
    ] } },
    {
      number: 12,
      title: 'K-means 虛擬碼辨識',
      engTitle: 'K-means Pseudocode Recognition',
      back: {
        sections: [
          {
            label: '虛擬碼長這樣',
            icon: 'code',
            code: 'Input: N 筆資料, K 群數\n\n1. 隨機選 K 個點當初始中心\n2. 重複直到收斂：\n   a. 分群：每個點歸到最近的中心\n   b. 更新中心：算每群所有點的平均值\n3. 中心不再變動 → 停止\n\nOutput: 每筆資料的群編號 + K 個中心點'
          },
          {
            label: '辨識關鍵字',
            icon: 'lightbulb',
            code: '看到這些就是 K-means：\n  「隨機選 K 個初始中心」\n  「計算距離，歸到最近的中心」\n  「更新中心為該群的平均值」\n  「重複直到中心不再變動」\n\n不是 DBSCAN（DBSCAN 用 ε 和 MinPts，不用 K）\n不是階層式（階層式是合併/分裂，不是更新中心）\n不是 GMM（GMM 用機率分佈，不是距離）'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '虛擬碼辨識題的判斷方式：\n- 有「K 個中心」+「距離」+「更新平均」→ K-means\n- 有「ε」+「MinPts」+「密度」→ DBSCAN\n- 有「合併最近的兩群」→ 階層式\n- 有「機率分佈」+「EM 演算法」→ GMM\n- 有「留一筆測試」+「for i=1到N」→ LOOCV'
          }
        ]
      }
    },
    {
      number: 13,
      title: '混淆矩陣',
      engTitle: 'Confusion Matrix',
      supplementary: true,
      back: {
        sections: [
          {
            label: '四個格子',
            icon: 'grid_on',
            code: '              預測正   預測負\n實際正    TP（真正） FN（假負）\n實際負    FP（假正） TN（真負）\n\nTP = 有病判有病（正確）\nFP = 沒病判有病（誤報）\nFN = 有病判沒病（漏報）\nTN = 沒病判沒病（正確）'
          },
          {
            label: '衍生指標',
            icon: 'functions',
            code: 'Accuracy  = (TP+TN) / 全部\nPrecision = TP / (TP+FP)  → 預測正的有多準\nRecall    = TP / (TP+FN)  → 真正正的找到多少\nF1        = 2*P*R / (P+R) → P和R的調和平均\n\nSpecificity = TN / (TN+FP) → 真負的判對多少\nFPR = FP / (FP+TN) = 1 - Specificity'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '混淆矩陣是所有分類指標的基礎。\n\n「漏診風險高」→ 重視 Recall（降低 FN）。\n「誤報成本高」→ 重視 Precision（降低 FP）。\n「類別不平衡」→ 不看 Accuracy，看 F1。'
          }
        ]
      }
    },
    {
      number: 14,
      title: '迴歸評估指標',
      engTitle: 'Regression Metrics: RMSE, MAE, R-squared',
      supplementary: true,
      back: {
        sections: [
          {
            label: '三大指標',
            icon: 'functions',
            code: 'MAE（平均絕對誤差）：\n  每筆誤差取絕對值再平均\n  → 直觀，單位跟原始資料相同\n  → 對極端值不敏感\n\nRMSE（均方根誤差）：\n  每筆誤差平方 → 平均 → 開根號\n  → 對極端值更敏感（平方放大大誤差）\n  → 最常用的迴歸指標\n\nR-squared（決定係數）：\n  模型解釋了多少比例的變異\n  R2 = 1 → 完美擬合\n  R2 = 0 → 跟用平均值猜一樣\n  R2 < 0 → 比用平均值猜還差'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「預測連續數值的準確度」→ RMSE / MAE / R2。\n\n注意：RMSE/MAE 是「迴歸」指標，不能用在分類！\nF1/Precision/Recall 是「分類」指標，不能用在迴歸！\n\n「極端值影響大」→ RMSE > MAE。\n「模型解釋力」→ R-squared。'
          }
        ]
      }
    },
    {
      number: 15,
      title: '輪廓係數',
      engTitle: 'Silhouette Coefficient',
      supplementary: true,
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'bubble_chart',
            content: '評估分群品質的指標。衡量每個點「跟自己群的凝聚度」和「跟最近鄰群的分離度」。不需要真實標籤（非監督式評估）。'
          },
          {
            label: '怎麼算',
            icon: 'calculate',
            code: '對每個點 i：\n  a(i) = 跟同群其他點的平均距離（凝聚度）\n  b(i) = 跟最近鄰群所有點的平均距離（分離度）\n\n  s(i) = (b(i) - a(i)) / max(a(i), b(i))\n\ns = +1 → 完美分群（離自己群近、離別群遠）\ns =  0 → 在邊界（不太確定屬於哪群）\ns = -1 → 分錯了（離別群比自己群還近）\n\n整體：所有點的平均輪廓係數'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「評估分群品質（無真實標籤）」→ 輪廓係數。\n「選擇最佳 K 值」→ 比較不同 K 的輪廓係數。\n\n輪廓係數越接近 1 越好。\n\n另一個方法：手肘法（Elbow Method）看 SSE 下降的拐點。'
          }
        ]
      }
    },
    {
      number: 16,
      title: 't-SNE / UMAP 降維可視化',
      engTitle: 't-SNE / UMAP',
      supplementary: true,
      back: {
        sections: [
          {
            label: '兩種方法',
            icon: 'scatter_plot',
            code: 't-SNE：\n  保留「局部鄰居關係」的非線性降維\n  → 高維中靠近的點，降維後仍靠近\n  → 適合視覺化（降到 2D/3D）\n  → 缺點：慢、不保留全局結構\n\nUMAP：\n  t-SNE 的改良版\n  → 更快（大資料集可用）\n  → 同時保留局部和全局結構\n  → 結果更穩定'
          },
          {
            label: '跟 PCA 的差別',
            icon: 'compare',
            content: 'PCA → 線性降維，保留最大變異方向\n  → 適合特徵壓縮和前處理\n\nt-SNE/UMAP → 非線性降維，保留鄰居關係\n  → 適合高維資料的視覺化\n  → 不適合做特徵工程（結果不可逆）'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「高維資料視覺化」→ t-SNE 或 UMAP。\n「降維做特徵工程」→ PCA（不是 t-SNE）。\n\nt-SNE/UMAP 主要用於「看」資料的結構，不用於訓練模型。\nPCA 可用於訓練前的降維。'
          }
        ]
      }
    },
    {
      number: 17,
      title: '時間序列分析',
      engTitle: 'Time Series Analysis',
      supplementary: true,
      back: {
        sections: [
          {
            label: '四大組成',
            icon: 'timeline',
            code: '趨勢（Trend）：\n  長期上升或下降的走向\n  例：GDP 逐年成長\n\n季節性（Seasonality）：\n  固定週期的重複模式\n  例：冰淇淋夏天賣得多\n\n循環（Cycle）：\n  非固定週期的波動\n  例：景氣循環（不固定幾年一次）\n\n殘差（Residual）：\n  去掉以上三者後的隨機波動'
          },
          {
            label: '常見模型',
            icon: 'build',
            code: '統計模型：\n  ARIMA → 經典，適合穩定序列\n  SARIMA → ARIMA + 季節性\n  Prophet → Facebook 開發，自動處理季節性\n\n深度學習：\n  LSTM → 適合複雜非線性序列\n  Transformer → 長距離依賴更好'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「分解時間序列的組成」→ 趨勢 + 季節性 + 循環 + 殘差。\n「穩定性檢定」→ ADF 檢定（Augmented Dickey-Fuller）。\n「非穩定序列」→ 差分讓它穩定後再用 ARIMA。\n\n注意：時間序列的訓練/測試集不能隨機分割，要按時間順序分。'
          }
        ]
      }
    }
  ]
}
