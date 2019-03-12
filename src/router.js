import Vue from "vue";
import Router from "vue-router";
import AuthHandler from "./components/AuthHandler";
import UserProfile from "./components/UserProfile";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", component: BookList },
    { path: "/addbook", component: AddBook },
    { path: "/oauth/callback", component: AuthHandler },
    { path: "/userprofile", component: UserProfile }
  ]
});
