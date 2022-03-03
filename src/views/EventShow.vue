<template>
  <div>
    <div class="evebt-header">
      <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
      <h1 class="title"> {{ event.title }}</h1>
      <h5>Organized by{{ event.Organizer }}</h5>
      <h5>Category: {{ event.Category }}</h5>
    </div>
  </div>
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
