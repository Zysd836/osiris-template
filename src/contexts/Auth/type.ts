import { UseNavigateResult } from '@tanstack/react-router'
export interface IAuthContext {
  isAuthenticated: boolean
  login: (values: Schema.LoginRequest, navigate: UseNavigateResult<string>) => void
  logout: () => void
}
