import { Card, Col, Progress, Typography, Divider } from 'antd'

const { Title, Text } = Typography

interface ServerMetric {
  name: string
  value: string
  progress: number
  color: string
}

interface ServerStatusProps {
  data: ServerMetric[]
  span?: {
    xs?: number
    md?: number
  }
}

const ServerStatus: React.FC<ServerStatusProps> = ({ data, span = { xs: 24, md: 8 } }) => {
  return (
    <Col
      xs={span.xs}
      md={span.md}
    >
      <Card>
        <Title level={4}>Server Status</Title>
        <div className="space-y-4">
          {data.map((metric, index) => (
            <div key={index}>
              <div className="flex justify-between items-center">
                <div>
                  <Text strong>{metric.name}</Text>
                  <br />
                  <Text type="secondary">{metric.value}</Text>
                </div>
                <Progress
                  type="circle"
                  percent={metric.progress}
                  size={60}
                  strokeColor={metric.color}
                />
              </div>
              {index < data.length - 1 && <Divider />}
            </div>
          ))}
        </div>
      </Card>
    </Col>
  )
}

export default ServerStatus
