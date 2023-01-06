import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 路由
import { createPinia } from 'pinia' //注册pinia
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
