<template>
  <h3>this is book list</h3>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "BookList",
  computed: mapGetters(["allBooks"]),
  methods: mapActions(["fetchBooks"]),
  created() {
    this.fetchBooks();
  }
};
</script>

<style></style>
