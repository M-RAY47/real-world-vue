<template>
  <div>
    <div class="evebt-header">
      <span class="eyebrow">@{{ event.time }} on {{ event.date | date }}</span>
      <h1 class="title"> {{ event.title }}</h1>
      <h5>Organized by{{ event.organizer ? event.organizer.name : '' }}</h5>
      <h5>Category: {{ event.category }}</h5>
    </div>

    <BaseIcon name="map">
      <h2>Location</h2>
    </BaseIcon>
    <address> {{ event.location }}</address>

    <h2> Event details</h2>
    <p>{{ event.description }}</p>

    <h2>
      Attendees
      <span class="badge -fillgradient">{{ event.attendees.length }}</span>
    </h2>
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
