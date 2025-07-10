import { themeModes } from '@/config/theme'
import { IThemeContext } from './type'
import { assets } from '@/utils/assets.constant'

export const initThemeContext: IThemeContext = {
  darkMode: false,
  themeMode: themeModes[0],
  layout: 'top',
  sideMenuType: 'grouping',
  setThemeMode: () => {},
  setLayout: () => {},
  setSideMenuType: () => {},
  changeDarkMode: () => {},
  collapsedMenu: false,
  setCollapsedMenu: () => {},
  brandName: 'Osiris Team',
  logo: assets.reactSvg,
  description: 'A modern React template for building scalable applications.',
}
