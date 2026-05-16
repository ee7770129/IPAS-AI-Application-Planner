# CHANGELOG

本專案的所有重要變更紀錄。

---

## [3.8.0] - 2026-05-16

### 新增
- 中文語音朗讀：卡片背面新增「朗讀解釋」按鈕，用中文 TTS 逐段念出所有內容
- 中文語音選擇：設定面板新增中文語音下拉（自動優先選 zh-TW 自然語音）
- 語速控制：設定面板新增語速滑桿（0.5x ~ 2.0x），英文/中文共用
- 自然語音標示：語音選單中自動標記「自然」徽章（Windows Online / Apple 非 Compact / Google Neural）
- 語音設定記憶：英文語音、中文語音、語速均存入 localStorage

### 修復
- 語音下拉選單超出畫面：改用 `position: fixed` + `Teleport to body`，左右各留 12px
- 下拉選單圓角裁切：`overflow: hidden auto` 讓選中項目不超出圓角邊界
- 長文本朗讀中斷：改為逐段串接（onend 觸發下一段），避免瀏覽器截斷

---

## [3.7.0] - 2026-05-16

### 新增
- Chart.js 圖表支援：卡片新增 `chart` section type，渲染彩色橫向長條圖（ChartSection.vue）
- HTML 表格支援：卡片新增 `table` section type，渲染格式化表格
- 卡片目錄側邊抽屜（CardDrawer.vue）：點卡片計數器旁的選單按鈕開啟，列出所有卡片名稱，點擊跳轉
- 安裝 chart.js + vue-chartjs 套件

### 修復
- FlashCard code 區塊加 `white-space: pre-wrap`，修正 ASCII 圖表空格對齊被壓縮的問題
- code 區塊改用 `escapeHtml()` 取代 `nl2br()`，避免 pre-wrap 下重複換行

### 變更
- 中級科目二 data-engineering.js：第 4 張 Robust Scaling ASCII 長條圖改為 Chart.js 彩色圖表、第 14 張 describe() ASCII 表格改為 HTML table
- 初級第一科 data-processing.js：第 20 張直方圖、第 22 張長條圖範例改為 Chart.js 彩色圖表

---

## [3.6.0] - 2026-05-15

### 變更
- 更新 CLAUDE.md / flashcards/CLAUDE.md 架構依賴圖：補齊中級科目二（5 檔 36 張）、review.js（13 張）
- 更新 API_CONTRACT.md：同步卡片數量（初級約 149 張、中級科目一約 70 張、中級科目二約 36 張）
- 總卡片數：初級約 149 張 + 中級約 106 張 = 約 255 張

---

## [3.5.0] - 2026-05-15

### 新增
- 初級第一科新增 4 張卡片（深度學習進階 + AI 治理）
- nn-dl.js 新增 2 張：災難性遺忘（Catastrophic Forgetting）、剪枝（Pruning）
- ai-governance.js 新增 2 張：聯邦學習（Federated Learning）、AI 評測指標（數位發展部）

### 變更
- 初級卡片數：約 145 張 → 約 149 張
- 總卡片數：初級約 149 張 + 中級約 62 張 = 約 211 張

---

## [3.4.0] - 2026-05-15

### 新增
- 初級第一科新增 6 張卡片（鑑別式vs生成式比較、AI治理、ML進階概念）
- disc-gen-ai.js 新增 2 張：鑑別式AI vs 生成式AI 比較總結、整合應用
- ai-governance.js 新增 2 張：人類監督AI三層次（Human-in/on/over-the-loop）、監理沙盒
- ml-concepts.js 新增 2 張：偏差-變異權衡（Bias-Variance Tradeoff）、貝氏分類器（Naive Bayes）

### 變更
- 初級卡片數：約 139 張 → 約 145 張
- 總卡片數：初級約 145 張 + 中級約 62 張 = 約 207 張

---

## [3.3.0] - 2026-05-15

