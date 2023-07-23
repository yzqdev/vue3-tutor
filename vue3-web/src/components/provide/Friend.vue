<template>
  <div class="border-dashed border-2 border-indigo-600">
    <h3 class="text-cyan">Friend</h3>

    msg from inject {{ msg }}
    <Sun></Sun>
  </div>
</template>

<script setup lang="ts">
import Sun from "@/components/provide/Sun.vue";

let msg = inject("msg");
</script>

<style lang="scss" scoped></style>
