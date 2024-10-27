import React, { useState } from "react";
import { nanoid } from "nanoid";

import { uploadImageToCloudinary } from "../../utility/uploadImage"; 

const AddUser = (props) => {
  const { setUsers } = useContext(UserContext);
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({
    name: "",
    username: "",
    gender: "",
    email: "",
    phone: "",
    image: "",
  });

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
    if (user.username.length < 2) {
      newErrors.username = "Username should de at least 3 characters long";
    }
    if (!user.email.trim()) {
      newErrors.email = "Email is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const imgeURL = await uploadImageToCloudinary(user.image);

    if (validateInput()) {
      const newUser = {
        id: nanoid(),
        name: user.name,
        username: user.username,
        gender: user.gender,
        email: user.email,
        phone: user.phone,
        image: imgeURL,
      };
       addUser(newUser);
      // Reset
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
      <h3>Add User</h3>
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
          <label htmlFor="gender ">Gender: </label>
          <select
            name=""
            id="gender"
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
            type="text"
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
          <label htmlFor="phone">Phone: </label>
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
          {errors.image && <p style={styles.error}>{errors.image}</p>}
        </div>
        <button type="submit">Add User</button>
      </form>
    </>
  );
};

export default AddUser;
