import { createSlice } from "@reduxjs/toolkit";
export const StoreAllUserBlogs = createSlice({
    name: "StoreAllUserBlogs",
    initialState: [],
    reducers:
    {
        StoreAllUserBlogsForSearch: (state, action) => {
            return [...action.payload]
        },
     
    }
})

export const { StoreAllUserBlogsForSearch } = StoreAllUserBlogs.actions;
export default StoreAllUserBlogs.reducer