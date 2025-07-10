import { configureStore, isRejectedWithValue } from '@reduxjs/toolkit'
import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { baseApi } from './api'
import ExampleReducer, { exampleSlice } from './slice/example'

export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    console.warn('We got a rejected action!', action)
  }

  return next(action)
}

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware, rtkQueryErrorLogger),
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [exampleSlice.name]: ExampleReducer,
    // declare reducer here
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useTypedDispatch = () => useDispatch<AppDispatch>()
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
setupListeners(store.dispatch)
