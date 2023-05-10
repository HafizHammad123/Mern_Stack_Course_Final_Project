import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
export default function Navbar() {
    return <>
        <Link to="/"><Button color="White" sx={
            {
                paddingX: '30px',

            }}
        >
            Home</Button></Link>
        <Link to="/Blogs"><Button color="White"
            sx={
                {

                    paddingX: '30px'
                }}
        >Blogs</Button></Link>
        <Link to="/Contact_us"><Button color="White"
            sx={
                {
                    paddingX: '30px',

                }}
        >Contact us</Button></Link>

    </>
}