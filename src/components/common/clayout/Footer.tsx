import { cn } from '@/utils/styles'
import { BasicProps, Footer } from 'antd/es/layout/layout'
import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'

const baseValue = cn('p-4', 'bg-transparent', 'flex flex-col items-center justify-center')

const footerVariants = cva(baseValue, {
  variants: {},
})

export type CFooterProps = BasicProps & VariantProps<typeof footerVariants>

const CFooter: React.FC<CFooterProps> = ({ children, className }) => {
  return <Footer className={footerVariants({ className })}>{children}</Footer>
}

export default CFooter
