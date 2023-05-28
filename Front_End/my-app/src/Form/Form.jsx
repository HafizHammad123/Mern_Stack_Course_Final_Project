import { Box, TextField } from "@mui/material";
import {useDispatch} from 'react-redux'
import { Change } from '../Redux/BlogsReducers/BlogFormreducer1'
export default function Form(props) {
    const dispatch=useDispatch()

    return <>
        <Box>
            <TextField {...props} fullWidth sx={{ "label": { fontFamily: "Raleway", fontWeight: "500" } }} required >
            </TextField>
        </Box>
    </>
}