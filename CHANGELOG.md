# CHANGELOG

本專案的所有重要變更紀錄。

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
