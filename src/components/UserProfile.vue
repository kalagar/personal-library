<template>
  <div>
    <div class="row">
      <div class="col-1">
        <img v-bind:src="user.photo" v-bind:alt="user.name" />
      </div>
      <div class="col ml-3">
        <h3>{{ user.name }}</h3>
        <h5 mt-3>{{ user.email }}</h5>
      </div>
    </div>
    <div class="row">
      <form class="mt-5">
        <div class="form-group">
          <label for="userFullName">Full Name</label>
          <input
            type="text"
            class="form-control"
            id="userFullName"
            v-model="userNewDetails.name"
            aria-describedby="nameHelp"
            placeholder="Update your name"
            required
          />
        </div>
        <div class="form-group">
          <label for="userEmailAddress">Email address</label>
          <input
            type="email"
            class="form-control"
            id="userEmailAddress"
            v-model="userNewDetails.email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
          />
        </div>
        <div class="form-group">
          <label for="userCurrentPassword">Current Password</label>
          <input
            type="password"
            class="form-control"
            id="userCurrentPassword"
            v-model="userNewDetails.current_password"
            placeholder="Your Current Password"
          />
        </div>
        <div class="form-group">
          <label for="userNewPassword">New Password</label>
          <input
            type="password"
            class="form-control"
            id="userNewPassword"
            v-model="userNewDetails.password"
            placeholder="Your New Password"
          />
        </div>
        <div class="form-group">
          <label for="userNewPassword">Confirm Password</label>
          <input
            type="password"
            class="form-control"
            id="userConfirmPassword"
            v-model="userNewDetails.password_confirmation"
            placeholder="Confirm Your Password"
          />
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          @click.prevent="updateUser(userNewDetails)"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "UserProfile",
  data: function() {
    return {
      userNewDetails: {
        name: null,
        email: null,
        current_password: null,
        password: null,
        password_confirmation: null
      }
    };
  },
  computed: mapGetters(["user"]),
  methods: mapActions(["fetchUser", "updateUser"]),
  created() {
    this.fetchUser();
  }
};
</script>

<style></style>
