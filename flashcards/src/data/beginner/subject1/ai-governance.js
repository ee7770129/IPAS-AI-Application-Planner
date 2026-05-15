/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：ai-governance.js
 * 功能：AI 治理與倫理 - 卡片資料
 * 建立日期：2026-05-15
 * 版本：1.0.0
 */

export default {
  id: 'ai-governance',
  label: 'AI 治理與倫理',
  cards: [
    { number: 1, title: 'AI 資訊揭露義務', engTitle: 'AI Disclosure Requirements', back: { sections: [{ label: '是什麼', icon: 'policy', content: '當企業用 AI 直接面對消費者提供服務時，法規要求必須公開揭露一些資訊，讓消費者知道自己在跟 AI 互動。' }, { label: '必須揭露的資訊', icon: 'checklist', code: '1. 該服務是否為 AI 自動完成\n2. 服務適用對象與用途範圍\n3. 是否提供替代方案（讓消費者選擇不用 AI）' }, { label: '不需要揭露的', icon: 'block', content: 'AI 模型的原始程式碼不需要公開。那是商業機密，法規要求的是「透明性」而不是「開源」。' }, { label: '法規來源', icon: 'gavel', content: '《金融機構運用人工智慧技術作業規範》-- 台灣金管會針對金融業的 AI 治理規範。' }] } },
    {
      number: 2,
      title: '資料去識別化',
      engTitle: 'Data De-identification',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'security',
            content: '對資料中可能識別個人身分的欄位進行處理，讓人無法透過這些資料回推到特定個人，同時保留資料的分析價值。'
          },
          {
            label: '常見手法',
            icon: 'build',
            code: '1. 移除直接識別資訊\n   → 刪掉姓名、身分證字號、電話\n\n2. 資料遮蔽（Masking）\n   → 王小明 → 王＊＊\n\n3. 資料泛化（Generalization）\n   → 年齡 32 → 30-39 歲\n   → 地址 → 只留縣市\n\n4. 資料擾動（Perturbation）\n   → 數值加入小幅隨機噪聲\n\n5. K-匿名化（K-anonymity）\n   → 確保每筆資料至少有 K 筆相同特徵'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '情境：「釋出資料供研究」+「涉及可識別個人資訊」+「符合個資法」\n→ 對識別欄位做轉換處理 + 移除直接識別資訊\n\n錯誤選項：\n- 「只用合約保密」→ 不夠，資料本身要處理\n- 「移除所有非數值欄位」→ 太粗暴，失去分析價值\n- 「只加密」→ 加密是傳輸安全，不是去識別化'
          }
        ]
      }
    },
    {
      number: 3,
      title: '人類監督AI三層次',
      engTitle: 'Human-in/on/over-the-loop',
      back: {
        sections: [
          {
            label: '三種層次',
            icon: 'supervisor_account',
            code: '監督程度由高到低：\n\n1. Human-in-the-loop（人在迴圈中）\n   AI 每一步都要人類審核才能執行\n   ┌─────────────────────┐\n   │ AI建議 → 人類審核 → 執行 │\n   └─────────────────────┘\n   例：AI 推薦藥物，醫生逐一確認後才開藥\n   → 最嚴格，適合高風險場景\n\n2. Human-on-the-loop（人在迴圈上）\n   AI 自主運作，人類日常監督\n   必要時可隨時介入修正\n   ┌─────────────────────┐\n   │ AI自動執行 ← 人類監督介入 │\n   └─────────────────────┘\n   例：自動駕駛，駕駛人隨時可接手\n   → 中等，AI 為主、人類備援\n\n3. Human-over-the-loop（人在迴圈外）\n   AI 完全自主運作\n   人類僅在異常或重大錯誤時才介入\n   ┌─────────────────────┐\n   │ AI全自動 ... 異常→人類接手 │\n   └─────────────────────┘\n   例：全自動工廠產線，出問題才叫人\n   → 最寬鬆，適合低風險重複任務'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考題會給情境要你判斷是哪一層：\n\n「AI所有判斷須經人類逐一審核」→ in-the-loop\n「人類日常監督，必要時介入修正」→ on-the-loop\n「平時不參與，異常時才接手」→ over-the-loop\n「AI只提供建議，人類主動下達命令」→ in-the-loop\n\n注意：考題可能把 on 和 over 搞混，記住：\non = 日常監督（隨時可介入）\nover = 只管異常（平時不參與）'
          }
        ]
      }
    },
    {
      number: 4,
      title: '監理沙盒',
      engTitle: 'Regulatory Sandbox',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'science',
            content: '政府提供一個「安全實驗場」，讓企業在受監管的環境下測試新技術或新商業模式，暫時放寬部分法規限制。就像給新技術一個「沙盒」，在裡面怎麼玩都可以，不會影響外面。'
          },
          {
            label: '怎麼運作',
            icon: 'build',
            code: '企業申請 → 政府審核 → 核准進入沙盒\n→ 在限定範圍內測試（時間/規模有限制）\n→ 測試成功 → 正式立法或開放\n→ 測試失敗 → 退出，不影響市場\n\n好處：\n  企業：不用怕違法，可以放心創新\n  政府：觀察新技術風險，再決定怎麼管\n  消費者：風險被控制在沙盒內'
          },
          {
            label: '跟 AI 的關係',
            icon: 'smart_toy',
            content: '台灣行政院《人工智慧基本法》草案中的「創新實驗環境」制度，就是參考歐盟的 Regulatory Sandbox 制度。讓 AI 新技術在安全環境下實驗，不受現行法規完全約束。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考法：「政府推動AI創新實驗環境，參考歐盟的什麼制度？」\n→ Regulatory Sandbox（監理沙盒）\n\n不是：\n- Data Protection Impact Assessment（資料保護影響評估）\n- AI Trust Label（AI 信任標章）\n- AI Ethics Review Board（AI 倫理審查委員會）\n\n台灣金融業已有金融監理沙盒實施經驗（金融科技發展與創新實驗條例）。'
          }
        ]
      }
    },
    {
      number: 5,
      title: '聯邦學習',
      engTitle: 'Federated Learning',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'cloud_sync',
            content: '多個機構（醫院、銀行等）一起訓練 AI 模型，但原始資料完全不離開各自的伺服器。只交換「模型參數更新」，不交換資料本身。'
          },
          {
            label: '怎麼運作',
            icon: 'build',
            code: '       中央伺服器（彙整模型）\n        ↑↓  ↑↓  ↑↓\n     醫院A  醫院B  醫院C\n     (資料) (資料) (資料)\n      不外流  不外流  不外流\n\n流程：\n1. 中央伺服器發送初始模型給各機構\n2. 各機構用自己的資料「本地訓練」\n3. 各機構只回傳「模型參數更新」\n4. 中央伺服器彙整所有更新\n5. 更新後的模型再發送回各機構\n6. 重複 2~5 直到模型收斂\n\n→ 資料從頭到尾都在各機構的伺服器上'
          },
          {
            label: '為什麼重要',
            icon: 'security',
            content: '解決「想用多方資料訓練模型，但法規不允許資料集中」的問題。\n\n例：各國醫院的病患資料受隱私法保護，不能傳到同一台伺服器。但用聯邦學習，每家醫院在本地訓練，只分享模型權重。'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '情境：「各國法規限制，原始資料無法集中」+「模型仍要跨機構學習」\n→ 聯邦學習（Federated Learning）\n\n不是：\n- 資料匿名化 → 資料還是要集中，只是去掉個人資訊\n- 差分隱私 → 在資料中加噪音，但資料可能還是要集中\n- 交叉驗證 → 那是模型評估方法，跟隱私無關'
          }
        ]
      }
    },
    {
      number: 6,
      title: 'AI 評測指標',
      engTitle: 'AI Evaluation Criteria',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'fact_check',
            content: '台灣數位發展部 AI 產品與系統評測中心，對生成式 AI（特別是大型語言模型）制定的安全性與品質評測項目。'
          },
          {
            label: '評測項目',
            icon: 'checklist',
            code: '生成式 AI 評測項目：\n\n  ✓ 當責性（Accountability）\n    → 系統是否有明確的責任歸屬\n\n  ✓ 可靠性（Reliability）\n    → 輸出是否穩定、可信賴\n\n  ✓ 隱私及資安\n    → 是否保護使用者資料安全\n\n  ✓ 事實正確性\n    → 生成內容是否符合事實\n\n  ✓ 偏見與歧視\n    → 是否對特定群體有不公平輸出\n\n  ✓ 惡意與濫用可能性\n    → 是否容易被用於有害目的'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考法都是「下列何者不是評測項目」：\n\n不是評測項目：\n- 「互動性」→ 不是（Q23 考過）\n- 「資料複雜性」→ 不是（Q49 考過）\n\n是評測項目：\n當責性、可靠性、隱私及資安、事實正確性、偏見與歧視、惡意與濫用可能性\n\n記法：評測重點在「安全、正確、公平、負責」，不是在「互動體驗」或「資料難度」。'
          }
        ]
      }
    }
  ]
}
