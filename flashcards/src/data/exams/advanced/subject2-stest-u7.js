/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：subject2-stest-u7.js
 * 功能：S測驗題庫 科目二 單元7（跳過附圖題）
 * 來源：S測驗 (sustainnovation.cc)
 * 建立日期：2026-05-22
 * 版本：1.0.0
 */

export default [
  {
    id: 1,
    question: '關聯式資料庫中主鍵的敘述哪項正確？',
    options: [
      { label: 'A', text: '設定權限的權限組' },
      { label: 'B', text: '訪問密碼' },
      { label: 'C', text: '加密金鑰' },
      { label: 'D', text: '識別各資料表之資料列的專屬識別碼' }
    ],
    answer: 'D',
    chapter: '數據基礎概念',
    explanation: '主鍵（Primary Key）用於唯一識別資料表中的每一筆記錄，確保資料的唯一性。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 2,
    question: '哪一種建立字典的Python語法正確？',
    options: [
      { label: 'A', text: 'dict(鍵1=值1,鍵2=值2)' },
      { label: 'B', text: '{鍵1=值1,鍵2=值2}' },
      { label: 'C', text: 'dict([[鍵1:值1],[鍵2:值2])' },
      { label: 'D', text: '{鍵1,值1,鍵2,值2}' }
    ],
    answer: 'A',
    chapter: '程式語言基礎',
    explanation: 'Python 中 dict() 建構式可用 dict(key1=value1, key2=value2) 語法。{} 語法需用冒號 {key:value}，B 用等號不對。C 語法錯誤。D 沒有鍵值對應。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 3,
    question: '關於Python中的函數，下列敘述哪一項正確？',
    options: [
      { label: 'A', text: '所有函數都必須有返回值' },
      { label: 'B', text: '修改參數值不會影響原始對象' },
      { label: 'C', text: '使用global關鍵字可在函數內部修改全域變數' },
      { label: 'D', text: 'lambda函數可以包含多行程式碼' }
    ],
    answer: 'C',
    chapter: '程式語言基礎',
    explanation: 'global 關鍵字允許在函數內部存取和修改全域變數。A：函數不一定要有 return。B：可變物件（如 list）傳入函數後修改會影響原始物件。D：lambda 只能包含單一表達式。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 4,
    question: '關於MongoDB的敘述，下列哪一項錯誤？',
    options: [
      { label: 'A', text: '以類似JSON方式儲存所有文件結構必須一致' },
      { label: 'B', text: '可用db.createCollection()建立collection' },
      { label: 'C', text: '可用db.delete()刪除collection' },
      { label: 'D', text: 'MongoDB是文件資料庫' }
    ],
    answer: 'A',
    chapter: '數據基礎概念',
    explanation: 'MongoDB 是 Schema-less 的文件資料庫，同一個 collection 中的文件結構「不需要一致」，這是 NoSQL 的核心特性之一。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 5,
    question: '關於R語言中lapply和sapply函數，下列哪一項正確？',
    options: [
      { label: 'A', text: '無法應用於向量或資料框' },
      { label: 'B', text: 'sapply總是回傳向量' },
      { label: 'C', text: 'sapply強制將結果轉換為矩陣' },
      { label: 'D', text: 'lapply將函數應用於list每個元素並回傳list' }
    ],
    answer: 'D',
    chapter: '程式語言基礎',
    explanation: 'lapply 對 list 的每個元素套用函數，結果永遠是 list。sapply 嘗試簡化結果（可能是向量或矩陣，不一定總是向量）。兩者都可用於向量和資料框。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 6,
    question: '關於傳統關聯式資料庫的敘述，下列哪一項錯誤？',
    options: [
      { label: 'A', text: 'MySQL是關聯式資料庫' },
      { label: 'B', text: '關聯式資料庫適合存放結構多元的大數據資料' },
      { label: 'C', text: 'SQL是用於關聯式資料庫的程式設計語言' },
      { label: 'D', text: '交易必須滿足ACID特性' }
    ],
    answer: 'B',
    chapter: '數據基礎概念',
    explanation: '關聯式資料庫有嚴格的 Schema 限制，適合結構化資料，「不適合」存放結構多元（半結構化/非結構化）的大數據資料。NoSQL 才適合。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 7,
    question: '哪一個函數可以取出R語言xts的時間戳記？',
    options: [
      { label: 'A', text: 'Sys.time()' },
      { label: 'B', text: 'coredata()' },
      { label: 'C', text: 'index()' },
      { label: 'D', text: 'arima()' }
    ],
    answer: 'C',
    chapter: '程式語言基礎',
    explanation: 'index() 用於提取 xts 物件的時間戳記（時間索引）。coredata() 取出資料部分。Sys.time() 取系統時間。arima() 是時間序列建模函數。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 8,
    question: '關於Python pandas向量化操作，下列哪一項錯誤？',
    options: [
      { label: 'A', text: 'lambda常用於pd.apply()' },
      { label: 'B', text: '對Series使用向量化操作總是比for循環慢' },
      { label: 'C', text: 'pd.map()用於Series每個元素' },
      { label: 'D', text: 'pd.apply()可將函數應用到DataFrame行或列' }
    ],
    answer: 'B',
    chapter: '程式語言基礎',
    explanation: '向量化操作通常比 for 迴圈「快」很多，因為底層使用 C/NumPy 實作。說向量化操作比 for 循環「慢」是完全錯誤的。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 9,
    question: '關於R語言的例外狀況處理函數，下列敘述哪一項正確？',
    options: [
      { label: 'A', text: 'tryCatch()' },
      { label: 'B', text: 'system.time()' },
      { label: 'C', text: 'lapply()' },
      { label: 'D', text: 'read.table()' }
    ],
    answer: 'A',
    chapter: '程式語言基礎',
    explanation: 'tryCatch() 是 R 語言中用於例外處理的核心函數。system.time() 計時，lapply() 迭代，read.table() 讀檔，都不是例外處理函數。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 10,
    question: '關於Python的敘述，下列哪一項錯誤？',
    options: [
      { label: 'A', text: '可加掛Django進行網頁開發' },
      { label: 'B', text: '功能性強函式庫豐富' },
      { label: 'C', text: 'Python僅限用於資料分析' },
      { label: 'D', text: 'Python只需按執行鍵即可輸出結果' }
    ],
    answer: 'C',
    chapter: '程式語言基礎',
    explanation: 'Python 是通用程式語言，可用於網頁開發、自動化、AI/ML、遊戲開發等，「僅限用於資料分析」完全錯誤。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 11,
    question: '子類別將繼承自父類別的方法重新定義，這個動作稱為？',
    options: [
      { label: 'A', text: '覆蓋(Override)' },
      { label: 'B', text: '封裝' },
      { label: 'C', text: '多型' },
      { label: 'D', text: '重載(Overload)' }
    ],
    answer: 'A',
    chapter: '程式語言基礎',
    explanation: '覆蓋（Override）是子類別重新定義父類別的方法，且不影響父類別原方法。重載（Overload）是同名方法不同參數。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 12,
    question: '關於程式設計的敘述，下列哪一項錯誤？',
    options: [
      { label: 'A', text: 'C語言和PHP都屬於動態程式設計語言' },
      { label: 'B', text: '動態語言在Runtime才決定資料結構' },
      { label: 'C', text: '資料導向程式設計結合OOP概念' },
      { label: 'D', text: '資料導向程式設計加入向量化處理方式' }
    ],
    answer: 'A',
    chapter: '程式語言基礎',
    explanation: 'C 語言是靜態類型語言（Static Typing），需在編譯時確定變數類型。PHP 是動態類型語言。兩者不都是動態語言。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 13,
    question: '關於RDBMS與NoSQL的敘述，下列哪一項錯誤？',
    options: [
      { label: 'A', text: '關聯式使用資料表結構' },
      { label: 'B', text: 'NoSQL種類繁多如MongoDB Neo4j' },
      { label: 'C', text: '非關聯式儲存無結構資料方式多樣' },
      { label: 'D', text: '關聯式比非關聯式更適合大量半結構化非結構化數據' }
    ],
    answer: 'D',
    chapter: '數據基礎概念',
    explanation: '非關聯式資料庫（NoSQL）才更適合大量半結構化、非結構化的數據儲存。關聯式資料庫適合結構化資料。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 14,
    question: '關於OOP封裝繼承多型在資料清理系統的設計，哪一個敘述正確？',
    options: [
      { label: 'A', text: '多型允許不同子類別透過相同介面呼叫不同清理邏輯如clean()處理數值型和文字型' },
      { label: 'B', text: '封裝強制不同子類別共享相同屬性結構' },
      { label: 'C', text: '繼承讓子類別使用基底類別私有方法但無法覆寫' },
      { label: 'D', text: '封裝允許在子類別中修改基底類別私有屬性' }
    ],
    answer: 'A',
    chapter: '程式語言基礎',
    explanation: '多型（Polymorphism）的核心就是透過相同的介面（如 clean() 方法），在不同子類別中執行不同的邏輯。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 15,
    question: '關於資料庫的敘述，下列哪一項錯誤？',
    options: [
      { label: 'A', text: 'NoSQL適合處理低結構化資料' },
      { label: 'B', text: '圖學資料庫是SQL資料庫的一種' },
      { label: 'C', text: '關聯式資料庫適合用SQL存取' },
      { label: 'D', text: 'SQL是程式設計語言能查詢操作定義資料' }
    ],
    answer: 'B',
    chapter: '數據基礎概念',
    explanation: '圖學資料庫（如 Neo4j）屬於 NoSQL 資料庫，不是 SQL（關聯式）資料庫。它使用圖結構（節點和邊）儲存資料。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  }
]
