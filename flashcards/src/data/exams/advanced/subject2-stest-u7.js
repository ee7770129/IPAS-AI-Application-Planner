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
    optionExplanations: { A: '權限組是用於存取控制的設定，與主鍵的唯一識別功能無關。', B: '訪問密碼屬於安全驗證機制，不是資料庫中主鍵的功能。', C: '加密金鑰用於資料加密保護，與主鍵識別資料列的用途不同。', D: '主鍵（Primary Key）是關聯式資料庫中用來唯一識別每筆資料列的專屬識別碼，確保表中每筆記錄都能被精確定位且不重複。考試重點：主鍵具有唯一性（Unique）和非空（NOT NULL）兩大約束，一張表只能有一個主鍵，但主鍵可以由多個欄位組成（複合主鍵）。' }
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
    optionExplanations: { A: 'dict() 建構式支援 dict(key1=value1, key2=value2) 的關鍵字引數語法，這是 Python 內建的合法字典建立方式。考試重點：Python 建立字典有三種常見方式：(1) 大括號 {key: value}、(2) dict() 建構式、(3) dict 推導式 {k: v for ...}，務必分辨各語法的差異。', B: '大括號 {} 語法建立字典需使用冒號分隔鍵值（{key: value}），用等號是錯誤語法。', C: '語法格式錯誤，dict() 搭配巢狀 list 應使用 dict([[key1,value1],[key2,value2]])，且括號不匹配。', D: '大括號內僅用逗號分隔會建立 set 而非 dict，缺少鍵值對應的冒號。' }
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
    optionExplanations: { A: 'Python 函數不一定要有 return，沒有 return 時會自動回傳 None。', B: '對於可變物件（如 list、dict），在函數內修改會影響原始物件，因為傳遞的是參考。', C: '在函數內部使用 global 關鍵字宣告變數後，即可讀取和修改該全域變數的值，否則函數內的賦值會建立新的區域變數。考試重點：Python 變數作用域遵循 LEGB 規則（Local → Enclosing → Global → Built-in），global 和 nonlocal 是控制作用域的兩個關鍵字，global 用於全域變數，nonlocal 用於巢狀函數中的外層變數。', D: 'lambda 只能包含單一表達式，無法包含多行程式碼或複合語句。' }
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
    optionExplanations: { A: 'MongoDB 是 Schema-less（無模式）的文件資料庫，同一個 collection 中的文件結構不需要一致，每份文件可以有不同的欄位和結構，這正是 NoSQL 的核心優勢。考試重點：MongoDB 以 BSON（Binary JSON）格式儲存資料，與關聯式資料庫的固定 Schema 設計截然不同，適合需要彈性結構的應用場景。', B: 'db.createCollection() 確實可用於建立 collection，敘述正確。', C: 'db.collection.drop() 可刪除 collection，此選項雖然方法名稱不精確，但刪除功能確實存在。', D: 'MongoDB 確實是文件型（Document）資料庫，以 BSON 格式儲存資料。' }
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
    optionExplanations: { A: 'lapply 和 sapply 都可以應用於向量和資料框，並非僅限於 list。', B: 'sapply 會嘗試簡化結果，可能回傳向量或矩陣，不一定總是向量。', C: 'sapply 不會強制轉換為矩陣，它會自動選擇最簡化的結構（向量或矩陣）。', D: 'lapply 的 \"l\" 代表 list，它對輸入的每個元素套用指定函數，結果永遠以 list 形式回傳，保證輸出結構的一致性。考試重點：R 語言的 apply 家族函數是重要考點，lapply 回傳 list、sapply 嘗試簡化（向量或矩陣）、vapply 可指定回傳型別、tapply 按分組套用函數。' }
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
    optionExplanations: { A: 'MySQL 確實是關聯式資料庫，敘述正確。', B: '關聯式資料庫要求嚴格的 Schema 定義，所有資料必須符合預先定義的表結構，因此不適合存放結構多元（半結構化/非結構化）的大數據資料。考試重點：結構化資料用 RDBMS（MySQL、PostgreSQL），半結構化/非結構化資料用 NoSQL（MongoDB、Cassandra、Neo4j），這是資料庫選型的核心考點。', C: 'SQL 確實是用於關聯式資料庫的查詢語言，敘述正確。', D: '關聯式資料庫的交易確實必須滿足 ACID 特性，敘述正確。' }
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
    optionExplanations: { A: 'Sys.time() 是取得目前系統時間，無法提取 xts 物件的時間戳記。', B: 'coredata() 用於取出 xts 物件的資料部分（數值），不是時間戳記。', C: 'index() 函數專門用於提取 xts/zoo 物件的時間索引（時間戳記），回傳的是日期時間向量。考試重點：xts 物件由兩部分組成：index()取時間戳記、coredata()取數值資料，這兩個函數經常成對出題，務必區分清楚。', D: 'arima() 是用於時間序列建模與預測的函數，與提取時間戳記無關。' }
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
    optionExplanations: { A: 'lambda 確實常用於 pd.apply() 中定義簡短的匿名函數，敘述正確。', B: '向量化操作利用底層的 C/NumPy 實作進行批次運算，效能通常比 Python 的 for 迴圈快數十到數百倍，說「總是比 for 循環慢」完全相反。考試重點：pandas 效能優化的關鍵就是盡量使用向量化操作取代迴圈，常見的向量化方法包括直接對 Series/DataFrame 做算術運算、使用 np.where()、str 存取器等。', C: 'pd.map() 確實用於對 Series 的每個元素套用映射函數，敘述正確。', D: 'pd.apply() 確實可透過 axis 參數將函數應用到 DataFrame 的行或列，敘述正確。' }
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
    optionExplanations: { A: 'tryCatch() 是 R 語言中處理例外狀況的核心函數，可以捕捉 error、warning 和 message，並定義對應的處理邏輯，類似其他語言的 try-catch 機制。考試重點：R 語言還有 try() 函數可簡單捕捉錯誤，但 tryCatch() 功能更完整，可分別處理不同類型的例外狀況，是考試常見考點。', B: 'system.time() 用於測量程式碼執行時間，不是例外處理函數。', C: 'lapply() 用於對 list 每個元素套用函數並回傳 list，屬於迭代函數。', D: 'read.table() 用於讀取表格式資料檔案，屬於資料讀取函數。' }
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
    optionExplanations: { A: 'Django 確實是 Python 的網頁開發框架，可用於建構網站應用，敘述正確。', B: 'Python 確實擁有豐富的函式庫生態系（如 NumPy、pandas、TensorFlow 等），敘述正確。', C: 'Python 是通用型程式語言，應用範圍極廣，包括網頁開發（Django/Flask）、自動化腳本、AI/機器學習、遊戲開發、嵌入式系統等，絕非僅限於資料分析。考試重點：Python 的多用途特性是其最大優勢，搭配豐富的第三方函式庫，幾乎可應用於所有軟體開發領域。', D: 'Python 是直譯式語言，撰寫後可直接執行輸出結果，不需編譯，敘述正確。' }
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
    optionExplanations: { A: '覆蓋（Override）指子類別重新定義從父類別繼承來的方法，使其在子類別中有不同的實作邏輯，且不影響父類別的原始方法。考試重點：Override 與 Overload 是常見混淆考點，Override 是「子類別覆寫父類別同名同參數方法」，Overload 是「同一類別中同名但不同參數的方法」，兩者定義完全不同。', B: '封裝是將資料和方法包裝在類別中並控制存取權限，不是重新定義方法的動作。', C: '多型是透過相同介面呼叫不同實作的能力，是 Override 的結果而非重新定義方法本身的動作。', D: '重載（Overload）是在同一個類別中定義同名但參數不同的方法，不是子類別重新定義父類別方法。' }
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
    optionExplanations: { A: 'C 語言是靜態類型語言（Static Typing），變數型別在編譯時期就必須確定，與 PHP 等動態語言不同，因此說兩者「都屬於動態語言」是錯誤的。考試重點：靜態語言（C、Java、Go）在編譯時檢查型別，動態語言（Python、PHP、JavaScript）在執行時才決定型別，這是程式語言分類的基礎考點。', B: '動態語言確實在執行時期（Runtime）才決定資料結構與型別，敘述正確。', C: '資料導向程式設計確實結合了 OOP 概念來組織資料處理邏輯，敘述正確。', D: '資料導向程式設計確實加入了向量化處理方式以提升資料運算效率，敘述正確。' }
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
    optionExplanations: { A: '關聯式資料庫確實使用資料表（Table）結構來組織資料，敘述正確。', B: 'NoSQL 種類確實繁多，如 MongoDB（文件型）和 Neo4j（圖學型），敘述正確。', C: '非關聯式資料庫確實能以多種方式（文件、鍵值、圖學等）儲存無結構資料，敘述正確。', D: '非關聯式資料庫（NoSQL）才更適合處理大量半結構化和非結構化數據，因為 NoSQL 不需固定 Schema，可彈性儲存各種格式的資料。考試重點：RDBMS vs NoSQL 的適用場景是必考題，關聯式適合結構化資料和需要 ACID 交易的場景，NoSQL 適合大量、彈性結構、高擴展性的場景。' }
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
    optionExplanations: { A: '多型的核心概念就是透過相同的介面（如 clean() 方法），讓不同子類別各自實作不同的邏輯，例如數值型清理和文字型清理各有不同處理方式但共用同一個方法名稱。考試重點：多型在資料清理系統中的實際應用是常見情境題，理解多型需搭配繼承和覆寫，子類別 Override 父類別方法後，透過父類別型別的參考呼叫就能自動執行對應子類別的實作。', B: '封裝是隱藏內部實作細節並控制存取權限，不會強制不同子類別共享相同屬性結構。', C: '繼承允許子類別覆寫（Override）父類別的方法，且私有方法本身不能被子類別直接存取。', D: '封裝的目的是保護私有屬性不被外部直接修改，子類別也無法直接存取基底類別的私有屬性。' }
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
    optionExplanations: { A: 'NoSQL 確實適合處理半結構化和非結構化等低結構化資料，敘述正確。', B: '圖學資料庫（如 Neo4j）屬於 NoSQL 資料庫的一種，使用圖結構（節點 Node 和邊 Edge）儲存資料，專門處理複雜的關聯關係，而非使用 SQL 的關聯式資料庫。考試重點：NoSQL 資料庫的四大類型務必記住：文件型（MongoDB）、鍵值型（Redis）、欄族型（Cassandra）、圖學型（Neo4j），各有不同的適用場景。', C: '關聯式資料庫確實使用 SQL 語言進行資料查詢與操作，敘述正確。', D: 'SQL 確實是程式設計語言，可用於查詢、操作和定義資料庫中的資料，敘述正確。' }
  }
]
