import { createApp } from 'vue/dist/vue.esm-bundler.js';
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import router from './router.js';

createApp(App).use(router).mount('#app')
