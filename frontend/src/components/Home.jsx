// import React from 'react';
import { Link } from "react-router-dom";
import Products from "./CRUD/Products";
import Navbar from "./Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100 bg-primary">
      <Navbar />
      <Products />
      <h5>
        Welcome {user ? user.email : "Guest"}
        <br />
        Login Successfully
      </h5>
      <Link
        to="/login"
        className="btn btn-light my-5"
        onClick={() => localStorage.removeItem("user")}
      >
        Logout
      </Link>
    </div>
  );
};

export default Home;
