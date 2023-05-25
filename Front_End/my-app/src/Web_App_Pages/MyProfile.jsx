import React, { useState } from "react";
import HeaderWebApp from "../Web_App_Components/Header_WebApp";
import SideNavWebApp from "../Web_App_Components/Side_Navbar";
import FooterWebApp from "../Web_App_Components/Footer_WebApp";
import NavbarMobileWeb from "../Web_App_Components/Navbar_Mobile";
import { Stack, Box, Avatar, TextField, Button, Modal, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
export default function MyProfile() {
    const [open, setopen] = useState(false)
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 450,
        maxWidth: "100%",
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 3
    };
    const handleClose = () => {
        setopen(false)

    }
    const OpenEditForm = () => {
        setopen(true)
    }
    return <>
        <HeaderWebApp />
        <NavbarMobileWeb />
        <Stack flexDirection={"row"} justifyContent={"flex-end"} >
            <SideNavWebApp />
            <Stack alignItems={"center"} fontFamily={"Raleway"} sx={{ width: { lg: "900px", md: "600px", xs: "100%" } }} p={2} gap={2}>
                <Box width={"150px"} height={"150px"} borderRadius={"50%"} >
                    <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: "100%", height: "100%" }}
                    />

                </Box>
                <TextField type="file" />
                <Button startIcon={<EditIcon />} variant="contained" onClick={OpenEditForm}>Edit Profile</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} >
                        <Typography variant="h5" component={"h1"} display={"flex"} justifyContent={"center"} > Edit Profile Form</Typography>

                        <TextField label="Email" type={"email"}></TextField>
                        <TextField label="Name" ></TextField>

                        <Button startIcon={<EditIcon />} variant="contained">Edit Profile</Button>


                    </Box>
                </Modal>
            </Stack>
        </Stack>
        <FooterWebApp />
    </>
}