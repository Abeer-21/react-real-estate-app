import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Container, CssBaseline } from "@mui/material";

import Home from "../pages/home";
import Contact from "../pages/contact";
import Properties from "./property/properties";
import AddProperty from "./property/addProperty";
import EditProperty from "./property/editProperty";
import PropertyDetails from "./property/propertyDetails";
import About from "../pages/about";
import Navbar from "../routes/navbar";
import Login from "../Pages/Login";
import Profile from "./users/profile";
import ErrorPage from "../Pages/ErrorPage";
import PropertyProvider from "../context/propertyContext";
import Footer from "./layout/footer";
import { UserProvider } from '../context/UserContext'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "contact", element: <Contact /> },
      { path: "properties", element: <Properties /> },
      { path: "add-property", element: <AddProperty /> },
      { path: "edit-property/:id", element: <EditProperty /> },
      { path: "about", element: <About /> },
      { path: "login", element: <Login /> },
      { path: "profile", element: <Profile /> },
      { path: "property/:id", element: <PropertyDetails /> },
    ],
  },
]);

const App = () => {
  return (
    <UserProvider>
      <Container>
        <CssBaseline />
        <PropertyProvider>
          <RouterProvider router={router} />
        </PropertyProvider>
        <Footer />
      </Container>
    </UserProvider>
  );
};

export default App;
