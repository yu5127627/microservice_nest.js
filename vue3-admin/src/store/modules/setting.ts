import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

export const useSettingStore = defineStore('setting', () => {
  // 后台配置信息
  const defaultConfig = reactive<any>({});
  // 侧边栏菜单控制
  const isCollapse = ref<boolean>(false);
  // 全局标题
  const title = 'Nest.js 后台模板';
  // 侧边栏图标控制
  const sidebarLog = ref<boolean>(true);

  return {
    defaultConfig,
    sidebarLog,
    title,
    isCollapse
  };
});

// store.$patch({
//   counter: store.counter + 1,
//   name: 'Abalam',
// })
