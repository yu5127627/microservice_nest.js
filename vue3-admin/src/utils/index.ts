import Layout from '@/components/layout/index.vue';
import { shallowRef } from 'vue';

interface Action {
  pid: number;
  title: string;
  action?: string;
  sort: number;
}

// 过滤菜单 区分菜单类型
export const filterMenu = (list: Array<Route>) => {
  const topMenu: Array<Route> = [];
  const subMenu: Array<Route> = [];
  const actions: Array<Action> = [];
  list.sort((a, b) => a.sort-b.sort);
  for (const item of list) {
    const { id, type, icon, cache, hide, title, url, name, action, sort, path, pid, redirect } = item;
    if (item.type === 3) {
      actions.push({
        pid, title, action, sort
      });
    } else {
      if (pid === 0) {
        topMenu.push({
          path: type !== 2 ?url: path, // 外链处理
          id, type, icon, cache, title, url, name, sort, pid, hidden: hide, redirect,
          component: shallowRef(Layout),
        });
      } else {
        subMenu.push({
          id, type, icon, cache, title, url, name, sort, path:url, pid, hidden: hide, redirect,
          component: () => import(`../views${item.path}`)
          // () => require(`@/views/home/index.vue`),
        });
      }

    }
  }
  return { topMenu, subMenu, actions };
};


export const mergeMenu = (topDir: Route, list: Array<Route>) => {
  const childMenu = [];
  for (const item of list) {
    if (item.pid === topDir.id) {
      item.path = topDir.path + item.path;
      childMenu.push(item);
    }
  }
  if(childMenu.length)topDir.children = childMenu;
};
