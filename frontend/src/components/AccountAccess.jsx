import React from "react";
import { Link } from "react-router-dom"; // ✅ import Link

const AccountAccess = () => (
  <section className="account-access">
    <div className="container">
      <h2>Join Our Community Today</h2>
      <p>
        Create an account or login to start making a difference in your
        community
      </p>
      <div className="account-buttons">
        <Link to="/login" className="account-btn btn-login-access">
          <i className="fas fa-sign-in-alt"></i> Login to Your Account
        </Link>
        <Link to="/register" className="account-btn btn-register-access">
          <i className="fas fa-user-plus"></i> Register Now
        </Link>
      </div>
    </div>
  </section>
);

export default AccountAccess;
