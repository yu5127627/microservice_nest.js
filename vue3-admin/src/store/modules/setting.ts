import { defineStore } from 'pinia';
import { ref } from 'vue';

export interface UseSettingStore{
  isCollapse: boolean;
}

export const useSettingStore = defineStore('setting', () => {
  // 侧边栏菜单控制
  const isCollapse = ref<boolean>(false);
  // 全局标题
  const title = 'Nest.js 微服务后台管理模板';

  return {
    title,
    isCollapse
  };
});

// store.$patch({
//   counter: store.counter + 1,
//   name: 'Abalam',
// })
