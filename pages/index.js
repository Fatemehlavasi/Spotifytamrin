import { Grid } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import HomeMain from "../Component/HomeMain";
import Sidebar from "../Component/Sidebar";
import Footer from "../Component/Footer";
export default function Home() {
  return (
    <Grid
    
      xs={12}
      bgcolor={"black"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Grid display={"flex"} justifyContent={"space-between"}>
      <Sidebar />
        <HomeMain />
       
      </Grid>
      
        <Footer />
      
    </Grid>
  );
}
