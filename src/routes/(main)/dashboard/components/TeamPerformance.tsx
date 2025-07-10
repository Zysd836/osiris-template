import { Card, Col, Avatar, Tag, Typography } from 'antd'

const { Title, Text } = Typography

interface TeamMember {
  name: string
  role: string
  initials: string
  avatarColor: string
  status: 'Active' | 'Online' | 'Away' | 'Offline'
  statusColor: 'green' | 'blue' | 'orange' | 'red'
}

interface TeamPerformanceProps {
  data: TeamMember[]
  span?: {
    xs?: number
    md?: number
  }
}

const TeamPerformance: React.FC<TeamPerformanceProps> = ({ data, span = { xs: 24, md: 8 } }) => {
  return (
    <Col
      xs={span.xs}
      md={span.md}
    >
      <Card>
        <Title level={4}>Team Performance</Title>
        <div className="space-y-4">
          {data.map((member, index) => (
            <div
              key={index}
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <Avatar style={{ backgroundColor: member.avatarColor }}>{member.initials}</Avatar>
                <div>
                  <Text strong>{member.name}</Text>
                  <br />
                  <Text type="secondary">{member.role}</Text>
                </div>
              </div>
              <Tag color={member.statusColor}>{member.status}</Tag>
            </div>
          ))}
        </div>
      </Card>
    </Col>
  )
}

export default TeamPerformance
