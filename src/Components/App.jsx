import React from "react";

import Users from "./Users/Users";
import { users } from "./Users/UsersData";

export default function App() {
  return (
    <div>{users.length > 0 ? <Users data={users} /> : "No users found!"}</div>
  );
}
