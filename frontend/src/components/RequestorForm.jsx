import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const RequestorForm = () => {
  const navigate = useNavigate();
  const requestorType = localStorage.getItem("requestorType");

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    orgName: "",
    requiredFoodType: "",
    quantity: "",
    urgency: "",
    address: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Food Request Submitted:", { requestorType, ...formData });
    alert("✅ Food request submitted successfully!");
    navigate("/dashboard");
  };

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1>
          {requestorType === "ngo"
            ? "🤝 NGO Food Request Form"
            : "🏠 Individual Food Request Form"}
        </h1>
        <p>Fill in your details to request available food donations.</p>
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
                placeholder="Enter your full name"
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

          {requestorType === "ngo" && (
            <div style={styles.formGroup}>
              <label style={styles.label}>Organization Name</label>
              <input
                type="text"
                name="orgName"
                value={formData.orgName}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder="Enter NGO name"
              />
            </div>
          )}

          <div style={styles.formGrid}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Required Food Type</label>
              <input
                type="text"
                name="requiredFoodType"
                value={formData.requiredFoodType}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder="e.g. Cooked Meals, Dry Rations"
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Quantity Needed</label>
              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder="e.g. 20 servings"
              />
            </div>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Urgency Level</label>
            <select
              name="urgency"
              value={formData.urgency}
              onChange={handleChange}
              required
              style={styles.select}
            >
              <option value="">Select urgency</option>
              <option value="low">Low - Flexible Timing</option>
              <option value="medium">Medium - Within a Few Hours</option>
              <option value="high">High - Immediate Need</option>
            </select>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Delivery / Pickup Address</label>
            <textarea
              name="address"
              rows="3"
              value={formData.address}
              onChange={handleChange}
              required
              style={styles.textarea}
              placeholder="Enter your delivery or pickup location"
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Reason / Message (Optional)</label>
            <textarea
              name="reason"
              rows="2"
              value={formData.reason}
              onChange={handleChange}
              style={styles.textarea}
              placeholder="Explain your need briefly..."
            />
          </div>

          <div style={styles.buttonGroup}>
            <button type="submit" style={styles.submitBtn}>
              Submit Request
            </button>
             <Link to="/requester-dashboard" style={styles.backBtn}>
    ← Back
  </Link>

          </div>
        </form>
      </div>
    </div>
  );
};

// 🌿 Elegant green-glass design (same as donor form)
const styles = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #E9F7EF 0%, #C7E8CA 40%, #FFFFFF 100%)",
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
  select: {
    padding: "0.9rem 1rem",
    borderRadius: "12px",
    border: "2px solid #95D5B2",
    outline: "none",
    fontSize: "1rem",
    background: "white",
    cursor: "pointer",
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

export default RequestorForm;
