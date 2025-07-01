import { fetchMe } from '@/utils/auth.mock'
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/(main)')({
  component: RouteComponent,
  pendingComponent: () => <div>Loading...</div>,
  beforeLoad: async ({ context, location }) => {
    const data = await fetchMe()
    if (!context.auth.isAuthenticated && data) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      })
    }
  },
})

function RouteComponent() {
  return (
    <div>
      Hello "/(main)"! <Outlet />
    </div>
  )
}
