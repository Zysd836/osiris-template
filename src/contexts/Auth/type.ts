import { UseNavigateResult } from '@tanstack/react-router'
import { Dispatch, SetStateAction } from 'react'
export interface IAuthContext {
  isAuthenticated: boolean
  me?: Schema.Me
  login: (values: Schema.LoginRequest, navigate: UseNavigateResult<string>) => void
  logout: () => void
  setMe: Dispatch<SetStateAction<Schema.Me | undefined>>
}
