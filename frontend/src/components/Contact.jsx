import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatusMessage("✅ Thank you! We will get back to you soon.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatusMessage("❌ Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatusMessage("⚠️ Server error. Please try again later.");
    }
  };

  return (
    <div
      className="contact-section"
      style={{
        maxWidth: "1300px",
        margin: "4rem auto",
        padding: "2rem",
      }}
    >
      <div
        className="contact-container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          background: "#fff",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          overflow: "hidden",
        }}
      >
        {/* Left Section — Contact Info */}
        <div
          className="contact-info"
          style={{
            background: "linear-gradient(135deg, #2D6A4F 0%, #52B788 100%)",
            color: "#fff",
            padding: "3rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            Contact Information
          </h2>
          <p style={{ opacity: 0.9, marginBottom: "2rem" }}>
            Fill out the form and our team will get back to you within 24 hours.
          </p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            {[
              {
                icon: <FaPhone />,
                title: "Phone",
                lines: ["+91 98765 43210", "Mon-Fri 9am-6pm"],
              },
              {
                icon: <FaEnvelope />,
                title: "Email",
                lines: ["info@foodshare.com", "support@foodshare.com"],
              },
              {
                icon: <FaMapMarkerAlt />,
                title: "Office",
                lines: ["Sector 15, Faridabad", "Haryana 121007, India"],
              },
            ].map((item, idx) => (
              <div key={idx} style={{ display: "flex", gap: "1.5rem" }}>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "rgba(255,255,255,0.2)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 style={{ marginBottom: "0.3rem" }}>{item.title}</h3>
                  {item.lines.map((line, i) => (
                    <p key={i} style={{ opacity: 0.9, margin: 0 }}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div style={{ marginTop: "3rem" }}>
            <h3>Follow Us</h3>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    style={{
                      width: "45px",
                      height: "45px",
                      background: "rgba(255,255,255,0.2)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontSize: "1.3rem",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "#fff") &
                      (e.currentTarget.style.color = "#2D6A4F")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(255,255,255,0.2)") &
                      (e.currentTarget.style.color = "#fff")
                    }
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* Right Section — Contact Form */}
        <div className="contact-form-container" style={{ padding: "3rem" }}>
          <h2 style={{ color: "#1b4332", marginBottom: "1rem" }}>
            Send Message
          </h2>
          <p style={{ color: "#555", marginBottom: "2rem" }}>
            Have questions? We're here to help!
          </p>

          <form onSubmit={handleSubmit}>
            {/* Row 1 */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
              }}
            >
              <div>
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />
              </div>
              <div>
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Row 2 */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
                marginTop: "1.5rem",
              }}
            >
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                />
              </div>
              <div>
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Subject */}
            <div style={{ marginTop: "1.5rem" }}>
              <label>Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                style={inputStyle}
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="partnership">Partnership</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>

            {/* Message */}
            <div style={{ marginTop: "1.5rem" }}>
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                style={{
                  ...inputStyle,
                  minHeight: "120px",
                  resize: "none",
                }}
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              style={{
                background: "linear-gradient(135deg, #F4A261, #E76F51)",
                color: "#fff",
                border: "none",
                borderRadius: "50px",
                padding: "1rem 3rem",
                marginTop: "2rem",
                fontSize: "1.1rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "transform 0.2s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 5px 15px rgba(231,111,81,0.4)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              Send Message <FaPaperPlane style={{ marginLeft: "8px" }} />
            </button>

            {statusMessage && (
              <p style={{ marginTop: "1rem", color: "#2D6A4F" }}>
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "0.8rem 1rem",
  borderRadius: "10px",
  border: "1px solid #ccc",
  outline: "none",
  marginTop: "0.5rem",
  fontSize: "1rem",
  transition: "border 0.3s ease",
};

export default ContactUs;
