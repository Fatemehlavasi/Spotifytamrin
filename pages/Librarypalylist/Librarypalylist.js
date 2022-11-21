import React from "react";
import { Grid, Typography } from "@mui/material";
import Sidebar from "../../Component/Sidebar";
import Footer from "../../Component/Footer";
import FooterLibrary from "./FooterLibrary";
import MainLibrary from "./MainLibrary";
const Librarypalylist = () => {
  return (
    <Grid xs={10} bgcolor={"#333638"} display={"flex"} flexDirection={"column"} minheight={"1000px"} >
      <Sidebar />
      <Grid display={"flex"} justifyContent={"space-between"} ml={30} flexDirection={"column"} bgcolor={"#3C3F41"} >
        <FooterLibrary />
        <MainLibrary />
      </Grid>
      <Footer />
    </Grid>
  );
};

export default Librarypalylist;
