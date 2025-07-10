import { authManager } from '@/App'
import { ExtraOptions } from '@/types/global'
import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react'
import { Mutex } from 'async-mutex'

const mutex = new Mutex()
export const getBaseQuery = (config: { baseUrl: string; extraOptions?: ExtraOptions }) =>
  fetchBaseQuery({
    baseUrl: config.baseUrl,
    headers: {
      'Access-Control-Allow-Headers': '*',
    },
    prepareHeaders: (headers) => {
      const token = authManager.getAuthToken()
      if (token && !config?.extraOptions?.notUseToken) {
        headers.set('Authorization', `${token}`)
      }
      return headers ?? {}
    },
    timeout: 10000,
  })

export const baseQueryWithReauth: (
  baseUrl: string,
) => BaseQueryFn<FetchArgs, unknown, FetchBaseQueryError, ExtraOptions> = (baseUrl: string) => {
  return async (args, api, extraOptions) => {
    const baseQuery = getBaseQuery({ baseUrl, extraOptions })

    const baseRefreshQuery = getBaseQuery({
      baseUrl,
      extraOptions: { ...extraOptions, notUseToken: true },
    })

    await mutex.waitForUnlock()
    let result = await baseQuery(args, api, extraOptions)

    if (result?.error && result?.error?.status === 401) {
      if (!mutex.isLocked()) {
        const release = await mutex.acquire()
        try {
          const refreshResult: any = await baseRefreshQuery(
            {
              url: '/auth/refresh',
              method: 'POST',
            },
            api,
            extraOptions,
          )

          if (refreshResult.data?.status === 0) {
            const token = refreshResult.data?.data?.accessToken
            authManager.setAuthToken(token, new Date(refreshResult.data?.data?.expiresAt))
            result = await baseQuery(args, api, extraOptions)
          } else {
            console.error('Failed to refresh token:', refreshResult.error)
          }
        } finally {
          release()
        }
      } else {
        await mutex.waitForUnlock()
        result = await baseQuery(args, api, extraOptions)
      }
    }
    return result
  }
}
