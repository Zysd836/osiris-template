import { Tooltip, Typography } from 'antd'
import CheckList from './CheckList'
import { useTheme } from '@/contexts/Theme/useTheme'
import { cn } from '@/utils/styles'
import { IThemeContext } from '@/contexts/Theme/type'
import { assets } from '@/utils/assets.constant'

type OptionType = {
  key: IThemeContext['layout']
  name: string
  icon: string
}
const options: OptionType[] = [
  {
    key: 'mix',
    name: 'Mix',
    icon: assets.mixedLayoutSvg,
  },
  {
    key: 'top',
    name: 'Top',
    icon: assets.topLayoutSvg,
  },
  {
    key: 'side',
    name: 'Side',
    icon: assets.sideLayoutSvg,
  },
]
const LayoutSetting = () => {
  const { setLayout, layout } = useTheme()
  return (
    <div>
      <Typography.Title level={5}>Layout Setting</Typography.Title>
      <CheckList<OptionType>
        onChange={(item) => setLayout(item.key)}
        classContainer="mb-4 flex-wrap gap-y-1 gap-x-2"
        checkedValue={layout}
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

export default LayoutSetting
