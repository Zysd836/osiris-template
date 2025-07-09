import { useTheme } from '@/contexts/Theme/useTheme'
import { cn } from '@/utils/styles'
import React from 'react'

type HeaderProps = {
  className?: string
}
const Header: React.FC<HeaderProps> = ({ className }) => {
  const { collapsedMenu } = useTheme()
  const onClick = () => {}
  return (
    <div
      onClick={onClick}
      className={cn('font-semibold text-xl', 'cursor-pointer', className)}
    >
      {collapsedMenu ? 'O' : 'Osiris Team'}
    </div>
  )
}

export default Header
