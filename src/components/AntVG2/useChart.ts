import { nextTick, onMounted, ref } from 'vue'
import { Chart } from '@antv/g2'
import { G2ChartProps } from '@/components/AntVG2/G2Chart.vue'
import G2Chart from '@/components/AntVG2/G2Chart.vue'

export function useChart(options: G2ChartProps) {
  const chartRefEl = ref<Nullable<HTMLElement & typeof G2Chart>>(null)
  const chartInstance = ref<Nullable<Chart>>(null)

  onMounted(async () => {
    chartRefEl.value?.updChartProps(options)
    await nextTick()
    chartInstance.value = chartRefEl.value?.chart as Chart
  })

  const methods = {
    getChart: async () => {
      return chartInstance.value
    },
    updChartProps: (props: G2ChartProps) => {
      chartRefEl.value?.updChartProps(props)
    }
  }

  return {
    chartRefEl,
    chartInstance,
    methods
  }
}
