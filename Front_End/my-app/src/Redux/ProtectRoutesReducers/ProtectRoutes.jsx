import { createSlice } from "@reduxjs/toolkit";
export const Protect_Routes=createSlice({
    name:"Protect_Routes",
    initialState:{
        RoutesValue:false
    },
    reducers:
    {
        LoggedIn:(state)=>
        {
            return state.RoutesValue=true;
        },
        LoggedOut:(state)=>
        {
            return state.RoutesValue=false
        }
    }
})

export const {LoggedIn,LoggedOut}=Protect_Routes.actions;
export default Protect_Routes.reducer