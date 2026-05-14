# flashcards 模組說明

## 模組功能說明

Vue 3 + Vite 學習卡片前端應用，提供翻轉卡片互動介面。

## 架構依賴圖

```
flashcards/
├── index.html              ← 入口（Google Material Icons CDN）
├── vite.config.js          ← dev server port 5211
├── src/
│   ├── main.js             ← createApp 進入點
│   ├── App.vue             ← 主佈局，管理所有狀態與事件
│   ├── data/
│   │   └── cards.js        ← 卡片資料（唯一需要頻繁修改的檔案）
│   ├── components/
│   │   ├── LevelTabs.vue   ← 級別切換（初級/中級）
│   │   ├── SubjectTabs.vue ← 科目切換
│   │   ├── TopicSelect.vue ← 主題下拉
│   │   ├── FlashCard.vue   ← 翻轉卡片核心元件
│   │   └── CardNav.vue     ← 導覽按鈕與圓點
│   └── styles/
│       └── variables.css   ← CSS 變數（粉黃奶奶配色）
└── public/
    ├── favicon.ico
    └── favicon.png
```

### 資料流

```
cards.js (DATA)
    ↓
App.vue (state: level → subjectIdx → topicIdx → cardIdx)
    ↓
┌─────────────┬──────────────┬──────────────┐
│ LevelTabs   │ SubjectTabs  │ TopicSelect  │
│ v-model     │ v-model      │ v-model      │
└─────────────┴──────────────┴──────────────┘
    ↓
FlashCard (props: card, expose: toggle)
    ↓
CardNav (props: current/total, emit: go)
```

### 互動方式
- **桌面**：空白鍵翻轉、左右方向鍵切換、點圓點跳轉
- **手機**：點擊翻面、左右滑動切換
- **共通**：點擊卡片翻轉、點導覽按鈕切換

## 變更日誌參考

詳見 [../CHANGELOG.md](../CHANGELOG.md)

## 錯誤修復紀錄

| 日期 | 問題 | 解決方式 |
|------|------|---------|
| 2026-05-14 | 背面內容與按鈕重疊 | syncFlipperHeight() 動態同步高度 |
