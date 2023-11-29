import React from "react";

const About = () => {
  return (
    <section className="about-us-section ptb-100 gray-light-bg" id="about-viz">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <div className="about-us-img">
              <img
                src="img/about-bg.png"
                alt="about us"
                className="img-fluid about-single-img imgimgimg"
              />
              <img
                src="img/about-us-img-bg.svg"
                alt="about bg"
                className="about-us-bg"
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="about-us-content-wrap">
              <strong className="color-secondary">Viz-A-Thon 2.0 Overview</strong>
              <h3>What is Viz-A-Thon?</h3>
              <span className="animate-border mb-4"></span>
              <p>
                {" "}
                After getting the success of{" "}
                <a href="#">Viz-A-Thon 1.0</a> we are again
                back with another one Viz-A-Thon 2.0 🔥{" "}
              </p>
              <p>
              Vizathon, a three-hour offline hackathon, tasks participants with cleaning and analyzing provided datasets using tools like Tableau and Power BI. The challenge lies in crafting insightful visualizations from cleaned data. With a prize pool exceeding 50k+ rupees, participants clean, analyze, and present their findings in visually compelling dashboards to a panel of judges. Judging criteria encompass data preparation, analysis depth, visualization design, presentation, and tool proficiency. This event not only fosters skill development in data handling but also offers networking, recognition, and career advancement opportunities. Vizathon is the ultimate platform where data prowess meets creativity in a high-stakes, high-reward competition.
              </p>
              <div className="row mt-4">
                <div className="col-4">
                  <div className="counter-single">
                    <h2 className="mb-0 color-secondary">6</h2>
                    <strong>Themes </strong>
                  </div>
                </div>
                <div className="col-4">
                  <div className="counter-single">
                    <h2 className="mb-0 color-secondary">5+</h2>
                    <strong>
                      {" "}
                      Hours of Visualization <br /> Including Expert Sessions & Talks
                    </strong>
                  </div>
                </div>
                <div className="col-4">
                  <div className="counter-single">
                    <h2 className="mb-0 color-secondary">200+</h2>
                    <strong>Total Particpants</strong>
                  </div>
                </div>
              </div>
              <center>
                  <div className="action-btns mt-4">
                    <a
                      href="https://learner.vierp.in/events"
                      className="btn secondary-outline-btn"
                      target="_blank"
                    >
                      Click here to Register →
                    </a>
                  </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
