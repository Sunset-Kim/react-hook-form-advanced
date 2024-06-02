import { Link, LinkProps } from '@tanstack/react-router'
import { Anchor, AnchorProps } from '@mantine/core'

export type CustomLinkProps = AnchorProps & LinkProps

export const CustomLink = (props: CustomLinkProps) => {
  return (
    <Anchor
      size={'sm'}
      component={Link}
      fw={600}
      c={'var(--mantine-color-indigo-3)'}
      {...props}
      activeProps={{
        style: {
          color: 'var(--mantine-color-indigo-8)'
        }
      }}
    />
  )
}
