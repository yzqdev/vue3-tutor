<template>
  <header>
    <h1>🍍 Pinia playground</h1>
    <nav class="pinia-nav">
      <template v-for="(page, i) in pages" :key="page.name">
        <router-link :to="page" v-slot="{ route }">
          {{ route.fullPath }}
        </router-link>
      </template>
    </nav>
  </header>

  <section>
    <router-view />
  </section>

  <footer>
    <p>
      ©2021 Eduardo San Martin Morote
      <br />
      <a :href="sourceCodeLink">Source Code</a>
    </p>
  </footer>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const pages = router
  .getRoutes()
  .filter((route) => !route.meta.hide)
  .filter((route) => {
    return route.path.includes("pinia");
  })
  .map((route) => ({ name: route.name }));
const sourceCodeLink = computed(() => {
  if (route.name) {
    return `https://github.com/vuejs/pinia/blob/v2/packages/playground/src/views/${route.name}.vue`;
  } else {
    return `https://github.com/vuejs/pinia/blob/v2/packages/playground/src/`;
  }
});
</script>

<style lang="scss" scoped>
button {
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

.pinia-nav {
  display: flex;
  flex-direction: column;

  a {
    color: var(--el-color-primary);
    margin: 0.5rem;
  }
}
</style>
