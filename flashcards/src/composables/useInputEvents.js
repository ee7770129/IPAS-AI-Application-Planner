/*
  請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
  檔案：useInputEvents.js
  功能：鍵盤與觸控事件處理 composable
  建立日期：2026-05-17
  版本：1.0.0
*/

import { onMounted, onBeforeUnmount } from 'vue'

/**
 * 鍵盤與觸控事件處理 composable
 * @param {Object} options
 * @param {import('vue').Ref} options.flashCardRef - FlashCard 元件 ref
 * @param {import('vue').Ref} options.cardIdx - 目前卡片索引 ref
 * @param {Function} options.goCard - 切換卡片函式
 */
export function useInputEvents({ flashCardRef, cardIdx, goCard }) {
  /* 鍵盤操作 */
  function onKeydown(e) {
    if (e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault()
      if (flashCardRef.value) flashCardRef.value.toggle()
    } else if (e.key === 'ArrowLeft') {
      goCard(cardIdx.value - 1)
    } else if (e.key === 'ArrowRight') {
      goCard(cardIdx.value + 1)
    }
  }

  /* 觸控滑動 */
  let touchStartX = 0
  let touchStartY = 0

  function onTouchStart(e) {
    touchStartX = e.touches[0].clientX
    touchStartY = e.touches[0].clientY
  }

  function onTouchEnd(e) {
    const dx = e.changedTouches[0].clientX - touchStartX
    const dy = e.changedTouches[0].clientY - touchStartY
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      goCard(cardIdx.value + (dx < 0 ? 1 : -1))
    }
  }

  onMounted(() => {
    document.addEventListener('keydown', onKeydown)
    document.addEventListener('touchstart', onTouchStart, { passive: true })
    document.addEventListener('touchend', onTouchEnd, { passive: true })
  })

  onBeforeUnmount(() => {
    document.removeEventListener('keydown', onKeydown)
    document.removeEventListener('touchstart', onTouchStart)
    document.removeEventListener('touchend', onTouchEnd)
  })
}
