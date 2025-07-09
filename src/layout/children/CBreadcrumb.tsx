import { useRouter } from '@tanstack/react-router'
import { Breadcrumb } from 'antd'

const CBreadcrumb = () => {
  const router = useRouter()
  console.log('🚀 ---------------------------------🚀')
  console.log('🚀 ~ CBreadcrumb ~ router:', router)
  console.log('🚀 ---------------------------------🚀')
  return (
    <Breadcrumb
      items={[
        { title: 'Home', href: '/' },
        { title: 'Dashboard', href: '/dashboard' },
      ]}
    />
  )
}

export default CBreadcrumb
