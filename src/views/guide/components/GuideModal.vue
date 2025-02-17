<script setup lang="ts">
const $modal = <any>inject('$modal')

function openModal() {
  $modal.open({
    component: () => import('@/components/modal/SamplePopup.vue'),
    options: {
      title: '샘플 팝업',
      width: 800,
    },
    bind: {
      detailId: 'sss',
      sampleKey: 'sampleValue',
    },
    on: {
      refresh: (result: { popupValue: string; returnValue: string }) => {
        console.log(result)
      },
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
