import { Card, Col } from 'antd'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

interface CategoryData {
  category: string
  value: number
}

interface CategoryPieChartProps {
  data: CategoryData[]
  colors: string[]
  span?: {
    xs?: number
    lg?: number
  }
}

const CategoryPieChart: React.FC<CategoryPieChartProps> = ({ data, colors, span = { xs: 24, lg: 8 } }) => {
  return (
    <Col
      xs={span.xs}
      lg={span.lg}
    >
      <Card
        title="Category Distribution"
        className="h-full"
      >
        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ category, percent }) => `${category} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Card>
    </Col>
  )
}

export default CategoryPieChart
