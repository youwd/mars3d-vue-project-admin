<template>
    <mars-dialog title="上传文件" width="300" height="400" top="400" bottom="10" :right="10">
        <a-row :gutter="5">
            <a-col :span="19">
                <mars-input v-model:value="extent" :allowClear="true"></mars-input>
            </a-col>
            <a-col :span="5">
                <a-space size="small">
                    <!-- <mars-button class="small-btn" @click="openUpLoadModal">选择文件</mars-button> -->
                    <a-upload v-model:file-list="fileList" name="file"
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76" :headers="headers"
                        @change="handleChange">
                        <a-button>
                            <upload-outlined></upload-outlined>
                            Click to Upload
                        </a-button>
                    </a-upload>
                </a-space>
            </a-col>
        </a-row>
        <a-row>

        </a-row>
        <template #icon>
            <bookmark-one theme="outline" size="18" />
        </template>
    </mars-dialog>
</template>

<script setup lang="ts">
import { onUnmounted, ref } from "vue"
import useLifecycle from "@mars/common/uses/use-lifecycle"
import MarsDialog from "@mars/components/mars-ui/mars-dialog/index.vue"
import * as mapWork from "./map"
import { message } from 'ant-design-vue';
import { UploadOutlined } from '@ant-design/icons-vue';
import type { UploadChangeParam } from 'ant-design-vue';


// 启用map.ts生命周期
useLifecycle(mapWork)

const extent = ref("")

// 渲染模型
const onClickDrawExtent = () => {
    // formState.extent = "测试组件内部数据是否响应"
    mapWork.drawExtent()
}
mapWork.eventTarget.on("drawExtent", function (event: any) {
    extent.value = event.extent
})

onUnmounted(() => {
    // 销毁操作
})



const handleChange = (info: UploadChangeParam) => {
    if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
    }
};

const fileList = ref([]);


const headers = {
    authorization: 'authorization-text',
}


</script>
<style lang="less">
</style>
