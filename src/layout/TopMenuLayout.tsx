import Logo from '@/components/common/logo'
import { cn } from '@/utils/styles'
import { Breadcrumb, MenuProps } from 'antd'
import React from 'react'
import UserDropdown from './UserDropdown'
import { useNavigate } from '@tanstack/react-router'
import SwitchLanguage from './SwitchLanguage'
import Clayout from '@/components/common/clayout'
import CMenu from '@/components/common/menu'

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
        <Clayout.Content className={cn(maxWidth)}>
          <Breadcrumb
            items={[
              { title: 'Home', href: '/' },
              { title: 'Dashboard', href: '/dashboard' },
            ]}
          />
          <section className="mt-4">{children}</section>
        </Clayout.Content>
        <Clayout.Footer>
          <div>Osiris Team</div>
          <div className="font-semibold">Power of Osiris Team</div>
        </Clayout.Footer>
      </Clayout.Layout>
    </>
  )
}

export default TopMenuLayout
