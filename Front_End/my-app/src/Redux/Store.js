import { configureStore } from '@reduxjs/toolkit'
import PostReducer from './BlogsReducers/BlogFormreducer1'
import Signupreducer from './AuthReducers/SignupFormReducer'
import Loginreducer from './AuthReducers/LoginReducers'

export const  Store=configureStore({
  reducer: {
    BlogForm:PostReducer,
    Signup:Signupreducer,
    Login:Loginreducer
  },
})