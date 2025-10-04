import React from "react";
import { useNavigate } from "react-router-dom";

const DonorDashboard = () => {
  const navigate = useNavigate();

  const handleSelection = (type) => {
    // You can store this in localStorage or context later
    localStorage.setItem("donorType", type);
    navigate("/donor/home"); // redirect to donor main dashboard later
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Become a Food Donor</h1>
      <p style={styles.subtitle}>Select your role to continue:</p>

      <div style={styles.cards}>
        <div
          style={{
            ...styles.card,
            background: "linear-gradient(135deg, #95d5b2, #52b788)",
          }}
          onClick={() => handleSelection("individual")}
        >
          <i className="fas fa-user" style={styles.icon}></i>
          <h3>Individual</h3>
          <p>Donate surplus home-cooked or packed meals to those in need.</p>
        </div>

        <div
          style={{
            ...styles.card,
            background: "linear-gradient(135deg, #2d6a4f, #1b4332)",
          }}
          onClick={() => handleSelection("restaurant")}
        >
          <i className="fas fa-utensils" style={styles.icon}></i>
          <h3>Restaurant</h3>
          <p>
            Share leftover food safely and responsibly from your restaurant.
          </p>
        </div>
      </div>

      <button style={styles.backBtn} onClick={() => navigate("/choose-role")}>
        ← Back
      </button>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f1f8f5 0%, #ffffff 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    textAlign: "center",
  },
  title: {
    color: "#1b4332",
    fontSize: "2rem",
    fontWeight: "700",
  },
  subtitle: {
    color: "#2d6a4f",
    marginBottom: "2rem",
  },
  cards: {
    display: "flex",
    gap: "2rem",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    width: "280px",
    borderRadius: "15px",
    color: "#fff",
    padding: "2rem 1.5rem",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  icon: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  backBtn: {
    marginTop: "2rem",
    background: "none",
    border: "2px solid #2d6a4f",
    color: "#2d6a4f",
    borderRadius: "8px",
    padding: "0.7rem 1.5rem",
    cursor: "pointer",
    fontWeight: "600",
  },
};

export default DonorDashboard;
