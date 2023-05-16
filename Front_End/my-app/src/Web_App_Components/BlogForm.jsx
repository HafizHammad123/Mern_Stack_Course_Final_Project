import { Box, TextField } from "@mui/material";
import React from "react";
export default function BlogForm(props)
{
    return <>
    <Box>
    <TextField label={props.label} fullWidth sx={{"label":{fontFamily:"Raleway"}}}/>
    </Box>
    </>
}