import { configureStore } from '@reduxjs/toolkit'
import PostReducer from './Blogs/BlogFormreducer'

export const Store=configureStore({
  reducer: {
    BlogForm:PostReducer
  },
})