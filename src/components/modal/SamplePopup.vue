<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
  detailId: string
  sampleKey?: string
}

const props = defineProps<Props>()

const emits = defineEmits(['close', 'refresh'])

function cancel() {
  emits('close')
}
</script>

<template>
  <div>
    <p>detailId: {{ props.detailId }}</p>
    <p>sampleKey: {{ props.sampleKey }}</p>
  </div>
  <div class="fixed bottom-5 left-1/2 -translate-x-1/2 flex justify-center gap-3 w-full">
    <cm-button class="info" @click="cancel">취소</cm-button>
    <cm-button class="success">닫기</cm-button>
  </div>
</template>

<style scoped></style>
