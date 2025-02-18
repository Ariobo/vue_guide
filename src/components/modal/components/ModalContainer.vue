<script setup lang="ts">
import ModalComponent from '@/components/modal/components/ModalComponent.vue'
const props = defineProps<{
  api: any
}>()

function closeModal(id: string): void {
  props.api.close(id)
}
</script>

<template>
  <div class="__modal__container">
    <ModalComponent
      v-for="(modal, index) in props.api.modals"
      :key="`modal-${index}`"
      :modal="modal"
      @close="closeModal"
    ></ModalComponent>
  </div>
</template>

<style></style>
