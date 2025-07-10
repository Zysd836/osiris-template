import Logo from '@/components/common/logo'
import { cn } from '@/utils/styles'
import { MenuProps } from 'antd'
import React from 'react'
import UserDropdown from './children/UserDropdown'
import { useNavigate } from '@tanstack/react-router'
import SwitchLanguage from './children/SwitchLanguage'
import Clayout from '@/components/common/clayout'
import CMenu from '@/components/common/menu'
import CBreadcrumb from './children/CBreadcrumb'
import Footer from './children/Footer'

type TopMenuLayoutProps = {
  items: MenuProps['items']
  children?: React.ReactNode
}
const maxWidth = 'max-w-[1280px]'
const TopMenuLayout: React.FC<TopMenuLayoutProps> = ({ items, children }) => {
  const navigate = useNavigate()
  return (
    <>
      <Clayout.Layout>
        <Clayout.Header>
          <div className={cn('m-auto', 'h-full', 'flex items-center', 'px-8 gap-x-4', maxWidth)}>
            <Logo.Header />
            <CMenu
              mode="horizontal"
              onClick={(e) => {
                navigate({ to: e.key })
              }}
              className={cn('h-full', 'leading-14', 'flex-1', 'dark:bg-gray-900')}
              items={items}
            />
            <SwitchLanguage />
            <UserDropdown />
          </div>
        </Clayout.Header>
        <Clayout.Content className={cn(maxWidth, 'm-auto')}>
          <CBreadcrumb />
          <section className="mt-4">{children}</section>
          <Footer />
        </Clayout.Content>
      </Clayout.Layout>
    </>
  )
}

export default TopMenuLayout
