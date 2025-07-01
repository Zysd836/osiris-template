import { createFileRoute } from '@tanstack/react-router'
import { LoginComponent } from './(auth)/login'

export const Route = createFileRoute('/')({
  component: LoginComponent,
})