### 新增
- 初級第一科新增 9 張課本重點卡片（統計概念、假設檢定、K-Means、強化學習演算法等）
- data-processing.js 新增 5 張：眾數、偏態分佈、假設檢定、探索性vs驗證性資料分析、全距
- ml-concepts.js 新增 4 張：K-Means 聚類、Q-Learning、梯度下降法、Early Stopping

### 變更
- 初級卡片數：約 130 張 → 約 139 張
- 總卡片數：初級約 139 張 + 中級約 62 張 = 約 201 張

---

## [3.2.0] - 2026-05-15

### 新增
- 初級第一科新增 14 張課本重點卡片（數據分析方法、演算法、圖表、集成學習等）
- data-processing.js 新增 8 張：折線圖、箱型圖、熱圖、散佈圖矩陣、雷達圖、四種數據分析方法、關聯分析、數據縮減
- ml-concepts.js 新增 6 張：邏輯迴歸、線性搜尋、深度優先搜尋(DFS)、廣度優先搜尋(BFS)、集成學習方法、正則化

### 變更
- 初級卡片數：約 116 張 → 約 130 張
- 總卡片數：初級約 130 張 + 中級約 62 張 = 約 192 張

---

## [3.1.0] - 2026-05-15

### 新增
- 初級第一科新增 10 張課本重點卡片（從學習指引 AI 技術架構 + 資料處理章節補充）
- data-processing.js 新增 7 張：ETL 流程、數據蒐集方法、遺缺值處理、重複值處理、錯誤值處理、網路爬蟲、插補法
- ai-tech.js 新增 2 張：基因演算法、AI 技術架構三層次
- ml-concepts.js 新增 1 張：迴歸分析

### 變更
- 初級卡片數：約 106 張 → 約 116 張
- 總卡片數：初級約 116 張 + 中級約 62 張 = 約 178 張

---

## [3.0.0] - 2026-05-15

### 新增
- 中級科目一「人工智慧技術應用與規劃」完整卡片系統（7 主題，約 62 張）
- 新主題檔案：nlp.js、cv.js、ml-advanced.js、gen-ai.js、multimodal.js、deployment.js、ai-risk.js
- 中級 Q1-Q50 全部題目卡片，含考試重點
- NLP 卡片：情感分析、Transformer、BERT、GPT、詞向量、Word2Vec、GloVe、TF-IDF、N-gram、Seq2Seq、RAG 語意漂移、Attention Collapse、反向翻譯、CLIP
- CV 卡片：IoU、mAP、Max-Pooling、全景分割
- ML 進階卡片：DBSCAN、LASSO、PCA+SVM、多重共線性、目標編碼、網格搜尋、ARIMA、資料漂移/KL散度、概念漂移、多任務損失權重、KD-Tree、K-Fold 洩漏、Batch Size/Sharding、資料增強失敗、VAE 監控偏移、生成式vs鑑別式
- 生成式 AI 卡片：模式崩潰/WGAN、Stable Diffusion 品質、VAE/GAN/Diffusion 比較、VAE/GAN 預測+生成
- 多模態卡片：多模態缺失處理、CLIP 跨模態對齊不足
- 部署卡片：Kubernetes、MLOps、Model Registry、漸進式部署、CI、不可否認性、Auto Scaling、PSI
- 風險卡片：對抗性攻擊、AI 著作權風險、模型偏誤與資料治理

### 變更
- cards.js 新增中級匯入（advanced/subject1/ 共 7 個檔案）
- 總卡片數（當時）：初級約 106 張 + 中級約 62 張 = 約 168 張

---

## [2.0.0] - 2026-05-15

