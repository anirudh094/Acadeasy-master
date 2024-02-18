import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import "../css/footer.css";

function FooterBar() {
  return (
    // fixed-bottom - add this to fix it in the bottom
    <footer className=" p-3 footer-body">
      <Row className="footer-content">
        <Col md={22} lg={10}>
          <h5 className=" mb-3 footer-heading" >Acadeasy</h5>
          <p className="text">
          Join Our Community of Educators!
         At Acadeasy, we're committed to empowering educators with the knowledge and skills they need to thrive in the digital age. 
        Explore our training programs and live projects designed to enhance your teaching expertise and engage your students like never before.

          </p>
        </Col>
        <Col md={6} lg={3}>
          <h5 className="mb-3 footer-links">Useful-Links</h5>
          <ListGroup variant="flush" className="list-items">
            <ListGroup.Item className="bg-none px-0 text-white links">
             <a href="/" className="footer-content-links"> Home </a>
            </ListGroup.Item>
            <ListGroup.Item className="bg-none px-0 text-white">
              <a href="/products" className="footer-content-links" >Training</a></ListGroup.Item>
            <ListGroup.Item className="bg-none px-0 text-white">
              <a href="/aboutus" className="footer-content-links"> About Us </a></ListGroup.Item>
              <ListGroup.Item className="bg-none px-0 text-white">
              <a href="#contactus" className="footer-content-links"> Contact Us </a></ListGroup.Item>
          </ListGroup>
        </Col>
                  
        <Col md={6} lg={3}>
          <h5 className="mb-3  footer-links">Links</h5>
          <ListGroup variant="flush" className="list-items">
            <ListGroup.Item className="bg-none px-0 text-white">
             <a href="#contactus" className="footer-content-links"> Frequently Asked Questions </a>
            </ListGroup.Item>
            <ListGroup.Item className="bg-none px-0 text-white">
              <a href="#contactus" className="footer-content-links">Courses Available </a></ListGroup.Item>
            <ListGroup.Item className="bg-none px-0 text-white">
              <a href="#contactus" className="footer-content-links"> Contact </a></ListGroup.Item>
          </ListGroup>

        </Col>
        <Col md={6} lg={3}>
          <h5 className="mb-3 footer-links">Links</h5>
          <ListGroup variant="flush" className="list-items">
            <ListGroup.Item className="bg-none px-0 text-white">
             <a href="#contactus" className="footer-content-links"> Frequently Asked Questions</a>
            </ListGroup.Item>
            <ListGroup.Item className="bg-none px-0 text-white">
              <a href="#contactus" className="footer-content-links">Courses Available</a></ListGroup.Item>
            <ListGroup.Item className="bg-none px-0 text-white">
              <a href="#contactus" className="footer-content-links"> Contact </a></ListGroup.Item>
          </ListGroup>
        </Col>

      </Row>
      <div className="text-center mt-2 text-white p-3">
        © 2023 Copyright: Acadeasy.com
      </div>
    </footer>
  );
}

export default FooterBar;
