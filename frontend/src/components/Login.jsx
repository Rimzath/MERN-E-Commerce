import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        if (result.data.success) {
          const { userType } = result.data.user; // Fetch userType from response
          localStorage.setItem("user", JSON.stringify(result.data.user));
          console.log("Login Success");
          alert("Login successful!");

          // Navigate based on userType
          if (userType === "Admin") {
            navigate("/admindashboard");
          } else {
            navigate("/home");
          }
        } else {
          alert(
            result.data.message || "Invalid credentials! Please try again."
          );
        }
      })
      .catch((err) => {
        console.error(err);
        alert("An error occurred during login. Please try again later.");
      });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <div className="bg-white p-4 rounded-4 shadow" style={{ width: "400px" }}>
        <h2 className="text-center mb-4 text-primary">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              id="email"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              id="password"
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-3">
            Login
          </button>
        </form>
        <p className="text-center mb-0">Don't have an account?</p>
        <Link to="/register" className="btn btn-outline-secondary w-100 mt-2">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
