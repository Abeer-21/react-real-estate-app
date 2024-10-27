import React, { useContext } from "react";
import { Container, Typography, Box } from "@mui/material";
import Properties from "../Components/property/properties";
import { PropertyContext } from "../context/propertyContext";

const Home = () => {
  const { properties } = useContext(PropertyContext);

  return (
    <Container sx={{ mt: 1, mb: 1 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#FFE5CF",
          borderRadius: 2,
          p: 3,
        }}
      >
        {properties.length > 0 ? (
          <Properties />
        ) : (
          <Typography variant="h6" sx={{ color: "#FF885B" }}>
            No Properties found!
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default Home;
