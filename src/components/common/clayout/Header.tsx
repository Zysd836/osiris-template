import { cn } from '@/utils/styles'
import { BasicProps, Header } from 'antd/es/layout/layout'
import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'

const baseValue = cn(
  'fixed z-50 top-0',
  'px-4',
  'w-dvw h-14',
  'bg-white',
  'dark:bg-gray-900',
  'border-b border-gray-200',
  'dark:border-b dark:border-gray-600',
)

const headerVariants = cva(baseValue, {
  variants: {},
})

export type CHeaderProps = BasicProps & VariantProps<typeof headerVariants>

const CHeader: React.FC<CHeaderProps> = ({ children, className, ...props }) => {
  return (
    <Header
      className={headerVariants({ className })}
      {...props}
    >
      {children}
    </Header>
  )
}

export default CHeader
