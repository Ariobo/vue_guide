<script setup lang="ts">
interface Props {
  options?: Record<string, any>[]
  valueKey?: string
  labelKey?: string
  readonly?: boolean
  disabled?: boolean
  required?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  options: () => [],
  valueKey: 'value',
  labelKey: 'label',
  readonly: false,
  disabled: false,
  required: false,
})

const modeValue = defineModel<string | number>()

const selected = ref(props.options.length > 0 ? props.options[0][props.labelKey] : '선택하세요')
const isOpen = ref(false)

const selectOption = (option: any) => {
  if (!props.readonly && !props.disabled) {
    modeValue.value = option[props.labelKey]
    isOpen.value = false
  }
}

const toggleDropdown = () => {
  if (!props.readonly && !props.disabled) {
    isOpen.value = !isOpen.value
  }
}
</script>

<template>
  <div class="form-dropdown" :class="{ disabled: props.disabled, readonly: props.readonly }">
    <div class="dropdown-toggle" @click="toggleDropdown">
      {{ modeValue }}
      <span class="arrow" :class="{ rotate: isOpen }">▼</span>
    </div>

    <ul v-if="isOpen" class="dropdown-menu">
      <li
        v-for="(option, index) in props.options"
        :key="`opt-${index}`"
        @click="selectOption(option)"
        class="dropdown-item"
      >
        {{ option[props.labelKey] }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
/* 전체 드롭다운 */
.form-dropdown {
  position: relative;
  width: 200px;
  font-family: 'Pretendard', sans-serif;
  user-select: none;

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &.readonly {
    background: #f9f9f9;
    border: 1px solid #ddd;
    color: #777;
    cursor: not-allowed;
  }

  &:disabled {
    background-color: var(--c-black-100);
    border-color: var(--c-black-200);
    color: var(--c-black-500);
    cursor: not-allowed;
    opacity: 0.6;
  }
}

.dropdown-toggle {
  background: #fff;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s;

  &:hover {
    border-color: #007aff;
  }
}

.arrow {
  transition: transform 0.3s;
}

.arrow.rotate {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-top: 5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 0;
  z-index: 10;
  max-height: 200px;
  overflow-y: auto;
}

.dropdown-item {
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #007aff;
    color: #fff;
  }
}
</style>
