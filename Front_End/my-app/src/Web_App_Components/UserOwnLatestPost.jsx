import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from '../Website_Components/Images/Blogging.jpg'
export default function UserOwnLatestPost() {
  const [LatestPost, UpdateLatestPost] = useState([])
  const token = JSON.parse(localStorage.getItem('SecretKey'));
  const SecretToken = `Bearer ${token.SecretToken}`
  useEffect(() => {
    const FetchLatestFivePost = async () => {
      const response = await fetch(`http://localhost:8000/User/Five/Latests/Post/${token.ID}`,
        {
          method: "GET",
          headers:
          {
            "Content-Type": "application/json",
            'Authorization': SecretToken
          }
        })
      const data = await response.json()
      UpdateLatestPost([...data])

    }
    FetchLatestFivePost()
  }, [])
  return <>
    {
      LatestPost.map(LatestItem =>
      (
        <>
          <Box sx={{ flex: { md: "250px", lg: "250px", xs: "300px" }, }}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar >
                  </Avatar>
                }
                title={LatestItem.Author_Name}
                subheader={LatestItem.Publish_Date}
              />
              <CardMedia
                component="img"
                height="264"
                image={LatestItem.Image}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body1" color="black" fontFamily={"Raleway"}>
                  {LatestItem.Description}
                </Typography>
              </CardContent>

            </Card>
          </Box>
        </>
      ))
    }




  </>
}