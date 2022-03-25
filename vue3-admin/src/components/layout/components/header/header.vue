<template>
  <el-header>
    <!-- 侧边导航栏控制 -->
    <div class="icon-box">
      <el-icon :size="24" color="#999" @click="handleCollapseChange">
        <expand v-if="settingStore.isCollapse" />
        <fold v-else />
      </el-icon>
    </div>
    <!-- 面包屑 -->
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">仪表盘</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">promotion management</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 操作栏 -->
    <action-bar />
    <!-- 头像 -->
    <avatar />
  </el-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Expand, Fold } from '@element-plus/icons-vue';
import { useSettingStore } from '@/store/modules/setting';
import avatar from './avatar.vue';
import actionBar from './actionBar.vue';

export default defineComponent({
  name: 'Header',
  components: {
    expand: Expand,
    fold: Fold,
    avatar,
    actionBar
  },
  setup() {
    const settingStore = useSettingStore();
    const handleCollapseChange = () => {
      settingStore.isCollapse = !settingStore.isCollapse;
    };

    return {
      settingStore,
      handleCollapseChange
    };
  }
});
</script>

<style lang="less">
.el-header {
  height: 50px;
  display: flex;
  align-items: center;
  .icon-box {
    display: inline-block;
    cursor: pointer;
    width: 24px;
    height: 24px;
    margin-right: 15px;
  }
  .breadcrumb {
    flex: 1;
  }
  .avatar-container {
    .user-avatar {
      cursor: pointer;
      width: 36px;
      height: 36px;
      border-radius: 10px;
    }
  }
}
</style>
