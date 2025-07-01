import Login from '@/components/auth/login'
import { useTheme } from '@/contexts/Theme/useTheme'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/login/')({
  component: LoginComponent,
  beforeLoad: async ({ context, search }) => {
    if (context.auth.isAuthenticated) {
      throw redirect({
        to: search?.redirect || '/dashboard',
      })
    }
  },
})

export function LoginComponent() {
  const theme = useTheme()
  return (
    <Login.Container>
      <Login.Header />
      <div className="max-w-[360px] w-full">
        <Login.Form />
      </div>
    </Login.Container>
  )
}
