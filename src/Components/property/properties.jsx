import React, { useContext } from "react";
import { Grid, Container } from "@mui/material";
import Property from "../property/property";
import { PropertyContext } from "../../context/propertyContext";

const Properties = () => {
  const { properties } = useContext(PropertyContext);

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={4}>
        {properties.length > 0 ? (
          properties.map((property) => (
            <Grid item xs={12} sm={6} md={4} key={property.id}>
              <Property property={property} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{ textAlign: "center", color: "#FF885B" }}
            >
              No Properties Found
            </Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Properties;
