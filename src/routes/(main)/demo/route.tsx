import { LoaderDataRoute } from '@/type'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(main)/demo')({
  component: RouteComponent,
  loader: () => {
    return {
      crumb: {
        title: 'Demo',
      },
      isContainer: true, // This indicates that this route is a container route
    } as LoaderDataRoute
  },
})

function RouteComponent() {
  return (
    <div>
      <Outlet />
    </div>
  )
}
