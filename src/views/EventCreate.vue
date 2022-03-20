<template>
  <div>
    <h1>Create an Event, {{ userName }}</h1>
    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState({
    user: "user",
    categories: "categories",
  }),
};
</script>

<style lang="scss" scoped></style>
