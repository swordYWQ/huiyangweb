<template>
   <div class="main-view">
    <div class="company-desc">
      <p>
        晖阳胶粘制品有限公司（原晖阳胶粘带厂）成立于1992年，
        <img src="~/assets/images/introduction1.jpg" alt="" align="right">
        经过十余年的发展，企业已发展成为集压敏胶、涂布、分切、研发为一体的胶粘带专业生产厂家。现在厂房面积21000平方米，引进国内外先进的胶粘制品生产设备80多台（套），配备专业的实验室和检验设备，拥有一批高素质的管理和技术人才队伍。公司主要生产经营聚烯亚胺胶带、PET高温胶带、玛拉胶带、电工胶带、美纹胶带胶带、双面胶带、保护膜、彩色胶带、封箱胶带、PE、PO袋等，是国内胶粘带行业中较大规模的企业，也是目前国内较大的压敏胶粘带制造商之一。公司现已实现“管理现代化、经营国际化”。
      </p>
      <p>
        一直以来，本公司始终秉承“品质第一，精益求精，诚信经营，价格合理，服务至上，为客保密”的宗旨，一一贯之，励精图治。从而赢得了广大厂家的信任和赞誉，我们将一如继往，不断更新，将一流的服务于广大厂家，并诚挚的欢迎广大客户与我们建立长久友好合作，同时也感谢各公司对我公司一直以来的支持，有您往日的支持，才有我们今天的辉煌，也欢迎各厂来电订制，参观指导，谢谢！<br/>
        <img src="~/assets/images/introduction2.jpg" alt="" align="center">
      </p>
    </div>
    <div class="swiper-products">
      <!-- <Swiper :option="swiperOption" :loop="true" :showpagination="false" autoplay autodelay="0" mousewheel waitForTransition>
         <div class="swiper-slide" v-for="(item,index) in list" :key="index">
           <a  class="product-link" href="">
              <img :src="item" alt="" style="width:240px;height:180px;border: 1px solid #bbb">
            </a>
        </div>
      </Swiper> -->
      <div class="swiper-container" style="height:190px;" v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in list" :key="index">
        <!-- <div :style="{background: `url(${item}) top center no-repeat`,width:'100%',height:'100%'}"></div> -->
        <!-- <div :data-background="item" class="swiper-lazy" style="width:100%;height:100%;">
            <div class="swiper-lazy-preloader"></div>
        </div> -->
        <a  class="product-link" href="">
          <img :src="item" alt="" style="width:240px;height:180px;">
        </a>
      </div>
      </div>
      </div>
    </div>
    </div>
</template>
<script>
import Swiper from '~/components/swiper'
export default {
  name: 'home',
  components: {
    Swiper
  },
  data() {
    return {
      list: [
        require('~/assets/images/product1.png'),
        require('~/assets/images/product2.png'),
        require('~/assets/images/product3.png'),
        require('~/assets/images/product4.png'),
        require('~/assets/images/product5.png')
      ],
      swiperOption: {
        // // slidesPerView: 'auto',
        // // loopedSlides: 5
        // // spaceBetween: 30,
        // // centeredSlides: true
        // slidesPerView: 'auto',
        // centeredSlides: true,
        // spaceBetween: 30

        slidesPerView: 'auto',
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
          delay: 0,
          disableOnInteraction: false
        },
        speed: 2000,

        // effect: 'coverflow',
        // grabCursor: true,
        centeredSlides: true
        // coverflowEffect: {
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true
        // }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.main-view {
  width: 680px;
  margin-left: 36px;
  .company-desc {
    p {
      text-indent: 30px;
      line-height: 31px;
      font-size: 14px;
    }
  }

  // .swiper-product {
  // width: 100%;
  // height: 185px;
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 240px;
    height: 185px;
  }
  // .product-link{
  //   display: block;
  //   border: 1px solid #aaa;
  // }
  // }
}
</style>
