import { createSlice } from "@reduxjs/toolkit";

const UserImage=""

export const UserprofileImages=createSlice({
    name:"UserProfile",
    initialState:UserImage,
    reducers:{
        StoreImagePath:(State,action)=>
        {
           return State=action.payload
        },
        FetchEmpty:(state)=>
        {
            return state=""
        }
    }

})

export const { StoreImagePath,FetchEmpty} = UserprofileImages.actions;
export default UserprofileImages.reducer