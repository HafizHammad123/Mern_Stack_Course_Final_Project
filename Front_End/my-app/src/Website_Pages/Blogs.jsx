import React, { Fragment, useEffect, useState } from "react";
import Banner from "../Website_Components/Banner";
import Footer from "../Website_Components/Footer";
import { Container, Stack, Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Blogs({single_post}) {
    const [Post, Update_Post] = useState([])
    const Navigate = useNavigate()
    useEffect(() => {
        const fetchAPi = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=8a42216dc768443b8d5de8be08dbf20d', {
                    header: 'content-type: application/json'
                })
                if (response.status !== 200) {
                    throw new Error("error")
                }
                const actual_res = await response.json()
                Update_Post([...actual_res.articles])

            } catch (error) {
                console.log(error)
            }



        }
        fetchAPi()

    }, [])
    const PostDetail = (post_detail) => {
        single_post([post_detail])
        Navigate('/Post_Detail')
    }


    return <>
        <Banner></Banner>
        <Stack marginY={2} sx={{ backgroundColor: "#ababab73" }}>
            <Container sx={{ display: "flex", flexWrap: "wrap", columnGap: "8px", rowGap: "10px", paddingX: { sm: "0px" }, paddingY: '20px' }}>
                {
                    Post.map(Post_Items =>
                    (
                        <Fragment>
                            <Stack  p={2} rowGap={2} fontFamily={"Raleway"} sx={{ backgroundColor: "#ffff", flex:{md:"360px"} }} >
                                <Box>{Post_Items.description}</Box>
                                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                                    <Box display={"flex"} flexDirection={"column"} rowGap={1}>
                                        <Typography variant="h6" component={"h1"}>Author Name</Typography>
                                        <Typography variant="body1" component={"p"}>{Post_Items.author}</Typography>
                                        <Typography variant="h6" component={"h1"}>PublishedAt</Typography>
                                        <Typography variant="body1" component={"p"}>{Post_Items.publishedAt}</Typography>
                                    </Box>
                                    <Box width={"70px"} borderRadius={"50%"} height={"70px"} sx={{
                                        backgroundImage: `url(${Post_Items.urlToImage})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                    }}>

                                    </Box>
                                </Box>
                                <Button variant="contained" sx={{ alignSelf: "flex-end", marginBottom: "5px" }} onClick={() => PostDetail(Post_Items)}>Read More</Button>
                            </Stack>
                        </Fragment>
                    ))
                }
            </Container>
        </Stack>

        <Footer></Footer>


    </>
}