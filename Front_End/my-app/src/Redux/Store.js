import { configureStore } from '@reduxjs/toolkit'
import PostReducer from './BlogsReducers/BlogFormreducer1'
import Signupreducer from './AuthReducers/SignupFormReducer'
import Loginreducer from './AuthReducers/LoginReducers'
import ProtectRoutes from './ProtectRoutesReducers/ProtectRoutes'
import StoreBlogPostData from './BlogsReducers/StoreBlogReducer'

export const  Store=configureStore({
  reducer: {
    BlogForm:PostReducer,
    Signup:Signupreducer,
    Login:Loginreducer,
    Routes:ProtectRoutes,
    StorePost:StoreBlogPostData
  },
})