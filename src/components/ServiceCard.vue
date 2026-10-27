<template>
  <div
    class="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#213A57] to-[#0B6477] text-white rounded-lg shadow-2xl p-8 space-y-8 md:space-y-0 md:space-x-8 hover:shadow-2xl transition-transform duration-300 hover:scale-105 overflow-hidden"
    :class="reverse ? 'md:flex-row-reverse' : ''"
  >
    <!-- Left Side: Details -->
    <div class="md:w-2/3 space-y-6">
      <h2 class="text-3xl font-bold text-teal-300">{{ title }}</h2>
      <ul class="list-disc pl-6 space-y-2 text-gray-100">
        <li v-for="(point, index) in keyPointsList" :key="index">{{ point }}</li>
      </ul>
      <p class="text-lg mt-4 break-words text-gray-200 leading-relaxed">{{ description }}</p>
    </div>

    <!-- Right Side: Lottie Animation -->
    <div class="md:w-1/3 flex justify-center items-center">
      <LottieAnimation
        :animationData="animationData"
        :autoplay="true"
        :loop="true"
        class="lottie-animation"
      />
    </div>
  </div>
</template>

<script>
import LottieAnimation from './LottieAnimation.vue';

export default {
  name: 'ServiceCard',
  components: {
    LottieAnimation,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    keyPoints: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      required: true,
    },
    animationData: {
      type: Object,
      required: true,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    keyPointsList() {
      if (!this.keyPoints) return [];
      return this.keyPoints.split(',').map((p) => p.trim()).filter(Boolean);
    },
  },
};
</script>

<style scoped>
.lottie-animation {
  max-width: 400px;
  max-height: 400px;
}

@media (min-width: 768px) {
  .lottie-animation {
    max-width: 500px;
    max-height: 500px;
  }
}
</style>
