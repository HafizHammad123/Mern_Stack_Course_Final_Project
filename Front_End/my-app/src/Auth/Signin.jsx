import React from "react";
import { TextField } from "@mui/material";
import { ChangeLogin } from "../Redux/AuthReducers/LoginReducers";
import { useDispatch } from "react-redux";
export default function Signin({label,type,value,name})
{
    const dispatch=useDispatch()
    return<>
       <TextField value={value} name={name} label={label} type={type} fullWidth sx={{ "label": { fontFamily: "Raleway", fontWeight: "500" } }} required onChange={(e)=>dispatch(ChangeLogin({[e.target.name]:e.target.value}))}>
            </TextField>
    </>
}