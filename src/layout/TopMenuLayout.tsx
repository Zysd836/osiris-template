import Logo from '@/components/common/logo'
import { cn } from '@/utils/styles'
import { Breadcrumb, Layout, Menu, MenuProps } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import React from 'react'
import UserDropdown from './UserDropdown'
import { useNavigate } from '@tanstack/react-router'
import SwitchLanguage from './SwitchLanguage'

type TopMenuLayoutProps = {
  items: MenuProps['items']
  children?: React.ReactNode
}
const TopMenuLayout: React.FC<TopMenuLayoutProps> = ({ items, children }) => {
  const navigate = useNavigate()
  return (
    <>
      <Layout className="bg-transparent">
        <Header
          className={cn(
            'fixed z-50',
            'bg-white dark:bg-gray-900 px-4 w-dvw h-14',
            'dark:border-b dark:border-gray-600',
          )}
        >
          <div
            className={cn('max-w-[1280px] m-auto', 'bg-white dark:bg-gray-900', 'flex items-center px-8 h-full gap-4')}
          >
            <Logo.Header />
            <div className="flex-1">
              <Menu
                mode="horizontal"
                onClick={(e) => {
                  navigate({ to: e.key })
                }}
                className={cn('border-0 h-14 dark:bg-gray-900', 'dark:border-b dark:border-gray-600')}
                items={items}
              />
            </div>
            <SwitchLanguage />
            <UserDropdown />
          </div>
        </Header>
        <Content className={cn('m-auto w-full max-w-[1280px] p-12 mt-14 bg-transparent rounded-sm')}>
          <Breadcrumb
            items={[
              { title: 'Home', href: '/' },
              { title: 'Dashboard', href: '/dashboard' },
            ]}
          />
          <section className="mt-4">{children}</section>
        </Content>
        <Footer className={cn('p-4', 'bg-transparent', 'flex flex-col items-center justify-center')}>
          <div>Osiris Team</div>
          <div className="font-semibold">Power of Osiris Team</div>
        </Footer>
      </Layout>
    </>
  )
}

export default TopMenuLayout
