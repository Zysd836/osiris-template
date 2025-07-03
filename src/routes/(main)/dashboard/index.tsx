import { createFileRoute } from '@tanstack/react-router'
import { Card } from 'antd'

export const Route = createFileRoute('/(main)/dashboard/')({
  component: RouteComponent,
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
