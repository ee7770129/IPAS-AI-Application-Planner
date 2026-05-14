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
    }
  ]
}
