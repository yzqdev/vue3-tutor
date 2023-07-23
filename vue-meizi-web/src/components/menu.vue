<template>
  <div class="menu">
    <div class="menu-list" :class="{ show: show }">
      <div class="menu-header">
        <img
          class="menu-avatar"
          src="https://avatars0.githubusercontent.com/u/11735533?v=3&amp;u=02b515725d0e52cdf5f02e2dbdc98c1de3ddbcc2&amp;s=400"
          alt=""
        />
        <div class="menu-title">YangYi && liangxiaojuan</div>
      </div>
      <div class="menu-ul">
        <div
          v-for="menu in menus"
          @click="updateHeader(MENU_CONVERT[menu], menu)"
        >
          <div
            class="icon-quanbu iconfont item border-1px"
            @click="gotoRoute(menu)"
          >
            <div class="menu-icon">
              <i class="iconfont" :class="'icon-' + menu"></i>
            </div>
            <span class="menu-text">{{ MENU_CONVERT[menu] }}</span>
            <div class="menu-new" v-show="menu === 'day' && news > 0">
              <span>5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="menu-other"></div>
  </div>
</template>

<script setup>
import {mapState, useStore} from "vuex";
import {computed, reactive, toRefs} from "vue";
import {useRouter} from "vue-router";
let store=useStore()

let router=useRouter()
let state=reactive({
  MENU_CONVERT: { welfare: "福利",
    day: "本周最热",
    ios: "IOS",
    android: "Android",
    web: "前端",}
})
let {MENU_CONVERT}=toRefs(state)
let props=defineProps({
  show:{
    type:Boolean
  }
})

function gotoRoute(route) {
   router.push({ name: route });
}
function updateHeader(title, menu) {
  store.commit("updateTitle", title);
  store.commit("updateMenuShow");
  if (menu === "day") {
    store.commit("updateNews");
  }
}
let menus=computed(() => {
  return store.state.menus
})
let news=computed(()=>store.state.news)

</script>
<style lang="scss">
.menu .menu-list {
  position: fixed;
  top: 0;
  bottom: 0;
  flex: 0 0 250px;
  left: -250px;
  width: 250px;
  background-color: #22262a;
  color: #313131;
  transition: all 0.3s ease;
  z-index: 99;
}
.menu .menu-list .menu-header {
  width: 100%;
  height: 180px;
  background-color: #262d30;
}
.menu .menu-list .menu-header .menu-avatar {
  width: 40%;
  height: auto;
  border-radius: 50%;
  margin: 20px 70px;
}
.menu .menu-list .menu-header .menu-title {
  font-size: 14px;
  color: #fff;
  line-height: 28px;
  font-weight: 500;
  text-align: center;
}
.menu .menu-list.show {
  transform: translateX(250px);
}
.menu .menu-list .menu-ul {
  margin: 0;
  overflow: hidden;
  padding: 0;
}
.menu .menu-list .menu-ul .item {
  display: block;
  font-size: 14px;
  padding: 10px 13px;
  text-align: left;
  text-indent: 1px;
  line-height: 15px;
  color: #a6adb3;
  font-weight: 700;
  position: relative;
}
.menu .menu-list .menu-ul .item:after {
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  border-top: 1px solid #40474a;
  width: 100%;
  content: "";
}
.menu .menu-list .menu-ul .itemlast-child {
  margin-bottom: 50px;
}
.menu .menu-list .menu-ul .itembefore {
  color: #2c3e50;
}
.menu .menu-list .menu-ul .item .line {
  border-top: 1px solid #d4d4d4;
}
.menu .menu-list .menu-ul .item .menu-icon {
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: #383c40;
  border-radius: 50%;
  vertical-align: top;
  text-align: center;
}
.menu .menu-list .menu-ul .item .menu-icon .iconfont {
  color: #999;
  line-height: 30px;
  font-weight: 700;
}
.menu .menu-list .menu-ul .item.active {
  color: #01aef3;
}
.menu .menu-list .menu-ul .item.active .menu-icon {
  background-color: #01aef3;
}
.menu .menu-list .menu-ul .item.active .menu-icon .iconfont {
  color: #fff;
}
.menu .menu-list .menu-ul .item .menu-text {
  display: inline-block;
  font-size: 15px;
  line-height: 32px;
  vertical-align: top;
  margin-left: 10px;
  font-weight: 700;
}
.menu .menu-list .menu-ul .item .menu-new {
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: #d81229;
  border-radius: 50%;
  vertical-align: top;
  text-align: center;
  float: right;
}
.menu .menu-list .menu-ul .item .menu-new span {
  color: #fff;
  font-size: 15px;
  line-height: 30px;
  font-weight: 500;
}
</style>
