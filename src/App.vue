<template>
  <div>
    <AppHeader></AppHeader>
    <div class="container mt-3">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import AppHeader from "./components/AppHeader";
export default {
  name: "App",
  components: {
    AppHeader
  }
};
</script>

<style></style>
