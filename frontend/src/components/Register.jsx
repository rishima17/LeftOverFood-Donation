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
        { username, email, password },
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
    <div className="register-container">
      {/* header and form markup remain same */}
      <form className="register-form" onSubmit={handleRegister}>
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
  );
};

export default Register;
