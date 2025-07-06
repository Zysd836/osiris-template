import { Tooltip, Typography } from 'antd'
import CheckList from './CheckList'
import { useTheme } from '@/contexts/Theme/useTheme'
import { cn } from '@/utils/styles'
import { themeModesMap } from '@/config/theme'
import { ThemeModeMap } from '@/config/theme.type'

const ThemeSetting = () => {
  const { setThemeMode, themeMode } = useTheme()
  return (
    <div>
      <Typography.Title level={5}>Theme Setting</Typography.Title>
      <CheckList<ThemeModeMap>
        onChange={(item) => setThemeMode(item.key)}
        classContainer="mb-4 flex-wrap gap-y-1 gap-x-2"
        checkedValue={themeMode}
        items={themeModesMap}
        renderItem={(item) => (
          <Tooltip title={item.name}>
            <div
              className={cn('w-6 h-6 rounded-sm', 'mb-1')}
              style={{
                backgroundColor: item.key,
              }}
            ></div>
          </Tooltip>
        )}
      />
    </div>
  )
}

export default ThemeSetting
