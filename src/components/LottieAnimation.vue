<template>
  <div ref="lottieContainer"></div>
</template>

<script>
import lottie from 'lottie-web';

export default {
  name: 'LottieAnimation',
  props: {
    animationData: {
      type: Object,
      required: true,
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    loop: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      animInstance: null,
    };
  },
  mounted() {
    if (this.$refs.lottieContainer && this.animationData) {
      this.animInstance = lottie.loadAnimation({
        container: this.$refs.lottieContainer,
        renderer: 'svg',
        loop: this.loop,
        autoplay: this.autoplay,
        animationData: this.animationData,
      });
    }
  },
  beforeUnmount() {
    if (this.animInstance) {
      this.animInstance.destroy();
      this.animInstance = null;
    }
  },
};
</script>

<style scoped>
.lottie-animation {
  max-width: 550px;
  max-height: 550px;
}
</style>
