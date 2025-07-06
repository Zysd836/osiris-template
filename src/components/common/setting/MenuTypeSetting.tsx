import { Tooltip, Typography } from 'antd'
import CheckList from './CheckList'
import { useTheme } from '@/contexts/Theme/useTheme'
import { cn } from '@/utils/styles'
import { IThemeContext } from '@/contexts/Theme/type'
import { assets } from '@/utils/assets.constant'

type OptionType = {
  key: IThemeContext['sideMenuType']
  name: string
  icon: string
}
const options: OptionType[] = [
  {
    key: 'classic',
    name: 'Classic',
    icon: assets.classicMenuSvg,
  },
  {
    key: 'grouping',
    name: 'Grouping',
    icon: assets.groupingMenuSvg,
  },
]
const MenuTypeSetting = () => {
  const { setSideMenuType, sideMenuType } = useTheme()
  return (
    <div>
      <Typography.Title level={5}>Theme Setting</Typography.Title>
      <CheckList<OptionType>
        onChange={(item) => setSideMenuType(item.key)}
        classContainer="mb-4 flex-wrap gap-y-1 gap-x-2"
        checkedValue={sideMenuType}
        items={options}
        renderItem={(item) => (
          <Tooltip title={item.name}>
            <img src={item.icon} />
          </Tooltip>
        )}
      />
    </div>
  )
}

export default MenuTypeSetting
