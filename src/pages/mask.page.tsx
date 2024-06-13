import { useState } from 'react'
import { formatPhoneNumber } from '../features/mask/model/formatter'
import { FormatInput } from '../features/mask/ui/format-input'

export const MaskPage = () => {
  const [value, setValue] = useState('')
  return (
    <div>
      <h1>입력 마스킹</h1>
      <h2>기본 마스킹</h2>
      <div>
        <FormatInput
          type="text"
          format={formatPhoneNumber}
          value={value}
          onChange={value => setValue(value)}
          placeholder="Enter phone number"
        />
      </div>
      <h2>외부 UI 라이브러리를 활용</h2>

      <h2>외부 라이브러리와 UI 라이브러리를 활용하여 마스킹을 구현</h2>
    </div>
  )
}
