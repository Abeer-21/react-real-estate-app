import React from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Paper,
  Avatar,
  Button,
} from "@mui/material";

const Profile = () => {
  const { state } = useLocation();
  const { name, email } = state || {};

  return (
    <Container sx={{ mt: 4, mb: 4, display: "flex", justifyContent: "center" }}>
      <Paper
        elevation={4}
        sx={{ padding: 4, maxWidth: 400, textAlign: "center" }}
      >
        <Avatar
          sx={{ bgcolor: "#557C56", width: 56, height: 56, margin: "auto" }}
        >
          {name ? name.charAt(0).toUpperCase() : "U"}
        </Avatar>
        <Typography variant="h4" gutterBottom sx={{ color: "#33372C", mt: 2 }}>
          Profile
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            Name: {name ? name : "No name provided"}
          </Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            Email: {email ? email : "No email provided"}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Profile;
