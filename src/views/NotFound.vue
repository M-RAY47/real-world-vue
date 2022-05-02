<template>
  <div>
    <h1>Oops!</h1>
    <h3 class="message">{{ message }}</h3>
    <router-link :to="{ name: 'event-list' }"
      >Back to the list of events</router-link
    >
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      message: `The ${this.resource} you are looking for is not here!`,
    };
  },
};
</script>

<style scoped>
.message {
  color: #000;
}
</style>
