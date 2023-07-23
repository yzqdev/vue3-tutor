<template>
  <div class="wrapper">
    <Header title="登录"></Header>
    <main>
      <van-field
        v-model="val"
        label="Access Token"
        :errorText="error"
      ></van-field>
      <van-button @click="login" size="normal" type="primary">登录</van-button>
    </main>
    <BottomNavigation></BottomNavigation>
  </div>
</template>
<script>
import BottomNavigation from "@/components/BottomNavigation.vue";
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
    BottomNavigation
  },
  data() {
    return {
      val: "",
      error: ""
    };
  },
  methods: {
    login() {
      // 'Access Token: 55b176a9-8a6a-4b0b-b13c-1c04e9db5d1a'

      this.$axios
        .post("/accesstoken", {
          accesstoken: this.val
        })
        .then(response => {
          // console.log(response)
          this.error = "";
          localStorage.setItem("accesstoken", this.val);
          localStorage.setItem("user_id", response.data.id);
          localStorage.setItem("loginname", response.data.loginname);
          // alert(localStorage.getItem("accessToken"))
          this.$router.push({
            path: "/personal"
          });
        })
        .catch(error => {
          console.log("error");
          this.error = "输入错误，请重新输入";
          console.log(this.$route.matched);
          this.$route.matched[0].meta = {
            requiresAuth: true
          };
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
  background-color: #009688;
  text-align: center;
  height: 5rem;
}

main {
  flex: 1;
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
