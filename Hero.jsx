import React from "react";
import "./hero.css";

const Hero = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
<section id="header-top-bar" className="ptb-70 gradient-bg">
  <div className="hero-slider-content-container text-center text-white">
    <strong style={{fontSize: "20px"}}>16th - 17th January 2024 </strong>
    <h1 className="mb-0 color-og-2">Viz-A-Thon 2.0</h1>
    <span className="color-og-2">
      Event sponsored by &ensp;
      <strong style={{ fontSize: "18px" }}>
        <a href="https://www.imfs.co.in/" target="_blank" className="color-og-2">
          IMFS
        </a>
      </strong>
    </span>
    <p className="lead mt-4">
      Get your creative hats on and join us on this incredible ride to
      build something out of the box.
    </p>
  </div>
</section>

  );
};

export default Hero;