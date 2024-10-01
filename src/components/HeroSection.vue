<template>
  <section class="bg-gray-900 text-white py-16 min-h-screen flex items-center" id="hero-section">
    <div class="container mx-auto flex flex-col lg:flex-row items-center justify-between">
      <!-- Text Content (Left) -->
      <div class="lg:w-1/2 text-left mb-10 lg:mb-0">
        <h1 class="text-4xl font-bold">Complete Tech Solutions by TeamSquad360</h1>
        <p class="text-lg mt-4">From Digital Marketing to Cyber Security, we cover all your tech needs.</p>
        <a href="#services" class="mt-6 inline-block bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600">Explore Our Services</a>
      </div>

      <!-- Lottie Animation (Right) -->
      <div class="lg:w-1/2 flex justify-center">
        <lottie-animation
            :animationData="animationData"
            :autoplay="true"
            :loop="false"
            :speed="1"
            ref="anim"
            style="width: 600px; height: 600px;"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue';
// Import the named export directly
import { LottieAnimation } from 'lottie-web-vue';
import animationData from '../assets/animation.json'; // Ensure the path is correct

export default {
  name: 'HeroSection',
  components: {
    LottieAnimation
  },
  setup() {
    const anim = ref(null);

    onMounted(() => {
      if (anim.value) {
        anim.value.goToAndPlay(0, true);
      }
    });

    return {
      anim,
      animationData
    };
  }
};
</script>

<style scoped>
/* Add specific styles if needed */
</style>
