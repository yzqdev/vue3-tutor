<template>
  <div class="card">
    <img
      v-lazy="data.images ? data.images[0] + '?imageView2/0/w/200' : null"
      class="img"
    />
    <div class="card-content">
      <div class="desc">{{ data.desc }}</div>
      <div class="card-content-bottom">
        <div class="who">{{ data.who }}</div>
        <div class="time">2017-12-33</div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data:{
    type:Object
  }
})

</script>
<style lang="scss">
@import "./card";
</style>
