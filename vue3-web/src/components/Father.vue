<template>
  <div>
    <Child ref="child1" width="400" height="500" @show-title="showTitle"></Child>
    <div ref="card">
      <el-card>师德师风</el-card>
    </div>
    <div>
      {{ msg }}
    </div>
    <el-button>点击我</el-button>
    <parent />
  </div>
</template>

<script setup lang="ts">
import Child from "@/components/Child.vue";
import Parent from "@/components/provide/Parent.vue";
const msg =  ref("hhhh");
const child1 =  ref<InstanceType<typeof Child>>(null);
const card =  ref(null);
import { onMounted } from "vue";

function show() {
  console.info("子组件");
  console.log(child1.props);
  console.log(card);
}

onMounted(() => {
  show();
});

function showTitle() {
  msg.value = "这是title";
}
</script>

<style scoped></style>
