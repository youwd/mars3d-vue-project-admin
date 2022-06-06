<template>

    <div class="formItem">
        <a-row :gutter="24">
            <a-col :span="6">
                <div class="formTitle">{{sn.title}}</div>
            </a-col>
            <a-col :span="18">
                <div class="formValue">{{sn.initialValue}}</div>
            </a-col>
        </a-row>
    </div>
    <!-- <div class="formItem">{{sn}}</div> -->
      
</template>
<script lang="ts" >
import { defineComponent } from 'vue'



export default  defineComponent({
    name:'formItem',
    props:{
        sn:{ 
            type :Object
        }
    },
    
})

</script>

<style lang="less">
.formItem {
    padding: 10px;
    
    .formTitle {
        font-size: 15px;
        padding-left: 1px;
        text-align: center;
        // display: inline-block;
    }

    .formValue {
        font-size: 15px;
        
    }
}
</style>
