<template>
  <div class="app-view">
    <router-view />
  </div>
</template>

<script setup lang="ts">
// 解决 message 弹出样式失效
import 'element-plus/es/components/message/style/css';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
}
.app-view {
  width: 100%;
  height: 100%;
}
</style>
