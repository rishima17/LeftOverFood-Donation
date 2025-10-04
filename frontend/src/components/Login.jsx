import React, { useState } from "react";
import axios from "axios";
import { FaSignInAlt, FaUser, FaLock, FaArrowLeft } from "react-icons/fa";

const Login = () => {
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
      const res = await axios.post("http://localhost:3000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      setMessage("Login successful ✅");

      setTimeout(() => {
        window.location.href = "/choose-role"; // adjust route
      }, 1000);
    } catch (err) {
      setMessage(err.response?.data?.message || "Invalid credentials!");
    }
  };

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
          --primary-dark: #1B4332;
          --primary-medium: #2D6A4F;
          --primary-light: #52B788;
          --accent-green: #95D5B2;
          --bg-light: #F1F8F5;
          --accent-orange: #F4A261;
          --white: #FFFFFF;
          --text-dark: #1B4332;
        }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, var(--bg-light) 0%, var(--white) 100%);
          min-height: 100vh;
          display: flex; align-items: center; justify-content: center; padding: 2rem;
        }
        .login-container {
          background: var(--white);
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          overflow: hidden;
          max-width: 450px;
          width: 100%;
        }
        .login-header {
          background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-medium) 100%);
          color: var(--white);
          padding: 2.5rem;
          text-align: center;
        }
        .login-header i { font-size: 3rem; margin-bottom: 1rem; color: var(--accent-green); }
        .login-header h2 { font-size: 2rem; margin-bottom: 0.5rem; }
        .login-header p { opacity: 0.9; }
        .login-form { padding: 2.5rem; }
        .form-group { margin-bottom: 1.5rem; }
        .form-group label { display: block; margin-bottom: 0.5rem; color: var(--text-dark); font-weight: 600; }
        .input-group { position: relative; }
        .input-group i { position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: var(--primary-light); }
        .form-group input {
          width: 100%; padding: 0.9rem 1rem 0.9rem 45px;
          border: 2px solid #D8F3DC; border-radius: 10px; font-size: 1rem; transition: all 0.3s ease;
        }
        .form-group input:focus { outline: none; border-color: var(--primary-light); box-shadow: 0 0 0 3px rgba(82, 183, 136, 0.1); }
        .form-options { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; font-size: 0.9rem; }
        .remember-me { display: flex; align-items: center; gap: 0.5rem; }
        .remember-me input[type="checkbox"] { width: 18px; height: 18px; cursor: pointer; }
        .forgot-password { color: var(--primary-medium); text-decoration: none; font-weight: 600; }
        .forgot-password:hover { color: var(--primary-light); }
        .login-btn {
          width: 100%; padding: 1rem;
          background: linear-gradient(135deg, var(--primary-medium) 0%, var(--primary-light) 100%);
          color: var(--white); border: none; border-radius: 10px; font-size: 1.1rem; font-weight: 700;
          cursor: pointer; transition: all 0.3s ease; display: flex; align-items: center; justify-content: center; gap: 0.5rem;
        }
        .login-btn:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(82, 183, 136, 0.3); }
        .register-link { text-align: center; margin-top: 1.5rem; color: var(--text-dark); }
        .register-link a { color: var(--accent-orange); text-decoration: none; font-weight: 700; }
        .register-link a:hover { text-decoration: underline; }
        .back-home { text-align: center; margin-top: 1rem; }
        .back-home a { color: var(--primary-medium); text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; }
        .back-home a:hover { color: var(--primary-light); }
        .form-message { text-align: center; margin-top: 1rem; color: var(--accent-green); font-weight: 600; }
      `}</style>

      <div className="login-container">
        <div className="login-header">
          <FaSignInAlt />
          <h2>Welcome Back!</h2>
          <p>Login to continue making a difference</p>
        </div>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-group">
              <FaUser />
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-group">
              <FaLock />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />{" "}
              Remember Me
            </label>
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </div>

          <button type="submit" className="login-btn">
            <FaSignInAlt /> Login
          </button>

          <div className="register-link">
            Don't have an account? <a href="/register">Register Now</a>
          </div>

          <div className="back-home">
            <a href="/choose-role">
              <FaArrowLeft /> Back to Home
            </a>
          </div>
        </form>

        {message && <div className="form-message">{message}</div>}
      </div>
    </>
  );
};

export default Login;
