# CHANGELOG

本專案的所有重要變更紀錄。

---

## [4.3.0] - 2026-05-22

### 新增
- S測驗題庫 科目二（130 題）：來源 sustainnovation.cc 免費練習題，8 個單元各 20 題，跳過附圖題後收錄 130 題
  - 新增 8 個單元檔案：subject2-stest-u1.js ~ subject2-stest-u8.js
  - 新增聚合檔：subject2-stest.js（匯入全部單元並重新編號）
  - 考試列表顯示為「S測驗 科目二」
- QuestionCard 解析區新增來源標籤（exam-source-tag）：答題後顯示題目來源（如「S測驗 科目二」）
- ExamDrawer 題目列表新增來源標示：S測驗題目旁顯示小型「S」標籤
- 與現有題庫（114 歷屆、課本練習、模擬題）比對：零重複題目

### 注意
- S測驗題庫為個人練習用途，考試結束後將移除此部分內容再設定 git 公開

---

## [4.2.0] - 2026-05-22

### 新增
- 中級科目一新增 34 張補充知識卡片：
  - 電腦視覺 +6：遷移學習、Batch Normalization、Grad-CAM、資料標註方法、CycleGAN/StyleGAN、影像前處理
  - 多模態AI +4：VQA、Image Captioning、DALL-E/文生圖、跨模態檢索
  - AI風險管理 +5：紅隊測試、AI公平性指標、EU AI Act風險分級、模型魯棒性、負責任AI框架
  - 生成式AI +5：Prompt Injection、Chain-of-Thought、Temperature/Top-p/Top-k、Token/Tokenization、Constitutional AI
  - NLP +4：BPE子詞分詞、QKV注意力機制、位置編碼、Multi-head Attention
  - ML進階 +5：遷移學習、聯邦式學習、ROC-AUC、Stacking堆疊學習、主動式學習
  - 部署運維 +5：A/B測試、Canary部署、模型壓縮(剪枝/量化/蒸餾)、Feature Store、藍綠部署
- 中級科目二新增 26 張補充知識卡片：
  - 機率統計 +6：ANOVA、卡方檢定、貝氏定理、條件機率、共變異數vs相關係數、型一/型二錯誤
  - 數據處理 +5：缺失值填補法、離群值偵測、特徵重要性、維度災難、ETL流程
  - 大數據技術 +6：Hadoop生態系、Apache Spark、NoSQL四大類型、CAP定理、MapReduce、資料湖倉
  - 大數據分析 +5：混淆矩陣、迴歸指標(RMSE/MAE/R2)、輪廓係數、t-SNE/UMAP、時間序列分析
  - 隱私安全 +4：GDPR重點、K-匿名/L-多樣性/T-接近性、聯邦式學習隱私應用、安全多方計算
- CardDrawer 卡片目錄抽屜：補充卡片標題旁顯示「補充」標籤，方便區分原有卡片與新增補充知識
- 卡片資料結構新增 supplementary 欄位，標記補充知識卡片

---

## [4.1.4] - 2026-05-21

### 新增
- README 新增「聲明」區塊：說明本專案與 IPAS 官方無關聯、考題內容已停止更新
- README 新增「功能展示」區塊：學習卡片正面/背面截圖、歷屆考題四張截圖（模式選擇、作答、解析、題目列表）
- 新增 docs/screenshots/ 資料夾，存放 6 張功能展示截圖

---

## [4.1.3] - 2026-05-21

### 新增
- 全部檢視模式新增「題目列表」抽屜（ExamDrawer）：點擊進度列旁的 list 按鈕開啟，可瀏覽所有題目並跳轉到任意題
- 抽屜內題號圓圈依作答狀態標色（灰=未答、深色=目前題、綠=答對、紅=答錯）
- 全部檢視模式進度列新增「已答 N 題」計數

### 優化
- 學習卡片切換時不再每次強制滾動到頂端，只在卡片區域被捲出視窗時才觸發滾動
- F5 重整後自動記憶並恢復考試狀態：模式（學習卡/考題）、科目選擇、作答進度
- 所有考試模式（單題/整卷/全部檢視）作答中的進度都會存入 localStorage，重整後直接回到作答畫面
- 暫停後重進 setup 頁面自動選中有進度的考試模式，顯示「繼續」提示
- 所有考試模式新增「上一題」按鈕（全部檢視模式同時保留暫停按鈕）
- 題目列表抽屜擴展至所有考試模式（單題/整卷/全部檢視皆可使用）

---

## [4.1.2] - 2026-05-19

### 修復
- 朗讀按鈕切換時舊音頻未清空：新增 currentAudio 直接追踪 Audio 物件，stopAll() 立刻 pause + 清空 src
- edge-tts.js edgeSpeakChunks abort handler 補上 audio.src = '' 清源（原本只有 pause）
- edgeSpeak / edgeSpeakChunks 新增 onAudioCreated callback，讓 useSpeech 即時追踪播放中的 Audio

