// import React from 'react';
import { Link } from "react-router-dom";
import Products from "./CRUD/Products";
const Home = () => {
  return (
    <div
      style={{
        backgroundColor: "#276EFC",
      }}
      className="d-flex flex-column justify-content-center align-items-center text-center vh-100"
    >
      <Products />
      <h5>Login Successfully</h5>
      <Link to="/login" className="btn btn-light my-5">
        Logout
      </Link>
    </div>
  );
};

export default Home;
