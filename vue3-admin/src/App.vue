<template>
  <div class="app-view">
    <el-config-provider size="default" :button="btnConfig" :locale="locale">
      <router-view />
    </el-config-provider>
  </div>
</template>

<script lang="ts">
import 'element-plus/es/components/message/style/css';
import 'element-plus/es/components/message-box/style/css';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import { defineComponent, reactive, ref } from 'vue';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
export default defineComponent({
  setup() {
    let btnConfig = reactive({
      autoInsertSpace: true,
    });

    const locale = ref(zhCn);

    return {
      locale,
      btnConfig
    };
  }
});
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
