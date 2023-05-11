import React from "react";
import Header from "./Header";
import SlideContent from "./Slide_Content";
import { Stack, Button, TextField, Box } from '@mui/material'
import Image from '../Website_Components/Images/Blogging.jpg'
import { useState } from "react";
export default function Banner() {
    const [urldoc] = useState(document.URL === 'http://localhost:3000/Blogs')
    console.log(urldoc)


    return <>
        <Stack height={"565px"} sx={{
            backgroundImage: `url(${Image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: "fixed"
        }}
        >   <Stack  height='100%' sx={{
            backgroundColor: '#000000b0',

        }}>
                <Header></Header>
                <Stack height={"100%"} justifyContent={"center"} p={2}  >
                    <SlideContent></SlideContent>
                    <Stack flexDirection={"row"} justifyContent={"center"}>
                        <Box width={"650px"} display={"flex"} justifyContent={"center"}>
                            {
                                urldoc ? <TextField fullWidth type="search" label="Search" sx={{ backgroundColor: "white", }} /> : <Button variant="outlined" color="White" sx={{ paddingX: "20px" }}>Contact us </Button>
                            }



                        </Box>
                    </Stack>
                </Stack>
            </Stack>

        </Stack>


    </>
}