<template>
  <div class="loading-spinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "LoadingSpinner",
};
</script>

<style scoped>
.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5); /* Semi-transparent background */
  backdrop-filter: blur(8px); /* Blur effect */
  z-index: 999; /* Lower than the Navbar */
}

.loading-spinner div {
  width: 1rem;
  height: 1rem;
  margin: 0.5rem;
  border-radius: 50%;
  background: #0ad1c8;
  animation: bounce 1.4s infinite ease-in-out;
}

@keyframes bounce {
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
</style>
