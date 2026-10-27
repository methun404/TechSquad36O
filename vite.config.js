import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
    host: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('lottie-web') || id.includes('lottie-web-vue')) {
              return 'vendor-lottie';
            }
            if (id.includes('gsap')) {
              return 'vendor-animation';
            }
            if (id.includes('firebase')) {
              return 'vendor-firebase';
            }
            if (id.includes('vue') || id.includes('vue-router') || id.includes('vuex')) {
              return 'vendor-core';
            }
            return 'vendor-misc';
          }
          if (id.includes('assets/lotti_animation')) {
            return 'lottie-services-data';
          }
        },
      },
    },
  },
});
