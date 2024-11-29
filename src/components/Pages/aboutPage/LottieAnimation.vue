<template>
  <div ref="lottieContainer"></div>
</template>

<script>
import lottie from 'lottie-web';

export default {
  props: {
    src: String,
  },
  mounted() {
    lottie.loadAnimation({
      container: this.$refs.lottieContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: this.src,
    });
  },
};
</script>

<style scoped>
/* Optional custom animation styles */
</style>
