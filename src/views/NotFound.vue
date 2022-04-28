<template>
  <div>
    <h1>Oop!</h1>
    <h2>{{ message }}</h2>
    <route-link :to="{ name: 'event-list' }"
      >Back to the list of events</route-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "The page you are looking for is not here!",
    };
  },
};
</script>

<style lang="scss" scoped></style>
