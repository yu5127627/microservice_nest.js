<template>
  <el-container class="app-container">
    <sidebar />
    <el-container>
      <uheader />
      <el-main>
        <router-view />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import sidebar from './components/sidebar/sidebar.vue';
import { defineComponent } from 'vue';
import uheader from './components/header/header.vue';
export default defineComponent({
  name: 'Layout',
  components: {
    sidebar,
    uheader
  }
});
</script>

<style lang="less">
.app-container {
  width: 100%;
  height: 100%;
  // .el-main {
  //   background-color: bisque;
  // }
  .el-footer {
    height: 20px;
    background-color: blueviolet;
  }
}
</style>
