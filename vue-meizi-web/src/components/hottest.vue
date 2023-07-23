<template>
  <div>
    <v-container fluid>
      <v-row align="center">
        <v-col class="d-flex" :cols="6" :sm="12">
          <v-select
              v-model="selectHot"
              :items="hotType"
              label="热点类型"
              @change="getData"
              item-text="text"
              item-value="value"
              outlined
          ></v-select>
        </v-col>
        <v-col class="d-flex" :cols="6" :sm="12" xs="12">
          <v-select
              v-model="selectCate"
              :items="category"
              label="分类类型"
              @change="getData"
              item-text="text"
              item-value="value"
              outlined
          ></v-select>
        </v-col>
      </v-row>
      <v-row align="center" v-for="item in dataList">
        <v-col :cols="24" :sm="12"
        >
          <article class="hot-card">
            <span class="hot-card-title">{{ item.title }}</span>
            <span class="hot-card-desc">{{ item.desc }}</span>
          </article>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import VDay from "@/components/day.vue";
import {nextTick, onBeforeMount, reactive, toRefs} from "vue";
import {useStore} from "vuex";
let store=useStore()
let state = reactive({
  selectHot: "views",
  selectCate: "Girl",
  hotType: [
    {text: "浏览数", value: "views"},
    {text: "点赞数", value: "likes"},
    {text: "评论数", value: "comments"},
  ],
  category: [
    {text: "文章", value: "Article"},
    {text: "干货", value: "GanHuo"},
    {text: "妹子", value: "Girl"},
  ],
  dataList: [],
  TAB_NAME: [],
  playPageShow: false,
  blurBgShow: false,
  rankshow: true,
  routerViewAnimation: "page-slide",
})
let {
  dataList,
  selectCate,
  selectHot,
  hotType,
  category,
  TAB_NAME,
  playPageShow,
  blurBgShow,
  rankshow,
  routerViewAnimation
} = toRefs(state)

function getData() {

  this.$axios
      .get(
          `/hot/${state.selectHot}/category/${state.selectCate}/count/10`
      )
      .then((res) => {
        state.dataList = res.data.data;
        nextTick(() => {
           store.commit("updateLoading", false);
        });
      });
}

onBeforeMount(() => {
   store.commit("updateLoading", true);
  getData();
})
</script>
<style lang="scss">
.hot-card {
  display: flex;
  flex-direction: column;

  .hot-card-title {
    font-weight: bolder;
    font-size: 1.2rem;
  }

  .hot-card-desc {
    font-size: 1rem;
  }
}

.swiper-box {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.swiper-item {
  height: 100%;
}

.swiper-pagination-bullet-custom {
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
  text-align: center;
  line-height: 50px;
  color: #999999;
  border-radius: 0 !important;
  background: #fff !important;
  opacity: 1 !important;
}

.swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
  color: #03a9f4;
  background: #03a9f4;
  font-size: 20px;
}

.swiper-pagination {
  top: 0;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
}
</style>
