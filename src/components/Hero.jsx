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
<section id="header-top-bar" className="ptb-70 gradient-bg ">
<div className="logo" style={{
  display: "flex",
  justifyContent: "center", /* Horizontal alignment */
  alignItems: "center", /* Vertical alignment */
}}>
  <img
    src="img/vizlogov1.png"
    style={{
      maxWidth: "100%", /* Ensure the image doesn't exceed its container width */
      height: "auto", /* Maintain aspect ratio */
      margin: "20px", /* Adjust margin for responsiveness */
      borderBottom: "0px",
      width:"300px",
      border:"1px solid white",
      marginTop:"50px"
    }}
  />
</div>
  <div className="hero-slider-content-container text-center text-white">
    <strong style={{fontSize: "20px"}}>16th - 18th January 2024 </strong>
    <h1 className="mb-0 color-og-2" style={{ WebkitTextStroke: "1px whitesmoke" }}>
  Viz-A-Thon 2.0
</h1>
    <span style={{ fontSize: "20px"}}>
  Event sponsored by &ensp;
  <strong style={{ fontSize: "30px" }}>
    <a href="https://www.imfs.co.in/" target="_blank" style={{ color: "white" }}>
      IMFS
    </a>
  </strong>
</span>
    <p className="lead mt-4">
      Get your creative hats on and join us on this incredible ride to
      build something out of the box.
    </p>
    <div className="action-btns mt-4 ">
                <a
                  href="https://learner.vierp.in/events"
                  className="btn secondary-outline-btn"
                  target="_blank"
                >
                  Click here to Register
                </a>
              </div>
  </div>
</section>

  );
};

export default Hero;
