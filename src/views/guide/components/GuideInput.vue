<script setup lang="ts"></script>

<template>
  <h1>Guide Input</h1>

  <div class="box">
    <div>input</div>
    <div class="grid cols-3 gap-sm">
      <cm-input placeholder="Enter your text" />
      <cm-input placeholder="Enter your text" :readonly="true" />
      <cm-input placeholder="Enter your text" :disabled="true" />
      <cm-input placeholder="Enter your text" />
      <cm-input placeholder="Enter your text" :readonly="true" />
      <cm-input placeholder="Enter your text" :disabled="true" />
      <cm-input placeholder="Enter your text" />
      <cm-input placeholder="Enter your text" :readonly="true" />
      <cm-input placeholder="Enter your text" :disabled="true" />
    </div>
  </div>
</template>

<style scoped></style>
