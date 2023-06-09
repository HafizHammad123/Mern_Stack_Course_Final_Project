import React, { useEffect, useState } from "react";
import HeaderWebApp from "../Web_App_Components/Header_WebApp";
import SideNavWebApp from "../Web_App_Components/Side_Navbar";
import FooterWebApp from "../Web_App_Components/Footer_WebApp";
import NavbarMobileWeb from "../Web_App_Components/Navbar_Mobile";
import { Stack, Box, Avatar, TextField, Button, Modal, Typography } from '@mui/material'
import { useSelector, useDispatch } from "react-redux";
import { StoreImagePath } from '../Redux/UserProfileImages/UserProfileImages'
import EditIcon from '@mui/icons-material/Edit';
export default function MyProfile() {
    const Dispatch = useDispatch()
    const [open, setopen] = useState(false)
    const [profileImage, UpdateProfileImage] = useState('')
    const UserImage = useSelector((state) => state.UserImage)
    const [storevalueofimage, updatestoreimagevalue] = useState('')
    const token = JSON.parse(localStorage.getItem('SecretKey'));
    const SecretToken = `Bearer ${token.SecretToken}`
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
    const SubmitProfileImage = async (e) => {
        updatestoreimagevalue('')
        e.preventDefault()
        const formdata = new FormData()
        formdata.append("Profilename", profileImage)
        formdata.append("ID", token.ID)
        const response = await fetch('http://localhost:8000/User/Profile/Image',
            {
                method: "POST",
                body: formdata,
                headers:
                {
                    //   "Content-Type": "application/json",
                    'Authorization': SecretToken
                }
            })
        const data = await response.json()
        Dispatch(StoreImagePath(`http://localhost:8000/${data.UserProfile}`))


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
                        src={UserImage}
                        sx={{ width: "100%", height: "100%" }}
                    />

                </Box>
                <Box display={"flex"} flexDirection={"column"} gap={3} component={"form"} id={"ChangeProfileImage"} onSubmit={SubmitProfileImage}>
                    <TextField name="Profilename" type="file" value={storevalueofimage} onChange={(e) => {
                        UpdateProfileImage(e.target.files[0])
                        updatestoreimagevalue(e.target.value)
                    }
                    } required />
                </Box>
                <Button variant="contained" type="submit" form={"ChangeProfileImage"}>Submit</Button>


                <Button startIcon={<EditIcon />} variant="contained" onClick={OpenEditForm}>Edit Profile</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} >
                        <Typography variant="h5" component={"h1"} display={"flex"} justifyContent={"center"} > Edit Profile Form</Typography>
                        <Box display={"flex"} flexDirection={"column"} gap={3} component={"form"} id={"EditProfile"} >
                            <TextField label="Email" type={"email"} required></TextField>
                            <TextField label="Name" required ></TextField>
                        </Box>
                        <Button startIcon={<EditIcon />} variant="contained" type="submit" form="EditProfile">Edit Profile</Button>


                    </Box>
                </Modal>
            </Stack>
        </Stack>
        <FooterWebApp />
    </>
}