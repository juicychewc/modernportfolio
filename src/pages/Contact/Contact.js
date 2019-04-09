import React from "react";
import Nav from "../../components/Nav";
import { Col, Row, Container } from "../../components/Grid";
// import Typography from "@material-ui/core/Typography";
import "./Contact.css";

const Contact = () => (
  <div>
    <Container fluid>
      <Nav />
      <Row>
        <Col size="lg-5 md-5 sm-12">
          <Row>
            <img
              src="./images/github-logo.svg"
              alt="Github Logo"
              className="logoSize marRightMore marLeft"
            />
            <a
              href="https://github.com/juicychewc"
              target="_blank"
              rel="noreferrer noopener"
              className="fontSize"
            >
              Github
            </a>
          </Row>
          <Row>
            <img
              src="./images/linkedin-logo.svg"
              alt="LinkedIn Logo"
              className="logoSize marRightMore marLeft"
            />
            <a
              href="https://www.linkedin.com/in/collin-chew"
              target="_blank"
              rel="noreferrer noopener"
              className="fontSize"
            >
              LinkedIn
            </a>
          </Row>
          <Row>
            <i className="material-icons medium marRight">mail</i>
            <a href="mailto:collin.chew.7188@gmail.com" className="fontSize">
              Email
            </a>
          </Row>
        </Col>

        <Col size="lg-7 md-7 sm-12">
          <div className="hideResume">
            <embed
              src="./images/resume.pdf"
              type="application/pdf"
              className="pdf"
            />
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Contact;
