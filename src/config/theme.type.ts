import { themeColors, themeModes } from './theme'

export type ThemeMode = (typeof themeModes)[number]
export type ThemeColor = Record<(typeof themeColors)[number], string>
export type ThemeModeMap = {
  key: ThemeMode
  name: string
}
export interface ITheme {
  themeMode: ThemeMode
  darkMode: boolean
  layout: 'mix' | 'top' | 'side'
  sideMenuType: 'classic' | 'grouping'
}
