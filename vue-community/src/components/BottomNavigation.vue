<template>
  <div class="bottom_nav">
    <van-tabbar :value="active" route>
      <van-tabbar-item name="home" to="/" value="首页" title="" icon="wap-home"
        >首页</van-tabbar-item
      >
      <van-tabbar-item
        name="publish"
        to="/publish"
        value="发布"
        title=""
        icon="add-square"
        >发布</van-tabbar-item
      >
      <van-tabbar-item
        name="message"
        to="/message"
        value="消息"
        title=""
        icon="comment"
        >消息</van-tabbar-item
      >
      <van-tabbar-item
        name="person"
        to="/personal"
        value="我的"
        title=""
        icon="manager"
        >我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script setup lang="ts">

</script>
<style>
.bottom_nav .mu-bottom-nav-shift-wrapper {
  display: flex;
  justify-content: space-around;
}

.bottom_nav {
  /*height: 5rem;*/
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
