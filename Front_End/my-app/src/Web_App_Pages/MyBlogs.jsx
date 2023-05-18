import React, { useState } from "react";
import HeaderWebApp from "../Web_App_Components/Header_WebApp";
import SideNavWebApp from "../Web_App_Components/Side_Navbar";
import FooterWebApp from "../Web_App_Components/Footer_WebApp";
import NavbarMobileWeb from "../Web_App_Components/Navbar_Mobile";
import { Stack, Box, TextField, Avatar, Typography, Button } from '@mui/material'
import ShowUserOwnBlogs from "../Web_App_Components/Show_User_Blogs";
import Form from "../Form/Form";
import Modal from '@mui/material/Modal';

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
        width: 500,
        maxWidth: "100%",
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: "15px"
    };

    return <>
        <HeaderWebApp />
        <NavbarMobileWeb />
        <Stack flexDirection={"row"} sx={{ justifyContent: { md: "flex-end" } }}  >
            <SideNavWebApp />
            <Stack sx={{ width: { lg: "80%", md: "75%", xs: "100%" } }}  >


                <Stack display={"flex"} flexDirection={"column"} gap={2} paddingY={"10px"} paddingX={"10px"}>


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
                                <Typography variant="h5" display={"flex"} justifyContent={"center"} fontFamily={"Raleway"} fontWeight={"600"} >
                                    Create Post
                                </Typography>
                                <Box component={"form"} id="BlogForm" display={"flex"} flexDirection={"column"} gap={2}>
                                    <Form label={"Author Name"} />
                                    <Form label={"Title"} />
                                    <Form label={"Description"} />
                                    <Form type={"file"} />
                                </Box>
                                <Button variant="contained" color="secondary" sx={{ alignSelf: "flex-end" }} type="submit" form="BlogForm">Publish Post</Button>






                            </Box>
                        </Modal>
                    </Stack>
                    <Box display={"flex"} flexDirection={"row"} gap={3} flexWrap={"wrap"}>
                        <ShowUserOwnBlogs />
                    </Box>


                </Stack>



            </Stack>
        </Stack>
        <FooterWebApp />
    </>
}