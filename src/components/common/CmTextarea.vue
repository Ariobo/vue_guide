<script setup lang="ts">
interface Props {
  readonly?: boolean
  disabled?: boolean
  maxlength?: number
  placeholder?: string
  rows?: number
  cols?: number
  resizable?: boolean
  width?: string
  height?: string
  autoExpand?: boolean
  hideScrollbar?: boolean
}

const modelValue = defineModel<string>()

const props = withDefaults(defineProps<Props>(), {
  readonly: false,
  disabled: false,
  resizable: false,
  width: '400px',
  height: '120px',
  autoExpand: false,
  hideScrollbar: false,
})
</script>

<template>
  <div class="form-textarea">
    <textarea
      v-model="modelValue"
      :readonly="props.readonly"
      :disabled="props.disabled"
      :maxlength="props.maxlength"
      :placeholder="props.placeholder"
      :rows="props.rows"
      :cols="props.cols"
      :class="{
        'resize-none': !props.resizable,
        'auto-expand': props.autoExpand,
        'hide-scrollbar': props.hideScrollbar,
      }"
      :style="{ width: props.width, height: props.height }"
    ></textarea>
  </div>
</template>

<style scoped lang="scss">
.form-textarea {
  position: relative;
  width: fit-content;
}

textarea {
  width: 100%;
  padding: 12px;
  border: 2px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  font-family: 'Pretendard', sans-serif;
  background: #fff;
  color: #333;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
  outline: none;
}

.resize-none {
  resize: none !important;
}

.auto-expand {
  overflow-y: hidden;
  min-height: 50px;
}

.hide-scrollbar {
  overflow: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

textarea:disabled {
  background: #f5f5f5;
  color: #999;
  cursor: not-allowed;
}

textarea[readonly] {
  background: #f9f9f9;
  border-color: #ddd;
  color: #777;
  cursor: not-allowed;
}
</style>
