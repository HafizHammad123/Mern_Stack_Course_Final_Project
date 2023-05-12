import React from "react";
import Banner from "../Website_Components/Banner";
import Footer from "../Website_Components/Footer";
import { Stack, TextField, Button} from "@mui/material";
import contact_img from '../Website_Components/Images/contact-img.jpg'
export default function Contactus()
{
    return <>
    <Banner></Banner>
    <Footer></Footer>
    <Stack sx={{flexDirection:{md:"row",xs:"column"}}} alignItems={"center"} >
        <Stack display={"flex"} flexDirection={"column"} rowGap={2} flex={1} sx={{padding:{xs:"5px",sm:"25px"}}}  component={"form"}  >
            <TextField label={"Enter Name"} variant="outlined"  required  sx={{backgroundColor:"black",
        "& label":{
color:"white"
        },
        "& input":{
            color:"white"
                    }
        }} ></TextField>
            <TextField label={"Enter Email"}  variant="outlined" type={"email"} required 
            sx={{backgroundColor:"black",
            "& label":{
    color:"white"
            },
            "& input":{
                color:"white"
                        }}}></TextField>
            <TextField label={"Type Message"} multiline rows={4} required   sx={{backgroundColor:"black",
            "& label":{
    color:"white"
            },
            "& input":{
                color:"white"
                        }}}></TextField>
            <Button variant="contained"  type={"submit"} sx={{alignSelf:"flex-start" ,paddingX:"20px"}} color="warning">Send</Button>

        </Stack>
        <Stack flex={1} p={3} component={"img"} src={contact_img}>

        </Stack>
    </Stack>
    </>
}