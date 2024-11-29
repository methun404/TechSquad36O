<template>
  <div ref="lottieContainer"></div>
</template>

<script>
import lottie from 'lottie-web';

export default {
  props: {
    animationData: Object,
    autoplay: {
      type: Boolean,
      default: true,
    },
    loop: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    lottie.loadAnimation({
      container: this.$refs.lottieContainer,
      renderer: 'svg',
      loop: this.loop,
      autoplay: this.autoplay,
      animationData: this.animationData,
    });
  },
};
</script>

<style scoped>
.lottie-animation {
  max-width: 550px;
  max-height: 550px;
}
</style>
