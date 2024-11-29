import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'
import {store} from "@/store.js";


console.log("Initializing Vue app with router...");
createApp(App)
    .use(router)
    .use(store)  // Use Vuex store
    .mount('#app');

console.log("Vue app mounted.");
