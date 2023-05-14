import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import UserPic from '../Web_App_Components/Images/hammad.jpeg'
export default function HeaderWebApp() {
    const [Open, SetOpen] = useState(false)
    const OpenProfile = () => {
        if (!Open) {
            SetOpen(true)
        }
        else {
            SetOpen(false)
        }

    }
    return <>
        <AppBar position="static" >
            <Toolbar>
                <Box flex={1}>
                    <Typography variant="h6" textTransform={"uppercase"}>Blog</Typography>
                </Box>

                <Box flex={1} fontFamily={"Arial"} display={"flex"} justifyContent={"flex-end"} columnGap={3} alignItems={"center"}>
                    <Badge badgeContent={4} color="error" sx={{ cursor: "pointer" }}>
                        <NotificationsIcon />
                    </Badge>
                    <Badge badgeContent={4} color="error" sx={{ cursor: "pointer" }}>
                        <EmailIcon></EmailIcon>
                    </Badge>
                    <Box display={"flex"} gap={1} alignItems={"center"}>
                        <Avatar src={UserPic} onClick={() => OpenProfile()} sx={{ cursor: "pointer" }} />
                        <Box display={"flex"} alignItems={"center"}>

                        </Box>
                        {Open ? <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"

                            open={Open}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <MenuItem >Profile</MenuItem>
                            <MenuItem >My account</MenuItem>
                            <MenuItem >Logout</MenuItem>
                        </Menu> : null
                        }

                    </Box>
                </Box>
            </Toolbar>
        </AppBar>

    </>
}