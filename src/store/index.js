import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import enquiriesSlice from './enquiries/enquiriesSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    enquiries:enquiriesSlice
  },
})