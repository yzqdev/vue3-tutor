<template>
  <div class="border-double border-4 border-indigo-600">
    <h3>sun</h3>
    provide from grand{{ msg }}
    <div>{{ receiveClick }}</div>
  </div>
</template>

<script setup lang="ts">
import bus from "@/utils/bus";

let msg = inject("msg");

const receiveClick =  ref("no click");
onMounted(() => {
  bus.on("handleClick", (res) => {
    receiveClick.value = res as string;
  });
});
</script>

<style lang="scss" scoped></style>
