/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：ai-industry.js
 * 功能：AI 產業應用 - 卡片資料
 * 建立日期：2026-05-15
 * 版本：1.0.0
 */

export default {
  id: 'ai-industry',
  label: 'AI 產業應用',
  cards: [
    { number: 1, title: 'AI 產業應用對照', engTitle: 'AI Industry Applications', back: { sections: [{ label: '正確對應', icon: 'check_circle', code: '智慧製造 → 設備故障預測、預防性維護、品質檢測\n智慧醫療 → 疾病診斷、藥物研發、個人化醫療\n智慧交通 → 自動駕駛、交通流量預測、路線規劃\n金融服務 → 詐欺偵測、信用評估、自動交易\n智慧零售 → 需求預測、個人化推薦、庫存管理' }, { label: '常見陷阱', icon: 'warning', content: '考題常故意把技術和產業配錯：\n- 分析「購買紀錄」預測股票 → 資料來源不對\n- 分析「社群媒體」提升診斷 → 資料跟醫療無關\n- 「氣象+消費行為」推薦優惠 → 不是醫療\n\n判斷重點：看「資料來源」和「應用場景」是否匹配。' }] } }
  ]
}
