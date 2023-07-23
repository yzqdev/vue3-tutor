<template>
  <div>
    <section class="content">
      <article class="content-left">
        <section class="left-section">
          <div class="app-name">帧流商家版App</div>
          <article class="content-title">
            视频每一帧
            <br />
            都为您引流
          </article>
          <article>为大众创造更美好的生活</article>
          <article class="qr-logo">
            <canvas
              class="qr-code-logo"
              height="100"
              width="100"
              style="margin-top: 50px"
            ></canvas>
            <br />
            立即扫码下载
          </article>
        </section>
      </article>
      <article class="content-right">
        <img class="img-fluid" src="~/assets/img/phone.png" />
      </article>
    </section>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.content {
  background-color: #f1f3f6;
  display: flex;
  padding: 80px;
  height: calc(100vh - 80px);
  .qr-logo {
    display: none;

    .qr-code-logo {
      width: 150px;
      height: 150px;
      padding: 10px;
      background-color: #fff;
      border: 2px solid #e3e3e3;
      border-radius: 4px;
    }
  }

  .content-left {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
    width: 50%;

    .left-section {
      margin: 0 160px;

      .app-name {
        font-size: 46px;
        font-weight: 700;
      }

      .content-title {
        margin-top: 40px;
        margin-bottom: 40px;
        font-size: 56px;
        font-weight: 700;
      }
    }
  }

  .content-right {
    .img-fluid {
      width: 65%;
    }

    font-size: 30px;
  }
}
</style>
