import { Box, TextField } from "@mui/material";
import {useDispatch} from 'react-redux'
import { Change } from '../Redux/BlogsReducers/BlogFormreducer1'
export default function Form({ label, type,value,name }) {
    const dispatch=useDispatch()

    return <>
        <Box>
            <TextField name={name} value={value} label={label} type={type} fullWidth sx={{ "label": { fontFamily: "Raleway", fontWeight: "500" } }} required onChange={(e)=>dispatch(Change({[e.target.name]:e.target.value}))}>
            </TextField>
        </Box>
    </>
}