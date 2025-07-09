import { cn } from '@/utils/styles'
import { LayoutProps } from 'antd'
import Layout from 'antd/es/layout/layout'
import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'

const baseValue = cn('bg-transparent')

const sectionVariants = cva(baseValue, {
  variants: {},
})

export type SectionProps = LayoutProps & VariantProps<typeof sectionVariants>

const Index: React.FC<SectionProps> = ({ children, className, ...props }) => {
  return (
    <Layout
      className={sectionVariants({ className })}
      {...props}
    >
      {children}
    </Layout>
  )
}

export default Index
