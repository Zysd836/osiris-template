import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(main)/permission/')({
  component: RouteComponent,
  loader: () => {
    return {
      crumb: {
        title: 'Permission',
      },
    }
  },
})

function RouteComponent() {
  return <div>Hello "/(main)/permission/"!</div>
}
