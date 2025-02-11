<template>
  <div class="container">
    <h1>SCSS 버튼 컴포넌트 (클래스 기반)</h1>

    <div class="button-group">
      <!-- 기본 버튼 -->
      <cm-button class="default">Default</cm-button>
      <cm-button class="primary">Primary</cm-button>
      <cm-button class="success">Success</cm-button>
      <cm-button class="info">Info</cm-button>
      <cm-button class="warning">Warning</cm-button>
      <cm-button class="danger">Danger</cm-button>
    </div>

    <div class="button-group">
      <!-- 플레인 버튼 -->
      <cm-button class="default plain" :disabled="true">Plain</cm-button>
      <cm-button class="primary plain">Primary</cm-button>
      <cm-button class="success plain">Success</cm-button>
      <cm-button class="info plain">Info</cm-button>
      <cm-button class="warning plain">Warning</cm-button>
      <cm-button class="danger plain">Danger</cm-button>
    </div>

    <div class="button-group">
      <!-- 둥근 버튼 -->
      <cm-button class="default round">Round</cm-button>
      <cm-button class="primary round">Primary</cm-button>
      <cm-button class="success round">Success</cm-button>
      <cm-button class="info round">Info</cm-button>
      <cm-button class="warning round">Warning</cm-button>
      <cm-button class="danger round">Danger</cm-button>
    </div>

    <div class="button-group">
      <!-- 아이콘 버튼 -->
      <cm-button class="default round icon" icon="i-ta-search"> </cm-button>
      <cm-button class="primary round icon" icon="i-ta-edit"></cm-button>
      <cm-button class="success round icon" icon="i-ta-check"></cm-button>
      <cm-button class="info round icon" icon="i-ta-message"></cm-button>
      <cm-button class="warning round icon" icon="i-ta-star"></cm-button>
      <cm-button class="danger round icon" icon="i-ta-trash"></cm-button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  padding: 20px;
  color: white;
  border-radius: 1px solid black;
}

.button-group {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
</style>
