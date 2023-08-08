import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import  'lib-flexible'
import 'px2rem-loader'
createApp(App).use(ElementPlus).mount('#app')
