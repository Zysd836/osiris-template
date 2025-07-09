import { useTheme } from '@/contexts/Theme/useTheme'
import { cn } from '@/utils/styles'
import { Button } from 'antd'
import { ChevronLeft } from 'lucide-react'

const CollapseButton = () => {
  const { setCollapsedMenu } = useTheme()
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
        'p-0',
        'flex justify-center items-center',
      )}
      onClick={toggleCollapse}
      icon={<ChevronLeft size={16} />}
    ></Button>
  )
}

export default CollapseButton
