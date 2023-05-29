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
    },
    EditPost: (state, action) => {
      console.log(action.payload)
      return { ...action.payload }
    }



  }
})

// Action creators are generated for each case reducer function
export const { Change, Submit, EditPost } = BlogFormReducer.actions
export default BlogFormReducer.reducer