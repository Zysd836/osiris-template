import { useTheme } from '@/contexts/Theme/useTheme'
import React, { useMemo } from 'react'
import TopMenuLayout from './TopMenuLayout'
import { MenuProps } from 'antd'
import { useRouter } from '@tanstack/react-router'
import { ChartPie, BookUser } from 'lucide-react'
import Setting from '@/components/common/setting'
import SideMenuLayout from './SideMenuLayout'

interface ProLayoutProps {
  children?: React.ReactNode
}
const mockMenuItems: MenuProps['items'] = [
  { key: '/dashboard', label: 'Dashboard', icon: <ChartPie size={16} /> },
  {
    key: '/permission',
    label: 'Permission',
    icon: <BookUser size={16} />,
  },
  { key: '/demo', label: 'Demo', children: [{ key: '/demo/abc', label: 'abc' }] },
]
const ProLayout: React.FC<ProLayoutProps> = ({ children }) => {
  const { layout } = useTheme()
  const router = useRouter()

  const renderLayout = useMemo(() => {
    switch (layout) {
      case 'top':
        return <TopMenuLayout items={mockMenuItems}>{children}</TopMenuLayout>
      case 'side':
        return <SideMenuLayout items={mockMenuItems}>{children}</SideMenuLayout>
      default:
        return null
    }
  }, [layout, children])

  return (
    <>
      {renderLayout}
      <Setting />
    </>
  )
}

export default ProLayout
