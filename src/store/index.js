import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import books from "./modules/books";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    books,
    user
  }
});
