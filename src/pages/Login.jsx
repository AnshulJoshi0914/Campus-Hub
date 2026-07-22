import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { useState } from "react";
import AuthAPI from "../api/Authapi";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
  e.preventDefault();

  console.log("Submitting:", formData);

  try {
    const res = await AuthAPI.post("/login", formData);

    console.log("Login Response:", res.data);

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("admin", JSON.stringify(res.data.admin));

    console.log("Saved Token:", localStorage.getItem("token"));

    alert("Login Successful");

    navigate("/dashboard");
  } catch (error) {
    console.log("Login Error:", error.response?.data);

    alert(error.response?.data?.message || "Login Failed");
  }
};

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleLogin}>
        <h1 className="logo">🎓 CampusHub</h1>

        <p className="subtitle">College Management System</p>

        <h2>Welcome Back!</h2>

        <p className="login-text">Login to your account</p>

        <div className="input-group">
          <label>Email</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Password</label>

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="login-options">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>

          <Link to="/">Forgot Password?</Link>
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;