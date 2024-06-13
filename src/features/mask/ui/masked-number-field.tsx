import { NumberInput, NumberInputProps } from '@mantine/core'
import { ComponentType } from 'react'
import { IMaskInputProps, IMaskMixin } from 'react-imask'

export const MaskNumberField: ComponentType<
  IMaskInputProps<HTMLInputElement> & NumberInputProps
> = IMaskMixin(({ inputRef, ...props }) => {
  return <NumberInput ref={inputRef} {...props} />
})
