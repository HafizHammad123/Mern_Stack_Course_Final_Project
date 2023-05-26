import { createSlice } from "@reduxjs/toolkit";
export const StoreBlogPost = createSlice({
    name: "StorePost",
    initialState: [],
    reducers:
    {
        CreatePostStore: (state, action) => {
            return [...state, action.payload]
        }
    }
})

export const { CreatePostStore } = StoreBlogPost.actions;
export default StoreBlogPost.reducer