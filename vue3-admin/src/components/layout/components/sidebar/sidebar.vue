<template>
  <el-aside :width="settingStore.isCollapse ? '64px' : '210px'">
    <div
      v-if="settingStore.sidebarLog"
      :width="settingStore.isCollapse ? '64px' : '200px'"
      class="horizontal-collapse-transition sidebar-header"
    >
      <el-image class="sidebar-logo" src="http://egg.yls.red/static/img/logo.21bf62ca.png" />
      <h1 v-if="!settingStore.isCollapse" class="sidebar-title">nestjs 微服务</h1>
    </div>

    <el-menu
      :default-active="route.path"
      background-color="#304156"
      text-color="#fff"
      :collapse="settingStore.isCollapse"
      unique-opened
      :collapse-transition="false"
      @open="handleOpen"
      @close="handleClose"
    >
      <menu-item v-for="item in menu" :key="item.path" :item="item" />
    </el-menu>
  </el-aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useSettingStore } from '@/store/modules/setting';
import menuItem from './menuItem.vue';
import { useMenuStore } from '@/store/modules/menu';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'Sidebar',
  components: {
    menuItem,
  },
  setup() {
    const menuStore = useMenuStore();
    const menu: Array<Menu> = menuStore.allMenu;
    const settingStore = useSettingStore();
    const route = useRoute();

    const handleOpen = (key: string, keyPath: string[]) => {
      // console.log(key, keyPath);
    };

    const handleClose = (key: string, keyPath: string[]) => {
      // console.log(key);
    };


    return {
      menu,
      route,
      settingStore,
      handleOpen,
      handleClose,
    };
  }
});
</script>

<style lang="less">
.el-aside {
  -webkit-transition: width 0.28s;
  transition: width 0.28s;
  background-color: #304156;
  height: 100%;
  font-size: 0;
  z-index: 1001;
  overflow: hidden;
  .sidebar-header {
    position: relative;
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #2b2f3a;
    text-align: center;
    overflow: hidden;
    box-sizing: border-box;
    .sidebar-logo {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      margin-right: 12px;
    }
    .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }

  .el-menu {
    height: calc(100% - 50px);
  }
}
</style>
