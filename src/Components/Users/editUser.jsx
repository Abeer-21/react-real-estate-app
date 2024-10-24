import React, { useState, useEffect } from "react";
import { uploadImageToCloudinary } from "../../utility/uploadImage";

const EditUser = (props) => {
  const { existingUser, onHandleEditUser } = props;

  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({
    name: "",
    username: "",
    gender: "female",
    email: "",
    phone: "",
    image: "",
  });

  useEffect(() => {
    if (existingUser) {
      setUser(existingUser);
    }
  }, [existingUser]);

  const handleUserChange = (event) => {
    const inputField = event.target.name;
    const value = event.target.value;
    setUser((prevState) => {
      return { ...prevState, [inputField]: value };
    });
  };

  const handleImageChange = (event) => {
    setUser((prevState) => {
      return { ...prevState, [event.target.name]: event.target.files[0] };
    });
  };

  const validateInput = () => {
    const newErrors = {};
    if (!user.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (user.username.length < 3) {
      newErrors.username = "Username should be at least 3 characters long";
    }
    if (!user.email.trim()) {
      newErrors.email = "Email is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let imageURL = user.image;

    // Upload image if a new one is selected
    if (user.image instanceof File) {
      imageURL = await uploadImageToCloudinary(user.image);
    }

    if (validateInput()) {
      const updatedUser = {
        id: user.id, // Preserve the existing ID
        name: user.name,
        username: user.username,
        gender: user.gender,
        email: user.email,
        phone: user.phone,
        image: imageURL,
      };

      console.log("Updated user ", updatedUser);
      onHandleEditUser(updatedUser);

      setUser({
        name: "",
        username: "",
        gender: "female",
        email: "",
        phone: "",
        image: "",
      });
    } else {
      console.log(errors);
    }
  };

  return (
    <>
      <h3>Edit User</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleUserChange}
            required
          />
          {errors.name && <span>{errors.name}</span>}

          <label htmlFor="gender">Gender: </label>
          <select
            id="gender"
            name="gender"
            value={user.gender}
            onChange={handleUserChange}
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleUserChange}
            required
          />

          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleUserChange}
            required
          />

          <label htmlFor="phone">Phone: </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={user.phone}
            onChange={handleUserChange}
            required
          />

          <label htmlFor="image">Image: </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
          {user.image && (
            <div>
              <img
                className="user-img"
                src={URL.createObjectURL(user.image)}
                alt="Selected Preview"
              />
            </div>
          )}
          {errors.image && <p style={{ color: "red" }}>{errors.image}</p>}
        </div>
        <button type="submit">Update User</button>
      </form>
    </>
  );
};

export default EditUser;
