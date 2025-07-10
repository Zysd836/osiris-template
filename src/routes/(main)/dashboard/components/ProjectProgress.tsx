import { Card, Col, Progress, Typography } from 'antd'

const { Title, Text } = Typography

interface ProjectData {
  name: string
  progress: number
  color: string
}

interface ProjectProgressProps {
  data: ProjectData[]
  span?: {
    xs?: number
    md?: number
  }
}

const ProjectProgress: React.FC<ProjectProgressProps> = ({ data, span = { xs: 24, md: 8 } }) => {
  return (
    <Col
      xs={span.xs}
      md={span.md}
    >
      <Card>
        <Title level={4}>Project Progress</Title>
        <div className="space-y-4">
          {data.map((project, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-2">
                <Text>{project.name}</Text>
                <Text strong>{project.progress}%</Text>
              </div>
              <Progress
                percent={project.progress}
                strokeColor={project.color}
                showInfo={false}
              />
            </div>
          ))}
        </div>
      </Card>
    </Col>
  )
}

export default ProjectProgress
