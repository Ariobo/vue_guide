export function isEmpty(value: unknown): boolean {
  if (value == null || value === '') return true
  if (typeof value === 'number' && (value === 0 || Number.isNaN(value))) return true
  if (typeof value === 'boolean' && !value) return true
  if (Array.isArray(value) && value.length === 0) return true
  if (typeof value === 'object' && Object.keys(value).length === 0) return true
  return false
}

export function useValidation() {
  const errors = ref<Record<string, string>>({})

  const validate = (fields: Record<string, any>, rules: any) => {
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

  return { errors, validate }
}
