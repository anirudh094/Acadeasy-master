import React from "react";
import "../css/certificate.css";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

function Certificate() {
  return (
    <> 
      <div className="certificate-body">
        <h1>Certifications</h1>
        <h3>
          On completion of a program each participant gets a course completion,
          internship and outstanding performance certificates.
        </h3>
        <AnimatedOnScroll animationIn="fadeInDownBig">
        <div className="certificate-grid">
          <div className="certificate-container">
            <img
              src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_768,h_543/https://pianalytix.com/wp-content/uploads/2021/06/Pianalytix-Course-Completion-certificate-1406211-768x543.jpg"
              alt="Avatar"
              className="certificate-image"
            />
            <div className="certificate-overlay">
              <div className="certificate-text">
                Course Completion Certificate is awarded to you for the
                dedication and time you have provided to learn and enhance your
                skills during your training.
              </div>
            </div>
          </div>
          <div className="certificate-container">
            <img
              src="https://marketplace.canva.com/EAFCP1Ox_-c/1/0/1600w/canva-blue-yellow-minimalist-internship-certificate-RR9ND_Uk1Bw.jpg"
              alt="Avatar"
              className="certificate-image"
            />
            <div className="certificate-overlay">
              <div className="certificate-text">
                Internship Completion Certificate is awarded to you after
                gaining practical exposure and work experience by successful
                completion of the capstone projects.
              </div>
            </div>
          </div>
          <div className="certificate-container">
            <img
              src="https://i.pinimg.com/736x/38/a7/20/38a720fd9518980bd3cef1d22ee30c21.jpg"
              alt="Avatar"
              className="certificate-image"
            />
            <div className="certificate-overlay">
              <div className="certificate-text">
                Outstanding Performer Certification is awarded to the
                extraordinary students who have performed exceptionally well
                during the training and internship periods.
              </div>
            </div>
          </div>
        </div>
        </AnimatedOnScroll>
        <AnimatedOnScroll animationIn="wobble">
        <div className="certificate-learners">
          <img src="https://www.acmegrade.com/images/project/real_tag.svg" alt="certificate"/>
          <p>
            9 / 10 of our learners achieve their learning objectives after
            successful course completion.
          </p>
        </div>
        </AnimatedOnScroll>
      </div>
      

    </>
  );
}

export default Certificate;
