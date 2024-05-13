import {configureStore} from '@reduxjs/toolkit'
import todoSlices from '../features/todoSlices';

export const store = configureStore({
    reducer: todoSlices
  })