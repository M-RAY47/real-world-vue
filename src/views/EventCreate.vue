<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
    <p>The is the id: {{ user.id }}</p>
    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
    <p>The total categories:</p>
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
