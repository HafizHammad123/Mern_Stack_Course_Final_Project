import { configureStore } from '@reduxjs/toolkit'
import PostReducer from './BlogsReducers/BlogFormreducer1'
import Signupreducer from './AuthReducers/SignupFormReducer'
import Loginreducer from './AuthReducers/LoginReducers'
import ProtectRoutes from './ProtectRoutesReducers/ProtectRoutes'
import StoreBlogPostData from './BlogsReducers/StoreBlogReducer'
import BlogRelatedReducer from './BlogsReducers/BlogRelatedReducer'
import StoreBlogPostForSearch from './BlogsReducers/StoreBlogsPostSearch'
import FetchUserBlog from './FetchBlogs/fetchblogreducer'
import StoreAllUserBlogs from './FetchBlogs/StoreAllUserblogs'
import CopyUserFetchBlog from './FetchBlogs/Copyoffetchblogreducer'


export const  Store=configureStore({
  reducer: {
    BlogForm:PostReducer,
    Signup:Signupreducer,
    Login:Loginreducer,
    Routes:ProtectRoutes,
    StorePost:StoreBlogPostData,
    BlogRelatedStates:BlogRelatedReducer,
    StoreForSearchingBlog:StoreBlogPostForSearch,
    FetchBlogClient:FetchUserBlog,
    StoreAllUserBlogs:StoreAllUserBlogs,
    CopyFetchBlogForRendering:CopyUserFetchBlog
  },
})
