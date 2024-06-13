import { TextInput, TextInputProps } from '@mantine/core'
import { ComponentType } from 'react'
import { IMaskInputProps, IMaskMixin } from 'react-imask'

export const MaskNumberField: ComponentType<
  IMaskInputProps<HTMLInputElement> & TextInputProps
> = IMaskMixin(({ inputRef, ...props }) => {
  return <TextInput ref={inputRef} {...props} />
})
