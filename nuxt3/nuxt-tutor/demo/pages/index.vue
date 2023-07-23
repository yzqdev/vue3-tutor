<template>
  <div class='container'>
    <div>

      <h1 class='title'>
        nuxt-tutor
      </h1>
      <div class='links'>
        <nuxt-link to='/fetchdata'>获取数据</nuxt-link>
        <nuxt-link to='/mountains/12'>获取数据</nuxt-link>
      </div>

    </div>
  </div>
</template>

<script>

</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.links a {
  text-decoration: none;
}

</style>
