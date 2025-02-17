import type { App } from 'vue'
import { defineApi, initContainer } from './plugin.core'

export default {
  install(app: App, options: any = {}) {
    const api = defineApi(options)

    initContainer(api, app._context)
    // 전역 사용설정
    app.provide('$modal', {
      open: api.open,
      close: api.close,
      modals: api.modals,
    } as any)
  },
}
