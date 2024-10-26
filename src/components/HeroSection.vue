<template>
  <section class="bg-gray-900 text-white flex items-center" id="hero-section">
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 md:pt-24">
      <!-- Text Content (Left for larger screens, Top for mobile) -->
      <div class="w-full md:w-1/2 text-left mb-10 md:mb-0">
        <h1
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight fade-in-up"
            style="animation-delay: 0.3s;"
        >
          Complete Tech Solutions by <span class="text-teal-400">TechSquad360</span>
        </h1>
        <p class="text-base sm:text-lg md:text-xl lg:text-2xl mt-4 fade-in-up" style="animation-delay: 0.5s;">
          Empowering your business with innovative technology solutions.
        </p>
        <p class="text-base sm:text-lg md:text-xl lg:text-2xl mt-4 fade-in-up" style="animation-delay: 0.6s;">
          We specialize in:
        </p>
        <div class="mt-4 fade-in-up" style="animation-delay: 0.7s;">
          <ul class="list-none space-y-2 text-base sm:text-lg md:text-xl lg:text-2xl">
            <li class="flex items-center">
              <span class="text-teal-500 text-2xl md:text-3xl mr-3">🌟</span>
              <span>Digital Marketing: Maximize your online presence.</span>
            </li>
            <li class="flex items-center">
              <span class="text-teal-500 text-2xl md:text-3xl mr-3">☁️</span>
              <span>Cloud Computing: Scalable and secure solutions.</span>
            </li>
            <li class="flex items-center">
              <span class="text-teal-500 text-2xl md:text-3xl mr-3">📱</span>
              <span>App Development: Intuitive mobile experiences.</span>
            </li>
            <li class="flex items-center">
              <span class="text-teal-500 text-2xl md:text-3xl mr-3">🔒</span>
              <span>Cyber Security: Protect your digital assets.</span>
            </li>
          </ul>
        </div>
        <a
            href="#services"
            class="mt-6 inline-block bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600 transition-transform transform hover:scale-105 fade-in-up"
            style="animation-delay: 0.8s;"
        >
          Explore Our Services
        </a>
      </div>

      <!-- Animation (Right for larger screens, Hidden on mobile) -->
      <div class="hidden md:block w-full md:w-1/2 flex justify-center md:justify-end">
        <lottie-animation
            :animationData="animationData"
            :autoplay="true"
            :loop="false"
            :speed="1"
            ref="anim"
            class="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px]"
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif; /* Updated font to Poppins */
}

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

/* Reduced space between list items */
ul li {
  margin-bottom: 0.25rem; /* Reduced vertical space */
}

@media (max-width: 768px) {
  #hero-section {
    padding-top: 5rem; /* Reduced from 8rem to 5rem */
    padding-bottom: 4rem;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }

  ul li span {
    font-size: 1rem;
  }
}

@media (min-width: 769px) {
  #hero-section {
    padding-top: 6rem; /* Reduced from default value to 6rem */
    padding-bottom: 4rem;
    min-height: 80vh;
  }

  h1 {
    font-size: 4rem;
  }

  p {
    font-size: 1.25rem;
  }

  ul li span {
    font-size: 1.25rem;
  }
}
</style>
