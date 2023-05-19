import { configureStore } from '@reduxjs/toolkit'
import PostReducer from './BlogsReducers/BlogFormreducer1'
import Signupreducer from './SignupReducers/SignupFormReducer'

export const  Store=configureStore({
  reducer: {
    BlogForm:PostReducer,
    Signup:Signupreducer
  },
})