# API 接口契約

## 概述

本專案為純前端 SPA（無後端 API），資料採模組化架構：

- `flashcards/src/data/cards.js` -- 主檔，匯入並組合所有主題子檔案
- `flashcards/src/data/beginner/subject1/*.js` -- 初級第一科各主題（8 檔，約 149 張）
- `flashcards/src/data/advanced/subject1/*.js` -- 中級科目一各主題（8 檔，約 70 張）
- `flashcards/src/data/advanced/subject2/*.js` -- 中級科目二各主題（5 檔，約 36 張）

每個主題檔案 `export default` 一個 Topic 物件。本文件定義資料結構契約，確保格式一致。

## 資料結構定義

### 頂層結構 DATA

```typescript
interface DATA {
  [levelKey: string]: Level  // 'beginner' | 'advanced'
}
```

### Level（級別）

```typescript
interface Level {
  label: string              // 顯示名稱，例：'初級'、'中級'
  subjects: Subject[]        // 科目陣列
}
```

### Subject（科目）

```typescript
interface Subject {
  id: string                 // 唯一識別，例：'subject1'
  label: string              // 顯示名稱，例：'第一科 人工智慧基礎概論'
  topics: Topic[]            // 主題陣列
}
```

### Topic（主題）

```typescript
interface Topic {
  id: string                 // 唯一識別，例：'data-processing'
  label: string              // 顯示名稱，例：'資料處理與分析'
  cards: Card[]              // 卡片陣列
}
```

### Card（卡片）

```typescript
interface Card {
  number: number             // 該主題內的流水編號（從 1 開始）
  title: string              // 中文名稱（正面顯示）
  engTitle?: string          // 英文名稱（正面顯示，選填）
  image?: string             // 正面圖片路徑（選填）
  back: CardBack             // 背面內容
}
```

### CardBack（卡片背面）

```typescript
interface CardBack {
  sections: Section[]        // 區段陣列（至少 1 個）
}
```

### Section（區段）

```typescript
interface Section {
  label: string              // 區段標題，例：'是什麼'、'怎麼做'、'優缺點'
  icon: string               // Google Material Icons 名稱
  content?: string           // 文字說明（支援 \n 換行）
  code?: string              // 等寬字型區塊（支援 \n 換行）
  tree?: string              // 樹狀圖區塊（等寬字型，支援 \n 換行）
  tags?: Tag[]               // 標籤陣列（通常用於優缺點）
}
```

### Tag（標籤）

```typescript
interface Tag {
  type: 'pro' | 'con'        // pro = 綠色優點, con = 紅色缺點
  text: string               // 顯示文字
}
```

## 元件 Props 契約

### FlashCard.vue

| Prop | 型別 | 必填 | 說明 |
|------|------|------|------|
| card | Card | 是 | 單張卡片資料物件 |

**Expose：**
- `toggle()` - 翻轉卡片

### CardNav.vue

| Prop | 型別 | 必填 | 說明 |
|------|------|------|------|
| current | Number | 是 | 目前卡片索引（從 0 開始）|
| total | Number | 是 | 卡片總數 |

**Emit：**
- `go(index: number)` - 切換到指定卡片

### LevelTabs.vue

| Prop | 型別 | 必填 | 說明 |
|------|------|------|------|
| levels | Object (DATA) | 是 | 完整 DATA 物件 |
| modelValue | String | 是 | 當前級別 key |

**Emit：**
- `update:modelValue(key: string)` - 切換級別

### SubjectTabs.vue

| Prop | 型別 | 必填 | 說明 |
|------|------|------|------|
| subjects | Subject[] | 是 | 科目陣列 |
| modelValue | Number | 是 | 當前科目索引 |

**Emit：**
- `update:modelValue(index: number)` - 切換科目

### TopicSelect.vue

| Prop | 型別 | 必填 | 說明 |
|------|------|------|------|
| topics | Topic[] | 是 | 主題陣列 |
| modelValue | Number | 是 | 當前主題索引 |

**Emit：**
- `update:modelValue(index: number)` - 切換主題（-1 表示「全部隨機」）
- `reshuffle` - 重新洗牌（僅在全部隨機模式下觸發）

## 考題資料結構定義

### EXAM_DATA（考題頂層結構）

```typescript
interface EXAM_DATA {
  [levelKey: string]: ExamLevel  // 'beginner' | 'advanced'
}
```

### ExamLevel（考題級別）

```typescript
interface ExamLevel {
  label: string                  // 顯示名稱
  subjects: ExamSubject[]        // 科目陣列
}
```

### ExamSubject（考題科目）

```typescript
interface ExamSubject {
  id: string                     // 唯一識別
  label: string                  // 顯示名稱
  exams: Exam[]                  // 考卷陣列（可多屆）
}
```

### Exam（考卷）

```typescript
interface Exam {
  id: string                     // 唯一識別，例：'adv-s1-114'
  label: string                  // 顯示名稱，例：'114 年 科目一'
  subject: string                // 科目全名
  examDate: string               // 考試日期或 '課本練習' / '模擬題'
  questions: Question[]          // 題目陣列
}
```

### Question（題目）

```typescript
interface Question {
  id: number                     // 題號（從 1 開始）
  question: string               // 題目文字
  image?: string                 // 題目附圖路徑（選填）
  options: Option[]              // 選項陣列（固定 4 個）
  answer: string                 // 正確答案（'A'|'B'|'C'|'D'）
  chapter: string                // 章節歸屬
  explanation: string            // 整體解析
  optionExplanations: {          // 各選項解析（正確答案為 null）
    A: string | null
    B: string | null
    C: string | null
    D: string | null
  }
}
```

### Option（選項）

```typescript
interface Option {
  label: string                  // 'A'|'B'|'C'|'D'
  text: string                   // 選項文字
}
```

## 考題元件 Props 契約

### ExamMode.vue

| Prop | 型別 | 必填 | 說明 |
|------|------|------|------|
| subjects | ExamSubject[] | 是 | 該級別的全部考題科目 |

### QuestionCard.vue

| Prop | 型別 | 必填 | 說明 |
|------|------|------|------|
| question | Question | 是 | 單題資料物件 |
| forceReveal | Boolean | 否 | 強制顯示答案（整卷模式） |
| externalAnswer | String | 否 | 外部傳入已選答案 |

**Expose：** `reveal()`, `reset()`, `selected`

**Emit：** `answered(label: string)`

### ExamResult.vue

| Prop | 型別 | 必填 | 說明 |
|------|------|------|------|
| results | ResultItem[] | 是 | `[{ question, userAnswer, correct }]` |

**Emit：** `retry`, `back`

## 新增卡片範例

```javascript
{
  number: 1,
  title: 'SMOTE',
  engTitle: 'Synthetic Minority Over-sampling Technique',
  back: {
    sections: [
      {
        label: '是什麼',
        icon: 'add_circle',
        content: '少數類別樣本太少時，合成全新的樣本出來。'
      },
      {
        label: '怎麼做',
        icon: 'build',
        content: '在少數類別樣本之間連線，插值產生新樣本：',
        code: '詐欺A (2,4)  詐欺B (6,8)\n新樣本 (4,6) ← A和B之間'
      },
      {
        label: '優缺點',
        icon: 'balance',
        tags: [
          { type: 'pro', text: '優點：不會丟失任何資料' },
          { type: 'con', text: '缺點：雜訊可能被放大' }
        ]
      }
    ]
  }
}
```
