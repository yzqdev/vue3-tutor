<template>
  <div class="tab border-2 border-emerald-300 border-solid">
    <h2>keepalive</h2>
    <div class="tab-tit">
      <!--点击设置curId的值  如果curId等于0，第一个a添加cur类名，如果curId等于1，第二个a添加cur类名，以此类推。添加了cur类名，a就会改变样式 @click,:class ,v-show这三个是vue常用的指令或添加事件的方式-->
      <a href="javascript:;" @click="curId = 'Html'" :class="{ cur: curId === 'Html' }">html</a>
      <a href="javascript:;" @click="curId = `Css`" :class="{ cur: curId === `Css` }">css</a>
      <a href="javascript:;" @click="curId = `Javascript`" :class="{ cur: curId === `Javascript` }">javascript</a>
    </div>
    <div class="tab-con">
      <!--根据curId的值显示div,如果curId等于0，第一个div显示，其它三个div不显示。如果curId等于1，第二个div显示，其它三个div不显示。以此类推-->

      <keep-alive>
        <component :is="Tabs[curId]"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script setup lang="ts">
import Html from "./tab/Html.vue";
import Css from "./tab/Css.vue";
import Javascript from "./tab/Javascript.vue";

const curId =  ref("Html");
const name =  ref("hh");
const Tabs = {
  Html,
  Css,
  Javascript,
};
</script>

<style scoped>
body {
}

body {
  font-family: "Microsoft YaHei", serif;
}

.tab {
  width: 600px;
  margin: 0 auto;
}
.tab-tit {
  font-size: 0;
  width: 600px;
}
.tab-tit a {
  display: inline-block;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  width: 25%;
  text-align: center;
  background: #ccc;
  color: #333;
  text-decoration: none;
}
.tab-tit .cur {
  background: #09f;
  color: #fff;
}
.tab-con div {
  border: 1px solid #ccc;
  height: 400px;
  padding-top: 20px;
}
</style>
