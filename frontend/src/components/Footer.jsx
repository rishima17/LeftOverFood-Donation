import React from "react";

const Footer = () => (
  <footer>
    <div className="footer-content">
      <div className="footer-section">
        <h3>About FoodShare</h3>
        <p>
          We're dedicated to reducing food waste and fighting hunger by
          connecting surplus food with those who need it most.
        </p>
        <div className="social-links">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul className="footer-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
          <li>
            <a href="#partner">Food Partner</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Account</h3>
        <ul className="footer-links">
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
          <li>
            <a href="#">Forgot Password</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Contact Info</h3>
        <ul className="footer-links">
          <li>
            <i className="fas fa-envelope"></i> info@foodshare.com
          </li>
          <li>
            <i className="fas fa-phone"></i> +1 (555) 123-4567
          </li>
          <li>
            <i className="fas fa-map-marker-alt"></i> 123 Green Street, Eco City
          </li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2025 All Rights Reserved | FoodShare Platform</p>
    </div>
  </footer>
);

export default Footer;
