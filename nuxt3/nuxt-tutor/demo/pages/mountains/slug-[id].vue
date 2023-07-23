<template>
  <article>
    <h1>{{ mountain.title }}</h1>
    <section>
      <img :src='mountain.image' :alt='mountain.title' />
      <p>{{ mountain.description }}</p>
    </section>
    <el-button type='primary' @click='goBack'>Back</el-button>
  </article>
</template>
<script setup>
import { useFetch, useRoute } from 'nuxt/app'
let route=useRoute()
let slug=useState('slug',() => {
  return 0
})
let mountain = useFetch(
  `https://api.nuxtjs.dev/mountains/${ slug.value}`
)
  function  goBack() {
      return this.$router.go(-1)
    }

</script>
<style scoped>
article {
  max-width: 600px;
  margin: 0 auto;
}

img {
  height: 200px;
}

p {
  text-align: left;
}
</style>
