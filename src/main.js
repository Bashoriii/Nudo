import { createApp } from 'vue';
import { register } from 'swiper/element/bundle'; // Swiper.js
import App from './App.vue';
import router from './router';

import './assets/main.scss';

// Register for Swiper
register();

const app = createApp(App);

app.use(router);

app.mount('#app');
