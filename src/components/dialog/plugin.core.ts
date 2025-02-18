import { createVNode, render, type AppContext } from 'vue'
import DialogComponent from './components/DialogComponent.vue'

let _context: AppContext | null = null
const instances = new Map()

export function getRandomKey() {
  return (Math.random() + 1).toString(36).substring(7)
}

function initInstance(options: any, container: HTMLElement, appContext: AppContext | null = null) {
  const vnode = createVNode(DialogComponent, <any>options)
  vnode.appContext = appContext
  render(vnode, container)
  document.body.appendChild(<Element>container.firstElementChild)
  return vnode.component
}

function showDialog(options: any, appContext: AppContext | null) {
  const div = document.createElement('div')

  const onVanish = () => {
    render(null, div)
    instances.delete(options.id)
  }

  const onAction = (action: any) => {
    const instance = instances.get(options.id)
    if (action === 'cancel' || action === 'close') {
      instance.reject(action)
    } else {
      instance.resolve(action)
    }
  }

  Object.assign(options, { onVanish, onAction })
  const instance = initInstance(options, div, appContext)!
  const vm = instance.proxy
  instance.exposed?.open()
  return vm
}

async function Dialog(options: any): Promise<any> {
  const id = new Date().getTime() + getRandomKey()
  return new Promise((resolve, reject) => {
    const vm = showDialog(options, _context)

    options.id = id

    instances.set(id, {
      options,
      resolve,
      reject,
    })
  })
}

export function defineApi(gOptions: any): any {
  return {
    alert(msg: string, options: any = {}) {
      return Dialog(
        <any>Object.assign({ title: gOptions.alertTitle || '알림' }, gOptions, options, {
          msg,
          type: 'alert',
        }),
      )
    },
    confirm(msg: string, options: any = {}) {
      return Dialog(
        <any>Object.assign({ title: gOptions.confirmTitle || '확인' }, gOptions, options, {
          msg,
          type: 'confirm',
        }),
      )
    },
  }
}

export function setContext(context: AppContext) {
  _context = context
}

export default {
  defineApi,
  setContext,
}
