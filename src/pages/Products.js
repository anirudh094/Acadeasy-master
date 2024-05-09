import React from "react";
import "../css/products.css";
import { Link } from "react-router-dom";
import ContactUs from "./ContactUs";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { ManagementProducts } from "./Management-Products";

const products = [
  {
    id: 1,
    description:
      "Embark on a dynamic journey into the realm of cybersecurity with our Cyber Threat Analyst Course. Designed for aspiring professionals seeking expertise in identifying, analyzing, and mitigating cyber threats, this comprehensive program equips you with the skills and knowledge necessary to safeguard digital landscapes.",
    detail1: "Industry-Relevant Tools and Technologies",
    detail2: "16+ Hrs of Live Sessions",
    detail3: "Comprehensive Curriculum",
    duration: 18,
    href: "/CyberThreatAnalyst",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/acad-easy.appspot.com/o/Cyber%20Threat%20Analyst%202.png?alt=media&token=20257bb6-03b0-4ff7-9f7e-0840a7ae0f21",
    learners: "3,980",
    name: "Cyber Threat Analyst",
    rating: 4.5,
  },
  {
    id: 2,
    description:
      "The Frontend Developer course equips you with essential skills to create visually engaging and responsive websites. Dive into HTML, CSS, and JavaScript, mastering the art of crafting seamless user interfaces. Learn to collaborate with design teams, implement interactivity, and stay updated on the latest web development trends. Elevate your coding prowess and bring digital experiences to life with this dynamic and practical course tailored for aspiring frontend developers.",
    detail1: "Modern Web Technologies",
    detail2: "Cross-Browser Compatibility",
    detail3: "2 Live Projects",
    href: "/FrontendDeveloper",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/acad-easy.appspot.com/o/FRONTEND%20DEVELOPER.png?alt=media&token=c289f481-9b1d-43d2-89f1-fac871ec6c87",
    learners: "4,650",
    name: "Frontend Developer",
    rating: 4.4,
  },
  {
    id: 3,
    description:
      "Become a proficient Java Developer with our comprehensive course. Master the fundamentals of Java programming, object-oriented concepts, and essential libraries. Gain hands-on experience in building robust applications, debugging, and optimizing code. Unlock the skills needed to design scalable and efficient Java solutions. Start your journey towards becoming a skilled Java Developer today.",
    detail1: "Core Java Fundamentals",
    detail2: "Database Integration",
    detail3: "Java Enterprise Edition (EE) Development",
    duration: 7,
    href: "/JavaDeveloper",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/acad-easy.appspot.com/o/JAVA%20DEVELOPER.png?alt=media&token=210751a7-076e-4793-b36a-8f60aa313348",
    learners: "5,989",
    name: "Java Developer",
    rating: 4.9,
  },
  {
    id: 4,
    description:
      " The ReactJS Developer course equips aspiring developers with essential skills to master React, the popular JavaScript library for building user interfaces. Participants will learn to create dynamic and efficient web applications, leveraging React's component-based architecture. Through hands-on projects and real-world examples, this course provides a solid foundation in React development, empowering learners to build modern, responsive, and interactive user interfaces for web applications.",
    detail1: "Foundational React Concepts",
    detail2: "UI Design and Styling",
    detail3: "2 Live Projects",
    duration: 12,
    href: "/ReactJsDeveloper",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/acad-easy.appspot.com/o/REACTJS%20DEVELOPER.png?alt=media&token=1f02e5ad-5890-4b35-ac05-fb8389771134",
    learners: "4,002",
    name: "ReactJs Developer",
    rating: 4.5,
  },
];

export class Products extends React.Component {
  
  render() {
    return (
      <>
        <div className="products-container">
          <div className="heading main-color">Technical Projects We Offer</div>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <Link
                reloadDocument
                key={product.id}
                className="group product-group"
                to={product.href}
              >
                <AnimatedOnScroll animationIn="bounce" duration="3000">
                  <a href={product.href} className="">
                    <div className="product-img">
                      <img src={product.imageSrc} alt={product.name} />
                    </div>
                    <div className="product-details">
                      <h3 className="product-name">{product.name}</h3>

                      <div className="products-content">
                        <p>• {product.detail1}</p>
                        <p>• {product.detail2}</p>
                        <p>• {product.detail3}</p>
                      </div>

                      <div className="product-price-box">
                        <div className="product-price">
                          {/* {"₹" + product.price}{" "}
                            <s className="price-cut">₹4990</s> */}
                          <div className="rating-box">
                            <div className="product-rating">
                              {product.rating}
                            </div>
                            <div>
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
                        <div className="know-more-box">
                          <div className="know-more">Know more</div>
                          <svg
                            className="know-more-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            id="RightArrow"
                          >
                            <path
                              fill="#028cdc"
                              fill-rule="evenodd"
                              d="M8.306 18.694c.408.408 1.07.408 1.478 0l5.913-5.9A1.04 1.04 0 0 0 16 11.97a1.04 1.04 0 0 0-.306-.761l-5.91-5.904a1.046 1.046 0 0 0-1.478 0 1.043 1.043 0 0 0 0 1.476l5.227 5.22-5.227 5.217a1.042 1.042 0 0 0 0 1.475Z"
                              clip-rule="evenodd"
                              class="color000000 svgShape"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </AnimatedOnScroll>
              </Link>
            ))}
          </div>
        </div>
        <ManagementProducts />
        <ContactUs />
      </>
    );
  }
}
