import login from "@/api/user";

import { setItem, getItem, removeItem } from "@/utils/storage";

export default {
  namespaced: true,
  state: {
    token: getItem("token") || "",
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      setItem("token", token);
    },
  },
  actions: {
    async login({ commit }, loginForm) {
      const token = await login.login(loginForm);
      commit("setToken", token);
      return token;
    },

    // 登出
    async loginout() {
      await login.loginout();
      removeItem("token");
      return true;
    },
  },
};
