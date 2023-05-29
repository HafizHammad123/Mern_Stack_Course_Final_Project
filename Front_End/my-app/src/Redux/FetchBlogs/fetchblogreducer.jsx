import { createSlice } from "@reduxjs/toolkit";
export const FetchUserBlog = createSlice({
    name: "FetchUserBlog",
    initialState: [],
    reducers:
    {
        StoreFetchUserBlog: (state, action) => {
            return [...action.payload]
        },
     
    }
})

export const { StoreFetchUserBlog } = FetchUserBlog.actions;
export default FetchUserBlog.reducer