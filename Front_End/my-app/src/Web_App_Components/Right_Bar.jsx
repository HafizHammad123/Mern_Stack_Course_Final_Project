import {Box, ImageList, ImageListItem, Typography } from "@mui/material";
import Image from '../Website_Components/Images/Blogging.jpg'
import React from "react";
export default function RightBar()
{
    return <>
    <Box position={"fixed"}   display={"flex"} flexDirection={"column"} p={1} >
        
    <Typography variant="h6" fontFamily={"Raleway"} fontWeight={"300"} >
        Latest Photos
    </Typography>

    <ImageList cols={3}>
    <ImageListItem >
      <img
        src={Image}
        alt={""}

      />
    </ImageListItem>

    <ImageListItem >
      <img
        src={Image}
        alt={""}

      />
    </ImageListItem>

    <ImageListItem >
      <img
        src={Image}
        alt={""}

      />
    </ImageListItem>

    <ImageListItem >
      <img
        src={Image}
        alt={""}

      />
    </ImageListItem>

    <ImageListItem >
      <img
        src={Image}
        alt={""}

      />
    </ImageListItem>

    <ImageListItem >
      <img
        src={Image}
        alt={""}

      />
    </ImageListItem>

    </ImageList>



    <Typography variant="h6" fontFamily={"Raleway"} fontWeight={"300"}>Trending Post</Typography>
 
    </Box>
    </>
}