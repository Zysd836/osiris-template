import { Card, Statistic, Col, Typography } from 'antd'
import { LucideIcon } from 'lucide-react'
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'

const { Text } = Typography

interface StatsCardProps {
  title: string
  value: number
  prefix?: string
  suffix?: string
  precision?: number
  icon: LucideIcon
  iconBgColor: string
  iconColor: string
  valueColor: string
  trend: {
    value: string
    type: 'up' | 'down'
    color: string
  }
  span?: {
    xs?: number
    sm?: number
    lg?: number
  }
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  prefix,
  suffix,
  precision = 0,
  icon: Icon,
  iconBgColor,
  iconColor,
  valueColor,
  trend,
  span = { xs: 24, sm: 12, lg: 6 },
}) => {
  const TrendIcon = trend.type === 'up' ? ArrowUpRight : ArrowDownRight

  return (
    <Col
      xs={span.xs}
      sm={span.sm}
      lg={span.lg}
    >
      <Card className="text-center hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <div className={`p-2 ${iconBgColor} rounded-lg`}>
                <Icon className={`h-6 w-6 ${iconColor}`} />
              </div>
            </div>
            <Statistic
              title={title}
              value={value}
              prefix={prefix}
              suffix={suffix}
              precision={precision}
              valueStyle={{ color: valueColor }}
            />
            <div className="flex items-center mt-2">
              <TrendIcon className={`h-4 w-4 ${trend.color} mr-1`} />
              <Text type={trend.type === 'up' ? 'success' : 'danger'}>{trend.value}</Text>
              <Text
                type="secondary"
                className="ml-1"
              >
                vs last month
              </Text>
            </div>
          </div>
        </div>
      </Card>
    </Col>
  )
}

export default StatsCard
