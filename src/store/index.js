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
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit("ADD_EVENT", event);
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
