import React, { useEffect, useState } from "react";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("rememberMe");
    window.location.href = "/login";
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
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
          <li>
            <a href="#partner">Food Partner</a>
          </li>
          {!loggedIn && (
            <li>
              <a href="/login" className="btn-login">
                Login
              </a>
            </li>
          )}
          {!loggedIn && (
            <li>
              <a href="/register" className="btn-register">
                Register
              </a>
            </li>
          )}
          {loggedIn && (
            <li>
              <a href="/" className="btn-login" onClick={handleLogout}>
                Logout
              </a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
