import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";

const Footer = () => {
  return (
    <AppBar position="static" sx={{ marginTop: "auto", bgcolor: "#33372C" }}>
      <Toolbar>
        <Container>
          <Typography variant="body1" color="FFE5CF" align="center">
            © {new Date().getFullYear()} Abeer Yehia. All Rights Reserved.
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
