/**
 * 請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
 * 檔案：subject2-mock.js
 * 功能：模擬題 科目二（聚合檔）
 * 來源：中級AI應用規畫師已分區.xlsx
 * 建立日期：2026-05-17
 * 版本：2.0.0
 */

import part1 from './subject2-mock-part1.js'
import part2 from './subject2-mock-part2.js'

export default {
  id: 'adv-s2-mock',
  label: '模擬題 科目二',
  subject: '科目二 大數據處理分析與應用',
  examDate: '模擬題',
  questions: [...part1, ...part2]
}
