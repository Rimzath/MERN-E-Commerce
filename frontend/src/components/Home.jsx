import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Products from "./CRUD/Products";
import Navbar from "./Navbar";

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve the user from localStorage
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser)); // Parse the stored user data
    }
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100 bg-primary">
      <Navbar />
      <Products />
      <h5>
        Welcome {user && user.email ? user.email : "Guest"}
        <br />
        {user ? "Login Successfully" : "Please log in to continue"}
      </h5>
      {user && (
        <Link
          to="/login"
          className="btn btn-light my-5"
          onClick={() => {
            localStorage.removeItem("user");
            setUser(null); // Update state to reflect logout
          }}
        >
          Logout
        </Link>
      )}
    </div>
  );
};

export default Home;
