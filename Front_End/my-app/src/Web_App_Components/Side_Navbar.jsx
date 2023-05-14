import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, Typography } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import CommentIcon from '@mui/icons-material/Comment';
import HelpIcon from '@mui/icons-material/Help';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { Link } from 'react-router-dom'
import React from "react";
export default function SideNavWebApp() {
    return <>
        <Box  border={1} color={"black"} sx={{ display: { md: "block", xs: "none" } }}>
            <List >
                <ListItem sx={{ "a": { textDecoration: "none", flexGrow: 1 } }}>
                    <Link to={"/Dashboard"}>
                        <ListItemButton>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText  >
                                <Typography variant="h6" color={"black"}>DashBoard</Typography>
                            </ListItemText>
                        </ListItemButton>
                    </Link>
                </ListItem>

                <ListItem sx={{ "a": { textDecoration: "none", flexGrow: 1 } }}>
                    <Link to={"/MyBlogs"}>
                        <ListItemButton>

                            <ListItemIcon>
                                <i class="fa-solid fa-blog"></i>
                            </ListItemIcon>
                            <ListItemText>
                                <Typography variant="h6" color={"black"}>My Blogs</Typography>
                            </ListItemText>
                        </ListItemButton>
                    </Link>
                </ListItem>

                <ListItem sx={{ "a": { textDecoration: "none", flexGrow: 1 } }}>
                    <Link to={"/Comments"}>
                        <ListItemButton >
                            <ListItemIcon>
                                <CommentIcon />
                            </ListItemIcon>
                            <ListItemText >
                                <Typography variant="h6" color={"black"}>Comments</Typography>
                            </ListItemText>
                        </ListItemButton>
                    </Link>
                </ListItem>

                <ListItem sx={{ "a": { textDecoration: "none", flexGrow: 1 } }}>
                    <Link to={"/Help_Desk"}>
                        <ListItemButton>
                            <ListItemIcon>
                                <HelpIcon />
                            </ListItemIcon>
                            <ListItemText  >
                                <Typography variant="h6" color={"black"} >Help Desk</Typography>
                            </ListItemText>
                        </ListItemButton>
                    </Link>
                </ListItem>

                <ListItem sx={{ "a": { textDecoration: "none", flexGrow: 1 } }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <ModeNightIcon />
                        </ListItemIcon>
                        {/* <ListItemText primary="Dark Mode"  sx={{ "span":{fontFamily:"Raleway",fontWeight:"500"}}} /> */}
                        <Switch />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    </>
}