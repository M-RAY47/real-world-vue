import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      id: "abcd123",
      name: "M.RAY",
    },
    categories: [
      "sutainability",
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
  modules: {},
});
