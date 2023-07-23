<script setup lang="ts">
import { useCycleList } from "@vueuse/core";
import { ref } from "vue";

const list = ref(["Dog", "Cat", "Lizard", "Shark", "Whale", "Dolphin", "Octopus", "Seal"]);

const { state, next, prev } = useCycleList(list);
</script>

<template>
  <div>
    <div class="text-primary text-lg font-bold">
      {{ state }}
    </div>
    <el-button @click="prev()">Prev</el-button>
    <el-button @click="next()">Next</el-button>
  </div>
</template>
