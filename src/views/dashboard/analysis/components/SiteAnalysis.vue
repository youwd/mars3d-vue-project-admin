<template>
  <Card
    :tab-list="tabListTitle"
    v-bind="$attrs"
    :active-tab-key="activeKey"
    @tabChange="onTabChange"
  >
    <p v-if="activeKey === 'tab1'">
      <Chart1 />
    </p>
    <p v-if="activeKey === 'tab2'">
      <VisitAnalysisBar />
    </p>
  </Card>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { Card } from 'ant-design-vue';
  import Chart1 from './Chart1.vue';
  import VisitAnalysisBar from './VisitAnalysisBar.vue';

  const activeKey = ref('tab1');

  const tabListTitle = [
    {
      key: 'tab1',
      tab: '四城区排水管线长度',
    },
    {
      key: 'tab2',
      tab: '所属片区排水管线长度',
    },
    {
      key: 'tab3',
      tab: '所属服务区排水管线长度',
    },
  ];

  function onTabChange(key) {
    activeKey.value = key;
  }
</script>
