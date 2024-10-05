<template>
  <section class="bg-gray-900 text-white py-16 min-h-screen flex items-center" id="hero-section">
    <div class="container mx-auto flex flex-col lg:flex-row items-center justify-between">
      <!-- Text Content (Left) -->
      <div class="lg:w-1/2 text-left mb-10 lg:mb-0">
        <h1
            class="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight fade-in-up"
            style="animation-delay: 0.3s;"
        >
          Complete Tech Solutions by <span class="text-teal-400">TechSquad360</span>
        </h1>
        <p class="text-base md:text-lg lg:text-xl mt-4 fade-in-up" style="animation-delay: 0.5s;">
          Empowering your business with innovative technology solutions.
        </p>
        <p class="text-base md:text-lg lg:text-xl mt-4 fade-in-up" style="animation-delay: 0.6s;">
          We specialize in:
        </p>
        <div class="mt-4 fade-in-up" style="animation-delay: 0.7s;">
          <div class="flex items-center">
            <span class="text-teal-500 text-xl md:text-2xl lg:text-3xl mr-2">🌟</span>
            <span class="text-sm md:text-lg lg:text-xl">Digital Marketing: Maximize your online presence.</span>
          </div>
          <div class="flex items-center mt-2">
            <span class="text-teal-500 text-xl md:text-2xl lg:text-3xl mr-2">☁️</span>
            <span class="text-sm md:text-lg lg:text-xl">Cloud Computing: Scalable and secure solutions.</span>
          </div>
          <div class="flex items-center mt-2">
            <span class="text-teal-500 text-xl md:text-2xl lg:text-3xl mr-2">📱</span>
            <span class="text-sm md:text-lg lg:text-xl">App Development: Intuitive mobile experiences.</span>
          </div>
          <div class="flex items-center mt-2">
            <span class="text-teal-500 text-xl md:text-2xl lg:text-3xl mr-2">🔒</span>
            <span class="text-sm md:text-lg lg:text-xl">Cyber Security: Protect your digital assets.</span>
          </div>
        </div>
        <a
            href="#services"
            class="mt-6 inline-block bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600 transition-transform transform hover:scale-105 fade-in-up"
            style="animation-delay: 0.8s;"
        >
          Explore Our Services
        </a>
      </div>

      <!-- Lottie Animation (Right) -->
      <div class="lg:w-1/2 flex justify-center lg:justify-end">
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
import { LottieAnimation } from 'lottie-web-vue';
import animationData from '../assets/animation.json';

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
/* Fade-in animations */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
}

/* Button hover animation */
a {
  transition: all 0.3s ease;
}
a:hover {
  transform: scale(1.05);
}
</style>
