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
        ├── App.vue                    ← 主佈局（狀態管理 + 洗牌 + 鍵盤/觸控事件）
        │
        ├── data\
        │   ├── cards.js               ← 主檔（匯入初級+中級所有主題並組合）
        │   ├── beginner\
        │   │   └── subject1\          ← 初級第一科（約 106 張）
        │   │       ├── ai-tech.js             ← AI 技術與架構（11 張）
        │   │       ├── data-processing.js     ← 資料處理與分析（26 張）
        │   │       ├── ml-concepts.js         ← 機器學習概念（32 張）
        │   │       ├── nn-dl.js               ← 神經網路與深度學習（27 張）
        │   │       ├── disc-gen-ai.js         ← 鑑別式AI與生成式AI（2 張）
        │   │       ├── ai-governance.js       ← AI 治理與倫理（2 張）
        │   │       ├── ai-industry.js         ← AI 產業應用（1 張）
        │   │       └── imbalance.js           ← 類別不平衡處理（5 張）
        │   └── advanced\
        │       └── subject1\          ← 中級科目一（約 62 張）
        │           ├── nlp.js                 ← 自然語言處理技術與應用（16 張）
        │           ├── cv.js                  ← 電腦視覺技術與應用（4 張）
        │           ├── ml-advanced.js         ← 機器學習進階概念（20 張）
        │           ├── gen-ai.js              ← 生成式AI技術與應用（4 張）
        │           ├── multimodal.js          ← 多模態人工智慧應用（2 張）
        │           ├── deployment.js          ← AI 系統部署與運維（8 張）
        │           └── ai-risk.js             ← AI 風險管理（3 張）
        │
        ├── components\
        │   ├── LevelTabs.vue          ← 級別頁籤（初級 / 中級）
        │   ├── SubjectTabs.vue        ← 科目頁籤
        │   ├── TopicSelect.vue        ← 主題下拉選單（含「全部隨機」模式）
        │   ├── FlashCard.vue          ← 翻轉卡片（正面名詞 / 背面解釋）
        │   └── CardNav.vue            ← 導覽列（上下張按鈕 + 圓點/計數器）
        │
        └── styles\
            └── variables.css          ← 全域 CSS 變數（粉黃奶奶配色）
```

### 元件依賴關係

```
App.vue
├── LevelTabs.vue          ← v-model: level (beginner/advanced)
├── SubjectTabs.vue        ← v-model: subjectIdx
├── TopicSelect.vue        ← v-model: topicIdx / emit: reshuffle
├── FlashCard.vue          ← props: card / expose: toggle()
└── CardNav.vue            ← props: current, total / emit: go
```

### 資料流（含全部隨機模式）

```
各主題 .js → cards.js（匯入組合）→ App.vue
                                      │
                          topicIdx === -1 ?
                          ├─ 是 → doShuffle() 合併所有主題卡片並洗牌
                          │        → shuffledCards（帶 _topicLabel 標記）
                          └─ 否 → currentTopic.cards（原始順序）
                                      │
                                  displayCards → FlashCard + CardNav
```

## 卡片製作規則與方向

### 卡片風格
- **正面**：只放名詞（中文標題 + 英文標題），不放任何解釋
- **背面**：完整解釋該名詞是什麼、做什麼、怎麼用
- **目的**：翻卡記憶法，看到名詞先回想，翻面確認

### 卡片內容寫作要求
- **每張卡都要仔細解釋**，讓完全不懂的人也能看懂
- 用口語化、生活化的方式說明，避免學術論文式的枯燥描述
- 盡量搭配具體範例（數字、情境、比喻），不要只有抽象定義
- 如果有容易搞混的概念，要特別點出差異
- 優缺點、適用時機、注意事項都要寫清楚
- 背面的 section 建議順序：是什麼 → 怎麼做/範例 → 重點/容易搞混 → 優缺點

### 卡片來源與拆法
- 使用者會貼考題（含 ABCD 四個選項）
- **每個選項都要獨立做成一張卡**，不只是正確答案
- 每張卡解釋該名詞的定義、用途、範例、優缺點（依內容適當選擇）
- 如果選項中的名詞已經存在，就跳過不重複建立

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

### 官方考科章節結構（學習指引）

```
第一科 人工智慧基礎概論
│
├─ 3.1 人工智慧概念
│   ├─ AI 的定義與分類（分析型/預測型/生成型）
│   ├─ AI 應用領域（醫療/金融/製造/交通/娛樂）
│   ├─ AI 技術架構（技術底層/開發應用/實際運用）
│   ├─ 資料處理流程（蒐集/清洗/轉換/分析）
│   ├─ 演算法基礎（搜尋/排序/迴歸/分類/KNN）
│   ├─ 機器學習概念（監督式/非監督式/強化學習）
│   ├─ 深度學習模型（CNN/RNN/GAN）
│   ├─ 生成式 AI 原理（訓練/微調）
│   └─ AI 治理概念
│
├─ 3.2 資料處理與分析概念
│   ├─ 統計基礎（平均值/中位數/標準差/機率模型）
│   ├─ 假設檢定
│   ├─ 探索性資料分析（EDA）
│   └─ 資料隱私與安全
│
├─ 3.3 機器學習概念
│   ├─ 機器學習基本原理
│   ├─ 常見模型（分類/迴歸/集成學習）
│   └─ 模型評估與調校
│
└─ 3.4 鑑別式 AI 與生成式 AI 概念
    ├─ 鑑別式 AI 基本原理
    ├─ 生成式 AI 基本原理
    └─ 整合應用
```

```
中級科目一 人工智慧技術應用與規劃
│
├─ 3. AI 相關技術應用
│   ├─ 3.1 自然語言處理技術與應用
│   ├─ 3.2 電腦視覺技術與應用
│   ├─ 3.3 生成式AI 技術與應用
│   └─ 3.4 多模態人工智慧應用
│
├─ 4. AI 導入評估規劃
│   ├─ 4.1 AI 導入評估
│   ├─ 4.2 AI 導入規劃
│   └─ 4.3 AI 風險管理
│
└─ 5. AI 技術應用與系統部署
    ├─ 5.1 數據準備與模型選擇
    └─ 5.2 AI 技術系統集成與部署
```

### 卡片主題分類

**初級（8 主題，約 106 張）**
- AI 技術與架構、資料處理與分析、機器學習概念
- 神經網路與深度學習、鑑別式AI與生成式AI
- AI 治理與倫理、AI 產業應用、類別不平衡處理

**中級（7 主題，約 62 張）**
- 自然語言處理技術與應用、電腦視覺技術與應用
- 機器學習進階概念、生成式AI技術與應用
- 多模態人工智慧應用、AI 系統部署與運維、AI 風險管理

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
