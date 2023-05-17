import { Box, TextField } from "@mui/material";
export default function Form({ label, type, }) {
    return <>
        <Box>
            <TextField label={label} type={type} fullWidth sx={{ "label": { fontFamily: "Raleway", fontWeight: "500" } }} required>
            </TextField>
        </Box>
    </>
}