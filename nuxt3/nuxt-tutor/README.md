# nuxt-tutor

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
# 数据获取

三种获取数据的方案: fetch , `@nuxt/http`, `@nuxt/axios`

@nuxt/axios只能用在pages的组件内,其余两个都可以用

最推荐使用fetch:

```
<template>
  <p v-if="$fetchState.pending">Fetching mountains...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <div v-else>
    <h1>Nuxt Mountains</h1>
    <ul>
      <li v-for="mountain of mountains">{{ mountain.title }}</li>
    </ul>
    <button @click="$fetch">Refresh</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        mountains: []
      }
    },
    async fetch() {
      this.mountains = await fetch(
        'https://api.nuxtjs.dev/mountains'
      ).then(res => res.json())
    }
  }
</script>
```

# 初始化vuex store



nuxtServerInit函数不生效?

需要在nuxt.config.js里面设置`ssr:true`:

```
// ssr:true,
  vite: { ssr: true },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
export const actions = {
//!import 这里注意了,需要在nuxtconfig设置 ssr:true
  //这里第一个参数是vuex,第二个参数才是context
  // const {dispatch,commit,getters,state,rootState}= store
  async nuxtServerInit(store, { $http }) {
    const res = $http.$get('https://api.nuxtjs.dev/mountains')
    await store.commit('setMountains', res)
    store.commit('addUser')
    store.commit('addNames')
  }
}
```
