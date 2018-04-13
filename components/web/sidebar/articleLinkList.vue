<template>
  <div class="article-link-list">
    <div class="article-header">{{header}}</div>
    <a href="" class="article-link-item" v-for="(item,index) in 12" :key="index">
      <i class="iconfont icon-arrow-left-copy"></i>
      <span class="link-item-text">
        2017-{{12-index}}({{index}})
      </span>
    </a>
  </div>
</template>
<script>
export default {
  name: 'article-link-list',
  props: {
    header: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.article-link-list {
  width: 100%;
  border-bottom: 1px solid #ddd;
  padding-bottom:10px;
  .article-header {
    font-size: 16px;
    color: orange;
    padding: 10px;
  }
  .article-link-item {
    display: block;
    padding: 5px 70px;
    color: #777;
    text-decoration: none;
    i {
      color: #bbb;
    }
    .article-link-text {
    }
    &:hover {
      i {
        color: #aaa;
      }
    }
  }
}
</style>
