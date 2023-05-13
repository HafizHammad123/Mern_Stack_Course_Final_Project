import React from "react";
import HeaderWebApp from "../Web_App_Components/Header_WebApp";
import SideNavWebApp from "../Web_App_Components/Side_Navbar";
import FooterWebApp from "../Web_App_Components/Footer_WebApp";
import { Stack } from '@mui/material'
export default function Help() {
    return <>
        <HeaderWebApp></HeaderWebApp>
        <Stack>
            <SideNavWebApp></SideNavWebApp>
        </Stack>
        <FooterWebApp></FooterWebApp>
    </>
}