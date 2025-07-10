import { useTheme } from '@/contexts/Theme/useTheme'
import { cn } from '@/utils/styles'
import React, { useMemo } from 'react'

type HeaderProps = {
  className?: string
}
const Header: React.FC<HeaderProps> = ({ className }) => {
  const { collapsedMenu, brandName, logo, layout } = useTheme()
  const onClick = () => {}

  const title = useMemo(() => {
    if (collapsedMenu) {
      switch (layout) {
        case 'mix':
          return brandName
        case 'top':
          return logo ? null : brandName?.[0]
        case 'side':
          return null
      }
    }
    return brandName
  }, [collapsedMenu, brandName, logo, layout])
  return (
    <div
      onClick={onClick}
      className={cn('font-semibold text-xl', 'cursor-pointer', 'flex items-center gap-2', className)}
    >
      <img
        src={logo}
        alt={brandName}
        className="h-8"
      />
      {title}
    </div>
  )
}

export default Header
