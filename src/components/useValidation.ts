import { ref } from 'vue'

export interface ValidationRules {
  [key: string]: Array<'required' | `min:${number}` | 'email'>
}

export function useValidation() {
  const errors = ref<Record<string, string>>({})

  const validate = (fields: Record<string, any>, rules: ValidationRules) => {
    errors.value = {}

    for (const field in rules) {
      const value = fields[field]
      const fieldRules = rules[field]

      for (const rule of fieldRules) {
        if (rule === 'required' && (!value || value === '')) {
          errors.value[field] = '필수 입력 항목입니다.'
        } else if (rule.startsWith('min:')) {
          const minLength = Number(rule.split(':')[1])
          if (typeof value === 'string' && value.length < minLength) {
            errors.value[field] = `${minLength}자 이상 입력해야 합니다.`
          }
        } else if (rule === 'email') {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!emailRegex.test(value)) {
            errors.value[field] = '올바른 이메일 형식을 입력하세요.'
          }
        }
      }
    }
  }

  const clearError = (field: string) => {
    delete errors.value[field]
  }

  return { errors, validate }
}
