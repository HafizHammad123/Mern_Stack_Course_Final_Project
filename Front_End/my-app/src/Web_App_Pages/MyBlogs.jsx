import React from "react";
import HeaderWebApp from "../Web_App_Components/Header_WebApp";
import SideNavWebApp from "../Web_App_Components/Side_Navbar";
import FooterWebApp from "../Web_App_Components/Footer_WebApp";
import NavbarMobileWeb from "../Web_App_Components/Navbar_Mobile";
import { Stack, Box, TextField, Avatar} from '@mui/material'
import ShowUserOwnBlogs from "../Web_App_Components/Show_User_Blogs";

export default function MyBlogs() {
    const OpenModal = () => {
        console.log("hello")
    }
    return <>
        <HeaderWebApp />
        <NavbarMobileWeb />
        <Stack flexDirection={"row"} gap={2}  >
            <SideNavWebApp />
            <Stack paddingX={3} paddingY={2} spacing={2} flex={2} >
                <TextField label="Search" type={"search"} />
                <Stack flexDirection={"row"} gap={1}>
                    <Avatar></Avatar>
                    <Box onClick={() => OpenModal()} sx={{ cursor: "pointer" }} border={1} flex={1} display={"flex"} alignItems={"center"} fontFamily={"Raleway"} paddingX={2} borderRadius={3}>What,s on your mind</Box>
                </Stack>
                <Box>
                    <ShowUserOwnBlogs />
                </Box>

            </Stack>
            <Box  fontFamily={"Raleway"} flex={1} p={2} sx={{backgroundColor:"#ebebeb"}}>
                Right Bar
            </Box>
        </Stack>





   
        <FooterWebApp />
    </>
}