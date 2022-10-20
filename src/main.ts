import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import "@csstools/normalize.css";

createApp(App)
.use(router)
.mount('#app')
