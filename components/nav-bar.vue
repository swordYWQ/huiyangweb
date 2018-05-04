<template>
  <ul class="nav-list" v-if="nav">
        <li class="nav-item" v-for="(item,index) in nav.list" :key="index">
          <!-- <a href="">{{item.name}}</a> -->
          <nuxt-link :to="item.url">{{item.name}}</nuxt-link>
        </li>
        <!-- <li class="nav-item">
          <a href="">产品简介</a>
        </li>
        <li class="nav-item">
          <a href="">美纹纸胶带</a>
        </li>
        <li class="nav-item">
          <a href="">BOPP胶带</a>
        </li>
        <li class="nav-item">
          <a href="">高温胶带</a>
        </li>
        <li class="nav-item">
          <a href="">电子部品胶带</a>
        </li>
        <li class="nav-item">
          <a href="">荣誉证书</a>
        </li>
        <li class="nav-item">
          <a href="">工厂设备</a>
        </li>
        <li class="nav-item">
          <a href="">留言反馈</a>
        </li>
        <li class="nav-item">
          <a href="">联系我们</a>
        </li> -->
      </ul>
</template>
<script>
export default {
  name: 'nav-bar',
  props: {
    nav: {
      type: Object,
      default: null
    }
  }
}
</script>