### 新增
- cards.js 模組化拆分：8 個主題各一個獨立 .js 檔案
- Q10-Q14 卡片：VAE、隨機森林、KNN、貝氏網路、GAN、LLM、GCN、鑑別式AI、生成式AI、AI 資訊揭露、AI 產業應用對照
- Q15-Q19 卡片：結構化/半結構化/非結構化數據、平均值、中位數、標準差、百分位數、直方圖、散佈圖、長條圖、二分搜尋、強化學習、策略函數
- Q20-Q23 卡片：過擬合、資料增強、擴散模型、異常偵測、批次推論、即時推論、請求批次處理
- Q24-Q32 卡片：RLHF、Flash Attention、Transformer、RAG、梯度消失、LIME、SHAP、XAI、反事實解釋、顯著性圖、影像分類/偵測/分割、半監督式學習、自監督式學習
- Q33-Q40 卡片：CNN、RNN、LSTM、自編碼器、FCNN、NLP、語音辨識、AutoML、AI 能力分級、推薦系統、增量更新索引、對數轉換、區間化、大數據 4V、遷移學習、結構化預測、F1-score、Accuracy、RMSE、R²、ROC-AUC、召回率、精準率
- Q41-Q50 卡片：Flash Attention、RAG 檢索增強生成、梯度消失、自監督式學習、遷移學習、結構化預測、召回率、精準率、ROC-AUC、對數轉換、區間化、大數據 4V、增量更新索引
- 新增主題：鑑別式AI與生成式AI、AI 治理與倫理、AI 產業應用、神經網路與深度學習擴充
- 所有早期卡片（Q1-Q9）補充「考試重點」section

### 變更
- cards.js 從單一檔案（1177 行）拆分為 8 個獨立主題檔案 + 主匯入檔
- TopicSelect 改為自訂下拉選單元件（含全部隨機模式 + Transition 動畫）
- SubjectTabs 科目頁籤樣式調整（flex: 1 等寬）
- CardNav 支援超過 20 張時自動切換為計數器模式
- FlashCard 支援 card.image 屬性
- App.vue 新增 Fisher-Yates 洗牌、displayCards 計算屬性、頁尾
- 總卡片數：約 106 張

---

## [1.2.0] - 2026-05-15

### 新增
- 專案文件：CLAUDE.md（全域 + flashcards 模組）、API_CONTRACT.md、CHANGELOG.md

### 變更
- 「終極」Tab 更名為「中級」
- 頂端標題列改為柔粉漸層配色
- 整體色系從金黃改為粉黃奶奶色
- 下拉選單改為圓角膠囊造型，自訂箭頭圖示

---

## [1.1.0] - 2026-05-15

### 新增
- Q6-Q9 卡片：正規化、標準化、資料洩漏、訓練/測試資料分割、類別型特徵、特徵交叉
- Q8 卡片：線性迴歸、決策樹、支援向量機 (SVM)、寬深模型 (Wide and Deep)、資料分群
- Q9 卡片：Softmax、Sigmoid、ReLU、線性函數、激活函數總結
- 新增「神經網路與深度學習」主題

### 變更
- 卡片風格重構：正面只放名詞，背面完整解釋（一詞一卡）
- FlashCard.vue 正面移除 summary，改為大字名詞 + 英文名稱
- 自訂角色 favicon（替換 Vite 預設 favicon）

---

## [1.0.0] - 2026-05-14

### 新增
- Vue 3 + Vite 專案初始化
- 模組化元件架構：LevelTabs / SubjectTabs / TopicSelect / FlashCard / CardNav
- 初級第一科「類別不平衡處理」主題：SMOTE、Under-sampling、Cost-sensitive Learning、Cross-validation、總結卡
- Q1-Q5 卡片：資料整合、專家系統、決策支援系統、啟發式決策引擎、感知器網路、監督式學習、非監督式學習、離群值處理、Z-score、IQR、截尾、One-hot 編碼、損失函數
- 奶皇包配色 + 手機版 RWD + 觸控滑動支援
- start.bat 一鍵啟動（port 5211，自動清理舊 process）
- Vercel 部署（GitHub 整合自動部署）
- 自訂網域 ipas-flashcards.emoyilab.com

### 修復
- start.bat 中文 REM 註解在 CMD 下亂碼 → 改用英文註解
- 卡片背面內容與導覽按鈕重疊 → syncFlipperHeight() 動態同步高度