### 新增
- 背面朗讀快取機制：同一張卡已合成的音頻會快取，再次點擊「朗讀解釋」直接播放，不重新呼叫 TTS API
- edge-tts.js 新增 playBlobUrls() 函式：播放已快取的 Blob URL 陣列（不釋放 URL）
- 切換卡片時自動清除快取（clearCache），避免記憶體洩漏
- 朗讀快取加入語音/語速判斷：調整設定後重新合成，未調整則直接用快取

### 變更
- 預設中文語音從曉曉（zh-CN-XiaoxiaoNeural）改為雲哲（zh-TW-YunJheNeural，男，台灣）

---

## [4.1.1] - 2026-05-17

### 修復
- Header 按鈕改為 flex 佈局：不再用 absolute 定位，按鈕參與 flex 排版，header 自動撐高包住所有按鈕
- 新增 `.header-top` flex 容器（標題 flex:1 + 按鈕 flex-shrink:0），解決設定面板展開時按鈕位移問題
- 設定面板展開/收合動畫優化（滑入 + 淡入，收合更快）

---

## [4.1.0] - 2026-05-17

### 新增
- 考題練習「全部檢視模式」：按原始順序做完全部題目（如科目一 267 題）
- 進度持久化：用 localStorage 自動儲存做到第幾題和每題答案
- 暫停/繼續功能：暫停後回到設定頁，按鈕顯示「繼續（已做 N/M 題）」
- 關閉瀏覽器重開後自動恢復進度
- 完成全部題目後自動清除進度記錄

### 變更
- ExamSetup.vue 新增第三個模式按鈕（全部檢視）+ savedProgress prop
- ExamMode.vue 新增 review 模式邏輯、localStorage 存讀進度、暫停按鈕

---

## [4.0.0] - 2026-05-17

### 新增
- 歷屆考題練習區：支援單題即時模式與整卷送出模式，每次隨機抽 15 題
- 考題練習元件：ExamMode.vue、QuestionCard.vue、ExamResult.vue、ModeTabs.vue
- 考題資料架構：src/data/exams/（含 index.js 索引 + hasExams() 動態判斷）
- 中級科目一 114 年歷屆考題 50 題（含各選項解析 + optionExplanations）
- 中級科目二 114 年歷屆考題 50 題（含各選項解析 + 附圖題支援）
- 中級科目一課本練習題 30 題（第 3/4/5 章）
- 中級科目二課本練習題 40 題（第 3/4/5/6 章）
- 中級科目一模擬題 187 題（來源：已分區 xlsx 28 個工作表自動解析）
- 中級科目二模擬題 36 題（來源：已分區 xlsx）
- 考題附圖支援：QuestionCard 可顯示 image 欄位，圖檔存放於 public/exams/
- Header 右上角模式切換按鈕（齒輪上方，動態顯示）
- 學習卡片大量補充（從課本 PDF 提取概念）：
  - nlp.js +15 張（NLU/NLG、技術演進、HMM/CRF、GRU、LoRA、BLEU/ROUGE 等）
  - cv.js +4 張（CNN 架構演進、物件偵測模型、分割模型、ViT/SAM）
  - gen-ai.js +4 張（生成式 vs 鑑別式、演進五階段、Deepfake/RLHF、評估指標）
  - multimodal.js +1 張（多模態融合方式 Early/Late Fusion）
  - deployment.js +4 張（AI 導入評估框架、POC、風險矩陣、XAI）
  - bigdata-privacy.js +3 張（差分隱私、混合精度訓練、AI 資料治理）

### 變更
- App.vue 新增 mode 狀態切換（flashcard / exam），header 標題和副標題隨模式動態變化
- App.vue header-actions 改為垂直排列（設定齒輪在上、模式切換在下）
- 考題科目頁籤顯示全部科目，無考題的科目標灰色不可點

---

## [3.9.1] - 2026-05-16

### 新增
- 語音載入動畫：按下朗讀按鈕後顯示沙漏旋轉動畫，API 回應後才切換為播放/停止狀態
- 載入中可再按一次取消請求

### 變更
- 寬螢幕（>=768px）設定面板改為單列排版（語速/英文/中文水平排列）

---

## [3.9.0] - 2026-05-16

### 新增
- Edge TTS 後端代理（Vercel Serverless Function）：`api/tts.js` 接收文字，用微軟 Neural 語音合成回傳音檔
- 所有平台統一語音：iPhone Safari、Android Chrome、Windows 都能用曉曉等微軟自然語音
- 可選 6 個中文語音（曉曉/雲希/雲健/曉臻/雲哲/曉佳）+ 4 個英文語音（Emma/Andrew/Aria/Guy）
- 新增 `vercel.json` 路由設定、`src/utils/edge-tts.js` 封裝模組

### 變更
- 語音系統從 Web Speech API 全面改為 Edge TTS（透過後端代理）
- 前端 `edgeSpeak()` 改用 `fetch('/api/tts')` 取代直接 WebSocket 連線
- 設定面板語音選單改為固定的 Edge TTS 語音清單（不再依賴瀏覽器內建語音）

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
