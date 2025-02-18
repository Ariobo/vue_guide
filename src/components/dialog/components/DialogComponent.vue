<script setup lang="ts">
import type { DialogAction, DialogInstanceOption } from '../dialog.type'

const props = withDefaults(defineProps<DialogInstanceOption>(), {
  confirmButtonText: '확인',
  cancelButtonText: '취소',
  useHeader: true,
})

const emits = defineEmits(['action', 'vanish'])

const visible = ref(false)

function close(action: DialogAction) {
  visible.value = false
  nextTick(() => {
    if (props.type === 'alert') {
      emits('action', 'confirm')
    } else {
      emits('action', action)
    }
  })
}

defineExpose({
  open: () => {
    visible.value = true
  },
})
</script>

<template>
  <div class="__dialog">
    <transition>
      <div v-show="visible" class="__dialog__backdrop"></div>
    </transition>
    <transition @after-leave="emits('vanish')">
      <div v-show="visible" class="__dialog__box">
        <div v-if="props.useHeader" class="__dialog__header">
          <div class="__dialog__title">{{ props.title }}</div>
          <div class="__dialog__close">
            <button @click="close('close')"><span class="i-ms-close-rounded"></span></button>
          </div>
        </div>
        <div class="__dialog__body">
          {{ props.msg }}
        </div>
        <div class="__dialog__footer">
          <button
            v-if="props.type === 'confirm'"
            class="__dialog__btn"
            :class="props.cancelButtonClass"
            @click="close('cancel')"
          >
            {{ props.cancelButtonText }}
          </button>
          <button
            class="__dialog__btn confirm"
            :class="props.confirmButtonClass"
            @click="close('confirm')"
          >
            {{ props.confirmButtonText }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.__dialog {
  --dialog-c-backdrop: rgba(0, 0, 0, 0.4);
  --dialog-shadow: var(--vp-shadow-3);

  &__backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--dialog-c-backdrop);
    z-index: 200;
  }
  &__box {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    background: var(--c-white-100);
    border-radius: var(--size-2);
    box-shadow: var(--c-black-300);
    z-index: 200;
    padding: 0.75rem 0;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    padding: 0.35rem 1.5rem 0 1.5rem;
  }

  &__title {
    padding-top: 0.25rem;
    font-weight: 500;
    font-size: var(--size-5);
  }

  &__close {
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
    padding: 1.75rem 1.5rem 1.25rem 1.5rem;
    white-space: break-spaces;
    text-align: center;
  }

  &__footer {
    padding: 0 1.5rem 0.35rem 1.5rem;
    text-align: right;
  }
  &__btn {
    padding: 0.35rem 1.25rem;
    border-radius: 2rem;
    background-color: transparent;

    &:hover:not(:disabled) {
      background-color: var(--c-white-100);
    }
    &:active:not(:disabled) {
      box-shadow: inset 3rem 3rem rgba(0, 0, 0, 0.1);
    }
    &:disabled {
      cursor: not-allowed;
      opacity: 0.45;
    }
    & + & {
      margin-left: 0.5rem;
    }
  }
}
</style>
