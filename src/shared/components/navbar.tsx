import { Stack } from '@mantine/core'
import { CustomLink } from './custom-link.tsx'

export const NavBar = () => {
  return (
    <Stack>
      <CustomLink to="/">Overview</CustomLink>
      <CustomLink to="/conditional-fields">조건부 입력</CustomLink>
    </Stack>
  )
}
