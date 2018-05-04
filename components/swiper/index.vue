<template>
  <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
  <div class="swiper-component">
    <div class="swiper-container" v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">

          <slot>
            <div class="swiper-slide" v-for="(item,index) in list" :key="index">
              <img :style="{width:imgwidth,height: imgheight}" :src="item">
            </div>
          </slot>

      </div>
      <!-- 如果需要分页器 -->
      <div v-show="showpagination" class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div v-show="shownavigation" class="swiper-button-prev"></div>
      <div v-show="shownavigation" class="swiper-button-next"></div>

      <!-- 如果需要滚动条 -->
      <div v-show="showscrollbar" class="swiper-scrollbar"></div>
    </div>
</div>
</template>

<script>
export default {
  props: {
    imgwidth: {
      type: [Number, String]
    },
    imgheight: {
      type: [Number, String]
    },
    // 图片列表数组，当为空数组时自动匹配slot
    list: {
      type: Array,
      default: () => {
        return []
      }
    },
    // swiper配置
    option: {
      type: Object,
      default: () => {
        return {}
      }
    },
    // 是否显示翻页标签 默认为true
    showpagination: {
      type: Boolean,
      default: true
    },
    // 是否显示两边上一图或下一张图标签 默认为false
    shownavigation: {
      type: Boolean,
      default: false
    },
    // 是否显示滚动条 默认为false
    showscrollbar: {
      type: Boolean,
      default: false
    },
    // 滚动方向 horizontal 水平 vertical 垂直
    direction: {
      type: String,
      default: 'horizontal'
    },
    // 是否自动播放 默认为false
    autoplay: {
      type: Boolean,
      default: false
    },
    // 自动播放 延迟 单位ms
    autodelay: {
      type: [Number, String],
      default: 2500
    },
    waitForTransition: {
      type: Boolean,
      default: false
    },
    // 循环播放
    loop: {
      type: Boolean,
      default: false
    },
    // 鼠标滚轮
    mousewheel: {
      type: Boolean,
      default: false
    },
    effect: {
      type: String,
      default: 'slide'
    },
    // 翻页指示器配置
    paginationoption: {
      type: Object,
      default: () => {
        return {}
      }
    },
    // 滚动条指示器配置
    scrollbaroption: {
      type: Object,
      default: () => {
        return {}
      }
    },
    // 前进后退指示器配置
    navigationoption: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      swiperOption: {},
      swiper: null
    }
  },
  beforeCreated() {
    this.swiperOption = this.getSwiperOption()
  },
  mounted() {
    this.swiper = this.mySwiper
  },
  beforeDestory() {
    this.swiper = null
  },
  methods: {
    getSwiperOption() {
      let config = {}

      // 分页指示器配置
      let { showpagination, paginationoption } = this
      let pagination = { el: '.swiper-pagination', clickable: true } // 翻页器配置
      if (showpagination) {
        config.pagination = Object.assign(pagination, paginationoption)
      }

      // 滚动条配置
      let { showscrollbar, scrollbaroption } = this
      let scrollbar = { el: '.swiper-scrollbar' }
      if (showscrollbar) {
        config.scrollbar = Object.assign(scrollbar, scrollbaroption)
      }

      // 前进后退指示器配置
      let { shownavigation, navigationoption } = this
      let navigation = {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
      if (shownavigation) {
        config.navigation = Object.assign(navigation, navigationoption)
      }

      // 方向配置
      let { direction } = this
      config.direction = direction

      // 自动播放 延迟
      let { autoplay, autodelay, waitForTransition } = this
      if (autoplay) {
        config.autoplay = {
          delay: Number(autodelay),
          disableOnInteraction: false,
          waitForTransition: waitForTransition
        }
      }

      // 循环播放
      let { loop } = this
      config.loop = loop

      // 事件回调
      let _self = this
      let on = {
        slideChange() {
          _self.$emit('onSlideChangeEnd', this)
        },
        tap() {
          _self.$emit('onTap', this)
        }
      }
      config.on = on

      // mousewheel鼠标滚轮
      let { mousewheel } = this
      config.mousewheel = mousewheel

      // 切换效果
      let { effect } = this
      config.effect = effect

      // 混合其他配置
      let { option } = this
      return Object.assign(config, option)
    }
  }
}
</script>


<style lang="scss" scoped>
.swiper-component {
  width: 100%;
  height: 100%;
  position: relative;
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  // .swiper-images{
  //   width: 100%;
  //   height: 100%;
  // }
}
</style>