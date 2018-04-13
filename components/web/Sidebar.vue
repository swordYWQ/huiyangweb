<template>
  <aside class="sidebar">
    <div class="sidebar-top">
      <span>关注我</span>
      <ul class="social-links">
        <li>
          <a href="" class="social-tooltip">
            <i class="iconfont icon-github"></i>
          </a>
        </li>
        <li>
          <a href="" class="social-tooltip">
            <i class="iconfont icon-weibo"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="sidebar-group">
      <articleImageList header="热门文章" :data="[]"></articleImageList>
      <articleImageList header="最新文章" :data="[]"></articleImageList>
      <articleLinkList header="分类"></articleLinkList>
      <articleLinkList header="归档"></articleLinkList>
    </div>
  </aside>
</template>
<script>
import articleImageList from './sidebar/articleImageList.vue'
import articleLinkList from './sidebar/articleLinkList.vue'

export default {
  name: 'sidebar',
  components: {
    articleImageList,
    articleLinkList
  }
}
</script>
<style lang="scss" scoped>
.sidebar {
  float: left;
  margin-left: -340px;
  width: 340px;
}
.sidebar-top {
  background: #62bbc3;
  padding: 10px 30px;
  &:before {
    content: '';
    display: table;
  }
  &:after {
    clear: both;
    content: '';
    display: table;
  }
  span {
    float: left;
    color: rgba(255, 255, 255, 0.8);
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    padding: 3px 0;
  }
  .social-links {
    float: right;
    position: relative;
    padding-top: 2px;
    li {
      float: left;
      margin-left: 8px;
      .social-tooltip {
        position: relative;
        text-decoration: none;
        i {
          color: rgba(255, 255, 255, 0.7);
          font-size: 24px;
          width: 24px;
          &.iconfont {
            display: inline-block;
            font-style: normal;
            text-align: center;
          }
        }
      }
    }
  }
}

.sidebar-group {
  background-color: #f0f0f0;
}

.widget-list {
  .widget-list-item {
    .widget-list-item-link {
    }
  }
}

.article-list {
  .article-list-item {
    .article-list-item-link {
    }
  }
}
</style>
