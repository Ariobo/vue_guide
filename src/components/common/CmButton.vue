<script setup lang="ts">
interface ButtonProps {
  plain?: boolean
  round?: boolean
  icon?: string
  disabled?: boolean
}

const props = defineProps<ButtonProps>()
</script>

<template>
  <button :class="['button', { plain, round }]" :disabled="props.disabled">
    <i v-if="icon" :class="['icon', icon]"></i>
    <slot></slot>
  </button>
</template>

<style scoped></style>
