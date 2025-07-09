import { useTheme } from '@/contexts/Theme/useTheme'
import React, { useMemo } from 'react'
import TopMenuLayout from './TopMenuLayout'
import { MenuProps } from 'antd'
import { ChartPie, BookUser } from 'lucide-react'
import Setting from '@/components/common/setting'
import SideMenuLayout from './SideMenuLayout'
import MixedMenuLayout from './MixedMenuLayout'

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

const mockMenuItemsGroup: MenuProps['items'] = [
  { key: '/dashboard', label: 'Dashboard', icon: <ChartPie size={16} /> },
  {
    key: '/permission',
    label: 'Permission',
    icon: <BookUser size={16} />,
  },
  { key: '/demo', label: 'Demo', children: [{ key: '/demo/abc', label: 'abc' }], type: 'group' },
]
const ProLayout: React.FC<ProLayoutProps> = ({ children }) => {
  const { layout, sideMenuType } = useTheme()

  const menuItems = useMemo(() => {
    switch (sideMenuType) {
      case 'classic':
        return mockMenuItems
      case 'grouping':
        return mockMenuItemsGroup
      default:
        return mockMenuItems
    }
  }, [sideMenuType])

  const renderLayout = useMemo(() => {
    switch (layout) {
      case 'top':
        return <TopMenuLayout items={mockMenuItems}>{children}</TopMenuLayout>
      case 'side':
        return <SideMenuLayout items={menuItems}>{children}</SideMenuLayout>
      case 'mix':
        return <MixedMenuLayout items={menuItems}>{children}</MixedMenuLayout>
      default:
        return null
    }
  }, [layout, menuItems, mockMenuItems])

  return (
    <>
      {renderLayout}
      <Setting />
    </>
  )
}

export default ProLayout
