<!--
  請以繁體中文產生程式碼註解。請務必保持 UTF-8 編碼。
  檔案：ChartSection.vue
  功能：卡片內嵌圖表元件（Chart.js 橫向長條圖）
  建立日期：2026-05-16
  版本：1.0.0
-->
<template>
  <div class="chart-section" @click.stop>
    <Bar v-if="chartData" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip)

const props = defineProps({
  chart: { type: Object, required: true }
})

/** 將卡片的 chart 資料轉為 Chart.js 格式 */
const chartData = computed(() => {
  if (!props.chart || !props.chart.data) return null
  const items = props.chart.data
  return {
    labels: items.map(d => d.label),
    datasets: [{
      data: items.map(d => d.value),
      backgroundColor: items.map(d => d.color || '#FFD54F'),
      borderRadius: 6,
      barThickness: 28
    }]
  }
})

const chartOptions = computed(() => ({
  indexAxis: 'y',
  responsive: true,
  maintainAspectRatio: false,
  animation: { duration: 600 },
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (ctx) => {
          const item = props.chart.data[ctx.dataIndex]
          return item.tip || `${ctx.parsed.x}`
        }
      }
    }
  },
  scales: {
    x: {
      display: false,
      beginAtZero: true
    },
    y: {
      grid: { display: false },
      ticks: {
        font: { size: 13, weight: 'bold' },
        color: '#5D4037'
      }
    }
  }
}))
</script>

<style scoped>
.chart-section {
  background: rgba(255, 213, 79, 0.12);
  border-radius: 10px;
  padding: 12px 14px;
  margin: 8px 0;
  height: 140px;
}
</style>
