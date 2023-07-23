<template>
  <div class="wrapper">
    <Header class="header" title="消息中心"></Header>
    <MessageContent class="tab"></MessageContent>
    <BottomNavigation></BottomNavigation>
  </div>
</template>
<script>
import BottomNavigation from "@/components/BottomNavigation.vue";
import Header from "@/components/Header.vue";
import MessageContent from "@/components/MessageContent.vue";
export default {
  components: {
    MessageContent,
    Header,
    BottomNavigation
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .tab {
    flex: 1;
    margin: 3rem 0 5rem 0;
  }

  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
</style>
