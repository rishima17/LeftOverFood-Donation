import React from "react";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content fade-in-up">
        <h1>Connecting Leftover Food with Those in Need</h1>
        <p className="hero-tagline">
          Together, We Can Fight Hunger and Reduce Food Waste
        </p>
        <p>
          Join our platform to connect people and businesses with surplus food
          to nearby NGOs. Every donation helps ensure excess food reaches those
          who need it most, promoting community power and sustainability.
        </p>
        <a href="#donate" className="cta-button">
          Donate Food Today <i className="fas fa-heart"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
