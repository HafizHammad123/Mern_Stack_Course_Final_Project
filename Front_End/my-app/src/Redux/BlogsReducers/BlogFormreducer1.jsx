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
    }),
    Submit: () => {
      return { AuthorName: "", Title: "", Description: "", Img: "" }
    }



  }
})

// Action creators are generated for each case reducer function
export const { Change, Submit } = BlogFormReducer.actions
export default BlogFormReducer.reducer