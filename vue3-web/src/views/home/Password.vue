<template>
  <div class="flex">
    <div class="flex-1 p-4">
      <el-form :model="passwordForm" :label-width="120">
        <el-form-item label="加密前的字符串">
          <el-input v-model="passwordForm.text" placeholder="请输入加密前字符串"></el-input>
        </el-form-item>
        <el-form-item label="加密后的字符串">
          <el-input :disabled="true" placeholder="请输入加密后字符串" v-model="passwordForm.textEncode"></el-input>
        </el-form-item>
        <ElButton @click="encodeText">加密!</ElButton>
      </el-form>
    </div>
    <div class="flex-1 p-4">
      <el-form :model="passForm" :label-width="120">
        <el-form-item label="加密后的字符串">
          <el-input v-model="passForm.textEncode" placeholder="请输入加密前字符串"></el-input>
        </el-form-item>
        <el-form-item label="解密的字符串">
          <el-input disabled placeholder="请输入加密后字符串" v-model="passForm.text"></el-input>
        </el-form-item>

        <ElButton type="primary" @click="decodeText">解密!</ElButton>
      </el-form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { encodeStr, decodeStr } from "@/utils/strUtil";
import md5 from "@/utils/md5";
const passForm = reactive({
  text: "",
  textEncode: "",
});
const passwordForm = reactive({
  text: "",
  textEncode: "",
});
function encodeText() {
  passwordForm.textEncode = encodeStr(passwordForm.text);
}
function decodeText() {
  passForm.text = decodeStr(passForm.textEncode);
}
onBeforeMount(() => {
  console.log(md5("qwerty"))
})
</script>
