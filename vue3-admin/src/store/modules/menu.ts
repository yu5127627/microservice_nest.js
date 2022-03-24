import { mergeMenu } from "@/utils";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { routes } from '@/router';
import { RouterOptions } from "vue-router";

export const useMenuStore = defineStore('menu', () => {
  // 原始异步菜单
  const originAsyncMenu = reactive<Array<RouterOptions>>([]);
  // 整理过的异步菜单
  const asyncMenu = reactive<Array<RouterOptions>>([]);
  // 当前用户的所有菜单
  const allMenu = reactive([...routes]);

  const setAsyncMenu = (list: any[]) => {
    const topDir = list.filter(item => item.pid === 0);
    for (const item of topDir) {
      mergeMenu(item, list);
    }
    // @ts-ignore
    asyncMenu.push(...topDir);
    allMenu.push(...topDir);
    return asyncMenu;
  };

  return {
    originAsyncMenu,
    asyncMenu,
    allMenu,
    setAsyncMenu
  };
});
