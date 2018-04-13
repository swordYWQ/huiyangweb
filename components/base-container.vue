<template>
  <div>

    <header class="header">
      <!-- <img src="~assets/images/header.jpg" alt="http://dghuiyang.com.cn/"> -->
    </header>

    <div class="nav">
      <NavBar></NavBar>
    </div>

    <div class="swipe-pic">
      <Swiper autoplay autodelay="3000" effect="cube" mousewheel>
        <div class="swiper-slide" v-for="(item,index) in list" :key="index">
          <!-- <img class="swiper-images" :src="item" alt=""> -->
          <div :style="{width: '100%', height: '100%', background: `url(${item}) top center no-repeat`}"></div>
        </div>
      </Swiper>
    </div>

    <div class="wrapper">
      <main id="main" class="main-content">
        <SideBarLeft></SideBarLeft>
        <slot></slot>
      </main>
    </div>

    <Copyright></Copyright>
  </div>
</template>
<script>
import NavBar from './nav-bar.vue'
import Swiper from './swiper'
import SideBarLeft from '~/components/sidebar-left.vue'
import Copyright from './copyright.vue'
export default {
  name: 'Main',
  components: {
    NavBar,
    Swiper,
    Copyright,
    SideBarLeft
  },
  data() {
    return {
      list: [
        require('~/assets/images/mswiper1.jpg'),
        require('~/assets/images/mswiper2.jpg')
      ]
    }
  }
}
</script>