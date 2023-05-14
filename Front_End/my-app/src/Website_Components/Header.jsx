import { Stack, Box, Button, IconButton } from "@mui/material";
import ReorderIcon from '@mui/icons-material/Reorder';
import React, { useState } from "react";
import Navbar from "./Navbar";
export default function Header() {
    const [list, update_list] = useState(false)
    const Open_Nav = () => {
        if (list) {
            update_list(false)
        }
        else {
            update_list(true)
        }
    }
    return <>
        <Stack  position={"fixed"} width={"100%"} zIndex={1} borderColor={"#ffffff45"}>
            <Stack p={1} flexDirection={"row"} sx={{ justifyContent: { md: "flex-start", xs: "space-between" }, backgroundColor: '#2324254f' }}>

                <Box color="white" flex={3} display={"flex"} alignItems={"center"} gap={1} fontFamily={"Raleway"} textTransform={"uppercase"}><i class="fa-solid fa-blog"></i> Blog</Box>
                <Box display={"flex"} justifyContent={"center"} flex={4} sx={{
                    display: { md: 'flex', xs: 'none' }
                }}>
                    <Navbar></Navbar>
                </Box>
                <Box flex={1} display={"flex"} justifyContent={"center"} sx={{
                    display: { md: 'flex', xs: 'none' }
                }}>
                    <Button color="White" sx={{ paddingX: '15px' }}>Sign up</Button>
                </Box>
                <Box sx={{
                    display: { md: 'none', xs: 'block' }
                }}><IconButton onClick={Open_Nav}>
                        <ReorderIcon color="White" />
                    </IconButton></Box>
            </Stack>

            <Stack sx={{ display: { md: "none" },backgroundColor: '#000000e8',color:"white"  }} position={"relative"} zIndex={4}>
                {
                    list ? <Box display={"flex"} flexDirection={"column"}  alignItems={"center"}>
                        <Navbar></Navbar>
                        <Button color="White">Sign up</Button>

                    </Box> : null
                }
            </Stack>


        </Stack>
    </>
}