import React, { useState } from "react";

import Users from "./Users/Users";
import AddUser from "./Users/AddUser";
import { users } from "./Users/UsersData";

export default function App() {
  //const [users, setUsers] = useState(UsersData); I will do it later

  const handelAddUser = (newUser) => {
    setUsers((prevProducts) => {
      return [...prevProducts, newUser];
    });
  };

  const handelDeleteUser = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  return (
    <>
      <AddUser />
      <div>{users.length > 0 ? <Users data={users} /> : "No users found!"}</div>
    </>
  );
}
