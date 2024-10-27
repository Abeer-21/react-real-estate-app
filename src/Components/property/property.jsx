import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { PropertyContext } from "../../context/propertyContext";

const Property = ({ property }) => {
  const { properties, setProperties } = useContext(PropertyContext);
  const navigate = useNavigate();
  const { title, location, price, id, image } = property;

  const handleDelete = (id) => {
    const filteredProperties = properties.filter(
      (property) => property.id !== id
    );
    setProperties(filteredProperties);
  };

  const handleEdit = () => {
    navigate(`/edit-property/${id}`);
  };

  return (
    <Card
      sx={{
        margin: 2,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "200px", // Fixed height for uniformity
          objectFit: "cover",
          borderRadius: "8px 8px 0 0",
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Location: {location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${price}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 2,
          }}
        >
          <Button
            variant="contained"
            onClick={() => handleDelete(id)}
            sx={{
              backgroundColor: "#f44336", 
              color: "white",
              padding: "4px 8px",
              fontSize: "0.875rem", 
              lineHeight: 1, 
              "&:hover": {
                backgroundColor: "#d32f2f",
              },
            }}
          >
            Delete
          </Button>
          <Button
            variant="outlined"
            onClick={handleEdit}
            sx={{
              borderColor: "#2196F3",
              color: "#2196F3",
              padding: "4px 8px",
              fontSize: "0.875rem", 
              lineHeight: 1,
              marginLeft: 1,
              "&:hover": {
                borderColor: "#1976D2",
                color: "#1976D2",
              },
            }}
          >
            Edit
          </Button>
          <Link
            to={`/Property/${property.id}`}
            state={{
              title: property.title,
              location: property.location,
              price: property.price,
              description: property.description,
              image: property.image,
            }}
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="text"
              sx={{
                color: "#2196F3",
                marginLeft: 1,
                fontSize: "0.875rem", 
                lineHeight: 1, 
              }}
            >
              Show details
            </Button>
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Property;
