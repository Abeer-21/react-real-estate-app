import React, { useState } from "react";

import Users from "./Users/Users";
import AddUser from "./Users/AddUser";
import { users } from "./Users/UsersData";

export default function App() {

  const [usersList, setUsers] = useState(users);
  const [cart, setCart] = useState([]);

  const handleAddUser = (newUser) => {
    setUsers((prevUsers) => {
      return [...prevUsers, newUser];
    });
  };

  const handleDeleteUser = (id) => {
    const filteredUsers = usersList.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };
  return (
    <>
      <AddUser onHandleAddUser={handleAddUser} />
      <div>
        {usersList.length > 0 ? (
          <Users usersList={usersList} onHandelDeleteUser={handleDeleteUser} />
        ) : (
          "No users found!"
        )}
      </div>
    </>
  );
}
