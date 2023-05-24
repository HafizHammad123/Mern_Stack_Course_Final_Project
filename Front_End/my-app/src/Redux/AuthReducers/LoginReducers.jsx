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
        },
        LogIn:()=>
        {
            return({Emailsignin:"",Passwordsignin:""})
        }
    }
})
export const {ChangeLogin,LogIn}=LoginReducer.actions
export default LoginReducer.reducer