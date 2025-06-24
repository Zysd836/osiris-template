export interface IAuthContext {
  isAuthenticated: boolean
  login: (username: string, password: string) => void
  logout: () => void
}
