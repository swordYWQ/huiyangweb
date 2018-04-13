<template>
  <div class="article-image-list">
    <div class="article-header">{{header}}</div>
    <a href="javascript:void(0)" class="article-image-item" v-for="n in 3" :key="n"><!--v-for="(item,index) in data" :key="index">-->
      <div class="article-image-box">
        <img class="article-image" src="https://gw.alicdn.com/tfs/TB1sZf5aUgQMeJjy0FiXXXhqXXa-900-500.jpg" alt="">
      </div>
      <div class="article-content-box">
        <div class="article-category">Node.js</div>
        <div class="article-title">深入理解 Node.js Stream 内部机制</div>
        <div class="article-time">at 2017-12-01</div>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  name: 'article-image-list',
  props: {
    header: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="scss" scoped>
.article-image-list {
  width: 100%;
  .article-header {
    font-size: 16px;
    color: orange;
    padding: 10px;
  }
  .article-image-item {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px;
    text-decoration: none;
    color: #333;
    border-bottom: 1px solid #ddd;
    transition: all .3s ease-in;
    &:hover {
      color: #62bbc3;
      .article-image-box {
        .article-image {
          opacity: 0.9;
        }
      }
    }
    .article-image-box {
      .article-image {
        width: 70px;
        height: 70px;
        opacity: 1;
      }
    }
    .article-content-box {
      padding: 0 10px;
      .article-category {
        color: #62bbc3;
      }
      .article-title {
        padding: 5px 0;
      }
      .article-time {
        color: #bbb;
        font-size: 14px;
      }
    }
  }
}
</style>
