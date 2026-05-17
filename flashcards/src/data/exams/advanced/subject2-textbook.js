/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：subject2-textbook.js
 * 功能：中級科目二 課本練習題（學習指引）（聚合檔）
 * 來源：大數據處理分析與應用(中級)-學習指引 第3/4/5/6章
 * 建立日期：2026-05-16
 * 版本：2.0.0
 */

import part1 from './subject2-textbook-part1.js'
import part2 from './subject2-textbook-part2.js'

export default {
  id: 'adv-s2-textbook',
  label: '課本練習題 科目二',
  subject: '科目二 大數據處理分析與應用',
  examDate: '課本練習',
  questions: [...part1, ...part2]
}
