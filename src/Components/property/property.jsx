import React from "react";
import { useContext } from "react";

import { PropertyContext } from "../../context/propertyContext";

const Property = ({ property }) => {
  const { properties, setProperties } = useContext(PropertyContext);

  const { title, location, price, description, id, image } = property;

  const handleDelete = (id) => {
    const filteredProducts = properties.filter(
      (property) => property.id !== id
    );
    setProperties(filteredProducts);
  };
  const handleEdit = (updatedProperty) => {
    setProperties((prevProperties) =>
      prevProperties.map((property) =>
        property.id === updatedProperty.id
          ? { ...property, ...updatedProperty }
          : property
      )
    );
  };

  return (
    <div key={id}>
      <h1>{title}</h1>
      <p>Location: {location}</p>
      <p>Price: ${price}</p>
      <img src={image} alt={title} />
      <p>{description}</p>
      <button onClick={() => handleDelete(id)}>Delete</button>
      <button onClick={() => handleEdit(property.id)}>Edit</button>
    </div>
  );
};

export default Property;
