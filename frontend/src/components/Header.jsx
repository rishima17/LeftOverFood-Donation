import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("rememberMe");
    window.location.href = "/login"; // optional: can also use navigate
  };

  const toggleMenu = () => {
    document.getElementById("navLinks").classList.toggle("active");
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <i className="fas fa-leaf"></i>
          <span>FoodShare</span>
        </div>
        <button className="mobile-menu-toggle" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
        <ul className="nav-links" id="navLinks">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/">Food Partner</Link>
          </li>
          {!loggedIn && (
            <li>
              <Link to="/login" className="btn-login">
                Login
              </Link>
            </li>
          )}
          {!loggedIn && (
            <li>
              <Link to="/register" className="btn-register">
                Register
              </Link>
            </li>
          )}
          {loggedIn && (
            <li>
              <Link to="/" className="btn-login" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
