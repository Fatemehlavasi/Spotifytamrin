import React from 'react'
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import imag from "../../Assets/Image/liybrary/layb1.png"
import Image from "next/image";
import {  Typography } from "@mui/material";
const FooterLibrary = () => {
  return (
    <Card sx={{ display: "flex" , bgcolor:"#7B958F"}}>

    {/* <Grid display={"flex"} alignItems={"center"} ml={2} mt={3} justifyContent={"center"} height={"158px"}  > */}
        <Image src={imag}  width={"100px"}/>
      {/* </Grid> */}
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" , mt:"60px"}}>
         
          <Typography
            variant="subtitle1"
            
            component="div"
            color={"#FFF"}
          >
           PLAYLIST
          </Typography>
          <Typography component="div" variant="h2"   fontWeight={900} color={"#FFF"}>
          Pop Right Now 
          </Typography>
          <Typography
            variant="subtitle1"
            width={"70%"}
            component="div"
            color={"#FFF"}
          
          >
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
          </Typography>
        </CardContent>
       
      </Box>
    </Card>
  )
}

export default FooterLibrary