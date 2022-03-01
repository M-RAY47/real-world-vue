<template>
  <div>
    <h1>Events List</h1>
    <EventCard />
    <BaseIcon />
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService.js";
export default {
  components: {
    EventCard,
    EventService,
  },
  data() {
    return {
      events: [],
    };
  },
  created() {
    EventService.getEvents().then((res) => {
      this.events = res.data;
    })
    .catch((err) => {
      console.log("This is the err:" + err.message);
    });
  },
};
</script>

<style lang="scss" scoped></style>
