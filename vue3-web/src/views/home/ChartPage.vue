<template>
  <section class="flex">
    <div id="container" class="container"></div>
    <div id="container2" class="container"><pre>
      {{JSON.stringify( jsonData , null, 4)}}
    </pre></div>
  </section>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
type EChartsOption = echarts.EChartsOption;
const jsonData= reactive({
  departments:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  read:[220, 182, 191, 234, 290, 330, 310],
  noRead:[150, 212, 201, 154, 190, 330, 410],
  other:[820, 832, 901, 934, 1290, 1330, 1320]
})
onMounted(() => {
  const dom = document.getElementById('container')!;
  const myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
  });
  const app = {};

  let option: EChartsOption;

  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: jsonData.departments
    },
    series: [

      {
        name: '未读',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: jsonData.read
      },
      {
        name: '已读',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: jsonData.noRead
      },
      {
        name: '其他',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: jsonData.other
      }
    ]
  };



  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }

  window.addEventListener('resize', myChart.resize);
})
</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  height: 300px;
}
</style>
