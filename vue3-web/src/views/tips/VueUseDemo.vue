<template>
  <el-button @click="copy(source)">
    <!-- by default, `copied` will be reset in 1.5s -->

    <span v-if="!copied">Copy</span>
    <span v-else>Copied!</span>
  </el-button>
  <span>{{ source }}</span>
</template>

<script setup lang="ts">
import { useClipboard, useNetwork } from "@vueuse/core";
import { useBrowserLocation } from "@vueuse/core";

const location = useBrowserLocation();

import { useUrlSearchParams } from "@vueuse/core";

const params = useUrlSearchParams("hash");
import { reactive } from "vue";

const network = useNetwork();
console.log(`%cnetwork`, `color:red;font-size:16px;background:transparent`);
console.log(network);
console.log(params.foo); // 'bar'

params.foo = "bar";
params.vueuse = "awesfde";

const source =  ref("Hello");
const { text, copy, copied, isSupported } = useClipboard();
console.log(text);
onMounted(() => {
  console.log(location.value);
});
</script>

<style lang="scss" scoped></style>
