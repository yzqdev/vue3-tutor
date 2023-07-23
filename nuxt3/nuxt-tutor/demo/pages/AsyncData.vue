<template>
<div>
  <h1>Data fetched using asyncData</h1>
  <ul>
    <li v-for="mountain in mountains" :key="mountain.title">
      <NuxtLink
        :to="{ name: 'mountains-slug', params: { slug: mountain.slug } }"
      >
        {{ mountain.title }}
      </NuxtLink>
    </li>
  </ul>
</div>
</template>

<script setup>
import { useFetch } from 'nuxt/app'

let mountains=useFetch('https://api.nuxtjs.dev/mountains')


</script>

<style scoped>

</style>
