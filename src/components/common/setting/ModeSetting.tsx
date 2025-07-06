import { assets } from '@/utils/assets.constant'
import { Tooltip, Typography } from 'antd'
import CheckList from './CheckList'
import { useTheme } from '@/contexts/Theme/useTheme'

type OptionsType = {
  key: string
  icon: string
  name?: string
}
const options: OptionsType[] = [
  {
    key: 'light',
    icon: assets.lightSvg,
    name: 'Light Mode',
  },
  {
    key: 'dark',
    icon: assets.darkSvg,
    name: 'Dark Mode',
  },
]
const ModeSetting = () => {
  const { changeDarkMode, darkMode } = useTheme()
  return (
    <div>
      <Typography.Title level={5}>Mode Setting</Typography.Title>
      <CheckList<OptionsType>
        onChange={(item) => changeDarkMode(item.key)}
        classContainer="mb-4"
        checkedValue={darkMode ? 'dark' : 'light'}
        items={options}
        renderItem={(item) => (
          <Tooltip title={item.name}>
            <img
              className="h-10"
              src={item.icon}
            />
          </Tooltip>
        )}
      />
    </div>
  )
}

export default ModeSetting
