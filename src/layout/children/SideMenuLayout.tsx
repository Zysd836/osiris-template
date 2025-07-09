import Logo from '@/components/common/logo'
import { cn } from '@/utils/styles'
import { Breadcrumb, MenuProps } from 'antd'
import React from 'react'
import UserDropdown from './UserDropdown'
import { useNavigate } from '@tanstack/react-router'
import SwitchLanguage from './SwitchLanguage'
import Clayout from '@/components/common/clayout'
import CMenu from '@/components/common/menu'
import CollapseSider from './CollapseSider'
import CBreadcrumb from './CBreadcrumb'
import { useTheme } from '@/contexts/Theme/useTheme'

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
          <Logo.Header className={cn('flex items-center justify-center h-14')} />
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
