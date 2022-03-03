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
