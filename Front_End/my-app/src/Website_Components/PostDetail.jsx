import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import { Stack, Box, Typography, TextField, IconButton } from "@mui/material";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function PostDetail({ single_post_info }) {
    console.log(single_post_info)

    return <>
        <Banner />
        <Stack flexDirection={"row"} >

            <Box flex={1} p={2} display={"flex"} flexDirection={"column"} fontFamily={"Raleway"} rowGap={2}>
                {
                    single_post_info.map(Full_Detail =>
                    (
                        <>
                            <Box height={"400px"}
                                sx={
                                    {
                                        backgroundImage: `url(${Full_Detail.urlToImage})`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                        backgroundPosition: "50% 50%"

                                    }
                                }><Box height={"100%"} sx={{ backgroundColor: "#585555a6" }} display={"flex"} flexDirection={"column"} justifyContent={"flex-end"} >
                                    <Typography component={"p"} variant="body1" color={"white"} paddingX={2} paddingY={"2px"} fontWeight={"bold"} display={"flex"} justifyContent={"flex-end"} marginBottom={2}>{Full_Detail.title}</Typography>
                                </Box>
                            </Box>
                            <Box>{Full_Detail.description}</Box>
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

                        </>
                    ))
                }
            </Box>
            <Box flex={1} p={2} display={"flex"} justifyContent={"flex-end"}>
                <Box width={"340px"} fontFamily={"Raleway"}>Related Post</Box>
            </Box>

        </Stack>
        <Footer />
    </>
}