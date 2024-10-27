import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { useUser } from "../../context/UserContext"; // Import user context
import { Container, Typography, TextField, Button, Box } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useUser(); // Get login function from context

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const validateInput = () => {
    const newErrors = {};
    if (!user.name.trim()) newErrors.name = "Name is required";
    if (!user.email.trim()) newErrors.email = "Email is required";
    if (!user.password.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateInput()) {
      const newUser = {
        id: nanoid(),
        name: user.name,
        email: user.email,
        password: user.password,
      };

      login(newUser); // Call login from context
      navigate("/profile", {
        state: { email: user.email, name: user.name },
      });

      // Reset form
      setUser({
        name: "",
        email: "",
        password: "",
      });
      setErrors({});
    } else {
      console.log(errors);
    }
  };

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: "#33372C", textAlign: "center" }}
      >
        Sign In
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            label="Name"
            name="name"
            value={user.name}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.name}
            helperText={errors.name}
            variant="outlined"
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Email"
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.email}
            helperText={errors.email}
            variant="outlined"
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Password"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.password}
            helperText={errors.password}
            variant="outlined"
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#FF885B", // Use your desired color here
            "&:hover": {
              backgroundColor: "#FF6F4C", // Optional: Darker shade on hover
            },
          }}
          fullWidth
        >
          Sign In
        </Button>
      </form>
    </Container>
  );
};

export default Login;
