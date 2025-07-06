import { cn } from '@/utils/styles'
import { Button, Drawer } from 'antd'
import { Settings } from 'lucide-react'
import React from 'react'
import ModeSetting from './ModeSetting'
import ThemeSetting from './ThemeSetting'
import LayoutSetting from './LayoutSetting'
import MenuTypeSetting from './MenuTypeSetting'

const Setting = () => {
  const [open, setOpen] = React.useState(false)
  const onOpen = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }
  return (
    <>
      <Button
        type="primary"
        className={cn('fixed top-1/2 right-0 -translate-y-1/2 z-50', 'rounded-tr-none rounded-br-none', 'h-12 w-12')}
        onClick={onOpen}
        icon={<Settings />}
      />
      <Drawer
        closable={false}
        open={open}
        onClose={onClose}
      >
        <ModeSetting />
        <ThemeSetting />
        <LayoutSetting />
        <MenuTypeSetting />
      </Drawer>
    </>
  )
}

export default Setting
