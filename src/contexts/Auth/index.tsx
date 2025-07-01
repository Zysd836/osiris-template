import React, { useState } from 'react'
import { initialAuthContext } from './initContext'
import { IAuthContext } from './type'
import { redirect } from '@tanstack/react-router'
const AuthContext = React.createContext<IAuthContext>(initialAuthContext)

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(initialAuthContext.isAuthenticated)

  const login = (values: Schema.LoginRequest) => {
    console.log(`Logging in with ${values.username} and ${values.password}`)
    if (values.username === 'admin' && values.password === 'password') {
      setAuthenticated(true)
      redirect({ to: '/dashboard' })
    }
  }
  const logout = () => {
    console.log('Logging out')
    // Implement logout logic here
  }
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
