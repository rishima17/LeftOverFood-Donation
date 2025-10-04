import React from "react";

const values = [
  {
    icon: "fas fa-heart",
    title: "Compassion",
    text: "We are deeply committed to helping others and making a positive difference.",
  },
  {
    icon: "fas fa-recycle",
    title: "Sustainability",
    text: "Reducing food waste and promoting environmentally friendly practices is at our core.",
  },
  {
    icon: "fas fa-handshake",
    title: "Collaboration",
    text: "We work with communities and organizations to create lasting change.",
  },
  {
    icon: "fas fa-shield-alt",
    title: "Integrity",
    text: "We are transparent and trustworthy, ensuring all donations reach the right hands.",
  },
];

const Values = () => (
  <section className="values">
    <div className="container">
      <h2 className="section-title">Our Core Values</h2>
      <div className="values-grid">
        {values.map((v, i) => (
          <div className="value-card" key={i}>
            <div className="value-icon">
              <i className={v.icon}></i>
            </div>
            <h3>{v.title}</h3>
            <p>{v.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Values;
