import { useTheme } from '@/contexts/Theme/useTheme'
import { cn } from '@/utils/styles'
import { Button } from 'antd'
import { ChevronLeft } from 'lucide-react'

const CollapseButton = () => {
  const { setCollapsedMenu, collapsedMenu } = useTheme()
  const toggleCollapse = () => {
    setCollapsedMenu((prev) => !prev)
  }
  return (
    <Button
      type="text"
      size="small"
      className={cn(
        'rounded-full',
        'shadow-primary',
        'transition-all',
        'absolute z-10 -right-3 top-[80px]',
        'bg-white',
        'dark:bg-gray-800',
        'p-0',
        'flex justify-center items-center',
      )}
      onClick={toggleCollapse}
      icon={
        <ChevronLeft
          size={16}
          className={cn(collapsedMenu ? 'rotate-180' : '', 'text-gray-500', 'transition-all')}
        />
      }
    ></Button>
  )
}

export default CollapseButton
