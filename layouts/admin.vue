<template>
  <el-container>
  <el-aside :width="isFold?'60px':'200px'">
    <admin-sidebar v-if="!isFold"/>
    <admin-sidebar-shrink v-else/>
  </el-aside>
  <el-container>
    <el-header>
      <admin-header @foldChange="isFold=!isFold"/>
    </el-header>
    <el-main>
      <transition name="fade">
        <nuxt/>
      </transition>
    </el-main>
    <el-footer>
      <admin-footer/>
    </el-footer>
  </el-container>
</el-container>
</template>
<script>
import AdminHeader from '~/components/admin/Header.vue'
import AdminSidebar from '~/components/admin/Sidebar.vue'
import AdminSidebarShrink from '~/components/admin/SidebarShrink.vue'
import AdminFooter from '~/components/admin/Footer.vue'

export default {
  components: {
    AdminHeader,
    AdminSidebar,
    AdminSidebarShrink,
    AdminFooter
  },
  data() {
    return {
      isFold: false
    }
  }
}
</script>

<style lang="scss" scoped>
.el-header,
.el-footer {
  background-color: #fff; //#b3c0d1;
  color: #333;
  text-align: center;
  line-height: 50px;
}
.el-header {
  border-bottom: 1px solid #e6e6e6;
}
.el-footer {
  border-top: 1px solid #e6e6e6;
}

.el-aside {
  // background-color: #d3dce6;
  color: #333;
  text-align: center;
  /* line-height: 200px; */
  height: 100vh;
  border-right: 1px solid #e6e6e6;
  overflow-x: hidden;
}

.el-main {
  background-color: #fff; //#e9eef3;
  color: #333;
  // text-align: center;
  /* line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
