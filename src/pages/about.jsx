import React from "react";
import { Container, Typography, Box, Grid, Paper } from "@mui/material";

const About = () => {
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: "#33372C", textAlign: "center", fontWeight: "bold" }}
      >
        About Us
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: "#557C56", textAlign: "center", mb: 4 }}
      >
        Welcome to React Real Estate, your trusted partner in finding your dream
        home. We are committed to providing exceptional service and a seamless
        experience for all our clients.
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{ padding: 3, borderRadius: 2, backgroundColor: "#FFE5CF" }}
          >
            <Typography variant="h5" sx={{ color: "#33372C", mb: 2 }}>
              Our Mission
            </Typography>
            <Typography variant="body1" sx={{ color: "#557C56" }}>
              We aim to make the real estate process as straightforward and
              enjoyable as possible. Our team of experienced professionals is
              here to assist you every step of the way.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{ padding: 3, borderRadius: 2, backgroundColor: "#FFE5CF" }}
          >
            <Typography variant="h5" sx={{ color: "#33372C", mb: 2 }}>
              Our Vision
            </Typography>
            <Typography variant="body1" sx={{ color: "#557C56" }}>
              With extensive market knowledge and a passion for helping clients,
              we strive to match you with the perfect property that fits your
              needs and lifestyle.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="h6" sx={{ color: "#FF885B", fontWeight: "bold" }}>
          Join Us in Your Real Estate Journey!
        </Typography>
        <Typography variant="body2" sx={{ color: "#557C56" }}>
          Contact us today to learn more about how we can assist you.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
