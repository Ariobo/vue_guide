<script setup lang="ts">
interface InputProps {
  type?: string
  readonly?: boolean
  disabled?: boolean
  modelValue?: string
  required?: boolean
  placeholder?: string
  maxlength?: number
}
//TODO: 타입 정의
const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  readonly: false,
  disabled: false,
  modelValue: '',
  required: false,
  reactive: undefined,
})

const emit = defineEmits(['update:modelValue'])

function handleInput(event: Event) {
  const value = (event.target as HTMLInputElement).value
  emit('update:modelValue', value)
}
</script>

<template>
  <div>
    <input
      :type="props.type"
      :value="props.modelValue"
      :readonly="props.readonly"
      :disabled="props.disabled"
      :maxlength="props.maxlength"
      :placeholder="props.placeholder"
      :required="props.required"
      @input="handleInput"
    />
  </div>
</template>

<style scoped></style>
