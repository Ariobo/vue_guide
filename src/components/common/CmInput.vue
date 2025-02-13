<script setup lang="ts">
import { cmInput } from '@/envs'

interface InputProps {
  type?: string
  modelValue?: string
  readonly?: boolean
  disabled?: boolean
  required?: boolean
  placeholder?: string
  maxlength?: number
  minlength?: number
  format?: string | RegExp
  error?: string
}

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  modelValue: '',
  readonly: false,
  disabled: false,
  required: false,
})

const emit = defineEmits(['update:modelValue'])

// 입력된 값 format체크
function handleInput(event: Event) {
  const target = event.target as HTMLInputElement

  if (props.format) {
    let regx = null
    if (typeof props.format === 'string') {
      regx = cmInput.inputFormats[props.format]
    } else if (props.format instanceof RegExp) {
      regx = props.format
    }
    if (regx) {
      target.value = target.value.match(regx)?.join('') || ''
    }
  }
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="input-wrapper">
    <input
      :type="props.type"
      :value="props.modelValue"
      :readonly="props.readonly"
      :disabled="props.disabled"
      :maxlength="props.maxlength"
      :placeholder="props.placeholder"
      :required="props.required"
      :format="props.format"
      @input="handleInput"
      :class="['form-input', { 'has-error': props.error }]"
    />
    <p v-if="props.error" class="error-message">{{ props.error }}</p>
  </div>
</template>

<style scoped></style>
