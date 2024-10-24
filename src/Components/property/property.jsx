// Property.js
import React from "react";
//import luxuryApartment from "../../images/luxuryApartment.png";

const Property = ({ property, onHandleDeleteProperty }) => {
  const { title, location, price, description, id } = property;

  const handleDelete = () => {
    onHandleDeleteProperty(id);
  };

  return (
    <div key={id}>
      <h1>{title}</h1>
      <p>Location: {location}</p>
      <p>Price: ${price}</p>
      {/* <img src={luxuryApartment} alt={title} /> */}
      <p>{description}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Property;
