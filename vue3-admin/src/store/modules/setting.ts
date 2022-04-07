import { defineStore } from 'pinia';
import { nextTick, reactive, ref } from 'vue';

export const useSettingStore = defineStore('setting', () => {
  // 后台配置信息
  const defaultConfig = reactive<any>({});
  // 侧边栏菜单控制
  const isCollapse = ref<boolean>(false);
  // 全局标题
  const title = 'Nest.js 后台模板';
  // 侧边栏图标控制
  const sidebarLog = ref<boolean>(true);

  const parseByOption = (val:string, option:string) => {
    if (!val) return null;
    const options = defaultConfig.option;
    if (options&&options[option] instanceof Array) {
      const item = options[option].find((item:any) => item.value === val);
      return item?item.label:item;
    }
  };

  return {
    parseByOption,
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
