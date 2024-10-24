import React, { useState, useRef, useContext } from "react";
import { nanoid } from "nanoid";
import { PropertyContext } from "../../context/propertyContext";
import { useNavigate } from "react-router-dom";
import { uploadImageToCloudinary } from "../../utility/uploadImage";

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
    const imgeURL = await uploadImageToCloudinary(property.image);

    if (validateInput()) {
      const newProperty = {
        id: nanoid(),
        title: property.title,
        location: property.location,
        price: parseFloat(property.price),
        description: property.description,
        image: imgeURL,
      };

      addProperty(newProperty);

      navigate("/properties");

      resetForm();
    } else {
      console.log(errors);
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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={property.title}
          onChange={handlePropertyChange}
          required
        />
        {errors.title && <span className="error">{errors.title}</span>}
      </div>

      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={property.location}
          onChange={handlePropertyChange}
          required
        />
        {errors.location && <span className="error">{errors.location}</span>}
      </div>

      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={property.price}
          onChange={handlePropertyChange}
          required
        />
        {errors.price && <span className="error">{errors.price}</span>}
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={property.description}
          onChange={handlePropertyChange}
          required
        />
        {errors.description && (
          <span className="error">{errors.description}</span>
        )}
      </div>

      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          ref={fileInputRef}
        />
        {property.image && (
          <div>
            <img
              src={URL.createObjectURL(property.image)}
              alt="Selected Preview"
              className="property-img"
            />
          </div>
        )}
      </div>

      <button type="submit">Add Property</button>
    </form>
  );
};

export default AddProperty;
