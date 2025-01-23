import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const users = () => {
  const [users, setUsers] = useState([]);

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="tab vw-100 w-50 bg-white rounded p-3">
        <div>
          {" "}
          <h2>Home Page</h2>
        </div>

        {/*  Botão que chama a tela ou rota criar usuário, usando um link */}
        <Link to="/create" className="btn btn-success">
          Add +
        </Link>

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              console.log(user);
              return (
                // eslint-disable-next-line react/jsx-key
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    <Link
                      to={`/update/${user._id}`}
                      className="btnEdit btn btn-success"
                    >
                      Update
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      id="btnDelete"
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default users;
