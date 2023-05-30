import React, { useState } from "react";
import HeaderWebApp from "../Web_App_Components/Header_WebApp";
import SideNavWebApp from "../Web_App_Components/Side_Navbar";
import FooterWebApp from "../Web_App_Components/Footer_WebApp";
import NavbarMobileWeb from "../Web_App_Components/Navbar_Mobile";
import { Stack, Box } from '@mui/material'
import UserOwnLatestPost from "../Web_App_Components/UserOwnLatestPost";
import RatingBasicTable from "../Web_App_Components/RatingUserPost";
export default function Dashboard() {
    const [showpost, updatepostwhow] = useState(true)
    const [showcomment, updatecommentshow] = useState(false)
    return <>
        <HeaderWebApp />
        <NavbarMobileWeb />
        <Stack flexDirection={"row"} justifyContent={"flex-end"} flexWrap={"wrap"}>
            <SideNavWebApp />
            <Stack fontFamily={"Raleway"} sx={{ width: { lg: "950px", md: "650px", xs: "100%" } }} >
                <Box display={"flex"} flexWrap={"wrap"} sx={{ p: { sm: 2, xs: 1 } }} gap={2} >
                    <Box component={"div"} onClick={() => {
                        updatepostwhow(true)
                        updatecommentshow(false)
                    }} sx={{ flex: { md: "250px", lg: "250px", xs: "300px" }, backgroundColor: "#b1b1b1", fontWeight: "500", cursor: "pointer" }} paddingX={2} paddingY={3} display={"flex"} justifyContent={"space-between"}>
                        <Box>Most Recents Post</Box>
                        <Box>5</Box>
                    </Box>
                    <Box component={"div"} onClick={() => {
                        updatepostwhow(false)
                        updatecommentshow(true)
                    }} sx={{ flex: { md: "250px", lg: "250px", xs: "300px" }, backgroundColor: "#b1b1b1", fontWeight: "500", cursor: "pointer" }} paddingX={2} paddingY={3} display={"flex"} justifyContent={"space-between"}>
                        <Box>Rating</Box>


                    </Box>

                </Box>
                {
                    showpost ?
                        <Box sx={{ p: { sm: 2, xs: 1 } }} display={"flex"} flexWrap={"wrap"} gap={2}>
                            {<UserOwnLatestPost />}
                        </Box>
                        : null
                }
                {
                    showcomment ?
                        <Box p={2} >
                            <RatingBasicTable />
                        </Box>
                        : null
                }





            </Stack>
        </Stack>
        <FooterWebApp />
    </>
}