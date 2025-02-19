import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Notifications from '@kyvg/vue3-notification'

import App from './App.vue'
import router from './router'

// style
import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'
import './assets/styles/main.scss'

import ModalPlugin from '@/components/modal/index'
import DialogPlugin from '@/components/dialog/index'
import NotificationPlugin from '@/components/notification/index'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// modal
app.use(ModalPlugin, {
  clickToClose: true,
})

// dialog
app.use(DialogPlugin, {})

// notification
app.use(NotificationPlugin, {
  duration: 3000,
})

app.use(Notifications)
app.mount('#app')
