<script setup lang="ts">
import { useValidation, type ValidationRules } from '@/components/useValidation'

const { errors, validate, clearError } = useValidation()

const form = ref({
  email: '',
  password: '',
})

const check = ref([])
const radio = ref('')
const select = ref('value1')
const textarea = ref('value1')
const options = ref([
  { value: 'value1', label: 'label1' },
  { value: 'value2', label: 'label2' },
  { value: 'value3', label: 'label3' },
  { value: 'value4', label: 'label4' },
  { value: 'value5', label: 'label5' },
])

const rules: ValidationRules = {
  email: ['required', 'email'],
  password: ['required', 'min:6'],
}

function handleSubmit() {
  validate(form.value, rules)
  if (Object.keys(errors.value).length === 0) {
    alert('성공')
  }
}

function handleClearErrorMessageS() {
  clearError(['email'])
}

function handleClearErrorMessageM() {
  clearError(['email', 'password'])
}
</script>

<template>
  <h1 class="guide-title">Guide Input</h1>
  <div class="box">
    <div class="input-group">
      <div class="title">standard input</div>
      <div class="grid cols-3 gap-sm mb-10">
        <cm-input placeholder="Enter your text" />
        <cm-input placeholder="Enter your text" :readonly="true" />
        <cm-input placeholder="Enter your text" disabled />
      </div>
    </div>
  </div>
  <div class="box">
    <div class="input-group">
      <div class="title">check validation</div>
      <cm-input
        v-model="form.email"
        format="korean"
        placeholder="이메일 입력"
        :error="errors.email"
        class="mb-2"
      />
      <cm-input
        v-model="form.password"
        type="password"
        format="password"
        placeholder="비밀번호 입력"
        :error="errors.password"
      />
      <div class="flex justify-center mt-4 gap-4">
        <cm-button class="success" @click="handleSubmit">제출</cm-button>
        <cm-button class="default" @click="handleClearErrorMessageS"
          >단일 에러문구 초기화</cm-button
        >
        <cm-button class="default" @click="handleClearErrorMessageM"
          >멀티 에러문구 초기화</cm-button
        >
      </div>
    </div>
  </div>

  <div class="box">
    <div class="input-group">
      <div class="title">checkbox</div>
      <div class="flex gap-15">
        <cm-checkbox v-model="check" :options="options"></cm-checkbox>
        <cm-checkbox v-model="check" :options="options" disabled></cm-checkbox>
      </div>
    </div>
  </div>

  <div class="box">
    <div class="input-group">
      <div class="title">radio</div>
      <div class="flex gap-15">
        <cm-radio v-model="radio" :options="options"></cm-radio>
        <cm-radio v-model="radio" :options="options" disabled></cm-radio>
      </div>
    </div>
  </div>

  <div class="box">
    <div class="input-group">
      <div class="title">select</div>
      <div class="flex gap-15">
        <cm-select v-model="select" :options="options"></cm-select>
        <cm-select v-model="select" :options="options" disabled></cm-select>
      </div>
    </div>
  </div>

  <div class="box">
    <div class="input-group">
      <div class="title">textarea</div>
      <div class="flex gap-15">
        <cm-textarea v-model="textarea" :options="options"></cm-textarea>
        <cm-textarea v-model="textarea" :options="options" disabled></cm-textarea>
      </div>
    </div>
  </div>
</template>

<style scoped>
.test {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #121212;
  color: white;
  padding: 20px;
}
</style>
