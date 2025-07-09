import { cn } from '@/utils/styles'
import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'

const baseValue = cn('bg-transparent')

const sectionVariants = cva(baseValue, {
  variants: {
    modifier: {
      default: '',
      container: cn(),
      screen: cn('w-dvw', 'h-dvh'),
      full: cn('w-full', 'h-full'),
    },
    defaultVariants: {
      modifier: 'default',
    },
  },
})

export type SectionProps = React.ComponentProps<'section'> & VariantProps<typeof sectionVariants>

const CSection: React.FC<SectionProps> = ({ children, modifier, ...props }) => {
  return (
    <section
      className={sectionVariants({ modifier })}
      {...props}
    >
      {children}
    </section>
  )
}

export default CSection
