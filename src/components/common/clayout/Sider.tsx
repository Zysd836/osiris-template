import { cn } from '@/utils/styles'
import Sider, { SiderProps } from 'antd/es/layout/Sider'
import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'

const baseValue = cn('bg-white dark:bg-gray-900')

const siderVariants = cva(baseValue, {
  variants: {},
})

export type CSiderProps = SiderProps & VariantProps<typeof siderVariants>

const CSider: React.FC<SiderProps> = ({ children, className, ...props }) => {
  return (
    <Sider
      className={cn(siderVariants({ className }))}
      {...props}
    >
      {children}
    </Sider>
  )
}

export default CSider
