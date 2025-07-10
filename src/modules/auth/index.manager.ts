import { CookieKey } from '@/utils/cookie'
import Cookie from 'js-cookie'
export const initAuthManager = () => {
  const token = Cookie.get(CookieKey.AUTH_TOKEN)

  const setDataCookie = (key: CookieKey, value: string, expires?: Date) => {
    Cookie.set(key, value, { expires })
  }
  const setAuthToken = (token: string, expires?: Date) => {
    token = token || ''
    Cookie.set(CookieKey.AUTH_TOKEN, token, { expires })
  }
  const getAuthToken = () => {
    return Cookie.get(CookieKey.AUTH_TOKEN) || token || ''
  }
  return {
    setDataCookie,
    setAuthToken,
    getAuthToken,
  }
}
