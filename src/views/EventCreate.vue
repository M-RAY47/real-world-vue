<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
    <p>The is the id: {{ user.id }}</p>
    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
    <p>The total categories are {{ catLength }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    localCatLength() {
      return this.$store.getters.catLength;
    },
    ...mapGetters(["catLength"]),
    ...mapState(["user", "categories"]),
  },
};
</script>

<style lang="scss" scoped></style>
