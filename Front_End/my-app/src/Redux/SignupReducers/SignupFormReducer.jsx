import { createSlice } from "@reduxjs/toolkit";
export const SignupReducer = createSlice({
    name: "Signup",
    initialState: {
        Name:"",
        Email: "",
        Password: ""
    },
    reducers: {
        ChangeData: (state,action) =>
        ({
           ...state,...action.payload
        })
    }
})
export const { ChangeData }=SignupReducer.actions
export default SignupReducer.reducer