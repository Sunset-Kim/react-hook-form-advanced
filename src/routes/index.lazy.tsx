import { Stack, Text } from '@mantine/core'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: () => (
    <div>
      <Stack>
        <Text component={'h1'} size={'lg'} fw={900}>
          React Hook Form Advanced
        </Text>

        <Text>
          이 페이지는 React Hook Form Advanced 활용법을 다루는 페이지입니다.
        </Text>
      </Stack>
    </div>
  )
})
