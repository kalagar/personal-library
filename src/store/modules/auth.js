import api from "../../api/bsup";
import qs from "qs";
import router from "./../../router";

const state = {
  token: window.localStorage.getItem("bsup_token")
};

const getters = {
  isLoggedIn: state => !!state.token
};

const actions = {
  login: () => {
    api.login();
  },
  finalizeLogin({ commit }, hash) {
    const query = qs.parse(hash.replace("#", ""));

    commit("setToken", query.access_token);
    window.localStorage.setItem("bsup_token", query.access_token);
    router.push("/");
  },
  logout: ({ commit }) => {
    commit("setToken", null);
    window.localStorage.removeItem("bsup_token");
  }
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
