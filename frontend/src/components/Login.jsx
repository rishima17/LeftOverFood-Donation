import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaSignInAlt, FaUser, FaLock, FaArrowLeft } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage("Please fill in all fields");
      return;
    }

    try {
      const res = await axios.post(
        "https://leftoverfood-donation.onrender.com/api/auth/login",
        { email, password },
        { withCredentials: true } // if backend uses cookies
      );

      localStorage.setItem("token", res.data.token);
      setMessage("Login successful ✅");

      navigate("/choose-role"); // client-side redirect
    } catch (err) {
      setMessage(err.response?.data?.message || "Invalid credentials!");
    }
  };

  return (
    <div className="login-container">
      {/* your existing styles and markup */}
      <form className="login-form" onSubmit={handleLogin}>
        {/* email & password inputs */}
        <div className="form-options">
          <label className="remember-me">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />{" "}
            Remember Me
          </label>
          <Link to="/forgot-password" className="forgot-password">
            Forgot Password?
          </Link>
        </div>

        <button type="submit" className="login-btn">
          <FaSignInAlt /> Login
        </button>

        <div className="register-link">
          Don't have an account? <Link to="/register">Register Now</Link>
        </div>

        <div className="back-home">
          <Link to="/choose-role">
            <FaArrowLeft /> Back to Home
          </Link>
        </div>
      </form>

      {message && <div className="form-message">{message}</div>}
    </div>
  );
};

export default Login;
