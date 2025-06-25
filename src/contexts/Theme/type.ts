import { ITheme, ThemeMode } from '@/config/theme.type'
import { Dispatch } from 'react'

export interface IThemeContext extends ITheme {
  setThemeMode: (mode: ThemeMode) => void
  setLayout: (layout: ITheme['layout']) => void
  setSideMenuType: (type: ITheme['sideMenuType']) => void
  changeDarkMode: () => void // Use Dispatch type for setState functions
}
