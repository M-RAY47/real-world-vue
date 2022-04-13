export const namespaced = true;

export const state = {
  notifications: [],
};

let nextId = 1;

export const mutations = {
  PUSH(state, notification) {
    state.notifications.push({
      ...notification,
      id: nextId++,
    });
  },
};
