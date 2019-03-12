import api from "../../api/bsup";

const state = {
  user: []
};
const getters = {
  user: state => state.user
};
const actions = {
  async fetchUser({ rootState, commit }) {
    const { token } = rootState.auth;
    const response = await api.fetchUser(token);
    commit("setUser", response.data.data);
  },
  async updateUser({ rootState }, user) {
    const { token } = rootState.auth;
    const response = await api.updateUser(user, token);
    console.log(response);
  }
};
const mutations = {
  setUser: (state, user) => {
    state.user = user;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
