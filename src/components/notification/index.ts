import type { App } from 'vue'
import { notify } from '@kyvg/vue3-notification'

declare global {
  interface Window {
    $noti: string
  }
}

export default {
  install(app: App, globalOptions = {}) {
    const defaultOptions = {
      type: 'default',
      duration: 1000000000,
      ignoreDuplicates: false,
    }
    const api = {
      show(msg: string, options: any = {}) {
        notify({
          ...defaultOptions,
          ...globalOptions,
          ...options,
          text: msg,
        })
      },
      primary(msg: string, options: any = {}) {
        notify({
          ...defaultOptions,
          ...globalOptions,
          ...options,
          text: msg,
          type: 'primary',
        })
      },
      success(msg: string, options: any = {}) {
        notify({
          ...defaultOptions,
          ...globalOptions,
          ...options,
          text: msg,
          type: 'success',
        })
      },
      info(msg: string, options: any = {}) {
        notify({
          ...defaultOptions,
          ...globalOptions,
          ...options,
          text: msg,
          type: 'info',
        })
      },
      warning(msg: string, options: any = {}) {
        notify({
          ...defaultOptions,
          ...globalOptions,
          ...options,
          text: msg,
          type: 'warning',
        })
      },
      danger(msg: string, options: any = {}) {
        notify({
          ...defaultOptions,
          ...globalOptions,
          ...options,
          text: msg,
          type: 'danger',
        })
      },
    } as any

    app.provide('$noti', api)
    window.$noti = api
  },
}
