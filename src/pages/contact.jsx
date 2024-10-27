import React from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

const Contact = () => {
  return (
    <Container
      disableGutters
      sx={{ mt: 4, mb: 4, bgcolor: "#FFE5CF", p: 3, borderRadius: 2 }}
    >
      <Typography
        variant="h4"
        sx={{ mb: 3, color: "#33372C", textAlign: "center" }}
      >
        Contact Us
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 600,
          margin: "0 auto",
        }}
      >
        <TextField label="Name" variant="outlined" sx={{ mb: 2 }} required />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          sx={{ mb: 2 }}
          required
        />
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          sx={{ mb: 2 }}
          required
        />
        <Button
          variant="contained"
          sx={{ bgcolor: "#FF885B", color: "#FFFFFF" }}
          type="submit"
        >
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
