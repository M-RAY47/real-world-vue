import { createStore } from "vuex";
import EventService from "@/services/EventService.js";
import * as user from "@/store/modules/user.js";

export default createStore({
  modules: {
    user,
  },
});
