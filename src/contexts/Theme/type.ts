import { ITheme, ThemeMode } from '@/config/theme.type'
import { Dispatch } from 'react'

export interface IThemeContext extends ITheme {
  setThemeMode: (mode: ThemeMode) => void
  setLayout: (layout: ITheme['layout']) => void
  setSideMenuType: (type: ITheme['sideMenuType']) => void
  changeDarkMode: (value: string) => void // Use Dispatch type for setState functions
  collapsedMenu: boolean // Optional property for collapsed state
  setCollapsedMenu: Dispatch<React.SetStateAction<boolean>> // Optional setter for collapsed state
}
