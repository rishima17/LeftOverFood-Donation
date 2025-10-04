import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaUserPlus, FaUser, FaEnvelope, FaLock, FaArrowLeft } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      setMessage("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(
        "https://leftoverfood-donation.onrender.com/api/auth/register",
        { username, email, password ,confirmPassword },
        { withCredentials: true } // if backend uses cookies
      );

      setMessage("Registration successful ✅");
      navigate("/choose-role"); // redirect using React Router
    } catch (err) {
      setMessage(err.response?.data?.message || "Error during registration!");
    }
  };

  // Password strength checker
  const checkPasswordStrength = (pwd) => {
    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (pwd.match(/[a-z]/) && pwd.match(/[A-Z]/)) strength++;
    if (pwd.match(/[0-9]/)) strength++;
    if (pwd.match(/[^a-zA-Z0-9]/)) strength++;

    switch (strength) {
      case 0:
      case 1:
        setPasswordStrength("Weak password");
        break;
      case 2:
        setPasswordStrength("Medium password");
        break;
      case 3:
      case 4:
        setPasswordStrength("Strong password");
        break;
      default:
        setPasswordStrength("");
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
        .register-container {
          background: var(--white);
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
          overflow: hidden;
          max-width: 500px;
          width: 100%;
        }
        .register-header {
          background: linear-gradient(135deg, var(--accent-orange) 0%, #E76F51 100%);
          color: var(--white);
          padding: 2.5rem;
          text-align: center;
        }
        .register-header i { font-size: 3rem; margin-bottom: 1rem; }
        .register-header h2 { font-size: 2rem; margin-bottom: 0.5rem; }
        .register-header p { opacity: 0.95; }
        .register-form { padding: 2.5rem; }
        .form-group { margin-bottom: 1.5rem; }
        .form-group label { display: block; margin-bottom: 0.5rem; color: var(--text-dark); font-weight: 600; }
        .input-group { position: relative; }
        .input-group i { position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: var(--primary-light); }
        .form-group input {
          width: 100%; padding: 0.9rem 1rem 0.9rem 45px;
          border: 2px solid #D8F3DC; border-radius: 10px; font-size: 1rem; transition: all 0.3s ease;
        }
        .form-group input:focus { outline: none; border-color: var(--primary-light); box-shadow: 0 0 0 3px rgba(82, 183, 136, 0.1); }
        .password-strength { margin-top: 0.5rem; font-size: 0.85rem; color: #666; }
        .register-btn {
          width: 100%; padding: 1rem;
          background: linear-gradient(135deg, var(--accent-orange) 0%, #E76F51 100%);
          color: var(--white); border: none; border-radius: 10px; font-size: 1.1rem; font-weight: 700;
          cursor: pointer; transition: all 0.3s ease; display: flex; align-items: center; justify-content: center; gap: 0.5rem;
        }
        .register-btn:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(244, 162, 97, 0.4); }
        .login-link { text-align: center; margin-top: 1.5rem; color: var(--text-dark); }
        .login-link a { color: var(--primary-medium); text-decoration: none; font-weight: 700; }
        .login-link a:hover { text-decoration: underline; }
        .back-home { text-align: center; margin-top: 1rem; }
        .back-home a { color: var(--primary-medium); text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; }
        .back-home a:hover { color: var(--primary-light); }
        .form-message { text-align: center; margin-top: 1rem; color: var(--accent-green); font-weight: 600; }
      `}</style>
   <div className="register-container">
        <div className="register-header">
          <FaUserPlus />
          <h2>Join Our Community</h2>
          <p>Create an account to start making a difference</p>
        </div>

        <form className="register-form" onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <div className="input-group">
              <FaUser />
              <input
                type="text"
                id="username"
                placeholder="Choose a username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-group">
              <FaEnvelope />
              <input
                type="email"
                id="email"
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
                placeholder="Create a password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  checkPasswordStrength(e.target.value);
                }}
                required
              />
            </div>
            {password && (
              <div className="password-strength">{passwordStrength}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <div className="input-group">
              <FaLock />
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>
        {/* username, email, password, confirm password inputs */}
        <button type="submit" className="register-btn">
          <FaUserPlus /> Create Account
        </button>

        <div className="login-link">
          Already have an account? <Link to="/login">Login Here</Link>
        </div>

        <div className="back-home">
          <Link to="/dashboard">
            <FaArrowLeft /> Back to Home
          </Link>
        </div>
      </form>

      {message && <div className="form-message">{message}</div>}
    </div>
     </>
  );
};

export default Register;
