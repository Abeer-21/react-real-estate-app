import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#33372C" }}>
        <Container disableGutters>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, color: "#FFE5CF" }}>
              React Real Estate
            </Typography>
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{ color: "#FFE5CF" }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/about"
              sx={{ color: "#FFE5CF" }}
            >
              About
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/contact"
              sx={{ color: "#FFE5CF" }}
            >
              Contact
            </Button>
            {user && (
              <Button
                color="inherit"
                component={Link}
                to="/add-property"
                sx={{ color: "#FFE5CF" }}
              >
                Add Property
              </Button>
            )}
            {user ? (
              <Button
                color="inherit"
                onClick={() => {
                  logout();
                  navigate("/");
                }}
                sx={{ color: "#FFE5CF" }}
              >
                Logout
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to="/login"
                sx={{ color: "#FFE5CF" }}
              >
                Login
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Navbar;
