import { Stack, Box, Button, IconButton } from "@mui/material";
import ReorderIcon from '@mui/icons-material/Reorder';
import React, { useState } from "react";
import Navbar from "./Navbar";
export default function Header() {
    const [list, update_list] = useState(false)
    const Open_Nav=()=>
    {
        if(list)
        {
            update_list(false)
        }
        else 
        {
            update_list(true)
        }
    }
    return <>
        <Stack p={1}  position={"sticky"} borderBottom={1} borderColor={"#ffffff45"}>
            <Stack flexDirection={"row"} sx={{justifyContent:{md:"flex-start",xs:"space-between"}}}>

                <Box color="white" flex={3} display={"flex"} alignItems={"center"} fontFamily={"Raleway"}>Blogging</Box>
                <Box display={"flex"} justifyContent={"center"}  flex={4} sx={{
                    display: { md: 'flex',xs:'none' }
                }}>
                    <Navbar></Navbar>
                </Box>
                <Box flex={1} display={"flex"} justifyContent={"center"} sx={{
                    display: { md: 'flex',xs:'none' }
                }}>
                    <Button color="White" sx={{ paddingX: '15px' }}>Sign up</Button>
                </Box>
                <Box  sx={{
                    display: { md: 'none',xs:'block' }
                }}><IconButton onClick={Open_Nav}>
                        <ReorderIcon color="White" />
                    </IconButton></Box>
            </Stack>

            <Stack flexDirection={"row"} justifyContent={"flex-end"} sx={{display:{md:"none"}}}>
                {
                    list ? <Box display={"flex"} flexDirection={"column"}  alignItems={"center"}>
                        <Navbar></Navbar>
                        <Button color="White">Sign up</Button>

                    </Box>:null 
                }
            </Stack>


        </Stack>
    </>
}