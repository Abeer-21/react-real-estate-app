import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/listings">Listings</Link>
            </li>
            <li>
              <Link to="/add-property">Add Property</Link>
            </li>
            <li>
              <Link to="/edit-property">Edit Property</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet/>
    </>
  );
};

export default Navbar;
