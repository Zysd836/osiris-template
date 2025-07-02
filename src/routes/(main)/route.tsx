import { fetchMe } from '@/utils/auth.mock'
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import Loading from '@/components/common/loading'
export const Route = createFileRoute('/(main)')({
  component: RouteComponent,
  pendingComponent: () => (
    <section className="m-auto p-auto w-dvw h-dvh flex items-center justify-center">
      <Loading.Spinner loading={true} />
    </section>
  ),
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
    <main>
      <Outlet />
    </main>
  )
}
