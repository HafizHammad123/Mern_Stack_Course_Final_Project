import React from "react";
import { TextField } from "@mui/material";
export default function Signup({label,type})
{
    return<>
       <TextField label={label} type={type} fullWidth sx={{ "label": { fontFamily: "Raleway", fontWeight: "500" } }} required>
            </TextField>
    </>
}