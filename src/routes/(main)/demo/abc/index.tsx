import { LoaderDataRoute } from '@/global'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(main)/demo/abc/')({
  component: RouteComponent,
  loader: () => {
    return {
      crumb: {
        title: 'Demo ABC',
      },
    } as LoaderDataRoute
  },
})

function RouteComponent() {
  return <div>Hello "/(main)/demo/abc/"!</div>
}
