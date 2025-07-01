import { createFileRoute, redirect } from '@tanstack/react-router'
import { LoginComponent } from './(auth)/login'
import { cleanRedirectUrl } from '@/utils/link'

export const Route = createFileRoute('/')({
  component: LoginComponent,
  beforeLoad: async ({ context, search }) => {
    if (context.auth.isAuthenticated) {
      const redirectUrl = cleanRedirectUrl(search?.redirect)
      throw redirect({
        to: redirectUrl,
      })
    }
  },
})
