import { createStore } from 'vuex';

export const store = createStore({
    state() {
        return {
            isLoading: false, // Global loading state
        };
    },
    mutations: {
        setLoading(state, status) {
            state.isLoading = status; // Mutation to toggle loading state
        },
    },
    actions: {
        setLoading({ commit }, status) {
            commit('setLoading', status); // Action to set loading state
        },
    },
});
