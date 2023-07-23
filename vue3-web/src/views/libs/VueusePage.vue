<script setup lang="ts">
import Reactivity from "@/views/libs/react/Reactivity.vue";
import Utility from "@/views/libs/react/Utility.vue";

const active = ref("reactivity");
</script>

<template>
  <div class="m-4 p-4 bg-white">
    <el-tabs v-model="active">
      <el-tab-pane name="reactivity" label="reactivity">
        <reactivity></reactivity>
      </el-tab-pane>
      <el-tab-pane name="utility" label="utility">
        <utility></utility>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped lang="scss"></style>
