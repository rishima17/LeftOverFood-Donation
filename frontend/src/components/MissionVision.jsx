import React from "react";

const MissionVision = () => (
  <section className="mission-vision" id="about">
    <div className="container">
      <h2 className="section-title">Our Mission & Vision</h2>
      <div className="mission-vision-grid">
        <div className="mission-card fade-in-up">
          <h3>
            <i className="fas fa-bullseye"></i> Our Mission
          </h3>
          <p>
            To reduce food waste and fight hunger by connecting people and
            businesses with leftover food to nearby NGOs. Our platform ensures
            excess food is distributed to those who need it most.
          </p>
        </div>
        <div className="vision-card fade-in-up">
          <h3>
            <i className="fas fa-eye"></i> Our Vision
          </h3>
          <p>
            We envision a world where no food goes to waste, and every meal is
            shared. Our goal is to empower individuals, restaurants, and
            organizations to donate their leftover food.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default MissionVision;
