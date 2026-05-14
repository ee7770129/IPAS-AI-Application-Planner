# IPAS AI 應用規劃師 - 專案全域說明

## 模組功能說明

本專案為 IPAS AI 應用規劃師能力鑑定的學習輔助工具，主要功能為「翻轉學習卡片系統」，幫助考生透過翻卡方式記憶考科重點名詞與概念。

### 技術棧
- **前端框架**：Vue 3 (Composition API + `<script setup>`)
- **建置工具**：Vite
- **部署平台**：Vercel（GitHub 整合自動部署）
- **正式網址**：https://ipas-flashcards.emoyilab.com
- **備用網址**：https://ipas-ai-application-planner.vercel.app

### 考科結構
- **初級**：第一科 人工智慧基礎概論 / 第二科 生成式AI應用與規劃
- **中級**：待建置

## 架構依賴圖

```
D:\IPAS-AI 應用規劃師\
│
├── CLAUDE.md                          ← 全域專案說明（本檔案）
├── CHANGELOG.md                       ← 完整變更歷史
├── API_CONTRACT.md                    ← 資料接口契約
├── start.bat                          ← 一鍵啟動 dev server (port 5211)
├── .gitignore                         ← 排除 PDF / .claude / OS 檔案
│
├── 初級\                              ← 考試 PDF 資料（不納入 git）
│   └── 第一科\
│       ├── 學習指引 PDF
│       └── 考試樣題 PDF
│
└── flashcards\                        ← Vue + Vite 主專案（Vercel Root Directory）
    ├── index.html                     ← 入口頁（載入 Google Material Icons）
    ├── vite.config.js                 ← Vite 設定（port 5211）
    ├── package.json
    │
    ├── public\
    │   ├── favicon.ico                ← 網站圖示（32x32）
    │   └── favicon.png                ← Apple Touch Icon（180x180）
    │
    └── src\
        ├── main.js                    ← Vue 進入點
        ├── App.vue                    ← 主佈局（組合所有元件 + 鍵盤/觸控事件）
        │
        ├── data\
        │   └── cards.js               ← 卡片資料定義（唯一需要修改的檔案）
        │
        ├── components\
        │   ├── LevelTabs.vue          ← 級別頁籤（初級 / 中級）
        │   ├── SubjectTabs.vue        ← 科目頁籤
        │   ├── TopicSelect.vue        ← 主題下拉選單
        │   ├── FlashCard.vue          ← 翻轉卡片（正面名詞 / 背面解釋）
        │   └── CardNav.vue            ← 導覽列（上下張按鈕 + 圓點指示器）
        │
        └── styles\
            └── variables.css          ← 全域 CSS 變數（粉黃奶奶配色）
```

### 元件依賴關係

```
App.vue
├── LevelTabs.vue          ← v-model: level (beginner/advanced)
├── SubjectTabs.vue        ← v-model: subjectIdx
├── TopicSelect.vue        ← v-model: topicIdx
├── FlashCard.vue          ← props: card / expose: toggle()
└── CardNav.vue            ← props: current, total / emit: go
```

## 卡片製作規則與方向

### 卡片風格
- **正面**：只放名詞（中文標題 + 英文標題），不放任何解釋
- **背面**：完整解釋該名詞是什麼、做什麼、怎麼用
- **目的**：翻卡記憶法，看到名詞先回想，翻面確認

### 卡片來源與拆法
- 使用者會貼考題（含 ABCD 四個選項）
- **每個選項都要獨立做成一張卡**，不只是正確答案
- 每張卡解釋該名詞的定義、用途、範例、優缺點（依內容適當選擇）

### 卡片資料結構（cards.js）
```javascript
{
  number: 1,                    // 該主題內的編號
  title: '中文名稱',
  engTitle: 'English Name',     // 選填
  back: {
    sections: [
      {
        label: '區段標題',       // 例：是什麼、怎麼做、優缺點
        icon: 'material_icon',  // Google Material Icons 名稱
        content: '文字說明',     // 選填
        code: '程式碼或表格',    // 選填，會用等寬字型顯示
        tree: '樹狀圖',         // 選填，用於關係總結卡
        tags: [                 // 選填，用於優缺點
          { type: 'pro', text: '優點：...' },
          { type: 'con', text: '缺點：...' }
        ]
      }
    ]
  }
}
```

### 主題分類（第一科目前的分類）
- 資料處理與分析
- AI 技術與架構
- 機器學習概念
- 神經網路與深度學習
- 類別不平衡處理

### 新增卡片流程
1. 使用者貼題目
2. 從每個選項提取名詞概念
3. 歸類到對應主題（沒有則新建主題）
4. 寫入 `flashcards/src/data/cards.js`
5. `git push` 後 Vercel 自動部署

## 變更日誌參考

詳見 [CHANGELOG.md](./CHANGELOG.md)

## 錯誤修復紀錄

| 日期 | 問題 | 原因 | 解決方式 |
|------|------|------|---------|
| 2026-05-14 | start.bat 中文註解導致 CMD 報錯 | bat 檔的 UTF-8 中文在 CMD 下被當作指令 | 改用純英文 REM 註解 |
| 2026-05-14 | 卡片背面內容與導覽按鈕重疊 | card-back 用 position:absolute 脫離文件流 | 新增 syncFlipperHeight() 動態同步容器高度 |
