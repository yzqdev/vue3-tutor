<template>
  <el-aside :native-scrollbar="false" bordered class="sidebar">
    <el-menu :unique-opened="false" :default-active="defaultActive" class="side-menu" background-color="#001529" text-color="#fff" @open="handleOpen" :collapse-transition="false" @close="handleClose">
      <template v-for="item in menus">
        <template v-if="item.children">
          <el-sub-menu :index="item.name" :key="item.name">
            <template #title>
              <i :class="item.meta.icon" class="mr-2 iconfont"></i>
              <span>{{ item.meta.title }}</span>
            </template>
            <template v-for="subItem in item.children">
              <el-sub-menu v-if="subItem.children" :index="subItem.name" :key="subItem.name">
                <template #title>
                  <i :class="subItem.meta.icon" class="mr-2 iconfont"></i>
                  <span>{{ subItem.meta.title }}</span>
                </template>
                <el-menu-item @click="gotoRoute(subItem)" v-for="(threeItem, i) in subItem.children" :key="i" :index="threeItem.index">
                  <i :class="subItem.meta.icon" class="mr-2 iconfont"></i>
                  <span>{{ threeItem.meta.title }}</span>
                </el-menu-item>
              </el-sub-menu>
              <el-menu-item @click="gotoRoute(subItem)" v-else :index="subItem.name" :key="subItem.name">
                <i :class="subItem.meta.icon" class="mr-2 iconfont"></i>
                <span>{{ subItem.meta.title }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item @click="gotoRoute(item)" :index="item.name" :key="item.name">
            <i :class="item.meta.icon" class="mr-2 iconfont"></i>
            <template #title>{{ item.meta.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </el-aside>
</template>

<script lang="ts" setup>
import { computed, watch } from "vue";
import { Document, Menu as IconMenu, Location, Setting, CreditCard, HomeFilled, User, PieChart, AlarmClock, ArrowDown } from "@element-plus/icons-vue";

import { useRoute, RouterLink, useRouter } from "vue-router";
import { useThemeStore } from "@/store/themeConfig";
import { constantRoutes } from "@/router/index";

const defaultActive = ref<string>("home");
const router = useRouter();
const route = useRoute();
let themeStore = useThemeStore();

const menus = reactive(constantRoutes);

function gotoRoute(item) {
  router.push({ name: item.name });
}

const handleOpen = (key: string, keyPath: string[]) => {
  console.log("handle open");
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const themeConfig = computed(() => {
  return themeStore.$state;
});
watch(
  themeConfig,
  (val, oldVal) => {
    if (val.dark) {
      console.log(`%cdark`, `color:red;font-size:16px;background:transparent`);
    } else {
    }
  },
  { immediate: true }
);
watch(
  route,
  (val, oldVal) => {
    defaultActive.value = val.name as string;
    console.log("move to ", val.name);
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
.sidebar {
  width: 13rem;
  background-color: #001529;
  height: 100%;
  display: flex;
  flex-direction: column;

  .logo {
    position: sticky;
    top: 0;
    cursor: pointer;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 12px 20px;
    text-align: center;
    font-size: 1.8em;
    font-weight: 600;
    line-height: 1;
    text-decoration: none;
    background: #001529;
    color: white;

    .logo-icon {
      width: 2rem;
      height: 2rem;
    }
  }

  :deep(.el-menu) {
    .el-menu {
      background-color: #000c17;
    }

    .el-menu-item.is-active {
      background: var(--el-color-primary);
      color: white;
    }
  }
}

.side-menu {
  height: 90vh;
}
</style>
