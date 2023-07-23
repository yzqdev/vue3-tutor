<template>
  <div>
    <el-card class="m-2">
      <el-button type="primary" @click="clickOpenDialog">打开弹框</el-button>
      <el-dialog v-model="digVisible" @open="openDialog" title="wang editor" destroy-on-close @close="clearData">
        <wang :text="text" @get-content="getText" :finish="hasFinish"></wang>
      </el-dialog>

      <tinymce-comp @get-content="getContent" :id="id" :content-txt="text"></tinymce-comp>
      <div>{{ tinymceData }}</div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import Wang from "@/components/Wang.vue";
import { ref } from "vue";
import TinymceComp from "@/components/TinymceComp.vue";

const hasFinish = ref(false);
const digVisible = ref(false);
const text = ref<String>("bbbbbbbb");
const tinymceData = ref("");
function clearData() {
  hasFinish.value = false;
  text.value = "";
}

function clickOpenDialog() {
  digVisible.value = true;
}

function openDialog() {
  setTimeout(() => {
    hasFinish.value = true;
    text.value = "new time";
  }, 2000);
}
const id = ref("aaabbbcc");
function getContent(val) {
  console.log(val);
  tinymceData.value = val;
}

function getText(val) {
  console.log(val);
}

onBeforeMount(() => {});
</script>
