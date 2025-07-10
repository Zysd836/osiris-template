import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import useAuth from './contexts/Auth/useAuth'
import { initialAuthContext } from './contexts/Auth/initContext'
import { initAuthManager } from './modules/auth/index.manager'

// Create a new router instance
const router = createRouter({ routeTree, context: { auth: initialAuthContext } })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
export const authManager = initAuthManager()
const App = () => {
  const auth = useAuth()
  return (
    <RouterProvider
      router={router}
      context={{ auth }}
    />
  )
}

export default App
