<script setup lang="ts">
interface ModalApi {
  open: (modal: any) => void
  close: (id: string) => void
  modals: any[]
}

const modal = inject<ModalApi>('$modal')

interface Props {
  detailId: string
  sampleKey?: string
}

const props = defineProps<Props>()

const emits = defineEmits(['close', 'refresh'])

function cancel() {
  emits('close')
}

function openModal() {
  if (!modal) {
    return
  }

  modal.open({
    component: () => import('@/components/modal/SamplePopup2.vue'),
    options: {
      title: '샘플 팝업',
      width: '200px',
      height: '200px',
      id: `sample-${Date.now()}`,
      bind: { detailId: '12345', sampleKey: 'test' },
    },
  })
}
</script>

<template>
  <div>
    <p>detailId: {{ props.detailId }}</p>
    <p>sampleKey: {{ props.sampleKey }}</p>
    <cm-button class="default mt-10 w-full flex justify-center al" @click="openModal"
      >2번째 팝업</cm-button
    >
  </div>
  <div class="fixed bottom-5 left-1/2 -translate-x-1/2 flex justify-center gap-3 w-full">
    <cm-button class="info" @click="cancel">취소</cm-button>
    <cm-button class="success">닫기</cm-button>
  </div>
</template>

<style scoped></style>
