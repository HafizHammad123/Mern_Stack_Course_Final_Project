import React from "react";
import Banner from "../Website_Components/Banner";
import Footer from "../Website_Components/Footer";
import { Stack, TextField, Button,Box} from "@mui/material";
import contact_img from '../Website_Components/Images/contact-img.jpg'
export default function Contactus()
{
    return <>
    <Banner></Banner>
    <Stack sx={{flexDirection:{md:"row",xs:"column"},alignItems:{md:"center",xs:"stretch"}}}>
        <Stack display={"flex"} flexDirection={"column"} rowGap={3} flex={1} sx={{padding:{xs:"5px",sm:"25px"}}}  component={"form"}>
            <TextField label={"Enter Name"} variant="outlined"  required  sx={{backgroundColor:"#000000d6",
        "& label":{
color:"white"
        },
        "& input":{
            color:"white",
                    }
        }} ></TextField>
            <TextField label={"Enter Email"}  variant="outlined" type={"email"} required 
            sx={{backgroundColor:"#000000d6",
            "& label":{
    color:"white"
            },
            "& input":{
                color:"white"
                        }}}></TextField>
            <TextField label={"Type Message"} multiline rows={4} required   sx={{backgroundColor:"#000000d6",
            "& label":{
    color:"white"
            },
            "& textarea":{
                color:"white"
                        }}}></TextField>
            <Button variant="contained"  type={"submit"} sx={{alignSelf:"flex-start" ,paddingX:"20px"}} color="warning">Send</Button>

        </Stack>
        <Stack flex={1} p={3}  >
            <Box component={"img"} src={contact_img} width={"100%"}></Box>

        </Stack>
    </Stack>
    <Footer></Footer>
    </>
}