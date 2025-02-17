import { type AppContext, createVNode, render, shallowReactive } from 'vue'
import ModalContainer from './ModalContainer.vue'

let _context: AppContext | null = null

export function defineApi(options: any) {
  const modals = shallowReactive<any[]>([])

  function open(modal: any) {
    modal.options = Object.assign({}, options, modal.options)
    modals.push(modal)
  }

  function close(id: string) {
    for (let i = modals.length - 1; i >= 0; i--) {
      if (modals[i].options.id === id) {
        modals.splice(i, 1)
      }
    }
  }

  return { modals, open, close }
}

export function initContainer(api: any, appContext: AppContext) {
  if (!_context) {
    _context = appContext
  }

  const container = document.createElement('div')
  const vnode = createVNode(ModalContainer, { api })
  vnode.appContext = _context
  render(vnode, container)
  document.body.appendChild(container.firstElementChild as Element)
}

export default {
  defineApi,
  initContainer,
}
