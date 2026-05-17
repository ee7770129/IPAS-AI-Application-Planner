/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：bigdata-privacy.js
 * 功能：大數據隱私保護、安全與合規 - 中級科目二卡片資料
 * 建立日期：2026-05-15
 * 版本：1.0.0
 */

export default {
  id: 'bigdata-privacy',
  label: '大數據隱私保護與安全',
  cards: [
    {
      number: 1,
      title: '同態加密',
      engTitle: 'Homomorphic Encryption',
      back: {
        sections: [
          { label: '是什麼', icon: 'enhanced_encryption', content: '一種特殊的加密技術，可以直接在「加密狀態」下對資料做運算，算完再解密得到的結果跟先解密再算是一樣的。' },
          { label: '為什麼厲害', icon: 'lightbulb', code: '一般加密：\n  加密資料 → 解密 → 計算 → 加密回去\n  → 計算時資料是明文，有洩漏風險\n\n同態加密：\n  加密資料 → 直接在密文上計算 → 解密\n  → 資料全程加密，計算方看不到原始資料\n\n例：醫院把病歷加密後送到雲端 AI\n  → AI 在加密資料上跑模型\n  → 醫院取回結果解密\n  → 雲端全程沒看到任何病歷內容' },
          { label: '考試重點', icon: 'school', content: '同態加密的核心特性：「可直接在加密狀態下進行數據運算」。\n\n不是「轉換為匿名識別碼」（那是去識別化）。\n不是「標準化處理」（那是特徵工程）。\n不是「偵測異常值」（那是異常偵測）。' },
          { label: '進階考法', icon: 'school', content: '情境：「雲端不解密原始資料就能執行模型運算」→ 同態加密。\n\n不是「匿名化」（匿名化後資料已改變，無法還原完整計算）。\n不是「雜湊」（雜湊是單向的，不能在雜湊值上做運算）。\n不是「資料本地化」（那是限制資料不出境，不是加密運算）。' }
        ]
      }
    },
    { number: 2, title: '資料匿名化與輸出稽核', engTitle: 'Anonymization & Output Auditing', back: { sections: [
      { label: '兩層防護', icon: 'security', code: '訓練前（輸入端）：\n  匿名化 → 移除個資\n  偽匿名化 → 用代碼替換\n  → 模型學不到真實個資\n\n上線後（輸出端）：\n  輸出稽核機制\n  → 掃描回覆是否含疑似個資\n  → 自動過濾或警告' },
      { label: '考試重點', icon: 'school', content: '「生成式 AI 可能產出真實個資」+「符合個資法」→ 匿名化+輸出稽核。\n\n不是「只用 RL 微調」。不是「同態加密所有文字」（文字加密後無法處理語意）。不是「不顯示姓名就算防護」。' }
    ] } },
    {
      number: 3,
      title: '差分隱私',
      engTitle: 'Differential Privacy',
      back: {
        sections: [
          { label: '是什麼', icon: 'noise_aware', content: '差分隱私是一種透過「加噪」機制保護個資的技術。核心思想：即使攻擊者知道資料庫中其他所有人的資料，也無法確定某個特定人是否在資料集中。\n\n做法：在統計查詢結果或模型輸出中加入精心設計的隨機噪音，使個別資料無法被逆推出來。' },
          { label: '與其他隱私技術的區別', icon: 'compare', code: '匿名化：移除可識別資訊\n  → 改資料本身\n\n同態加密：加密狀態下運算\n  → 不改資料，改運算方式\n\n差分隱私：在輸出加噪音\n  → 不改資料也不加密\n  → 但讓個別資料無法被推出' },
          { label: '考試重點', icon: 'school', content: '差分隱私的核心：「加噪機制保護個別資料不被逆推出」。\n\n常考：「強化 AI 模型對使用者資料的隱私保護」→ 差分隱私。\n區分：匿名化改資料、加密改運算、差分隱私改輸出。' }
        ]
      }
    },
    {
      number: 4,
      title: '混合精度訓練 / 分散式訓練',
      engTitle: 'Mixed Precision / Distributed Training',
      back: {
        sections: [
          { label: '混合精度訓練', icon: 'speed', content: '混合使用 16-bit（半精度）和 32-bit（單精度）浮點運算來訓練模型。\n\n16-bit 計算更快、佔記憶體更少，但精度稍低。關鍵步驟（如梯度累加）仍用 32-bit 保精度，其他部分用 16-bit 加速。\n\n效果：訓練時間減半、記憶體佔用大幅降低，模型品質幾乎不受影響。' },
          { label: '分散式訓練', icon: 'hub', code: '資料平行（Data Parallelism）：\n  每台 GPU 跑完整模型\n  資料切分給不同 GPU\n  → 最常見的方式\n\n模型平行（Model Parallelism）：\n  模型太大一台放不下\n  把不同層放到不同 GPU\n\n常用工具：\n  PyTorch Distributed\n  Horovod\n  SageMaker' },
          { label: '考試重點', icon: 'school', content: '「加速大數據環境下的模型訓練」→ 混合精度訓練。\n「資料量大 + 運算資源不對稱」→ 分散式訓練 + 硬體加速(GPU/TPU)。\n\n不是 Early Stopping（那是防過擬合）。\n不是 PCA（那是降維）。' }
        ]
      }
    },
    {
      number: 5,
      title: 'AI 資料治理',
      engTitle: 'AI Data Governance',
      back: {
        sections: [
          { label: '是什麼', icon: 'admin_panel_settings', content: 'AI 資料治理是一套確保資料在 AI 生命週期中被合法、安全、負責任使用的管理框架。涵蓋資料收集、儲存、處理、模型訓練到部署的全流程。' },
          { label: '關鍵措施', icon: 'build', code: '資料版本管理：\n  記錄資料來源、處理歷程\n  確保可追溯性和可稽核性\n\n存取控管：\n  依角色設定資料存取權限\n  敏感欄位加密或遮罩\n\n治理委員會：\n  法務+資安+資料科學+業務 代表\n  審議資料使用規則\n\nAI 責任角色：\n  首席 AI 官(Chief AI Officer)\n  資料管理員(Data Steward)' },
          { label: '考試重點', icon: 'school', content: '常考：\n- 「確保合規性與可追溯性」→ 資料版本管理+操作紀錄\n- 「持續符合法規與道德標準」→ AI 治理框架+跨部門監管\n- 「醫療資料訓練 AI」→ 取得授權+病患同意+隱私強化' }
        ]
      }
    }
  ]
}
