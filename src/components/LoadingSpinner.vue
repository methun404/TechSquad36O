<template>
  <div class="loading-overlay">
    <div class="spinner-dots">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingSpinner",
};
</script>

<style scoped>
.loading-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  z-index: 9999;
}

.spinner-dots {
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner-dots div {
  width: 1rem;
  height: 1rem;
  margin: 0.4rem;
  border-radius: 50%;
  background: #0ad1c8;
  animation: bounce 1.4s infinite ease-in-out;
}

.spinner-dots div:nth-child(1) {
  animation-delay: -0.32s;
}

.spinner-dots div:nth-child(2) {
  animation-delay: -0.16s;
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
