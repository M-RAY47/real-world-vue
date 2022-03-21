import { createStore } from "vuex";

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
  mutations: {},
  actions: {},
  getters: {
    catLength(state) {
      return state.categories.length;
    },
  },
  modules: {},
});
