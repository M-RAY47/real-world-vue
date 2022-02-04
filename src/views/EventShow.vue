<template>
  <h1>Hello Show Event</h1>
  <div>
    <router-link :to="{ name: 'event-create' }">Create</router-link>
    <EventCard />
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";

export default {
  components: {
    EventCard,
  },
};
</script>

<style></style>
