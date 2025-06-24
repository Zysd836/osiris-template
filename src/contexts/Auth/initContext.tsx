import { IAuthContext } from './type'

export const initialAuthContext: IAuthContext = {
  isAuthenticated: false,
  login: (username: string, password: string) => {
    console.log(`Logging in with ${username} and ${password}`)
  },
  logout: () => {
    console.log('Logging out')
  },
}
