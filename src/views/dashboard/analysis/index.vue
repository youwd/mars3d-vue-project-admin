<template>
  <div class="p-4">
    <!-- <GrowCard :loading="loading" class="enter-y" /> -->
    <div>
      <a-row :gutter="24">
        <a-col :span="4">
          <!-- <a-card
            title="排水管线总长度"
            :bordered="false"
            headStyle="font-weight: bold;text-align:center"
          > -->
          <a-card>
            <a-card-meta style="font-weight: bold; padding: 16px">
              <template #avatar>
                <div style="display: flex; align-items: center">
                  <Icon :icon="'数据 (2)|svg'" :size="25" style="margin-right: 5px" />
                  <p style="font-size: 18px"> 排水管线总长度</p>
                </div>
              </template>
            </a-card-meta>
            <a-card-grid style="width: 100%; text-align: center">
              <p style="font-weight: bold; font-size: 15px">3513.6km</p>
            </a-card-grid>
          </a-card>
        </a-col>
        <a-col :span="4">
          <a-card>
            <a-card-meta style="font-weight: bold; padding: 16px">
              <template #avatar>
                <div style="display: flex; align-items: center">
                  <Icon :icon="'数据 (2)|svg'" :size="25" style="margin-right: 5px" />
                  <p style="font-size: 18px"> 雨水管线总长度</p>
                </div>
              </template>
            </a-card-meta>
            <a-card-grid style="width: 100%; text-align: center">
              <p style="font-weight: bold; font-size: 15px">2125.36km</p>
            </a-card-grid>
          </a-card>
        </a-col>
        <a-col :span="4">
          <a-card>
            <a-card-meta style="font-weight: bold; padding: 16px">
              <template #avatar>
                <div style="display: flex; align-items: center">
                  <Icon :icon="'数据 (2)|svg'" :size="25" style="margin-right: 5px" />
                  <p style="font-size: 18px"> 污水管线总长度</p>
                </div>
              </template>
            </a-card-meta>
            <a-card-grid style="width: 100%; text-align: center">
              <p style="font-weight: bold; font-size: 15px">3513.6km</p>
            </a-card-grid>
          </a-card>
        </a-col>
        <a-col :span="4">
          <a-card>
            <a-card-meta style="font-weight: bold; padding: 16px">
              <template #avatar>
                <div style="display: flex; align-items: center">
                  <Icon :icon="'数据 (2)|svg'" :size="25" style="margin-right: 5px" />
                  <p style="font-size: 18px"> 截污管总长度</p>
                </div>
              </template>
            </a-card-meta>
            <a-card-grid style="width: 100%; text-align: center">
              <p style="font-weight: bold; font-size: 15px">3513.6km</p>
            </a-card-grid>
          </a-card>
        </a-col>
        <a-col :span="4">
          <a-card>
            <a-card-meta style="font-weight: bold; padding: 13px">
              <template #avatar>
                <div style="display: flex; align-items: center">
                  <Icon :icon="'数据 (2)|svg'" :size="25" style="margin-right: 1px" />
                  <p style="font-size: 17px"> 累计检测管线长度</p>
                </div>
              </template>
            </a-card-meta>
            <a-card-grid style="width: 100%; text-align: center">
              <p style="font-weight: bold; font-size: 15px">3513.6km</p>
            </a-card-grid>
          </a-card>
        </a-col>
        <a-col :span="4">
          <a-card>
            <a-card-meta style="font-weight: bold; padding: 16px">
              <template #avatar>
                <div style="display: flex">
                  <Icon :icon="'数据 (2)|svg'" :size="25" style="margin-right: 5px" />
                  <p style="font-size: 18px; margin-right: 5px"> 检测管线长度</p>
                </div>
              </template>
            </a-card-meta>
            <a-card-grid style="width: 100%; text-align: center">
              <p style="font-weight: bold; font-size: 15px">3513.6km</p>
            </a-card-grid>
          </a-card>
        </a-col>
      </a-row>
    </div>
    <SiteAnalysis class="!my-4 enter-y" :loading="loading" />
    <div class="lineCharts">
      <div class="chartNew">
        <chartNew />
      </div>
      <div class="chartStorage">
        <chartStorage />
      </div>
      <!-- <span class="chartStorage"> </span>  -->
      <!-- <VisitRadar class="md:w-1/2 w-full" :loading="loading" /> -->
      <!-- <VisitSource class="md:w-1/3 !md:mx-4 !md:my-0 !my-4 w-full" :loading="loading" /> -->
      <!-- <SalesProductPie class="md:w-1/2 w-full" :loading="loading" /> -->
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import GrowCard from './components/GrowCard.vue';
  import SiteAnalysis from './components/SiteAnalysis.vue';
  import chartNew from './components/chartNew.vue';
  import chartStorage from './components/chartStorage.vue';
  import { Icon } from '/@/components/Icon';
  // import VisitSource from './components/VisitSource.vue';
  // import VisitRadar from './components/VisitRadar.vue';
  // import SalesProductPie from './components/SalesProductPie.vue';

  const loading = ref(true);

  setTimeout(() => {
    loading.value = false;
  }, 1500);
</script>
<style lang="less" scoped>
  .lineCharts {
    display: flex;
    background-color: rgb(253, 253, 253);
    padding: 20px;

    .chartNew {
      flex: 1;

      height: 300px;
    }

    .chartStorage {
      flex: 1;

      height: 300px;
    }
  }
</style>
