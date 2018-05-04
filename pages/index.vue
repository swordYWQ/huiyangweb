<template>
  <!-- <BaseContainer> -->
 
  <!-- </BaseContainer> -->
  <div>

    <header class="header">
      <!-- <img src="~assets/images/header.jpg" alt="http://dghuiyang.com.cn/"> -->
    </header>

    <div class="nav">
      <NavBar :nav="nav"></NavBar>
    </div>

    <div class="swipe-pic">
      <!-- <Swiper :option="swiperOption" mousewheel>
        <div class="swiper-slide" v-for="(item,index) in bannerlist" :key="index">
          <div :style="{background: `url(${item}) top center no-repeat`,width:'100%',height:'100%'}"></div>
        </div>
      </Swiper> -->
      <div class="swiper-container" style="height:400px;" v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in bannerlist" :key="index">
        <!-- <div :style="{background: `url(${item}) top center no-repeat`,width:'100%',height:'100%'}"></div> -->
        <div :data-background="item" class="swiper-lazy" style="width:100%;height:100%;">
            <div class="swiper-lazy-preloader"></div>
        </div>
      </div>
    </div>
     <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
  </div>
    </div>

    <div class="wrapper">
      <main id="main" class="main-content">
        <SideBarLeft></SideBarLeft>
        <!-- <slot></slot> -->
        <transition name="page">
          <nuxt-child></nuxt-child>
        </transition>
      </main>
    </div>

    <Copyright></Copyright>
  </div>
</template>
<script>
// import axios from '~/plugins/axios'
// import BaseContainer from '~/components/base-container.vue'
import NavBar from '~/components/nav-bar.vue'
import SideBarLeft from '~/components/sidebar-left.vue'
import Copyright from '~/components/copyright.vue'

// import Swiper from '~/components/swiper'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  // async asyncData() {
  //   let { data } = await axios.get('/api/users')
  //   return { users: data }
  // },
  // async asyncData() {
  //   let { data } = await axios.get('/api/category/get')
  //   return { category: data }
  // },
  components: {
    // BaseContainer,
    NavBar,
    SideBarLeft,
    Copyright
    // Swiper,
    // swiper,
    // swiperSlide
  },
  asyncData() {
    return {
      nav: {
        list: [
          {
            id: 1,
            name: '公司简介',
            url: '/'
          },
          {
            id: 2,
            name: '产品简介',
            url: '/product'
          },
          {
            id: 3,
            name: '美纹纸胶带',
            url: '/product/1'
          },
          {
            id: 4,
            name: 'BOPP胶带',
            url: '/product/2'
          },
          {
            id: 5,
            name: '高温胶带',
            url: '/product/3'
          },
          {
            id: 6,
            name: '电子部品胶带',
            url: '/product/4'
          },
          {
            id: 7,
            name: '荣誉证书',
            url: '/credentials'
          },
          {
            id: 8,
            name: '工厂设备',
            url: '/device'
          },
          {
            id: 9,
            name: '留言反馈',
            url: '/comments'
          },
          {
            id: 10,
            name: '联系我们',
            url: '/contact'
          }
        ]
      },
      banner: {
        list: []
      },
      product: {
        list: []
      }
    }
  },
  data() {
    return {
      bannerlist: [
        // '/assets/images/mswiper1.jpg',
        // '/assets/images/mswiper2.jpg'
        require('~/assets/images/mswiper1.jpg'),
        require('~/assets/images/mswiper2.jpg')
      ],
      swiperOption: {
        lazy: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  // head() {
  //   return {
  //     title: '主页'
  //   }
  // },
  layout: 'default'
}
</script>

<style lang="scss" scoped>

</style>
