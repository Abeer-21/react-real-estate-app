import React, { useState, useRef, useContext } from "react";
import { nanoid } from "nanoid";
import { PropertyContext } from "../../context/propertyContext";
import { useNavigate } from "react-router-dom";
import { uploadImageToCloudinary } from "../../utility/uploadImage";
import { TextField, Button, Typography, Container, Box } from "@mui/material";

const AddProperty = () => {
  const { setProperties } = useContext(PropertyContext);
  const [errors, setErrors] = useState({});
  const [property, setProperty] = useState({
    title: "",
    location: "",
    price: "",
    description: "",
    image: null,
  });

  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handlePropertyChange = (event) => {
    const { name, value } = event.target;
    setProperty((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    setProperty((prevState) => ({
      ...prevState,
      image: event.target.files[0],
    }));
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

  const addProperty = (newProperty) => {
    setProperties((prevProperties) => [...prevProperties, newProperty]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const imageURL = await uploadImageToCloudinary(property.image);

    if (validateInput()) {
      const newProperty = {
        id: nanoid(),
        title: property.title,
        location: property.location,
        price: parseFloat(property.price),
        description: property.description,
        image: imageURL,
      };

      addProperty(newProperty);
      navigate("/properties");
      resetForm();
    }
  };

  const resetForm = () => {
    setProperty({
      title: "",
      location: "",
      price: "",
      description: "",
      image: null,
    });
    if (fileInputRef.current) fileInputRef.current.value = null;
  };

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ color: "#33372C" }}>
        Add Property
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
          {property.image && (
            <div>
              <img
                src={URL.createObjectURL(property.image)}
                alt="Selected Preview"
                className="property-img"
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
          Add Property
        </Button>
      </form>
    </Container>
  );
};

export default AddProperty;
