import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import "../css/footer.css";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function FooterBar() {
  return (
    // fixed-bottom - add this to fix it in the bottom
    <footer className=" p-3 footer-body">
      <Row className="footer-content footer-alignment">
        <Col md={22} lg={10}>
          <h5 className=" mb-3 footer-heading">
            ACADEASY: Unlocking Your Tech Potential
          </h5>
          <p className="text">
            ACADEASY is the ultimate edtech platform designed to empower you
            with the skills and knowledge you need to succeed in the tech
            industry. Our innovative training programs and hands-on projects are
            tailored to meet the demands of the ever-evolving tech landscape.
          </p>
        </Col>
        <Col md={6} lg={3}>
          <h5 className="mb-3 footer-links">Useful-Links</h5>
          <ListGroup variant="flush" className="list-items">
            <ListGroup.Item className="bg-none px-0 text-white links">
              <a href="/" className="footer-content-links">
                {" "}
                Home{" "}
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="bg-none px-0 text-white">
              <Link
                reloadDocument
                className="footer-content-links"
                to={"/products"}
              >
                Training
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="bg-none px-0 text-white">
              <Link
                reloadDocument
                className="footer-content-links"
                to={"/aboutus"}
              >
                About Us
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="bg-none px-0 text-white">
              <Link
                reloadDocument
                className="footer-content-links"
                to={"/contactus"}
              >
                Contact Us
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={6} lg={3}>
          <h5 className="mb-3  footer-links">Links</h5>
          <ListGroup variant="flush" className="list-items">
            <ListGroup.Item className="bg-none px-0 text-white">
              <Link
                reloadDocument
                className="footer-content-links"
                to={"/contactus"}
              >
                Frequently Asked Questions
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="bg-none px-0 text-white">
              <Link
                reloadDocument
                className="footer-content-links"
                to={"/products"}
              >
                Courses Available
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="bg-none px-0 text-white">
              <Link
                reloadDocument
                className="footer-content-links"
                to={"/contactus"}
              >
                Contact
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={6} lg={3}>
          <h5 className="mb-3 footer-links">Contact Us</h5>
          <ListGroup variant="flush" className="list-items">
            <ListGroup.Item className="bg-none px-0 text-white">
              <a
                href="https://www.instagram.com/acadeasy_official/"
                className="footer-content-links footersocial-media-links"
              >
                <FaInstagram size={30} />
                <span>Instagram</span>
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="bg-none px-0 text-white">
              <a
                href="https://www.linkedin.com/company/acadeasy"
                className="footer-content-links footersocial-media-links"
              >
                <FaLinkedin size={30} />
                <span>LinkedIn</span>
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="bg-none px-0 text-white">
              <a
                href="https://wa.me/message/RYPR7FF4OFLDO1"
                className="footer-content-links footersocial-media-links"
              >
                {" "}
                <FaWhatsapp size={30} />
                <span>WhatsApp</span>
              </a>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <div className="text-center mt-2 text-white p-3">
        © 2024 Copyright: Acadeasy.com
      </div>
    </footer>
  );
}

export default FooterBar;
