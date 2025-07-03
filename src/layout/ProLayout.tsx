import { useTheme } from '@/contexts/Theme/useTheme'
import React, { useMemo } from 'react'
import TopMenuLayout from './TopMenuLayout'
import { MenuProps } from 'antd'
import { useRouter } from '@tanstack/react-router'

interface ProLayoutProps {
  children?: React.ReactNode
}
const mockMenuItems: MenuProps['items'] = [
  { key: '1', label: 'Home' },
  {
    key: '2',
    label: 'Permission',
  },
  { key: '3', label: 'Demo', children: [{ key: '3-1', label: 'abc' }] },
]
const ProLayout: React.FC<ProLayoutProps> = ({ children }) => {
  const { layout, darkMode } = useTheme()
  const router = useRouter()
  console.log('🚀 -------------------🚀')
  console.log('🚀 ~ router:', router)
  console.log('🚀 -------------------🚀')

  const renderLayout = useMemo(() => {
    switch (layout) {
      case 'top':
        return <TopMenuLayout items={mockMenuItems}>{children}</TopMenuLayout>
      default:
        return null
    }
  }, [layout, children])

  return <>{renderLayout}</>
}

export default ProLayout
