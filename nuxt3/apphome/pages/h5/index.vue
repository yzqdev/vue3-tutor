<template>
  <div class="wrap">
    <article class="content-head">
      <div>应用名称：帧流</div>
      <div class="version" v-if="false">
        APP版本： ios/android 1.0.1 (更新日期：2021.05.11)
      </div>
      <div class="tips">安徽运辉科技有限公司</div>
      <div class="tips">地址</div>
      <div class="tips">安徽省合肥市高良县巢湖</div>
      <div class="tips">联系电话</div>
      <div>联系电话：055165181697</div>
      <div class="footer-link" v-if="false">
        <a href="/admin" class="link">应用涉及权限</a>
        <a href="/policy" class="link">隐私政策</a>
        <a href="/condition" class="link">使用条款</a>
      </div>
    </article>

    <article class="content-center">
      <div class="app-name">帧流商家版App</div>
      <article class="content-tips">
        视频每一帧
        <br />
        都为您引流
      </article>
      <article>为大众创造更美好的生活</article>
    </article>
    <article class="h5-img">
      <img class="img-fluid" src="~/assets/img/phone.png" />
    </article>
    <article style="height: 60px"></article>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.wrap {
  background: cyan;

  .h5-img {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 80%;
      height: 80%;
    }
  }

  .content-head {
    padding: 15px;
    display: flex;
    flex-direction: column;
    font-size: 10px;
    line-height: 15px;
    color: rgb(102, 102, 102);
    border-bottom: 1px solid #08acac;

    .footer-link {
      .link {
        margin-right: 10px;
        color: rgb(102, 102, 102);
        //color: #111111;
        text-decoration: underline;
      }
    }
  }

  .content-center {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding-top: 15px;
    margin-top: 40px;

    .app-name {
      font-size: 23px;
      margin-bottom: 20px;
    }

    .content-tips {
      font-size: 32px;
      font-weight: 700;
      margin-bottom: 40px;
    }
  }
}
</style>
