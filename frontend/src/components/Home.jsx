import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Products from "./CRUD/Products";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
    <div className="home-page">
      <Navbar />
      <div className="container my-5">
        <div className="text-center">
          <h1 className="display-4 mb-4">
            Welcome {user && user.email ? user.email : "Guest"}
          </h1>
          <p className="lead">
            {user ? "You are logged in!" : "Please log in to continue"}
          </p>
          {user && (
            <Link
              to="/login"
              className="btn btn-danger btn-lg"
              onClick={() => {
                localStorage.removeItem("user");
                setUser(null); // Update state to reflect logout
              }}
            >
              Logout
            </Link>
          )}
        </div>
      </div>
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
