<template>
  <div class="about">
    <div class="about-img">
      <img src="~/assets/img/map.png" />
    </div>
    <article class="content-footer">
      <div class="title">开发者信息</div>
      <div class="tips">安徽运辉科技有限公司</div>
      <div class="title">地址</div>
      <div class="tips">安徽省合肥市高良县巢湖</div>
      <div class="title">联系电话</div>
      <div class="tips">05511111111</div>
      <div class="footer-link" v-if="false">
        <a href="/admin" class="link">应用涉及权限</a>
        <a href="/policy" class="link">隐私政策</a>
        <a href="/condition" class="link">使用条款</a>
      </div>
    </article>

    <div></div>
  </div>
</template>

<script setup>


</script>

<style lang="scss" scoped>
.about {
  display: flex;
  padding: 80px 180px;
  background-color: #f1f3f6;
  height: calc(100vh - 80px);
  .about-img {
    filter: drop-shadow(1rem 0.33rem 3.33rem rgba(188, 190, 210, 0.4));
    img {
      border-radius: 60px;
      width: 70%;
    }
  }
  .content-footer {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    line-height: 20px;
    color: rgb(102, 102, 102);
    .title {
      font-style: normal;
      font-weight: 700;
      font-size: 1.5rem;
      color: #34364d;
      margin-bottom: 20px;
    }
    .tips {
      font-style: normal;
      font-weight: 700;
      font-size: 1.5rem;
      color: #8f909e;
      margin-bottom: 30px;
    }
    .footer-link {
      .link {
        margin-right: 10px;
        color: rgb(102, 102, 102);
        text-decoration: underline;
      }
    }
  }
}
</style>
