import { Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import imag1 from "../Assets/Image/Rectangle 16.png";
import logo from "../Assets/Image/Vector.png";
import { List1, List2 } from "../Data/DataSidebar";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
const Sidebar = () => {
  return (
    <Grid
      container
      xs={3}
      lg={2}
      bgcolor={"black"}
      minWidth={200}
      height={"100vh"}
      position={"fixed"}
    >
      <Grid item md={12} sx={{ backgroundColor: "#000" }}>
        <Grid
          sx={{ mt: 4, bgcolor: "#000" }}
          justifyContent={"flex-start"}
          display={"flex"}
        >
          <Image src={logo} />
        </Grid>
        <List
          sx={{ width: "100%", maxWidth: 360, color: "#B3B3B3" }}
          aria-label="contacts"
        >
          {List1.map((item) => (
            <Link href={item.href} key={item.id}>
              <ListItemButton>
                <ListItemIcon sx={{ color: "#B3B3B3" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          ))}
        </List>

        <Typography sx={{ color: "#B3B3B3", pl: 2, mt: 2 }}>
          PLAYLIST
        </Typography>

        <List
          sx={{ width: "100%", maxWidth: 360, color: "#B3B3B3" }}
          aria-label="contacts"
        >
          {List2.map((item) => (
            <Link href={item.href} key={item.id}>
              <ListItemButton>
                <ListItemIcon sx={{ color: "#B3B3B3" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Grid>
      <Grid
        justifyContent={"center"}
        display={"flex"}
        xs={12}
      >
        <Image src={imag1} />
      </Grid>

      
    </Grid>
  );
};

export default Sidebar;
