import { Card, Col, Space, Badge } from 'antd'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface RevenueData {
  month: string
  revenue: number
  profit: number
}

interface RevenueChartProps {
  data: RevenueData[]
  span?: {
    xs?: number
    lg?: number
  }
}

const RevenueChart: React.FC<RevenueChartProps> = ({ data, span = { xs: 24, lg: 16 } }) => {
  return (
    <Col
      xs={span.xs}
      lg={span.lg}
    >
      <Card
        title="Revenue Overview"
        className="h-full"
        extra={
          <Space>
            <Badge
              color="blue"
              text="Revenue"
            />
            <Badge
              color="green"
              text="Profit"
            />
          </Space>
        }
      >
        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#3498DB"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="profit"
              stroke="#2ECC71"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </Col>
  )
}

export default RevenueChart
