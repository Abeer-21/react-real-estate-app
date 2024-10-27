import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Signin from "../Components/auth/signin";

const Login = () => {
  return (
    <Container sx={{ mt: 4, mb: 4, textAlign: "center" }}>
      <Box sx={{ maxWidth: 400, mx: "auto" }}>
        <Signin />
      </Box>
    </Container>
  );
};

export default Login;
