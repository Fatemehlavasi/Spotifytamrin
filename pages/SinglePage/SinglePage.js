import React from 'react'
import { Grid, Typograpy } from "@mui/material";
import Sidebar from "../../Component/Sidebar";
import Footer from "../../Component/Footer";
const SinglePage = () => {
  return (
    <Grid item xs={10} bgcolor={"#333638"} display={"flex"} flexDirection={"column"}>
      <Grid display={"flex"} justifyContent={"space-between"}>
        <Sidebar />
        <Grid>SinglePage</Grid>
      </Grid>

      <Footer />
    </Grid>
  )
}

export default SinglePage