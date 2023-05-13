import React from "react";
import Header from "./Header";
import SlideContent from "./Slide_Content";
import { Stack, Button, TextField, Box } from '@mui/material'
import Image from '../Website_Components/Images/Blogging.jpg'
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Banner() {
    const [urldoc] = useState(document.URL === 'http://localhost:3000/Blogs' || document.URL==='http://localhost:3000/Post_Detail')


    return <>
        <Stack height={"500px"} sx={{
            backgroundImage: `url(${Image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: "fixed"
        }}
        >   <Stack  height='100%' sx={{
            backgroundColor: '#000000b0',
            position:'relative'

        }}>
                <Header></Header>
                <Stack height={"100%"} justifyContent={"center"}  p={2}  >
                    <SlideContent></SlideContent>
                    <Stack flexDirection={"row"} justifyContent={"center"}>
                        <Box width={"650px"} display={"flex"} justifyContent={"center"}>
                            {
                                urldoc ? <TextField fullWidth type="search" label="Search" sx={{ backgroundColor: "white", }} /> :<Link to="/Contact_us">
                                    <Button variant="outlined" color="White" sx={{ paddingX: "20px" }}>Contact us </Button>
                                    </Link> 
                            }



                        </Box>
                    </Stack>
                </Stack>
            </Stack>

        </Stack>


    </>
}