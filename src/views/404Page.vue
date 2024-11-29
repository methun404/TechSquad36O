<template>
  <div class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-gray-900 overflow-hidden">
    <!-- Background Glow -->
    <div class="absolute inset-0 pointer-events-none flex items-center justify-center">
      <div class="bg-purple-500 opacity-40 rounded-full w-[800px] h-[800px] animate-pulse"></div>
    </div>

    <!-- 404 Content -->
    <div class="relative text-center text-white z-10 px-4 md:px-0">
      <h1 class="text-7xl md:text-9xl font-extrabold tracking-widest" ref="errorText">404</h1>
      <p class="text-xl md:text-2xl mt-4 mb-8 text-gray-300" ref="messageText">
        Oops! The page you're looking for doesn't exist.
      </p>
      <p class="text-sm text-gray-400 mb-4">But you’re welcome to explore our universe.</p>

      <!-- Back to Home Button -->
      <router-link to="/" class="inline-block mt-6 px-8 py-4 bg-indigo-600 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-600" ref="button">
        Back to Home
      </router-link>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';

export default {
  name: 'NotFoundPage',
  setup() {
    const errorText = ref(null);
    const messageText = ref(null);
    const button = ref(null);

    onMounted(() => {
      // GSAP Animation Sequence for Text and Button
      gsap.fromTo(errorText.value, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" });
      gsap.fromTo(messageText.value, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1.4, delay: 0.5, ease: "power3.out" });
      gsap.fromTo(button.value, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, delay: 1, ease: "elastic.out(1, 0.5)" });
    });

    return {
      errorText,
      messageText,
      button,
    };
  },
};
</script>

<style scoped>
/* Glowing Animation */
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.9;
  }
}

.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, #1E3A8A, #1F2937);
}

/* Custom Glow Effects */
.text-glow {
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.4), 0 0 15px rgba(108, 99, 255, 0.4);
}
</style>
