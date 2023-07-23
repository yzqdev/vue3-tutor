<template>
  <div class="wrap">
    <div class="nav-container">
      <nav class="nav-wrap">
        <article class="logo">帧流</article>
        <div class="nav-blank"></div>
        <ul class="home-menu">
          <li
            class="home-menu-item"
            :class="route.path == item.link ? `text-red-600` : ``"
            v-for="(item, index) in homeMenu"
            :key="index + `menu`"
          >
            <NuxtLink :to="item.link">{{ item.name }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <nuxt-page />
    <div class="copy">
      <article class="text">
        Copyright © 2020—2021 帧流APP All Rights Reserved.
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const homeMenu = ref([
  { name: 'APP介绍', link: '/home' },
  { name: '加入我们', link: '/join' },
  { name: '关于我们', link: '/about' },
])
const route = useRoute()
const router = useRouter()
onBeforeMount(() => {
  console.log('gotit')
  console.warn(process.client)
  if (process.client) {
    ;(function browser() {
      let isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(
        navigator.userAgent
      )

      function IEVersion() {
        let userAgent = navigator.userAgent
        let isIE =
          userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1
        let isEdge = userAgent.indexOf('Edge') > -1 && !isIE
        let isIE11 =
          userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1
        if (isIE) {
          let reIE = new RegExp('MSIE (\\d+\\.\\d+);')
          reIE.test(userAgent)
          let fIEVersion = parseFloat(RegExp['$1'])
          if (fIEVersion == 7) {
            return 7
          } else if (fIEVersion == 8) {
            return 8
          } else if (fIEVersion == 9) {
            return 9
          } else if (fIEVersion == 10) {
            return 10
          } else {
            return 6
          }
        } else if (isEdge) {
          return 'edge'
        } else if (isIE11) {
          return 11
        } else {
          return -1
        }
      }

      if (IEVersion() !== -1) {
        window.location.href = './updatebrowser.html'
      }

      console.log(isMobile)
      console.log('hdlfskflskflf')

      if (isMobile) {
        document.writeln('您正在使用移动端浏览网页,前往移动端网页...')
        window.location.replace('/h5')
      } else {
        // location.assign('/homepage')
      }
    })()
  }
})
onMounted(() => {
  if (route.path == '/') {
    console.warn(route.path)
    router.push('/home')
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  .nav-container {
    width: 1200px;
    margin: 0 auto;

    .nav-wrap {
      .logo {
        font-style: normal;
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 2rem;
        text-align: center;
      }

      width: 100%;
      min-height: 60px;
      height: 80px;
      display: flex;
      align-items: center;

      .nav-blank {
        width: 800px;
      }

      .home-menu {
        margin: 0;
        padding: 0;
        display: flex;
        text-align: center;
        line-height: 68px;

        .home-menu-item {
          padding: 0 20px;
          display: flex;
          align-items: center;
          font-style: normal;
          font-weight: 700;
          font-size: 1rem;
          line-height: 2rem;
          text-align: center;
          //color: rgba(52, 54, 77, 0.6);
          cursor: pointer;
          a {
            cursor: pointer;
            //color: rgba(52, 54, 77, 0.6);
            text-decoration: none;

            &:hover {
              //color: #34364d;
            }
          }
          .nuxt-link-exact-active {
            color: #34364d;
            border-bottom: 2px solid #34364d;
          }
        }
      }
    }
  }
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.copy {
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: 0;

  .text {
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    color: #8f909e;
    text-align: center;
  }
}
</style>
