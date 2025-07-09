import { IAuthContext } from '@/contexts/Auth/type'
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootComponent = () => (
  <>
    <Outlet />
    {/* <TanStackRouterDevtools /> */}
  </>
)
export const Route = createRootRouteWithContext<{ auth: IAuthContext }>()({
  component: RootComponent,
})
