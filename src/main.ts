import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// style
import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'
import './assets/styles/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
