import React from "react";
import { useRouteError } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        bgcolor: "#FFE5CF",
        color: "#33372C",
        textAlign: "center",
        padding: 3,
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        Oops!
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Sorry, an unexpected error has occurred.
      </Typography>
      <Typography variant="body2">
        <i>{error.statusText || error.message}</i>
      </Typography>
      <Button
        variant="contained"
        sx={{ mt: 3, bgcolor: "#FF885B", color: "#FFFFFF" }}
        onClick={() => (window.location.href = "/")}
      >
        Go to Home
      </Button>
    </Container>
  );
}
