import Logo from '@/components/common/logo'
import { cn } from '@/utils/styles'
import { Breadcrumb, Layout, Menu, MenuProps } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import React from 'react'
import UserDropdown from './UserDropdown'
import { useNavigate } from '@tanstack/react-router'
import Sider from 'antd/es/layout/Sider'

type TopMenuLayoutProps = {
  items: MenuProps['items']
  children?: React.ReactNode
}
const SideMenuLayout: React.FC<TopMenuLayoutProps> = ({ items, children }) => {
  const navigate = useNavigate()
  return (
    <>
      <Layout className="bg-transparent">
        <Layout className="w-full">
          <Sider className={cn('w-[200px] h-[calc(100dvh-var(--spacing)*14)] bg-white dark:bg-black')}>
            <Logo.Header className={cn('flex items-center justify-center h-14')} />
            <Menu
              mode="inline"
              onClick={(e) => {
                navigate({ to: e.key })
              }}
              items={items}
            />
            <UserDropdown />
          </Sider>
          <div className="p-4 mt-14 bg-transparent">
            <Content className={cn('m-auto max-w-[1280px] p-8 rounded-sm')}>
              <Breadcrumb
                items={[
                  { title: 'Home', href: '/' },
                  { title: 'Dashboard', href: '/dashboard' },
                ]}
              />
              <section className="mt-4">{children}</section>
            </Content>
          </div>
        </Layout>
        <Footer className={cn('p-4', 'bg-transparent', 'flex flex-col items-center justify-center')}>
          <div>Osiris Team</div>
          <div className="font-semibold">Power of Osiris Team</div>
        </Footer>
      </Layout>
    </>
  )
}

export default SideMenuLayout
