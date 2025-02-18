export type DialogType = 'alert' | 'confirm'
export type DialogAction = 'confirm' | 'cancel' | 'close'

export interface DialogGlobalOption {
  confirmButtonText?: string
  cancelButtonText?: string
  useHeader?: boolean
  alertTitle?: string
  confirmTitle?: string
  confirmButtonClass?: string
  cancelButtonClass?: string
}

export interface DialogOption extends DialogGlobalOption {
  title?: string
}

export interface DialogInstanceOption extends DialogOption {
  id?: string
  msg: string
  type: DialogType
  onVanish?: () => void
  onAction?: (action: DialogAction) => void
}

export interface Dialog {
  alert: (msg: string, options?: DialogOption) => Promise<DialogAction>
  confirm: (msg: string, options?: DialogOption) => Promise<DialogAction>
}
