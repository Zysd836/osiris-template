import Logo from '@/components/common/logo'
import { cn } from '@/utils/styles'
import { Breadcrumb, Layout, Menu, MenuProps } from 'antd'
import { Content, Footer } from 'antd/es/layout/layout'
import React from 'react'
import UserDropdown from './UserDropdown'
import { useNavigate } from '@tanstack/react-router'
import Sider from 'antd/es/layout/Sider'
import SwitchLanguage from './SwitchLanguage'
import Clayout from '@/components/common/clayout'
import CMenu from '@/components/common/menu'

type MixMenuLayout = {
  items: MenuProps['items']
  children?: React.ReactNode
}
const SideMenuLayout: React.FC<MixMenuLayout> = ({ items, children }) => {
  const navigate = useNavigate()
  return (
    <>
      <Clayout.Layout>
        <Clayout.Sider
          collapsedWidth={720}
          className={cn('w-[200px] h-dvh', 'dark:border-r dark:border-gray-600')}
        >
          <Logo.Header className={cn('flex items-center justify-center h-14')} />
          <div className="overflow-y-auto max-h-[calc(100dvh-var(--spacing)*25)]">
            <CMenu
              mode="inline"
              onClick={(e) => {
                navigate({ to: e.key })
              }}
              items={items}
            />
          </div>
          <div
            className={cn(
              'absolute bottom-0',
              'flex gap-auto justify-between px-1 border-t border-gray-100 dark:border-gray-600',
              'w-full h-11',
            )}
          >
            <UserDropdown />
            <SwitchLanguage />
          </div>
        </Clayout.Sider>
        <Clayout.Content>
          <Breadcrumb
            items={[
              { title: 'Home', href: '/' },
              { title: 'Dashboard', href: '/dashboard' },
            ]}
          />
          <section className="mt-4">{children}</section>
        </Clayout.Content>
      </Clayout.Layout>
      <Clayout.Footer>
        <div>Osiris Team</div>
        <div className="font-semibold">Power of Osiris Team</div>
      </Clayout.Footer>
    </>
  )
}

export default SideMenuLayout
