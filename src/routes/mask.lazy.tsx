import { createLazyFileRoute } from '@tanstack/react-router'
import { MaskPage } from '../pages/mask.page'

export const Route = createLazyFileRoute('/mask')({
  component: () => <MaskPage />
})
