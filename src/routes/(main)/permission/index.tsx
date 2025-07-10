import { LoaderDataRoute } from '@/type'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(main)/permission/')({
  component: RouteComponent,
  loader: () => {
    return {
      crumb: {
        title: 'Permission',
      },
    } as LoaderDataRoute
  },
})

function RouteComponent() {
  return <div>Hello "/(main)/permission/"!</div>
}
