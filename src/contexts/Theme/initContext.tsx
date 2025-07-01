import { themeModes } from '@/config/theme'
import { IThemeContext } from './type'

export const initThemeContext: IThemeContext = {
  darkMode: false,
  themeMode: themeModes[0],
  layout: 'top',
  sideMenuType: 'grouping',
  setThemeMode: () => {},
  setLayout: () => {},
  setSideMenuType: () => {},
  changeDarkMode: () => {},
}
