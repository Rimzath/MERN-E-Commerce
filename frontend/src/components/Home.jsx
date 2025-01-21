// import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(#00e3e6,#14d1e8,#6686f0,#707df1,#816df3,#9759f5,#ae44f7,#f800ff)",
      }}
      className="d-flex flex-column justify-content-center align-items-center text-center vh-100"
    >
      <h1>Login Successfully</h1>
      <Link to="/login" className="btn btn-light my-5">
        Logout
      </Link>
    </div>
  );
};

export default Home;
