import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store } from '@/store.js';

// Initialize and mount Vue application instance
const app = createApp(App);

app.use(router);
app.use(store);
app.mount('#app');
