import HeaderWebApp from "../Web_App_Components/Header_WebApp";
import SideNavWebApp from "../Web_App_Components/Side_Navbar";
import FooterWebApp from "../Web_App_Components/Footer_WebApp";
import NavbarMobileWeb from "../Web_App_Components/Navbar_Mobile";
import { Stack, Box, TextField, Avatar, Typography, Button } from '@mui/material'
import ShowUserOwnBlogs from "../Web_App_Components/Show_User_Blogs";
import Form from "../Form/Form";
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from "react-redux";
import { Submit } from '../Redux/BlogsReducers/BlogFormreducer1'
import { CreatePostStore } from '../Redux/BlogsReducers/StoreBlogReducer'
import { OpenModal, BlogPublished } from '../Redux/BlogsReducers/BlogRelatedReducer'
import { Change } from '../Redux/BlogsReducers/BlogFormreducer1'
import { FetchAllBlogs } from '../Redux/BlogsReducers/StoreBlogReducer';
import { CreatePostStoreForSearch,FetchAllBlogsForSearch} from '../Redux/BlogsReducers/StoreBlogsPostSearch'
import { useState } from "react";

export default function MyBlogs() {
    const Dispatch = useDispatch()
    const [StoreFilterPost,UpdateFilterPost]=useState('')
    const BlogFieldData = useSelector((state) => state.BlogForm)
    const BlogRelatedStates = useSelector((state) => state.BlogRelatedStates)
    const StoreForSearchingBlog=useSelector((state)=>state.StoreForSearchingBlog)
    const { ModalStates, BlogPublishButton } = BlogRelatedStates
    const { Author_Name, Title, Description } = BlogFieldData
    const token = JSON.parse(localStorage.getItem('SecretKey'));
    const SecretToken = `Bearer ${token.SecretToken}`

    console.log(StoreForSearchingBlog)

    const handleClose = () => {
        Dispatch(BlogPublished())
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        maxWidth: "100%",
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: "15px"
    };
    const PublishPost = async (e) => {
        e.preventDefault()
        try {
            const Response = await fetch('http://localhost:8000/User/Create/Post',
                {
                    method: 'POST',
                    body: JSON.stringify({ BlogData: BlogFieldData, ID: token.ID }),
                    headers:
                    {
                        "Content-Type": "application/json",
                        'Authorization': SecretToken
                    }

                })
            const data = await Response.json()
            Dispatch(BlogPublished())
            Dispatch(Submit())
            Dispatch(CreatePostStore(data))
            Dispatch(CreatePostStoreForSearch(data))
            

        } catch (error) {
            console.log(error)
        }

    }
    const Base64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => { resolve(reader.result) };
            reader.onerror = (error) => reject(error)
        })
    }
    const UpdatePost=async(e)=>
    {
        e.preventDefault()
        try {
            const Response = await fetch('http://localhost:8000/User/Update/Post',
                {
                    method: 'PUT',
                    body: JSON.stringify({ BlogData: BlogFieldData }),
                    headers:
                    {
                        "Content-Type": "application/json",
                        'Authorization': SecretToken
                    }

                })
            const data = await Response.json()
            console.log(data.findall)
            Dispatch(BlogPublished())
            Dispatch(Submit())
            Dispatch(FetchAllBlogs(data.findall))
            Dispatch(FetchAllBlogsForSearch(data.findall))

        } catch (error) {
            console.log(error)
        }
    }
    const Changevalue=(e)=>
    {
        console.log(e.target.value)
    }
    const KeyDown=(e)=>
    {
     if(e.key=='Enter')
     {
        console.log(e.key)
     }  
     
    }

    return <>
        <HeaderWebApp />
        <NavbarMobileWeb />
        <Stack flexDirection={"row"} sx={{ justifyContent: { md: "flex-end" } }}  >
            <SideNavWebApp />
            <Stack sx={{ width: { lg: "80%", md: "75%", xs: "100%" } }}  >
                <Stack display={"flex"} flexDirection={"column"} gap={2} paddingY={"10px"} paddingX={"10px"}>
                    <TextField label="Search" type={"search"} onChange={Changevalue} onKeyDown={KeyDown}/>
                    <Stack flexDirection={"row"} gap={1}>
                        <Avatar></Avatar>
                        <Box onClick={() => Dispatch(OpenModal())} sx={{ cursor: "pointer" }} border={1} flex={1} display={"flex"} alignItems={"center"} fontFamily={"Raleway"} paddingX={2} borderRadius={3}>What,s on your mind</Box>
                        <Modal
                            open={ModalStates}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography variant="h5" display={"flex"} justifyContent={"center"} fontFamily={"Raleway"} fontWeight={"600"} >
                                    Create Post
                                </Typography>
                                <Box component={"form"} id="BlogForm" display={"flex"} flexDirection={"column"} gap={2} onSubmit={BlogPublishButton ? PublishPost:UpdatePost}>
                                    <Form label={"Author Name"} value={Author_Name} name={'Author_Name'} onChange={(e) => Dispatch(Change({ [e.target.name]: e.target.value }))} />
                                    <Form label={"Title"} value={Title} name={'Title'} onChange={(e) => Dispatch(Change({ [e.target.name]: e.target.value }))} />
                                    <Form label={"Description"} value={Description} name={'Description'} onChange={(e) => Dispatch(Change({ [e.target.name]: e.target.value }))} />
                                    <Form type={"file"} name={'Image'} onChange={
                                        async (e) => {
                                            const image = e.target.files[0]
                                            const base64 = await Base64(image)
                                            Dispatch(Change({ [e.target.name]: base64 }))
                                        }
                                    }
                                    />
                                </Box>
                                {
                                    BlogPublishButton ? <Button variant="contained" color="secondary" sx={{ alignSelf: "flex-end" }} type="submit" form="BlogForm">Publish Post</Button> : <Button variant="contained" color="secondary" sx={{ alignSelf: "flex-end" }} type="submit" form="BlogForm">Update Post</Button>
                                }







                            </Box>
                        </Modal>
                    </Stack>
                    <Box display={"flex"} flexDirection={"row"} gap={3} flexWrap={"wrap"}>
                        <ShowUserOwnBlogs />
                    </Box>


                </Stack>



            </Stack>
        </Stack>
        <FooterWebApp />
    </>
}