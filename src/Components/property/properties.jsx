import React, { useContext } from "react";
import Property from "../property/property";
import { PropertyContext } from "./propertyContext";

const Properties = () => {
  const { properties, deleteProperty } = useContext(PropertyContext);
  console.log("properties ", properties);
  return (
    <section className="Properties">
      {properties.map((property) => (
        <div className="Property" key={property.id}>
          <Property
            property={property}
            onHandleDeleteProperty={deleteProperty}
          />
        </div>
      ))}
    </section>
  );
};

export default Properties;
