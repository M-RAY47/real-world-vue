<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["catLength"]),
    ...mapState(["user", "categories"]),
  },
};
</script>

<style lang="scss" scoped></style>
