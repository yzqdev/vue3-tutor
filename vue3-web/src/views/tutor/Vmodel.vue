<template>
<el-card class="m-2">
  <template #header>
    dialog model
  </template>
  <el-button @click="dgVisible=true">显示弹框</el-button>
  <simple-dialog v-model:diag-visible="dgVisible" title="选择发起人"></simple-dialog>
</el-card>
  <el-card class="m-2" >
    <template #header>
      input model
    </template>
    <pet-name v-model="cat"></pet-name>
  </el-card>
  <el-card class="m-2">
    <div>{{text}}</div>
    <wang-model v-model:content="text"></wang-model>
  </el-card>
</template>

<script setup lang="ts">

import SimpleDialog from "@/components/model/SimpleDialog.vue";
import PetName from "@/components/model/PetName.vue";
import WangModel from "@/components/WangModel.vue";
const dgVisible=ref(false)
const text=ref<String>('hhhhhh')
const cat=ref('a cat')
</script>

<style lang="scss" scoped>

</style>
