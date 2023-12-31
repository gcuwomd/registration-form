import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import 'uno.css'
import router from './router/index'
createApp(App).use(router).use(ElementPlus).mount('#app')
 