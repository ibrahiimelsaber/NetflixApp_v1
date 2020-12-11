/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function BlogWithHooks() {
  const [users, setData] = useState([{}]);

  useEffect(async () => {
    const result = await axios.get("https://jsonplaceholder.typicode.com/users");

    setData(result.data);
  });

  return (
    <div className="container w-75">
      <>
        <table className="table text-center border">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={Math.random() * 20}>
                <td>{user.id}</td>
                <td>{user.name}</td>
              </tr>
            ))}
            {
              <tr key={Math.random() * 20}>
                <td>{users.id}</td>
                <td>{users.name}</td>
              </tr>
            }
          </tbody>
        </table>
      </>
    </div>
  );
}
