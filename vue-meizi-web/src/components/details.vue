<template>
  <div ref="details">
    <transition name="fade">
      <div v-show="showFlag" class="details">
        <div>
          <header class="header">
            <header class="bar bar-nav" @click="hide">
              <div class="pull-left">
                <span class="iconfont icon-left"></span>
              </div>
              <div class="title">
                {{ detailsData.publishedAt || formatDate(time) }}
              </div>
            </header>
          </header>
          <v-day :data="detailsData" ref="day"></v-day>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup>
import {formatDate} from "@/common/js/date";
import BScroll from "better-scroll";
import VDay from "@/components/day.vue";
import dayjs from "dayjs";
import {nextTick, reactive, toRefs,ref} from "vue";

function formatDate(time) {

  return dayjs.format(time, "yyyy-MM-dd");
}

let state = reactive({
  showFlag: false,
  scroll:{}
})
let {showFlag} = toRefs(state)
let props = defineProps({
  time: {
    type: String
  }, detailsData: {
    type: Object
  }
})
let details=ref(null)
let day=ref(null)
function show() {
  state.showFlag = true;
  nextTick(() => {
    if (!state.scroll) {
      state.scroll = new BScroll(details.value, {
        click: true,
      });
    } else {
      state.scroll.refresh();
    }
     day.clearStyle();
  });
}

function hide() {
  state.showFlag = false;
}
</script>

<style lang="scss">
.details {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 30;
  width: 100%;
  height: 100%;
  background-color: #fff;
}

.details.fade-enter-active,
.details.fade-leave-active {
  transition: all 0.2s linear;
  transform: translate3d(0, 0, 0);
}

.details.fade-enter,
.details.fade-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
</style>
