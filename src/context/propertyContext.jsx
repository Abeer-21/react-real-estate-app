import React, { createContext } from "react";
import { propertiesData } from "../data/propertiesData";
import { useState } from "react";

export const PropertyContext = createContext(null);

export const PropertyProvider = ({children}) => {

    const [properties, setProperties] = useState(propertiesData);
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState(null);

   return (
     <PropertyContext.Provider value={{ properties, setProperties }}>
       {children}
     </PropertyContext.Provider>
   );
};

// import React, { createContext, useState, useEffect } from "react";

// export const PropertyContext = createContext(null);

// const PropertyProvider = ({ children }) => {
//   const [properties, setProperties] = useState(propertiesData);

//   // useEffect(() => {
//   //   const loadProperties = async () => {
//   //     const fetchedProperties = await fetchProperties();
//   //     setProperties(fetchedProperties);
//   //   };
//   //   loadProperties();
//   // }, []);



//   return (
//     <PropertyContext.Provider value={{ properties, setProperties }}>
//       {children}
//     </PropertyContext.Provider>
//   );
// };
export default PropertyProvider;
