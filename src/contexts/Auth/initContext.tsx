import { CookieKey } from '@/utils/cookie'
import { IAuthContext } from './type'
import Cookie from 'js-cookie'
export const initialAuthContext: IAuthContext = {
  isAuthenticated: Cookie.get(CookieKey.AUTH_TOKEN) ? true : false,
  setMe: () => {},
  login: () => {},
  logout: () => {
    console.log('Logging out')
  },
}
