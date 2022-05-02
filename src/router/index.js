import { createRouter, createWebHistory } from "vue-router";
import EventCreate from "../views/EventCreate.vue";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";
import NotFound from "../views/NotFound.vue";
import NProgress from "nprogress";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventList,
    props: true,
  },
  {
    path: "/event/:id",
    name: "event-show",
    component: EventShow,
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store
        .dispatch("fetchEvent", routeTo.params.id)
        .then((event) => {
          routeTo.params.event = event;
          next();
        })
        .catch((err) => {
          console.log(err);
          next({ name: "404", params: { resource: "page" } });
          const notification = {
            type: "error",
            message: "There was a problem fetching event: " + err.message,
          };
          store.dispatch("notifications/add", notification, { root: true });
          console.log("This is the error:" + err.message);
        });
    },
  },
  {
    path: "/event/create",
    name: "event-create",
    component: EventCreate,
  },
  {
    path: "/404",
    name: "404",
    component: NotFound,
    props: true,
  },
  {
    path: "/:paathMatch(.*)*",
    redirect: { name: "404", params: { resource: "event" } },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
