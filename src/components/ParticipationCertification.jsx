import React, { useState } from "react";

const ParticipationCertification = () => {
  const [isExplosion, setExplosion] = useState(false);

  const handleCertificateClick = () => {
    setExplosion(true);
    // You can add any additional logic here if needed
  };

  return (
    <section className="promo-section ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-9">
            <div className="section-heading text-center">
              <h2> Certificates </h2>
              <span className="animate-border mr-auto ml-auto mb-4"></span>
            </div>
          </div>
        </div>

        <div className="row ">
          <div className="col-2"></div>
          <div className="col-8">
            <div className={`support-cta mt-5 text-center ${isExplosion ? "explosion-animation" : ""}`}>
              <h5 className="mb-1 text-center" onClick={handleCertificateClick}>
                <span className="color-secondary">
                  <i className="fa-solid fa-bolt"></i>
                </span>{" "}
                Participation Certificate{" "}
                <span className="color-secondary">
                  <i className="fa-solid fa-bolt"></i>
                </span>
              </h5>
              <div className="col-md-12 col-lg-12">
                <ul className="list-unstyled tech-feature-list">
                  <li className="py-1">
                    Even if you are not able to win any awards, no problems, we will be offering Participation certificates to the teams submitting solutions.
                  </li>
                </ul>
              </div>
              <br />
              <h5 className="mb-1 text-center" onClick={handleCertificateClick}>
                <span className="color-secondary">
                  <i className="fa-solid fa-bolt"></i>
                </span>{" "}
                Winners Certificate{" "}
                <span className="color-secondary">
                  <i className="fa-solid fa-bolt"></i>
                </span>
              </h5>
              <div className="col-md-12 col-lg-12">
                <ul className="list-unstyled tech-feature-list">
                  <li className="py-1">
                    All winners will be given a special certificate.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParticipationCertification;
