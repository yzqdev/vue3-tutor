<template>
  <div class="personal-box">
    <div class="personal-body">
      <div class="left">
        <div class="img">
          <img :style="{ background: 'url(' + personalData.img + ')' }" />
        </div>
      </div>
      <div class="right">
        <div class="name">{{ personalData.username }}</div>

        <div class="year">
          <a class="date">{{ personalData.joinDate }}</a>
          <a class="time">加入github</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
let props=defineProps({
  personalData: Object
})


</script>

<style lang="scss">
.personal-box {
  width: 100%;
  height: 140px;
  padding: 15px 15px 5px 15px;
  overflow: hidden;

  .personal-body {
    height: 100%;
    width: 100%;
    .left {
      float: left;
      width: 120px;
      height: 100%;
      padding: 15px;
      .img {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        padding: 10px;
        border: 1px solid #4788fb;
        float: left;

        img {
          display: block;
          width: 100%;
          height: 100%;
          background-size: 100% 100% !important;
          border-radius: 50%;
        }
      }
    }
    .right {
      float: left;
      width: calc(100% - 120px);
      .name {
        margin-top: 10px;
        font-size: 2.5rem;
        line-height: 4rem;
        font-weight: bold;
        color: #25f3e6;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .p-name {
        padding: 5px 8px;
        display: inline-block;
        background-color: #71d398;
        font-weight: bold;
        line-height: 1;
        color: #ffffff;
        text-align: center;
        white-space: nowrap;
        font-size: 1rem;
        vertical-align: baseline;
        border-radius: 0.25em;
      }
      .year {
        .time {
          display: block;
          font-size: 1rem;
          color: #fff;
          text-decoration: none;
          cursor: none;
        }
        .date {
          display: block;
          color: #f6a645;
          font-size: 2rem;
          text-decoration: none;
          cursor: none;
        }
      }
    }
  }
  .personal-foot {
    height: 50%;
    width: 100%;
    padding: 10px;
    ul {
      width: 100%;
      overflow: hidden;
      li {
        padding: 0 10px 0 10px;
        font-size: 2rem;
        color: #ffffff;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        i {
          color: #61d2f7;
          font-size: 2rem;
          margin-right: 15px;
        }
      }
    }
  }
}

</style>
