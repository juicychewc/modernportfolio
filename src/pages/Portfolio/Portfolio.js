import React from "react";
import Nav from "../../components/Nav";
import { Col, Row, Container } from "../../components/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import "./Portfolio.css";

class Portfolio extends React.Component {
  state = {

  };


  render() {
    return (
      <Container fluid>
        <Nav />
        <Row>
          <Typography variant="h4" gutterBottom className="portSmallerFont">
          Some text
          </Typography>
        </Row>
        <Row>
          <Typography variant="h4" gutterBottom>
            Projects
          </Typography>
        </Row>
        <Row>
          <Col size="lg-5 md-5 sm-12 marginBottom">

          </Col>
        </Row>
      </Container>
    );
  }
}

export default Portfolio;
