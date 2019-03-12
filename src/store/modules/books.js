import api from "../../api/bsup";

const state = {
  books: []
};
const getters = {
  allBooks: state => state.books
};
const actions = {
  async fetchBooks({ rootState, commit }) {
    const { token } = rootState.auth;
    const response = await api.fetchBooks(token);
    commit("setBooks", response.data.data);
  }
};
const mutations = {
  setBooks: (state, books) => {
    state.books = books;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
