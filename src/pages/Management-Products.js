import React from "react";
import "../css/products.css";
import { Link } from "react-router-dom";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

const products = [
  {
    id: 1,
    description:
      "The Business Analyst course equips individuals with essential skills to bridge the gap between business needs and technological solutions. Participants will learn to analyze data, assess processes, and provide actionable insights for informed decision-making. This course covers key aspects of requirements gathering, stakeholder communication, and the use of analytical tools, preparing aspiring professionals to drive effective business strategies and optimize organizational performance.",
    detail1: "Business Analysis Fundamentals",
    detail2: "Business Process Modeling",
    detail3: "One On One Doubt Sessions",
    href: "/businessanalyst",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/acad-easy.appspot.com/o/Business%20Analyst.png?alt=media&token=e83d2661-8372-40ce-ac53-248576195962",
    learners: "4,650",
    name: "Business Analyst",
    rating: 4.3,
  },
  {
    id: 2,
    description:
      "The Data Engineer course equips participants with the essential skills to design, construct, and manage data architectures. Covering database systems, ETL processes, and data modeling, this course empowers individuals to optimize data pipelines, ensuring efficient and accurate data flow for informed decision-making. Participants gain expertise in handling large datasets, implementing data warehousing solutions, and leveraging cutting-edge technologies for seamless data integration. Ideal for aspiring data professionals seeking to excel in the dynamic field of data engineering.",
    detail1: "Data Architecture and Modeling",
    detail2: "Big Data Processing",
    detail3: "Cloud Data Platforms",
    href: "/dataengineer",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/acad-easy.appspot.com/o/Data%20Engineer.png?alt=media&token=497d7556-d7ca-4fa2-88f4-198838edd4b9",
    learners: "4,650",
    name: "Data Engineer",
    rating: 4.8,
  },
  {
    id: 3,
    description:
      "The Financial Analyst course equips individuals with essential skills in financial analysis, budgeting, and forecasting. Participants learn to interpret financial data, assess investment opportunities, and provide strategic recommendations for optimal financial performance. This course is designed to enhance proficiency in Excel, financial modeling, and analytical techniques, preparing students for a dynamic career in finance.",
    detail1: " Financial Analysis Fundamentals",
    detail2: "Forecasting and Budgeting",
    detail3: "Financial Software and Tools",
    href: "/financialanalyst",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/acad-easy.appspot.com/o/Financial%20Analyst.png?alt=media&token=7a0c5c10-ba11-460a-9680-9123c970aa7a",
    learners: "4,650",
    name: "Financial Analyst",
    rating: 4.9,
  },
  {
    id: 4,
    description:
      "The Staffing Engineer course equips participants with the essential skills to excel in the dynamic field of staffing and recruitment. Covering strategic talent acquisition, candidate assessment, and effective communication, this course provides a comprehensive foundation for individuals seeking to optimize workforce planning and placement processes. Participants will gain insights into industry best practices and emerging trends, enhancing their ability to source, evaluate, and select top-tier talent for organizational success.",
    detail1: "Talent Acquisition Strategies",
    detail2: "Employment Law and Compliance",
    detail3: "Candidate Assessment and Interviewing",
    href: "/staffingengineer",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/acad-easy.appspot.com/o/Staffing%20Engineer.png?alt=media&token=907a9005-2ee1-4d74-b306-3c916bffd6e1",
    learners: "4,650",
    name: "Staffing Engineer",
    rating: 4.7,
  },
];

export class ManagementProducts extends React.Component {
  
  render() {
    return (
      <>
        <div className="products-container">
          <div className="heading main-color">Management Projects We Offer</div>
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
      </>
    );
  }
}
