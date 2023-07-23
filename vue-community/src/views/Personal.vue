<template>
  <div class="wrapper">
    <Header title="个人中心"></Header>
    <main>
      <!-- 个人信息 -->
      <img :src="user_msg.avatar_url" alt="user" />
      <span class="name">{{ user_msg.loginname }}</span>
      <div class="timer">
        <span>积分：{{ user_msg.score }}</span>
        <span>注册时间：{{ user_msg.create_at | timeago }}</span>
      </div>
      <!-- 最近主题、回复、收藏 -->
      <section class="content">
        <van-list>
          <van-cell
            class="list"
            v-if="user_msg.recent_topics"
            title="最近主题"
            toggleNested
            :open="false"
          >
            <van-cell
              :to="{
                path: '/content',
                query: { id: item.id }
              }"
              v-for="item in user_msg.recent_topics"
              :key="item.id"
              slot="nested"
              :title="item.title"
            >
            </van-cell>
            <span class="count">{{ user_msg.recent_topics.length }}个</span>
          </van-cell>
          <van-cell
            class="list"
            v-if="user_msg.recent_replies"
            title="最近回复"
            toggleNested
            :open="false"
          >
            <van-cell
              :to="{
                path: '/content',
                query: { id: item.id }
              }"
              v-for="item in user_msg.recent_replies"
              :key="item.id"
              slot="nested"
              :title="item.title"
            >
            </van-cell>
            <span class="count">{{ user_msg.recent_replies.length }}个</span>
          </van-cell>
          <van-cell
            class="list"
            v-if="user_msg.collect_topics"
            title="收藏主题"
            toggleNested
            :open="false"
          >
            <van-cell
              :to="{
                path: '/content',
                query: { id: item.id }
              }"
              v-for="item in user_msg.collect_topics"
              :key="item.id"
              slot="nested"
              :title="item.title"
            >
            </van-cell>
            <span class="count">{{ user_msg.collect_topics.length }}个</span>
          </van-cell>
        </van-list>
      </section>
      <!-- 退出登录按钮 -->
      <van-button type="warning" @click="logout">退出登录</van-button>
    </main>
    <BottomNavigation></BottomNavigation>
  </div>
</template>
<script>
import {format} from "timeago.js";
import BottomNavigation from "../components/BottomNavigation.vue";
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
    BottomNavigation
  },
  data() {
    return {
      accesstoken: "",
      user: {},
      user_msg: {}
    };
  },
  created() {
    this.accesstoken = localStorage.getItem("accesstoken");
    if (this.accesstoken) {
      this.getData();
    } else {
      this.$router.push({
        name: "login"
      });
    }
  },

  methods: {
     timeago(val) {
      let time = new Date(val);

      return  format(time, "zh_CN"); //将UTC时间转换格式---> 几天前,几小时前...
    },
    getData() {
      this.$axios
        .post("/accesstoken", {
          accesstoken: this.accesstoken
        })
        .then(response => {
          this.user = response.data;
          this.getUserData();
        });
    },
    getUserData() {
      this.$axios.get("/user/" + this.user.loginname).then(response => {
        this.user_msg = response.data.data;
        // console.log(this.user_msg)
      });
    },
    logout() {
      localStorage.removeItem("accesstoken");
      localStorage.removeItem("user_id");
      localStorage.removeItem("loginname");
      this.$router.push({
        path: "/"
      });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}

.title {
  text-align: center;
  height: 5rem;
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: #f8f8f8;
}



main > img {
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  margin: 1rem 0;
}

.name {
  color: #009688;
  font-weight: 700;
  font-size: 24px;
}

.timer {
  display: flex;
  justify-content: space-around;
  width: 60%;
  margin: 1rem 0;
}

.content {
  flex: 1;
  width: 100%;
  overflow-y: auto;
  margin-bottom: 1rem;
}

.mu-list {
  padding: 0;
}

.list:first-child {
  border-top: 1px solid #009688;
}

.count {
  background-color: #009688;
  color: #fff;
  padding: 0.1rem 0.6rem;
  border-radius: 0.2rem;
  margin-top: 2rem;
}

.icon {
  color: #009688;
}
</style>
