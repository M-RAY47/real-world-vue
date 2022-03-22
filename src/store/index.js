import { createStore } from "vuex";
import EventService from "../services/EventService";

export default createStore({
  state: {
    user: {
      id: "abcd123",
      name: "M.RAY",
    },
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
      EventService.postEvent(event);
      state.events.push(event);
    },
  },
  actions: {
    createEvent({ commit }, event) {
      commit("ADD_EVENT", event);
    },
  },
  getters: {
    catLength(state) {
      return state.categories.length;
    },
  },
  modules: {},
});
