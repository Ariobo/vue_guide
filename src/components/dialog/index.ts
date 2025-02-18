import type { App } from 'vue'
import { defineApi, setContext } from './plugin.core'

export default {
  install(app: App, options: any = {}) {
    setContext(app._context)

    const api = defineApi(options)
    app.provide('$dialog', api)
  },
}
