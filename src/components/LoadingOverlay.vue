<template>
  <div
      v-if="isLoading"
      class="loading-overlay fixed inset-0 z-50 bg-white/70 backdrop-blur-sm flex items-center justify-center"
  >
    <div class="loading-spinner animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
.loading-overlay {
  transition: opacity 0.3s ease;
}

.loading-spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
}
</style>
