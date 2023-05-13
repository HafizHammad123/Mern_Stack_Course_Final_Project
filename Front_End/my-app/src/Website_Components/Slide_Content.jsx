import React from "react";
import { Stack, Box } from "@mui/material";
import { useState } from "react";

export default function SlideContent() {
    const [Typing_Data, Update_Typing] = useState(" ")

    const string = "Content Writing Services"
    const covrt = string.split('')
    setTimeout(() => {
        typing()
    }, 500)
    function typing() {
        for (let index = 0; index < Typing_Data.length; index++) {
            if (Typing_Data.length) {
                Update_Typing(Typing_Data.concat(covrt[Typing_Data.length - 1]))
                if (Typing_Data.length > covrt.length) {
                    Update_Typing(" ")
                }
            }
        }
    }






    return <>
        <Stack color='White.main' alignItems={"center"} textTransform={"uppercase"} fontFamily={"Raleway"}>
            <Box sx={{ fontSize: { sm: "36px", xs: "26.72px" }, letterSpacing: "3px" }} component={"h1"} margin={0} textAlign={"center"} >Welcome to</Box>
            <Box sx={{ fontSize: { sm: "36px", xs: "26.72px" } }} letterSpacing={3} component={"h1"} margin={0} textAlign={"center"} color={"warning.main"}>{Typing_Data}
            </Box>
            <Box component={"p"} sx={{ width: { sm: "580px", xs: "100%" }, textAlign: { sm: "start", xs: "center" } }} textTransform={"initial"}>
                It is a long established fact that a reader will be distracted by the readable content of a pagewhen looking
            </Box>
        </Stack>
    </>
}
