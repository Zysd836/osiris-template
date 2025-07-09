import Clayout from '@/components/common/clayout'
import { useTheme } from '@/contexts/Theme/useTheme'
import { cn } from '@/utils/styles'
import React from 'react'
import CollapseButton from './CollapseButton'

type CollapseSiderProps = {
  children?: React.ReactNode
}
const CollapseSider: React.FC<CollapseSiderProps> = ({ children }) => {
  const { collapsedMenu } = useTheme()
  return (
    <Clayout.Sider
      collapsed={collapsedMenu}
      collapsedWidth={64}
      width={260}
      className={cn('h-dvh', 'border-r border-gray-200 dark:border-r dark:border-gray-600')}
    >
      {children}
      <CollapseButton />
    </Clayout.Sider>
  )
}

export default CollapseSider
