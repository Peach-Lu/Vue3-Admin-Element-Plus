import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 路由
import { setupStore } from '@/store'
async function bootstrap() {
  const app = createApp(App)
  // 配置 store
  setupStore(app)
  // 配置 router
  app.use(router)
  // 挂载app
  app.mount('#app')
}
bootstrap()
