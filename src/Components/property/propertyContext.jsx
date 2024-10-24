import React, { createContext, useState, useEffect } from "react";

export const PropertyContext = createContext();

// const PropertyProvider = ({ children }) => {
//   const [properties, setProperties] = useState(propertiesData);

//   useEffect(() => {
//     const loadProperties = async () => {
//       const fetchedProperties = await fetchProperties();
//       setProperties(fetchedProperties);
//     };
//     loadProperties();
//   }, []);

//   const addProperty = (newProperty) => {
//     setProperties((prevProperties) => [...prevProperties, newProperty]);
//   };

//   const updateProperty = (updatedProperty) => {
//     setProperties((prevProperties) =>
//       prevProperties.map((property) =>
//         property.id === updatedProperty.id ? updatedProperty : property
//       )
//     );
//   };

//   const deleteProperty = (propertyId) => {
//     setProperties((prevProperties) =>
//       prevProperties.filter((property) => property.id !== propertyId)
//     );
//   };

//   return (
//     <PropertyContext.Provider value={{ properties, setProperties }}>
//       {children}
//     </PropertyContext.Provider>
//   );
// };
// export default PropertyProvider;
