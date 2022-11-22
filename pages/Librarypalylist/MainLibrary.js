import { Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import imag from "../../Assets/Image/liybrary/thumbplay.png";
import imag1 from "../../Assets/Image/liybrary/Subtract.png";
import imag2 from "../../Assets/Image/liybrary/more_big.png";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { DataTable } from "../../Data/DataTable";
import RowTable from "./RowTable";
import HeaderTable from "./HeaderTable";
const MainLibrary = () => {
  return (
    <>
      <Grid ml={3} mt={3} display={"flex"} alignItems={"center"} gap={2}>
        <Image src={imag}  alt={"image"}/>
        <Image src={imag1}   alt={"image"} />
        <Image src={imag2}   alt={"image"}/>
      </Grid>
      <Grid ml={3}    > 
      <TableContainer  >
      <Table sx={{ minWidth: "650px" }} aria-label="simple table" color={"#fff"} >
        <TableHead >
          <TableRow>
            <TableCell>
              <Typography color={"fff"}> #TITLE</Typography>
            </TableCell>
            <TableCell align="center" color="#fff" >
              <Typography color={"#fff"}>  ALBUM</Typography>
             </TableCell>
            <TableCell align="right" >
              <Typography color={"#fff"}> DATAADED</Typography>
             </TableCell>
            <TableCell align="right">
              <Typography color={"#fff"}><AvTimerIcon/></Typography>
              </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         {
            DataTable.map(item =>(
               <RowTable id={item.id} titel={item.titel} imag={item.imag}  subtitle={item.subtitle} subtitle2={item.subtitle2} clock={item.clock} time={item.time} icon={item.icon}/>
            ))
         }          
        </TableBody>
      </Table>
    </TableContainer>
      </Grid>
    </>
  );
};

export default MainLibrary;
