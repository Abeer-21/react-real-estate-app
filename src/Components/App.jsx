import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/home";
import Contact from "../pages/contact";
import Properties from "./property/properties";
import AddProperty from "./property/addProperty";
import EditProperty from "./property/editProperty";
import About from "../pages/about";
import Navbar from "../routes/navbar";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/ErrorPage";
import PropertyProvider from "../context/propertyContext";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "properties",
        element: <Properties />,
      },
      {
        path: "add-property",
        element: <AddProperty />,
      },
      {
        path: "edit-property",
        element: <EditProperty />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

const App = () => {
  // const [properties, setProperties] = useState(propertiesData);

  // const addProperty = (newProperty) => {
  //   setProperties((prevProperties) => [...prevProperties, newProperty]);
  // };

  // const updateProperty = (updatedProperty) => {
  //   setProperties((prevProperties) =>
  //     prevProperties.map((property) =>
  //       property.id === updatedProperty.id
  //         ? { ...property, ...updatedProperty }
  //         : property
  //     )
  //   );
  // };

  // const deleteProperty = (propertyId) => {
  //   setProperties((prevProperties) =>
  //     prevProperties.filter((property) => property.id !== propertyId)
  //   );
  // };

  return (
    <PropertyProvider>
      <RouterProvider router={router} />
    </PropertyProvider>
  );
};

export default App;
