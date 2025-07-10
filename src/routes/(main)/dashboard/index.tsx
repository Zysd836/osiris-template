import { LoaderDataRoute } from '@/types/global'
import { createFileRoute } from '@tanstack/react-router'
import { Row, Col, Typography } from 'antd'
import { Users, ShoppingCart, DollarSign, Eye } from 'lucide-react'
import {
  StatsCard,
  RevenueChart,
  CategoryPieChart,
  UserActivityChart,
  RecentActivities,
  ProjectProgress,
  ServerStatus,
  TeamPerformance,
  TopProducts,
} from './components'
import {
  revenueData,
  userActivityData,
  categoryData,
  categoryColors,
  recentActivities,
  projectsData,
  serverData,
  teamData,
  topProducts,
} from './data/mockData'

const { Title, Text } = Typography

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
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <Title
          level={2}
          className="!mb-2"
        >
          Welcome back, Admin! 👋
        </Title>
        <Text type="secondary">Here's what's happening with your business today.</Text>
      </div>

      {/* Stats Cards */}
      <Row
        gutter={[24, 24]}
        className="mb-8"
      >
        <StatsCard
          title="Total Revenue"
          value={245670}
          prefix="$"
          icon={DollarSign}
          iconBgColor="bg-blue-100 dark:bg-blue-900"
          iconColor="text-blue-600 dark:text-blue-400"
          valueColor="#3f8600"
          trend={{
            value: '+12.5%',
            type: 'up',
            color: 'text-green-500',
          }}
        />
        <StatsCard
          title="Active Users"
          value={12458}
          icon={Users}
          iconBgColor="bg-green-100 dark:bg-green-900"
          iconColor="text-green-600 dark:text-green-400"
          valueColor="#3f8600"
          trend={{
            value: '+8.2%',
            type: 'up',
            color: 'text-green-500',
          }}
        />
        <StatsCard
          title="Orders"
          value={3429}
          icon={ShoppingCart}
          iconBgColor="bg-purple-100 dark:bg-purple-900"
          iconColor="text-purple-600 dark:text-purple-400"
          valueColor="#722ed1"
          trend={{
            value: '-2.1%',
            type: 'down',
            color: 'text-red-500',
          }}
        />
        <StatsCard
          title="Page Views"
          value={89241}
          icon={Eye}
          iconBgColor="bg-orange-100 dark:bg-orange-900"
          iconColor="text-orange-600 dark:text-orange-400"
          valueColor="#fa8c16"
          trend={{
            value: '+15.3%',
            type: 'up',
            color: 'text-green-500',
          }}
        />
      </Row>

      {/* Charts Row */}
      <Row
        gutter={[24, 24]}
        className="mb-8"
      >
        <Col
          xs={24}
          lg={16}
        >
          <RevenueChart data={revenueData} />
        </Col>
        <Col
          xs={24}
          lg={8}
        >
          <CategoryPieChart
            data={categoryData}
            colors={categoryColors}
          />
        </Col>
      </Row>

      {/* User Activity & Recent Activities */}
      <Row
        gutter={[24, 24]}
        className="mb-8"
      >
        <Col
          xs={24}
          lg={16}
        >
          <UserActivityChart data={userActivityData} />
        </Col>
        <Col
          xs={24}
          lg={8}
        >
          <RecentActivities data={recentActivities} />
        </Col>
      </Row>

      {/* Progress Cards */}
      <Row
        gutter={[24, 24]}
        className="mb-8"
      >
        <Col
          xs={24}
          md={8}
        >
          <ProjectProgress data={projectsData} />
        </Col>
        <Col
          xs={24}
          md={8}
        >
          <ServerStatus data={serverData} />
        </Col>
        <Col
          xs={24}
          md={8}
        >
          <TeamPerformance data={teamData} />
        </Col>
      </Row>

      {/* Top Products Table */}
      <Row gutter={[24, 24]}>
        <Col xs={24}>
          <TopProducts data={topProducts} />
        </Col>
      </Row>
    </div>
  )
}
