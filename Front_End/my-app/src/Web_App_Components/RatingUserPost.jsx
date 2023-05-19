import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const style={
  fontSize:"1.1rem",
  fontFamily:"Raleway"
}
function createData(
  BlogTitle,
  TotalComments,
  TotalLikes,
) {
  return { BlogTitle, TotalComments, TotalLikes };
}

const rows = [
  createData('Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis ipsam voluptate  ' , 15,45),
  createData('Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsam voluptate', 25,40),
  createData('Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsam voluptate ', 20,65),
  createData('Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsam voluptate ', 30,85),
  createData('Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsam voluptate ', 65,90),
];


export default function RatingBasicTable() {
  return <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={style}>Blog Title</TableCell>
            <TableCell sx={style} align="center">Total Comment</TableCell>
            <TableCell sx={style} align="center">Total Likes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
            key={row.BlogTitle}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={style} component="th" scope="row">
                {row.BlogTitle}
              </TableCell>
              <TableCell sx={style} align="center">{row.TotalComments}</TableCell>
              <TableCell  sx={style} align="center">{row.TotalLikes}</TableCell>
           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

          </>

}