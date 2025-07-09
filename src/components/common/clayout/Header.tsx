import { cn } from '@/utils/styles'
import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'

const baseValue = cn(
  'fixed z-50',
  'px-4',
  'w-dvw h-14',
  'bg-white',
  'dark:bg-gray-900',
  'dark:border-b dark:border-gray-600',
)

const headerVariants = cva(baseValue, {
  variants: {},
})

export type HeaderProps = React.ComponentProps<'section'> & VariantProps<typeof headerVariants>

const CHeader: React.FC<HeaderProps> = ({ children }) => {
  return <div className={headerVariants()}>{children}</div>
}

export default CHeader
