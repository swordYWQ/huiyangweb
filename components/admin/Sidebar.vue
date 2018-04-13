<template>
<div class="aside">
  <div class="header-top">
      <h1>FishBlog</h1>
    </div>
    <div class="siderbar">
       <el-menu :default-openeds="['1', '3']" @select="selectMenu">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-tickets"></i>博客管理</template>
          <el-menu-item index="category">分类管理</el-menu-item>
          <el-menu-item index="article">文章管理</el-menu-item>
      </el-submenu>
      <!-- <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>系统管理</template>
          <el-menu-item index="2-1">系统信息</el-menu-item>
      </el-submenu> -->
    </el-menu>
    </div>
</div>
</template>
<script>
export default {
  name: 'admin-sidebar',
  methods: {
    selectMenu (menu) {
      this.$router.push('/admin/' + menu)
    }
  }
}
</script>

<style lang="scss" scoped>
.aside {
  .header-top {
    height: 50px;
    line-height: 50px;
  }
  .siderbar {
    .el-menu {
      border-right: 0 !important;
    }
  }
}
</style>
