import React from "react";
import TableCell from '@mui/material/TableCell';
const HeaderTable = ({titel,album ,data , icons }) => {
  return (
    <>
      <TableCell>{titel}</TableCell>
      <TableCell align="center">{album}</TableCell>
      <TableCell align="right">{data}</TableCell>
      <TableCell align="right">{ icons }</TableCell>
    </>
  );
};

export default HeaderTable;
