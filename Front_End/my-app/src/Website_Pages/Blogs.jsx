import React, { Fragment, useEffect } from "react";
import Banner from "../Website_Components/Banner";
import Footer from "../Website_Components/Footer";
import { Container, Stack, Box } from "@mui/system";
import { Button, Pagination, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { StoreFetchUserBlog } from '../Redux/FetchBlogs/fetchblogreducer'
import { StoreAllUserBlogsForSearch } from '../Redux/FetchBlogs/StoreAllUserblogs'
import { Copyforrendering } from '../Redux/FetchBlogs/Copyoffetchblogreducer'
export default function Blogs() {
    const FetchUserClient = useSelector((state) => state.FetchBlogClient)
    const Dispatch = useDispatch()
    const Navigate = useNavigate()
    useEffect(() => {
        localStorage.removeItem('PostDetail')
        const fetchAPi = async () => {
            try {
                const response = await fetch('http://localhost:8000/User/All/Blogs', {
                    header: 'content-type: application/json'
                })
                if (response.status !== 200) {
                    throw new Error("error")
                }
                const actual_res = await response.json()
                Dispatch(StoreFetchUserBlog(actual_res.LatestBlogs))
                Dispatch(StoreAllUserBlogsForSearch(actual_res.FindAllBlog))
                Dispatch(Copyforrendering(actual_res.LatestBlogs))

            } catch (error) {
                console.log(error)
            }



        }
        fetchAPi()

    }, [])
    const PostDetail = (post_detail) => {
        localStorage.setItem("PostDetail", JSON.stringify(post_detail))
        Navigate('/Post_Detail')
    }
    const ChangePagination = async (e) => {
        if (e.target.textContent === "1") {
            try {
                const response = await fetch('http://localhost:8000/User/All/Blogs', {
                    header: 'content-type: application/json'
                })
                if (response.status !== 200) {
                    throw new Error("error")
                }
                const actual_res = await response.json()
                console.log(actual_res.LatestBlogs)
                Dispatch(StoreFetchUserBlog(actual_res.LatestBlogs))
                Dispatch(StoreAllUserBlogsForSearch(actual_res.FindAllBlog))
                Dispatch(Copyforrendering(actual_res.LatestBlogs))

            } catch (error) {
                console.log(error)
            }

        }
        else if (e.target.textContent === '2') {
            try {
                const response = await fetch('http://localhost:8000/User/Pagination', {
                    header: 'content-type: application/json'
                })
                if (response.status !== 200) {
                    throw new Error("error")
                }
                const actual_res = await response.json()
                Dispatch(StoreFetchUserBlog(actual_res.OldBlogs))
                Dispatch(StoreAllUserBlogsForSearch(actual_res.FindAllBlog))
                Dispatch(Copyforrendering(actual_res.OldBlogs))

            } catch (error) {
                console.log(error)
            }

        }

    }

    return <>
        <Banner></Banner>
        <Stack marginY={2} marginBottom={2} sx={{ backgroundColor: "#ababab73" }}>
            <Container sx={{ display: "flex", flexWrap: "wrap", columnGap: "8px", rowGap: "10px", paddingX: { sm: "0px" }, paddingY: '20px' }}>
                {
                    FetchUserClient.map(Post_Items =>
                    (
                        <Fragment>
                            <Stack component={"div"} className="div"    p={2} rowGap={2} fontFamily={"Raleway"} sx={{ backgroundColor: "#ffff", flex: { md: "360px" } }} >
                                <Box>{Post_Items.Description}</Box>
                                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                                    <Box display={"flex"} flexDirection={"column"} rowGap={1}>
                                        <Typography variant="h6" component={"h1"}>Author Name</Typography>
                                        <Typography variant="body1" component={"p"}>{Post_Items.Author_Name}</Typography>
                                        <Typography variant="h6" component={"h1"}>PublishedAt</Typography>
                                        <Typography variant="body1" component={"p"}>{Post_Items.Publish_Date}</Typography>
                                    </Box>
                                    <Box width={"70px"} borderRadius={"50%"} height={"70px"} sx={{
                                        backgroundImage: `url(${Post_Items.Image})`,
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
            <Box display={"flex"} justifyContent={"center"} marginBottom={2}>
                <Pagination count={2} onChange={ChangePagination} />
            </Box>
        </Stack>
        <Footer></Footer>
    </>
}