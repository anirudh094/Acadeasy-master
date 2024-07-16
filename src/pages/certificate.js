import React from "react";
import "../css/certificate.css";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

function Certificate() {
  return (
    <> 
      <div className="certificate-body">
        <h1>Certifications</h1>
        <h3>
        Upon completing the program, each participant receives a training completion certificate, an internship certificate, and an outstanding performance certificate.
        </h3>
        <AnimatedOnScroll animationIn="fadeInDownBig">
        <div className="certificate-grid">
          <div className="certificate-container">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/acad-easy.appspot.com/o/Certificates%2F3.png?alt=media&token=87471519-9da6-4ef2-a788-2509077e9cfe"
              alt="Avatar"
              className="certificate-image"
            />
            <div className="certificate-overlay">
              <div className="certificate-text">
              Training Completion Certificate is presented to you in recognition of your dedication and the time you invested in learning and enhancing your skills during your training.
              </div>
            </div>
          </div>
          <div className="certificate-container">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/acad-easy.appspot.com/o/Certificates%2F1.png?alt=media&token=c7dc16b7-66b6-4dfa-a333-7fe941ebb4be"
              alt="Avatar"
              className="certificate-image"
            />
            <div className="certificate-overlay">
              <div className="certificate-text">
              Internship Completion Certificate is granted to you in recognition of the practical exposure and work experience acquired through the successful completion of projects.
              </div>
            </div>
          </div>
          <div className="certificate-container">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/acad-easy.appspot.com/o/Certificates%2F2.png?alt=media&token=ae7c915f-dd55-46a1-aaed-29d62fd00c32"
              alt="Avatar"
              className="certificate-image"
            />
            <div className="certificate-overlay">
              <div className="certificate-text">
              The Outstanding Performer Certification is granted to exceptional students who have demonstrated remarkable performance throughout their training and internship periods.
              </div>
            </div>
          </div>
        </div>
        </AnimatedOnScroll>
        
      </div>
      

    </>
  );
}

export default Certificate;
