import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import "../css/footer.css";

function FooterBar() {
  return (
    // fixed-bottom - add this to fix it in the bottom
    <footer className=" p-3 footer-body">
      <Row>
        <Col md={12} lg={6}>
          <h5 className="mb-3 text-white">Acadezy</h5>
          <p className="text-white">
          EdTech, short for Educational Technology, harnesses digital tools and platforms to enhance teaching, learning, and skill development.
           It encompasses diverse resources, from interactive apps to online courses, revolutionizing education worldwide.
          </p>
        </Col>
        <Col md={6} lg={3}>
          <h5 className="mb-3 text-white">Links</h5>
          <ListGroup variant="flush">
            <ListGroup.Item className="bg-none px-0 text-white">
              Frequently Asked Questions
            </ListGroup.Item>
            <ListGroup.Item className="bg-none px-0 text-white">Courses Available</ListGroup.Item>
            <ListGroup.Item className="bg-none px-0 text-white">Contact</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <div className="text-center mt-2 text-white p-3">
        © 2023 Copyright: Acadezy.com
      </div>
    </footer>
  );
}

export default FooterBar;
