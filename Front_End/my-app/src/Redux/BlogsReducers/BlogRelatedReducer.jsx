import { createSlice } from "@reduxjs/toolkit";
export const BlogRelatedReducer = createSlice({
    name: "BlogRelatedReducer",
    initialState: {
        ModalStates: false,
        BlogPublishButton: true,
    },
    reducers:
    {
        OpenModal: (state) => {
            state.ModalStates = true
        },
        BlogPublished: (state) => {
            state.ModalStates = false
            state.BlogPublishButton=true

        },
        ChangeButton:(state)=>
        {
            state.BlogPublishButton=false
        }

    }
})

export const { OpenModal,BlogPublished,ChangeButton } = BlogRelatedReducer.actions;
export default BlogRelatedReducer.reducer