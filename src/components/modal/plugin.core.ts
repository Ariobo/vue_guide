import { type AppContext, createVNode, render } from 'vue'
import ModalContainer from './ModalContainer.vue'

let _context: any | null = null

export function defineApi(options: any): any {
  return {
    modals: <any[]>shallowReactive([]),
    container: undefined,
    open(modal: any): void {
      modal.options = Object.assign({}, options, modal.options)
      this.modals.push(modal)
    },
    close(id: string): void {
      for (let i = this.modals.length - 1; i > -1; i -= 1) {
        if (this.modals[i].options.id === id) {
          this.modals.splice(i, 1)
        }
      }
    },
  } as any
}

export function initContainer(api: any, appContext: AppContext): void {
  // set app context
  if (!_context) {
    _context = appContext
  }

  const container = document.createElement('div')
  const vnode = createVNode(ModalContainer, { api: api })
  vnode.appContext = _context
  render(vnode, container)
  document.body.appendChild(<Element>container.firstElementChild)
}

export default {
  defineApi,
  initContainer,
}
