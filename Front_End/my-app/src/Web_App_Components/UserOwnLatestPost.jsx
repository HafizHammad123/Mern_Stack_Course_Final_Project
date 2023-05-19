import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import React from "react";
import Image from '../Website_Components/Images/Blogging.jpg'
export default function UserOwnLatestPost() {
  return <>
    <Box sx={{ flex: { md: "250px", lg: "250px", xs: "300px" },}}>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
              R
            </Avatar>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="264"
          image={Image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body1" color="black" fontFamily={"Raleway"}>
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>

      </Card>
    </Box>

    <Box  sx={{ flex: { md: "250px", lg: "250px", xs: "300px" } }}>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
              R
            </Avatar>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="264"
          image={Image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body1" color="black" fontFamily={"Raleway"}>
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>

      </Card>
    </Box>

    <Box sx={{ flex: { md: "250px", lg: "250px", xs: "300px" } }}>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
              R
            </Avatar>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="264"
          image={Image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body1" color="black" fontFamily={"Raleway"}>
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>

      </Card>
    </Box>

  </>
}