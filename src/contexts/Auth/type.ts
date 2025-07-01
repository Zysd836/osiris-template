export interface IAuthContext {
  isAuthenticated: boolean
  login: (values: Schema.LoginRequest) => void
  logout: () => void
}
