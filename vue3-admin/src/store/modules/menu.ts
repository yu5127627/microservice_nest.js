import { defineStore } from "pinia";
import { defineAsyncComponent, reactive, ref, shallowRef } from "vue";
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
    for (const item of topMenu) deepmergeRoutes(item, subMenu);
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

  // 1.先识别所有的views/文件夹name/*.vue文件
  // 这里限制性很高，只有路径为/views/文件夹name/*.vue，的文件才能背识别，如果不在这个结构，自己增加吧，然后再合并
  const modules = import.meta.glob('../../views/**/**.vue');
  // 上面的结果是一个对象，相当于
  // const modules ={
  //     "../views/daily/index.vue": () => import("/src/views/daily/index.vue")
  // };

  /**
    基本语法
    星号 ( *) — 匹配除斜杠（路径分隔符）、隐藏文件（以 开头的名称.）之外的所有内容。
    双星或 globstar ( **) — 匹配零个或多个目录。
    问号 ( ?) – 匹配除斜杠（路径分隔符）以外的任何单个字符。
    序列 ( [seq]) — 匹配序列中的任何字符。
    📖关于基本匹配行为的几句话。

    一些例子：

    // src/**//*.js  匹配目录中所有具有扩展名的文件src（任何级别的嵌套） 。.js
    // src/*.??— 匹配src目录中具有两个字符扩展名的所有文件（仅第一级嵌套）。
    // file-[01].js— 匹配文件：file-0.js, file-1.js.
  **/

  // 将异步菜单转化为复合规则的路由
  const resolveMenu = (menu: Menu.MenuRow) => {
    const { id, type, icon, cache, hide, title, url, name, action, sort, path, pid, redirect } = menu;
    return {
      id,
      path: url,
      component: path? modules[`../../views${path}`] : shallowRef(Layout),
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
  const deepmergeRoutes = (topDir: Menu.Route, list: Array<Menu.Route>) => {
    const childMenu = [];
    for (const item of list) {
      if (item.meta?.pid === topDir.id) {
        item.path = topDir.path + item.path;
        childMenu.push(item);
      }
    }
    if (childMenu.length) topDir.children = childMenu;
  };

  const deepMergeMenu = (menu:Menu.MenuRow, menus:Array<Menu.MenuRow>) => {
    const arr:Array<Menu.MenuRow> = [];
    for (const item of menus) {
      if (item.pid === menu.id) {
        const children = deepMergeMenu(item, menus);
        if(children.length) item.children = children;
        arr.push(item);
      }
    }
    if (arr.length) menu.children = arr;
    return arr;
  };

  return {
    deepMergeMenu,
    filterMenu,
    resolveMenu,
    originAsyncMenu,
    asyncMenu,
    allMenu,
    setAsyncMenu
  };
});
