import React from 'react'
import { IThemeContext } from './type'
import { initThemeContext } from './initContext'
import { ConfigProvider, theme } from 'antd'
import { StyleProvider } from '@ant-design/cssinjs'

const ThemeContext = React.createContext<IThemeContext>(initThemeContext)

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeMode, setThemeMode] = React.useState(initThemeContext.themeMode)
  const [layout, setLayout] = React.useState(initThemeContext.layout)
  const [sideMenuType, setSideMenuType] = React.useState(initThemeContext.sideMenuType)
  const [darkMode, setDarkMode] = React.useState(false)
  const [collapsedMenu, setCollapsedMenu] = React.useState(false)

  const changeDarkMode = (value: string) => {
    if (value) {
      const isDark = value === 'dark'
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
      setDarkMode(isDark)
      return
    }
    setDarkMode((prev) => {
      const newDarkMode = !prev
      document.documentElement.setAttribute('data-theme', newDarkMode ? 'dark' : 'light')
      return newDarkMode
    })
  }

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        layout,
        sideMenuType,
        darkMode,
        setThemeMode,
        setLayout,
        setSideMenuType,
        changeDarkMode,
        collapsedMenu,
        setCollapsedMenu,
      }}
    >
      <StyleProvider layer>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: themeMode,
            },
            algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
          }}
        >
          {children}
        </ConfigProvider>
      </StyleProvider>
    </ThemeContext.Provider>
  )
}
export { ThemeContext, ThemeProvider }
