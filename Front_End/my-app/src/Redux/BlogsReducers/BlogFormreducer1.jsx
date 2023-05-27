import { createSlice } from "@reduxjs/toolkit";
export const BlogFormReducer = createSlice({
  name: 'BlogFormReducer',
  initialState: {
    Author_Name: "",
    Title: "",
    Description: "",
    Image: ""
  },
  reducers: {
    Change: (state, action) => ({
      ...state, ...action.payload
    }),
    Submit: () => {
      return { Author_Name: "", Title: "", Description: "", Image: "" }
    }



  }
})

// Action creators are generated for each case reducer function
export const { Change, Submit } = BlogFormReducer.actions
export default BlogFormReducer.reducer