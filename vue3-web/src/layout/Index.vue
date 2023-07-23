<template>
  <el-container class="flex h-full m-[0]">
    <sidebar />

    <el-container class="h-full flex flex-1 flex-col">
      <Header />
      <Content />
      <Footer />
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Sidebar from "./Sidebar.vue";
import Header from "./Header.vue";
import Content from "./Content.vue";
import Footer from "./Footer.vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/user";

let router = useRouter();
let userStore = useUserStore();
onMounted(() => {
  let token = localStorage.getItem("token");
  if (token && token !== "undefined") {
    userStore.setUserToken(token);
    // store.commit("setUserToken", localStorage.getItem("token"));
  } else {
    // router.push({name: "Home"});
  }
});
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  height: 100%;
  margin: 0;

  .main-wrap {
    height: 100%;

    display: flex;
    flex: 1;
    flex-direction: column;
  }
}
</style>
