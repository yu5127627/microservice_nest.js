<template>
  <el-container class="app-container">
    <sidebar />
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import sidebar from './components/sidebar.vue';

</script>

<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.app-container {
  width: 100%;
  height: 100%;
  .el-aside {
    background-color: aquamarine;
  }
  .el-header {
    background-color: aqua;
  }
  .el-main {
    background-color: bisque;
  }
  .el-footer {
    background-color: blueviolet;
  }
}
</style>
