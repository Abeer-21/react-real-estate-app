import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Typography, Box, Paper, Button, Grid } from "@mui/material";

const PropertyDetails = () => {
  const { state } = useLocation();
  const { title, location, price, description, image } = state || {};

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      {state ? (
        <Paper elevation={4} sx={{ padding: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5} display="flex" justifyContent="center">
              {image && (
                <img
                  src={image}
                  alt={title}
                  style={{
                    width: "80%", // Increased image size
                    height: "auto",
                    borderRadius: 8,
                  }}
                />
              )}
            </Grid>
            <Grid item xs={12} sm={7}>
              <Typography variant="h4" gutterBottom sx={{ color: "#33372C" }}>
                {title}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                Location: {location}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                Price: ${price}
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Description: {description}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  bgcolor: "#FF885B",
                  "&:hover": { bgcolor: "#FF7043" },
                }}
                onClick={() => window.history.back()}
              >
                Back
              </Button>
            </Grid>
          </Grid>
        </Paper>
      ) : (
        <Typography variant="h6" color="error">
          No Property selected
        </Typography>
      )}
    </Container>
  );
};

export default PropertyDetails;
