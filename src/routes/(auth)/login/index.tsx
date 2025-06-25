import Login from '@/components/auth/login'
import { themeModes } from '@/config/theme'
import { useTheme } from '@/contexts/Theme/useTheme'
import { createFileRoute } from '@tanstack/react-router'
import { Button } from 'antd'

export const Route = createFileRoute('/(auth)/login/')({
  component: RouteComponent,
  beforeLoad: async ({ context }) => {
    console.log('Before loading /login/', context)
  },
})

function RouteComponent() {
  const theme = useTheme()
  return (
    <Login.Container>
      {themeModes.map((mode) => {
        return (
          <Button
            type="primary"
            key={mode}
            onClick={() => {
              theme.setThemeMode(mode)
            }}
          >
            sdal
          </Button>
        )
      })}
      <Button onClick={() => theme.changeDarkMode()}>Switch</Button>
      <div className="bg-red-500 dark:bg-amber-300">asdasd</div>
      <Login.Form />
    </Login.Container>
  )
}
