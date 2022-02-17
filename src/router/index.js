import { createRouter, createWebHistory } from "vue-router";
import eventCreate from "../views/EventCreate.vue";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";

const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventList,
  },
  {
    path: "/event/:id",
    name: "event-show",
    component: EventShow,
    props: true,
  },
  {
    path: "/event/create",
    name: "event-create",
    component: eventCreate,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
