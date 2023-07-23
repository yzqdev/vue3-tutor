<template>
  <div class="border-solid border-2 border-indigo-600">
    parent
    <friend />
    <el-button @click="click">点击</el-button>
  </div>
</template>

<script setup lang="ts">
import Friend from "./Friend.vue";
import bus from "@/utils/bus";

const data =  ref("hello this message");
provide("msg", data);

function click() {
  bus.emit("handleClick", "from parent");
}
</script>

<style lang="scss" scoped></style>
