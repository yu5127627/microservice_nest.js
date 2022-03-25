import { mergeMenu } from "@/utils";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { routes } from '@/router';
import { RouteRecordRaw } from "vue-router";

export const useMenuStore = defineStore('menu', () => {
  // 原始异步菜单
  const originAsyncMenu = reactive<Array<Route>>([]);
  // 整理过的异步菜单
  const asyncMenu = reactive<Array<Route>>([]);
  // 当前用户的所有菜单
  const allMenu = reactive<Array<RouteRecordRaw>>([...routes]);

  const setAsyncMenu = (topMenu:Array<Route>, subMenu:Array<Route>) => {
    for (const item of topMenu) {
      mergeMenu(item, subMenu);
    }
    asyncMenu.push(...topMenu, {
      id: 9999,
      path: '/:pathMatch(.*)*',
      title: '404',
      component: () => import('@/views/404.vue'),
      hidden: true,
      type: 1,
      cache: 0,
      pid: 0,
      sort: 100,
      redirect: '/',
      url: ''
    });
    // @ts-ignore
    routes.push(...asyncMenu);
    allMenu.push(...topMenu);
    return asyncMenu;
  };

  return {
    originAsyncMenu,
    asyncMenu,
    allMenu,
    setAsyncMenu
  };
});
