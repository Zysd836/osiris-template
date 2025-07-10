import { Card, Col, List, Avatar, Typography } from 'antd'
import { Clock, User } from 'lucide-react'

const { Text } = Typography

interface ActivityItem {
  id: number
  user: string
  action: string
  target: string
  time: string
}

interface RecentActivitiesProps {
  data: ActivityItem[]
  span?: {
    xs?: number
    lg?: number
  }
}

const RecentActivities: React.FC<RecentActivitiesProps> = ({ data, span = { xs: 24, lg: 8 } }) => {
  return (
    <Col
      xs={span.xs}
      lg={span.lg}
    >
      <Card
        title="Recent Activities"
        className="h-full"
      >
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar icon={<User />} />}
                title={
                  <span>
                    <Text strong>{item.user}</Text> {item.action} <Text type="secondary">{item.target}</Text>
                  </span>
                }
                description={
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-3 w-3 mr-1" />
                    {item.time}
                  </div>
                }
              />
            </List.Item>
          )}
        />
      </Card>
    </Col>
  )
}

export default RecentActivities
