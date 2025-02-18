<script setup lang="ts">
const $dialog = <any>inject('$dialog')

function showAlert() {
  $dialog.alert('확인해주세요.').then(() => {
    console.log('확인')
  })
}

function showAlertNoHeader() {
  $dialog
    .alert('확인해주세요.', {
      useHeader: false,
    })
    .then(() => {
      console.log('확인')
    })
}

function showConfirm() {
  $dialog
    .confirm('확인하시겠습니까?')
    .then(() => {
      console.log('확인')
    })
    .catch(() => {
      console.log('취소')
    })
}

function showConfirmNoHeader() {
  $dialog
    .confirm('확인하시겠습니까?', {
      useHeader: false,
    })
    .then(() => {
      console.log('확인')
    })
    .catch(() => {
      console.log('취소')
    })
}
</script>

<template>
  <h1 class="guide-title">Guide Dialog</h1>
  <div class="box mb-5">
    <div class="box__header">
      <div class="title">알림</div>
    </div>
    <div class="flex gap-sm">
      <cm-button class="btn" @click="showAlert">알림</cm-button>
      <cm-button class="btn" @click="showAlertNoHeader">헤더 없는 알림</cm-button>
    </div>
  </div>
  <div class="box">
    <div class="box__header">
      <div class="title">확인</div>
    </div>
    <div class="flex gap-sm">
      <cm-button class="btn" @click="showConfirm">확인</cm-button>
      <cm-button class="btn" @click="showConfirmNoHeader">헤더 없는 확인</cm-button>
    </div>
  </div>
</template>

<style></style>
