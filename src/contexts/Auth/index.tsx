import React from 'react'
import { initialAuthContext } from './initContext'
import { IAuthContext } from './type'

const AuthContext = React.createContext<IAuthContext>(initialAuthContext)

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAuthenticated = false // Replace with actual authentication logic
  const login = (username: string, password: string) => {
    console.log(`Logging in with ${username} and ${password}`)
    // Implement login logic here
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
