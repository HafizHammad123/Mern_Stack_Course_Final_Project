import { createSlice } from "@reduxjs/toolkit";
export const LoginReducer=createSlice({
    name:"Login",
    initialState:
    {
        Emailsignin:"",
        Passwordsignin:""
    },
    reducers:{
        ChangeLogin:(state,action)=>
        {
        return ({...state,...action.payload})
        }
    }
})
export const {ChangeLogin}=LoginReducer.actions
export default LoginReducer.reducer