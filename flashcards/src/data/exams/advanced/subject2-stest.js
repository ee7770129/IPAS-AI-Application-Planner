/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：subject2-stest.js
 * 功能：S測驗題庫 科目二 大數據處理分析與應用（聚合檔）
 * 來源：S測驗 (sustainnovation.cc)
 * 建立日期：2026-05-22
 * 版本：2.0.0
 */

import u1 from './subject2-stest-u1.js'
import u2 from './subject2-stest-u2.js'
import u3 from './subject2-stest-u3.js'
import u4 from './subject2-stest-u4.js'
import u5 from './subject2-stest-u5.js'
import u6 from './subject2-stest-u6.js'
import u7 from './subject2-stest-u7.js'
import u8 from './subject2-stest-u8.js'

const allQuestions = [...u1, ...u2, ...u3, ...u4, ...u5, ...u6, ...u7, ...u8]
  .map((q, i) => ({ ...q, id: i + 1 }))

export default {
  id: 'adv-s2-stest',
  label: 'S測驗 科目二',
  subject: '科目二 大數據處理分析與應用',
  examDate: 'S測驗',
  questions: allQuestions
}
