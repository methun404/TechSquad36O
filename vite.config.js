// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    historyApiFallback: true, // Important for SPA routing
  },
  resolve: {
    alias: {
      '@': '/src', // Path alias for src directory
      vue: 'vue/dist/vue.esm-bundler.js', // Add this line to use Vue with template compilation support
    },
  },
});
