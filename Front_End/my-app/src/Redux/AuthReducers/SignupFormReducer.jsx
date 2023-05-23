import { createSlice } from "@reduxjs/toolkit";
export const SignupReducer = createSlice({
    name: "Signup",
    initialState: {
        NameSignup: "",
        EmailSignup: "",
        PasswordSignup: ""
    },
    reducers: {
        ChangeData: (state, action) => {
            return { ...state, ...action.payload }
        },
        Resetdata: () => {
            return { NameSignup: "", EmailSignup:"", PasswordSignup: "" }
        }
    }
})
export const { ChangeData, Resetdata } = SignupReducer.actions
export default SignupReducer.reducer