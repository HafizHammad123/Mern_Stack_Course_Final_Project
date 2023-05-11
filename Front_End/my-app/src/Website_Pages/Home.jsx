import React from "react";
import Banner from "../Website_Components/Banner";
import Footer from "../Website_Components/Footer";
import {Stack,Box,Typography} from '@mui/material'

export default function Home()
{
return<>
<Banner></Banner>
<Stack flexDirection={"row"} justifyContent={"center"} columnGap={3} zIndex={3}>
    <Box flex={1}   p={3}> 
    

   
     
          <Typography  variant="h5" component="div" color="black" marginBottom={1}>
            About Website
          </Typography>
          <Typography variant="body1" fontSize={"18px"}  color="black" fontFamily={"Raleway"}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
   
          
    </Box>
    <Box  flex={1}   p={3} >
 
    </Box>
</Stack>
<Stack flexDirection={"row"} justifyContent={"center"} columnGap={3} zIndex={3}>
    <Box flex={1}   p={3}>      
        
          
    </Box>
    <Box  flex={1}   p={3} >
    <Typography  variant="h5" component="div" color={"black"} marginBottom={1}>
            About How we can create her own Blog
          </Typography>
          <Typography variant="body1" fontSize={"18px"} color="black" fontFamily={"Raleway"}>
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