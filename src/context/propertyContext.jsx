import React, { createContext } from "react";
import { propertiesData } from "../data/propertiesData";
import { useState } from "react";

export const PropertyContext = createContext(null);

export const PropertyProvider = ({children}) => {

    const [properties, setProperties] = useState(propertiesData);

   return (
     <PropertyContext.Provider value={{ properties, setProperties }}>
       {children}
     </PropertyContext.Provider>
   );
};

export default PropertyProvider;
