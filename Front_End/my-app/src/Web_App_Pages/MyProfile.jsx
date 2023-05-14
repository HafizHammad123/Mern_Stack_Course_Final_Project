import React from "react";
import HeaderWebApp from "../Web_App_Components/Header_WebApp";
import SideNavWebApp from "../Web_App_Components/Side_Navbar";
import FooterWebApp from "../Web_App_Components/Footer_WebApp";
import NavbarMobileWeb from "../Web_App_Components/Navbar_Mobile";
import { Stack } from '@mui/material'
export default function MyProfile() {
    return <>
        <HeaderWebApp />
        <NavbarMobileWeb />
        <Stack>
            <SideNavWebApp />
        </Stack>
        <FooterWebApp />
    </>
}