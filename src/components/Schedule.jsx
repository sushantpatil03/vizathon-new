import React from "react";

const Schedule = () => {
  return (
    <section
      className="work-process-section ptb-100 gray-light-bg"
      id="schedule"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-9">
            <div className="section-heading text-center">
              <strong className="color-secondary">When to Join?</strong>
              <h2> Viz-A-Thon Schedule </h2>
              <span className="animate-border mr-auto ml-auto mb-4"></span>
            </div>
          </div>
        </div>
        <div className="flexxx">
          <div className="row">
            <div className="col-md-12 col-lg-5 process-width">
              <div className="process-box process-left">
                <div className="row">
                  <div className="col-md-5">
                    <div className="process-step-number">
                      <strong>28th Nov</strong>
                      <h6>10:00 AM</h6>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h5 style={{ color: '#FFD700' }}>Registration Starts</h5>
                    <p>
                      Register yourself at VIERP by submitting your details.{" "}
                    </p>
                  </div>
                </div>
                <div className="process-line-r"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-5 process-width">
              <div className="process-box process-left">
                <div className="row">
                  <div className="col-md-5">
                    <div className="process-step-number">
                      <strong>28 Dec</strong>
                      <h6>10:00 PM</h6>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h5 style={{ color: '#FFD700' }}>Registration Ends</h5>
                    <p>The schedule will be shared with you. Stay tuned for updates. </p>
                  </div>
                </div>
                <div className="process-line-r"></div>
              </div>
            </div>
          </div>
        </div>


        <div className="flexxx">
        <div className="row">
            <div className="col-md-12 col-lg-5 process-width">
              <div className="process-box process-left">
                <div className="row">
                  <div className="col-md-5">
                    <div className="process-step-number">
                      <strong>16th Jan </strong>
                      <h6> 12:00 PM</h6>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h5 style={{ color: '#FFD700' }}>Viz-A-Thon Starts 🥳</h5>
                    <p>
                    Create meaningful visualizations with given datasets. <br />{" "}
                    </p>
                    {/* <p>
                      You can start working on datasets after
                      inauguration ceremony. <br />{" "}
                    </p> */}
                  </div>
                </div>
                <div className="process-line-l"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-5 process-width">
              <div className="process-box process-left">
                <div className="row">
                  <div className="col-md-5">
                    <div className="process-step-number">
                      <strong>17th Jan</strong>
                      <h6>06:00 PM</h6>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h5 style={{ color: '#FFD700' }}>Evaluation Round 1</h5>
                    <p>8 teams will be shortlisted based on evaluation round 1.&emsp;&emsp;</p>
                    {/* <h5>Submit Final Work</h5>
                    <p>Team leader should submit the insights on Devfolio.&emsp;&emsp;</p> */}
                  </div>
                </div>
                <div className="process-line-r"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flexxx">
          <div className="row">
            <div className="col-md-12 col-lg-5 process-width">
              <div className="process-box process-left">
                <div className="row">
                  <div className="col-md-5">
                    <div className="process-step-number">
                      <strong>18th Jan </strong>
                      <h6> 04:00 PM</h6>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h5 style={{ color: '#FFD700' }}>Final Teams</h5>
                    <p>
                        Results of round 1 and shortlisted teams will receive mail
                    </p>
                    {/* <h5>Present The Visuals</h5>
                    <p>
                      Our judges will go through your work and give you points.<br />{" "}
                    </p> */}
                  </div>
                </div>
                <div className="process-line-l"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-5 process-width">
              <div className="process-box process-left">
                <div className="row">
                  <div className="col-md-5">
                    <div className="process-step-number">
                      <strong>19th Jan</strong>
                      <h6>06:00 PM</h6>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h5 style={{ color: '#FFD700' }}>Hackathon Ends</h5>
                    <p>
                    After the session by industry expert, we'll distribute the prizes!{" "}
                      {/* We'll declare the winners and Viz-A-Thon ends!{" "} */}
                      {/* <a
                        style={{ color: "blue" }}
                        target={"_blank"}
                        className="linkk"
                        href="https://duhacks2.devfolio.co"
                      >
                        duhacks
                      </a>{" "}
                      devfolio dashboard.&emsp;&emsp;&emsp; &emsp;
                      {""}{" "} */}
                    </p>
                  </div>
                </div>
                <div className="process-line-r"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
