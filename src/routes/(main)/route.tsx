import { fetchMe } from '@/utils/auth.mock'
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import Loading from '@/components/common/loading'
import ProLayout from '@/layout/ProLayout'
import { useEffect } from 'react'
export const Route = createFileRoute('/(main)')({
  component: RouteComponent,
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

function RouteComponent() {
  useEffect(() => {
    ;(async () => {
      await fetchMe()
    })()
  }, [])
  return (
    <ProLayout>
      <Outlet />
    </ProLayout>
  )
}
