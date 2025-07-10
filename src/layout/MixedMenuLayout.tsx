import Logo from '@/components/common/logo'
import { cn } from '@/utils/styles'
import { Breadcrumb, MenuProps } from 'antd'
import React from 'react'
import UserDropdown from './children/UserDropdown'
import { useNavigate } from '@tanstack/react-router'
import SwitchLanguage from './children/SwitchLanguage'
import Clayout from '@/components/common/clayout'
import CMenu from '@/components/common/menu'
import CollapseSider from './children/CollapseSider'
import CBreadcrumb from './children/CBreadcrumb'
import Footer from './children/Footer'

type MixedMenuLayout = {
  items: MenuProps['items']
  children?: React.ReactNode
}
const MixedMenuLayout: React.FC<MixedMenuLayout> = ({ items, children }) => {
  const navigate = useNavigate()
  return (
    <>
      <Clayout.Layout>
        <Clayout.Header>
          <div
            className={cn('h-full', 'm-auto', 'bg-white dark:bg-gray-900', 'flex justify-between items-center gap-4')}
          >
            <Logo.Header />
            <div className="flex items-center">
              <SwitchLanguage />
              <UserDropdown />
            </div>
          </div>
        </Clayout.Header>
        <CollapseSider>
          <Logo.Header className={cn('flex items-center justify-center h-14')} />
          <div className="overflow-y-auto max-h-[calc(100dvh-var(--spacing)*14)]">
            <CMenu
              mode="inline"
              onClick={(e) => {
                navigate({ to: e.key })
              }}
              items={items}
            />
          </div>
        </CollapseSider>
        <Clayout.Content>
          <CBreadcrumb />
          <section className="mt-4">{children}</section>
          <Footer />
        </Clayout.Content>
      </Clayout.Layout>
    </>
  )
}

export default MixedMenuLayout
