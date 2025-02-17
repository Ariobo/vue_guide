<script setup lang="ts">
// import { getRandomKey } from '@/utils/comUtils';

interface Props {
  detailId: string
  sampleKey?: string
}
const props = defineProps<Props>()
const emits = defineEmits(['close', 'refresh'])

const popupValue = ref('')

function save() {
  // emits('refresh', { returnValue: getRandomKey(), popupValue: popupValue.value });
  emits('close')
}

function cancel() {
  // 팝업을 닫을때는 close emits를 호출하면 닫힘
  // 팝업을 띄우는 곳에서 별도의 설정 필요 없음
  emits('close')
}
</script>

<template>
  <div>
    <div class="py-5">
      <div class="form__item">
        <div class="form__label">detailId</div>
        <div class="form__text">{{ props.detailId }}</div>
      </div>
      <div class="form__item">
        <div class="form__label">sampleKey</div>
        <div class="form__text">{{ props.sampleKey }}</div>
      </div>
      <div class="form__item">
        <div class="form__label">popupValue</div>
        <v-input v-model="popupValue"></v-input>
      </div>
    </div>
    <div style="background-color: #efefef; height: 200px"></div>
    <div class="mt-5 text-center">
      <button class="btn__sub" @click="cancel">취소</button>
      <button class="btn__primary" @click="save">저장</button>
    </div>
  </div>
</template>

<style></style>
