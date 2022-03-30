import { createStore } from "vuex";
import EventService from "@/services/EventService.js";

export default createStore({
  state: {
    user: {
      id: "abcd123",
      name: "M.RAY",
    },
    event: {},
    events: [],
    categories: [
      "sustainability",
      "natural",
      "animal welfare",
      "housing",
      "eduction",
      "food",
      "community",
    ],
    totalEvents: null,
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    SET_EVENTS(state, events) {
      state.events = events;
    },
    SET_TOTAL_EVENTS(state, total) {
      state.totalEvents = total;
    },
    SET_EVENT(state, event) {
      state.event = event;
    },
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit("ADD_EVENT", event);
      });
    },
    fetchEvents({ commit }, { perPage, page }) {
      return EventService.getEvents(perPage, page)
        .then((res) => {
          const total = res.headers["x-total-count"];
          commit("SET_TOTAL_EVENTS", total);
          commit("SET_EVENTS", res.data);
        })
        .catch((err) => {
          console.log("This is the error:" + err.message);
        });
    },
  },
  getters: {
    catLength(state) {
      return state.categories.length;
    },
  },
  modules: {},
});
