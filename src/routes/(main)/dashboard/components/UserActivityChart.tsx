import { Card, Col } from 'antd'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface UserActivityData {
  time: string
  users: number
}

interface UserActivityChartProps {
  data: UserActivityData[]
  span?: {
    xs?: number
    lg?: number
  }
}

const UserActivityChart: React.FC<UserActivityChartProps> = ({ data, span = { xs: 24, lg: 16 } }) => {
  return (
    <Col
      xs={span.xs}
      lg={span.lg}
    >
      <Card
        title="User Activity (24h)"
        className="h-full"
      >
        <ResponsiveContainer
          width="100%"
          height={250}
        >
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="users"
              stroke="#3498DB"
              fill="#3498DB"
              fillOpacity={0.6}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Card>
    </Col>
  )
}

export default UserActivityChart
