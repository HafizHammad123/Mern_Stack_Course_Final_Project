import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import { Stack, Box, Typography, TextField, IconButton, Button, Avatar } from "@mui/material";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from "react-router-dom";

export default function PostDetail() {
    const [PostDetail, UpdatePostDetail] = useState([JSON.parse(localStorage.getItem('PostDetail'))])
    const [LatestPost, UpdateLatestPost] = useState([])
    useEffect(() => {
        const Post = JSON.parse(localStorage.getItem('PostDetail'))
        const UserID = Post.UserID
        const CallRelatedThreeLatestPost = async () => {
            const response = await fetch(`http://localhost:8000/User/LatestThreePost/${UserID}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
            const data = await response.json()
            UpdateLatestPost([...data])

        }
        CallRelatedThreeLatestPost()
    }, [])
    const LatestPostDetail = (item) => {
        localStorage.setItem("PostDetail", JSON.stringify(item))
        UpdatePostDetail([item])
    }
    return <>
        <Banner />
        <Stack flexDirection={"row"} flexWrap={"wrap"} position={"relative"} >
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
            <Box flex={"415px"} p={2} display={"flex"} justifyContent={"flex-end"} >
                <Box display={"flex"} flexDirection={"column"} gap={2} p={1} height={"440px"} position={"sticky"} top={2} sx={{ width: { md: "440px", xs: "100%" }, minHeight: "40px", backgroundColor: "#e6e6e7a1" }} fontFamily={"Raleway"} textAlign={"center"} >

                    <Box borderBottom={1} p={1} fontWeight={600} fontSize={"20px"} >User Latests Post</Box>
                    {
                        LatestPost.map(items =>
                        (
                            <Box display={"flex"} borderBottom={1} alignItems={"center"} gap={2} p={1} sx={{ cursor: "pointer" }} component={"div"} onClick={() => LatestPostDetail(items)}>
                                <Box><Avatar src={items.Image}></Avatar></Box>
                                <Box flex={1} textAlign={"left"}>{items.Title}</Box>
                            </Box>

                        ))
                    }


                </Box>
            </Box>

        </Stack>
        <Footer />
    </>
}