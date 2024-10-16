import React from "react";

const User = (props) => {
  const { address, email, username, name, phone, image } = props.user;

  return (
    <div key={props.user.id}>
      <h1>{`${name.firstname} ${name.lastname}`}</h1>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Address: {`${address.number} ${address.street}, ${address.city}`}</p>
      <img src={image} alt={`${name.firstname}`} />
    </div>
  );
};

export default User;
