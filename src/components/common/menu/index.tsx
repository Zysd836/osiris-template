import { cn } from '@/utils/styles'
import { Menu, MenuProps } from 'antd'
import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'

const baseValue = cn('border-transparent', 'dark:bg-gray-900')
const menuVariants = cva(baseValue, {
  variants: {
    mode: {
      vertical: cn(' dark:border-r dark:border-gray-600'),
      inline: cn(''),
      horizontal: cn(''),
    },
  },
})
type CMenuProps = MenuProps & VariantProps<typeof menuVariants>
const CMenu: React.FC<CMenuProps> = ({ mode, className, ...props }) => {
  return (
    <>
      <Menu
        mode={mode}
        className={menuVariants({ mode, className })}
        {...props}
      />
    </>
  )
}

export default CMenu
