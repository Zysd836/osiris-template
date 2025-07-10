import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from './baseApi'
import { env } from '@/utils/env'

export const baseApi = createApi({
  baseQuery: baseQueryWithReauth(env.API_URL),
  reducerPath: 'default_api',
  endpoints: () => ({}),
})
