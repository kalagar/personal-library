<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav d-flex" id="navbarUL">
        <li class="nav-item mr-auto">
          <router-link class="nav-link" to="/">
            My Personal Library
            <span class="sr-only">(current)</span>
          </router-link>
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <router-link class="nav-link" to="/">Library</router-link>
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <router-link class="nav-link" to="/addbook">Add Book</router-link>
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <router-link class="nav-link" to="/userprofile"
            >User Profile</router-link
          >
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <a class="nav-link" href="#" @click="logout">Logout</a>
        </li>
        <li class="nav-item" v-else>
          <a class="nav-link" href="#" @click="login">Login</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AppHeader",
  computed: mapGetters(["isLoggedIn"]),
  methods: mapActions(["login", "logout"])
};
</script>

<style>
#navbarUL {
  width: 100%;
}
</style>
