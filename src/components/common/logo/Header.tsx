import { cn } from '@/utils/styles'
import React from 'react'

type HeaderProps = {
  className?: string
}
const Header: React.FC<HeaderProps> = ({ className }) => {
  return <div className={cn('font-semibold text-xl', className)}>Osiris Team</div>
}

export default Header
