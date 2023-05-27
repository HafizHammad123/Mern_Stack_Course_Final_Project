import { createSlice } from "@reduxjs/toolkit";
export const StoreBlogPost = createSlice({
    name: "StorePost",
    initialState: [],
    reducers:
    {
        CreatePostStore: (state, action) => {
            return [...state, action.payload]
        },
        FetchAllBlogs: (state, action) => {
            return [...action.payload]
        }
    }
})

export const { CreatePostStore, FetchAllBlogs } = StoreBlogPost.actions;
export default StoreBlogPost.reducer