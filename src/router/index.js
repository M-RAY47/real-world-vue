import { createRouter, createWebHistory } from "vue-router";
import eventCreate from "../views/EventCreate.vue";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";
import User from "../views/User.vue";

const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventList,
  },
  {
    path: "/event",
    name: "event-show",
    component: EventShow,
  },
  {
    path: "/event/create",
    name: "event-create",
    component: eventCreate,
  },
  {
    path: "/user/:username",
    name: "user",
    component: User,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
