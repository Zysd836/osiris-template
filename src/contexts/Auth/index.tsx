import React, { useState } from 'react'
import { initialAuthContext } from './initContext'
import { IAuthContext } from './type'
import { UseNavigateResult } from '@tanstack/react-router'
import { initialAuthValues } from '@/utils/auth.mock'
import Cookie from 'js-cookie'
import { CookieKey, Default_Expiration_Days } from '@/utils/cookie'
const AuthContext = React.createContext<IAuthContext>(initialAuthContext)

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(initialAuthContext.isAuthenticated)
  const [me, setMe] = useState<Schema.Me | undefined>(initialAuthContext?.me)

  const login = (values: Schema.LoginRequest, navigate: UseNavigateResult<string>) => {
    if (values.username === initialAuthValues.username && values.password === initialAuthValues.password) {
      Cookie.set(CookieKey.AUTH_TOKEN, 'valid_token', {
        expires: Default_Expiration_Days,
      })

      setAuthenticated(true)
      navigate({ to: '/dashboard' })
    }
  }
  const logout = () => {
    console.log('Logging out')
    setAuthenticated(false)
    Cookie.remove(CookieKey.AUTH_TOKEN)
    window.location.href = '/login' // Redirect to login page
    // Implement logout logic here
  }
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        me,
        setMe,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
