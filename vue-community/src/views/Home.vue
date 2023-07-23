<template>
    <div class="wrapper">
        <Header class="header" title="Vue.js 中文社区"></Header>
        <!-- <keep-alive> -->
        <ContentTabs class="tab"></ContentTabs>
        <!-- </keep-alive> -->
        <BottomNavigation></BottomNavigation>
    </div>
</template>
<script>
/*eslint-disable */
import Header from '@/components/Header.vue'
import BottomNavigation from '@/components/BottomNavigation.vue'
import ContentTabs from './ContentTabs.vue'
export default {
    components: {
        Header,
         ContentTabs,
        BottomNavigation
    },
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
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
    margin:3rem 0 5rem 0;
}

.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
}
</style>
