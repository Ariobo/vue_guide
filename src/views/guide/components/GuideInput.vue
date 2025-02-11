<script setup lang="ts">
import { useValidation, type ValidationRules } from '@/components/useValidation'

const { errors, validate } = useValidation()

const form = ref({
  email: '',
  password: '',
})

// ✅ 검증 규칙 정의
const rules: ValidationRules = {
  email: ['required', 'email'],
  password: ['required', 'min:6'],
}

function handleSubmit() {
  validate(form.value, rules)

  if (Object.keys(errors.value).length === 0) {
    alert('폼이 유효합니다!')
  }
}
</script>

<template>
  <h1>Guide Input</h1>

  <div class="box">
    <div>input</div>
    <div class="grid cols-3 gap-sm mb-10">
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

    <form @submit.prevent="handleSubmit">
      <cm-input v-model="form.email" placeholder="이메일 입력" :error="errors.email" />
      <cm-input
        v-model="form.password"
        type="password"
        placeholder="비밀번호 입력"
        :error="errors.password"
      />

      <button type="submit">제출</button>
    </form>
  </div>
</template>

<style scoped></style>
