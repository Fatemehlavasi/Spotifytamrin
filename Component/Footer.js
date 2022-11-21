import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import imag2 from "../Assets/Image/Rectangle 9.png";
import imag3 from "../Assets/Image/Group 11.png";
import imag4 from "../Assets/Image/Group 12.png";
import Image from "next/image";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PictureInPictureIcon from "@mui/icons-material/PictureInPicture";
const footer = () => {
  return (
    <Paper
      sx={{
        width: "100%",
        position: "sticky",
        zIndex: 1000,
        height: 70,
        bottom: 0,
        background: "#181818",
      }}
    >
      <Grid display={"flex"}>
        <Grid
          width={"15%"}
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <Grid xs={2}>
            <Image src={imag2} />
          </Grid>
          <Grid>
            <Typography color={"#fff"}>HoldOn</Typography>
            <Typography color={"#797979"}>Justin Bieber</Typography>
          </Grid>
          <Grid>
            <FavoriteBorderIcon />
          </Grid>
          <Grid>
            <PictureInPictureIcon />
          </Grid>
        </Grid>
        <Grid
          width={"70%"}
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <Grid >
            <Image src={imag3} />
          </Grid>
        </Grid>
        <Grid
          width={"15%"}
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <Grid >
            <Image src={imag4} />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default footer;
