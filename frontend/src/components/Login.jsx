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
      .then((res) => {
        if (res.data.success) {
          localStorage.setItem("user", JSON.stringify(res.data.user));
          window.location.href = "/home"; // Redirect to home page
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => console.error("Login error:", err));

    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        if (result.data.success) {
          const { userType } = result.data.user; // Fetch userType from response
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
    <div>
      <div
        className="d-flex justify-content-center align-items-center text-center vh-100"
        style={{
          backgroundImage:
            "linear-gradient(#00e3e6,#14d1e8,#6686f0,#707df1,#816df3,#9759f5,#ae44f7,#f800ff)",
        }}
      >
        <div className="bg-white p-3 rounded" style={{ width: "40%" }}>
          <h2 className="mb-3 text-primary">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 text-start">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <strong>Email Id</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control"
                id="exampleInputEmail1"
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="exampleInputPassword1" className="form-label">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
          <p className="container my-2">Don&apos;t have an account?</p>
          <Link to="/register" className="btn btn-secondary">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
