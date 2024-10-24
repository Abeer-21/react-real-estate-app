import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../Pages/Home";
import Contact from "../pages/contact";
import Properties from "./property/properties";
import AddProperty from "./Property/AddProperty";
import EditProperty from "./Property/EditProperty";
import About from "../pages/about";
import Navbar from "../routes/navbar";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/ErrorPage";
import { PropertyContext } from "./property/propertyContext";

import { propertiesData } from "./data/propertiesData";

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
  const deleteProperty = () => {
    console.log("delete propery");
  };
  console.log("property data in app ", propertiesData);
  return (
    <PropertyContext.Provider value={{propertiesData, deleteProperty }}>
      <RouterProvider router={router} />
    </PropertyContext.Provider>
  );
};

export default App;
