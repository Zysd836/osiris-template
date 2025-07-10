import Logo from '@/components/common/logo'
import { cn } from '@/utils/styles'
import { MenuProps } from 'antd'
import React from 'react'
import UserDropdown from './children/UserDropdown'
import { useNavigate } from '@tanstack/react-router'
import SwitchLanguage from './children/SwitchLanguage'
import Clayout from '@/components/common/clayout'
import CMenu from '@/components/common/menu'
import CollapseSider from './children/CollapseSider'
import CBreadcrumb from './children/CBreadcrumb'
import { useTheme } from '@/contexts/Theme/useTheme'
import Footer from './children/Footer'

type MixMenuLayout = {
  items: MenuProps['items']
  children?: React.ReactNode
}
const SideMenuLayout: React.FC<MixMenuLayout> = ({ items, children }) => {
  const navigate = useNavigate()
  const { collapsedMenu } = useTheme()
  return (
    <>
      <Clayout.Layout>
        <CollapseSider>
          <Logo.Header className={cn('flex items-center', 'h-14', 'pl-4')} />
          <div className="overflow-y-auto flex-1">
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
              'flex gap-auto justify-between items-center',
              'px-1 py-2',
              collapsedMenu ? 'flex-col gap-4' : 'flex-row',
              'border-t border-gray-100 dark:border-gray-600',
              'w-full',
            )}
          >
            <UserDropdown />
            <SwitchLanguage />
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

export default SideMenuLayout
