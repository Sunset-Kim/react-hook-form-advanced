export const formatPhoneNumber = (value: string) => {
  const cleaned = value.replace(/\D/g, '')
  const match = cleaned.match(/(\d{1,3})(\d{1,3})?(\d{1,4})?/)
  if (match) {
    return match.slice(1).filter(Boolean).join('-')
  }
  return value
}

export const formatCreditCardNumber = (value: string) => {
  const cleaned = value.replace(/\D/g, '')
  const match = cleaned.match(/.{1,4}/g)
  return match ? match.join(' ') : value
}

export const formatSSN = (value: string) => {
  const cleaned = value.replace(/\D/g, '')
  const match = cleaned.match(/(\d{1,6})(\d{1,7})?/)
  if (match) {
    return match.slice(1).filter(Boolean).join('-')
  }
  return value
}

export const applyPatternMask = (value: string, pattern: string): string => {
  const cleaned = value.replace(/\D/g, '') // 숫자가 아닌 모든 문자를 제거
  let result = ''
  let patternIndex = 0
  let valueIndex = 0

  while (patternIndex < pattern.length && valueIndex < cleaned.length) {
    if (pattern[patternIndex] === '#') {
      result += cleaned[valueIndex]
      valueIndex += 1
    } else {
      result += pattern[patternIndex]
    }
    patternIndex += 1
  }

  return result
}
