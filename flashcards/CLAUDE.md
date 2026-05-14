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
│   │   │   └── subject1/   ← 初級第一科（約 106 張）
│   │   │       ├── ai-tech.js             ← AI 技術與架構（11 張）
│   │   │       ├── data-processing.js     ← 資料處理與分析（26 張）
│   │   │       ├── ml-concepts.js         ← 機器學習概念（32 張）
│   │   │       ├── nn-dl.js               ← 神經網路與深度學習（27 張）
│   │   │       ├── disc-gen-ai.js         ← 鑑別式AI與生成式AI（2 張）
│   │   │       ├── ai-governance.js       ← AI 治理與倫理（2 張）
│   │   │       ├── ai-industry.js         ← AI 產業應用（1 張）
│   │   │       └── imbalance.js           ← 類別不平衡處理（5 張）
│   │   └── advanced/
│   │       └── subject1/   ← 中級科目一（約 62 張）
│   │           ├── nlp.js                 ← 自然語言處理（16 張）
│   │           ├── cv.js                  ← 電腦視覺（4 張）
│   │           ├── ml-advanced.js         ← 機器學習進階（20 張）
│   │           ├── gen-ai.js              ← 生成式AI（4 張）
│   │           ├── multimodal.js          ← 多模態AI（2 張）
│   │           ├── deployment.js          ← 系統部署與運維（8 張）
│   │           └── ai-risk.js             ← AI 風險管理（3 張）
│   ├── components/
│   │   ├── LevelTabs.vue   ← 級別切換（初級/中級）
│   │   ├── SubjectTabs.vue ← 科目切換
│   │   ├── TopicSelect.vue ← 主題下拉（含「全部隨機」+ 重新洗牌按鈕）
│   │   ├── FlashCard.vue   ← 翻轉卡片核心元件
│   │   └── CardNav.vue     ← 導覽按鈕（圓點或計數器，依卡片數自動切換）
│   └── styles/
│       └── variables.css   ← CSS 變數（粉黃奶奶配色）
└── public/
    ├── favicon.ico
    └── favicon.png
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
