import { createSlice } from "@reduxjs/toolkit";
export const StoreBlogPostForSearch = createSlice({
    name: "StoreBlogPostForSearch",
    initialState: [],
    reducers:
    {
        CreatePostStoreForSearch: (state, action) => {
            return [...state, action.payload]
        },
        FetchAllBlogsForSearch: (state, action) => {
            return [...action.payload]
        }
    }
})

export const { CreatePostStoreForSearch, FetchAllBlogsForSearch } = StoreBlogPostForSearch.actions;
export default StoreBlogPostForSearch.reducer