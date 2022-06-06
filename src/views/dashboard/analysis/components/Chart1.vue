<template>
  <div ref="chartRef" :style="{ height, width }"></div>
  <a-modal v-model:visible="visible" title="四城区排水管线长度" @ok="handleOk" :footer="null">
    <template #footer>
      <a-button key="back" @click="handleCancel">Return</a-button>
      <a-button key="submit" type="primary" @click="handleOk">Submit</a-button>
    </template>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-modal>
</template>
<script lang="ts">
  import { basicProps } from './props';
</script>
<script lang="ts" setup>
  import { onMounted, ref, Ref } from 'vue';
  import { useECharts } from '/@/hooks/web/useECharts';

  defineProps({
    ...basicProps,
  });
  const chartRef = ref<HTMLDivElement | null>(null);
  const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);
  const visible = ref<boolean>(false);
  const handleOk = () => {
    visible.value = false;
  };

  const handleCancel = () => {
    visible.value = false;
  };
  onMounted(() => {
    setOptions({
      grid: {
        left: '5%',
        right: '5%',
        top: '30%',
        bottom: '10%',
      },

      title: {
        text: '雨水 vs 污水',
        subtext: '单位：km',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['雨水', '污水'],
      },
      toolbox: {
        show: true,
        feature: {
          myTool1: {
            show: true,
            title: '查看表格',
            icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
            onclick: function () {
              visible.value = true;
            },
          },
          //dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'], title: ['恢复原状', '恢复原状'] },
          // restore: { show: true, title: '恢复原状' },
          saveAsImage: { show: true, title: '下载图片' },
        },
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          // prettier-ignore
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          color: ['#66bdf7'],
          name: '雨水',
          type: 'bar',
          data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
          // markPoint: {
          //   data: [
          //     { type: 'max', name: 'Max' },
          //     { type: 'min', name: 'Min' },
          //   ],
          // },
          markLine: {
            data: [{ type: 'average', name: 'Avg' }],
          },
        },
        {
          color: ['#0d4cb0'],
          name: '污水',
          type: 'bar',
          data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
          // markPoint: {
          //   data: [
          //     { name: 'Max', value: 182.2, xAxis: 7, yAxis: 183 },
          //     { name: 'Min', value: 2.3, xAxis: 11, yAxis: 3 },
          //   ],
          // },
          markLine: {
            data: [{ type: 'average', name: 'Avg' }],
          },
        },
      ],
    });
  });
</script>
