import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import CommentIcon from '@mui/icons-material/Comment';
import HelpIcon from '@mui/icons-material/Help';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import ViewListIcon from '@mui/icons-material/ViewList';
import { Link } from 'react-router-dom'
import React from "react";
export default function SideNavWebApp() {
    return <>
        <Box flex={1} border={1} color={"black"} >
            <List >
                <ListItem sx={{ "a": { textDecoration: "none", flexGrow: 1 } }}>
                    <Link to={"/Dashboard"}>
                        <ListItemButton>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" sx={{ "span": { fontFamily: "Raleway", fontWeight: "600" }, color: "black", }} />
                        </ListItemButton>
                    </Link>
                </ListItem>

                <ListItem sx={{ "a": { textDecoration: "none", flexGrow: 1 } }}>
                    <Link to={"/MyBlogs"}>
                        <ListItemButton>

                            <ListItemIcon>
                                <ViewListIcon />
                            </ListItemIcon>
                            <ListItemText primary="My Blogs" sx={{ "span": { fontFamily: "Raleway", fontWeight: "600", color: "black" } }} />
                        </ListItemButton>
                    </Link>
                </ListItem>

                <ListItem sx={{ "a": { textDecoration: "none", flexGrow: 1 } }}>
                    <Link to={"/Comments"}>
                        <ListItemButton >
                            <ListItemIcon>
                                <CommentIcon />
                            </ListItemIcon>
                            <ListItemText primary="Comments" sx={{ "span": { fontFamily: "Raleway", fontWeight: "600", color: "black" } }} />
                        </ListItemButton>
                    </Link>
                </ListItem>

                <ListItem sx={{ "a": { textDecoration: "none", flexGrow: 1 } }}>
                    <Link to={"/Help_Desk"}>
                        <ListItemButton>
                            <ListItemIcon>
                                <HelpIcon />
                            </ListItemIcon>
                            <ListItemText primary="Help Desk" sx={{ "span": { fontFamily: "Raleway", fontWeight: "600", color: "black" } }} />
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