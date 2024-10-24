import React from "react";

import User from "./user";

const Users = ({ usersList, onHandelDeleteUser }) => {
  return (
    <section className="users">
      {usersList.map((user) => (
        <div className="user" key={user.id}>
          <User user={user} onHandelDeleteUser={onHandelDeleteUser} />
        </div>
      ))}
    </section>
  );
};

export default Users;
