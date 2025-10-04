import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DonorForm = () => {
  const navigate = useNavigate();
  const donorType = localStorage.getItem("donorType");

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    foodType: "",
    quantity: "",
    expiryTime: "",
    address: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Donation submitted:", { donorType, ...formData });
    alert("✅ Donation submitted successfully!");
    navigate("/dashboard");
  };

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1>
          {donorType === "restaurant"
            ? "🍴 Restaurant Donation Form"
            : "🏠 Individual Donation Form"}
        </h1>
        <p>Provide your food donation details to help those in need.</p>
      </div>

      <div style={styles.formCard}>
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.formGrid}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder="Enter your name"
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Contact Number</label>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder="Enter phone number"
              />
            </div>
          </div>

          <div style={styles.formGrid}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Type of Food</label>
              <input
                type="text"
                name="foodType"
                value={formData.foodType}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder="e.g. Cooked Meals, Packaged Items"
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Quantity</label>
              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder="e.g. 10 servings"
              />
            </div>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Best Before / Expiry Time</label>
            <input
              type="datetime-local"
              name="expiryTime"
              value={formData.expiryTime}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Pickup Address</label>
            <textarea
              name="address"
              rows="3"
              value={formData.address}
              onChange={handleChange}
              required
              style={styles.textarea}
              placeholder="Enter the pickup location"
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Additional Notes (Optional)</label>
            <textarea
              name="notes"
              rows="2"
              value={formData.notes}
              onChange={handleChange}
              style={styles.textarea}
              placeholder="Any special instructions..."
            />
          </div>

          <div style={styles.buttonGroup}>
            <button type="submit" style={styles.submitBtn}>
              Submit Donation
            </button>
            <button
              type="button"
              style={styles.backBtn}
              onClick={() => navigate("/donor-dashboard")}
            >
              ← Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// 🌿 Modern, polished styling
const styles = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #D8F3DC 0%, #B7E4C7 40%, #FFFFFF 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "3rem 1rem",
  },
  header: {
    textAlign: "center",
    marginBottom: "2rem",
    color: "#1B4332",
  },
  formCard: {
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    borderRadius: "20px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
    padding: "2.5rem 3rem",
    width: "100%",
    maxWidth: "700px",
  },
  title: {
    color: "#1B4332",
    fontSize: "1.8rem",
    fontWeight: "700",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontWeight: "600",
    color: "#1B4332",
    marginBottom: "0.4rem",
  },
  input: {
    padding: "0.9rem 1rem",
    borderRadius: "12px",
    border: "2px solid #95D5B2",
    outline: "none",
    fontSize: "1rem",
    transition: "0.3s",
  },
  textarea: {
    borderRadius: "12px",
    border: "2px solid #95D5B2",
    padding: "0.9rem 1rem",
    fontSize: "1rem",
    resize: "none",
    transition: "0.3s",
  },
  inputFocus: {
    borderColor: "#52B788",
    boxShadow: "0 0 5px rgba(82, 183, 136, 0.4)",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "1.5rem",
  },
  submitBtn: {
    background: "linear-gradient(135deg, #2D6A4F, #1B4332)",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    padding: "1rem 2rem",
    fontSize: "1rem",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(45, 106, 79, 0.3)",
    transition: "0.3s",
  },
  backBtn: {
    background: "none",
    border: "2px solid #2D6A4F",
    color: "#2D6A4F",
    borderRadius: "12px",
    padding: "1rem 2rem",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default DonorForm;
