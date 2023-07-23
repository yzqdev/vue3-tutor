<template>
  <div class="layout">
    <Header />
    <main class="container main">
      <div class="notice">
        <a-alert :message="message" show-icon banner>
          <template #icon> </template>
        </a-alert>
      </div>
      <div class="lrcontent">
        <div class="leftcontent"><slot /></div>
        <aside class="aside">
          <CardLeft />
          <Footer />
        </aside>
      </div>
    </main>
  </div>
</template>

<script setup>
const message = ref("这是一条提示信息");
</script>

<style lang="less">
.layout {
  background: #f4f5f5;
}
.container {
  max-width: 1122px;
  margin: 0 auto;
}
.main {
  position: relative;
  padding-top: 57px;
}
.lrcontent {
  position: relative;
  display: flex;
  justify-content: space-between;
}
.leftcontent {
  width: 830px;
  background: #ffffff;
}
.aside {
  // position: absolute;
  width: 280px;
  // top: 0;
  // right: 0;
  z-index: 1;
  // background: #ffffff;
}
.notice {
  margin: 8px 0;
  font-size: 12px;
}
.ant-alert {
  font-size: 12px;
}
</style>
