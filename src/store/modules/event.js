import EventService from "@/services/EventService.js";

export const state = {
  event: {},
  events: [],
  totalEvents: null,
  perPage: 3,
};

export const mutations = {
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
};

export const actions = {
  createEvent({ commit, dispatch }, event) {
    return EventService.postEvent(event)
      .then(() => {
        commit("ADD_EVENT", event);
        const notification = {
          type: "success",
          message: "Your event was successfully created!",
        };
        dispatch("notifications/add", notification, { root: true });
      })
      .catch((err) => {
        const notification = {
          type: "error",
          message: "There is problem creating event " + err.message,
        };
        dispatch("notifications/add", notification, { root: true });
        throw err;
      });
  },
  fetchEvents({ commit, dispatch, state }, { page }) {
    return EventService.getEvents(state.perPage, page)
      .then((res) => {
        const total = parseInt(res.headers["x-total-count"]);
        commit("SET_TOTAL_EVENTS", total);
        commit("SET_EVENTS", res.data);
      })
      .catch((err) => {
        const notification = {
          type: "error",
          message: "There was a problem fetching events: " + err.message,
        };
        dispatch("notifications/add", notification, { root: true });
      });
  },
  fetchEvent({ commit, getters, dispatch, state }, id) {
    if (id == state.event.id) {
      return state.event;
    }

    var event = getters.getEventByIds(id);
    if (event) {
      commit("SET_EVENT", event);
      return event;
    } else {
      return EventService.getEvent(id)
        .then((res) => {
          commit("SET_EVENT", res.data);
          return res.data;
        })
        .catch((err) => {
          const notification = {
            type: "error",
            message: "There was a problem fetching event: " + err.message,
          };
          dispatch("notifications/add", notification, { root: true });
          console.log("This is the error:" + err.message);
        });
    }
  },
};

export const getters = {
  getEventByIds: (state) => (id) => {
    console.log("this is the events", state.events);
    return state.events.find((event) => {
      event.id === id;
      console.log(event);
      console.log(event.id);
    });
  },
};
