import { LoaderDataRoute } from '@/type'
import { createFileRoute } from '@tanstack/react-router'
import { Card } from 'antd'

export const Route = createFileRoute('/(main)/dashboard/')({
  component: RouteComponent,
  loader: () => {
    return {
      crumb: {
        title: 'Dashboard',
      },
    } as LoaderDataRoute
  },
})

function RouteComponent() {
  return (
    <>
      <Card
        variant="borderless"
        size="small"
      >
        sdjasj
      </Card>
    </>
  )
}
