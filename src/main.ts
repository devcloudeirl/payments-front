import { createApp } from 'vue'
import './assets/css/tailwind.css'
import './assets/css/style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
