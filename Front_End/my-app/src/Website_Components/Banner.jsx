import React from "react";
import Header from "./Header";
import TypingContent from "./Typing_Content";
import { Stack, Button, TextField, Box } from '@mui/material'
import Image from '../Website_Components/Images/Blogging.jpg'
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { StoreFetchUserBlog } from '../Redux/FetchBlogs/fetchblogreducer'
export default function Banner() {
    const FetchUserClient = useSelector((state) => state.FetchBlogClient)
    console.log(FetchUserClient)
    const StoreAllUserBlogs = useSelector((state) => state.StoreAllUserBlogs)
    const CopyFetchBlogForRendering = useSelector((state) => state.CopyFetchBlogForRendering)
    const Dispatch = useDispatch()
    const [storesearchvalue, updatesearchvalue] = useState('')
    const [urldoc] = useState(document.URL === 'http://localhost:3000/Blogs' || document.URL === 'http://localhost:3000/Post_Detail')

    const Changevalue = (e) => {
        updatesearchvalue(e.target.value)

    }
    const KeyDown = (e) => {
        if (e.key === 'Enter') {
            const return_arr = StoreAllUserBlogs.filter(Element => {
                return Element.Author_Name.toLowerCase().indexOf(storesearchvalue.toLowerCase()) !== -1 || Element.Title.toLowerCase().indexOf(storesearchvalue.toLowerCase()) !== -1 || Element.Description.toLowerCase().indexOf(storesearchvalue.toLowerCase()) !== -1
            })
            console.log(return_arr)
            Dispatch(StoreFetchUserBlog(return_arr))
        }
        else if (e.key === 'Backspace') {
            const value = e.target.value
            const slice_data = value.slice(0, value.length - 1)
            if (slice_data.length === 0) {
                Dispatch(StoreFetchUserBlog(CopyFetchBlogForRendering))
            }
            else {
                console.log(storesearchvalue)

                const return_arr = StoreAllUserBlogs.filter(Element => {
                    return Element.Author_Name.toLowerCase().indexOf(slice_data.toLowerCase()) !== -1 || Element.Title.toLowerCase().indexOf(slice_data.toLowerCase()) !== -1 || Element.Description.toLowerCase().indexOf(slice_data.toLowerCase()) !== -1
                })
                console.log(return_arr)
                Dispatch(StoreFetchUserBlog(return_arr))
            }
        }

    }

    return <>
        <Stack height={"500px"} sx={{
            backgroundImage: `url(${Image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundAttachment: "fixed"
        }}
        >   <Stack height='100%' sx={{
            backgroundColor: '#000000b0',
            position: 'relative'

        }}>
                <Header></Header>
                <Stack height={"100%"} justifyContent={"center"} p={2}  >
                    <TypingContent></TypingContent>
                    <Stack flexDirection={"row"} justifyContent={"center"}>
                        <Box width={"650px"} display={"flex"} justifyContent={"center"}>
                            {
                                urldoc ? <TextField fullWidth type="search" label="Search" sx={{ backgroundColor: "white", }} onChange={Changevalue} onKeyDown={KeyDown} /> : <Link to="/Contact_us">
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