import React from "react";
import Banner from "../Website_Components/Banner";
import Footer from "../Website_Components/Footer";
import { Stack, Box, Typography } from '@mui/material'
import AboutWebsite from '../Website_Components/Images/what-is-website-how-it-works.png'
import CreateBlog from '../Website_Components/Images/how-to-create-good-blog-titles.png'
export default function Home() {
  return <>
    <Banner></Banner>
    <Stack flexDirection={"row"} flexWrap={"wrap"} columnGap={3} zIndex={3} alignItems={"center"}>
      <Box flex={"400px"} p={3}>
        <Typography variant="h5" component="div" color="black" marginBottom={1}>
          About Website
        </Typography>
        <Typography variant="body1" fontSize={"18px"} color="black" fontFamily={"Raleway"} sx={{textAlign:{sm:"justify",xs:"left"}}}>
        A blogging website is a platform that enables individuals to share their thoughts, ideas, experiences and expertise with a wider audience through written content. These websites provide a space for bloggers to create and publish articles commonly known as blog posts, on various topics according to their interest and fields. 
        </Typography>


      </Box>
      <Box flex={"400px"} p={3}>
        <Box width={"100%"} component={"img"} src={AboutWebsite}></Box>
      </Box>
    </Stack>
    <Stack flexDirection={"row"} flexWrap={"wrap"} columnGap={3} zIndex={3} alignItems={"center"}>
      <Box flex={"400px"} p={3}>
        <Box width={"100%"} component={"img"} src={CreateBlog}></Box>
      </Box>
      <Box flex={"400px"} p={3} >
        <Typography variant="h5" component="div" color={"black"} marginBottom={1}>
          About How we can create her own Blog
        </Typography>
        <Typography variant="body1" fontSize={"18px"} color="black" fontFamily={"Raleway"} sx={{textAlign:{sm:"justify",xs:"left"}}}>
      1) Visit the website <br />
      2) Look for the Sign-up Button <br />
      3) Register yourself by putting E-mail, Name and Password <br />
      4)  Verify and acces your Account <br />
    <h3>Note</h3>
    <p>Please note that the  above steps are a general guidelines, and it may differ from website to website</p>
        </Typography>
      </Box>
    </Stack>
    <Footer></Footer>

  </>
}