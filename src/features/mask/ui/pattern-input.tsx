import { applyPatternMask } from '../model/formatter'

interface InputFormatterProps {
  value: string
  onChange: (value: string) => void
  pattern: string
  placeholder: string
}

export const PatternInput: React.FC<InputFormatterProps> = ({
  value,
  onChange,
  pattern,
  placeholder
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const maskedValue = applyPatternMask(event.target.value, pattern)
    onChange(maskedValue)
  }

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  )
}
