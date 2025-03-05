import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import Header from "../header/Header.jsx";
import Users from "../user/Users.jsx";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function FullWidthGrid() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        <Grid container spacing={0}>
          <Grid size={{ xs: 2 }}>
            <Users />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <Item>xs=6 md=4</Item>
          </Grid>

          <Grid size={{ xs: 4 }}>
            <Item>xs=6 md=4</Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
