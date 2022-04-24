<template>
  <div>
    <h1>Events for {{ user.user.name }}</h1>
    <EventCard v-for="event in event.events" :key="event.id" :event="event" />
    <template v-if="page != 1">
      <router-link
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
        >Prev Page</router-link
      >
      <template v-if="hasNextPage"> | </template>
    </template>
    <template v-if="hasNextPage">
      <router-link
        :to="{ name: 'event-list', query: { page: page + 1 } }"
        rel="next"
        >Next Page</router-link
      >
    </template>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import { mapState } from "vuex";
import store from "@/store";
function getPageEvents(routeTo, next) {
  const currenPage = parseInt(routeTo.query.page) || 1;
  store.dispatch("event/fetchEvents", {
    page: currenPage,
  })
}


export default {
  components: {
    EventCard,
  },
  created() {
    this.$store.dispatch("fetchEvents", {
      perPage: this.perPage,
      page: this.page,
    });
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1;
    },
    hasNextPage() {
      return this.event.totalEvents > this.page * this.perPage;
    },
    ...mapState(["event", "user"]),
  },
};
</script>

<style lang="scss" scoped></style>
