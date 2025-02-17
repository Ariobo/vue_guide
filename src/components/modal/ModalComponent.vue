<script setup lang="ts">
const props = defineProps<{
  modal: any
}>()

const emits = defineEmits(['close'])

const visible = ref(false)

const component = computed(() => {
  return defineAsyncComponent(props.modal.component)
})

const modalWidth = computed(() => {
  let width: string | number = props.modal.options.width || '500px'
  if (typeof width === 'number') {
    width = `${width}px`
  }
  return width
})

const modalHeight = computed(() => {
  let height: string | number = props.modal.options.height || 'auto'
  if (typeof height === 'number') {
    height = `${height}px`
  }
  return height
})

function close() {
  visible.value = false
  setTimeout(() => {
    emits('close', props.modal.options.id)
  }, 150)
}

function handleClickBackdrop(): void {
  const clickToClose =
    props.modal.options?.clickToClose === undefined ? true : props.modal.options.clickToClose
  if (clickToClose) {
    close()
  }
}

onMounted(() => {
  visible.value = true
})
</script>

<template>
  <div class="__modal">
    <transition>
      <div v-if="visible" class="__modal__backdrop" @click="handleClickBackdrop"></div>
    </transition>
    <transition>
      <div
        v-if="visible"
        class="__modal__box"
        :style="`width: ${modalWidth}; height: ${modalHeight}`"
      >
        <div class="__modal__header">
          <div class="__modal__title">
            {{ modal.options.title }}
          </div>
          <div class="__modal__close">
            <button class="close-btn" @click="close">✕</button>
          </div>
        </div>
        <div class="__modal__body">
          <component
            :is="component"
            v-bind="modal.options.bind"
            v-on="Object.assign(modal.on || {}, { close: close })"
          ></component>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.__modal {
  --modal-c-backdrop: rgba(0, 0, 0, 0.4);
  --modal-shadow: 0 12px 32px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.08);
  --modal-c-box-bg: #fff;
  --modal-c-title: #0a090a;
  --modal-c-close: rgba(57, 57, 60, 0.78);
  --modal-fs-title: 16px;

  &__backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--modal-c-backdrop);
    z-index: 100;
  }

  &__box {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    background: var(--modal-c-box-bg);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    box-shadow: var(--modal-shadow);
    max-height: calc(100vh - 4rem);
    max-width: calc(100vw - 3rem);
    z-index: 100;
    padding: 0.75rem 0 1.5rem 0;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.35rem 1.5rem 0 1.5rem;
    flex: none;
  }

  &__title {
    padding-top: 0.25rem;
    font-weight: 500;
    font-size: var(--modal-fs-title);
    color: var(--modal-c-title);
  }

  &__close {
    color: var(--modal-c-close);
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      display: block;
      background-color: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    span {
      display: inline-block;
      width: 1.25rem;
      height: 1.25rem;
    }
  }

  &__body {
    padding: 1.35rem 1.5rem 0rem 1.5rem;
    overflow: auto;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 22px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #ff3b30;
  }
}
</style>
