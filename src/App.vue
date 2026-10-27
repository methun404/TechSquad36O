<template>
  <div id="techsquad-app">
    <!-- Global Route Transition Loading Screen -->
    <LoadingSpinner v-if="isLoading" />

    <!-- Main Application View -->
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import LoadingSpinner from "@/components/LoadingSpinner.vue";

export default {
  name: 'App',
  components: {
    LoadingSpinner,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.isLoading,
    }),
  },
};
</script>

<style>
/* Base application resets and typography */
html, body {
  scroll-behavior: smooth;
}
</style>
