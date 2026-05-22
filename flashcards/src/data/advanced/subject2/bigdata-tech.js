/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：bigdata-tech.js
 * 功能：大數據處理技術 - 中級科目二卡片資料
 * 建立日期：2026-05-15
 * 版本：1.0.0
 */

export default {
  id: 'bigdata-tech',
  label: '大數據處理技術',
  cards: [
    {
      number: 1,
      title: 'ACID 特性',
      engTitle: 'ACID Properties',
      back: {
        sections: [
          { label: '是什麼', icon: 'storage', content: '資料庫交易（Transaction）必須滿足的四個特性，確保資料的正確性和一致性。' },
          { label: '四個字母', icon: 'list', code: 'A - 原子性（Atomicity）\n  交易不可分割，要嘛全部成功、要嘛全部失敗\n  例：轉帳 → 扣款+入帳必須同時成功\n\nC - 一致性（Consistency）\n  交易前後資料都必須符合所有規則\n  例：轉帳前後總金額不變\n\nI - 隔離性（Isolation）\n  多個交易同時執行時互不干擾\n\nD - 持久性（Durability）\n  交易完成後結果永久保存，斷電也不會消失' },
          { label: '考試重點', icon: 'school', content: '「原子性」= 交易不可分割，需完全成功或完全失敗。\n\n不是「欄位必須相同型別」。不是「批次執行」。不是「自動同步到所有節點」（那是分散式一致性）。' }
        ]
      }
    },
    {
      number: 2,
      title: '大數據即時分析架構',
      engTitle: 'Big Data Real-time Analytics',
      back: {
        sections: [
          { label: '是什麼', icon: 'speed', content: '處理持續產生的大量資料流，在資料到達的同時就分析和反應，不等累積後才處理。' },
          { label: '常見架構', icon: 'build', code: '資料蒐集：Kafka, Flume\n  ↓ 資料流\n即時處理：Spark Streaming, Flink\n  ↓ 分析結果\n儲存/告警：Elasticsearch, 告警系統\n\n應用：IoT 異常即時偵測、金融即時風控、產線即時監控' },
          { label: '考試重點', icon: 'school', content: '「即時監控大量 IoT 裝置異常」→ 大數據平台 + 即時資料分析技術。\n\n不是「傳統資料庫+圖形視覺化」。不是「批次處理+雲端備份」。不是「Word+手動標註」。' }
        ]
      }
    },
    {
      number: 3,
      title: 'ACID 進階情境題',
      engTitle: 'ACID Scenario Questions',
      back: {
        sections: [
          {
            label: '四個特性怎麼考',
            icon: 'school',
            code: '情境：「節點錯誤但資料沒有部分更新，最終一致」\n→ 原子性（Atomicity）：全部成功或全部回復\n\n情境：「交易完成後資料符合完整性規則」\n→ 一致性（Consistency）\n\n情境：「多筆交易同時存取不會互相干擾」\n→ 隔離性（Isolation）\n\n情境：「交易提交後結果永久保留」\n→ 持久性（Durability）'
          },
          {
            label: '記法',
            icon: 'lightbulb',
            content: '原子 = 不可分割（全有或全無）\n一致 = 規則不能破壞\n隔離 = 互不干擾\n持久 = 永久保存\n\n考題通常描述一個情境，讓你判斷是哪個特性。關鍵是找「全部成功/失敗」「規則一致」「互不干擾」「永久保存」這些關鍵字。'
          }
        ]
      }
    },
    {
      number: 4,
      title: '邊緣運算 + 串流處理架構',
      engTitle: 'Edge Computing + Stream Processing',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'developer_board',
            content: '在資料源附近（邊緣端）做即時初步處理，再把結果送到雲端做深度分析和儲存。兼顧即時性和資料完整性。'
          },
          {
            label: '最佳架構',
            icon: 'build',
            code: '感測器\n  ↓\n邊緣運算節點（毫秒級回應）\n  ├→ 即時告警/控制\n  ↓\n串流處理框架（Kafka + Flink）\n  ↓\n雲端資料湖（完整保留）\n  ↓\nAI 模型訓練/推論'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「毫秒級回應」+「完整資料保留雲端」+「即時性+完整性+可擴展性」→ 邊緣運算 + 串流處理 + 雲端資料湖。\n\n不是「雲端 API Gateway + 批次」（不夠即時）。\n不是「MQTT + 資料倉儲 + 儀表板」（儀表板不是處理框架）。\n不是「本地快取 + REST API」（可擴展性差）。'
          }
        ]
      }
    },
    { number: 5, title: '資料湖', engTitle: 'Data Lake', back: { sections: [
      { label: '是什麼', icon: 'water', content: '把所有格式的原始資料全部丟進去的大型儲存。不先整理，需要時再取出處理。' },
      { label: '跟資料倉儲比較', icon: 'compare', code: '資料湖：原始資料，任何格式，Schema-on-Read\n  → 彈性高，適合 AI/ML\n\n資料倉儲：已整理的結構化資料，Schema-on-Write\n  → 適合 BI 報表' },
      { label: '考試重點', icon: 'school', content: '「多種格式+分散式處理+串接訓練」→ 資料湖+Spark/Ray。' }
    ] } },
    { number: 6, title: '圖形資料庫', engTitle: 'Graph Database', back: { sections: [
      { label: '核心概念', icon: 'hub', code: '節點 = 實體（使用者、貼文）\n邊 = 關係（按讚、追蹤）\n屬性 = 附加資訊（時間、裝置）' },
      { label: '考試重點', icon: 'school', content: '「按讚有時間戳+裝置」+「保留互動關係」→ 按讚作為邊的屬性。\n不是「按讚當節點」。不是「存關聯式DB」。' }
    ] } },
    { number: 7, title: '知識圖譜 / RDF', engTitle: 'Knowledge Graph / RDF', back: { sections: [
      { label: 'RDF 三元組', icon: 'schema', code: 'Subject → Predicate → Object\n愛因斯坦 → 出生於 → 德國\n→ 可串聯推理' },
      { label: '考試重點', icon: 'school', content: '「語意擴展+推理能力」→ RDF 三元組。不是「文件型+標籤」。不是「關聯式+索引」。' }
    ] } },
    {
      number: 8,
      title: 'Hadoop 生態系',
      engTitle: 'Hadoop Ecosystem',
      supplementary: true,
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'cloud',
            content: 'Apache Hadoop 是大數據處理的開源框架，核心是「分散式儲存 + 分散式運算」。不是單一工具，而是一個生態系統。'
          },
          {
            label: '核心元件',
            icon: 'build',
            code: 'HDFS（分散式檔案系統）：\n  資料切成區塊分散儲存在多台機器\n  預設 3 份備份（容錯）\n\nMapReduce（分散式運算）：\n  Map → 把任務分給多台機器平行處理\n  Reduce → 彙整各台結果\n  → 已逐漸被 Spark 取代\n\nYARN（資源管理）：\n  分配 CPU、記憶體等運算資源\n\n周邊工具：\n  Hive → SQL 查詢（像用 SQL 查大數據）\n  Pig → 資料流處理腳本\n  HBase → NoSQL 資料庫（列式儲存）'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「大數據分散式儲存」→ HDFS。\n「大數據分散式運算」→ MapReduce / Spark。\n「大數據 SQL 查詢」→ Hive。\n\nHadoop 的核心價值：用廉價硬體處理 PB 級資料。'
          }
        ]
      }
    },
    {
      number: 9,
      title: 'Apache Spark',
      engTitle: 'Apache Spark',
      supplementary: true,
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'bolt',
            content: '大數據處理引擎，MapReduce 的進階替代品。核心優勢：記憶體內運算（In-memory Computing），比 MapReduce 快 10-100 倍。'
          },
          {
            label: '五大元件',
            icon: 'build',
            code: 'Spark Core → 基礎引擎（RDD 運算）\nSpark SQL → 結構化資料查詢\nSpark Streaming → 即時資料流處理\nMLlib → 機器學習函式庫\nGraphX → 圖運算\n\n特點：\n  支援 Python（PySpark）、Scala、Java\n  可跑在 Hadoop/Kubernetes/雲端'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「大數據 + 機器學習 + 即時處理」→ Spark。\n「比 MapReduce 快」→ 因為記憶體內運算。\n\nSpark vs MapReduce：\n- MapReduce 每步都寫回硬碟 → 慢\n- Spark 資料保存在記憶體 → 快\n\n「資料湖 + 分散式 ML 訓練」→ Spark + MLlib。'
          }
        ]
      }
    },
    {
      number: 10,
      title: 'NoSQL 四大類型',
      engTitle: 'NoSQL Database Types',
      supplementary: true,
      back: {
        sections: [
          {
            label: '四大類型',
            icon: 'storage',
            code: '鍵值型（Key-Value）：\n  像字典，用 Key 查 Value\n  代表：Redis、DynamoDB\n  適合：快取、Session 管理\n\n文件型（Document）：\n  存 JSON/BSON 文件\n  代表：MongoDB\n  適合：彈性 Schema、內容管理\n\n列式型（Column-family）：\n  按列族儲存，適合大量寫入\n  代表：Cassandra、HBase\n  適合：時間序列、IoT 資料\n\n圖形型（Graph）：\n  存節點和邊的關係\n  代表：Neo4j\n  適合：社群網路、推薦系統'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「快速查詢、快取」→ 鍵值型（Redis）。\n「彈性文件結構」→ 文件型（MongoDB）。\n「社群關係分析」→ 圖形型（Neo4j）。\n「大量寫入+時序資料」→ 列式型（Cassandra）。\n\nNoSQL vs 關聯式：NoSQL 犧牲部分 ACID 換取水平擴展性。'
          }
        ]
      }
    },
    {
      number: 11,
      title: 'CAP 定理',
      engTitle: 'CAP Theorem',
      supplementary: true,
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'warning',
            content: '分散式系統不可能同時滿足三項：一致性（Consistency）、可用性（Availability）、分區容忍（Partition Tolerance）。最多只能三選二。'
          },
          {
            label: '三個特性',
            icon: 'build',
            code: 'C - 一致性（Consistency）\n  所有節點在同一時間看到相同的資料\n\nA - 可用性（Availability）\n  每個請求都能得到回應（不管是不是最新的）\n\nP - 分區容忍（Partition Tolerance）\n  網路斷了，系統還能運作\n\n實務上 P 幾乎必須要 → 選 CP 或 AP\n  CP：優先一致性（如 HBase、MongoDB）\n  AP：優先可用性（如 Cassandra、DynamoDB）'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「分散式系統不可能同時滿足 CAP」→ 三選二。\n「金融交易優先一致性」→ CP。\n「社群平台優先可用性」→ AP。\n\nCAP 是選擇 NoSQL 資料庫的核心考量。'
          }
        ]
      }
    },
    {
      number: 12,
      title: 'MapReduce',
      engTitle: 'MapReduce Programming Model',
      supplementary: true,
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'account_tree',
            content: 'Google 提出的分散式運算模型。把大任務拆成兩步：Map（映射）和 Reduce（化簡），分散到多台機器平行處理。'
          },
          {
            label: '範例',
            icon: 'build',
            code: '統計一本書中每個字出現幾次：\n\nMap 階段（各台機器平行）：\n  機器1：讀第 1-100 頁 →\n    (\"the\", 1), (\"cat\", 1), (\"the\", 1)...\n  機器2：讀第 101-200 頁 →\n    (\"dog\", 1), (\"the\", 1)...\n\nShuffle（自動）：\n  相同 Key 的資料送到同一台機器\n\nReduce 階段（彙整）：\n  (\"the\", [1,1,1,...]) → (\"the\", 500)\n  (\"cat\", [1,1,...]) → (\"cat\", 42)'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「Map = 分散處理、Reduce = 彙整結果」。\n\nMapReduce 的限制：每步都要讀寫硬碟，迭代運算（如 ML）很慢 → 被 Spark 取代。\n\n但 MapReduce 的思維模式仍然是大數據運算的基礎。'
          }
        ]
      }
    },
    {
      number: 13,
      title: '資料湖倉',
      engTitle: 'Data Lakehouse',
      supplementary: true,
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'water',
            content: '結合「資料湖」的彈性和「資料倉儲」的管理能力。在資料湖之上加入 Schema 管理、ACID 交易、索引等企業級功能。'
          },
          {
            label: '三者比較',
            icon: 'compare',
            code: '資料倉儲（Data Warehouse）：\n  結構化資料、Schema-on-Write\n  適合 BI 報表、SQL 查詢\n  代表：Snowflake、BigQuery\n\n資料湖（Data Lake）：\n  任何格式、Schema-on-Read\n  適合 AI/ML、原始資料保存\n  代表：S3、HDFS\n\n資料湖倉（Lakehouse）：\n  兩者的優點結合\n  原始資料 + 結構化管理\n  代表：Databricks、Delta Lake'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「兼顧彈性儲存 + 企業級管理」→ 資料湖倉。\n「只做 BI 報表」→ 資料倉儲就夠。\n「只存原始資料做 ML」→ 資料湖就夠。\n\n資料湖倉是目前大數據架構的主流趨勢。'
          }
        ]
      }
    }
  ]
}
