import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(main)/demo')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello "/(main)/demo"! <Outlet />
    </div>
  )
}
