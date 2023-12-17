// import React from "react";
// import "./hero.css";

// const Hero = () => {
//   React.useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://apply.devfolio.co/v2/sdk.js";
//     script.async = true;
//     script.defer = true;
//     document.body.appendChild(script);
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <section id="header-top-bar" className="ptb-70 gradient-bg">
//       <div className="container mb-2">
//         <div className="row align-items-center">
//           <div className="col-md-12 col-lg-6">
//             <div className="hero-slider-content text-white pt-5 ">
//               <strong>16th - 17th January 2024 </strong>
//               <h1 className="mb-0 color-og-2">Viz-A-Thon 2.0</h1>
//               <span className="color-og-2">
//                 Event sponsered by &ensp;
//                 <strong style={{ fontSize: "18px" }}>
//                   <a href="https://www.imfs.co.in/" target="_blank" className="color-og-2">
//                     IMFS
//                   </a>
//                 </strong>
//               </span>

//               <p className="lead mt-4 ">
//                 Get your creative hats on and join us on this incredible ride to
//                 build something out of the box.
//               </p>

//               <div className="action-btns mt-3">
//                 {/* <a
//                   href="https://duhacks.devfolio.co/"
//                   className="btn secondary-solid-btn"
//                 >
//                   {" "}
//                   Apply With Devfolio{" "}
//                 </a>{" "} */}
//                 <div
//                   // class="apply-button"
//                   // data-hackathon-slug="duhacks2"
//                   // data-button-theme="light"
//                   // style="height: 44px; width: 312px"
//                 ></div>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-12 col-lg-4">
//             <div style={{ textAlign: "left" }} className="pt-5">
//               <iframe
//                 height="240px"
//                 // width="336px"
//                 className="vd1"
//                 src="https://www.youtube.com/embed/BUCFX36MMBMMM"
//                 // src="https://www.youtube.com/embed/BUCFX36MMBM"
//                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen 
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;




//new--->


import React from "react";
import "./hero.css";
// import { Link } from "react-router-dom";

const Hero = () => {
  // React.useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://apply.devfolio.co/v2/sdk.js";
  //   script.async = true;
  //   script.defer = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
<section id="header-top-bar" className="ptb-70 gradient-bg ">
<div className="logo" style={{
  display: "flex",
  justifyContent: "center", /* Horizontal alignment */
  alignItems: "center", /* Vertical alignment */
}}>
  <div class="img-container">
  <img
    src="img/vizlogov1.png"
    alt="Viz Logo"
  />
  </div>
</div>
  <div className="hero-slider-content-container text-center text-white">
    <strong style={{fontSize: "21px"}} className="color-secondary">16th - 19th January 2024 </strong>
    {/* <h1 className="mb-0 color-og-2 conthrax-font" >
      VIZ-A-THON 2.0
</h1> */}
    <a href="#home" rel="noopener noreferrer" className="viz-heading-img">
      <img
        src="https://fontmeme.com/permalink/231207/b1e4220ae595059062acb29e4b2a5b4d.png"
        alt="conthrax-font"
        border="0"
        width={350}
      />
    </a>
    <span style={{ fontSize: "20px"}} className="color-og-2">
  Event sponsored by &ensp;
  <strong style={{ fontSize: "25px" }}>
    <a href="https://www.imfs.co.in/" target="_blank" style={{ color: "white" }}>
      <img src="img/sponsors/imfs.png" width="50%" />    
    </a>
  </strong>
</span>
    <p className="embark" style={{fontSize:"15px"}}>
    Embark on a visual journey with Dataviz: Where Data becomes<br></br> Art in the ultimate visualization experience!
    </p>
    {/* <p className="lead mt-4">
      Get your creative hats on and join us on this incredible ride to
      build something out of the box.
    </p> */}
    <div className="action-btns mt-2">
                <a
                  href="https://bit.ly/register-vizathon"
                  // href="https://learner.vierp.in/events"
                  className="btn"
                  target="_blank"
                >
                   <button className="register-btn">
                   &nbsp;&nbsp;&nbsp;R E G I S T E R
                      <div id="clip">
                          <div id="leftTop" class="corner"></div>
                          <div id="rightBottom" class="corner"></div>
                          <div id="rightTop" class="corner"></div>
                          <div id="leftBottom" class="corner"></div>
                      </div>
                      <span id="rightArrow" class="arrow"></span>
                      <span id="leftArrow" class="arrow"></span>
                  </button>
                </a>

                
              </div>
    {/* <div className="action-btns mt-2">
                <a
                  href="https://learner.vierp.in/events"
                  className="btn register-btn"
                  target="_blank"
                >
                  Click here to Register →
                </a>
              </div> */}
              <a href="https://bit.ly/join-our-multimillionaire-event" target="_blank" class="btn-link mt-2 reg-how-to">How to register ?</a>
              {/* <a href="https://bit.ly/aisa-pdf" target="_blank" class="btn-link mt-2 reg-how-to">How to register ?</a> */}
  </div>
</section>

  );
};

export default Hero;
