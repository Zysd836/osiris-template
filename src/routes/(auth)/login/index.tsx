import Login from '@/components/auth/login'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/login/')({
  component: RouteComponent,
  beforeLoad: async ({ context }) => {
    console.log('Before loading /login/', context)
  },
})

function RouteComponent() {
  return (
    <Login.Container>
      <Login.Form />
    </Login.Container>
  )
}
