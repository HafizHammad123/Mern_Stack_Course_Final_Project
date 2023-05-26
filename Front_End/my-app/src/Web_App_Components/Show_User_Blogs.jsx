import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from "react-redux";
import { useEffect } from "react";
export default function ShowUserOwnBlogs() {
  const StorePost = useSelector((state) => state.StorePost)
  const token = JSON.parse(localStorage.getItem('SecretKey'));
  const SecretToken = `Bearer ${token.SecretToken}`
  useEffect(() => {

    const GetAllPersonalBlog = async () => {
      try {
        const Response = await fetch(`http://localhost:8000/User/Personal/Blog/${token.ID}`,
          {
            method: "GET",
            // body: JSON.stringify({ ID: token.ID }),
            headers:
            {
              "Content-Type": "application/json",
              'Authorization': SecretToken
            }

          })
        const FetchAllData= await Response.json()
        console.log(FetchAllData)
      } catch (error) {
        console.log(error)
      }
    }
    GetAllPersonalBlog();

  }, []);
  const style = {
    flex: { lg: "400px", md: "250px", sm: "300px" },
  }
  return <>
    {
      StorePost.map(PostItem => (
        <>
          <Card sx={style}>
            <CardHeader
              avatar={
                <Avatar >

                </Avatar>
              }
              title={PostItem.Author_Name}
              subheader={PostItem.Publish_Date}
            />
            <CardMedia
              component="img"
              height="264"
              image={PostItem.Image}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body1" color="black" fontFamily={"Raleway"}>
                {PostItem.Description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <EditIcon />
              </IconButton>
              <IconButton aria-label="share">
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Card>
        </>
      ))
    }



  </>
}