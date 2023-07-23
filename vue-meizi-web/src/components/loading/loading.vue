<template>
    <div class="loading" v-show="show">
        <div class="loader-inner ball-pulse">
            <div></div>
            <div></div>
            <div></div>
        </div>
         </div>
</template>
<script>
    export default {
        name: 'v-loading',
        props: {
            show: {
                type: Boolean
            }
        }
    };
</script>

<style lang="scss">
@import './loading.css';
</style>
