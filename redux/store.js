import { configureStore } from '@reduxjs/toolkit'
import product from './product'

export const store = configureStore({
  reducer: { product },
})