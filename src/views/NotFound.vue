<template>
  <div>
    <h1>Oop!</h1>
    <h2 class="message">{{ message }}</h2>
    <router-link :to="{ name: 'event-list' }"
      >Back to the list of events</router-link
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

<style scoped>
.message {
  color: #000;
}
</style>
