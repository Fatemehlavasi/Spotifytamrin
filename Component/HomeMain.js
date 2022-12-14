import { Grid, Typography } from "@mui/material";
import React from "react";
import { DataCard1, DataCard2, DataCard3 } from "../Data/DataMan";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
const HomeMain = () => {
  return (
    <Grid display={"flex"} flexDirection={"column"} item container xs={10} p={2} bgcolor={"#1d1e1f"} ml={33}>
      <Grid item mt={10} color={"#fff"}>
        <Typography variant="h4">Good afternoon</Typography>
      </Grid>
      <Grid mr={10} ml={3} display={"flex"} flexWrap={"wrap"} mb={5}>
        {DataCard1.map((item) => (
          <Grid bgcolor={"#343536"} color={"#FFF"} item display={"flex"} justifyContent={"space-between"} alignItems={"center"} xs={12} sm={4} md={2.90} borderRadius={2} m={0.4} >
            <Image src={item.Image}  alt={"image"} />
            <Typography  fontSize={"14px"} pr={9}>{item.title} </Typography>
          </Grid>
        ))}
      </Grid>
      <Grid item color={"#fff"}>
        <Typography variant="h4">ًRecently Played</Typography>
      </Grid>
      <Grid pl={3} mr={10} item display={"flex"} flexWrap={"wrap"} justifyContent={"space-between"} >
        {DataCard2.map((item) => (
          <Card sx={{maxWidth: "200px",minHeight: "300px",bgcolor: "#181818",color: "#fff",mt: "10px",}}>
            <CardActionArea>
              <Grid display={"flex"} alignItems={"center"} ml={2} mt={3} justifyContent={"center"} width={"158px"} height={"158px"} >
                <Image src={item.Image} alt={"image"} />
              </Grid>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" mt={5}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="#FFF" width={"100%"} >
                  {item.Dec}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Grid>
      <Grid item color={"#fff"} mt={2}>
        <Typography variant="h4">Just The Hits</Typography>
      </Grid>
      <Grid pl={3} item display={"flex"} flexWrap={"wrap"} justifyContent={"space-between"} mr={10}>
        {DataCard3.map((item) => (
          <Card sx={{ maxWidth: "200px" , minHeight: "300px", bgcolor: "#181818", color: "#fff", mt: "10px", }} >
            <CardActionArea>
              <Grid display={"flex"} alignItems={"center"} ml={2} mt={3} justifyContent={"center"} width={"158px"} height={"158px"}>
                <Image src={item.Image}  alt={"image"}/>
              </Grid>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" mt={5}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color={"#FFF"} width={"100%"} bgcolor={"red"}>
                  {item.Dec}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Grid>
     
    </Grid>
  );
};
export default HomeMain;
