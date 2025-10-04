import React from "react";
import { useNavigate } from "react-router-dom";

const RequesterDashboard = () => {
  const navigate = useNavigate();

  const handleSelection = (type) => {
    localStorage.setItem("requesterType", type);
    navigate("/requester/home"); // redirect later to requester main dashboard
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Request Food Assistance</h1>
      <p style={styles.subtitle}>Choose how you'd like to request:</p>

      <div style={styles.cards}>
        <div
          style={{
            ...styles.card,
            background: "linear-gradient(135deg, #f4a261, #e76f51)",
          }}
          onClick={() => handleSelection("individual")}
        >
          <i className="fas fa-user" style={styles.icon}></i>
          <h3>Individual</h3>
          <p>Request food support for yourself or your family.</p>
        </div>

        <div
          style={{
            ...styles.card,
            background: "linear-gradient(135deg, #ffb703, #fb8500)",
          }}
          onClick={() => handleSelection("ngo")}
        >
          <i className="fas fa-hand-holding-heart" style={styles.icon}></i>
          <h3>NGO / Organization</h3>
          <p>Request food donations for your community programs.</p>
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
    background: "linear-gradient(135deg, #fff5e6 0%, #ffffff 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    textAlign: "center",
  },
  title: {
    color: "#9a3412",
    fontSize: "2rem",
    fontWeight: "700",
  },
  subtitle: {
    color: "#ca5310",
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
    border: "2px solid #ca5310",
    color: "#ca5310",
    borderRadius: "8px",
    padding: "0.7rem 1.5rem",
    cursor: "pointer",
    fontWeight: "600",
  },
};

export default RequesterDashboard;
