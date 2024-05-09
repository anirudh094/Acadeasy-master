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

export class ReactJsDeveloper extends React.Component {
  render() {
    return (
      <>
        <div className="courses-container">
          <>
            <div className="courses-banner">
              <div className="courses-banner-details">
                <h1>ReactJs Developer</h1>
                <p>
                  The ReactJS Developer course equips aspiring developers with
                  essential skills to master React, the popular JavaScript
                  library for building user interfaces. Participants will learn
                  to create dynamic and efficient web applications, leveraging
                  React's component-based architecture. Through hands-on
                  projects and real-world examples, this course provides a solid
                  foundation in React development, empowering learners to build
                  modern, responsive, and interactive user interfaces for web
                  applications.
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
                  to="/files/ReactJs_Developer_Brochure.pdf"
                  target="_blank"
                  download
                >
                  Brochure <FaDownload size={20} />
                </Link>
                <div className="courses-rating-box">
                  <div className="courses-rating-box-rating">4.5</div>
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
                    src="https://firebasestorage.googleapis.com/v0/b/acad-easy.appspot.com/o/REACTJS%20DEVELOPER.png?alt=media&token=1f02e5ad-5890-4b35-ac05-fb8389771134"
                    alt="ReactJs Developer"
                  ></img>
                </AnimatedOnScroll>
              </div>
            </div>
            <ChooseAcadeasy />

            <AnimatedOnScroll animationIn="fadeInDownBig">
              <div className="curriculum-body">
                <h4>CURRICULUM</h4>

                <Accordion>
                  <Accordion.Panel header="Introduction to React">
                    <ul className="curriculum-topics">
                      <li>
                        <span>•</span>create react app
                      </li>
                      <li>
                        <span>•</span>CLI Tools
                      </li>
                    </ul>
                  </Accordion.Panel>
                  <Accordion.Panel header="React Components">
                    <ul className="curriculum-topics">
                      <li>
                        <span>•</span>Class Components
                      </li>
                      <li>
                        <span>•</span>Functional Components
                      </li>
                      <li>
                        <span>•</span>Props and State
                      </li>
                    </ul>
                  </Accordion.Panel>
                  <Accordion.Panel header="Hooks">
                    <ul className="curriculum-topics">
                      <li>
                        <span>•</span>useState
                      </li>
                      <li>
                        <span>•</span>useEffect
                      </li>
                      <li>
                        <span>•</span>Custom Hooks
                      </li>
                    </ul>
                  </Accordion.Panel>
                  <Accordion.Panel header="Routers">
                    <ul className="curriculum-topics">
                      <li>
                        <span>•</span>React Routers
                      </li>
                    </ul>
                  </Accordion.Panel>
                  <Accordion.Panel header="Styling">
                    <ul className="curriculum-topics">
                      <li>
                        <span>•</span>CSS Module
                      </li>
                      <li>
                        <span>•</span>Bootstarp
                      </li>
                      <li>
                        <span>•</span>Talwind CSS
                      </li>
                    </ul>
                  </Accordion.Panel>
                  <Accordion.Panel header="API Calls">
                    <ul className="curriculum-topics">
                      <li>
                        <span>•</span>Rest API
                      </li>
                      <li>
                        <span>•</span>Async/await
                      </li>
                      <li>
                        <span>•</span>Promises
                      </li>
                      <li>
                        <span>•</span>Redux
                      </li>
                    </ul>
                  </Accordion.Panel>
                  <Accordion.Panel header="Deployment">
                    <ul className="curriculum-topics">
                      <li>
                        <span>•</span>Git / Github
                      </li>
                      <li>
                        <span>•</span>Netlify , Versel
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
