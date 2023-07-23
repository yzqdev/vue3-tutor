<template>
  <el-button @click="openDialog">按钮</el-button>
  <dialog ref="digRef">
    <h3>哈哈哈zheshi</h3>
  </dialog>
  <div>
    jsondata
    <el-button @click="updateStateData">按钮</el-button>
    <div>
      <pre>{{JSON.stringify(stateData)}}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ElMessage} from "element-plus";

const digVisible =  ref(false)
const digRef=ref()
console.log(typeof openDialog)
const stateData=reactive({
  name:'sql',
  age:11,
  sex:'man'
})
function updateStateData(){
  stateData.name='pg'
  stateData={
    ww:'bbb'
  }
}
function openDialog() {
 digRef.value.showModal()
}

const showDialog = () => {
  digVisible = true
  ElMessage.warning("哈哈哈")
}
</script>

<style lang="scss" scoped>

</style>
