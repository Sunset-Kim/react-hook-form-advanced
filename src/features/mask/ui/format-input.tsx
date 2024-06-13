import { ChangeEventHandler, ComponentPropsWithoutRef } from 'react'

type FormatInputProps = Omit<ComponentPropsWithoutRef<'input'>, 'onChange'> & {
  format: (value: string) => string
  onChange: (value: string) => void
}

export const FormatInput = ({
  value,
  onChange,
  format,
  placeholder
}: FormatInputProps) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
    const formattedValue = format?.(event.target.value) ?? event.target.value
    onChange?.(formattedValue)
  }

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  )
}
