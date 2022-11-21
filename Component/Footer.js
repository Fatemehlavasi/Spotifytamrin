import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import imag2 from "../Assets/Image/Rectangle 9.png";
// import imag3 from "../Assets/Image/Group 11.png";
// import imag4 from "../Assets/Image/Group 12.png";
import Image from "next/image";
// import PictureInPictureIcon from "@mui/icons-material/PictureInPicture";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import vector from "../Assets/Image/footer/Vector.svg"
import vector1 from "../Assets/Image/footer/Vector1.svg"
import vector2 from "../Assets/Image/footer/vector2.png"
const footer = () => {
  return (
    <Grid
    width={"100%"}
    p={1}
    xs={12}
    container
    display={"flex"}
    justifyContent={"flex-start"}
    alignItems={"center"}
    boxShadow={10}
    bgcolor={"#181818"}
    sx={{ position: "fixed", left: "0", right: "0", bottom: "0" }}
  >
    <Grid item xs={2} lg={1.5}>
      <Image src={imag2 } alt={"imageFooter"} />
    </Grid>
    <Grid item xs={2} display={"flex"}>
      <Typography
        sx={{
          fontSize: "15px",
          fontWeight: "400",
          lineHeight: "18px",
          textAlign: "center",
          position: "absolute",
          left: "89px",
          top: "25px",
          color:"#fff",
        }}
      >
        Hold On
      </Typography>
      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: "400",
          lineHeight: "15px",
          opacity: 0.6,
          position: "absolute",
          left: "89px",
          top: "45px",
          color:"#fff",
        }}
      >
        Justin Bieber
      </Typography>
      <FavoriteBorderIcon />
      <Typography px={2}>
        <BrandingWatermarkIcon />
      </Typography>
    </Grid>
    <Grid xs={5} lg={6.4}>
      <Grid
        my={1}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid
          width={"50%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          color={"#fff"}
        >
          <Image src={vector} alt={"Vector1"} />
          <SkipPreviousIcon color="#fff" />
          <PlayCircleIcon  color="#fff"/>
          <SkipNextIcon  color="#fff"/>
          <Image src={vector1} alt={"Vector2"} />
        </Grid>
      </Grid>
      <Grid display={"flex"} alignItems={"center"} gap={1} width={"3000px"}>
        <Typography color={"#fff"}>{"0:00"}</Typography>
        {/* <Image src={image} /> */}
        <Grid border={2} borderRadius={5} width={{ xs: "12%", lg: "22%" }} />
        <Typography color={"#fff"}>{"2:50"}</Typography>
      </Grid>
    </Grid>
    <Grid xs={3} lg={2} display={"flex"} alignItems={"center"} gap={1} pl={7}>
      <PlaylistPlayIcon />
      <ZoomOutMapIcon />
      <Image src={vector2 } alt="Vector3" color={"#fff"} />
      <Image src={vector } alt="Rectangle14" color={"#fff"} />
    </Grid>
  </Grid>
  );
};

export default footer;
