<script setup lang="ts">
const $noti = <any>inject('$noti')

function showNotiDefault() {
  $noti.show('default 알림입니다.')
}
function showNotiPrimary() {
  $noti.primary('primary 알림입니다.')
}
function showNotiSuccess() {
  $noti.success('success 알림입니다.')
}
function showNotiInfo() {
  $noti.info('info 알림입니다.')
}
function showNotiWarning() {
  $noti.warning('warning 알림입니다.')
}
function showNotiDanger() {
  $noti.danger('danger 알림입니다.')
}
</script>

<template>
  <h1 class="guide-title">Guide Notification</h1>
  <div class="box flex gap-sm">
    <cm-button class="default" @click="showNotiDefault">default</cm-button>
    <cm-button class="primary" @click="showNotiPrimary">primary</cm-button>
    <cm-button class="success" @click="showNotiSuccess">success</cm-button>
    <cm-button class="info" @click="showNotiInfo">info</cm-button>
    <cm-button class="warning" @click="showNotiWarning">warning</cm-button>
    <cm-button class="danger" @click="showNotiDanger">danger</cm-button>
  </div>
</template>

<style scoped></style>
