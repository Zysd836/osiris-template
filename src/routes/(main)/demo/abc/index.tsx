import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(main)/demo/abc/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(main)/demo/abc/"!</div>
}
