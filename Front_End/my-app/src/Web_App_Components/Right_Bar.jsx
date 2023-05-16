import { Box, Card,CardContent,CardMedia, ImageList, ImageListItem, Typography } from "@mui/material";
import Image from '../Website_Components/Images/Blogging.jpg'
import Image1 from '../Website_Components/Images/footer.jpg'
import React from "react";
export default function RightBar() {
    return <>
        <Box position={"fixed"} display={"flex"} flexDirection={"column"} p={1} gap={1} >

            <Typography variant="h6" fontFamily={"Raleway"} fontWeight={"500"}>
                Most Recent Post
            </Typography>

            <Card sx={{ boxShadow: "none" }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={Image1}
                    alt="green iguana"
                />
                <CardContent sx={{ paddingX: "0px", paddingY: "10px" }}>
                    <Typography gutterBottom variant="h6" component="div" fontFamily={"Raleway"} fontWeight={"400"}>
                        Lizard
                    </Typography>
                    <Typography variant="body1" color="text.secondary" fontFamily={"Raleway"} fontWeight={"600"}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </Card>

            <Typography variant="h6" fontFamily={"Raleway"} fontWeight={"300"} >
                Latest Photos
            </Typography>

            <ImageList cols={3} gap={8}>
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




        </Box>
    </>
}