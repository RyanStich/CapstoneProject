import React from "react";

const Hero = () => {
  return (
    <div className="hero-container">
      <h1>Explore</h1>
      <h1>Vancouver Island</h1>
      <p>
        ExploreVI is a digital guidebook, mapping all your favorite locations on
        Vancouver Island. built to serve you anywhere, at anytime!
      </p>
      <div className="button-group">
        <a href="">
          <button className="main_cta">Explore</button>
        </a>
        <a href="">
          <button className="secondary_cta">View</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
