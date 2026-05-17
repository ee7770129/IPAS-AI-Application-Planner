/*
  請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
  檔案：usePosition.js
  功能：卡片閱讀位置記憶 composable（localStorage 存取與還原）
  建立日期：2026-05-17
  版本：1.0.0
*/

import { ref, nextTick } from 'vue'
import { DATA } from '../data/cards.js'

const STORAGE_KEY = 'ipas-flashcards-position'

/**
 * 卡片閱讀位置記憶 composable
 * 管理 localStorage 中的位置存取與還原邏輯
 */
export function usePosition() {
  const isRestoring = ref(false)

  /**
   * 將目前位置存入 localStorage
   * @param {Object} pos - { level, subjectIdx, topicIdx, cardIdx }
   */
  function savePosition(pos) {
    if (isRestoring.value) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(pos))
    } catch { /* localStorage 不可用時靜默忽略 */ }
  }

  /**
   * 從 localStorage 還原位置（含邊界驗證）
   * @param {Object} refs - { level, subjectIdx, topicIdx, cardIdx } 的 ref 物件
   * @param {Function} doShuffle - 全部隨機模式的洗牌函式
   * @param {Function} getShuffledCards - 取得洗牌後卡片的函式
   */
  async function restorePosition(refs, doShuffle, getShuffledCards) {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const saved = JSON.parse(raw)

      /* 驗證級別 */
      if (!DATA[saved.level]) return
      isRestoring.value = true

      refs.level.value = saved.level
      const lv = DATA[saved.level]

      /* 驗證科目索引 */
      const si = Number(saved.subjectIdx) || 0
      if (si < 0 || si >= lv.subjects.length) { isRestoring.value = false; return }
      refs.subjectIdx.value = si

      /* 驗證主題索引（-1 代表全部隨機） */
      const subj = lv.subjects[si]
      const ti = Number(saved.topicIdx)
      if (ti < -1 || ti >= subj.topics.length) { isRestoring.value = false; return }
      refs.topicIdx.value = ti

      /* 全部隨機模式需先洗牌，再還原卡片索引 */
      if (ti === -1) doShuffle()

      /* 驗證卡片索引 */
      const cards = ti === -1 ? getShuffledCards() : (subj.topics[ti]?.cards || [])
      const ci = Number(saved.cardIdx) || 0
      refs.cardIdx.value = (ci >= 0 && ci < cards.length) ? ci : 0

      /* 等待 watcher 執行完畢後再關閉旗標，避免 watcher 將 cardIdx 重設為 0 */
      await nextTick()
      isRestoring.value = false
    } catch { isRestoring.value = false }
  }

  return {
    isRestoring,
    savePosition,
    restorePosition
  }
}
