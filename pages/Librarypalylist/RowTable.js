import React from "react";
import TableRow from "@mui/material/TableRow";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import TableCell from "@mui/material/TableCell";
const RowTable = ({titel,id,imag,subtitle,subtitle2,clock,time,icon,}) => {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        <Grid display={"flex"} alignItems={"center"} color={"#FFF"} gap={2}>
          <Typography color="#fff">{id}</Typography>
          <Image src={imag}  alt={"image"}/>
          <Grid>
            <Typography color={"#FFF"}>{titel}</Typography>
            <Typography color={"#FFF"}>{subtitle}</Typography>
          </Grid>
        </Grid>
      </TableCell>
      <TableCell align="center" >
        <Typography color={"#FFF"}>{subtitle2}</Typography>
      </TableCell>
      <TableCell align="right" >
        <Typography color={"#FFF"}>{clock}</Typography>
      </TableCell>
      <TableCell align="right" color={"#FFF"}>
        <Grid display={"flex"} justifyContent={"flex-end"}>
          <Typography color={"#FFF"}>{time}</Typography>
          <Typography color={"#FFF"}>{icon}</Typography>
        </Grid>
      </TableCell>
    </TableRow>
  );
};

export default RowTable;
