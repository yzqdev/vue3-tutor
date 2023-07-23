<template>
  <div class="err">
    <div class="head404"></div>

    <div class="text-background-404">
      <div class="text-box">
        <p>对不起，您请求的页面不存在、或已被删除、或暂时不可用</p>

        <p class="padding-box">请点击以下链接继续浏览</p>

        <p><a @click="backTo">》 返回上一页面</a></p>

        <p><a href="/#/index/home">》 返回首页</a></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
function backTo() {
  history.back();
}
</script>

<style scoped>
.err {
  height: 100%;
  background-color: #494949;
  color: #fff;
}
.head404 {
  width: 580px;
  height: 234px;
  margin: 0 auto;
  background: url(https://www.daixiaorui.com/Public/images/head404.png) no-repeat;
}

.text-background-404 {
  width: 499px;
  height: 169px;
  margin: 10px auto 0 auto;
  background: url(https://www.daixiaorui.com/Public/images/txtbg404.png) no-repeat;
}

.text-background-404 .text-box {
  width: 390px;
  position: relative;
  top: 30px;
  left: 60px;
  color: #eee;
  font-size: 13px;
}

.text-background-404 .text-box p {
  margin: 5px 0;
  line-height: 18px;
}

.text-background-404 .text-box .padding-box {
  padding-top: 15px;
}

.text-background-404 .text-box p a {
  cursor: pointer;
  /*color: #eee;*/
  color: #2bcce7;
  text-decoration: none;
}

.text-background-404 .text-box p a:hover {
  color: #fc9d1d;
  text-decoration: underline;
}
</style>
