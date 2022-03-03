<template>
  <div class="evebt-header">
    <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
    <h1> {{ event.title }}</h1>
    <h5>Organized by{{ event.Organizer }}</h5>
</template>
<script>
import EventService from "@/services/EventService.js";

export default {
  props: ["id"],
  data() {
    return {
      event: {}
    }
  },
  created() {
    EventService.getEvent(this.id)
      .then(res => {
        this.event= res.data;
      })
      .catch(err=> {
        console.log('There is an error:', err.response)
      })
  }
};
</script>

<style></style>
