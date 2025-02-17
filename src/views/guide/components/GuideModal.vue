<script setup lang="ts">
const modal = inject<ModalApi>('$modal')

interface ModalApi {
  open: (modal: any) => void
  close: (id: string) => void
  modals: any[]
}

function openModal() {
  if (!modal) {
    return
  }

  modal.open({
    component: () => import('@/components/modal/SamplePopup.vue'), // 동적으로 import
    options: {
      title: '샘플 팝업',
      width: '600px',
      height: '400px',
      id: `sample-${Date.now()}`,
      bind: { detailId: '12345', sampleKey: 'test' },
    },
  })
}
</script>

<template>
  <h1>Guide Modal</h1>
  <div>
    <cm-button class="default" @click="openModal">Open Modal</cm-button>
  </div>
</template>

<style></style>
