import React, { useState } from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import { Stack, Box, Typography, TextField, IconButton, Button } from "@mui/material";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from "react-router-dom";

export default function PostDetail() {
    const [PostDetail] = useState([JSON.parse(localStorage.getItem('PostDetail'))])
    return <>
        <Banner />
        <Stack flexDirection={"row"} flexWrap={"wrap"} >

            <Box flex={"415px"} p={2} display={"flex"} flexDirection={"column"} fontFamily={"Raleway"} rowGap={2} >
                {
                    PostDetail.map(Full_Detail =>
                    (
                        <>
                            <Box height={"400px"}
                                sx={
                                    {
                                        backgroundImage: `url(${Full_Detail.Image})`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                        backgroundPosition: "50% 50%"

                                    }
                                }><Box height={"100%"} sx={{ backgroundColor: "#585555a6" }} display={"flex"} flexDirection={"column"} justifyContent={"flex-end"} >
                                    <Typography component={"p"} variant="body1" color={"white"} paddingX={2} paddingY={"2px"} fontWeight={"bold"} display={"flex"} justifyContent={"flex-end"} marginBottom={2}>{Full_Detail.Title}</Typography>
                                </Box>
                            </Box>
                            <Box>{Full_Detail.Description}</Box>
                            <TextField label={"Comment"} multiline rows={2} disabled></TextField>
                            <Typography component={"h1"} variant="h5" color={"black"} fontWeight={"bold"} display={"flex"} justifyContent={"center"}>Share your post</Typography>
                            <Box display={"flex"} justifyContent={"center"} columnGap={3}>
                                <IconButton>
                                    <FacebookOutlinedIcon></FacebookOutlinedIcon>
                                </IconButton>
                                <IconButton>
                                    <InstagramIcon></InstagramIcon>
                                </IconButton>
                                <IconButton>
                                    <TwitterIcon></TwitterIcon>
                                </IconButton>


                            </Box>
                            <Link to={"/Blogs"}>
                                <Button variant="contained" color="warning">Back </Button>
                            </Link>

                        </>
                    ))
                }
            </Box>
            <Box flex={"415px"} p={2} display={"flex"} sx={{ justifyContent: { md: "flex-end" } }}>
                <Box sx={{ width: { md: "340px", xs: "100%" } }} fontFamily={"Raleway"} border={1} textAlign={"center"}>Related Post</Box>
            </Box>

        </Stack>
        <Footer />
    </>
}