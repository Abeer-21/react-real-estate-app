import React, { useState, useRef, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PropertyContext } from "../../context/propertyContext";
import { uploadImageToCloudinary } from "../../utility/uploadImage";
import { TextField, Button, Typography, Container, Box } from "@mui/material";

const EditProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { properties, setProperties } = useContext(PropertyContext);
  const [errors, setErrors] = useState({});
  const [property, setProperty] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const existingProperty = properties.find(
      (prop) => prop.id === parseInt(id)
    );
    if (existingProperty) {
      setProperty(existingProperty);
    } else {
      console.error("Property not found");
    }
  }, [id, properties]);

  useEffect(() => {
    return () => {
      if (property && property.image instanceof File) {
        URL.revokeObjectURL(property.image);
      }
    };
  }, [property]);

  if (!property) {
    return <div>Loading...</div>;
  }

  const handlePropertyChange = (event) => {
    const { name, value } = event.target;
    setProperty((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProperty((prevState) => ({
        ...prevState,
        image: file,
      }));
    }
  };

  const validateInput = () => {
    const newErrors = {};
    if (!property.title.trim()) newErrors.title = "Title is required";
    if (!property.location.trim()) newErrors.location = "Location is required";
    if (!property.price.trim()) {
      newErrors.price = "Price is required";
    } else if (isNaN(property.price) || property.price <= 0) {
      newErrors.price = "Price must be a positive number";
    }
    if (!property.description.trim()) {
      newErrors.description = "Description is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let imageURL = await uploadImageToCloudinary(property.image);

    if (validateInput()) {
      const updatedProperty = {
        id: property.id,
        title: property.title,
        location: property.location,
        price: parseFloat(property.price),
        description: property.description,
        image: imageURL,
      };

      setProperties((prevProperties) =>
        prevProperties.map((prop) =>
          prop.id === parseInt(id) ? updatedProperty : prop
        )
      );

      navigate(`/property/${id}`);
    } else {
      console.log(errors);
    }
  };

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ color: "#33372C" }}>
        Edit Property
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            label="Title"
            name="title"
            value={property.title}
            onChange={handlePropertyChange}
            fullWidth
            required
            error={!!errors.title}
            helperText={errors.title}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Location"
            name="location"
            value={property.location}
            onChange={handlePropertyChange}
            fullWidth
            required
            error={!!errors.location}
            helperText={errors.location}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Price"
            type="number"
            name="price"
            value={property.price}
            onChange={handlePropertyChange}
            fullWidth
            required
            error={!!errors.price}
            helperText={errors.price}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Description"
            name="description"
            value={property.description}
            onChange={handlePropertyChange}
            multiline
            rows={4}
            fullWidth
            required
            error={!!errors.description}
            helperText={errors.description}
          />
        </Box>
        <Box mb={2}>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            ref={fileInputRef}
            style={{ marginBottom: "10px" }}
          />
          {property.image && property.image instanceof File && (
            <div>
              <img
                src={URL.createObjectURL(property.image)}
                alt="Selected Preview"
                style={{
                  width: "100%",
                  marginTop: "10px",
                  borderRadius: "4px",
                }}
              />
            </div>
          )}
        </Box>
        <Button
          type="submit"
          variant="contained"
          sx={{ bgcolor: "#FF885B", color: "#FFFFFF" }}
        >
          Update Property
        </Button>
      </form>
    </Container>
  );
};

export default EditProperty;
