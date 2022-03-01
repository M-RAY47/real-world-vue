<template>
  <h1>Showing event #{{ id }}</h1>
</template>
<script>
import EventService from '@/services/EventService.js'
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
