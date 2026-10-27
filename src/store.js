import { createStore } from 'vuex';

/**
 * Vuex Store for global application state management.
 */
export const store = createStore({
  state() {
    return {
      isLoading: false,
    };
  },
  mutations: {
    setLoading(state, status) {
      state.isLoading = Boolean(status);
    },
  },
  actions: {
    setLoading({ commit }, status) {
      commit('setLoading', status);
    },
  },
  getters: {
    isLoading: (state) => state.isLoading,
  },
});

export default store;
