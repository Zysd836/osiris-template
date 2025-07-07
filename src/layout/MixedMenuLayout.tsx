import Logo from '@/components/common/logo'
import { cn } from '@/utils/styles'
import { Breadcrumb, Layout, Menu, MenuProps } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import React from 'react'
import UserDropdown from './UserDropdown'
import { useNavigate } from '@tanstack/react-router'
import Sider from 'antd/es/layout/Sider'
import SwitchLanguage from './SwitchLanguage'

type MixedMenuLayout = {
  items: MenuProps['items']
  children?: React.ReactNode
}
const MixedMenuLayout: React.FC<MixedMenuLayout> = ({ items, children }) => {
  const navigate = useNavigate()
  return (
    <>
      <Layout className="bg-transparent">
        <Header className={cn('fixed z-50', 'bg-white dark:bg-black px-4 w-dvw h-14')}>
          <div
            className={cn('m-auto', 'bg-white dark:bg-black', 'flex justify-between items-center px-8 h-full gap-4')}
          >
            <Logo.Header />
            <div className="flex items-center">
              <SwitchLanguage />
              <UserDropdown />
            </div>
          </div>
        </Header>
        <Sider
          collapsedWidth={720}
          className={cn('w-[200px] h-dvh', 'bg-white dark:bg-black')}
        >
          <Logo.Header className={cn('flex items-center justify-center h-14')} />
          <div className="overflow-y-auto max-h-[calc(100dvh-var(--spacing)*25)]">
            <Menu
              mode="inline"
              onClick={(e) => {
                navigate({ to: e.key })
              }}
              className="border-r-0"
              items={items}
            />
          </div>
          <div
            className={cn(
              'absolute bottom-0',
              'bg-white dark:bg-black',
              'flex gap-auto justify-between px-1 border-t border-gray-100',
              'w-full h-11',
            )}
          >
            <UserDropdown />
            <SwitchLanguage />
          </div>
        </Sider>
        <Content className={cn('w-full p-12 mt-14 bg-transparent rounded-sm')}>
          <Breadcrumb
            items={[
              { title: 'Home', href: '/' },
              { title: 'Dashboard', href: '/dashboard' },
            ]}
          />
          <section className="mt-4">{children}</section>
        </Content>
      </Layout>
      <Footer className={cn('p-4', 'bg-transparent', 'flex flex-col items-center justify-center')}>
        <div>Osiris Team</div>
        <div className="font-semibold">Power of Osiris Team</div>
      </Footer>
    </>
  )
}

export default MixedMenuLayout
