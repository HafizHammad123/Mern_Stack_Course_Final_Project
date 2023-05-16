import React from "react";
import HeaderWebApp from "../Web_App_Components/Header_WebApp";
import SideNavWebApp from "../Web_App_Components/Side_Navbar";
import FooterWebApp from "../Web_App_Components/Footer_WebApp";
import NavbarMobileWeb from "../Web_App_Components/Navbar_Mobile";
import { Stack, Box } from '@mui/material'
export default function Dashboard() {
    return <>
        <HeaderWebApp />
        <NavbarMobileWeb />
        <Stack flexDirection={"row"}>
            <SideNavWebApp />
            <Box flex={4} border={1}>hello</Box>
        </Stack>
        <FooterWebApp />
    </>
}