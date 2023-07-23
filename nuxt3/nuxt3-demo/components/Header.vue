<template>
  <div class="header-box">
    <div class="container header">
      <div class="leftnav header">
        <a href="/">
          <img
            src="~/assets/img/logo4.png"
            alt="logo"
            style="width: 100%; height: 100%"
          />
        </a>
        <div class="nav">
          <a-menu v-model:selectedKeys="current" mode="horizontal">
            <a-menu-item key="index">
              <NuxtLink to="/"> 社区</NuxtLink></a-menu-item
            >
            <a-menu-item key="help">
              <NuxtLink to="/help"> 帮助</NuxtLink></a-menu-item
            >
            <a-menu-item key="about">
              <NuxtLink to="/about"> 关于</NuxtLink>
            </a-menu-item>
          </a-menu>
        </div>
      </div>

      <a href="javascript:;" class="login-button" @click="login">登录</a>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const routeName = route.name;

const current = ref([routeName]);
const login = () => {
  console.log("login");
};
</script>

<style lang="less">
.ant-menu-horizontal {
  border-bottom: none;
}
.leftnav {
  width: 830px;
}
.header-box {
  background: #fff;
  position: fixed;
  width: 100%;
  z-index: 99;
  height: 57px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  transition: all 0.2s;
}
.header {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
}
</style>
