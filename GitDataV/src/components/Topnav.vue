<template>
  <div class="navbar">
    <ul>
      <li @click="fullBox">
        <icon :type="'quanping'" :size="'2.2rem'" :color="'#fff'"> </icon>
      </li>
      <li @click="changeLen">
        <icon :type="'yuyanqiehuan'" :size="'2.2rem'" :color="'#fff'"> </icon>
      </li>
      <li>
        <icon :type="'ziyuan'" :size="'2.2rem'" :color="'#fff'"> </icon>
      </li>
      <li @click="goHome">
        <icon :type="'zuojiantou1'" :size="'2.2rem'" :color="'#fff'"> </icon>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { useFullscreen } from "@vueuse/core";

const { isFullscreen, enter, exit, toggle } = useFullscreen();
let store = useStore();
let router = useRouter();

let lang = computed((params) => {
  return store.state.language;
});
function fullBox() {
  toggle();
}
function changeLen() {
  if (lang.value === "en") {
    // this.$i18n.locale = "zh";
    store.dispatch("setLanguage", "zh");
  } else {
    // this.$i18n.locale = "en";
    store.dispatch("setLanguage", "en");
  }
}
function goHome() {
  router.push({ path: "/" });
}
</script>

<style lang="scss">
.navbar {
  top: -80px;
  width: 202px;
  height: 50px;
  margin-bottom: 0;
  background: rgba(216, 191, 216, 0.2);
  border-radius: 0;
  border: none;
  margin-left: -150px;
  transition: margin-left 0.9s;
  ul {
    width: 100%;
    height: 100%;
    li {
      float: left;
      width: 50px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
      &:focus {
        background: #3498da;
      }
      &:hover {
        background: #3498da;
      }
    }
  }
  &:hover {
    margin-left: 0px;
  }
}
</style>
