import { mergeMenu } from "@/utils";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { routes } from '@/router';

export const useMenuStore = defineStore('menu', () => {
  // 原始异步菜单
  const originAsyncMenu = reactive<any[]>([]);
  // 整理过的异步菜单
  const asyncMenu = reactive<any[]>([]);
  // 当前用户的所有菜单
  const allMenu = reactive<any[]>([...routes]);

  const setAsyncMenu = (list: any[]) => {
    const topDir = list.filter(item => item.pid === 0);
    for (const item of topDir) {
      mergeMenu(item, list);
    }
    asyncMenu.push(...topDir);
  };

  return {
    originAsyncMenu,
    asyncMenu,
    allMenu,
    setAsyncMenu
  };
});
