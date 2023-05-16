import React, { useState } from "react";
import HeaderWebApp from "../Web_App_Components/Header_WebApp";
import SideNavWebApp from "../Web_App_Components/Side_Navbar";
import FooterWebApp from "../Web_App_Components/Footer_WebApp";
import NavbarMobileWeb from "../Web_App_Components/Navbar_Mobile";
import { Stack, Box, TextField, Avatar, Typography } from '@mui/material'
import ShowUserOwnBlogs from "../Web_App_Components/Show_User_Blogs";
import Modal from '@mui/material/Modal';
import { useActionData, useLinkClickHandler } from "react-router-dom";
import'./myblogform.css'

export default function MyBlogs() {
    const [open, setopen] = useState(false)
    const OpenModal = () => {
        setopen(true)
    }
    const handleClose = () => {
        setopen(false)
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      };
      
    return <>
        <HeaderWebApp />
        <NavbarMobileWeb />
        <Stack flexDirection={"row"}  >
            <SideNavWebApp />
            <Stack sx={{ paddingX: { md: "0px", xs: "15px" } }} paddingY={2} spacing={2} flex={4} alignItems={"center"} >
                <Box sx={{ width: { lg: "540px", md: "460px" } }} display={"flex"} flexDirection={"column"} gap={2}>

                    <TextField label="Search" type={"search"} />
                    <Stack flexDirection={"row"} gap={1}>
                        <Avatar></Avatar>
                        <Box onClick={() => OpenModal()} sx={{ cursor: "pointer" }} border={1} flex={1} display={"flex"} alignItems={"center"} fontFamily={"Raleway"} paddingX={2} borderRadius={3}>What,s on your mind</Box>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                            <Typography variant="h5" display={"flex"} justifyContent={"center"} border={1}>Blogs Post Form</Typography>
                        <div className="aq">
<input class="g" type="text"  placeholder="Author Name"/>
<input class="g" type="text" placeholder="Title"/>
<input class="g" type="text" placeholder="description"/>
<input class="g" type="text" placeholder="Upload Image"/>
<button>Publish Blog</button>

                        </div>
                            </Box>
                        </Modal>
                    </Stack>
                    <Box display={"flex"} flexDirection={"column"} gap={3}>
                        <ShowUserOwnBlogs />
                    </Box>
                </Box>

            </Stack>
            <Box fontFamily={"Raleway"} p={2} sx={{ backgroundColor: "#ebebeb", flex: { lg: "2", md: "1", sm: "2" } }}>
                Right Bar
            </Box>
        </Stack>






        <FooterWebApp />
    </>
}