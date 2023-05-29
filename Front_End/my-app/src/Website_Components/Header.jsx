import { Stack, Box, Button, IconButton, Modal, Typography, TextField } from "@mui/material";
import ReorderIcon from '@mui/icons-material/Reorder';
import GoogleIcon from '@mui/icons-material/Google';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import React, { useState } from "react";
import Navbar from "./Navbar";
import Signup from "../Auth/Signup";
import Signin from "../Auth/Signin";
import { useSelector, useDispatch } from "react-redux";
import { Resetdata } from "../Redux/AuthReducers/SignupFormReducer";
import { LoggedIn } from '../Redux/ProtectRoutesReducers/ProtectRoutes'
import { LogIn } from '../Redux/AuthReducers/LoginReducers'
import { useNavigate } from "react-router-dom";
export default function Header() {
    const Dispatch = useDispatch()
    const navigate = useNavigate()
    const Signupformstate = useSelector((state) => state.Signup)
    const LoginFormState = useSelector((state) => state.Login)
    const { NameSignup, EmailSignup, PasswordSignup } = Signupformstate
    const { Emailsignin, Passwordsignin } = LoginFormState
    const [list, update_list] = useState(false)
    const [open, setopen] = useState(false)
    const [sign, update_sign] = useState(true)
    const [focusState, setfocus] = useState(false)
    const [Record_Insert, Update_Insert] = useState(false)
    const [PasswordNot, UpdatePassword] = useState(false)
    const [AccountNotExits, UpdateAccountNotExits] = useState(false)
    const [SimepleSignup, updateSimpleSign] = useState(true)

   
    const SubmitSignup = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch("http://localhost:8000/User/Signup",
                {
                    method: "POST",
                    body: JSON.stringify(Signupformstate),
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            )
            const actual_res = await response.json()
            if (actual_res.message === "Successfully inserted record") {
                Dispatch(Resetdata())
                setfocus(false)
                update_sign(true)
                Update_Insert(true)
                setTimeout(() => {
                    Update_Insert(false)
                }, 1500);
            }
            else {
                alert(actual_res.message)
                setfocus(true)


            }

        } catch (error) {
            console.log(error)
        }

    }
    const SubmitSignin = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch("http://localhost:8000/User/Signin",
                {
                    method: "post",
                    body: JSON.stringify(LoginFormState),
                    headers: {
                        "Content-Type": "application/json",

                    }
                }
            )
            const data = await res.json()
            if (data.message === 'Password Does Not Match') {
                UpdatePassword(true)
                setTimeout(() => {
                    UpdatePassword(false)
                }, 1500)
            }
            else if (data.message === 'Email Not Found Create First Account') {
                UpdateAccountNotExits(true)
                setTimeout(() => {
                    UpdateAccountNotExits(false)
                }, 1500)
            }
            else {
                localStorage.setItem("SecretKey", JSON.stringify(data))
                Dispatch(LoggedIn(localStorage.getItem('SecretKey')));
                Dispatch(LogIn());
                setopen(false);
                navigate('/Dashboard')

            }


        } catch (error) {
            console.log(error)

        }


    }
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
        gap: 3
    };


    return <>
        <Stack position={"fixed"} width={"100%"} zIndex={1} borderColor={"#ffffff45"}>
            <Stack p={1} flexDirection={"row"} sx={{ justifyContent: { md: "flex-start", xs: "space-between" }, backgroundColor: '#2324254f' }}>
                {
                    Record_Insert && <Box position={"absolute"} zIndex={"12000"} border={1} color={"black"} fontFamily={"Raleway"} p={2} left={"50%"} sx={{ transform: 'translate(-50%)', backgroundColor: "white" }} >Successfully inserted record</Box>

                }

                {
                    PasswordNot && <Box position={"absolute"} zIndex={"12000"} border={1} color={"black"} fontFamily={"Raleway"} p={2} left={"50%"} sx={{ transform: 'translate(-50%)', backgroundColor: "white" }} >Password Does Not Match</Box>

                }

                {
                    AccountNotExits && <Box position={"absolute"} zIndex={"12000"} border={1} color={"black"} fontFamily={"Raleway"} p={2} left={"50%"} sx={{ transform: 'translate(-50%)', backgroundColor: "white" }} >Email Not Found Create First Account</Box>

                }

                <Box color="white" flex={3} display={"flex"} alignItems={"center"} gap={1} fontFamily={"Raleway"} textTransform={"uppercase"}><i class="fa-solid fa-blog"></i> Blog </Box>
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

                        <Box sx={style} >

                            {
                                sign ?
                                    <>
                                        {

                                            SimepleSignup ?
                                                <>
                                                    <Button variant="contained" color="secondary" sx={{ alignSelf: "center", borderRadius: "50%", paddingY: "10px", paddingX: "0px" }}>
                                                        <LockOpenIcon />
                                                    </Button>
                                                    <Typography variant="h5" display={"flex"} justifyContent={"center"} fontWeight={"400"} textTransform={"capitalize"}>
                                                        Sign in
                                                    </Typography>
                                                    <Box display={"flex"} flexDirection={"column"} gap={3} component={"form"} id={"Signin"} onSubmit={SubmitSignin}>
                                                        <Signin label={"Email Sign in"} type={"email"} name={"Emailsignin"} value={Emailsignin} />
                                                        <Signin label={"password Sign in"} type={"password"} name={"Passwordsignin"} value={Passwordsignin} />
                                                    </Box>
                                                    <Button variant="contained" form="Signin" type="submit">Sign in</Button>
                                                    <Box display={"flex"} gap={1} sx={{ flexDirection: { sm: "row", xs: "column" } }} justifyContent={"space-between"}>

                                                        <Box fontFamily={"Arial"} sx={{ textDecoration: "underline", alignSelf: "center", cursor: "pointer" }} onClick={() => updateSimpleSign(false)} >Forgot password</Box>
                                                        <Box fontFamily={"Arial"} sx={{ alignSelf: "center", textDecoration: "underline", cursor: "pointer", textAlign: "center" }} onClick={() => update_sign(false)}>Don,t have an account? sign up</Box>
                                                    </Box>
                                                </>
                                                :
                                                <>

                                                    <Typography variant="h5" display={"flex"} justifyContent={"center"} fontWeight={"400"} textTransform={"capitalize"}>
                                                        ForGet Password
                                                    </Typography>
                                                    <Box display={"flex"} flexDirection={"column"} gap={3} component={"form"} id={"forgetpassword"} >
                                                        <TextField label="Enter Existing Email" type="Email" required />
                                                        <TextField label="password" type="password" required />
                                                    </Box>
                                                    <Button variant="contained" form="forgetpassword" type="submit">Forget password</Button>

                                                </>

                                        }

                                    </>
                                    :
                                    <>
                                        <Button variant="contained" color="secondary" sx={{ alignSelf: "center", borderRadius: "50%", paddingY: "10px", paddingX: "0px" }}>
                                            <LockOpenIcon />
                                        </Button>
                                        <Typography variant="h5" display={"flex"} justifyContent={"center"} fontWeight={"400"} textTransform={"capitalize"}>
                                            sign up
                                        </Typography>
                                        <Box display={"flex"} flexDirection={"column"} gap={3} component={"form"} onSubmit={SubmitSignup} id={"Signup"}>
                                            <Signup label={"Name Sign up"} value={NameSignup} name={"NameSignup"} />
                                            <Signup label={"Email Sign up"} value={EmailSignup} name={"EmailSignup"} type={"email"} focus={focusState ? true : false} />
                                            <Signup label={"password Sign up"} value={PasswordSignup} name={"PasswordSignup"} type={"password"} />
                                        </Box>
                                        <Button variant="contained" type="submit" form={"Signup"} >Sign up</Button>
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