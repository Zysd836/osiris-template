import { cn } from '@/utils/styles'
import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'

const baseValue = cn('bg-transparent')

const footerVariants = cva(baseValue, {
  variants: {},
})

export type FooterVariants = React.ComponentProps<'footer'> & VariantProps<typeof footerVariants>

const CFooter: React.FC<FooterVariants> = ({ children }) => {
  return <footer className={footerVariants()}>{children}</footer>
}

export default CFooter
