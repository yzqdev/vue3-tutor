<template>
  <div class="day bounceInRight" rel="dom">
    <h1>{{ data.title }}</h1>
    <div v-html="data.content"></div>
    <img ref="dayImg" class="day-img" :src="data.url"/>

    <article>
      <span>发布日期:{{ data.publishedAt }}</span>
    </article>
  </div>
</template>

<script setup>
import {nextTick, onMounted, reactive, ref, toRefs} from "vue";


defineProps({
  data: {
    type: Object
  }
})
let state = reactive({
  content: false
})
let dayImg = ref(null)
let {content} = toRefs(state)

function clearStyle() {
  nextTick(() => {
    let tags = dayImg.value
    for (let i = 0; i < tags.length; i++) {
      tags[i].removeAttribute("style");
    }
  });
}

onMounted(() => {
  clearStyle()
})
</script>
<style lang="scss">
.day {
  padding: 50px 10px 20px 10px;

  .day-img {
    width: 100%;
  }

  ul img,
  h2,
  p:nth-last-child(2),
  p:nth-last-child(1),
  [target="_blank"] img,
  embed {
    display: none;
  }

  h1 {
    text-align: left;
    font-weight: 700;
    font-size: 16px;
    line-height: 32px;
    margin: 10px 0;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: normal !important;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  h3 {
    color: #000;
    text-align: left;
    padding: 10px 0;
    font-size: 16px;
    font-weight: 700;
  }

  ul {
    color: #000;
    text-align: left;
    padding-left: 10px;
    font-size: 14px;
    font-weight: 400;

    li {
      line-height: 20px;
      padding: 5px 0;
      -webkit-animation-name: bounceInRight;
      animation-name: bounceInRight;
    }
  }

  p {
    font-size: 0;

    img {
      width: 100%;
    }
  }
}


</style>
