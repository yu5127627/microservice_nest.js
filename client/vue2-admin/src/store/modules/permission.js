import router, { constantRoutes } from "@/router";
import Layout from "@/layout";
import { mergeMenu } from "@/utils";
import { getList } from "@/api/menu";

const mergeRoutes = (menu) => {
  // 过滤出目录菜单
  const pmenu = [];
  const child = [];
  menu.forEach(item => {
    if (item.pid === 0) {
      if (item.type === 2) {
        console.log(item.url);
        pmenu.push({
          id: item.id,
          path: item.url,
          component: Layout,
          meta: {
            title: item.title,
            icon: item.icon
          }
        });
      } else {
        pmenu.push({
          id: item.id,
          path: item.url,
          component: Layout,
          hidden: item.hidden,
          alwaysShow: true,
          redirect: "noRedirect",
          meta: {
            title: item.title,
            icon: item.icon,
            noCache: !item.cache
          }
        });
      }
    } else {
      child.push({
        id: item.id,
        pid: item.pid,
        name: item.name,
        path: item.url,
        hidden: item.hidden,
        component: resolve => require([`@/views${item.path}`], resolve),
        meta: {
          title: item.title,
          icon: item.icon,
          noCache: !item.cache
        }
      });
    }
  });
  pmenu.forEach(item => {
    const children = mergeMenu(item.id, child);
    if (children.length > 0) {
      item.children = children;
    }
  });
  pmenu.push({ path: "*", redirect: "/404", hidden: true });
  return pmenu;
};

const state = {
  routes: [],
  addRoutes: [],
  menuList: []
};

const getters = {
  MENU_LIST: state => state.menuList
};

const mutations = {
  SET_ROUTES: (state, routes) => {
    routes = mergeRoutes(routes);
    state.addRoutes = routes;
    state.routes = constantRoutes.concat(routes);
    router.addRoutes(routes);
  },
  SET_MENUS_LIST: (state, menus) => {
    menus = JSON.parse(JSON.stringify(menus));
    state.menuList = mergeMenu(0, menus);
  }
};

const actions = {
  async getList({ commit }) {
    const { result } = await getList();
    result.sort((a, b) => a.sort - b.sort);
    commit("SET_MENUS_LIST", result);
    commit("SET_ROUTES", result);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
