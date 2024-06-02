import { Burger, Flex, Group, Text } from '@mantine/core'
import { FC } from 'react'

type HeaderProps = {
  opened: boolean
  toggle: () => void
}

export const Header: FC<HeaderProps> = ({ toggle, opened }) => {
  return (
    <Flex align={'center'} h={'100%'} px={'md'}>
      <Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Text size={'sm'} fw={900}>
          React Hook Form Advanced
        </Text>
      </Group>
    </Flex>
  )
}
