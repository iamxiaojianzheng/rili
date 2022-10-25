import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import 'vant/lib/index.css';
import router from "@/router"
createApp(App).use(createPinia).use(router).mount('#app')
