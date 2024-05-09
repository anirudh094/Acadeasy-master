import React from "react";
import "../course-css/course.scss";
import "../course-css/button.scss";
import Pricebox from "../Pricebox";
import Certificate from "../certificate";
import { Products } from "../Products";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import ChooseAcadeasy from "../ChooseAcadeasy";
import { Accordion } from "rsuite";

export class BusinessAnalyst extends React.Component {
  render() {
    return (
      <>
        <div className="courses-container">
          <>
            <div className="courses-banner">
              <div className="courses-banner-details">
                <h1>Business Analyst</h1>
                <p>
                  The Business Analyst course equips individuals with essential
                  skills to bridge the gap between business needs and
                  technological solutions. Participants will learn to analyze
                  data, assess processes, and provide actionable insights for
                  informed decision-making. This course covers key aspects of
                  requirements gathering, stakeholder communication, and the use
                  of analytical tools, preparing aspiring professionals to drive
                  effective business strategies and optimize organizational
                  performance.
                </p>
                <a href="#payment">
                  <div id="button-container" className="button-container">
                    <button class="learn-more">
                      <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                      </span>
                      <span class="button-text">Enroll for this program</span>
                    </button>
                  </div>
                </a>
                <Link
                  className="download-brochure"
                  to="/files/Business_Analyst_Brochure.pdf"
                  target="_blank"
                  download
                >
                  Brochure <FaDownload size={20} />
                </Link>
                <div className="courses-rating-box">
                  <div className="courses-rating-box-rating">4.3</div>
                  <div className="courses-rating-box-star">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="product-rating-star"
                    >
                      <path
                        fill="#FFD43B"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="product-rating-star"
                    >
                      <path
                        fill="#FFD43B"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="product-rating-star"
                    >
                      <path
                        fill="#FFD43B"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="product-rating-star"
                    >
                      <path
                        fill="#FFD43B"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="product-rating-star"
                    >
                      <path
                        fill="#FFD43B"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="courses-banner-img">
                <AnimatedOnScroll animationIn="tada">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/acad-easy.appspot.com/o/Business%20Analyst.png?alt=media&token=e83d2661-8372-40ce-ac53-248576195962"
                    alt="Business Analyst"
                  ></img>
                </AnimatedOnScroll>
              </div>
            </div>
            <ChooseAcadeasy />

            <AnimatedOnScroll animationIn="fadeInDownBig">
              <div className="curriculum-body">
                <h4>CURRICULUM</h4>

                <Accordion>
                  <Accordion.Panel header="Business Analysis Basics">
                    <ul className="curriculum-topics">
                      <li>
                        <span>•</span>Introduction to Business Analysis
                      </li>
                      <li>
                        <span>•</span>What Business Analysts do
                      </li>
                      <li>
                        <span>•</span>Business Analysis Techniques
                      </li>
                      <li>
                        <span>•</span>SDLC & Testing
                      </li>
                    </ul>
                  </Accordion.Panel>
                  <Accordion.Panel header="Using UML in Business Process">
                    <ul className="curriculum-topics">
                      <li>
                        <span>•</span>What is UML
                      </li>
                      <li>
                        <span>•</span>Understanding UML diagrams
                      </li>
                      <li>
                        <span>•</span>UML Tools/software
                      </li>
                    </ul>
                  </Accordion.Panel>
                  <Accordion.Panel header="Business Process Model">
                    <ul className="curriculum-topics">
                      <li>
                        <span>•</span>What is BPMN
                      </li>
                      <li>
                        <span>•</span>Using BPNM in Business Process Analysis
                      </li>
                      <li>
                        <span>•</span>BPMN Diagrams
                      </li>
                    </ul>
                  </Accordion.Panel>
                  <Accordion.Panel header="Requirements Analysis (RA)">
                    <ul className="curriculum-topics">
                      <li>
                        <span>•</span>Requirement Analysis Fundamentals
                      </li>
                      <li>
                        <span>•</span>Significance of RA and steps to follow
                      </li>
                      <li>
                        <span>•</span>Requirements Lifecycle
                      </li>
                      <li>
                        <span>•</span>JIRA Software
                      </li>
                    </ul>
                  </Accordion.Panel>
                  <Accordion.Panel header="Tableau">
                    <ul className="curriculum-topics">
                      <li>
                        <span>•</span>Data Visualization with Tableau
                      </li>
                      <li>
                        <span>•</span>Creating dashboards in Tableau
                      </li>
                    </ul>
                  </Accordion.Panel>
                  <Accordion.Panel header="Software Testing Life Cycle">
                    <ul className="curriculum-topics">
                      <li>
                        <span>•</span>Role of BA in testing
                      </li>
                      <li>
                        <span>•</span>UAT - User Acceptance Testing
                      </li>
                    </ul>
                  </Accordion.Panel>
                </Accordion>
              </div>
            </AnimatedOnScroll>

            <Pricebox />
            <Certificate />
            <Products />
          </>
        </div>
      </>
    );
  }
}
