import { useTheme } from '@/contexts/Theme/useTheme'
import { cn } from '@/utils/styles'
import React from 'react'

type HeaderProps = {
  className?: string
}
const Header: React.FC<HeaderProps> = ({ className }) => {
  const { collapsedMenu, brandName, logo } = useTheme()
  const onClick = () => {}
  return (
    <div
      onClick={onClick}
      className={cn('font-semibold text-xl', 'cursor-pointer', 'flex items-center gap-2', className)}
    >
      <img
        src={logo}
        className="h-8"
      />
      {collapsedMenu ? brandName?.[0] : brandName}
    </div>
  )
}

export default Header
