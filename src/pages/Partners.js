import React from "react";
import "../css/partners.css";
import "../css/flickity.css";

export function AddLibrary(urlOfTheLibrary) {
    const script = document.createElement("script");
    script.src = urlOfTheLibrary;
    script.async = true;
    document.body.appendChild(script);
}
function Partners() {
  return (
    <>
        <div className="partners-body">
            <div className="heading main-color">Our Prestigious Partners</div>
            <div className="carousel partners-carousel" data-flickity='{"groupCells": 1,"autoPlay": 900,"pauseAutoPlayOnHover": false, "wrapAround": true,"prevNextButtons": false, "pageDots": false}'>
                <div className="carousel-cell partners-cell">
                    <img src="https://etimg.etb2bimg.com/photo/89939048.cms" alt="partners"></img>
                </div>
                <div className="carousel-cell partners-cell">
                    <img src="https://securein.com/wp-content/uploads/2023/07/SECURE_INNOVATION_A2M_PASSIVE_LOGO_POS_RGB-01.png" alt="partners"></img>
                </div>
                <div className="carousel-cell partners-cell">
                    <img src="https://media.licdn.com/dms/image/C4E16AQH_h_2c6LTXkQ/profile-displaybackgroundimage-shrink_200_800/0/1625833149879?e=2147483647&v=beta&t=WCszSLKwWpmzJeP4dsOUxLQJ1k7SkOCGK5rr3CiTvc4" alt="partners"></img>
                </div>
                <div className="carousel-cell partners-cell">
                    <img src="https://www.penthara.com/wp-content/uploads/2023/01/PentharaBeGood.webp" alt="partners"></img>
                </div>
                <div className="carousel-cell partners-cell">
                    <img src="https://upload.wikimedia.org/wikipedia/en/d/d8/MTV_Hustle_logo.webp" alt="partners"></img>
                </div>
                <div className="carousel-cell partners-cell">
                    <img src="https://mms.businesswire.com/media/20230809463056/en/1147549/22/AVM_logo_highres.jpg" alt="partners"></img>
                </div>
            </div>
            
      </div>
      
      {AddLibrary("https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js")}
    </>
  );
}

export default Partners;
