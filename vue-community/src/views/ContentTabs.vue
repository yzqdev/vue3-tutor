<template>
  <div ref="myElement" class=" main">
    <!-- ContentTabs -->
    <van-tabs class="tabs" :value="activeTab" @change="handleTabChange">
      <van-tab name="all" title="全部"></van-tab>
      <van-tab name="good" title="精华"></van-tab>
      <van-tab name="weex" title="weex"></van-tab>
      <van-tab name="share" title="分享"></van-tab>
      <van-tab name="ask" title="问答"></van-tab>
      <van-tab name="job" title="招聘"></van-tab>
    </van-tabs>
    <!-- 帖子列表 -->
    <van-list @load="loadMore" v-model="loading">
      <template v-for="(item, index) in items">
        <section class="list">
          <!-- <img @click="user(index)" :src="item.author.avatar_url" alt=""> -->
          <router-link
            :to="{
              path: '/user',
              query: { user: item.author.loginname }
            }"
            :src="item.author.avatar_url"
            tag="img"
            alt="user"
          ></router-link>
          <router-link
            :to="{ path: '/content', query: { id: item.id } }"
            tag="div"
            class="content"
          >
            <div class="list_title">
              <span v-if="item.top">置顶</span>
              <span v-else-if="item.good">精华</span>
              <span v-else-if="item.tab === 'share'" :style="styleObj"
                >分享</span
              >
              <span v-else-if="item.tab === 'ask'" :style="styleObj">问答</span>
              <span v-else-if="item.tab === 'job'" :style="styleObj">招聘</span>
              <h3>{{ item.title }}</h3>
            </div>
            <div class="timer">
              <span>{{ item.reply_count }} / {{ item.visit_count }}</span>
              <span>{{   timeago(item.last_reply_at ) }}</span>
            </div>
          </router-link>
        </section>
      </template>
      <p class="nomore" v-show="nomore">没有更多了。。。</p>
    </van-list>
    <section v-if="!items.length">
      暂无话题
    </section>

    <van-loading v-show="loading" type="spinner"></van-loading>
  </div>
</template>
<script>
import {format} from "timeago.js";
export default {
  name: "ContentTabs",
  data() {
    return {
      loading: false,
      scroller: null,
      nomore: false,
      activeTab: "all", //当前选中tab项
      items: [],
      styleObj: {
        backgroundColor: "#999"
      },
      page: 1,
      scrollValue: null
    };
  },
  created() {
    this.getData();
  },
  mounted() {
    this.loadMore();
    // this.getScroll()
  },
  update() {
    window.scrollValue = 200;
  },


  methods: {   timeago(val) {
      let time = new Date(val);
      return  format(time, "zh_CN"); //将UTC时间转换格式---> 几天前,几小时前...
    },
    loadMore() {
      if (!this.nomore) {
        this.loading = true;
        this.page += 1;
        let arr = [];
        setTimeout(() => {
          this.$axios
            .get(`/topics`  )
            .then(response => {
              arr = response.data.data;
              console.log(arr, "getHomeContent");
              if (arr.length === 0) {
                this.loading = false;
                this.nomore = true;
                return;
              }
              this.items = [...this.items, ...arr];
              arr = [];
            });
          this.loading = false;
        }, 1000000);
      }
    },

    handleTabChange(val) {
      this.page = 1; //切换tab，页数重置为第一页
      this.nomore = false; //切换tab，重置

      this.activeTab = val;
      // this.url = "https://www.vue-js.com/api/v1/topics?tab=" + val;
      this.getData();
    },
    getData() {
      // let url = 'http://www.vue-js.com/api/v1/topics?tab=all'
      // let url = this.url + '&page=' + this.num
      this.$axios.get("/topics?tab=" + this.activeTab).then(response => {
        this.items = response.data.data;
        // console.log(this.items)
      });
    }
  }
};
</script>
<style scoped>
.main {
  overflow: auto;
}

.list {
  display: flex;
  border-bottom: 1px solid #999;
  padding: 1rem;
}

.list > img {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin-right: 1rem;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.list_title {
  cursor: pointer;
  /*display: flex;*/
}

.list_title > span {
  /*white-space:nowrap;*/
  background-color: #009688;
  color: #fff;
  padding: 0.2rem;
  border-radius: 0.2rem;
}

.list_title > h3 {
  display: inline;
  font-weight: 700;
}

.timer {
  display: flex;
  justify-content: space-between;
  color: #999;
}

.nomore {
  text-align: center;
  padding: 1rem 0;
}
</style>
