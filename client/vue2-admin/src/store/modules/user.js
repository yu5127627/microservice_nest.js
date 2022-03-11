import { getInfo, logout } from "@/api/auth";
import { getToken, setToken, removeToken } from "@/utils/auth";
import router from "@/router";

const getDefaultState = () => {
  return {
    token: getToken(),
    actions: [],
    role: "",
    name: "",
    avatar: ""
  };
};

const state = getDefaultState();

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState());
  },
  SET_TOKEN: (state, token) => {
    setToken(token);
    state.token = token;
  },
  RESET_TOKEN: (state) => {
    removeToken();
    state.token = null;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
  SET_MENUS: (state, menus) => {
    state.menus = menus;
  },
  SET_ACTIONS: (state, actions) => {
    state.actions = actions;
  },
  SET_ROLE: (state, role) => {
    state.role = role;
  }
};

const actions = {
  async getInfo({ commit }) {
    const { code, result } = await getInfo();
    if (code === 200) {
      commit("SET_NAME", result.nickname);
      commit("SET_AVATAR", result.avatar);
    } else {
      commit("RESET_TOKEN");
      router.push({ path: `/login?redirect=${router.currentRoute.path}` });
    }
  },
  async logout({ commit }) {
    await logout();
    commit("RESET_TOKEN");
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};

