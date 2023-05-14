import React from "react";
import { List, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import CommentIcon from '@mui/icons-material/Comment';
import HelpIcon from '@mui/icons-material/Help';
import { Link } from 'react-router-dom'

export default function NavbarMobileWeb() {
    return <>

        <List sx={{ display: { md: "none", xs: "flex" }, justifyContent: "space-between"}} >
            <ListItem sx={{border:"1px solid black",justifyContent:'center',paddingX:'0px'}} >
                <Link to={"/Dashboard"}>
                    <ListItemButton>
                        <ListItemIcon sx={{paddingX:"0px",minWidth:'0px'}}>
                            <DashboardIcon />
                        </ListItemIcon>
                    </ListItemButton>
                </Link>
            </ListItem>

            <ListItem sx={{border:"1px solid black",justifyContent:'center',paddingX:'0px'}}>
                <Link to={"/MyBlogs"}>
                    <ListItemButton>
                        <ListItemIcon  sx={{paddingX:"0px",minWidth:'0px'}}>
                            <i class="fa-solid fa-blog"></i>
                        </ListItemIcon>
                    </ListItemButton>
                </Link>
            </ListItem>

            <ListItem sx={{border:"1px solid black",justifyContent:'center',paddingX:'0px'}}>
                <Link to={"/Comments"}>
                    <ListItemButton >
                        <ListItemIcon  sx={{paddingX:"0px",minWidth:'0px'}}>
                            <CommentIcon />
                        </ListItemIcon>
                    </ListItemButton>
                </Link>
            </ListItem>

            <ListItem sx={{border:"1px solid black",justifyContent:'center',paddingX:'0px'}}>
                <Link to={"/Help_Desk"}>
                    <ListItemButton>
                        <ListItemIcon  sx={{paddingX:"0px",minWidth:'0px'}}>
                            <HelpIcon />
                        </ListItemIcon>
                    </ListItemButton>
                </Link>
            </ListItem>

                    </List>
    </>
}