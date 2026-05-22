/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：subject2-stest-u1.js
 * 功能：S測驗題庫 科目二 單元1（20題）
 * 來源：S測驗 (sustainnovation.cc)
 * 建立日期：2026-05-22
 * 版本：1.0.0
 */
export default [
  {
    id: 1,
    question: '下列何者為換行符號？',
    options: [
      { label: 'A', text: '\\t' },
      { label: 'B', text: '\\s' },
      { label: 'C', text: '\\r' },
      { label: 'D', text: '\\n' }
    ],
    answer: 'D',
    chapter: '程式語言基礎',
    explanation: '\\n 是換行符號（newline），\\t 是 Tab 定位字元，\\r 是回車符號（carriage return），\\s 不是標準跳脫字元（在正規表達式中代表空白字元，但不是跳脫序列）。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 2,
    question: 'Java 中，可以呼叫相同函式，卻可以因參數屬性不同而出現不同行為，此種現象是物件導向特性中的哪一項特性？',
    options: [
      { label: 'A', text: '封裝（Encapsulation）' },
      { label: 'B', text: '多型（Polymorphism）' },
      { label: 'C', text: '實例（Instance）' },
      { label: 'D', text: '繼承（Inheritance）' }
    ],
    answer: 'B',
    chapter: '程式語言基礎',
    explanation: '多型（Polymorphism）允許同一介面有不同的實作，包括方法重載（overloading，參數不同）和覆寫（overriding，子類別重新定義）。封裝是隱藏內部實作，繼承是子類別取得父類別的屬性與方法，實例是類別的具體物件。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 3,
    question: '請問要在學生資料表中查詢姓名結尾為「凱」的學生基本資料，其 SQL 語法為何？',
    options: [
      { label: 'A', text: "SELECT * FROM 學生 WHERE 姓名 is '%凱'" },
      { label: 'B', text: "SELECT * FROM 學生 WHERE 姓名 Like '%凱'" },
      { label: 'C', text: "SELECT * FROM 學生 WHERE 姓名 Like '%凱%'" },
      { label: 'D', text: "SELECT * FROM 學生 WHERE 姓名 is '%凱%'" }
    ],
    answer: 'B',
    chapter: '數據處理工具',
    explanation: "SQL 中 LIKE 用於模式比對，% 代表任意數量的任意字元。'%凱' 表示以「凱」結尾的字串；'%凱%' 則是包含「凱」的字串（不限結尾）。is 不能搭配萬用字元使用，is 用於比較 NULL 值。",
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 4,
    question: '在 R 語言中，程式碼執行時會產生訊息，下列敘述何者不正確？',
    options: [
      { label: 'A', text: '警告（Warning）說明潛在問題' },
      { label: 'B', text: '產生錯誤（Error）時將繼續執行無錯誤的程式' },
      { label: 'C', text: '一般訊息（Message）說明輸出結果' },
      { label: 'D', text: '產生警告（Warning）時可繼續執行' }
    ],
    answer: 'B',
    chapter: '程式語言基礎',
    explanation: 'R 語言中，產生錯誤（Error）時會立即停止執行，不會繼續執行後續程式碼。警告（Warning）只是提醒潛在問題，程式仍會繼續執行。一般訊息（Message）用於輸出提示資訊。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 5,
    question: '處理 R 語言程式碼的例外狀況、錯誤與訊息時，通常不會使用下列何種函數？',
    options: [
      { label: 'A', text: 'system.time()' },
      { label: 'B', text: 'stop()' },
      { label: 'C', text: 'warning()' },
      { label: 'D', text: 'message()' }
    ],
    answer: 'A',
    chapter: '程式語言基礎',
    explanation: 'system.time() 用於計算程式執行時間，屬於效能測量工具，不是例外處理函數。stop() 用於產生錯誤並停止執行，warning() 用於產生警告訊息，message() 用於輸出一般提示訊息，三者皆為例外/訊息處理函數。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 6,
    question: '下列何者所描述的是結構化資料（Structured Data）？',
    options: [
      { label: 'A', text: '存在關聯式資料庫中的營養成分資料集' },
      { label: 'B', text: 'JSON 型態的鐵路時刻表' },
      { label: 'C', text: 'SHP 格式的河川地理圖資' },
      { label: 'D', text: 'XML 紀錄的觀光資料' }
    ],
    answer: 'A',
    chapter: '數據基礎概念',
    explanation: '結構化資料指有固定欄位格式、存放在關聯式資料庫（RDBMS）中的資料，如表格形式的營養成分資料集。JSON 和 XML 屬於半結構化資料（有標記但無固定表格結構），SHP 是地理資訊系統的向量圖資格式。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 7,
    question: '矩陣中，線性獨立的行向量或線性獨立的列向量稱為？',
    options: [
      { label: 'A', text: '單位矩陣' },
      { label: 'B', text: '秩（Rank）' },
      { label: 'C', text: '相關矩陣' },
      { label: 'D', text: '反矩陣' }
    ],
    answer: 'B',
    chapter: '數學基礎',
    explanation: '矩陣的秩（Rank）等於矩陣中線性獨立的行向量（或列向量）的最大數量，用於衡量矩陣所包含的獨立資訊量。單位矩陣是對角線為 1 其餘為 0 的方陣，相關矩陣用於表示變數間的相關係數，反矩陣是使原矩陣相乘後得到單位矩陣的矩陣。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 8,
    question: '「例外狀況處理函數」之目的為允許程式設計師在例外狀況發生時採取某些行動。下列何者不為 R 語言的例外狀況處理函數？',
    options: [
      { label: 'A', text: 'tryCatch()' },
      { label: 'B', text: 'withCallingHandlers()' },
      { label: 'C', text: 'try()' },
      { label: 'D', text: 'supressMessages()' }
    ],
    answer: 'D',
    chapter: '程式語言基礎',
    explanation: 'supressMessages() 拼寫有誤（正確為 suppressMessages()），且其功能是抑制訊息輸出，不是例外處理函數。tryCatch() 是最常用的例外處理函數，try() 是簡化版的例外捕捉，withCallingHandlers() 則可在例外發生的呼叫環境中處理例外。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 9,
    question: 'Java 中，封裝（Encapsulation）為物件導向程式設計的方法之一，下列敘述何者不正確？',
    options: [
      { label: 'A', text: 'public 函數可被其他物件呼叫' },
      { label: 'B', text: 'private 方法可透過繼承覆寫' },
      { label: 'C', text: 'private 函數外部無法存取' },
      { label: 'D', text: 'private 屬性只能被 private 方法讀取，無法被 public 方法存取' }
    ],
    answer: 'D',
    chapter: '程式語言基礎',
    explanation: '在同一個類別中，public 方法可以存取同類別的 private 屬性，這是封裝的標準用法（透過 getter/setter 存取私有欄位）。private 屬性的存取限制是「僅限同類別內」，不論存取它的方法是 public 還是 private 都可以。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 10,
    question: '關於 NoSQL 資料庫的設計特性，下列敘述何者不正確？',
    options: [
      { label: 'A', text: '使用 Key-Value 資料模式' },
      { label: 'B', text: '資料查詢透過 API' },
      { label: 'C', text: 'Google Big Table 為 NoSQL' },
      { label: 'D', text: '需預先設計固定的 Schema 欄位' }
    ],
    answer: 'D',
    chapter: '數據基礎概念',
    explanation: 'NoSQL 的核心特性之一是不需要預先定義固定的 Schema（Schema-less 或 Schema-flexible），這是與關聯式資料庫（RDBMS）的主要區別。NoSQL 支援 Key-Value、文件、欄位族、圖形等多種資料模式，Google Bigtable 是典型的 NoSQL 資料庫。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 11,
    question: '以下為 Java 的物件建構流程，請問其排列順序應為何？\n1. 初始化\n2. 儲存物件參考\n3. 實體化\n4. 宣告\n5. 執行建構式',
    options: [
      { label: 'A', text: '41235' },
      { label: 'B', text: '43125' },
      { label: 'C', text: '43152' },
      { label: 'D', text: '41253' }
    ],
    answer: 'C',
    chapter: '程式語言基礎',
    explanation: 'Java 物件建構流程：(4) 宣告變數型別 → (3) 實體化（使用 new 關鍵字配置記憶體） → (1) 初始化記憶體空間 → (5) 執行建構式（constructor）設定初始值 → (2) 將物件參考儲存到變數中。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 12,
    question: '關於 Python 自訂函數，下列敘述何者不正確？',
    options: [
      { label: 'A', text: 'pass 可以傳回值' },
      { label: 'B', text: 'def 可定義自訂函數' },
      { label: 'C', text: 'def A(n=10) 可預設參數' },
      { label: 'D', text: 'return 可傳回值' }
    ],
    answer: 'A',
    chapter: '程式語言基礎',
    explanation: 'pass 是 Python 的空操作語句（null operation），僅用於佔位，不會傳回任何值。def 用於定義函數，def A(n=10) 可設定預設參數值，return 用於傳回函數的執行結果。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 13,
    question: '在 Python 語言中可用 open() 函數開啟檔案，若僅要讀取檔案，mode 引數需使用下列何項設定值？',
    options: [
      { label: 'A', text: 'wb' },
      { label: 'B', text: 'a' },
      { label: 'C', text: 'w' },
      { label: 'D', text: 'r' }
    ],
    answer: 'D',
    chapter: '程式語言基礎',
    explanation: "Python open() 函數的 mode 參數：'r' 為讀取模式（read），'w' 為寫入模式（write，會覆蓋原檔案），'a' 為附加模式（append，在檔案末尾新增），'wb' 為二進位寫入模式（write binary）。僅讀取檔案應使用 'r'。",
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 14,
    question: '關於稀疏矩陣（n x m），下列敘述何者不正確？',
    options: [
      { label: 'A', text: '多數元素為零' },
      { label: 'B', text: '二維陣列為常見且有效率之儲存方式' },
      { label: 'C', text: '不同儲存方式可能影響記憶體' },
      { label: 'D', text: '常用於文字探勘與推薦系統' }
    ],
    answer: 'B',
    chapter: '數學基礎',
    explanation: '稀疏矩陣的大部分元素為零，若用標準二維陣列儲存會浪費大量記憶體空間。應使用特殊的稀疏矩陣格式（如 CSR、CSC、COO）來有效率地儲存非零元素，大幅節省記憶體。稀疏矩陣常見於文字探勘（TF-IDF 矩陣）和推薦系統（使用者-物品矩陣）。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 15,
    question: '關於 Java 繼承，下列敘述何者不正確？',
    options: [
      { label: 'A', text: 'Java 只能單一繼承' },
      { label: 'B', text: '子類別繼承父類別擁有屬性、方法與建構式' },
      { label: 'C', text: 'Java 使用 extends 表示繼承' },
      { label: 'D', text: '子類別變數 = new 父類別建構子()' }
    ],
    answer: 'B',
    chapter: '程式語言基礎',
    explanation: '在 Java 中，子類別繼承父類別的屬性和方法，但不繼承建構式（constructor）。子類別需透過 super() 明確呼叫父類別的建構式。Java 僅支援單一繼承（一個類別只能 extends 一個父類別），並使用 extends 關鍵字表示繼承關係。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 16,
    question: '關於 Python 程式效能提升方法，下列敘述何者不正確？',
    options: [
      { label: 'A', text: '使用較新版本 Python' },
      { label: 'B', text: '減少函式的使用' },
      { label: 'C', text: '改進程式演算法' },
      { label: 'D', text: '可以優化迴圈執行' }
    ],
    answer: 'B',
    chapter: '程式語言基礎',
    explanation: '適當使用函式（尤其是內建函式）反而能提升效能，因為 Python 的內建函式通常以 C 語言實作，執行速度比自己寫的純 Python 迴圈更快。使用新版 Python、改進演算法、優化迴圈都是正確的效能提升方法。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 17,
    question: 'Python OOP 程式碼如下：\nclass c1:\n    def __init__(self):\n        self.i = 0\n    def add(self):\n        self.i += 2\nc = c1()\nc.add()\nprint(c.i)\n\n請問輸出結果為何？',
    options: [
      { label: 'A', text: '2' },
      { label: 'B', text: '4' },
      { label: 'C', text: '8' },
      { label: 'D', text: '0' }
    ],
    answer: 'A',
    chapter: '程式語言基礎',
    explanation: '建立 c1 物件時，__init__ 方法將 self.i 初始化為 0。呼叫 c.add() 後，self.i += 2 使 self.i 從 0 變成 2。因此 print(c.i) 輸出結果為 2。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 18,
    question: 'Python 繼承程式碼如下：\nclass C1:\n    a = 10\nclass C2(C1):\n    a = 20\nc2 = C2()\n\n請問 c2.a 的值為何？',
    options: [
      { label: 'A', text: '10' },
      { label: 'B', text: '40' },
      { label: 'C', text: '20' },
      { label: 'D', text: '0' }
    ],
    answer: 'C',
    chapter: '程式語言基礎',
    explanation: 'C2 繼承 C1，但在 C2 中重新定義了類別屬性 a = 20，覆蓋了父類別 C1 的 a = 10。因此 c2.a 的值為 20。Python 的屬性查找順序（MRO）會先找子類別，找到即返回。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 19,
    question: '下列何者不是 Python 語言中內建的資料型態？',
    options: [
      { label: 'A', text: 'array' },
      { label: 'B', text: 'list' },
      { label: 'C', text: 'dict' },
      { label: 'D', text: 'tuple' }
    ],
    answer: 'A',
    chapter: '程式語言基礎',
    explanation: 'Python 的內建資料型態包括 list（串列）、dict（字典）、tuple（元組）、set（集合）等，但 array 不是內建型態，需要匯入 array 模組或使用第三方套件 numpy 才能使用。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  },
  {
    id: 20,
    question: '關於資料庫 ACID 特性，下列敘述何者不正確？',
    options: [
      { label: 'A', text: '隔離性（Isolation）是資料庫與資料庫之間的隔離性，防止互相衝突' },
      { label: 'B', text: '一致性（Consistency）是交易前後資料庫完整性不被破壞' },
      { label: 'C', text: '原子性（Atomicity）是全部完成或全部不完成' },
      { label: 'D', text: '持久性（Durability）是交易結束後修改永久保存' }
    ],
    answer: 'A',
    chapter: '數據基礎概念',
    explanation: '隔離性（Isolation）是指同一資料庫中「交易與交易之間」的隔離，確保並行交易互不干擾，而非「資料庫與資料庫之間」的隔離。原子性確保交易要麼全部完成要麼全部回滾，一致性確保交易前後資料庫狀態一致，持久性確保已提交的交易永久保存。',
    optionExplanations: { A: null, B: null, C: null, D: null }
  }
]
