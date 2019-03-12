import React from "react";
import Nav from "../../components/Nav";
import Typography from "@material-ui/core/Typography";
import AboutLogos from "../../components/AboutLogos";
import { Col, Row, Container } from "../../components/Grid";
import "./About.css";

const About = () => (
  <div>
    <Container fluid>
      <Nav />
      <Row>
        <Col size="xl-3 lg-4 md-5 sm-12">
          <div className="center-align">
            <Row>
              <div>
                <img
                  src=""
                  alt="Collin"
                  className="myImg"
                />
              </div>
            </Row>
          </div>
        </Col>
        <Col size="xl-9 lg-8 md-7 sm-12">
          <Row>
            <Typography
              variant="h5"
              gutterBottom
              className="flow-text line-height">

              Biography goes here

            </Typography>
          </Row>
        </Col>
      </Row>
      <Row>
        <Typography variant="h5" gutterBottom>
          More info goes here
        </Typography>
      </Row>
      <Row>
        <AboutLogos />
      </Row>
    </Container>
  </div>
);

export default About;
