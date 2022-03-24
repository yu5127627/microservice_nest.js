<template>
  <el-aside :width="settingStore.isCollapse ? '64px' : '210px'">
    <div
      :width="settingStore.isCollapse ? '64px' : '200px'"
      class="horizontal-collapse-transition sidebar-header"
    >
      <el-image class="sidebar-logo" src="http://egg.yls.red/static/img/logo.21bf62ca.png" />
      <h1 v-if="!settingStore.isCollapse" class="sidebar-title">nestjs 微服务</h1>
    </div>

    <el-menu
      default-active="2"
      background-color="#304156"
      text-color="#fff"
      :collapse="settingStore.isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="item in menu" :key="item.path">
        <el-sub-menu v-if="item.type === 0" :index="item.url">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>{{ item.title }}</span>
          </template>
        </el-sub-menu>
        <el-menu-item v-else-if="item.type === 2" :index="item.url">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>{{ item.title }}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
  </el-aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Location } from '@element-plus/icons-vue';
import { useSettingStore } from '@/store/modules/setting';
import { useMenuStore } from '@/store/modules/menu';
export default defineComponent({
  name: 'Sidebar',
  components: {
    Location,
  },
  setup() {
    const settingStore = useSettingStore();
    const menuStore = useMenuStore();
    const menu: any = menuStore.allMenu;
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key);
    };

    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key);
    };
    console.log(menu);

    return {
      menu,
      settingStore,
      handleOpen,
      handleClose
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
