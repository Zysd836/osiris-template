import { Card, Col, Table, Badge, Typography } from 'antd'

const { Text } = Typography

interface ProductData {
  key: string
  name: string
  sales: number
  revenue: string
  trend: 'up' | 'down'
}

interface TopProductsProps {
  data: ProductData[]
  span?: {
    xs?: number
  }
}

const TopProducts: React.FC<TopProductsProps> = ({ data, span = { xs: 24 } }) => {
  const columns = [
    {
      title: 'Product',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <Text strong>{text}</Text>,
    },
    {
      title: 'Sales',
      dataIndex: 'sales',
      key: 'sales',
      render: (value: number) => value.toLocaleString(),
    },
    {
      title: 'Revenue',
      dataIndex: 'revenue',
      key: 'revenue',
      render: (value: string) => <Text type="success">{value}</Text>,
    },
    {
      title: 'Trend',
      dataIndex: 'trend',
      key: 'trend',
      render: (trend: string) => (
        <Badge
          color={trend === 'up' ? 'green' : 'red'}
          text={trend === 'up' ? 'Rising' : 'Falling'}
        />
      ),
    },
  ]

  return (
    <Col xs={span.xs}>
      <Card
        title="Top Products"
        className="h-full"
      >
        <Table
          dataSource={data}
          columns={columns}
          pagination={{ pageSize: 5 }}
          size="middle"
        />
      </Card>
    </Col>
  )
}

export default TopProducts
