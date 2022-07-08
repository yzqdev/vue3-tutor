<template>
  <div>
    <nav>
      <el-menu
        class="sidebar-el-menu"
        unique-opened
        :default-active="$route.path"
        mode="horizontal"
      >
        <template v-for="item in menus">
          <template v-if="item.subs">
            <el-sub-menu :index="item.index" :key="item.index">
              <template #title>
                <i :class="item.icon"></i>
                <span>{{ item.title }}</span>
              </template>
              <template v-for="subItem in item.subs">
                <el-sub-menu
                  v-if="subItem.subs"
                  :index="subItem.index"
                  :key="subItem.index"
                >
                  <template #title>{{ subItem.title }}</template>
                  <el-menu-item
                    @click="gotoRoute(subItem)"
                    v-for="(threeItem, i) in subItem.subs"
                    :key="i"
                    :index="threeItem.index"
                  >
                    {{ threeItem.title }}
                  </el-menu-item>
                </el-sub-menu>
                <el-menu-item
                  @click="gotoRoute(subItem)"
                  v-else
                  :index="subItem.index"
                  :key="subItem.index"
                >
                  {{ subItem.title }}
                </el-menu-item>
              </template>
            </el-sub-menu>
          </template>
          <template v-else>
            <el-menu-item
              @click="gotoRoute(item)"
              :index="item.index"
              :key="item.index"
            >
              <i :class="item.icon"></i>
              <template #title>{{ item.title }}</template>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
      <!-- 路由出口 -->
      <!-- 路由匹配到的组件将渲染在这里 -->
      <div class="container">
        <router-view></router-view>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

let router = useRouter();
let defaultMenu = [
  { index: "/home", name: "Home", title: "首页" },
  {
    index: "/test-vue",
    name: "routername",
    title: "vue用法",
    icon: "aa",
    subs: [
      { index: "/show-weather", name: "ShowWeather", title: "天气" },
      { index: "/usage", name: "Usage", title: "用法" },
      { index: "/title", name: "Markdown", title: "markdown" },
      { index: "/pictures", name: "Pictures", title: "图片" },
      { index: "/test-api", name: "TestApi", title: "api测试" },
    ],
  },
  {
    index: "/vuex-demo",
    name: "vuex",
    title: "vuex",
    subs: [{ index: "/vuex/dog", name: "Dogs", title: "dog" }],
  },

  { index: "/tutor", name: "Tutor", title: "教程" },
  { index: "/vue", name: "Vue", title: "教程2" },
  {
    index: "/about",
    name: "About",
    title: "关于",
  },
];
let menus = $ref(defaultMenu);

function gotoRoute(item) {
  router.push({ name: item.name });
}
</script>

<style scoped></style>
