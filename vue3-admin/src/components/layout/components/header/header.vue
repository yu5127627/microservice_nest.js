<template>
  <el-header>
    <div class="header-action">
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
          <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="item.path">
            <span v-if="index % 2 !== 0 || $route.path === item.path">{{ item.meta.title }}</span>
            <a v-else :href="item.path">{{ item.meta.title }}</a>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 操作栏 -->
      <action-bar />
      <!-- 头像 -->
      <avatar />
    </div>
    <tag-view />
  </el-header>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch } from 'vue';
import { Expand, Fold } from '@element-plus/icons-vue';
import { useSettingStore } from '@/store/modules/setting';
import avatar from './avatar.vue';
import actionBar from './actionBar.vue';
import tagView from './tagView.vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'Header',
  components: {
    expand: Expand,
    fold: Fold,
    avatar,
    actionBar,
    tagView
  },
  setup() {
    const route = useRoute();
    const settingStore = useSettingStore();
    let breadcrumbList = ref<Array<any>>([]);

    const handleCollapseChange = () => {
      settingStore.isCollapse = !settingStore.isCollapse;
    };
    watch(route, (newValue, oldValue) => {
      getBreadcrumb();
    });

    const getBreadcrumb = () => {
      // only show routes with meta.title
      let matched = route.matched.filter(
        item => item.meta && item.meta.title
      );
      breadcrumbList.value = [{ path: "/dashboard", meta: { title: "仪表盘" } }, ...matched];
    };
    getBreadcrumb();

    return {
      settingStore,
      breadcrumbList,
      handleCollapseChange
    };
  },
});
</script>

<style lang="less">
.el-header {
  height: 84px;
  padding: 0;
  .header-action {
    height: 50px;
    display: flex;
    align-items: center;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    padding: 0 20px;
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
}
</style>
