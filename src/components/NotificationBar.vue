<template>
  <div class="notification-bar" :class="notificationTypeClass">
    <p>{{ notification.message }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      timeout: null,
    };
  },
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.timeout = setTimeout(() => this.remove(this.notification), 5000);
  },
  beforeUnmount() {
    clearTimeout(this.timeout);
  },
  computed: {
    notificationTypeClass() {
      return `-text-${this.notification.type}`;
    },
  },
  methods: mapActions("notifications", ["remove"]),
};
</script>

<style scoped>
.notification-bar {
  margin: 1em 0 1em;
}
</style>
