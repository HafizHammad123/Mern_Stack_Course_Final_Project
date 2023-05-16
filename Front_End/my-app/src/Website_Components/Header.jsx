import { Stack, Box, Button, IconButton, Modal, Typography } from "@mui/material";
import ReorderIcon from '@mui/icons-material/Reorder';
import GoogleIcon from '@mui/icons-material/Google';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import React, { useState } from "react";
import Navbar from "./Navbar";
import Form from "../Form/Form";
export default function Header() {
    const [list, update_list] = useState(false)
    const [open, setopen] = useState(false)
    const [sign, update_sign] = useState(true)
    const Open_Nav = () => {
        if (list) {
            update_list(false)
        }
        else {
            update_list(true)
        }
    }
    const openAuthModal = () => {
        setopen(true)
    }

    const handleClose = () => {
        setopen(false)
        update_sign(true)
    }
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
        gap: "15px"
    };
    return <>
        <Stack position={"fixed"} width={"100%"} zIndex={1} borderColor={"#ffffff45"}>
            <Stack p={1} flexDirection={"row"} sx={{ justifyContent: { md: "flex-start", xs: "space-between" }, backgroundColor: '#2324254f' }}>

                <Box color="white" flex={3} display={"flex"} alignItems={"center"} gap={1} fontFamily={"Raleway"} textTransform={"uppercase"}><i class="fa-solid fa-blog"></i> Blog</Box>
                <Box display={"flex"} justifyContent={"center"} flex={4} sx={{
                    display: { md: 'flex', xs: 'none' }
                }}>
                    <Navbar></Navbar>
                </Box>
                <Box flex={1} display={"flex"} justifyContent={"center"} sx={{
                    display: { md: 'flex', xs: 'none' }
                }}>
                    <Button color="White" sx={{ paddingX: '15px' }} onClick={() => openAuthModal()}>Sign in</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style} component={"form"} autoComplete="off" id="form">

                            {
                                sign ?
                                    <>
                                        <Button variant="contained" color="secondary" sx={{ alignSelf: "center", borderRadius: "50%", paddingY: "10px", paddingX: "0px" }}>
                                            <LockOpenIcon />
                                        </Button>
                                        <Typography variant="h5" display={"flex"} justifyContent={"center"} fontWeight={"400"} textTransform={"capitalize"}>
                                            Sign in
                                        </Typography>
                                        <Form label={"Email"} type={"email"} />
                                        <Form label={"password"} type={"password"} />
                                        <Button variant="contained" >Sign in</Button>
                                        <Box display={"flex"} gap={1} sx={{ flexDirection: { sm: "row", xs: "column" } }} justifyContent={"space-between"}>

                                            <Box fontFamily={"Arial"} sx={{ textDecoration: "underline", alignSelf: "center", }} >Forgot password</Box>
                                            <Box fontFamily={"Arial"} sx={{ alignSelf: "center", textDecoration: "underline", cursor: "pointer", textAlign: "center" }} onClick={() => update_sign(false)}>Don,t have an account? sign up</Box>
                                        </Box>
                                    </>
                                    :
                                    <>
                                        <Button variant="contained" color="secondary" sx={{ alignSelf: "center", borderRadius: "50%", paddingY: "10px", paddingX: "0px" }}>
                                            <LockOpenIcon />
                                        </Button>
                                        <Typography variant="h5" display={"flex"} justifyContent={"center"} fontWeight={"400"} textTransform={"capitalize"}>
                                            sign up
                                        </Typography>
                                        <Form label={"Name"} />
                                        <Form label={"Email"} type={"email"} />
                                        <Form label={"password"} type={"password"} />
                                        <Form type={"file"}></Form>
                                        <Button variant="contained"  >Sign up</Button>
                                        <Button variant="contained" startIcon={<GoogleIcon />}>Sign up with Google</Button>
                                        <Box fontFamily={"Arial"} fontWeight={"400"} onClick={() => update_sign(true)} sx={{
                                            cursor
                                                : "pointer",
                                            textDecoration: "underline",
                                            alignSelf: { sm: "flex-end", xs: "center" },
                                            textAlign: "center"
                                        }}>
                                            Already have an account ? sign in
                                        </Box>
                                    </>





                            }







                        </Box>
                    </Modal>
                </Box>
                <Box sx={{
                    display: { md: 'none', xs: 'block' }
                }}><IconButton onClick={Open_Nav}>
                        <ReorderIcon color="White" />
                    </IconButton></Box>
            </Stack>

            <Stack sx={{ display: { md: "none" }, backgroundColor: '#000000e8', color: "white" }} position={"relative"} zIndex={4}>
                {
                    list ? <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                        <Navbar></Navbar>
                        <Button color="White" onClick={() => openAuthModal()}>Sign up</Button>

                    </Box> : null
                }
            </Stack>


        </Stack>
    </>
}