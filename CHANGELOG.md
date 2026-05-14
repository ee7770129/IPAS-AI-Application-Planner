# CHANGELOG

本專案的所有重要變更紀錄。

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
