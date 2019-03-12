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
                  src="./images/profile.jpg"
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

              Hello, My name is Collin Chew and I am a full stack developer. I received my education and training from UC Davis. I am currently residing in northern California but I love to travel.

            </Typography>
          </Row>
        </Col>
      </Row>
      <Row>
        <Typography variant="h5" gutterBottom>

        I am a very hands on and creative person. I enjoy working with computers almost as much as I like building them, including a few Intel and PC Magazine award winning designs. My passion for computers has eventually brought me to coding. I enjoy making new things. As an eagle scout, I learned the rewarding aspect to making something easier or better for someone that needs it. In a world where the future is dictated by technology and we claim there is an application for everything, I feel my ability to code will make a difference.

        I am looking forward to what I can create or help others implement their great ideas. If you have a need for my skills or aspirations, feel free to contact me. I look forward to working with new people as well as learning new technologies.

        </Typography>
      </Row>
      <Row>
        <AboutLogos />
      </Row>
    </Container>
  </div>
);

export default About;
