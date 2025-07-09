import { cn } from '@/utils/styles'
import { LayoutProps } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'

const baseValue = cn('w-full p-12 mt-14', 'bg-transparent', 'rounded-sm')

const layoutProps = cva(baseValue, {
  variants: {},
})

export type SectionProps = LayoutProps & VariantProps<typeof layoutProps>

const CContent: React.FC<SectionProps> = ({ children, className, ...props }) => {
  return (
    <Content
      className={layoutProps({ className })}
      {...props}
    >
      {children}
    </Content>
  )
}

export default CContent
