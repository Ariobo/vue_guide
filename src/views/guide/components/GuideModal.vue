<script setup lang="ts">
interface ModalApi {
  open: (modal: any) => void
  close: (id: string) => void
  modals: any[]
}

const modal = inject<ModalApi>('$modal')

function openModal() {
  if (!modal) {
    return
  }

  modal.open({
    component: () => import('@/components/modal/SamplePopup.vue'),
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
  <h1 class="guide-title">Guide Modal</h1>
  <div class="box">
    <cm-button class="default" @click="openModal">Open Modal</cm-button>
  </div>
</template>

<style></style>
