<template>
  <el-aside :width="settingStore.isCollapse?'64px':'210px'">
    <div :width="settingStore.isCollapse?'64px':'200px'" class="horizontal-collapse-transition sidebar-header">
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
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon><document /></el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue';
import { useSettingStore } from '@/store/modules/setting';
export default defineComponent({
  name: 'Sidebar',
  components: {
    Location, Document, IconMenu, Setting
  },
  setup() {
    const settingStore = useSettingStore();

    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key);
    };

    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key);
    };

    return {
      settingStore,
      handleOpen,
      handleClose
    };
  }
});
</script>

<style lang="less">
.el-aside {
        -webkit-transition: width .28s;
    transition: width .28s;
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
    font-family: Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;
    vertical-align: middle;
  }
}

.el-menu {
  height: calc(100% - 50px);
}
  }

</style>
