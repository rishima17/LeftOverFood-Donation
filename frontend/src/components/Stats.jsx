import React from "react";

const Stats = () => (
  <section className="stats">
    <div className="stats-container">
      <div className="stat-item">
        <h3>
          <i className="fas fa-utensils"></i> 10K+
        </h3>
        <p>Meals Donated</p>
      </div>
      <div className="stat-item">
        <h3>
          <i className="fas fa-users"></i> 500+
        </h3>
        <p>Active Donors</p>
      </div>
      <div className="stat-item">
        <h3>
          <i className="fas fa-hand-holding-heart"></i> 50+
        </h3>
        <p>Partner NGOs</p>
      </div>
      <div className="stat-item">
        <h3>
          <i className="fas fa-seedling"></i> 5 Tons
        </h3>
        <p>Waste Prevented</p>
      </div>
    </div>
  </section>
);

export default Stats;
