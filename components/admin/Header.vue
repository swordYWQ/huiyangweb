<template>
  <header class="header">
    <div class="left-toggle" @click="$emit('foldChange')">
      <i class="iconfont">&#xe606;</i>
    </div>
    <div class="header-info">
      <div class="header-icon-group">
        <i class="el-icon-edit"></i>
        <i class="el-icon-share"></i>
        <i class="el-icon-delete"></i>
      </div>
      <div class="user-info-group">
        <el-dropdown trigger="click">
  <span class="el-dropdown-link">
    <i class="el-icon-info"></i>
    weiqiang.yu<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>用户信息</el-dropdown-item>
    <el-dropdown-item @click.native="exitSystem">退出系统</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'admin-header',
  methods: {
    exitSystem() {
      this.$confirm('确认要退出系统?')
        .then(() => {
          this.$router.push('/admin/login')
        })
        .catch(() => {})
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  // position: fixed;
  // top:0;
  // left:0;
  width: 100%;
  line-height: 60px;
  text-align: left;
  .left-toggle {
    cursor: pointer;
    width: 40px;
    height: 40px;
    line-height: 40px;
    margin-top: 10px;
    text-align: center;
    display: inline-block;
    &:hover {
      background-color: #eee;
    }
  }
  .header-info {
    float: right;
    // width: 300px;
    display: inline-block;
    white-space: nowrap;
    .header-icon-group {
      display: inline-block;
      i {
        padding: 0 10px;
        display: inline;
      }
    }
    .user-info-group {
      display: inline-block;
      // width: 200px;
    }
  }
}
</style>
