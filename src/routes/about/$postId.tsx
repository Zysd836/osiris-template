import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about/$postId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/about/$postId"!</div>
}
