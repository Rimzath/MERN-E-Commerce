import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("User");
  const [secretKey, setSecretKey] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userType === "Admin" && secretKey !== "rimzath123") {
      alert("Invalid Admin Secret Key");
      return;
    }

    axios
      .post("http://localhost:3001/register", {
        name,
        email,
        password,
        userType,
      })
      .then((result) => {
        console.log(result);
        if (result.data === "Already registered") {
          alert("Email already registered! Please login to proceed.");
          navigate("/login");
        } else {
          alert("Registered successfully! Please login to proceed.");
          navigate("/login");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <div className="bg-white p-4 rounded-4 shadow" style={{ width: "400px" }}>
        <h2 className="text-center mb-4 text-primary">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">
              <strong>Register As</strong>
            </label>
            <div className="d-flex gap-3">
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="userType"
                  value="User"
                  checked={userType === "User"}
                  onChange={(event) => setUserType(event.target.value)}
                />
                <label className="form-check-label">User</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="userType"
                  value="Admin"
                  checked={userType === "Admin"}
                  onChange={(event) => setUserType(event.target.value)}
                />
                <label className="form-check-label">Admin</label>
              </div>
            </div>
          </div>
          {userType === "Admin" && (
            <div className="mb-3">
              <label htmlFor="secretKey" className="form-label">
                <strong>Secret Key</strong>
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Secret Key"
                value={secretKey}
                onChange={(event) => setSecretKey(event.target.value)}
                required
              />
            </div>
          )}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              id="email"
              value={email}
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
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-3">
            Register
          </button>
        </form>
        <p className="text-center mb-0">Already have an account?</p>
        <Link to="/login" className="btn btn-outline-secondary w-100 mt-2">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
