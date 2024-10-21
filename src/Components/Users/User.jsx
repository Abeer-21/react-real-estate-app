import React, { useState } from "react";

const User = ({ user, onHandelDeleteUser }) => {
  const {email, username, name, phone, image, gender, id } = user;

  const handleDelete = () => {
    onHandelDeleteUser(id);
  };

  return (
    <div key={id}>
      <h1>{name}</h1>
      <p>Gender: {gender} </p>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <img src={image} alt={name} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default User;
