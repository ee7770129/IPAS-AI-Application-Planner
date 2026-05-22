/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：ai-risk.js
 * 功能：AI 風險管理 - 中級卡片資料
 * 建立日期：2026-05-15
 * 版本：1.0.0
 */

export default {
  id: 'ai-risk',
  label: 'AI 風險管理',
  cards: [
    {
      number: 1,
      title: '對抗性攻擊',
      engTitle: 'Adversarial Attack',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'security',
            content: '故意對輸入資料做「人眼看不出來」的微小改動，就能讓 AI 模型做出完全錯誤的判斷。例如在圖片上加一點肉眼不可見的雜訊，模型就把貓認成狗。'
          },
          {
            label: '防禦方法',
            icon: 'shield',
            code: '針對「模型自身脆弱性」的防禦：\n\n1. 對抗樣本訓練（Adversarial Training）\n   → 訓練時就加入對抗樣本\n   → 讓模型學會辨識惡意擾動\n\n2. 資料前處理過濾\n   → 過濾格式不符或極端異常的輸入\n\n3. 推論後規則引擎\n   → 確保預測結果符合業務規則'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考法：「下列何者並非針對對抗性攻擊的技術手段？」\n→ 「強化網路防火牆」不是。防火牆是防「網路入侵」，不是防「模型被騙」。\n\n對抗性攻擊的核心問題是「模型太脆弱」，要從模型層面解決：\n- 對抗樣本訓練 → 讓模型變強壯\n- 資料前處理 → 過濾異常輸入\n- 規則引擎 → 兜底檢查\n\n防火牆跟模型脆弱性無關。'
          }
        ]
      }
    },
    {
      number: 2,
      title: 'AI 著作權風險',
      engTitle: 'AI Copyright Risk',
      back: {
        sections: [
          {
            label: '問題情境',
            icon: 'gavel',
            content: '生成式 AI 的訓練資料可能包含受著作權保護的內容，導致生成的結果可能侵犯他人著作權。企業需要在法律層面做好防範。'
          },
          {
            label: '防範策略分層',
            icon: 'build',
            code: '訓練前（最根本）：\n  建立資料篩選與授權驗證機制\n  排除未授權或高風險資料來源\n  → 源頭就不吃有問題的資料\n\n訓練中：\n  差分隱私（Differential Privacy）\n  → 避免模型「記住」特定受保護的樣本\n\n輸出後（事後補救）：\n  語意相似度比對 → 檢查是否疑似抄襲\n  浮水印/數位指紋 → 讓生成內容可追溯'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「最能有效預防侵權」的策略：建立訓練資料篩選與授權驗證機制（源頭管控）。\n\n語意比對 → 是事後檢查，不是預防\n差分隱私 → 防記憶但不防使用未授權資料\n浮水印 → 追溯但不預防\n\n預防 > 檢測 > 追溯。源頭管控最有效。'
          }
        ]
      }
    },
    {
      number: 3,
      title: '模型偏誤與資料治理',
      engTitle: 'Model Bias & Data Governance',
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'gavel',
            content: '模型從偏頗的訓練資料中學到不公平的判斷規則。例如訓練資料偏向特定文化或語氣，模型就會對其他族群的表達方式判斷失準。'
          },
          {
            label: '常見成因',
            icon: 'warning',
            code: '1. 訓練資料來源不平衡\n   只有某類人群的評論 → 其他族群判不準\n\n2. 文化/語氣偏差\n   正面語氣強烈被誤判負面\n   禮貌但含批評的被判中性\n\n3. 標註人員偏見\n   標註標準不一致 → 模型學到偏差'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '考法：「下列哪一項描述不正確？」\n→ 「未啟用詞嵌入正規化導致語意距離不穩定」是不正確的。Embedding Normalization 是技術調整，不是造成跨文化偏誤的主因。\n\n正確的描述：\n- 訓練語料偏向特定文化 → 產生內隱偏誤\n- 資料來源不平衡 → 判斷不準確\n- Transformer 能捕捉語意，但資料有偏差仍會學到偏誤'
          }
        ]
      }
    },
    {
      number: 4,
      title: '紅隊測試',
      engTitle: 'Red Teaming',
      supplementary: true,
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'bug_report',
            content: '模擬攻擊者的角度，故意用各種手段嘗試讓 AI 產出有害、不當或錯誤的內容。目的是在上線前找出模型的弱點和漏洞。'
          },
          {
            label: '怎麼做',
            icon: 'build',
            code: '常見測試手段：\n  Prompt Injection → 注入惡意指令\n  越獄攻擊 → 繞過安全限制\n  對抗性輸入 → 設計特殊輸入觸發錯誤\n  社會工程 → 用角色扮演誘導不當回覆\n\n流程：\n  1. 組建紅隊（安全專家+領域專家）\n  2. 定義攻擊場景和風險類別\n  3. 執行攻擊測試\n  4. 記錄弱點並評估嚴重性\n  5. 修補弱點後重新測試'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「確保生成式 AI 上線前的安全性」→ 紅隊測試 + RLHF。\n\n紅隊測試 = 找問題（攻擊方）\nRLHF = 解決問題（訓練方）\n\n不是「增加模型參數」（更大模型不等於更安全）。\n不是「加密輸出」（加密不防止不當內容生成）。'
          }
        ]
      }
    },
    {
      number: 5,
      title: 'AI 公平性指標',
      engTitle: 'AI Fairness Metrics',
      supplementary: true,
      back: {
        sections: [
          {
            label: '三大公平性指標',
            icon: 'balance',
            code: '統計均等（Demographic Parity）\n  各群體被預測為正例的比例應相同\n  例：男女的貸款核准率應相同\n  → 不看結果對不對，只看比例\n\n機會均等（Equal Opportunity）\n  各群體中「真正正例」被正確預測的比例應相同\n  即 TPR（真正率/召回率）各群體相同\n  → 「能力相同的人應得到相同機會」\n\n預測均等（Predictive Parity）\n  各群體中「被預測為正例」真的是正例的比例應相同\n  即 Precision 各群體相同\n  → 「被選中的人品質應相同」'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '三者不可能同時完全滿足（公平性不可能定理）。\n\n常考情境：\n- 「男女核准率不同」→ 違反統計均等\n- 「同樣合格的男女，召回率不同」→ 違反機會均等\n\n偏見檢測工具：WEAT（詞嵌入關聯測試）、AI Fairness 360（IBM）。'
          }
        ]
      }
    },
    {
      number: 6,
      title: 'EU AI Act 風險分級',
      engTitle: 'EU AI Act Risk Levels',
      supplementary: true,
      back: {
        sections: [
          {
            label: '四級風險',
            icon: 'security',
            code: '不可接受風險（禁止）\n  社會評分系統、大規模人臉監控\n  即時遠端生物辨識（公共場所）\n  → 直接禁止使用\n\n高風險\n  醫療診斷、自動駕駛、信用評估\n  招聘篩選、司法判決輔助\n  → 需要嚴格監管、人工審核、可解釋性\n\n有限風險\n  聊天機器人、情感辨識\n  → 需要透明度義務（告知使用者正在跟 AI 互動）\n\n最低風險\n  垃圾郵件過濾、遊戲 AI\n  → 幾乎無限制'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '「AI 用於醫療/招聘/信用評估」→ 高風險，需嚴格監管。\n「社會評分系統」→ 不可接受風險，直接禁止。\n「聊天機器人」→ 有限風險，需告知使用者。\n\nEU AI Act 是全球第一部 AI 專法，2024 年正式通過。'
          }
        ]
      }
    },
    {
      number: 7,
      title: '模型魯棒性',
      engTitle: 'Model Robustness',
      supplementary: true,
      back: {
        sections: [
          {
            label: '是什麼',
            icon: 'shield',
            content: '模型面對異常輸入、雜訊、對抗攻擊或資料偏移時，仍能維持穩定效能的能力。魯棒性差的模型在現實世界中容易出錯。'
          },
          {
            label: '提升方法',
            icon: 'build',
            code: '訓練階段：\n  對抗樣本訓練 → 加入擾動樣本\n  資料增強 → 增加資料多樣性\n  正則化 → L1/L2/Dropout\n\n架構設計：\n  集成學習 → 多模型投票降低單一錯誤\n  不確定性估計 → 模型自知「不確定」時不硬猜\n\n部署後：\n  輸入驗證 → 過濾異常輸入\n  監控機制 → 偵測效能下降'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '魯棒性 vs 準確率：高準確率不代表高魯棒性。模型在乾淨資料上表現好，但遇到雜訊或攻擊就崩潰 = 不魯棒。\n\n「模型在真實環境中效能大幅下降」→ 魯棒性不足。\n解法：對抗訓練 + 資料增強 + 集成學習。'
          }
        ]
      }
    },
    {
      number: 8,
      title: '負責任 AI 框架',
      engTitle: 'Responsible AI Framework',
      supplementary: true,
      back: {
        sections: [
          {
            label: '六大原則',
            icon: 'verified',
            code: '1. 公平性（Fairness）\n   不因種族、性別等因素產生歧視\n\n2. 可靠性與安全性（Reliability & Safety）\n   穩定運作、不造成傷害\n\n3. 隱私與安全（Privacy & Security）\n   保護個資、防止資料洩漏\n\n4. 包容性（Inclusiveness）\n   服務所有人，不排除少數群體\n\n5. 透明性（Transparency）\n   決策過程可理解、可追溯\n\n6. 當責性（Accountability）\n   有人為 AI 的決策負責'
          },
          {
            label: '考試重點',
            icon: 'school',
            content: '負責任 AI = 公平 + 可靠 + 隱私 + 包容 + 透明 + 當責。\n\n常考：\n- 「確保 AI 不歧視」→ 公平性\n- 「決策可追溯」→ 透明性 + XAI\n- 「出錯有人負責」→ 當責性\n- 「整體框架」→ 負責任 AI 六大原則\n\nMicrosoft、Google、OECD 都有提出類似框架。'
          }
        ]
      }
    }
  ]
}
