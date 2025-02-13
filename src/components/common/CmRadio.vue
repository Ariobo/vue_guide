<script setup lang="ts">
interface checkProps {
  options?: Record<string, any>[]
  valueKey?: string
  labelKey?: string
  readonly?: boolean
  disabled?: boolean
  required?: boolean
  requiredMsg?: string
  reactive?: boolean
}
const props = withDefaults(defineProps<checkProps>(), {
  options: () => [],
  valueKey: 'value',
  labelKey: 'label',
  readonly: false,
  disabled: false,
  required: false,
  reactive: undefined,
})

const modelValue = defineModel('modelValue')
</script>

<template>
  <div>
    <div class="flex gap-sm">
      <label v-for="(opt, index) in props.options" :key="`opt-${index}`">
        <input
          type="radio"
          class="form-radio"
          v-model="modelValue"
          :disabled="props.disabled"
          :readonly="props.readonly"
          :value="opt[props.valueKey]"
        />
        {{ opt.label }}
      </label>
    </div>
  </div>
</template>

<style scoped>
.checkbox {
  width: 16px;
  height: 16px;
}
</style>
