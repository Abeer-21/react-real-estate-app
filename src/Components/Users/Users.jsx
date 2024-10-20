import React from "react";

import User from "./User";

const Users = (props) => {
  const users = props.data;

  return (
    <section className="users">
      {users.map((user) => (
        <div className="user" key={user.id}>
          <User 
          user={user}
           />
        </div>
      ))}
    </section>
  );
};

export default Users;
