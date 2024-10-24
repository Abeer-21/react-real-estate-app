import React, { useContext } from "react";
import Property from "../property/property";
import { PropertyContext } from "../../context/propertyContext";
import EditProperty from "./editProperty";

const Properties = () => {
  const { properties } = useContext(PropertyContext);

  return (
    <section className="Properties">
      {properties.map((property) => (
        <div className="Property" key={property.id}>
          <Property
            property={property}
          />
        </div>
      ))}
    </section>
  );
};

export default Properties;
