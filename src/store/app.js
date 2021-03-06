import Vue from "vue"; // import vue because you want a new instance of VUE
import { router } from "../routes"; //if you want to access the routes,
//you need to tell this file, where they are. So you must import it.

const state = {
  token: localStorage.getItem("token"),
};

const getters = {
  activeToken: (state) => {
    return state.token;
  },
};

const actions = {
  init({ commit }) {
    const token = localStorage.getItem("token");

    if (token) {
      commit("setToken", token);
    } else if (router.currentRoute.name !== "login") {
      router.push({ name: "login" });
    }
  },
  setToken({ commit }, token) {
    commit("setToken", token);
  },
};

const mutations = {
  setToken(state, token) {
    Vue.prototype.$axios.defaults.headers["authorization"] = `Bearer ${token}`;

    state.token = token;
    // this.$axios or the "this" instance is not available in the stores
    // once we obtain the token we set the authorization to send back to our server
  },
};

export const app = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
