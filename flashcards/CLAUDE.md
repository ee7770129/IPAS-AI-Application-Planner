# flashcards 模組說明

## 模組功能說明

Vue 3 + Vite 學習卡片前端應用，提供翻轉卡片互動介面。支援主題篩選與「全部隨機」洗牌模式。

## 架構依賴圖

```
flashcards/
├── index.html              ← 入口（Google Material Icons CDN）
├── vite.config.js          ← dev server port 5211
├── src/
│   ├── main.js             ← createApp 進入點
│   ├── App.vue             ← 主佈局（狀態管理 + 洗牌 + 鍵盤/觸控事件）
│   ├── data/
│   │   ├── cards.js        ← 主檔（匯入初級+中級所有主題並組合）
│   │   ├── beginner/
│   │   │   └── subject1/   ← 初級第一科（約 149 張）
│   │   ├── advanced/
│   │   │   ├── subject1/   ← 中級科目一（約 101 張）
│   │   │   │   ├── nlp.js             ← 自然語言處理（31 張）
│   │   │   │   ├── cv.js              ← 電腦視覺（8 張）
│   │   │   │   ├── ml-advanced.js     ← 機器學習進階（20 張）
│   │   │   │   ├── gen-ai.js          ← 生成式AI（8 張）
│   │   │   │   ├── multimodal.js      ← 多模態AI（3 張）
│   │   │   │   ├── deployment.js      ← 系統部署與運維（12 張）
│   │   │   │   ├── ai-risk.js         ← AI 風險管理（3 張）
│   │   │   │   └── review.js          ← 基礎複習（13 張）
│   │   │   └── subject2/   ← 中級科目二（約 41 張）
│   │   │       ├── statistics.js      ← 機率統計基礎（22 張）
│   │   │       ├── data-engineering.js← 數據處理與特徵工程（6 張）
│   │   │       ├── bigdata-tech.js    ← 大數據處理技術（7 張）
│   │   │       ├── bigdata-analysis.js← 大數據分析方法（3 張）
│   │   │       └── bigdata-privacy.js ← 大數據隱私保護（5 張）
│   │   └── exams/           ← 考題資料
│   │       ├── index.js     ← 考題索引 + hasExams()
│   │       └── advanced/    ← 中級考題（6 檔，393 題）
│   ├── components/
│   │   ├── LevelTabs.vue    ← 級別切換（初級/中級）
│   │   ├── SubjectTabs.vue  ← 科目切換
│   │   ├── TopicSelect.vue  ← 主題下拉
│   │   ├── FlashCard.vue    ← 翻轉卡片核心元件
│   │   ├── CardNav.vue      ← 導覽按鈕
│   │   ├── CardDrawer.vue   ← 卡片目錄抽屜
│   │   ├── ExamMode.vue     ← 考題練習主元件
│   │   ├── QuestionCard.vue ← 單題選擇題卡片
│   │   ├── ExamResult.vue   ← 整卷結果頁
│   │   └── ModeTabs.vue     ← 模式切換（備用）
│   └── styles/
│       └── variables.css    ← CSS 變數（粉黃奶奶配色）
└── public/
    ├── favicon.ico
    ├── favicon.png
    └── exams/               ← 考題附圖
```

### 資料流

```
各主題 .js → cards.js（匯入組合）→ App.vue
                                      │
                          topicIdx === -1 ?
                          ├─ 是 → doShuffle() 合併所有主題並洗牌
                          │        → shuffledCards（帶 _topicLabel）
                          └─ 否 → currentTopic.cards（原始順序）
                                      │
                                  displayCards
                                      │
                          ┌────────────┴────────────┐
                          │                         │
                     FlashCard                   CardNav
                  (props: card)          (props: current/total)
```

### 互動方式
- **桌面**：空白鍵翻轉、左右方向鍵切換、點圓點跳轉
- **手機**：點擊翻面、左右滑動切換
- **共通**：點擊卡片翻轉、點導覽按鈕切換
- **全部隨機**：TopicSelect 選「全部（隨機）」，合併所有主題卡片洗牌顯示

### 新增主題檔案步驟
1. 在 `src/data/beginner/subject1/` 建立新的 `.js` 檔案
2. `export default { id, label, cards: [...] }`
3. 在 `src/data/cards.js` 加入 import 並放進 topics 陣列

## 變更日誌參考

詳見 [../CHANGELOG.md](../CHANGELOG.md)

## 錯誤修復紀錄

| 日期 | 問題 | 解決方式 |
|------|------|---------|
| 2026-05-14 | 背面內容與按鈕重疊 | syncFlipperHeight() 動態同步高度 |
