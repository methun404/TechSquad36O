<template>
  <div>
    <!-- Show loading screen while loading -->
    <div v-if="isLoading" class="loading-screen">
     <loading-spinner/>
    </div>

    <!-- Main application content -->
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import LoadingSpinner from "@/components/LoadingSpinner.vue";

export default {
  components: {LoadingSpinner},
  computed: {
    ...mapState({
      isLoading: (state) => state.isLoading, // Map the isLoading state from Vuex
    }),
  },
};
</script>

<style>
/* Global loading screen styles */
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  z-index: 1000; /* Ensure the loading screen is above other content */
}
</style>
