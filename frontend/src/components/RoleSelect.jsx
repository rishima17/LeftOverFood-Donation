import React from "react";
import { useNavigate } from "react-router-dom";

const RoleSelect = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to FoodShare</h1>
      <p style={styles.subtitle}>What would you like to do today?</p>

      <div style={styles.buttons}>
        <button
          style={styles.donateBtn}
          onClick={() => navigate("/donor-dashboard")}
        >
          🍱 Donate Food
        </button>
        <button
          style={styles.requestBtn}
          onClick={() => navigate("/requester-dashboard")}
        >
          🥡 Request Food
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #d8f3dc 0%, #fff 100%)",
  },
  title: {
    fontSize: "2.2rem",
    color: "#1b4332",
    marginBottom: "0.5rem",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#2d6a4f",
    marginBottom: "2rem",
  },
  buttons: {
    display: "flex",
    gap: "2rem",
  },
  donateBtn: {
    background: "linear-gradient(135deg, #2d6a4f, #52b788)",
    border: "none",
    color: "#fff",
    padding: "1rem 2rem",
    borderRadius: "10px",
    fontSize: "1.1rem",
    cursor: "pointer",
    fontWeight: "600",
  },
  requestBtn: {
    background: "linear-gradient(135deg, #f4a261, #e76f51)",
    border: "none",
    color: "#fff",
    padding: "1rem 2rem",
    borderRadius: "10px",
    fontSize: "1.1rem",
    cursor: "pointer",
    fontWeight: "600",
  },
};

export default RoleSelect;
