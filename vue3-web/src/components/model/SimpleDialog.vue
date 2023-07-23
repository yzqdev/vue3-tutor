<template>

  <el-dialog :title="title" :model-value="diagVisible" @close="hideDialog" :close-on-click-modal="false" width="800" >
    <div class="flex gap-2 w-full">
      占位符
    </div>
    <template #footer>
      <el-button @click="hideDialog">取消</el-button>
      <el-button type="primary" @click="hideDialog">提交</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
let emits=defineEmits(['update:diagVisible','update:title'])



const props = defineProps({
  diagVisible: Boolean,
  title:String
})

function hideDialog(){
  emits('update:diagVisible',false)
}

onBeforeMount(() => {

})
</script>

<style scoped>

</style>
