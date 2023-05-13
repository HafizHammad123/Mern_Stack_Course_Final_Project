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
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
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
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </Box>
    </Stack>
    <Footer></Footer>

  </>
}