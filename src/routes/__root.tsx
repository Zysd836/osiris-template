import { IAuthContext } from '@/contexts/Auth/type'
import { createRootRouteWithContext, Outlet, redirect } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootComponent = () => (
  <>
    <Outlet />
    <TanStackRouterDevtools />
  </>
)
export const Route = createRootRouteWithContext<{ auth: IAuthContext }>()({
  component: RootComponent,
  beforeLoad: async ({ context, location }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      })
    }
  },
})
