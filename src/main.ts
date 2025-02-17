import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// style
import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'
import './assets/styles/main.scss'

import ModalPlugin from '@/components/modal/index'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// modal
app.use(ModalPlugin, {
  clickToClose: true,
})

app.mount('#app')
