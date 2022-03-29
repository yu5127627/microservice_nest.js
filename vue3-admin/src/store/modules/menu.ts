import { defineStore } from "pinia";
import { reactive, ref, shallowRef } from "vue";
import { routes } from '@/router';
import Layout from '@/components/layout/index.vue';

export const useMenuStore = defineStore('menu', () => {
  // 原始异步菜单
  const originAsyncMenu = reactive<Array<Menu.MenuRow>>([]);
  // 整理过的异步菜单
  const asyncMenu = reactive<Array<Menu.Route>>([]);
  // 当前用户的所有菜单
  const allMenu = reactive<Array<Menu.Route>>([...routes]);

  // 设置异步菜单
  const setAsyncMenu = (topMenu: Array<Menu.Route>, subMenu: Array<Menu.Route>) => {
    for (const item of topMenu) {
      mergeMenu(item, subMenu);
    }
    asyncMenu.push(...topMenu, {
      id: 9999,
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/404.vue'),
      meta: {
        title: '404',
        type: 1,
        cache: false,
        pid: 0,
        affix: false
      },
      hidden: true,
      redirect: '/',
    });
    // @ts-ignore
    routes.push(...asyncMenu);
    allMenu.push(...topMenu);
    return asyncMenu;
  };

  // 将异步菜单转化为复合规则的路由
  const resolveMenu = (menu: Menu.MenuRow) => {
    const { id, type, icon, cache, hide, title, url, name, action, sort, path, pid, redirect } = menu;
    return {
      id,
      path: url,
      component: path ? () => import(`../../views${path}`) : shallowRef(Layout),
      redirect, //重定向地址，在面包屑中点击会重定向去的地址
      hidden: hide, // 不在侧边栏显示
      alwaysShow: true, //一直显示根路由
      name,
      meta: { type, icon, cache, title, pid, affix: false }, //你可以在根路由设置权限，这样它下面所有的子路由都继承了这个权限
    };
  };

  // 筛选菜单 目录 外链  规则
  const filterMenu = (list: Array<Menu.MenuRow>) => {
    const topMenu: Array<Menu.Route> = [];
    const subMenu: Array<Menu.Route> = [];
    const actions: Array<Menu.ActionRow> = [];
    list.sort((a, b) => a.sort - b.sort);
    for (const item of list) {
      const { id, title, action, sort, pid } = item;
      if (item.type === 3) {
        actions.push({
          id, pid, title, action, sort
        });
      } else {
        originAsyncMenu.push(item);
        if (pid === 0) {
          topMenu.push(resolveMenu(item));
        } else {
          subMenu.push(resolveMenu(item));
        }

      }
    }
    return { topMenu, subMenu, actions };
  };

  // 合并父子路由
  const mergeMenu = (topDir: Menu.Route, list: Array<Menu.Route>) => {
    const childMenu = [];
    for (const item of list) {
      if (item.meta?.pid === topDir.id) {
        item.path = topDir.path + item.path;
        childMenu.push(item);
      }
    }
    if (childMenu.length) topDir.children = childMenu;
  };

  return {
    filterMenu,
    resolveMenu,
    originAsyncMenu,
    asyncMenu,
    allMenu,
    setAsyncMenu
  };
});
