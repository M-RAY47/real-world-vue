import { createStore } from "vuex";
import EventService from "@/services/EventService.js";

export default createStore({
  state: {
    user: {
      id: "abcd123",
      name: "M.RAY",
    },
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
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    SET_EVENTS(state, events) {
      state.events = events;
    },
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit("ADD_EVENT", event);
      });
    },
    fetchEvents({ commit }) {
      return EventService.getEvents()
        .then((res) => {
          commit("SET_EVENTS", res.data);
        })
        .catch((err) => {
          console.log("This is the err:" + err.message);
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
