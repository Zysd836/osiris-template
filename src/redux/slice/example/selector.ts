import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../store'

export const selectExampleSlice = (state: RootState) => state.example

export const allExample = createSelector(selectExampleSlice, (s) => s)
