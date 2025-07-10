import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ExampleState } from './types'

const initialState: ExampleState = {
  example: [],
}
export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    saveExample: (state, action: PayloadAction<{ [key: string]: any }>) => {
      state.example = action.payload.example
    },
    // declare another action here
  },
})

export const { saveExample } = exampleSlice.actions

export default exampleSlice.reducer
