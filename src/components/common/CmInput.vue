<script setup lang="ts">
interface InputProps {
  type?: string
  modelValue?: string
  readonly?: boolean
  disabled?: boolean
  required?: boolean
  placeholder?: string
  maxlength?: number
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

function handleInput(event: Event) {
  const value = (event.target as HTMLInputElement).value
  emit('update:modelValue', value)
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
      @input="handleInput"
      :class="['form-input', { 'has-error': props.error }]"
    />
    <p v-if="props.error" class="error-message">{{ props.error }}</p>
  </div>
</template>

<style scoped></style>
