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
    ] } }
  ]
}
