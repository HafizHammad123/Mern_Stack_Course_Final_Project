import { createSlice } from "@reduxjs/toolkit";
export const BlogFormReducer = createSlice({
  name: 'BlogFormReducer',
  initialState: {
    AuthorName: "",
    Title: "",
    Description: "",
    Img: ""
  },
  reducers: {
    Change: (state, action) => ({
      ...state, ...action.payload
    })


  }
})

// Action creators are generated for each case reducer function
export const { Change } = BlogFormReducer.actions
export default BlogFormReducer.reducer