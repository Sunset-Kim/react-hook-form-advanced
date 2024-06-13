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
