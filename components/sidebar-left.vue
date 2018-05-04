<template>
  <div class="sidebar">
    <div class="sidebar-top">
      <span>晖阳产品分类</span>
    </div>
    <ul class="sidebar-list">
      <li class="sidebar-list-item" v-for="n in 10" :key="n">
        <a class="item-link" href="">电子部品胶带系列</a>
      </li>
    </ul>
    <img class="sidebar-concat" src="~assets/images/sidebar-concat.jpg" alt="">
  </div>
</template>
<style lang="scss" scoped>
.sidebar {
  width: 245px;
  .sidebar-top {
    width: 100%;
    height: 100px;
    background: url('~assets/images/sidebar-top-bg.jpg') no-repeat;
    text-align: center;
    overflow: hidden;
    span {
      display: block;
      color: #fff;
      font-size: 22px;
      margin-top: 20px;
      letter-spacing: 2px;
    }
  }
  .sidebar-list {
    width: 100%;
    height: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    .sidebar-list-item {
      line-height: 71px;
      overflow: hidden;
      list-style-type: none;
      margin: 0;
      padding: 0;
      background: url('~assets/images/sidebar-list-item-bg.jpg')no-repeat;//#333;
      border-bottom: 1px solid grey;
      .item-link {
        color: #fff;
        display: block;
        padding-left: 45px;
        text-align: center;
        text-decoration: none;
      }
    }
  }
  .sidebar-concat {
    width: 245px;
    height: 150px;
  }
}
</style>
